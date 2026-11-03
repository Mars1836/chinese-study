import React from 'react';
import { Volume2, Bell, Gauge, ChevronDown, Layers, BookOpen, Sparkles, Keyboard } from 'lucide-react';
import { LessonSummary } from '../data/lessons';
import { playlistSections } from '../data/thematicTopics';

interface Props {
  lessons: LessonSummary[];
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  currentSectionId: string;
  onSelectSection: (sectionId: string) => void;
  mainMode: 'lessons' | 'thematic';
  onSelectMainMode: (mode: 'lessons' | 'thematic') => void;
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
  currentSectionId,
  onSelectSection,
  mainMode,
  onSelectMainMode,
  hasChineseVoice,
  chineseVoiceName,
  rate,
  onToggleRate,
  onTestSpeaker,
  onSpeak
}) => {
  // Filter lessons based on current section
  const currentSection = playlistSections.find(s => s.id === currentSectionId) || playlistSections[0];
  const sectionLessons = lessons.filter(l => currentSection.lessonIds.includes(l.id));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Logo & Section/Playlist Switcher */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cinnabar-600 to-cinnabar-800 flex items-center justify-center text-white shadow-md shadow-cinnabar-600/20 shrink-0">
              <span className="hanzi-font text-2xl font-bold">汉</span>
            </div>

            <div>
              {/* Top mode / Playlist pills */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Playlist / Section Selector */}
                <div className="relative inline-flex items-center">
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xs">
                    <Layers size={12} className="text-amber-400" />
                    <select
                      value={currentSectionId}
                      onChange={(e) => onSelectSection(e.target.value)}
                      className="appearance-none bg-transparent text-white text-xs font-bold pr-4 cursor-pointer focus:outline-none"
                    >
                      {playlistSections.map(s => (
                        <option key={s.id} value={s.id} className="text-slate-900">
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={11} className="text-slate-300 pointer-events-none -ml-2" />
                  </div>
                </div>

                {/* Lesson selector (shown when in lessons mode) */}
                {mainMode === 'lessons' && (
                  <div className="relative inline-block">
                    <select
                      value={currentLessonId}
                      onChange={(e) => onSelectLesson(Number(e.target.value))}
                      className="appearance-none bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold py-0.5 pl-2.5 pr-6 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-cinnabar-500"
                    >
                      {sectionLessons.map(l => (
                        <option key={l.id} value={l.id}>
                          {l.title} ({l.hanzi})
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Title Header */}
              <h1 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
                {mainMode === 'lessons' ? (
                  <span>
                    {currentSection.title} — <span className="hanzi-font text-cinnabar-600">Bài {currentLessonId}</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-indigo-700">
                    <Sparkles size={16} className="text-amber-500" />
                    <span>Kho Chuyên Đề Từ Vựng & Luyện Gõ Tiếng Trung</span>
                  </span>
                )}
              </h1>
            </div>
          </div>

          {/* Mode Tabs: Lessons vs Thematic Hub */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-2xl bg-stone-100 border border-stone-200 shadow-inner">
              <button
                onClick={() => onSelectMainMode('lessons')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition active:scale-95 ${
                  mainMode === 'lessons'
                    ? 'bg-white text-cinnabar-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen size={14} />
                <span>Giáo Trình Theo Bài</span>
              </button>

              <button
                onClick={() => onSelectMainMode('thematic')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition active:scale-95 ${
                  mainMode === 'thematic'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Keyboard size={14} />
                <span>Từ Vựng & Luyện Gõ</span>
                <span className="px-1.5 py-0.2 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                  Mới
                </span>
              </button>
            </div>
          </div>

          {/* Audio Engine Controls & Diagnostics */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-100/90 p-1.5 rounded-2xl border border-stone-200">
            {/* Voice Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-semibold shadow-sm border border-stone-200">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${hasChineseVoice ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className="truncate max-w-[150px] sm:max-w-[190px]">
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
              <span className="hidden sm:inline">Thử Loa</span>
            </button>

            {/* Quick Test Audio */}
            <button
              onClick={() => onSpeak('你好', 2)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold shadow-sm transition active:scale-95"
            >
              <Volume2 size={14} />
              <span>"你好"</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
