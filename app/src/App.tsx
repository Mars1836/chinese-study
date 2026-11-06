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
import { BucketStudio } from './components/bucket/BucketStudio';
import { PinyinMasterStudio } from './components/pinyin/PinyinMasterStudio';
import { WriteModal } from './components/WriteModal';
import { lessonsList, allLessonsData } from './data/lessons';
import { playlistSections } from './data/thematicTopics';
import { useAudio } from './hooks/useAudio';
import { VocabItem } from './types/lesson';

type TabKey = 'pinyin' | 'tones' | 'hanzi' | 'vocab' | 'dialogue';

export default function App() {
  const [mainMode, setMainMode] = useState<'lessons' | 'pinyin' | 'thematic' | 'bucket'>('lessons');
  const [currentSectionId, setCurrentSectionId] = useState<string>('section-1');
  const [currentLessonId, setCurrentLessonId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TabKey>('pinyin');
  const [activeWritingVocab, setActiveWritingVocab] = useState<VocabItem | null>(null);

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
        {/* MODE 1: FULL PINYIN MASTER STUDIO (ALL INITIALS, FINALS, RULES & MATRIX) */}
        {mainMode === 'pinyin' && (
          <PinyinMasterStudio onSpeak={speak} />
        )}

        {/* MODE 2: THEMATIC TOPICS & TYPING PRACTICE */}
        {mainMode === 'thematic' && (
          <ThematicSection onSpeak={speak} />
        )}

        {/* MODE 2: CUSTOM STUDY BUCKET & INTELLIGENT QUIZ GENERATOR */}
        {mainMode === 'bucket' && (
          <BucketStudio
            onSpeak={speak}
            onOpenWriteModal={(w) => {
              const vocabItem: VocabItem = {
                id: Date.now(),
                hanzi: w.hanzi,
                pinyin: w.pinyin,
                hanViet: w.hanViet || '',
                type: w.type || 'Từ vựng',
                meaning: w.meaning,
                radicals: [{ char: w.hanzi[0], name: 'Chữ Hán', desc: 'Luyện viết' }],
                mnemonic: w.source || '',
                exampleHanzi: w.exampleHanzi || '',
                examplePinyin: w.examplePinyin || '',
                exampleMeaning: w.exampleMeaning || ''
              };
              setActiveWritingVocab(vocabItem);
            }}
          />
        )}

        {/* MODE 3: PLAYLIST / LESSONS CURRICULUM */}
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
                    className="px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-sm transition flex items-center gap-2 border border-white/20 active:scale-95"
                  >
                    <AudioWaveform size={16} />
                    <span>Luyện Thanh Điệu</span>
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

            {/* Navigation Tabs (5 Modules): Sleek Segmented Pill Bar */}
            <nav className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/90 overflow-x-auto scrollbar-none" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('pinyin')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm whitespace-nowrap shrink-0 transition active:scale-95 ${
                  activeTab === 'pinyin'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
              >
                <Mic size={15} className={activeTab === 'pinyin' ? 'text-cinnabar-600' : 'text-slate-500'} />
                <span>1. Ngữ Âm Pinyin</span>
              </button>

              <button
                onClick={() => setActiveTab('tones')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm whitespace-nowrap shrink-0 transition active:scale-95 ${
                  activeTab === 'tones'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
              >
                <AudioWaveform size={15} className={activeTab === 'tones' ? 'text-cinnabar-600' : 'text-slate-500'} />
                <span>2. Thanh Điệu & Biến Điệu</span>
              </button>

              <button
                onClick={() => setActiveTab('hanzi')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm whitespace-nowrap shrink-0 transition active:scale-95 ${
                  activeTab === 'hanzi'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
              >
                <PenTool size={15} className={activeTab === 'hanzi' ? 'text-cinnabar-600' : 'text-slate-500'} />
                <span>3. Nét Chữ & Tập Viết</span>
              </button>

              <button
                onClick={() => setActiveTab('vocab')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm whitespace-nowrap shrink-0 transition active:scale-95 ${
                  activeTab === 'vocab'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
              >
                <BookOpen size={15} className={activeTab === 'vocab' ? 'text-cinnabar-600' : 'text-slate-500'} />
                <span>4. Từ Mới & Bộ Thủ</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold leading-none ${
                  activeTab === 'vocab' ? 'bg-stone-200/90 text-slate-900' : 'bg-stone-200/70 text-slate-600'
                }`}>
                  {lessonData.vocab.length} từ
                </span>
              </button>

              <button
                onClick={() => setActiveTab('dialogue')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm whitespace-nowrap shrink-0 transition active:scale-95 ${
                  activeTab === 'dialogue'
                    ? 'bg-white text-slate-900 font-black shadow-xs ring-1 ring-black/5'
                    : 'text-slate-600 hover:text-slate-900 font-semibold hover:bg-stone-200/50'
                }`}
              >
                <MessageSquare size={15} className={activeTab === 'dialogue' ? 'text-cinnabar-600' : 'text-slate-500'} />
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
                onNavigateToPinyinMaster={() => setMainMode('pinyin')}
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

      {/* Write Modal for writing practice */}
      {activeWritingVocab && (
        <WriteModal
          isOpen={true}
          vocab={activeWritingVocab}
          onClose={() => setActiveWritingVocab(null)}
          onSpeak={speak}
        />
      )}

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
