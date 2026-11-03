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
          <div className="flex items-center gap-3">
            <div
              onClick={() => onSelectMainMode('lessons')}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cinnabar-600 to-cinnabar-800 flex items-center justify-center text-white shadow-md shadow-cinnabar-600/20 shrink-0 cursor-pointer hover:scale-105 transition active:scale-95"
              title="Trang chủ Giáo trình"
            >
              <span className="hanzi-font text-2xl font-bold">汉</span>
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

          {/* Mode Switcher Tabs: Lessons vs Thematic Hub */}
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

              <button
                onClick={() => onSelectMainMode('bucket')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition active:scale-95 ${
                  mainMode === 'bucket'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-xs ring-1 ring-amber-300'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Hộp từ vựng ôn tập cá nhân & tạo bài kiểm tra"
              >
                <Bookmark size={14} className={mainMode === 'bucket' ? 'text-slate-950' : 'text-amber-600'} />
                <span>Giỏ Ôn Tập</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${
                  mainMode === 'bucket' ? 'bg-black/20 text-slate-950' : 'bg-amber-100 text-amber-800'
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
