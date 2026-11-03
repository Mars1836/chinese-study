import React from 'react';
import { BookOpen, Volume2 } from 'lucide-react';
import { ThematicWord } from '../../types/thematic';
import { AudioButton } from '../common/AudioButton';

interface ThematicVocabListProps {
  words: ThematicWord[];
  topicTitle: string;
  onSpeak: (text: string, tone?: number) => void;
  onOpenWriteModal: (word: ThematicWord) => void;
}

export const ThematicVocabList: React.FC<ThematicVocabListProps> = ({
  words,
  topicTitle,
  onSpeak,
  onOpenWriteModal
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <BookOpen size={18} className="text-indigo-600" />
          <span>{words.length} Từ Vựng Chủ Đề: {topicTitle}</span>
        </h3>
        <span className="text-xs text-slate-500">Bấm ô chữ Hán hoặc nút "Tập viết" để mở bảng vẽ 米字格</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {words.map((w) => (
          <div
            key={w.id}
            className="p-5 rounded-3xl bg-white border border-stone-200 hover:border-indigo-300 shadow-sm transition flex flex-col justify-between space-y-3.5"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Big Hanzi Box (Click to practice writing) */}
                  <div
                    onClick={() => onOpenWriteModal(w)}
                    className="min-w-[65px] h-16 px-3 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex items-center justify-center cursor-pointer hover:bg-indigo-100 transition shadow-2xs group"
                    title="Bấm để tập viết chữ này trên bảng Mễ Tự 格"
                  >
                    <span className="hanzi-font text-3xl font-black text-indigo-900 group-hover:scale-105 transition leading-none">
                      {w.hanzi}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-extrabold text-indigo-700">{w.pinyin}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-stone-100 text-slate-600 font-medium">
                        {w.hanViet}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{w.meaning}</div>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded">
                      {w.type}
                    </span>
                  </div>
                </div>

                <AudioButton
                  text={w.hanzi}
                  onSpeak={onSpeak}
                  title="Phát âm từ này"
                  size="md"
                />
              </div>

              {/* Writing Guide / Memory hint */}
              {w.writingGuide && (
                <div className="mt-3 text-xs text-slate-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                  ✍️ <strong>Cấu tạo & Bút thuận:</strong> {w.writingGuide}
                </div>
              )}

              {/* Example Sentence */}
              {w.exampleSentence && (
                <div className="mt-2.5 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/70 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="hanzi-font font-bold text-slate-900 text-sm">{w.exampleSentence}</span>
                    <button
                      onClick={() => onSpeak(w.exampleSentence)}
                      className="text-indigo-600 hover:text-indigo-800 p-1 rounded"
                      title="Phát âm ví dụ"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                  <div className="text-indigo-700 font-medium">{w.examplePinyin}</div>
                  <div className="text-slate-600">{w.exampleVn}</div>
                </div>
              )}
            </div>

            {/* Bottom Action: Practice Writing in Modal */}
            <button
              onClick={() => onOpenWriteModal(w)}
              className="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-indigo-600 hover:text-white text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95"
            >
              <BookOpen size={13} />
              <span>Luyện Viết Chữ "{w.hanzi}" (Ô Mễ Tự 格)</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
