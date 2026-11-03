import { useState, useEffect, useCallback } from 'react';
import { BucketWord } from '../types/bucket';

const STORAGE_KEY = 'chinese_study_bucket_v1';
const BUCKET_EVENT = 'chinese_study_bucket_updated';

export function useBucket() {
  const [bucket, setBucket] = useState<BucketWord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load bucket from localStorage', e);
    }
    return [];
  });

  // Keep state in sync across components/tabs
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          setBucket(JSON.parse(saved));
        } else {
          setBucket([]);
        }
      } catch (e) {
        console.warn('Failed to parse updated bucket', e);
      }
    };

    window.addEventListener(BUCKET_EVENT, handleStorageChange);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener(BUCKET_EVENT, handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const saveBucket = useCallback((newBucket: BucketWord[]) => {
    setBucket(newBucket);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newBucket));
      window.dispatchEvent(new Event(BUCKET_EVENT));
    } catch (e) {
      console.warn('Failed to save bucket to localStorage', e);
    }
  }, []);

  const isInBucket = useCallback((hanzi: string) => {
    return bucket.some(item => item.hanzi === hanzi);
  }, [bucket]);

  const addToBucket = useCallback((word: Omit<BucketWord, 'addedAt'>) => {
    if (bucket.some(item => item.hanzi === word.hanzi)) return;
    const newWord: BucketWord = {
      ...word,
      addedAt: Date.now()
    };
    const updated = [newWord, ...bucket];
    saveBucket(updated);
  }, [bucket, saveBucket]);

  const removeFromBucket = useCallback((hanzi: string) => {
    const updated = bucket.filter(item => item.hanzi !== hanzi);
    saveBucket(updated);
  }, [bucket, saveBucket]);

  const toggleInBucket = useCallback((word: Omit<BucketWord, 'addedAt'>) => {
    if (isInBucket(word.hanzi)) {
      removeFromBucket(word.hanzi);
      return false;
    } else {
      addToBucket(word);
      return true;
    }
  }, [isInBucket, removeFromBucket, addToBucket]);

  const addBulkToBucket = useCallback((words: Omit<BucketWord, 'addedAt'>[]) => {
    const existingHanzis = new Set(bucket.map(b => b.hanzi));
    const toAdd: BucketWord[] = [];

    words.forEach(w => {
      if (!existingHanzis.has(w.hanzi)) {
        existingHanzis.add(w.hanzi);
        toAdd.push({
          ...w,
          addedAt: Date.now()
        });
      }
    });

    if (toAdd.length > 0) {
      saveBucket([...toAdd, ...bucket]);
    }
  }, [bucket, saveBucket]);

  const removeBulkFromBucket = useCallback((hanzis: string[]) => {
    const removeSet = new Set(hanzis);
    const updated = bucket.filter(item => !removeSet.has(item.hanzi));
    saveBucket(updated);
  }, [bucket, saveBucket]);

  const clearBucket = useCallback(() => {
    saveBucket([]);
  }, [saveBucket]);

  return {
    bucket,
    bucketCount: bucket.length,
    isInBucket,
    addToBucket,
    removeFromBucket,
    toggleInBucket,
    addBulkToBucket,
    removeBulkFromBucket,
    clearBucket
  };
}
