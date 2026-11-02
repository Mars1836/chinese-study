import React from 'react';
import { Volume2, Music, Play, Timer, Star, Sparkles } from 'lucide-react';
import { ToneContour, ToneRule } from '../types/lesson';

interface Props {
  toneContours: ToneContour[];
  toneRules: ToneRule[];
  onSpeak: (char: string, tone?: number) => void;
  onPlayPitch: (tone: number) => void;
}

export const TonesSection: React.FC<Props> = ({
  toneContours,
  toneRules,
  onSpeak,
  onPlayPitch
}) => {
  const playFourTonesSequence = () => {
    const sequence = [
      { char: '妈', tone: 1 },
      { char: '麻', tone: 2 },
      { char: '马', tone: 3 },
      { char: '骂', tone: 4 }
    ];
    sequence.forEach((item, idx) => {
      setTimeout(() => {
        onSpeak(item.char, item.tone);
      }, idx * 1100);
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 4 Main Tones Grid */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cinnabar-600">Phần 2 • Hệ thống Thanh Điệu Tiếng Trung</span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">4 Thanh Điệu Chính (Biểu Đồ 5 Bậc Cao Độ)</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Bấm <strong>"Phát âm"</strong> để nghe chữ Hán mẫu, hoặc bấm <strong>"Cao độ"</strong> để nghe đường nét âm thanh tổng hợp.
            </p>
          </div>
          <button
            onClick={playFourTonesSequence}
            className="px-4 py-2.5 rounded-2xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition active:scale-95"
          >
            <Play size={15} />
            <span>Nghe 4 thanh liên tiếp: mā → má → mǎ → mà</span>
          </button>
        </div>

        {/* 4 Tone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {toneContours.map((t) => (
            <div
              key={t.toneNumber}
              className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4 flex flex-col justify-between hover:border-cinnabar-300 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-cinnabar-100 text-cinnabar-700 font-extrabold text-xs">
                    Thanh {t.toneNumber} • Bậc {t.pitchCode}
                  </span>
                  <span className="text-xl font-black text-cinnabar-600">{t.mark}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>

                {/* SVG Visual Contour */}
                <div className="my-3 bg-white p-2.5 rounded-xl border border-stone-200/80">
                  <svg viewBox="0 0 160 65" className="w-full h-14">
                    <line x1="20" y1="12" x2="150" y2="12" stroke="#e2e8f0" strokeDasharray="3,3" />
                    <line x1="20" y1="32" x2="150" y2="32" stroke="#e2e8f0" strokeDasharray="3,3" />
                    <line x1="20" y1="52" x2="150" y2="52" stroke="#e2e8f0" strokeDasharray="3,3" />
                    <text x="4" y="16" fontSize="9" fill="#64748b" fontWeight="bold">5</text>
                    <text x="4" y="35" fontSize="9" fill="#64748b">3</text>
                    <text x="4" y="55" fontSize="9" fill="#64748b">1</text>

                    {t.toneNumber === 1 && (
                      <path d="M 28 12 L 140 12" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none" />
                    )}
                    {t.toneNumber === 2 && (
                      <path d="M 28 34 L 140 12" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" />
                    )}
                    {t.toneNumber === 3 && (
                      <path d="M 28 42 Q 72 58 140 20" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" fill="none" />
                    )}
                    {t.toneNumber === 4 && (
                      <path d="M 28 12 L 135 52" stroke="#d97706" strokeWidth="4" strokeLinecap="round" fill="none" />
                    )}
                  </svg>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/80 flex gap-2">
                <button
                  onClick={() => onSpeak(t.exampleHanzi, t.toneNumber)}
                  className="flex-1 py-2 px-2.5 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95"
                >
                  <Volume2 size={13} />
                  <span>{t.examplePinyin} ({t.exampleHanzi})</span>
                </button>
                <button
                  onClick={() => onPlayPitch(t.toneNumber)}
                  className="py-2 px-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center gap-1 transition"
                  title="Nghe cao độ tổng hợp"
                >
                  <Music size={13} />
                  <span>Cao độ</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spotlight Section: Mốc 01:00:38 - 4 Quy Tắc Biến Điệu */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-red-50 rounded-3xl p-5 sm:p-7 border-2 border-amber-400 shadow-md space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-amber-200 pb-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cinnabar-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs">
                  ĐIỂM NHẤN MỐC 01:00:38 (t=3638s)
                </span>
                <span className="text-xs font-bold text-cinnabar-700">Trọng tâm ngữ âm Bài 1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                4 Quy Tắc Biến Điệu Quan Trọng (Thanh 3, Nửa Thanh 3 & Chữ 不)
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {toneRules.map((rule) => (
            <div key={rule.ruleNum} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-cinnabar-100 text-cinnabar-800 font-extrabold text-xs">
                  Quy tắc {rule.ruleNum}
                </span>
                <span className="font-mono font-bold text-xs text-cinnabar-600 bg-stone-100 px-2 py-0.5 rounded">
                  {rule.formula}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">{rule.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{rule.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {rule.examples.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => onSpeak(ex.hanzi)}
                    className="p-3 rounded-xl bg-stone-50 hover:bg-cinnabar-50 border border-stone-200 hover:border-cinnabar-300 text-left transition flex items-center justify-between group active:scale-95"
                  >
                    <div>
                      <div className="hanzi-font text-base font-bold text-slate-900">{ex.hanzi}</div>
                      <div className="text-[11px] text-slate-500">Viết: <code>{ex.writtenPinyin}</code></div>
                      <div className="text-xs font-bold text-cinnabar-600">{ex.readPinyin}</div>
                      <div className="text-[10px] text-slate-400">{ex.meaning}</div>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-cinnabar-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                      <Volume2 size={13} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
