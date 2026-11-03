import React, { useState, useRef, useEffect } from 'react';
import {
  Volume2,
  Bell,
  Gauge,
  ChevronDown,
  Layers,
  BookOpen,
  Sparkles,
  Keyboard,
  Check,
  X,
  ExternalLink
} from 'lucide-react';
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
  const [isCurriculumOpen, setIsCurriculumOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Filter lessons based on current section
  const currentSection = playlistSections.find(s => s.id === currentSectionId) || playlistSections[0];
  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCurriculumOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          
          {/* Logo & Custom Curriculum Selector */}
          <div className="flex items-center gap-3">
            <div 
              onClick={() => onSelectMainMode('lessons')}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cinnabar-600 to-cinnabar-800 flex items-center justify-center text-white shadow-md shadow-cinnabar-600/20 shrink-0 cursor-pointer hover:scale-105 transition active:scale-95"
              title="Trang chủ"
            >
              <span className="hanzi-font text-2xl font-bold">汉</span>
            </div>

            <div className="relative" ref={dropdownRef}>
              {/* Custom Curriculum & Lesson Trigger Button (Replaces ugly HTML <select>) */}
              <button
                onClick={() => setIsCurriculumOpen(!isCurriculumOpen)}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm border border-slate-700/60 transition group active:scale-95 text-left"
                title="Bấm để chọn giáo trình và danh sách bài học"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <div className="flex flex-col">
                  <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>{currentSection.title}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-300">{currentSection.badge}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black flex items-center gap-1.5">
                    <span className="hanzi-font text-amber-400 text-base">{currentLesson.hanzi}</span>
                    <span className="truncate max-w-[140px] sm:max-w-[200px] text-white">
                      {currentLesson.title}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-slate-400 group-hover:text-white transition-transform duration-200 shrink-0 ${
                    isCurriculumOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* High-End Floating Curriculum & Lesson Picker Dropdown */}
              {isCurriculumOpen && (
                <div className="absolute left-0 top-full mt-2 w-[340px] sm:w-[460px] bg-white rounded-3xl shadow-2xl border border-stone-200 p-4 sm:p-5 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-3">
                    <div>
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                        <Layers size={16} className="text-cinnabar-600" />
                        <span>Lộ Trình Giáo Trình Hán Ngữ</span>
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Chọn tập giáo trình và bài học tương tác số hóa
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCurriculumOpen(false)}
                      className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-500 transition"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  {/* Section Switcher Tabs */}
                  <div className="space-y-1.5 mb-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Chọn Tập Giáo Trình:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {playlistSections.map((sec) => {
                        const isSecSelected = sec.id === currentSectionId;
                        return (
                          <button
                            key={sec.id}
                            onClick={() => {
                              onSelectSection(sec.id);
                              onSelectMainMode('lessons');
                            }}
                            className={`p-2.5 rounded-2xl text-left border transition ${
                              isSecSelected
                                ? 'bg-indigo-50/80 border-indigo-400 ring-1 ring-indigo-300'
                                : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-slate-900">{sec.title}</span>
                              {isSecSelected && <Check size={12} className="text-indigo-600" />}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5 truncate">{sec.subtitle}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Lessons List in Current Section */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Danh sách bài học trong {currentSection.title}:
                    </div>

                    <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                      {lessons
                        .filter(l => currentSection.lessonIds.includes(l.id))
                        .map((les) => {
                          const isCurrent = les.id === currentLessonId;
                          return (
                            <button
                              key={les.id}
                              onClick={() => {
                                onSelectLesson(les.id);
                                onSelectMainMode('lessons');
                                setIsCurriculumOpen(false);
                              }}
                              className={`w-full p-2.5 rounded-2xl border text-left transition flex items-center justify-between gap-3 ${
                                isCurrent
                                  ? 'bg-gradient-to-r from-cinnabar-50 to-orange-50 border-cinnabar-400 ring-2 ring-cinnabar-200 shadow-xs'
                                  : 'bg-white hover:bg-stone-50 border-stone-200'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                                  isCurrent ? 'bg-cinnabar-600 text-white' : 'bg-stone-100 text-slate-700'
                                }`}>
                                  {les.id < 10 ? `0${les.id}` : les.id}
                                </span>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="hanzi-font text-base font-black text-slate-900">
                                      {les.hanzi}
                                    </span>
                                    <span className="text-xs font-bold text-slate-700 truncate">
                                      {les.title}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {isCurrent ? (
                                <span className="px-2 py-0.5 rounded-full bg-cinnabar-600 text-white text-[10px] font-black shrink-0 flex items-center gap-1">
                                  <Check size={10} />
                                  <span>Đang học</span>
                                </span>
                              ) : (
                                <span className="text-[11px] text-slate-400 font-semibold shrink-0">
                                  Chọn bài
                                </span>
                              )}
                            </button>
                          );
                        })}
                    </div>
                  </div>

                  {/* Fast Jump to Thematic */}
                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <button
                      onClick={() => {
                        onSelectMainMode('thematic');
                        setIsCurriculumOpen(false);
                      }}
                      className="w-full py-2.5 px-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
                    >
                      <Keyboard size={14} className="text-amber-300" />
                      <span>Chuyển sang Kho Chuyên Đề Từ Vựng & Luyện Gõ</span>
                    </button>
                  </div>
                </div>
              )}
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
              <span className="truncate max-w-[140px] sm:max-w-[180px]">
                {hasChineseVoice ? `Giọng: ${chineseVoiceName || 'zh-CN'}` : 'Gói cao độ Web Audio'}
              </span>
            </div>

            {/* Speed Toggle */}
            <button
              onClick={onToggleRate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-800 border border-stone-200 shadow-sm text-xs font-bold transition active:scale-95"
              title="Chuyển đổi tốc độ phát âm (1.0x / 0.65x)"
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
              title="Phát âm thử chữ '你好'"
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
