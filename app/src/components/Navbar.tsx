import React from 'react';
import { Volume2, Bell, Gauge, Sliders, ChevronDown } from 'lucide-react';
import { LessonSummary } from '../data/lessons';

interface Props {
  lessons: LessonSummary[];
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  hasChineseVoice: boolean;
  chineseVoiceName: string;
  rate: number;
  onToggleRate: () => void;
  onTestSpeaker: () => void;
  onSpeak: (text: string, tone?: number) => void;
}

export const Navbar: React.FC<Props> = ({
  lessons,
  currentLessonId,
  onSelectLesson,
  hasChineseVoice,
  chineseVoiceName,
  rate,
  onToggleRate,
  onTestSpeaker,
  onSpeak
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Logo & Lesson Selector Dropdown */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cinnabar-600 to-cinnabar-800 flex items-center justify-center text-white shadow-md shadow-cinnabar-600/20 shrink-0">
              <span className="hanzi-font text-2xl font-bold">汉</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-cinnabar-100 text-cinnabar-700 rounded-full">
                  Giáo Trình Hán Ngữ
                </span>
                <div className="relative inline-block">
                  <select
                    value={currentLessonId}
                    onChange={(e) => onSelectLesson(Number(e.target.value))}
                    className="appearance-none bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold py-0.5 pl-2.5 pr-6 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-cinnabar-500"
                  >
                    {lessons.map(l => (
                      <option key={l.id} value={l.id}>
                        {l.title} ({l.hanzi})
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                </div>
              </div>
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
                <span>Hán Ngữ 1 — <span className="hanzi-font text-cinnabar-600">Bài {currentLessonId}</span></span>
              </h1>
            </div>
          </div>

          {/* Audio Engine Controls & Diagnostics */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-100/90 p-1.5 rounded-2xl border border-stone-200">
            {/* Voice Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-semibold shadow-sm border border-stone-200">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${hasChineseVoice ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className="truncate max-w-[190px]">
                {hasChineseVoice ? `Đã nhận giọng: ${chineseVoiceName || 'zh-CN'}` : 'Gói cao độ Web Audio'}
              </span>
            </div>

            {/* Speed Toggle */}
            <button
              onClick={onToggleRate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-800 border border-stone-200 shadow-sm text-xs font-bold transition active:scale-95"
              title="Chuyển đổi tốc độ phát âm"
            >
              <Gauge size={14} className="text-cinnabar-600" />
              <span>{rate === 1.0 ? '1.0x' : '0.65x'}</span>
            </button>

            {/* Test Speaker Chime */}
            <button
              onClick={onTestSpeaker}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition active:scale-95"
              title="Phát tiếng chuông kiểm tra loa"
            >
              <Bell size={13} />
              <span>Thử Loa</span>
            </button>

            {/* Quick Test Audio */}
            <button
              onClick={() => onSpeak('你好', 2)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold shadow-sm transition active:scale-95"
            >
              <Volume2 size={14} />
              <span>Nghe "你好"</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
