import React, { useState } from 'react';
import { Keyboard, BookOpen, Sparkles } from 'lucide-react';
import { ThematicTopic, ThematicSentence, ThematicWord } from '../../types/thematic';
import { thematicTopics, allTypingSentences, generateRandomSentence } from '../../data/thematic';
import { VocabItem } from '../../types/lesson';
import { WriteModal } from '../WriteModal';
import { ThematicBanner } from './ThematicBanner';
import { TopicSidebar } from './TopicSidebar';
import { TypingStudio } from './TypingStudio';
import { ThematicVocabList } from './ThematicVocabList';
import { ThematicGrammarList } from './ThematicGrammarList';

interface Props {
  onSpeak: (text: string, tone?: number) => void;
}

export const ThematicSection: React.FC<Props> = ({ onSpeak }) => {
  // 'all' represents shuffle mode across all topics
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'typing' | 'vocab' | 'grammar'>('typing');

  const isAllTopics = selectedTopicId === 'all';
  const currentTopic = thematicTopics.find(t => t.id === selectedTopicId) || thematicTopics[0];

  // Active sentence pool
  const sentencePool: ThematicSentence[] = isAllTopics
    ? allTypingSentences
    : currentTopic.sampleSentences;

  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number>(0);
  const [dynamicSentence, setDynamicSentence] = useState<ThematicSentence | null>(null);
  const [streak, setStreak] = useState<number>(0);

  // WriteModal state for thematic words
  const [activeWritingVocab, setActiveWritingVocab] = useState<VocabItem | null>(null);

  // Current active sentence: dynamic generated sentence takes precedence if present
  const currentSentence: ThematicSentence = dynamicSentence
    || sentencePool[selectedSentenceIndex]
    || sentencePool[0];

  const handleNextSentence = () => {
    setDynamicSentence(null);
    const nextIdx = (selectedSentenceIndex + 1) % sentencePool.length;
    setSelectedSentenceIndex(nextIdx);
  };

  const handleRandomSentence = () => {
    setDynamicSentence(null);
    let randomIdx = Math.floor(Math.random() * sentencePool.length);
    if (sentencePool.length > 1 && randomIdx === selectedSentenceIndex) {
      randomIdx = (randomIdx + 1) % sentencePool.length;
    }
    setSelectedSentenceIndex(randomIdx);
  };

  const handleGenerateDynamic = () => {
    const generated = generateRandomSentence();
    setDynamicSentence(generated);
  };

  const handleCompleted = () => {
    setStreak(prev => prev + 1);
    onSpeak(currentSentence.hanzi);
  };

  // Convert thematic word to VocabItem for WriteModal
  const openWriteModalForWord = (w: ThematicWord) => {
    const vocabItem: VocabItem = {
      id: w.id,
      hanzi: w.hanzi,
      pinyin: w.pinyin,
      hanViet: w.hanViet,
      type: w.type,
      meaning: w.meaning,
      radicals: [
        { char: w.hanzi[0], name: 'Cấu tạo chữ', desc: w.writingGuide }
      ],
      mnemonic: w.writingGuide,
      exampleHanzi: w.exampleSentence,
      examplePinyin: w.examplePinyin,
      exampleMeaning: w.exampleVn
    };
    setActiveWritingVocab(vocabItem);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* 1. Header Banner */}
      <ThematicBanner
        isAllTopics={isAllTopics}
        currentTopic={currentTopic}
        allSentencesCount={allTypingSentences.length}
        streak={streak}
      />

      {/* 2. Main Two-Column Layout: Topic Sidebar + Main Practice Studio */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Sidebar: Topics list with real-time search & full titles */}
        <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-20">
          <TopicSidebar
            topics={thematicTopics}
            selectedTopicId={selectedTopicId}
            onSelectTopic={(topicId) => {
              setSelectedTopicId(topicId);
              setSelectedSentenceIndex(0);
              setDynamicSentence(null);
            }}
            allSentencesCount={allTypingSentences.length}
          />
        </aside>

        {/* Right Main Column: Navigation Tabs & Tab Content */}
        <div className="flex-1 min-w-0 w-full space-y-5">
          {/* Navigation Tabs */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('typing')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all active:scale-95 ${
                  activeTab === 'typing'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
                }`}
              >
                <Keyboard size={16} />
                <span>1. Luyện Gõ Tiếng Trung ({sentencePool.length} câu)</span>
              </button>

              {!isAllTopics && (
                <>
                  <button
                    onClick={() => setActiveTab('vocab')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all active:scale-95 ${
                      activeTab === 'vocab'
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
                    }`}
                  >
                    <BookOpen size={16} />
                    <span>2. Từ Vựng & Bút Thuận ({currentTopic.words.length} từ)</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('grammar')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all active:scale-95 ${
                      activeTab === 'grammar'
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
                    }`}
                  >
                    <Sparkles size={16} />
                    <span>3. Ngữ Pháp Trọng Điểm ({currentTopic.grammarPoints.length} quy tắc)</span>
                  </button>
                </>
              )}
            </div>

            {isAllTopics && (
              <span className="text-xs text-indigo-700 font-bold bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100">
                💡 Chọn từng chủ đề ở cột bên trái để xem từ vựng chi tiết & bút thuận
              </span>
            )}
          </div>

          {/* Tab 1: Typing Studio */}
          {activeTab === 'typing' && (
            <TypingStudio
              currentSentence={currentSentence}
              sentencePool={sentencePool}
              selectedSentenceIndex={selectedSentenceIndex}
              isDynamic={!!dynamicSentence}
              onNextSentence={handleNextSentence}
              onRandomSentence={handleRandomSentence}
              onGenerateDynamic={handleGenerateDynamic}
              onSelectSentenceIndex={(idx) => {
                setDynamicSentence(null);
                setSelectedSentenceIndex(idx);
              }}
              onSpeak={onSpeak}
              onCompleted={handleCompleted}
            />
          )}

          {/* Tab 2: Thematic Vocabulary List */}
          {activeTab === 'vocab' && !isAllTopics && (
            <ThematicVocabList
              words={currentTopic.words}
              topicTitle={currentTopic.title}
              onSpeak={onSpeak}
              onOpenWriteModal={openWriteModalForWord}
            />
          )}

          {/* Tab 3: Thematic Grammar Rules */}
          {activeTab === 'grammar' && !isAllTopics && (
            <ThematicGrammarList
              grammarPoints={currentTopic.grammarPoints}
              topicTitle={currentTopic.title}
              onSpeak={onSpeak}
            />
          )}
        </div>
      </div>

      {/* 7. Writing Modal */}
      {activeWritingVocab && (
        <WriteModal
          isOpen={true}
          vocab={activeWritingVocab}
          onClose={() => setActiveWritingVocab(null)}
          onSpeak={onSpeak}
        />
      )}
    </div>
  );
};
