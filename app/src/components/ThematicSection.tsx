import React, { useState, useEffect, useRef } from 'react';
import {
  Keyboard,
  BookOpen,
  Volume2,
  Sparkles,
  RotateCcw,
  ArrowRight,
  Eye,
  EyeOff,
  Flame,
  Trophy,
  Copy,
  Check,
  Shuffle,
  Dices,
  Hash,
  Clock,
  Briefcase,
  Users,
  Palette,
  UtensilsCrossed,
  Navigation,
  Lightbulb,
  HelpCircle,
  Layers,
  Zap,
  Smile
} from 'lucide-react';
import { ThematicTopic, ThematicSentence, ThematicWord } from '../types/thematic';
import { thematicTopics, allTypingSentences, generateRandomSentence } from '../data/thematicTopics';
import { VocabItem } from '../types/lesson';
import { WriteModal } from './WriteModal';

interface Props {
  onSpeak: (text: string, tone?: number) => void;
}

export const ThematicSection: React.FC<Props> = ({ onSpeak }) => {
  // 'all' represents shuffle mode across all topics
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'typing' | 'vocab' | 'grammar'>('typing');

  // Typing practice state
  const isAllTopics = selectedTopicId === 'all';
  const currentTopic = thematicTopics.find(t => t.id === selectedTopicId) || thematicTopics[0];
  
  // Active sentence pool
  const sentencePool: ThematicSentence[] = isAllTopics 
    ? allTypingSentences 
    : currentTopic.sampleSentences;

  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number>(0);
  const [dynamicSentence, setDynamicSentence] = useState<ThematicSentence | null>(null);
  const [userInput, setUserInput] = useState<string>('');
  
  // Core user-requested features: Blind Mode & Peek
  const [isBlindMode, setIsBlindMode] = useState<boolean>(true);
  const [isPeek, setIsPeek] = useState<boolean>(false);
  const [showPinyinHint, setShowPinyinHint] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // WriteModal state for thematic words
  const [activeWritingVocab, setActiveWritingVocab] = useState<VocabItem | null>(null);

  // Current active sentence: dynamic generated sentence takes precedence if present
  const currentSentence: ThematicSentence = dynamicSentence 
    || sentencePool[selectedSentenceIndex] 
    || sentencePool[0];

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Reset input and peek whenever target sentence or topic changes
  useEffect(() => {
    setUserInput('');
    setIsPeek(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedSentenceIndex, selectedTopicId, dynamicSentence]);

  // Clean target characters
  const targetChars = Array.from(currentSentence.hanzi);
  const inputChars = Array.from(userInput);

  let correctCount = 0;
  targetChars.forEach((targetC, idx) => {
    if (inputChars[idx] && inputChars[idx] === targetC) {
      correctCount++;
    }
  });

  const isCompleted = userInput.trim() === currentSentence.hanzi.trim();
  const accuracy = inputChars.length > 0 
    ? Math.min(100, Math.round((correctCount / Math.max(inputChars.length, targetChars.length)) * 100))
    : 0;

  // When completed, auto-trigger chime / voice speech
  useEffect(() => {
    if (isCompleted && userInput.length > 0) {
      setStreak(prev => prev + 1);
      onSpeak(currentSentence.hanzi);
    }
  }, [isCompleted]);

  // Next sentence in pool
  const handleNextSentence = () => {
    setDynamicSentence(null);
    const nextIdx = (selectedSentenceIndex + 1) % sentencePool.length;
    setSelectedSentenceIndex(nextIdx);
  };

  // Random sentence from current pool
  const handleRandomSentence = () => {
    setDynamicSentence(null);
    let randomIdx = Math.floor(Math.random() * sentencePool.length);
    if (sentencePool.length > 1 && randomIdx === selectedSentenceIndex) {
      randomIdx = (randomIdx + 1) % sentencePool.length;
    }
    setSelectedSentenceIndex(randomIdx);
  };

  // Generate dynamic combination sentence (Chủ ngữ + Thời gian + Địa điểm + Hành động)
  const handleGenerateDynamic = () => {
    const generated = generateRandomSentence();
    setDynamicSentence(generated);
  };

  const handleCopySentence = () => {
    navigator.clipboard.writeText(currentSentence.hanzi);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
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

  const getTopicIcon = (topicId: string) => {
    switch (topicId) {
      case 'all': return <Shuffle size={16} className="text-amber-400" />;
      case 'numbers': return <Hash size={16} className="text-amber-500" />;
      case 'time_calendar': return <Clock size={16} className="text-blue-500" />;
      case 'animals': return <Sparkles size={16} className="text-emerald-500" />;
      case 'jobs': return <Briefcase size={16} className="text-purple-500" />;
      case 'family': return <Users size={16} className="text-rose-500" />;
      case 'colors_adj': return <Palette size={16} className="text-pink-500" />;
      case 'food_fruits': return <UtensilsCrossed size={16} className="text-orange-500" />;
      case 'places_travel': return <Navigation size={16} className="text-cyan-500" />;
      case 'verbs': return <Zap size={16} className="text-teal-500" />;
      case 'adjectives': return <Smile size={16} className="text-amber-500" />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* ======================================================== */}
      {/* 1. TOP THEMATIC BANNER & STREAK INDICATOR */}
      {/* ======================================================== */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-900/50 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-10 opacity-10 pointer-events-none select-none">
          <span className="hanzi-font text-[140px] sm:text-[180px] font-black">
            {isAllTopics ? '综合' : currentTopic.chineseTitle}
          </span>
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-amber-300 text-xs font-bold">
              <Sparkles size={14} />
              <span>Chuyên Đề Từ Vựng Thực Tế & Luyện Gõ Tiếng Trung Thông Minh</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-2 flex-wrap">
              {isAllTopics ? (
                <>
                  <span>🎲 Kho Luyện Gõ Tổng Hợp Toàn Bộ Chủ Đề</span>
                  <span className="text-amber-400 hanzi-font">(全部主题)</span>
                </>
              ) : (
                <>
                  <span>{currentTopic.title}</span>
                  <span className="hanzi-font text-amber-400">— {currentTopic.chineseTitle}</span>
                  <span className="text-sm text-slate-300 font-normal">({currentTopic.pinyinTitle})</span>
                </>
              )}
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              {isAllTopics 
                ? 'Luyện tập tổng hợp 80+ mẫu câu giao tiếp đời sống thực tế (Số đếm, Thứ trong tuần, Tháng năm, Động vật, Nghề nghiệp, Gia đình, Đồ ăn, Địa điểm du lịch). Hỗ trợ chế độ Thử Thách Ẩn Đáp Án và Sinh câu ngẫu nhiên.'
                : currentTopic.desc
              }
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 shadow-sm">
              <Flame size={24} className="text-amber-400 animate-pulse" />
              <div>
                <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Chuỗi Gõ Chuẩn</div>
                <div className="text-base font-black text-amber-300">{streak} câu liên tiếp</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. CHỌN CHỦ ĐỀ: TẤT CẢ (TRỘN ĐỀ) + 8 CHỦ ĐỀ CHI TIẾT */}
      {/* ======================================================== */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
          <span>Chọn chủ đề luyện tập ({thematicTopics.length} chuyên đề + Kho trộn ngẫu nhiên):</span>
          <span>Tổng {allTypingSentences.length}+ câu mẫu</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Topic list">
          {/* "Tất cả chủ đề" Shuffle Mode Pill */}
          <button
            onClick={() => {
              setSelectedTopicId('all');
              setSelectedSentenceIndex(0);
              setDynamicSentence(null);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition active:scale-95 shadow-xs ${
              isAllTopics
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-amber-500/30 ring-2 ring-amber-300'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
            }`}
          >
            <Shuffle size={15} className={isAllTopics ? 'text-slate-950 animate-spin-slow' : 'text-amber-500'} />
            <span>🎲 Toàn Bộ Chủ Đề (Trộn ngẫu nhiên)</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
              isAllTopics ? 'bg-black/20 text-slate-950 font-black' : 'bg-stone-100 text-slate-500'
            }`}>
              {allTypingSentences.length} câu
            </span>
          </button>

          {/* 8 Specific Thematic Topics */}
          {thematicTopics.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopicId(topic.id);
                  setSelectedSentenceIndex(0);
                  setDynamicSentence(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition active:scale-95 shadow-xs ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-indigo-600/30 ring-2 ring-indigo-400'
                    : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
                }`}
              >
                <span>{getTopicIcon(topic.id)}</span>
                <span>{topic.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-slate-500'
                }`}>
                  {topic.sampleSentences.length} câu
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. TABS: 1. LUYỆN GÕ | 2. TỪ VỰNG & VIẾT | 3. NGỮ PHÁP */}
      {/* ======================================================== */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('typing')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition ${
              activeTab === 'typing'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
            }`}
          >
            <Keyboard size={16} />
            <span>1. Luyện Gõ Tiếng Trung ({sentencePool.length} câu)</span>
          </button>

          {!isAllTopics && (
            <>
              <button
                onClick={() => setActiveTab('vocab')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                  activeTab === 'vocab'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                }`}
              >
                <BookOpen size={16} />
                <span>2. Từ Vựng & Bút Thuận ({currentTopic.words.length} từ)</span>
              </button>

              <button
                onClick={() => setActiveTab('grammar')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                  activeTab === 'grammar'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
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
            💡 Để xem danh sách từ vựng chi tiết & bút thuận, hãy chọn từng chủ đề cụ thể ở hàng trên
          </span>
        )}
      </div>

      {/* ======================================================== */}
      {/* TAB 1: INTERACTIVE TYPING STUDIO */}
      {/* ======================================================== */}
      {activeTab === 'typing' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-6">
            
            {/* Action Bar: Controls, Mode Toggles, and Random Generators */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-800 font-extrabold text-xs">
                  {dynamicSentence ? '✨ Câu Tạo Ngẫu Nhiên' : `Câu #${selectedSentenceIndex + 1} / ${sentencePool.length}`}
                </span>
                
                <span className="px-2.5 py-1.5 rounded-xl bg-amber-50 text-amber-800 font-bold text-xs">
                  Độ khó: {currentSentence.difficulty || 'Cơ bản'}
                </span>

                <span className="px-2.5 py-1.5 rounded-xl bg-stone-100 text-slate-600 font-bold text-xs">
                  {targetChars.length} ký tự
                </span>
              </div>

              {/* Functional Toggles: Blind Mode & Random Generators */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* 1. BLIND MODE TOGGLE (TẮT / BẬT ĐÁP ÁN) */}
                <button
                  onClick={() => setIsBlindMode(!isBlindMode)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition shadow-xs active:scale-95 ${
                    isBlindMode
                      ? 'bg-rose-50 text-rose-700 border-2 border-rose-300 hover:bg-rose-100'
                      : 'bg-emerald-50 text-emerald-700 border-2 border-emerald-300 hover:bg-emerald-100'
                  }`}
                  title="Tắt/Bật đáp án chữ Hán: Khi Tắt, bạn sẽ không thấy chữ Hán mẫu mà chỉ thấy nghĩa tiếng Việt để thử thách trí nhớ!"
                >
                  {isBlindMode ? <EyeOff size={14} className="text-rose-600" /> : <Eye size={14} className="text-emerald-600" />}
                  <span>{isBlindMode ? 'Đáp án: ĐANG TẮT (Ẩn chữ Hán)' : 'Đáp án: ĐANG BẬT (Hiện chữ Hán)'}</span>
                </button>

                {/* 2. PEEK BUTTON (XEM ĐÁP ÁN KHI ĐANG TẮT) */}
                {isBlindMode && (
                  <button
                    onClick={() => setIsPeek(!isPeek)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold transition active:scale-95"
                    title="Bấm để xem nhanh đáp án nếu bạn quên chữ"
                  >
                    <HelpCircle size={14} className="text-amber-600" />
                    <span>{isPeek ? 'Ẩn lại đáp án' : 'Xem đáp án'}</span>
                  </button>
                )}

                {/* 3. PINYIN HINT TOGGLE */}
                <button
                  onClick={() => setShowPinyinHint(!showPinyinHint)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition ${
                    showPinyinHint 
                      ? 'bg-indigo-100 text-indigo-800 border border-indigo-300' 
                      : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                  }`}
                  title="Hiện/Ẩn phiên âm Pinyin"
                >
                  <span>{showPinyinHint ? 'Ẩn Pinyin' : 'Hiện Pinyin'}</span>
                </button>

                {/* 4. RANDOM SHUFFLE BUTTON */}
                <button
                  onClick={handleRandomSentence}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold transition active:scale-95 shadow-xs"
                  title="Chọn một câu ngẫu nhiên trong danh sách"
                >
                  <Dices size={15} className="text-indigo-600" />
                  <span>🎲 Đổi câu ngẫu nhiên</span>
                </button>

                {/* 5. DYNAMIC GENERATOR BUTTON */}
                <button
                  onClick={handleGenerateDynamic}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-xs font-bold transition active:scale-95 shadow-xs"
                  title="Tạo một câu kết hợp ngữ pháp mới ngẫu nhiên"
                >
                  <Sparkles size={14} className="text-amber-300" />
                  <span>✨ Tạo câu mới</span>
                </button>

                {/* 6. SPEAK BUTTON */}
                <button
                  onClick={() => onSpeak(currentSentence.hanzi)}
                  className="p-2 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold transition active:scale-95 shadow-xs"
                  title="Nghe phát âm chuẩn cả câu"
                >
                  <Volume2 size={16} />
                </button>

                {/* 7. COPY BUTTON */}
                <button
                  onClick={handleCopySentence}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-600 text-xs transition"
                  title="Sao chép chữ Hán câu này"
                >
                  {isCopied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Target Display Box with Real-Time Blind/Challenge Mode */}
            <div className={`p-6 rounded-3xl transition-all space-y-4 border ${
              isBlindMode && !isPeek 
                ? 'bg-slate-900 text-white border-slate-800 shadow-inner' 
                : 'bg-stone-50 border-stone-200/80'
            }`}>
              {/* Vietnamese Meaning Prompt (Prominent & Clear) */}
              <div className="space-y-1">
                <div className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isBlindMode && !isPeek ? 'text-amber-400' : 'text-slate-500'
                }`}>
                  <Lightbulb size={14} />
                  <span>{isBlindMode && !isPeek ? 'Thử thách: Nhớ chữ Hán dựa theo nghĩa tiếng Việt:' : 'Dịch nghĩa tiếng Việt:'}</span>
                </div>
                <div className={`text-base sm:text-xl font-black ${
                  isBlindMode && !isPeek ? 'text-white' : 'text-slate-900'
                }`}>
                  👉 {currentSentence.meaning}
                </div>
              </div>

              {/* Character-by-Character Tiles Display */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>{isBlindMode && !isPeek ? 'Các ô chữ Hán cần gõ (Sẽ tự động mở khi bạn gõ đúng):' : 'Câu chữ Hán mục tiêu:'}</span>
                  {isBlindMode && !isPeek && (
                    <span className="text-amber-300 font-semibold">
                      (Đang ở chế độ Thử Thách Ẩn Đáp Án 🛡️)
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 py-1">
                  {targetChars.map((char, idx) => {
                    const typedChar = inputChars[idx];
                    const hasTyped = typedChar !== undefined;
                    const isMatch = hasTyped && typedChar === char;
                    const isWrong = hasTyped && typedChar !== char;

                    // If Blind Mode is ACTIVE and user has NOT clicked peek:
                    // Hide the character unless user has typed it correctly or typed wrong!
                    if (isBlindMode && !isPeek) {
                      return (
                        <div
                          key={idx}
                          className={`min-w-[44px] h-14 sm:min-w-[50px] sm:h-16 px-2 rounded-2xl flex flex-col items-center justify-center font-black transition-all ${
                            isMatch
                              ? 'bg-emerald-500 text-white shadow-md scale-105 ring-2 ring-emerald-300'
                              : isWrong
                              ? 'bg-rose-500 text-white shadow-md ring-2 ring-rose-300 animate-shake'
                              : 'bg-slate-800/80 border border-slate-700 text-slate-500'
                          }`}
                        >
                          <span className="hanzi-font text-2xl sm:text-3xl leading-none">
                            {isMatch ? char : isWrong ? typedChar : '?'}
                          </span>
                          <span className="text-[9px] opacity-50 mt-1 font-sans">#{idx + 1}</span>
                        </div>
                      );
                    }

                    // Normal Display (Open mode or Peeking)
                    return (
                      <div
                        key={idx}
                        className={`min-w-[44px] h-14 sm:min-w-[50px] sm:h-16 px-2 rounded-2xl flex flex-col items-center justify-center font-black transition-all ${
                          isMatch
                            ? 'bg-emerald-500 text-white shadow-md scale-105'
                            : isWrong
                            ? 'bg-rose-500 text-white shadow-md ring-2 ring-rose-300'
                            : hasTyped
                            ? 'bg-amber-100 text-slate-900'
                            : 'bg-white text-slate-800 border-2 border-stone-200 shadow-2xs'
                        }`}
                      >
                        <span className="hanzi-font text-2xl sm:text-3xl leading-none">{char}</span>
                        <span className="text-[9px] opacity-50 mt-1 font-sans">#{idx + 1}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Pinyin hint display */}
              {(showPinyinHint || isPeek || !isBlindMode) && (
                <div className={`text-sm sm:text-base font-bold pt-1 ${
                  isBlindMode && !isPeek ? 'text-indigo-300' : 'text-indigo-700'
                }`}>
                  🔤 Pinyin: {currentSentence.pinyin}
                </div>
              )}

              {/* Grammar Tip or Context Note */}
              {currentSentence.tip && (
                <div className={`text-xs p-3 rounded-2xl border ${
                  isBlindMode && !isPeek
                    ? 'bg-slate-800/60 border-slate-700 text-amber-200'
                    : 'bg-amber-50/80 border-amber-200/60 text-amber-900'
                }`}>
                  💡 <strong>Gợi ý ngữ cảnh:</strong> {currentSentence.tip}
                </div>
              )}
            </div>

            {/* Input Form for User Typing */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600 flex-wrap gap-2">
                <span>Nhập câu bằng bộ gõ tiếng Trung (Pinyin / IME keyboard):</span>
                <span>
                  Độ chính xác: <strong className={accuracy === 100 ? 'text-emerald-600 font-black text-sm' : 'text-slate-800'}>{accuracy}%</strong> ({correctCount}/{targetChars.length} chữ)
                </span>
              </div>

              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Gõ chữ Hán vào đây (VD: dùng IME gõ 'nihao' -> chọn 你好)..."
                  className={`w-full py-4 px-5 rounded-2xl bg-white border-2 text-lg sm:text-xl font-bold font-sans focus:outline-none transition shadow-inner ${
                    isCompleted
                      ? 'border-emerald-500 ring-4 ring-emerald-100 text-emerald-900'
                      : inputChars.length > 0 && accuracy < 60
                      ? 'border-rose-400 ring-2 ring-rose-100'
                      : 'border-indigo-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 text-slate-900'
                  }`}
                />

                {userInput.length > 0 && (
                  <button
                    onClick={() => setUserInput('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-500 text-xs font-bold transition"
                    title="Xóa ô gõ để gõ lại từ đầu"
                  >
                    <RotateCcw size={15} />
                  </button>
                )}
              </div>

              {/* Real-time Character Progress bar */}
              <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    isCompleted ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-indigo-600'
                  }`}
                  style={{ width: `${Math.min(100, (correctCount / targetChars.length) * 100)}%` }}
                />
              </div>
            </div>

            {/* Victory Celebration Banner */}
            {isCompleted && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-400 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
                    <Trophy size={28} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-emerald-950 flex items-center gap-2">
                      <span>Xuất sắc! Gõ chính xác 100% 🎉</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
                      Bạn đã hoàn thành câu này với độ chuẩn xác tuyệt đối! Hãy chuyển sang câu tiếp theo hoặc đổi câu ngẫu nhiên để duy trì chuỗi luyện tập.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleRandomSentence}
                    className="px-4 py-2.5 rounded-2xl bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-xs transition active:scale-95"
                  >
                    <Dices size={16} />
                    <span>🎲 Câu ngẫu nhiên</span>
                  </button>

                  <button
                    onClick={handleNextSentence}
                    className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md transition active:scale-95"
                  >
                    <span>Câu kế tiếp</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Fast Quick-Jump Carousel for sentences in current pool */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Danh sách câu trong danh mục hiện tại ({sentencePool.length} câu):
                </div>
                <button
                  onClick={handleRandomSentence}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-extrabold flex items-center gap-1"
                >
                  <Shuffle size={12} />
                  <span>Trộn ngẫu nhiên</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                {sentencePool.map((sent, idx) => {
                  const isCurrent = !dynamicSentence && idx === selectedSentenceIndex;
                  return (
                    <button
                      key={sent.id}
                      onClick={() => {
                        setDynamicSentence(null);
                        setSelectedSentenceIndex(idx);
                      }}
                      className={`p-3 rounded-2xl border text-left transition flex items-center justify-between gap-2 ${
                        isCurrent
                          ? 'border-indigo-500 bg-indigo-50/90 shadow-xs ring-2 ring-indigo-400'
                          : 'border-stone-200 bg-white hover:bg-stone-50'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="hanzi-font text-sm font-bold text-slate-900 truncate">{sent.hanzi}</div>
                        <div className="text-[11px] text-slate-500 truncate">{sent.meaning}</div>
                      </div>
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-stone-100 text-slate-600 shrink-0">
                        #{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: THEMATIC VOCABULARY LIST WITH WRITING ACTION */}
      {/* ======================================================== */}
      {activeTab === 'vocab' && !isAllTopics && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-600" />
              <span>{currentTopic.words.length} Từ Vựng Chủ Đề: {currentTopic.title}</span>
            </h3>
            <span className="text-xs text-slate-500">Bấm ô chữ Hán hoặc nút "Tập viết" để mở bảng vẽ 米字格</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentTopic.words.map((w) => (
              <div
                key={w.id}
                className="p-5 rounded-3xl bg-white border border-stone-200 hover:border-indigo-300 shadow-sm transition flex flex-col justify-between space-y-3.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Big Hanzi Box */}
                      <div
                        onClick={() => openWriteModalForWord(w)}
                        className="min-w-[65px] h-16 px-3 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex items-center justify-center cursor-pointer hover:bg-indigo-100 transition shadow-2xs group"
                        title="Bấm để tập viết chữ này"
                      >
                        <span className="hanzi-font text-3xl font-black text-indigo-900 group-hover:scale-105 transition leading-none">
                          {w.hanzi}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-extrabold text-indigo-700">{w.pinyin}</span>
                          <span className="text-xs px-2 py-0.5 rounded-md bg-stone-100 text-slate-600 font-medium">
                            {w.hanViet}
                          </span>
                        </div>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">{w.meaning}</div>
                        <span className="inline-block mt-1 text-[11px] font-semibold text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded">
                          {w.type}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSpeak(w.hanzi)}
                      className="p-2.5 rounded-xl bg-stone-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition active:scale-95"
                      title="Phát âm từ này"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>

                  {/* Writing Guide / Memory hint */}
                  {w.writingGuide && (
                    <div className="mt-3 text-xs text-slate-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      ✍️ <strong>Cấu tạo & Bút thuận:</strong> {w.writingGuide}
                    </div>
                  )}

                  {/* Example Sentence */}
                  {w.exampleSentence && (
                    <div className="mt-2.5 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/70 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="hanzi-font font-bold text-slate-900 text-sm">{w.exampleSentence}</span>
                        <button
                          onClick={() => onSpeak(w.exampleSentence)}
                          className="text-indigo-600 hover:text-indigo-800 p-1 rounded"
                          title="Phát âm ví dụ"
                        >
                          <Volume2 size={13} />
                        </button>
                      </div>
                      <div className="text-indigo-700 font-medium">{w.examplePinyin}</div>
                      <div className="text-slate-600">{w.exampleVn}</div>
                    </div>
                  )}
                </div>

                {/* Bottom Action: Practice Writing in Modal */}
                <button
                  onClick={() => openWriteModalForWord(w)}
                  className="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-indigo-600 hover:text-white text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <BookOpen size={13} />
                  <span>Luyện Viết Chữ "{w.hanzi}" (Ô Mễ Tự 格)</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: THEMATIC GRAMMAR POINTS */}
      {/* ======================================================== */}
      {activeTab === 'grammar' && !isAllTopics && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles size={18} className="text-indigo-600" />
              <span>Ngữ Pháp Trọng Điểm: {currentTopic.title}</span>
            </h3>
          </div>

          <div className="space-y-5">
            {currentTopic.grammarPoints.map((gp) => (
              <div
                key={gp.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4"
              >
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900">
                    {gp.id}. {gp.title}
                  </h4>
                  <div className="mt-2 p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-extrabold text-indigo-900 font-mono">
                    📐 Công thức: {gp.formula}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {gp.explanation}
                </p>

                {gp.usageNotes && gp.usageNotes.length > 0 && (
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Lưu ý khi dùng:</div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                      {gp.usageNotes.map((note, nIdx) => (
                        <li key={nIdx}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Examples */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">Ví dụ minh họa:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {gp.examples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-3.5 rounded-2xl bg-stone-50 hover:bg-indigo-50/60 border border-stone-200 transition space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="hanzi-font text-base font-bold text-slate-900">{ex.hanzi}</span>
                          <button
                            onClick={() => onSpeak(ex.hanzi)}
                            className="p-1 rounded-lg text-indigo-600 hover:bg-indigo-100"
                            title="Nghe ví dụ"
                          >
                            <Volume2 size={14} />
                          </button>
                        </div>
                        <div className="text-xs font-bold text-indigo-700">{ex.pinyin}</div>
                        <div className="text-xs text-slate-600">{ex.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WriteModal integration for thematic words */}
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
