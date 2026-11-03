import React from 'react';
import { BookOpen, Keyboard, Bookmark } from 'lucide-react';
import { LessonSummary } from '../../data/lessons';
import { playlistSections } from '../../data/thematic';
import { CurriculumDropdown } from './CurriculumDropdown';
import { AudioControls } from './AudioControls';
import { useBucket } from '../../hooks/useBucket';

interface Props {
  lessons: LessonSummary[];
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  currentSectionId: string;
  onSelectSection: (sectionId: string) => void;
  mainMode: 'lessons' | 'thematic' | 'bucket';
  onSelectMainMode: (mode: 'lessons' | 'thematic' | 'bucket') => void;
  hasChineseVoice: boolean;
  chineseVoiceName: string;
  availableVoices: SpeechSynthesisVoice[];
  selectedVoiceURI: string;
  onSelectVoice: (voiceURI: string) => void;
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
  availableVoices,
  selectedVoiceURI,
  onSelectVoice,
  rate,
  onToggleRate,
  onTestSpeaker,
  onSpeak
}) => {
  const currentSection = playlistSections.find(s => s.id === currentSectionId) || playlistSections[0];
  const { bucketCount } = useBucket();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          
          {/* Logo & Modular Curriculum Picker Dropdown */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div
              onClick={() => onSelectMainMode('lessons')}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-cinnabar-600 to-cinnabar-700 flex items-center justify-center text-white shadow-xs shrink-0 cursor-pointer hover:opacity-90 transition active:scale-95"
              title="Trang chủ Giáo trình"
            >
              <span className="hanzi-font text-xl font-bold">汉</span>
            </div>

            <CurriculumDropdown
              lessons={lessons}
              currentLessonId={currentLessonId}
              currentSection={currentSection}
              playlistSections={playlistSections}
              onSelectLesson={onSelectLesson}
              onSelectSection={onSelectSection}
              onSelectMainMode={onSelectMainMode}
            />
          </div>

          {/* Mode Switcher Tabs: Sleek Segmented Control */}
          <div className="flex items-center justify-center shrink-0">
            <div className="inline-flex items-center p-1 rounded-2xl bg-stone-100 border border-stone-200/90 shadow-inner">
              <button
                onClick={() => onSelectMainMode('lessons')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 transition active:scale-95 ${
                  mainMode === 'lessons'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
              >
                <BookOpen size={14} className={mainMode === 'lessons' ? 'text-cinnabar-600' : 'text-slate-500'} />
                <span>Giáo Trình</span>
              </button>

              <button
                onClick={() => onSelectMainMode('thematic')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 transition active:scale-95 ${
                  mainMode === 'thematic'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
              >
                <Keyboard size={14} className={mainMode === 'thematic' ? 'text-indigo-600' : 'text-slate-500'} />
                <span>Luyện Gõ</span>
              </button>

              <button
                onClick={() => onSelectMainMode('bucket')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 transition active:scale-95 ${
                  mainMode === 'bucket'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
                title="Hộp từ vựng ôn tập cá nhân & tạo bài kiểm tra"
              >
                <Bookmark size={14} className={mainMode === 'bucket' ? 'text-amber-600' : 'text-slate-500'} />
                <span>Giỏ Ôn Tập</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black leading-none shrink-0 ${
                  mainMode === 'bucket'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-stone-200/80 text-slate-600'
                }`}>
                  {bucketCount}
                </span>
              </button>
            </div>
          </div>

          {/* Audio Engine Controls & Diagnostics */}
          <AudioControls
            hasChineseVoice={hasChineseVoice}
            chineseVoiceName={chineseVoiceName}
            availableVoices={availableVoices}
            selectedVoiceURI={selectedVoiceURI}
            onSelectVoice={onSelectVoice}
            rate={rate}
            onToggleRate={onToggleRate}
            onTestSpeaker={onTestSpeaker}
            onSpeak={onSpeak}
          />

        </div>
      </div>
    </header>
  );
};
