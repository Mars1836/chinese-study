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
import { lessonsList, allLessonsData } from './data/lessons';
import { useAudio } from './hooks/useAudio';

type TabKey = 'pinyin' | 'tones' | 'hanzi' | 'vocab' | 'dialogue';

export default function App() {
  const [currentLessonId, setCurrentLessonId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TabKey>('pinyin');

  const {
    speak,
    playPitchContour,
    testSpeaker,
    rate,
    toggleRate,
    hasChineseVoice,
    chineseVoiceName
  } = useAudio();

  const lessonData = allLessonsData[currentLessonId] || allLessonsData[1];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <Navbar
        lessons={lessonsList}
        currentLessonId={currentLessonId}
        onSelectLesson={(id) => setCurrentLessonId(id)}
        hasChineseVoice={hasChineseVoice}
        chineseVoiceName={chineseVoiceName}
        rate={rate}
        onToggleRate={toggleRate}
        onTestSpeaker={testSpeaker}
        onSpeak={speak}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Banner with YouTube Link & Highlight */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cinnabar-900 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none select-none">
            <span className="hanzi-font text-[150px] font-black leading-none">{lessonData.hanziTitle}</span>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold">
                <Sparkles size={16} />
                <span>Giáo trình số hóa tương tác • Bấm vào bất kỳ thẻ nào để nghe phát âm</span>
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
        <nav className="flex items-center gap-2 overflow-x-auto pb-1" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('pinyin')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition ${
              activeTab === 'pinyin'
                ? 'bg-cinnabar-600 text-white shadow-sm'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
            }`}
          >
            <Mic size={15} />
            <span>1. Ngữ Âm Pinyin</span>
          </button>

          <button
            onClick={() => setActiveTab('tones')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition ${
              activeTab === 'tones'
                ? 'bg-cinnabar-600 text-white shadow-sm'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
            }`}
          >
            <AudioWaveform size={15} />
            <span>2. Thanh Điệu & Biến Điệu</span>
            <span className="px-1.5 py-0.2 text-[10px] bg-amber-400 text-slate-900 rounded-md font-extrabold">01:00:38</span>
          </button>

          <button
            onClick={() => setActiveTab('hanzi')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition ${
              activeTab === 'hanzi'
                ? 'bg-cinnabar-600 text-white shadow-sm'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
            }`}
          >
            <PenTool size={15} />
            <span>3. Nét Chữ & Tập Viết</span>
          </button>

          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition ${
              activeTab === 'vocab'
                ? 'bg-cinnabar-600 text-white shadow-sm'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
            }`}
          >
            <BookOpen size={15} />
            <span>4. Từ Mới & Bộ Thủ ({lessonData.vocab.length} từ)</span>
          </button>

          <button
            onClick={() => setActiveTab('dialogue')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition ${
              activeTab === 'dialogue'
                ? 'bg-cinnabar-600 text-white shadow-sm'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
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
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-cinnabar-600 text-white font-bold hanzi-font inline-flex items-center justify-center">汉</span>
            <span>Hệ thống học tiếng Trung tương tác • React + Vite + Tailwind CSS</span>
          </div>
          <div>
            Tài nguyên gốc HTML được lưu an toàn tại thư mục <code className="bg-stone-100 px-1.5 py-0.5 rounded text-cinnabar-700 font-semibold">raw_htmls/</code>
          </div>
        </div>
      </footer>
    </div>
  );
}
