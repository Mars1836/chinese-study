import React, { useState, useMemo, useEffect } from 'react';
import {
  Bookmark,
  Sparkles,
  Trash2,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Volume2,
  Keyboard,
  Languages,
  BookOpen,
  Search,
  Check,
  Trophy,
  ArrowRight,
  ArrowLeft,
  Plus,
  Settings2,
  Layers,
  PenTool,
  Eye,
  EyeOff,
  Repeat,
  Shuffle,
  GraduationCap,
  Flame,
  ShieldCheck
} from 'lucide-react';
import {
  BucketWord,
  QuestionType,
  QuizConfig,
  QuizOrderMode,
  QuizQuestion,
  QuizResultItem
} from '../../types/bucket';
import { useBucket } from '../../hooks/useBucket';
import { generateQuiz } from '../../utils/quizGenerator';
import { getAllAvailableWords } from '../../data/allVocabPool';

interface BucketStudioProps {
  onSpeak: (text: string, tone?: number) => void;
  onOpenWriteModal?: (word: any) => void;
}

export const BucketStudio: React.FC<BucketStudioProps> = ({ onSpeak, onOpenWriteModal }) => {
  const { bucket, removeFromBucket, clearBucket, addBulkToBucket } = useBucket();

  // Navigation states: 'list' | 'setup' | 'quiz' | 'results'
  const [activeStep, setActiveStep] = useState<'list' | 'setup' | 'quiz' | 'results'>('list');
  const [searchWord, setSearchWord] = useState<string>('');

  // Setup options - 9 distinct question types covering every aspect of a Chinese character
  const [enabledTypes, setEnabledTypes] = useState<QuestionType[]>([
    'zh_to_vn',
    'vn_to_zh',
    'zh_to_pinyin',
    'pinyin_to_zh',
    'zh_to_hanviet',
    'listening_choice',
    'fill_blank',
    'hanzi_typing',
    'sentence_typing'
  ]);
  // repeatsPerWord: -1 means ALL enabled types for each word; 1, 2, 3 means custom count
  const [repeatsPerWord, setRepeatsPerWord] = useState<number>(-1);
  const [orderMode, setOrderMode] = useState<QuizOrderMode>('interleaved');
  const [retryWrongQuestions, setRetryWrongQuestions] = useState<boolean>(true);
  const [questionCount, setQuestionCount] = useState<number>(-1);
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);

  // Active Quiz State
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState<boolean>(false);
  const [showQuizPinyin, setShowQuizPinyin] = useState<boolean>(() => {
    try {
      return localStorage.getItem('chinese_quiz_show_pinyin') !== 'false';
    } catch {
      return true;
    }
  });

  const toggleQuizPinyin = (val: boolean) => {
    setShowQuizPinyin(val);
    try {
      localStorage.setItem('chinese_quiz_show_pinyin', String(val));
    } catch {}
  };

  const [results, setResults] = useState<QuizResultItem[]>([]);

  // Filtered bucket words for searching
  const filteredBucket = useMemo(() => {
    const q = searchWord.trim().toLowerCase();
    if (!q) return bucket;
    return bucket.filter(
      w =>
        w.hanzi.includes(q) ||
        w.pinyin.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q) ||
        (w.hanViet && w.hanViet.toLowerCase().includes(q)) ||
        w.source.toLowerCase().includes(q)
    );
  }, [bucket, searchWord]);

  // Toggle question type in setup
  const toggleType = (t: QuestionType) => {
    if (enabledTypes.includes(t)) {
      if (enabledTypes.length === 1) return; // keep at least one
      setEnabledTypes(enabledTypes.filter(item => item !== t));
    } else {
      setEnabledTypes([...enabledTypes, t]);
    }
  };

  // Estimated questions count calculation
  const calculatedRepeats = repeatsPerWord === -1 ? enabledTypes.length : Math.min(repeatsPerWord, enabledTypes.length);
  const maxPossibleQuestions = bucket.length * calculatedRepeats;

  // Start Quiz
  const handleStartQuiz = () => {
    const config: QuizConfig = {
      enabledTypes,
      repeatsPerWord,
      questionCount,
      shuffle: shuffleQuestions,
      orderMode,
      retryWrongQuestions
    };
    const generated = generateQuiz(bucket, config);
    if (generated.length === 0) return;

    setQuizQuestions(generated);
    setCurrentIndex(0);
    setSelectedOption(null);
    setTypedAnswer('');
    setIsAnswerSubmitted(false);
    setIsCurrentCorrect(false);
    setResults([]);
    setActiveStep('quiz');

    // Auto speak if first question is listening type
    if (generated[0]?.type === 'listening_choice') {
      setTimeout(() => onSpeak(generated[0].word.hanzi), 350);
    }
  };

  // Dynamic label renderer: cleanly hide or show Pinyin based on showQuizPinyin toggle
  const renderOptionLabel = (opt: string) => {
    const match = opt.match(/^([^\(]+)\s*\((.+)\)$/);
    if (!match) {
      return <span className="leading-relaxed font-bold">{opt}</span>;
    }
    const hanzi = match[1].trim();
    const subText = match[2].trim();

    if (!showQuizPinyin) {
      return <span className="hanzi-font text-xl sm:text-2xl font-black leading-none">{hanzi}</span>;
    }

    return (
      <span className="flex items-center gap-2 flex-wrap">
        <span className="hanzi-font text-lg sm:text-xl font-black leading-none">{hanzi}</span>
        <span className="text-xs sm:text-sm font-bold text-indigo-600">({subText})</span>
      </span>
    );
  };

  // Submit Answer
  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    const currentQ = quizQuestions[currentIndex];
    const correct = opt === currentQ.correctAnswer;

    setSelectedOption(opt);
    setIsAnswerSubmitted(true);
    setIsCurrentCorrect(correct);

    if (correct) {
      onSpeak(currentQ.word.hanzi);
    } else if (retryWrongQuestions && !currentQ.isRetry) {
      // Append retry question for this word to the end of the quiz
      const retryQ: QuizQuestion = {
        ...currentQ,
        id: `${currentQ.id}_retry_${Date.now()}`,
        isRetry: true
      };
      setQuizQuestions(prev => [...prev, retryQ]);
    }

    setResults(prev => {
      const updated = [...prev];
      updated[currentIndex] = {
        question: currentQ,
        userAnswer: opt,
        isCorrect: correct
      };
      return updated;
    });
  };

  // Submit Typing Answer (Supports single hanzi typing & full sentence typing)
  const handleCheckTyping = () => {
    if (isAnswerSubmitted || !typedAnswer.trim()) return;
    const currentQ = quizQuestions[currentIndex];

    // Normalize helper: strip punctuation & whitespace for fair comparison
    const normalize = (text: string) => text.trim().replace(/[\s\.\,\!\?\。\，\！\？\、]/g, '');
    const correct = currentQ.type === 'sentence_typing'
      ? normalize(typedAnswer) === normalize(currentQ.correctAnswer)
      : typedAnswer.trim() === currentQ.correctAnswer.trim();

    setIsAnswerSubmitted(true);
    setIsCurrentCorrect(correct);

    if (correct) {
      onSpeak(currentQ.type === 'sentence_typing' ? currentQ.correctAnswer : currentQ.word.hanzi);
    } else if (retryWrongQuestions && !currentQ.isRetry) {
      const retryQ: QuizQuestion = {
        ...currentQ,
        id: `${currentQ.id}_retry_${Date.now()}`,
        isRetry: true
      };
      setQuizQuestions(prev => [...prev, retryQ]);
    }

    setResults(prev => {
      const updated = [...prev];
      updated[currentIndex] = {
        question: currentQ,
        userAnswer: typedAnswer.trim(),
        isCorrect: correct
      };
      return updated;
    });
  };

  // Previous Question
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      const prevResult = results[prevIdx];
      if (prevResult) {
        setSelectedOption(prevResult.userAnswer);
        setTypedAnswer(prevResult.userAnswer);
        setIsAnswerSubmitted(true);
        setIsCurrentCorrect(prevResult.isCorrect);
      } else {
        setSelectedOption(null);
        setTypedAnswer('');
        setIsAnswerSubmitted(false);
        setIsCurrentCorrect(false);
      }
    }
  };

  // Next Question or Finish
  const handleNextQuestion = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      const nextResult = results[nextIdx];
      if (nextResult) {
        setSelectedOption(nextResult.userAnswer);
        setTypedAnswer(nextResult.userAnswer);
        setIsAnswerSubmitted(true);
        setIsCurrentCorrect(nextResult.isCorrect);
      } else {
        setSelectedOption(null);
        setTypedAnswer('');
        setIsAnswerSubmitted(false);
        setIsCurrentCorrect(false);
      }

      if (!nextResult && quizQuestions[nextIdx]?.type === 'listening_choice') {
        setTimeout(() => onSpeak(quizQuestions[nextIdx].word.hanzi), 350);
      }
    } else {
      setActiveStep('results');
    }
  };

  // Keyboard navigation & hotkeys
  useEffect(() => {
    if (activeStep !== 'quiz') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      const isInputFocused = activeTag === 'input' || activeTag === 'textarea';

      // Alt + ArrowLeft or (ArrowLeft when not typing)
      if ((e.altKey && e.key === 'ArrowLeft') || (!isInputFocused && e.key === 'ArrowLeft')) {
        e.preventDefault();
        handlePrevQuestion();
        return;
      }

      // Alt + ArrowRight or (ArrowRight when not typing and answered)
      if ((e.altKey && e.key === 'ArrowRight') || (!isInputFocused && e.key === 'ArrowRight')) {
        if (isAnswerSubmitted || e.altKey || !!results[currentIndex]) {
          e.preventDefault();
          handleNextQuestion();
          return;
        }
      }

      // Hotkey 'P' to toggle Pinyin
      if (!isInputFocused && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        toggleQuizPinyin(!showQuizPinyin);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStep, currentIndex, isAnswerSubmitted, quizQuestions, results, showQuizPinyin]);

  // Quick Add Sample Words
  const handleAddSampleWords = () => {
    const all = getAllAvailableWords();
    const sample = all.slice(0, 10);
    addBulkToBucket(sample);
  };

  // Retake only wrong words
  const handleRetakeWrongAnswers = () => {
    const wrongWordsMap = new Map<string, BucketWord>();
    results.filter(r => !r.isCorrect).forEach(r => {
      wrongWordsMap.set(r.question.word.hanzi, r.question.word);
    });
    const wrongWords = Array.from(wrongWordsMap.values());
    if (wrongWords.length === 0) return;

    const config: QuizConfig = {
      enabledTypes,
      repeatsPerWord,
      questionCount: -1,
      shuffle: true,
      orderMode,
      retryWrongQuestions
    };
    const generated = generateQuiz(wrongWords, config);
    setQuizQuestions(generated);
    setCurrentIndex(0);
    setSelectedOption(null);
    setTypedAnswer('');
    setIsAnswerSubmitted(false);
    setIsCurrentCorrect(false);
    setResults([]);
    setActiveStep('quiz');
  };

  const currentQ = quizQuestions[currentIndex];
  const correctCount = results.filter(r => r.isCorrect).length;
  const scorePercent = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0;

  // Word-level mastery breakdown in results step
  const wordMasteryMap = useMemo(() => {
    const map = new Map<string, { word: BucketWord; total: number; correct: number; failedTypes: string[] }>();
    results.forEach(r => {
      const h = r.question.word.hanzi;
      if (!map.has(h)) {
        map.set(h, { word: r.question.word, total: 0, correct: 0, failedTypes: [] });
      }
      const entry = map.get(h)!;
      entry.total += 1;
      if (r.isCorrect) {
        entry.correct += 1;
      } else {
        const typeLabel =
          r.question.type === 'zh_to_vn' ? 'Nghĩa tiếng Việt' :
          r.question.type === 'vn_to_zh' ? 'Chọn chữ Hán' :
          r.question.type === 'zh_to_pinyin' ? 'Nhớ Pinyin' :
          r.question.type === 'pinyin_to_zh' ? 'Từ Pinyin chọn chữ' :
          r.question.type === 'zh_to_hanviet' ? 'Âm Hán Việt' :
          r.question.type === 'listening_choice' ? 'Luyện nghe' :
          r.question.type === 'hanzi_typing' ? 'Gõ chữ Hán' :
          r.question.type === 'sentence_typing' ? 'Viết câu' : 'Điền câu';
        if (!entry.failedTypes.includes(typeLabel)) {
          entry.failedTypes.push(typeLabel);
        }
      }
    });
    return Array.from(map.values());
  }, [results]);

  const fullyMasteredWords = wordMasteryMap.filter(w => w.correct === w.total && w.total > 0).length;

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-6 -bottom-10 opacity-10 pointer-events-none select-none">
          <span className="hanzi-font text-[160px] font-black">生词本</span>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-amber-200 text-xs font-bold border border-white/20">
              <Bookmark size={14} className="text-amber-300" />
              <span>Hộp Ôn Tập Cá Nhân Hóa (Custom Study Bucket)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              🧺 Giỏ Từ Vựng & Bộ Đề Luyện Tập Thông Minh
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
              Mỗi chữ Hán sẽ được thử thách qua <strong>nhiều dạng câu hỏi khác nhau</strong> (Nghĩa, Pinyin, Âm Hán Việt, Nghe phát âm, Điền câu, Tự gõ chữ, Viết câu) và được <strong>trộn ngẫu nhiên giãn cách</strong> để không bao giờ xuất hiện 2 câu của cùng một từ liên tiếp.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/25 text-right">
              <div className="text-[10px] text-amber-200 uppercase font-bold tracking-wider">Đang có trong giỏ</div>
              <div className="text-2xl font-black text-white">{bucket.length} <span className="text-xs font-normal">từ vựng</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Mode Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveStep('list')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all active:scale-95 ${
              activeStep === 'list'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
            }`}
          >
            <Layers size={16} />
            <span>1. Danh Sách Trong Giỏ ({bucket.length})</span>
          </button>

          <button
            onClick={() => setActiveStep('setup')}
            disabled={bucket.length === 0}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all active:scale-95 ${
              activeStep === 'setup'
                ? 'bg-slate-900 text-white shadow-md'
                : bucket.length === 0
                ? 'opacity-40 cursor-not-allowed bg-stone-100 text-slate-400'
                : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
            }`}
          >
            <Settings2 size={16} />
            <span>2. Cấu Hình Ôn Tập Đa Dạng</span>
          </button>

          {quizQuestions.length > 0 && (
            <button
              onClick={() => setActiveStep('quiz')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all active:scale-95 ${
                activeStep === 'quiz'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-md'
                  : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <Play size={16} />
              <span>3. Đang Làm Bài ({currentIndex + 1}/{quizQuestions.length})</span>
            </button>
          )}

          {results.length > 0 && (
            <button
              onClick={() => setActiveStep('results')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all active:scale-95 ${
                activeStep === 'results'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <Trophy size={16} />
              <span>4. Kết Quả ({scorePercent}%)</span>
            </button>
          )}
        </div>

        {activeStep === 'list' && bucket.length > 0 && (
          <button
            onClick={() => setActiveStep('setup')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition active:scale-95"
          >
            <Play size={16} />
            <span>🎯 Thiết Lập & Bắt Đầu Học ({bucket.length} từ)</span>
          </button>
        )}
      </div>

      {/* 3. STEP 1: WORDS LIST & BUCKET MANAGEMENT */}
      {activeStep === 'list' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                placeholder="Tìm chữ Hán, Pinyin, nghĩa tiếng Việt trong giỏ..."
                className="w-full pl-9 pr-4 py-2 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {bucket.length === 0 ? (
                <button
                  onClick={handleAddSampleWords}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition border border-indigo-200 active:scale-95"
                >
                  <Plus size={15} />
                  <span>+ Thêm 10 từ mẫu thông dụng</span>
                </button>
              ) : (
                <button
                  onClick={clearBucket}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-stone-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-xs font-bold transition border border-stone-200"
                  title="Xóa sạch toàn bộ từ trong giỏ"
                >
                  <Trash2 size={14} />
                  <span>Xóa hết giỏ</span>
                </button>
              )}
            </div>
          </div>

          {bucket.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 border-2 border-dashed border-stone-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-2xl">
                🧺
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  Giỏ từ vựng của bạn đang trống!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Hãy bấm biểu tượng <strong>+ Giỏ ôn tập</strong> ở bất kỳ từ vựng nào trong bài học để thêm vào giỏ, sau đó vào đây để luyện tập lặp lại đa dạng câu hỏi giúp nhớ sâu mặt chữ.
                </p>
              </div>

              <button
                onClick={handleAddSampleWords}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition active:scale-95"
              >
                + Thêm nhanh 10 từ vựng cơ bản vào giỏ để thử nghiệm
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredBucket.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-2xs hover:shadow-sm transition flex flex-col justify-between space-y-3 group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() => onOpenWriteModal && onOpenWriteModal(item)}
                          className="min-w-[55px] h-14 px-2 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-center cursor-pointer hover:bg-amber-100 transition shadow-2xs"
                          title="Bấm để tập viết chữ này"
                        >
                          <span className="hanzi-font text-2xl font-black text-slate-900 leading-none">
                            {item.hanzi}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-sm font-black text-cinnabar-600">{item.pinyin}</span>
                            {item.hanViet && (
                              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900">
                                {item.hanViet}
                              </span>
                            )}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                            {item.meaning}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromBucket(item.hanzi)}
                        className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Bỏ từ này khỏi giỏ"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    {item.exampleHanzi && (
                      <div className="mt-2.5 text-[11px] bg-stone-50 p-2 rounded-xl text-slate-600 border border-stone-100">
                        <div className="font-bold text-slate-800">{item.exampleHanzi}</div>
                        <div className="text-[10px] text-slate-500">{item.exampleMeaning}</div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-[10px] text-slate-400">
                    <span className="truncate max-w-[170px]" title={item.source}>
                      📍 {item.source}
                    </span>
                    <button
                      onClick={() => onSpeak(item.hanzi)}
                      className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-600 transition"
                      title="Nghe phát âm"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 4. STEP 2: SETUP QUIZ CONFIGURATION */}
      {activeStep === 'setup' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-7 max-w-3xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black border border-indigo-200">
              <Repeat size={13} />
              <span>Cấu Hình Lặp Lại & Đa Dạng Câu Hỏi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Luyện Tập Chuyên Sâu Từng Chữ Hán
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Bạn có <strong>{bucket.length} chữ/từ</strong> trong giỏ. Tùy chỉnh số lần lặp lại và các loại bài tập để khắc sâu trí nhớ từ mọi giác quan.
            </p>
          </div>

          {/* Guarantee banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border border-emerald-200 flex items-start gap-3">
            <ShieldCheck size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <div className="font-black text-emerald-950">
                Nguyên tắc ôn tập thông minh (Spaced Spaced Repetition):
              </div>
              <p className="text-emerald-900 leading-relaxed">
                Khi lặp lại, <strong>mỗi câu hỏi về cùng một chữ đều là một dạng bài hoàn toàn khác nhau</strong> (nghĩa, pinyin, âm Hán Việt, nghe phát âm, điền câu, gõ chữ). Đề thi được <strong>trộn ngẫu nhiên giãn cách</strong> — <strong>tuyệt đối không có 2 câu của cùng một chữ xuất hiện liên tiếp nhau</strong>!
              </p>
            </div>
          </div>

          {/* Section 1: Question Types Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
                1. Bật / Tắt các dạng bài tập ({enabledTypes.length} dạng đang chọn):
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Type 1: ZH -> VN */}
              <div
                onClick={() => toggleType('zh_to_vn')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('zh_to_vn')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('zh_to_vn') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('zh_to_vn') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <BookOpen size={15} className="text-indigo-600" />
                    <span>Chữ Hán ➔ Chọn nghĩa Việt</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Hiện chữ Hán, bạn chọn nghĩa tiếng Việt tương ứng.
                  </p>
                </div>
              </div>

              {/* Type 2: VN -> ZH */}
              <div
                onClick={() => toggleType('vn_to_zh')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('vn_to_zh')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('vn_to_zh') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('vn_to_zh') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <Languages size={15} className="text-indigo-600" />
                    <span>Nghĩa Việt ➔ Chọn chữ Hán</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Hiện nghĩa tiếng Việt, bạn chọn chữ Hán và Pinyin đúng.
                  </p>
                </div>
              </div>

              {/* Type 3: ZH -> Pinyin */}
              <div
                onClick={() => toggleType('zh_to_pinyin')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('zh_to_pinyin')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('zh_to_pinyin') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('zh_to_pinyin') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <Sparkles size={15} className="text-purple-600" />
                    <span>Chữ Hán ➔ Chọn Pinyin chuẩn</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Rèn luyện nhớ chuẩn phiên âm Pinyin và dấu thanh điệu.
                  </p>
                </div>
              </div>

              {/* Type 4: Pinyin -> ZH */}
              <div
                onClick={() => toggleType('pinyin_to_zh')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('pinyin_to_zh')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('pinyin_to_zh') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('pinyin_to_zh') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <Sparkles size={15} className="text-teal-600" />
                    <span>Pinyin ➔ Nhận diện chữ Hán</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Cho phiên âm Pinyin, người học chọn đúng mặt chữ Hán tương ứng.
                  </p>
                </div>
              </div>

              {/* Type 5: ZH -> HanViet */}
              <div
                onClick={() => toggleType('zh_to_hanviet')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('zh_to_hanviet')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('zh_to_hanviet') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('zh_to_hanviet') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <BookOpen size={15} className="text-rose-600" />
                    <span>Chữ Hán ➔ Chọn âm Hán Việt</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Nhớ nghĩa siêu nhanh thông qua từ gốc Hán Việt quen thuộc.
                  </p>
                </div>
              </div>

              {/* Type 6: Listening */}
              <div
                onClick={() => toggleType('listening_choice')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('listening_choice')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('listening_choice') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('listening_choice') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <Volume2 size={15} className="text-rose-500" />
                    <span>Nghe âm thanh ➔ Chọn chữ Hán</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Hệ thống phát âm chuẩn bản xứ, bạn nghe và chọn chữ Hán đúng.
                  </p>
                </div>
              </div>

              {/* Type 7: Fill Blank */}
              <div
                onClick={() => toggleType('fill_blank')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('fill_blank')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('fill_blank') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('fill_blank') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <BookOpen size={15} className="text-amber-500" />
                    <span>Điền từ vào câu ngữ cảnh</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Hiện câu ví dụ khuyết từ, bạn chọn từ đúng để hoàn chỉnh câu.
                  </p>
                </div>
              </div>

              {/* Type 8: Hanzi Typing */}
              <div
                onClick={() => toggleType('hanzi_typing')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('hanzi_typing')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('hanzi_typing') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('hanzi_typing') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <Keyboard size={15} className="text-teal-600" />
                    <span>Luyện gõ chữ Hán (IME)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Tự tay gõ từ vựng chữ Hán bằng bàn phím theo nghĩa và gợi ý.
                  </p>
                </div>
              </div>

              {/* Type 9: Sentence Typing */}
              <div
                onClick={() => toggleType('sentence_typing')}
                className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 sm:col-span-2 ${
                  enabledTypes.includes('sentence_typing')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('sentence_typing') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('sentence_typing') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <PenTool size={15} className="text-blue-600" />
                    <span>Viết toàn bộ câu tiếng Trung (Ngữ cảnh câu mẫu)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Dựa vào nghĩa câu ví dụ của từ, tự gõ lại toàn bộ câu tiếng Trung hoàn chỉnh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Questions Per Word (Repeats Per Word) */}
          <div className="space-y-3 pt-3 border-t border-stone-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Repeat size={14} className="text-indigo-600" />
                <span>2. Số câu hỏi / Vòng lặp cho mỗi chữ Hán:</span>
              </span>
              <span className="text-[11px] font-bold text-indigo-600">
                {repeatsPerWord === -1
                  ? `Mỗi chữ làm đủ cả ${enabledTypes.length} dạng khác nhau`
                  : `Mỗi chữ làm ${repeatsPerWord} dạng khác nhau`}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* Option 1: All enabled types */}
              <button
                type="button"
                onClick={() => setRepeatsPerWord(-1)}
                className={`p-3.5 rounded-2xl border-2 text-left transition active:scale-95 relative ${
                  repeatsPerWord === -1
                    ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <Flame size={14} className="text-amber-500" />
                  <span>Tất cả các dạng</span>
                </div>
                <div className="text-[11px] text-indigo-700 font-extrabold mt-1">
                  ⭐ Khuyên dùng
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Mỗi chữ ôn qua cả {enabledTypes.length} dạng khác nhau để nhớ sâu.
                </div>
              </button>

              {/* Option 2: 3 types per word */}
              <button
                type="button"
                onClick={() => setRepeatsPerWord(3)}
                className={`p-3.5 rounded-2xl border-2 text-left transition active:scale-95 ${
                  repeatsPerWord === 3
                    ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-black text-slate-900">3 dạng / chữ</div>
                <div className="text-[11px] text-slate-700 font-bold mt-1">Luyện tập sâu</div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Mỗi chữ làm 3 loại câu hỏi khác nhau.
                </div>
              </button>

              {/* Option 3: 2 types per word */}
              <button
                type="button"
                onClick={() => setRepeatsPerWord(2)}
                className={`p-3.5 rounded-2xl border-2 text-left transition active:scale-95 ${
                  repeatsPerWord === 2
                    ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-black text-slate-900">2 dạng / chữ</div>
                <div className="text-[11px] text-slate-700 font-bold mt-1">Cân bằng</div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Mỗi chữ làm 2 câu hỏi với 2 góc độ.
                </div>
              </button>

              {/* Option 4: 1 type per word */}
              <button
                type="button"
                onClick={() => setRepeatsPerWord(1)}
                className={`p-3.5 rounded-2xl border-2 text-left transition active:scale-95 ${
                  repeatsPerWord === 1
                    ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-black text-slate-900">1 câu / chữ</div>
                <div className="text-[11px] text-slate-700 font-bold mt-1">Ôn nhanh</div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Mỗi chữ 1 câu hỏi ngẫu nhiên.
                </div>
              </button>
            </div>

            {/* Estimation banner */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-indigo-50 border border-indigo-100 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-700 font-medium">
                📊 Tổng số câu hỏi dự kiến: <strong>{maxPossibleQuestions} câu</strong> (cho {bucket.length} chữ trong giỏ).
              </span>
              <span className="text-[11px] font-bold text-indigo-700 shrink-0">
                {calculatedRepeats} câu hỏi khác nhau / mỗi chữ
              </span>
            </div>
          </div>

          {/* Section 3: Ordering & Spaced Repetition Mode */}
          <div className="space-y-3 pt-3 border-t border-stone-100">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Shuffle size={14} className="text-indigo-600" />
              <span>3. Cách sắp xếp câu hỏi (Mặc định ngẫu nhiên giãn cách):</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOrderMode('interleaved')}
                className={`p-4 rounded-2xl border-2 text-left transition active:scale-95 ${
                  orderMode === 'interleaved'
                    ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-black text-slate-900 flex items-center justify-between">
                  <span>🔀 Trộn ngẫu nhiên giãn cách (Khuyên dùng)</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Chuẩn Spaced Repetition</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Các câu hỏi được trộn ngẫu nhiên và <strong>giãn cách tối đa</strong>: Tuyệt đối không bao giờ xuất hiện 2 câu của cùng một từ liên tiếp. Não bộ sẽ liên tục được kích thích gợi nhớ ngắt quãng!
                </p>
              </button>

              <button
                type="button"
                onClick={() => setOrderMode('staged')}
                className={`p-4 rounded-2xl border-2 text-left transition active:scale-95 ${
                  orderMode === 'staged'
                    ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-black text-slate-900 flex items-center justify-between">
                  <span>🪜 Phân tầng cấp độ (Dễ ➔ Khó)</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Theo bậc thang</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Làm hết nhận diện nghĩa ➔ Nghe âm thanh ➔ Tự gõ chữ Hán. Trong từng tầng vẫn trộn ngẫu nhiên giãn cách giữa các từ.
                </p>
              </button>
            </div>
          </div>

          {/* Section 4: Smart Retry Loop & Additional settings */}
          <div className="space-y-3 pt-3 border-t border-stone-100">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap size={14} className="text-indigo-600" />
              <span>4. Vòng lặp chống quên & Giới hạn câu hỏi:</span>
            </span>

            {/* Smart Retry on Wrong Answer */}
            <div
              onClick={() => setRetryWrongQuestions(!retryWrongQuestions)}
              className="flex items-center justify-between p-3.5 bg-stone-50 hover:bg-stone-100 rounded-2xl border border-stone-200 cursor-pointer transition"
            >
              <div className="space-y-0.5 pr-2">
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span>🔄 Tự động lặp lại câu làm sai ở cuối bài thi</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-black rounded bg-emerald-100 text-emerald-800">
                    Nên bật
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 leading-relaxed">
                  Nếu bạn trả lời sai một câu, câu hỏi đó sẽ được tự động đưa về cuối bài thi để bạn làm lại cho đến khi nhớ hẳn!
                </div>
              </div>
              <input
                type="checkbox"
                checked={retryWrongQuestions}
                onChange={() => {}}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer shrink-0"
              />
            </div>

            {/* Limit Total Questions */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold text-slate-600">Giới hạn số câu hỏi (nếu muốn làm bài ngắn):</div>
              <div className="flex items-center gap-2 flex-wrap">
                {[-1, 10, 20, 30].map((count, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setQuestionCount(count)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
                      questionCount === count
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                    }`}
                  >
                    {count === -1 ? `Toàn bộ đề thi (${maxPossibleQuestions} câu)` : `${count} câu`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={() => setActiveStep('list')}
              className="px-4 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition"
            >
              Quay lại danh sách giỏ
            </button>

            <button
              onClick={handleStartQuiz}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-black text-sm shadow-md transition active:scale-95"
            >
              <Play size={16} />
              <span>Bắt Đầu Ôn Tập Ngay ({maxPossibleQuestions} câu) ➔</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. STEP 3: ACTIVE QUIZ PLAYER */}
      {activeStep === 'quiz' && currentQ && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-6 max-w-3xl mx-auto">
          {/* Quiz Header & Progress */}
          <div className="space-y-3 border-b border-stone-100 pb-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="inline-flex items-center gap-1">
                  <span className="flex items-center gap-1.5 text-indigo-700 font-extrabold bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100 shrink-0">
                    Câu {currentIndex + 1} / {quizQuestions.length}
                  </span>

                  <div className="inline-flex items-center gap-0.5 bg-stone-100 p-0.5 rounded-xl border border-stone-200">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentIndex === 0}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition active:scale-95"
                      title="Câu trước (Alt + ←)"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      disabled={!isAnswerSubmitted && !results[currentIndex]}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition active:scale-95"
                      title="Câu tiếp theo (Alt + →)"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Word repeat badge */}
                {currentQ.repeatIndex && (
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1">
                    <Repeat size={12} className="text-amber-600" />
                    <span>Chữ: <strong className="hanzi-font text-xs font-black">{currentQ.word.hanzi}</strong> (Lần {currentQ.repeatIndex}/{currentQ.totalRepeatsForWord || '?'})</span>
                  </span>
                )}

                {/* Retry badge if this was repeated after wrong answer */}
                {currentQ.isRetry && (
                  <span className="text-[11px] font-black px-2 py-0.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 animate-pulse">
                    ⚠️ Luyện lại câu sai
                  </span>
                )}

                {/* Persistent Pinyin On/Off Toggle */}
                <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200 shrink-0 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-600 pl-2 flex items-center gap-1">
                    <span>Pinyin</span>
                    <kbd className="hidden sm:inline-block text-[9px] font-mono bg-white px-1 py-0.2 rounded border border-stone-200 text-slate-400">P</kbd>:
                  </span>
                  <button
                    onClick={() => toggleQuizPinyin(false)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition active:scale-95 ${
                      !showQuizPinyin
                        ? 'bg-rose-500 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Ẩn toàn bộ Pinyin ở cả câu hỏi và các đáp án (Phím tắt: P)"
                  >
                    <EyeOff size={12} />
                    <span>Tắt</span>
                  </button>
                  <button
                    onClick={() => toggleQuizPinyin(true)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition active:scale-95 ${
                      showQuizPinyin
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Hiện Pinyin trợ giúp (Phím tắt: P)"
                  >
                    <Eye size={12} />
                    <span>Bật</span>
                  </button>
                </div>
              </div>

              <span className="flex items-center gap-2">
                <span>Đúng: <strong className="text-emerald-600">{correctCount}</strong></span>
                <span>Sai: <strong className="text-rose-600">{results.filter(r => !r.isCorrect).length}</strong></span>
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-indigo-600 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-600">
                  {currentQ.type === 'zh_to_vn' && '🇨🇳 Chữ Hán ➔ Chọn nghĩa tiếng Việt'}
                  {currentQ.type === 'vn_to_zh' && '🇻🇳 Nghĩa Việt ➔ Chọn chữ Hán'}
                  {currentQ.type === 'zh_to_pinyin' && '🔤 Chữ Hán ➔ Chọn Pinyin & Thanh điệu'}
                  {currentQ.type === 'pinyin_to_zh' && '🔤 Cho Pinyin ➔ Nhận diện chữ Hán'}
                  {currentQ.type === 'zh_to_hanviet' && '🇻🇳 Chữ Hán ➔ Chọn âm Hán Việt'}
                  {currentQ.type === 'fill_blank' && '✍️ Điền từ vào chỗ trống'}
                  {currentQ.type === 'hanzi_typing' && '⌨️ Luyện gõ chữ Hán (IME)'}
                  {currentQ.type === 'sentence_typing' && '✍️ Viết câu tiếng Trung (Ngữ cảnh câu mẫu)'}
                  {currentQ.type === 'listening_choice' && '🔊 Luyện nghe phát âm chuẩn'}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {currentQ.prompt}
              </h3>

              {currentQ.subPrompt && currentQ.type !== 'sentence_typing' && (
                <div className="text-base sm:text-2xl font-black text-indigo-900 py-1 flex items-center gap-2 flex-wrap">
                  <span className="hanzi-font">{currentQ.subPrompt}</span>
                  {currentQ.type === 'zh_to_vn' && showQuizPinyin && (
                    <span className="text-sm font-bold text-slate-500">
                      ({currentQ.word.pinyin})
                    </span>
                  )}
                  {currentQ.type === 'listening_choice' && (
                    <button
                      onClick={() => onSpeak(currentQ.word.hanzi)}
                      className="p-2 rounded-xl bg-cinnabar-600 text-white hover:bg-cinnabar-700 transition"
                      title="Bấm để nghe lại"
                    >
                      <Volume2 size={16} />
                    </button>
                  )}
                </div>
              )}

              {/* Hanzi Typing Pinyin Hint */}
              {currentQ.type === 'hanzi_typing' && showQuizPinyin && (
                <div className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-100 inline-block mt-1">
                  🔤 Gợi ý Pinyin: {currentQ.word.pinyin}
                </div>
              )}

              {/* Context Box for sentence_typing */}
              {currentQ.type === 'sentence_typing' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-xl bg-indigo-100 text-indigo-900 text-xs font-black">
                      Từ trọng tâm: <strong className="hanzi-font text-sm">{currentQ.word.hanzi}</strong> {showQuizPinyin && `(${currentQ.word.pinyin})`} — {currentQ.word.meaning}
                    </span>

                    <button
                      onClick={() => onSpeak(currentQ.correctAnswer)}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-slate-700 border border-stone-200 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition active:scale-95"
                      title="Bấm để nghe phát âm câu mẫu"
                    >
                      <Volume2 size={14} className="text-amber-500" />
                      <span>Nghe câu mẫu</span>
                    </button>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Dịch nghĩa câu cần viết:
                    </div>
                    <div className="text-base sm:text-xl font-black text-slate-900">
                      👉 {currentQ.clozeMeaning}
                    </div>
                  </div>

                  {showQuizPinyin && currentQ.clozePinyin && (
                    <div className="pt-2 border-t border-indigo-100/80 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-bold text-indigo-800 bg-white px-2.5 py-1 rounded-lg border border-indigo-200 shadow-2xs">
                        🔤 Pinyin câu mẫu: {currentQ.clozePinyin}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Cloze Sentence Display for fill_blank */}
              {currentQ.clozeSentence && currentQ.type === 'fill_blank' && (
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
                  <div className="hanzi-font text-lg sm:text-2xl font-black text-slate-900">
                    {currentQ.clozeSentence}
                  </div>
                  {showQuizPinyin && currentQ.clozePinyin && (
                    <div className="text-xs text-indigo-700 font-bold">
                      🔤 Pinyin câu: {currentQ.clozePinyin}
                    </div>
                  )}
                  <div className="text-xs text-amber-900 font-semibold">
                    👉 Dịch nghĩa: {currentQ.clozeMeaning}
                  </div>
                </div>
              )}
            </div>

            {/* Answer Mode 1: Multiple Choice Options */}
            {currentQ.options && currentQ.options.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isChosen = selectedOption === opt;
                  const isCorrectAnswer = opt === currentQ.correctAnswer;

                  let btnStyle = 'bg-stone-50 hover:bg-stone-100 text-slate-800 border-stone-200';
                  if (isAnswerSubmitted) {
                    if (isCorrectAnswer) {
                      btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-md ring-2 ring-emerald-300 font-black';
                    } else if (isChosen && !isCorrectAnswer) {
                      btnStyle = 'bg-rose-500 text-white border-rose-600 shadow-md ring-2 ring-rose-300 font-bold';
                    } else {
                      btnStyle = 'bg-stone-100 text-slate-400 border-stone-200 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(opt)}
                      className={`p-4 rounded-2xl border-2 text-left font-bold text-sm sm:text-base transition active:scale-95 flex items-center justify-between ${btnStyle}`}
                    >
                      {currentQ.type === 'zh_to_pinyin' ? (
                        <span className="text-base sm:text-lg font-black text-slate-900 tracking-wide">{opt}</span>
                      ) : currentQ.type === 'zh_to_hanviet' ? (
                        <span className="text-base sm:text-lg font-black text-slate-900 uppercase">{opt}</span>
                      ) : (
                        renderOptionLabel(opt)
                      )}
                      {isAnswerSubmitted && isCorrectAnswer && <CheckCircle2 size={18} />}
                      {isAnswerSubmitted && isChosen && !isCorrectAnswer && <XCircle size={18} />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Answer Mode 2: Typing Input */}
            {(currentQ.type === 'hanzi_typing' || currentQ.type === 'sentence_typing') && (
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    disabled={isAnswerSubmitted}
                    value={typedAnswer}
                    onChange={(e) => setTypedAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheckTyping()}
                    placeholder={
                      currentQ.type === 'sentence_typing'
                        ? 'Gõ cả câu tiếng Trung vào đây (bằng bộ gõ IME)...'
                        : 'Gõ chữ Hán vào đây (VD: gõ pinyin -> chọn chữ)...'
                    }
                    className={`flex-1 p-3.5 rounded-2xl border-2 text-base sm:text-lg font-bold font-sans focus:outline-none transition ${
                      isAnswerSubmitted
                        ? isCurrentCorrect
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-stone-200 focus:border-indigo-500 bg-white'
                    }`}
                  />
                  {!isAnswerSubmitted && (
                    <button
                      onClick={handleCheckTyping}
                      className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm transition active:scale-95 shrink-0 shadow-xs"
                    >
                      Kiểm Tra
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Explanation & Feedback Banner upon Answer */}
            {isAnswerSubmitted && (
              <div className={`p-4 rounded-2xl border space-y-1.5 animate-fadeIn ${
                isCurrentCorrect
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}>
                <div className="flex items-center justify-between font-black text-sm">
                  <span className="flex items-center gap-1.5">
                    {isCurrentCorrect ? <CheckCircle2 className="text-emerald-600" size={17} /> : <XCircle className="text-rose-600" size={17} />}
                    {isCurrentCorrect ? 'Chính xác! Làm rất tốt! 🎉' : 'Chưa đúng rồi!'}
                  </span>
                  <button
                    onClick={() => onSpeak(currentQ.type === 'sentence_typing' ? currentQ.correctAnswer : currentQ.word.hanzi)}
                    className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-700 shadow-2xs transition"
                    title="Nghe phát âm"
                  >
                    <Volume2 size={15} />
                  </button>
                </div>
                <p className="text-xs leading-relaxed font-medium">
                  {currentQ.explanation}
                </p>
                {!isCurrentCorrect && retryWrongQuestions && !currentQ.isRetry && (
                  <p className="text-[11px] font-bold text-amber-800 pt-1 border-t border-rose-200/60 flex items-center gap-1">
                    <Repeat size={12} />
                    <span>Hệ thống đã tự động thêm chữ này vào cuối bài thi để bạn luyện lại cho đến khi thuộc!</span>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-100 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep('setup')}
                className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-600 text-xs font-bold transition active:scale-95"
              >
                Hủy bài tập
              </button>

              {currentIndex > 0 && (
                <button
                  onClick={handlePrevQuestion}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-extrabold transition active:scale-95 border border-stone-200 shadow-2xs"
                  title="Xem lại câu trước (Phím tắt: Alt + ←)"
                >
                  <ArrowLeft size={14} />
                  <span>Câu trước</span>
                  <kbd className="hidden sm:inline-block text-[10px] font-mono bg-stone-200 px-1 py-0.5 rounded text-slate-500">
                    Alt+←
                  </kbd>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {(isAnswerSubmitted || !!results[currentIndex]) && (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition active:scale-95"
                  title="Chuyển sang câu tiếp theo (Phím tắt: Alt + →)"
                >
                  <span>{currentIndex + 1 < quizQuestions.length ? 'Câu tiếp theo' : 'Xem Kết Quả'}</span>
                  <kbd className="hidden sm:inline-block text-[10px] font-mono bg-indigo-500 px-1.5 py-0.5 rounded text-white/90">
                    Alt+→
                  </kbd>
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. STEP 4: QUIZ RESULTS SUMMARY */}
      {activeStep === 'results' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-6 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
            <Trophy size={40} />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">Hoàn Thành Bài Ôn Tập Chuyên Sâu</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Kết Quả Chung: {scorePercent}%
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Bạn đã hoàn thành <strong>{results.length}</strong> câu hỏi ôn tập, trả lời đúng <strong>{correctCount}</strong> câu.
            </p>
          </div>

          {/* Word-level Mastery Breakdown: The key value of multi-repeat practice! */}
          <div className="bg-stone-50 rounded-3xl p-5 border border-stone-200 text-left space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap size={15} className="text-indigo-600" />
                <span>Mức Độ Nắm Vững Từng Chữ Hán ({wordMasteryMap.length} chữ):</span>
              </span>
              <span className="text-xs font-bold text-slate-600">
                Đã thuộc lòng 100%: <strong className="text-emerald-600">{fullyMasteredWords}</strong> / {wordMasteryMap.length} chữ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
              {wordMasteryMap.map(({ word, total, correct, failedTypes }) => {
                const isMastered = correct === total && total > 0;
                return (
                  <div
                    key={word.hanzi}
                    className={`p-3 rounded-2xl border transition flex items-center justify-between ${
                      isMastered
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : 'bg-amber-50/70 border-amber-200 text-amber-950'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-2xs">
                        <span className="hanzi-font text-xl font-black text-slate-900">{word.hanzi}</span>
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                          <span>{word.pinyin}</span>
                          <span className="text-slate-400 font-normal">• {word.meaning}</span>
                        </div>
                        {failedTypes.length > 0 ? (
                          <div className="text-[10px] text-rose-600 font-bold mt-0.5">
                            Cần ôn: {failedTypes.join(', ')}
                          </div>
                        ) : (
                          <div className="text-[10px] text-emerald-700 font-bold mt-0.5">
                            🌟 Đã thuộc mọi dạng bài!
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`text-xs font-black px-2 py-1 rounded-lg ${
                        isMastered ? 'bg-emerald-200/80 text-emerald-900' : 'bg-amber-200/80 text-amber-900'
                      }`}>
                        {correct}/{total} đúng
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3 pt-3 border-t border-stone-100 flex-wrap">
            {correctCount < results.length && (
              <button
                onClick={handleRetakeWrongAnswers}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition active:scale-95"
              >
                <RotateCcw size={14} />
                <span>Ôn lại các chữ còn sai ({wordMasteryMap.filter(w => w.correct < w.total).length} chữ)</span>
              </button>
            )}

            <button
              onClick={handleStartQuiz}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md transition active:scale-95"
            >
              <RotateCcw size={14} />
              <span>Làm bài ôn tập mới</span>
            </button>

            <button
              onClick={() => setActiveStep('list')}
              className="px-5 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold text-xs transition active:scale-95"
            >
              Quay lại danh sách giỏ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
