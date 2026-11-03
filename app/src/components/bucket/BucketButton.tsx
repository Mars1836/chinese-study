import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useBucket } from '../../hooks/useBucket';

interface BucketButtonProps {
  hanzi: string;
  pinyin: string;
  meaning: string;
  hanViet?: string;
  type?: string;
  source: string;
  exampleHanzi?: string;
  examplePinyin?: string;
  exampleMeaning?: string;
  compact?: boolean;
}

export const BucketButton: React.FC<BucketButtonProps> = ({
  hanzi,
  pinyin,
  meaning,
  hanViet,
  type,
  source,
  exampleHanzi,
  examplePinyin,
  exampleMeaning,
  compact = false
}) => {
  const { isInBucket, toggleInBucket } = useBucket();
  const saved = isInBucket(hanzi);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleInBucket({
      id: `w_${hanzi}`,
      hanzi,
      pinyin,
      meaning,
      hanViet,
      type,
      source,
      exampleHanzi,
      examplePinyin,
      exampleMeaning
    });
  };

  if (compact) {
    return (
      <button
        onClick={handleClick}
        className={`p-2 rounded-xl transition active:scale-90 ${
          saved
            ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 ring-1 ring-amber-300'
            : 'bg-stone-100 hover:bg-stone-200 text-slate-500 hover:text-slate-800'
        }`}
        title={saved ? 'Đã lưu trong giỏ ôn tập. Bấm để bỏ lưu' : 'Bấm để thêm vào giỏ ôn tập cá nhân'}
      >
        {saved ? <BookmarkCheck size={15} className="text-amber-600" /> : <Bookmark size={15} />}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 shadow-2xs ${
        saved
          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-xs ring-1 ring-amber-300'
          : 'bg-stone-100 hover:bg-stone-200 text-slate-700 border border-stone-200'
      }`}
      title={saved ? 'Đã có trong giỏ ôn tập. Bấm để bỏ lưu' : 'Lưu từ này vào giỏ ôn tập cá nhân'}
    >
      {saved ? <BookmarkCheck size={14} className="text-slate-950" /> : <Bookmark size={14} className="text-amber-600" />}
      <span>{saved ? 'Đã trong giỏ' : '+ Giỏ ôn tập'}</span>
    </button>
  );
};
