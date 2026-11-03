import React, { useState } from 'react';
import { Volume2, Search, Sparkles, PenTool, Bookmark } from 'lucide-react';
import { VocabItem } from '../types/lesson';
import { WriteModal } from './WriteModal';
import { BucketButton } from './bucket/BucketButton';
import { useBucket } from '../hooks/useBucket';

interface Props {
  vocab: VocabItem[];
  onSpeak: (char: string) => void;
}

export const VocabSection: React.FC<Props> = ({ vocab, onSpeak }) => {
  const [search, setSearch] = useState<string>('');
  const [activeWritingVocab, setActiveWritingVocab] = useState<VocabItem | null>(null);
  const { addBulkToBucket } = useBucket();

  const filtered = vocab.filter(v =>
    v.hanzi.includes(search) ||
    v.pinyin.toLowerCase().includes(search.toLowerCase()) ||
    v.hanViet.toLowerCase().includes(search.toLowerCase()) ||
    v.meaning.toLowerCase().includes(search.toLowerCase())
  );

  const hasTaComparison = vocab.some(v => v.hanzi === '他') && vocab.some(v => v.hanzi === '她');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header & Search */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cinnabar-600">Phần 4 • Từ Vựng & Chiết Tự</span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
              Từ Mới ({vocab.length} từ) + Luyện Viết & Cách Nhớ Nhanh Qua Bộ Thủ
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Bấm nút "Luyện viết" ở bất kỳ từ nào để mở bảng vẽ 米字格 tập viết từng nét chữ.</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                const toAdd = vocab.map(v => ({
                  id: `lesson_vocab_${v.id}`,
                  hanzi: v.hanzi,
                  pinyin: v.pinyin,
                  meaning: v.meaning,
                  hanViet: v.hanViet,
                  type: v.type,
                  source: `Từ mới Bài học`,
                  exampleHanzi: v.exampleHanzi,
                  examplePinyin: v.examplePinyin,
                  exampleMeaning: v.exampleMeaning
                }));
                addBulkToBucket(toAdd);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition active:scale-95 shadow-2xs"
              title="Thêm tất cả các từ trong bài học này vào giỏ ôn tập"
            >
              <Bookmark size={14} className="text-amber-600" />
              <span>+ Thêm cả {vocab.length} từ vào giỏ</span>
            </button>

            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm chữ Hán, Pinyin, nghĩa..."
                className="pl-9 pr-4 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cinnabar-500 focus:bg-white w-56 sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Comparison Banner: 他 vs 她 (Chỉ hiện khi bài học có 他 và 她) */}
        {hasTaComparison && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-rose-50 border border-indigo-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">Mẹo phân biệt đồng âm khác chữ</div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                <span className="hanzi-font text-indigo-700 font-extrabold">他 (tā - Anh ấy)</span> và <span className="hanzi-font text-rose-600 font-extrabold">她 (tā - Cô ấy)</span> đều đọc là <code>tā (Thanh 1)</code>!
              </h4>
              <p className="text-xs text-slate-600">
                Chỉ nam giới thì dùng <strong>Bộ Nhân đứng 亻 (他)</strong>, chỉ nữ giới thì đổi sang <strong>Bộ Nữ 女 (她)</strong>.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => onSpeak('他')}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Volume2 size={13} />
                <span>他 (tā - Nam)</span>
              </button>
              <button
                onClick={() => onSpeak('她')}
                className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Volume2 size={13} />
                <span>她 (tā - Nữ)</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Vocab Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((v) => (
          <div
            key={v.id}
            className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm hover:border-cinnabar-300 transition flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Header: Char + Pinyin + Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Chữ Hán Box - Bấm vào để mở modal tập viết */}
                  <div
                    onClick={() => setActiveWritingVocab(v)}
                    className="group relative min-w-[70px] max-w-[150px] h-16 px-3.5 rounded-2xl bg-stone-50 border-2 border-cinnabar-200 flex items-center justify-center cursor-pointer hover:bg-cinnabar-50 active:scale-95 transition shrink-0 shadow-sm"
                    title="Bấm để mở bảng tập viết 米字格"
                  >
                    <span className={`hanzi-font font-black text-slate-900 group-hover:text-cinnabar-700 whitespace-nowrap tracking-wide leading-none transition ${
                      v.hanzi.length > 2 ? 'text-2xl' : v.hanzi.length === 2 ? 'text-3xl' : 'text-4xl'
                    }`}>
                      {v.hanzi}
                    </span>
                    <span className="absolute -bottom-2 -right-1 opacity-0 group-hover:opacity-100 transition px-1.5 py-0.5 rounded-md bg-amber-400 text-[10px] font-extrabold text-slate-950 shadow-xs flex items-center gap-0.5">
                      <PenTool size={9} /> Viết
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-stone-100 text-slate-600 shrink-0">#{v.id}</span>
                      <span className="text-base sm:text-lg font-extrabold text-cinnabar-600 truncate">{v.pinyin}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 shrink-0">HV: {v.hanViet}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{v.meaning}</h4>
                    <span className="text-[11px] text-slate-400 font-medium">{v.type}</span>
                  </div>
                </div>

                {/* Actions: Thêm vào giỏ + Luyện viết + Phát âm */}
                <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0 flex-wrap">
                  <BucketButton
                    hanzi={v.hanzi}
                    pinyin={v.pinyin}
                    meaning={v.meaning}
                    hanViet={v.hanViet}
                    type={v.type}
                    source={`Bài học: Từ #${v.id}`}
                    exampleHanzi={v.exampleHanzi}
                    examplePinyin={v.examplePinyin}
                    exampleMeaning={v.exampleMeaning}
                  />

                  <button
                    onClick={() => setActiveWritingVocab(v)}
                    className="px-3 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition"
                    title="Mở bảng vẽ 米字格 để luyện viết chữ này"
                  >
                    <PenTool size={13} />
                    <span>Luyện viết</span>
                  </button>

                  <button
                    onClick={() => onSpeak(v.hanzi)}
                    className="px-3 py-2 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition"
                  >
                    <Volume2 size={13} />
                    <span>Phát âm</span>
                  </button>
                </div>
              </div>

              {/* Radicals & Mnemonic */}
              <div className="mt-4 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-cinnabar-600" />
                  <span>Chiết tự bộ thủ:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {v.radicals.map((rad, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-stone-200 text-xs shadow-2xs">
                      <strong className="hanzi-font text-cinnabar-600 text-sm">{rad.char || rad.r}</strong>
                      <span className="font-bold text-slate-800">{rad.name}:</span>
                      <span className="text-slate-500">{rad.desc}</span>
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1 italic">
                  💡 {v.mnemonic}
                </p>
              </div>
            </div>

            {/* Example sentence */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
              <div className="text-xs truncate">
                <span className="text-slate-400 font-semibold">Ví dụ: </span>
                <span className="hanzi-font font-bold text-slate-900 text-sm">{v.exampleHanzi}</span>
                <span className="text-indigo-600 font-semibold ml-1">({v.examplePinyin})</span>
                <span className="text-slate-600"> — {v.exampleMeaning}</span>
              </div>
              <button
                onClick={() => onSpeak(v.exampleHanzi)}
                className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-600 text-[11px] font-bold flex items-center gap-1 shrink-0 transition"
                title="Nghe phát âm ví dụ"
              >
                <Volume2 size={11} />
                <span>Nghe</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Writing Modal */}
      <WriteModal
        isOpen={!!activeWritingVocab}
        onClose={() => setActiveWritingVocab(null)}
        vocab={activeWritingVocab}
        onSpeak={onSpeak}
      />
    </div>
  );
};
