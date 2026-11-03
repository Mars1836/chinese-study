import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircleHeart,
  ShoppingBag,
  UtensilsCrossed,
  Clock,
  Navigation,
  Activity,
  Keyboard,
  BookOpen,
  Volume2,
  Sparkles,
  PenTool,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  ArrowRight,
  Eye,
  EyeOff,
  Flame,
  Trophy,
  Copy,
  Check
} from 'lucide-react';
import { ThematicTopic, ThematicSentence, ThematicWord } from '../types/thematic';
import { thematicTopics } from '../data/thematicTopics';
import { VocabItem } from '../types/lesson';
import { WriteModal } from './WriteModal';

interface Props {
  onSpeak: (text: string, tone?: number) => void;
}

export const ThematicSection: React.FC<Props> = ({ onSpeak }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('greetings');
  const [activeTab, setActiveTab] = useState<'typing' | 'vocab' | 'grammar'>('typing');

  // Typing practice state
  const currentTopic = thematicTopics.find(t => t.id === selectedTopicId) || thematicTopics[0];
  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [showPinyinHint, setShowPinyinHint] = useState<boolean>(true);
  const [streak, setStreak] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // WriteModal state for thematic words
  const [activeWritingVocab, setActiveWritingVocab] = useState<VocabItem | null>(null);

  const currentSentence: ThematicSentence = currentTopic.sampleSentences[selectedSentenceIndex] || currentTopic.sampleSentences[0];
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Reset input when sentence or topic changes
  useEffect(() => {
    setUserInput('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedSentenceIndex, selectedTopicId]);

  // Clean string helper (ignores standard punctuation for comparison)
  const cleanChar = (char: string) => char.replace(/[，。？！,!?. ]/g, '');

  // Calculate matching characters
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

  // When completed, auto-trigger chime / success
  useEffect(() => {
    if (isCompleted && userInput.length > 0) {
      setStreak(prev => prev + 1);
      onSpeak(currentSentence.hanzi);
    }
  }, [isCompleted]);

  const handleNextSentence = () => {
    const nextIdx = (selectedSentenceIndex + 1) % currentTopic.sampleSentences.length;
    setSelectedSentenceIndex(nextIdx);
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

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircleHeart': return <MessageCircleHeart size={18} />;
      case 'ShoppingBag': return <ShoppingBag size={18} />;
      case 'UtensilsCrossed': return <UtensilsCrossed size={18} />;
      case 'Clock': return <Clock size={18} />;
      case 'Navigation': return <Navigation size={18} />;
      case 'Activity': return <Activity size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Thematic Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl border border-indigo-900/50 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-10 opacity-10 pointer-events-none select-none">
          <span className="hanzi-font text-[160px] font-black">{currentTopic.chineseTitle}</span>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-amber-300 text-xs font-bold">
              <Sparkles size={14} />
              <span>Chuyên Mục Mới: Từ Vựng & Mẫu Câu Theo Chủ Đề Đời Sống</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {currentTopic.title} — <span className="hanzi-font text-amber-400">{currentTopic.chineseTitle}</span> ({currentTopic.pinyinTitle})
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentTopic.desc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15">
              <Flame size={20} className="text-amber-400 animate-pulse" />
              <div>
                <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Chuỗi Gõ Chuẩn</div>
                <div className="text-base font-black text-amber-300">{streak} câu liên tiếp</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Switcher Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none" aria-label="Topic list">
        {thematicTopics.map((topic) => {
          const isSelected = topic.id === selectedTopicId;
          return (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopicId(topic.id);
                setSelectedSentenceIndex(0);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition active:scale-95 shadow-xs ${
                isSelected
                  ? 'bg-gradient-to-r from-cinnabar-600 to-cinnabar-700 text-white shadow-cinnabar-600/30'
                  : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <span>{getTopicIcon(topic.iconName)}</span>
              <span>{topic.title}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-slate-500'
              }`}>
                {topic.words.length} từ
              </span>
            </button>
          );
        })}
      </div>

      {/* Internal Tabs: Typing Practice / Words / Grammar */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
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
            <span>1. Luyện Gõ Tiếng Trung ({currentTopic.sampleSentences.length} câu)</span>
          </button>

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
        </div>
      </div>

      {/* TAB 1: INTERACTIVE TYPING PRACTICE */}
      {activeTab === 'typing' && (
        <div className="space-y-6">
          {/* Main Typing Studio Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-indigo-50 text-indigo-700 font-extrabold text-xs">
                  Câu #{selectedSentenceIndex + 1} / {currentTopic.sampleSentences.length}
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-800 font-bold text-xs">
                  Độ khó: {currentSentence.difficulty || 'Cơ bản'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPinyinHint(!showPinyinHint)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition"
                  title="Bật/Tắt gợi ý Pinyin"
                >
                  {showPinyinHint ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showPinyinHint ? 'Ẩn Pinyin' : 'Hiện Pinyin'}</span>
                </button>

                <button
                  onClick={() => onSpeak(currentSentence.hanzi)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold transition active:scale-95 shadow-sm"
                >
                  <Volume2 size={14} />
                  <span>Nghe câu mẫu</span>
                </button>

                <button
                  onClick={handleCopySentence}
                  className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-600 text-xs transition"
                  title="Sao chép chữ Hán"
                >
                  {isCopied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Target Display with Character-by-Character Color Feedback */}
            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Câu mẫu mục tiêu:</div>

              {/* Chinese characters with matching highlight */}
              <div className="flex flex-wrap items-center gap-1.5 py-2">
                {targetChars.map((char, idx) => {
                  const typedChar = inputChars[idx];
                  const hasTyped = typedChar !== undefined;
                  const isMatch = hasTyped && typedChar === char;
                  const isWrong = hasTyped && typedChar !== char;

                  return (
                    <div
                      key={idx}
                      className={`min-w-[42px] h-14 sm:min-w-[48px] sm:h-16 px-2 rounded-2xl flex flex-col items-center justify-center font-black transition-all ${
                        isMatch
                          ? 'bg-emerald-500 text-white shadow-sm scale-105'
                          : isWrong
                          ? 'bg-rose-500 text-white shadow-sm ring-2 ring-rose-300'
                          : hasTyped
                          ? 'bg-amber-100 text-slate-900'
                          : 'bg-white text-slate-800 border-2 border-stone-200 shadow-2xs'
                      }`}
                    >
                      <span className="hanzi-font text-2xl sm:text-3xl leading-none">{char}</span>
                    </div>
                  );
                })}
              </div>

              {/* Pinyin hint */}
              {showPinyinHint && (
                <div className="text-sm sm:text-base font-bold text-indigo-700 pt-1">
                  {currentSentence.pinyin}
                </div>
              )}

              {/* Vietnamese Meaning */}
              <div className="text-sm sm:text-base font-extrabold text-slate-900 pt-1">
                👉 Dịch nghĩa: <span className="text-slate-800 font-semibold">{currentSentence.meaning}</span>
              </div>

              {currentSentence.tip && (
                <div className="text-xs text-amber-900 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/60 mt-2">
                  💡 <strong>Gợi ý ngữ cảnh:</strong> {currentSentence.tip}
                </div>
              )}
            </div>

            {/* Input Form for User Typing */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Nhập câu bằng bộ gõ tiếng Trung (Pinyin / IME):</span>
                <span>
                  Độ chính xác: <strong className={accuracy === 100 ? 'text-emerald-600 font-black' : 'text-slate-800'}>{accuracy}%</strong> ({correctCount}/{targetChars.length} chữ)
                </span>
              </div>

              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Gõ chữ Hán vào đây (VD dùng bộ gõ Pinyin gõ 'nihao' -> chọn 你好)..."
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
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-500 text-xs font-bold transition"
                    title="Xóa ô gõ"
                  >
                    <RotateCcw size={14} />
                  </button>
                )}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    isCompleted ? 'bg-emerald-500' : 'bg-indigo-600'
                  }`}
                  style={{ width: `${Math.min(100, (correctCount / targetChars.length) * 100)}%` }}
                />
              </div>
            </div>

            {/* Completion Banner */}
            {isCompleted && (
              <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-400 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-emerald-950 flex items-center gap-1.5">
                      <span>Xuất sắc! Gõ chính xác 100% 🎉</span>
                    </h4>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Bạn đã hoàn thành câu này với độ chuẩn xác tuyệt đối. Hãy chuyển sang câu tiếp theo để duy trì chuỗi luyện tập!
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNextSentence}
                  className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md transition active:scale-95 shrink-0"
                >
                  <span>Câu kế tiếp</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* Sentence Carousel Selector */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Chọn nhanh các câu trong chủ đề này:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentTopic.sampleSentences.map((sent, idx) => {
                  const isCurrent = idx === selectedSentenceIndex;
                  return (
                    <button
                      key={sent.id}
                      onClick={() => setSelectedSentenceIndex(idx)}
                      className={`p-3 rounded-2xl border text-left transition flex items-center justify-between gap-2 ${
                        isCurrent
                          ? 'border-indigo-500 bg-indigo-50/80 shadow-xs ring-1 ring-indigo-400'
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

      {/* TAB 2: THEMATIC VOCABULARY LIST WITH WRITING ACTION */}
      {activeTab === 'vocab' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-600" />
              <span>{currentTopic.words.length} Từ Vựng Chủ Đề: {currentTopic.title}</span>
            </h3>
            <span className="text-xs text-slate-500">Bấm "Luyện viết" để mở ô 米字格 vẽ chữ Hán</span>
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
                      {/* Big Hanzi Character */}
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
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-lg font-black text-cinnabar-600">{w.pinyin}</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">HV: {w.hanViet}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{w.type}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{w.meaning}</h4>
                      </div>
                    </div>

                    <button
                      onClick={() => onSpeak(w.hanzi)}
                      className="p-2 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white shadow-xs transition active:scale-95 shrink-0"
                      title="Phát âm từ này"
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>

                  {/* Writing Guide Note */}
                  <div className="mt-3 p-3 rounded-2xl bg-stone-50 border border-stone-100 text-xs space-y-1">
                    <div className="font-bold text-slate-700 flex items-center gap-1.5">
                      <PenTool size={12} className="text-amber-600" />
                      <span>Cấu tạo & Bút thuận:</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{w.writingGuide}</p>
                  </div>
                </div>

                {/* Example sentence & Action */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                  <div className="truncate">
                    <span className="text-slate-400 font-semibold">Ví dụ: </span>
                    <span className="hanzi-font font-bold text-slate-900">{w.exampleSentence}</span>
                    <span className="text-slate-500 ml-1">({w.exampleVn})</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => onSpeak(w.exampleSentence)}
                      className="px-2.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition"
                    >
                      <Volume2 size={12} />
                      <span>Nghe</span>
                    </button>

                    <button
                      onClick={() => openWriteModalForWord(w)}
                      className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold flex items-center gap-1 shadow-2xs transition active:scale-95"
                    >
                      <PenTool size={12} />
                      <span>Tập viết</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: GRAMMAR POINTS */}
      {activeTab === 'grammar' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles size={18} className="text-indigo-600" />
              <span>Ngữ Pháp Trọng Tâm: {currentTopic.title}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {currentTopic.grammarPoints.map((gp) => (
              <div
                key={gp.id}
                className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs">
                      #{gp.id}
                    </span>
                    <span>{gp.title}</span>
                  </h4>
                  <div className="font-mono text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-xl border border-indigo-100 self-start sm:self-center">
                    {gp.formula}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {gp.explanation}
                </p>

                {gp.usageNotes && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs space-y-1">
                    <div className="font-extrabold text-amber-900">📌 Điểm cần lưu ý:</div>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {gp.usageNotes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Ví dụ câu mẫu ứng dụng:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {gp.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-3 group"
                      >
                        <div>
                          <div className="hanzi-font text-base font-black text-slate-900 group-hover:text-indigo-700 transition">
                            {ex.hanzi}
                          </div>
                          <div className="text-xs font-bold text-indigo-600">{ex.pinyin}</div>
                          <div className="text-xs text-slate-600 mt-0.5">👉 {ex.meaning}</div>
                        </div>

                        <button
                          onClick={() => onSpeak(ex.hanzi)}
                          className="p-2 rounded-xl bg-white hover:bg-indigo-600 text-slate-700 hover:text-white border border-stone-200 shadow-2xs transition active:scale-95 shrink-0"
                          title="Phát âm ví dụ"
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Writing Practice Modal */}
      <WriteModal
        isOpen={!!activeWritingVocab}
        onClose={() => setActiveWritingVocab(null)}
        vocab={activeWritingVocab}
        onSpeak={onSpeak}
      />
    </div>
  );
};
