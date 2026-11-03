import { allLessonsData, lessonsList } from './lessons';
import { thematicTopics } from './thematic';
import { BucketWord } from '../types/bucket';

/**
 * Aggregates all words from both curriculum lessons and thematic topics
 * for distractor generation, search, and bulk addition into the study bucket.
 */
export function getAllAvailableWords(): BucketWord[] {
  const result: BucketWord[] = [];
  const seenHanzi = new Set<string>();

  // 1. Collect from Lesson Curriculum
  lessonsList.forEach(summary => {
    const lesson = allLessonsData[summary.id];
    if (lesson && lesson.vocab) {
      lesson.vocab.forEach(v => {
        if (!seenHanzi.has(v.hanzi)) {
          seenHanzi.add(v.hanzi);
          result.push({
            id: `lesson_${summary.id}_${v.id}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin,
            hanViet: v.hanViet,
            meaning: v.meaning,
            type: v.type,
            source: summary.title,
            exampleHanzi: v.exampleHanzi,
            examplePinyin: v.examplePinyin,
            exampleMeaning: v.exampleMeaning,
            addedAt: Date.now()
          });
        }
      });
    }
  });

  // 2. Collect from Thematic Topics
  thematicTopics.forEach(topic => {
    topic.words.forEach(w => {
      if (!seenHanzi.has(w.hanzi)) {
        seenHanzi.add(w.hanzi);
        result.push({
          id: `thematic_${topic.id}_${w.id}`,
          hanzi: w.hanzi,
          pinyin: w.pinyin,
          hanViet: w.hanViet,
          meaning: w.meaning,
          type: w.type,
          source: topic.title,
          exampleHanzi: w.exampleSentence,
          examplePinyin: w.examplePinyin,
          exampleMeaning: w.exampleVn,
          addedAt: Date.now()
        });
      }
    });
  });

  return result;
}
