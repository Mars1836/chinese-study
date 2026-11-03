import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Layers, Check, X, Keyboard } from 'lucide-react';
import { LessonSummary } from '../../data/lessons';
import { PlaylistSection } from '../../types/thematic';

interface CurriculumDropdownProps {
  lessons: LessonSummary[];
  currentLessonId: number;
  currentSection: PlaylistSection;
  playlistSections: PlaylistSection[];
  onSelectLesson: (id: number) => void;
  onSelectSection: (sectionId: string) => void;
  onSelectMainMode: (mode: 'lessons' | 'thematic') => void;
}

export const CurriculumDropdown: React.FC<CurriculumDropdownProps> = ({
  lessons,
  currentLessonId,
  currentSection,
  playlistSections,
  onSelectLesson,
  onSelectSection,
  onSelectMainMode
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
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
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
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
              onClick={() => setIsOpen(false)}
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
                const isSecSelected = sec.id === currentSection.id;
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
                        setIsOpen(false);
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

          {/* Quick Jump to Thematic */}
          <div className="mt-4 pt-3 border-t border-stone-100">
            <button
              onClick={() => {
                onSelectMainMode('thematic');
                setIsOpen(false);
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
  );
};
