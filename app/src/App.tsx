import React, { useState } from 'react';
import {
  Mic,
  AudioWaveform,
  PenTool,
  BookOpen,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Clock
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { PinyinSection } from './components/PinyinSection';
import { TonesSection } from './components/TonesSection';
import { HanziSection } from './components/HanziSection';
import { VocabSection } from './components/VocabSection';
import { DialogueQuizSection } from './components/DialogueQuizSection';
import { ThematicSection } from './components/ThematicSection';
import { lessonsList, allLessonsData } from './data/lessons';
import { playlistSections } from './data/thematicTopics';
import { useAudio } from './hooks/useAudio';

type TabKey = 'pinyin' | 'tones' | 'hanzi' | 'vocab' | 'dialogue';

export default function App() {
  const [mainMode, setMainMode] = useState<'lessons' | 'thematic'>('lessons');
  const [currentSectionId, setCurrentSectionId] = useState<string>('section-1');
  const [currentLessonId, setCurrentLessonId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TabKey>('pinyin');

  const {
    speak,
    playPitchContour,
    testSpeaker,
    rate,
    toggleRate,
    hasChineseVoice,
    chineseVoiceName,
    availableVoices,
    selectedVoiceURI,
    selectVoice
  } = useAudio();

  const handleSelectSection = (sectionId: string) => {
    setCurrentSectionId(sectionId);
    setMainMode('lessons');
    const sec = playlistSections.find(s => s.id === sectionId);
    if (sec && sec.lessonIds.length > 0) {
      setCurrentLessonId(sec.lessonIds[0]);
    }
  };

  const handleSelectLesson = (id: number) => {
    setCurrentLessonId(id);
    setMainMode('lessons');
    // Ensure section matches lesson
    const matchingSec = playlistSections.find(s => s.lessonIds.includes(id));
    if (matchingSec) {
      setCurrentSectionId(matchingSec.id);
    }
  };

  const lessonData = allLessonsData[currentLessonId] || allLessonsData[1];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800">
      {/* Top Navigation Bar with Multi-Section & Thematic Switcher */}
      <Navbar
        lessons={lessonsList}
        currentLessonId={currentLessonId}
        onSelectLesson={handleSelectLesson}
        currentSectionId={currentSectionId}
        onSelectSection={handleSelectSection}
        mainMode={mainMode}
        onSelectMainMode={(mode) => setMainMode(mode)}
        hasChineseVoice={hasChineseVoice}
        chineseVoiceName={chineseVoiceName}
        availableVoices={availableVoices}
        selectedVoiceURI={selectedVoiceURI}
        onSelectVoice={selectVoice}
        rate={rate}
        onToggleRate={toggleRate}
        onTestSpeaker={testSpeaker}
        onSpeak={speak}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* MODE 1: THEMATIC TOPICS & TYPING PRACTICE */}
        {mainMode === 'thematic' && (
          <ThematicSection onSpeak={speak} />
        )}

        {/* MODE 2: PLAYLIST / LESSONS CURRICULUM */}
        {mainMode === 'lessons' && (
          <>
            {/* Banner with YouTube Link & Highlight */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cinnabar-900 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none select-none">
                <span className="hanzi-font text-[150px] font-black leading-none">{lessonData.hanziTitle}</span>
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold">
                    <Sparkles size={16} />
                    <span>
                      {currentSectionId === 'section-2' ? 'Giáo Trình Hán Ngữ 2 • Bài Học Chuyên Đề' : 'Giáo Trình Hán Ngữ 1 • Bài Học Số Hóa Tương Tác'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    {lessonData.title} — <span className="hanzi-font text-cinnabar-500">{lessonData.hanziTitle}</span> ({lessonData.pinyinTitle})
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {lessonData.videoDesc}
                  </p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 shrink-0">
                  <button
                    onClick={() => setActiveTab('tones')}
                    className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 active:scale-95"
                  >
                    <Clock size={16} />
                    <span>Xem mốc 01:00:38</span>
                  </button>
                  <a
                    href={lessonData.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-sm transition flex items-center gap-2 border border-white/20"
                  >
                    <ExternalLink size={16} />
                    <span>Xem Video Gốc</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Tabs (5 Modules) */}
            <nav className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('pinyin')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all active:scale-95 ${
                  activeTab === 'pinyin'
                    ? 'bg-gradient-to-r from-cinnabar-600 to-rose-600 text-white shadow-md shadow-cinnabar-600/25 ring-2 ring-cinnabar-300/60 font-black'
                    : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200 shadow-2xs'
                }`}
              >
                <Mic size={15} />
                <span>1. Ngữ Âm Pinyin</span>
              </button>

              <button
                onClick={() => setActiveTab('tones')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all active:scale-95 ${
                  activeTab === 'tones'
                    ? 'bg-gradient-to-r from-cinnabar-600 to-rose-600 text-white shadow-md shadow-cinnabar-600/25 ring-2 ring-cinnabar-300/60 font-black'
                    : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200 shadow-2xs'
                }`}
              >
                <AudioWaveform size={15} />
                <span>2. Thanh Điệu & Biến Điệu</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ml-0.5 transition ${
                  activeTab === 'tones'
                    ? 'bg-black/25 text-amber-200 border border-amber-300/40'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  01:00:38
                </span>
              </button>

              <button
                onClick={() => setActiveTab('hanzi')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all active:scale-95 ${
                  activeTab === 'hanzi'
                    ? 'bg-gradient-to-r from-cinnabar-600 to-rose-600 text-white shadow-md shadow-cinnabar-600/25 ring-2 ring-cinnabar-300/60 font-black'
                    : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200 shadow-2xs'
                }`}
              >
                <PenTool size={15} />
                <span>3. Nét Chữ & Tập Viết</span>
              </button>

              <button
                onClick={() => setActiveTab('vocab')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all active:scale-95 ${
                  activeTab === 'vocab'
                    ? 'bg-gradient-to-r from-cinnabar-600 to-rose-600 text-white shadow-md shadow-cinnabar-600/25 ring-2 ring-cinnabar-300/60 font-black'
                    : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200 shadow-2xs'
                }`}
              >
                <BookOpen size={15} />
                <span>4. Từ Mới & Bộ Thủ</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                  activeTab === 'vocab' ? 'bg-white/20 text-white' : 'bg-stone-100 text-slate-500'
                }`}>
                  {lessonData.vocab.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('dialogue')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all active:scale-95 ${
                  activeTab === 'dialogue'
                    ? 'bg-gradient-to-r from-cinnabar-600 to-rose-600 text-white shadow-md shadow-cinnabar-600/25 ring-2 ring-cinnabar-300/60 font-black'
                    : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200 shadow-2xs'
                }`}
              >
                <MessageSquare size={15} />
                <span>5. Hội Thoại & Trắc Nghiệm</span>
              </button>
            </nav>

            {/* Tab Panels */}
            {activeTab === 'pinyin' && (
              <PinyinSection
                initialsGroups={lessonData.initialsGroups}
                finalsGroups={lessonData.finalsGroups}
                practiceSyllables={lessonData.practiceSyllables}
                onSpeak={speak}
              />
            )}

            {activeTab === 'tones' && (
              <TonesSection
                toneContours={lessonData.toneContours}
                toneRules={lessonData.toneRules}
                onSpeak={speak}
                onPlayPitch={playPitchContour}
              />
            )}

            {activeTab === 'hanzi' && (
              <HanziSection
                strokes={lessonData.strokes}
                strokeRules={lessonData.strokeRules}
                onSpeak={speak}
              />
            )}

            {activeTab === 'vocab' && (
              <VocabSection
                vocab={lessonData.vocab}
                onSpeak={speak}
              />
            )}

            {activeTab === 'dialogue' && (
              <DialogueQuizSection
                dialogues={lessonData.dialogues}
                quiz={lessonData.quiz}
                onSpeak={speak}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Giáo Trình Hán Ngữ Số Hóa Tương Tác • Thiết kế hiện đại tối ưu trải nghiệm học</span>
          <span className="text-slate-400">Section 1: Hán 1 (Bài 1-5) • Section 2: Hán 2 (Bài 13) • Kho Chuyên Đề & Luyện Gõ</span>
        </div>
      </footer>
    </div>
  );
}
