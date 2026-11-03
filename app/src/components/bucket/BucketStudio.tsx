import React, { useState, useMemo } from 'react';
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
  Plus,
  HelpCircle,
  Settings2,
  Layers,
  PenTool,
  Eye,
  EyeOff
} from 'lucide-react';
import { BucketWord, QuestionType, QuizConfig, QuizQuestion, QuizResultItem } from '../../types/bucket';
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

  // Setup options
  const [enabledTypes, setEnabledTypes] = useState<QuestionType[]>([
    'vn_to_zh',
    'zh_to_vn',
    'fill_blank',
    'hanzi_typing',
    'sentence_typing',
    'listening_choice'
  ]);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);

  // Active Quiz State
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState<boolean>(false);
  const [showSentencePinyinHint, setShowSentencePinyinHint] = useState<boolean>(false);
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

  // Start Quiz
  const handleStartQuiz = () => {
    const config: QuizConfig = {
      enabledTypes,
      questionCount,
      shuffle: shuffleQuestions
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
      return <span className="leading-relaxed">{opt}</span>;
    }
    const hanzi = match[1].trim();
    const pinyin = match[2].trim();

    if (!showQuizPinyin) {
      return <span className="hanzi-font text-xl sm:text-2xl font-black leading-none">{hanzi}</span>;
    }

    return (
      <span className="flex items-center gap-2 flex-wrap">
        <span className="hanzi-font text-lg sm:text-xl font-black leading-none">{hanzi}</span>
        <span className="text-xs sm:text-sm font-bold text-indigo-600">({pinyin})</span>
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
    }

    setResults(prev => [
      ...prev,
      {
        question: currentQ,
        userAnswer: opt,
        isCorrect: correct
      }
    ]);
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
    }

    setResults(prev => [
      ...prev,
      {
        question: currentQ,
        userAnswer: typedAnswer.trim(),
        isCorrect: correct
      }
    ]);
  };

  // Next Question or Finish
  const handleNextQuestion = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setTypedAnswer('');
      setIsAnswerSubmitted(false);
      setIsCurrentCorrect(false);
      setShowSentencePinyinHint(false);

      if (quizQuestions[nextIdx]?.type === 'listening_choice') {
        setTimeout(() => onSpeak(quizQuestions[nextIdx].word.hanzi), 350);
      }
    } else {
      setActiveStep('results');
    }
  };

  // Quick Add Sample Words
  const handleAddSampleWords = () => {
    const all = getAllAvailableWords();
    const sample = all.slice(0, 10);
    addBulkToBucket(sample);
  };

  // Retake only wrong answers
  const handleRetakeWrongAnswers = () => {
    const wrongWords = results.filter(r => !r.isCorrect).map(r => r.question.word);
    if (wrongWords.length === 0) return;

    const config: QuizConfig = {
      enabledTypes,
      questionCount: wrongWords.length,
      shuffle: true
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
              Gom bất kỳ từ vựng nào bạn muốn từ các bài học và các chuyên đề thực tế vào một giỏ. Sau đó tự cấu hình các dạng bài kiểm tra (Dịch nghĩa, Điền từ, Luyện gõ, Nghe phát âm) để rèn luyện trí nhớ!
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
            <span>2. Cấu Hình Bài Kiểm Tra</span>
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
          {/* Action Toolbar */}
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

          {/* Empty state */}
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
                  Hãy bấm biểu tượng <strong>+ Giỏ ôn tập</strong> ở bất kỳ thẻ từ vựng nào trong mục <strong>Giáo Trình Theo Bài</strong> hoặc <strong>Kho Chuyên Đề Từ Vựng</strong> để thêm các từ bạn muốn ôn luyện vào đây.
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
            /* Words Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredBucket.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-2xs hover:shadow-sm transition flex flex-col justify-between space-y-3 group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        {/* Hanzi Box */}
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

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromBucket(item.hanzi)}
                        className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Bỏ từ này khỏi giỏ"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    {/* Example Sentence if available */}
                    {item.exampleHanzi && (
                      <div className="mt-2.5 text-[11px] bg-stone-50 p-2 rounded-xl text-slate-600 border border-stone-100">
                        <div className="font-bold text-slate-800">{item.exampleHanzi}</div>
                        <div className="text-[10px] text-slate-500">{item.exampleMeaning}</div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Source & Sound */}
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
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-6 max-w-3xl mx-auto">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
              Tùy Chọn Cấu Hình Bài Kiểm Tra
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-1">
              Chọn Các Loại Câu Hỏi Bạn Muốn Có Trong Đề Thi
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Hệ thống sẽ dựa vào danh sách <strong>{bucket.length} từ vựng</strong> trong giỏ của bạn và tự động sinh ra đề kiểm tra với các dạng câu hỏi được chọn bên dưới:
            </p>
          </div>

          {/* Question Types Checkboxes */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              1. Bật / Tắt các dạng bài tập:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Type 1: VN -> ZH */}
              <div
                onClick={() => toggleType('vn_to_zh')}
                className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('vn_to_zh')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-60'
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
                    <span>Tiếng Việt ➔ Tiếng Trung</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Hiện nghĩa tiếng Việt, người học chọn chữ Hán và Pinyin đúng.
                  </p>
                </div>
              </div>

              {/* Type 2: ZH -> VN */}
              <div
                onClick={() => toggleType('zh_to_vn')}
                className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('zh_to_vn')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-60'
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
                    <span>Tiếng Trung ➔ Tiếng Việt</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Hiện chữ Hán mục tiêu, người học chọn nghĩa tiếng Việt tương ứng.
                  </p>
                </div>
              </div>

              {/* Type 3: Fill Blank */}
              <div
                onClick={() => toggleType('fill_blank')}
                className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('fill_blank')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-60'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  enabledTypes.includes('fill_blank') ? 'bg-indigo-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {enabledTypes.includes('fill_blank') && <Check size={13} />}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <Sparkles size={15} className="text-amber-500" />
                    <span>Điền từ còn thiếu vào câu</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Hiện câu ví dụ khuyết từ, người học chọn từ đúng để hoàn thành câu.
                  </p>
                </div>
              </div>

              {/* Type 4: Hanzi Typing */}
              <div
                onClick={() => toggleType('hanzi_typing')}
                className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('hanzi_typing')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-60'
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
                  <p className="text-[11px] text-slate-500 mt-1">
                    Tự tay gõ từ vựng chữ Hán vào ô theo nghĩa và gợi ý Pinyin để rèn phản xạ.
                  </p>
                </div>
              </div>

              {/* Type 5: Sentence Typing (Writing full sentence based on word's contextual example) */}
              <div
                onClick={() => toggleType('sentence_typing')}
                className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
                  enabledTypes.includes('sentence_typing')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-60'
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
                    <span>Viết câu tiếng Trung (Theo ngữ cảnh)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Dựa vào nghĩa câu ví dụ của từ, tự gõ lại toàn bộ câu tiếng Trung hoàn chỉnh.
                  </p>
                </div>
              </div>

              {/* Type 6: Listening */}
              <div
                onClick={() => toggleType('listening_choice')}
                className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 sm:col-span-2 ${
                  enabledTypes.includes('listening_choice')
                    ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 opacity-60'
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
                    <span>Nghe phát âm chuẩn ➔ Chọn chữ Hán</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Hệ thống tự động phát âm giọng bản xứ, người học nghe và chọn chữ Hán chính xác.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Number of Questions */}
          <div className="space-y-2 pt-2 border-t border-stone-100">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              2. Số lượng câu hỏi:
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {[5, 10, 15, bucket.length].map((count, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuestionCount(count)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
                    questionCount === count
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                  }`}
                >
                  {count === bucket.length ? `Tất cả (${bucket.length} câu)` : `${count} câu`}
                </button>
              ))}
            </div>
          </div>

          {/* Shuffle Toggle */}
          <div className="flex items-center justify-between p-3.5 bg-stone-50 rounded-2xl border border-stone-200">
            <div>
              <div className="text-xs font-bold text-slate-800">Trộn ngẫu nhiên thứ tự câu hỏi & đáp án</div>
              <div className="text-[11px] text-slate-500">Giúp rèn luyện phản xạ không bị học vẹt</div>
            </div>
            <input
              type="checkbox"
              checked={shuffleQuestions}
              onChange={(e) => setShuffleQuestions(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveStep('list')}
              className="px-4 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition"
            >
              Quay lại danh sách
            </button>

            <button
              onClick={handleStartQuiz}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-extrabold text-sm shadow-md transition active:scale-95"
            >
              <Play size={16} />
              <span>Bắt Đầu Làm Bài Ngay ➔</span>
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
                <span className="flex items-center gap-1.5 text-indigo-700 font-extrabold bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100 shrink-0">
                  Câu {currentIndex + 1} / {quizQuestions.length}
                </span>

                {/* Persistent Pinyin On/Off Toggle for Questions & Answers */}
                <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200 shrink-0">
                  <span className="text-[11px] font-bold text-slate-500 pl-2">Pinyin:</span>
                  <button
                    onClick={() => toggleQuizPinyin(false)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition active:scale-95 ${
                      !showQuizPinyin
                        ? 'bg-rose-500 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Ẩn toàn bộ Pinyin ở cả câu hỏi và các đáp án lựa chọn"
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
                    title="Hiện Pinyin trợ giúp ở câu hỏi và đáp án"
                  >
                    <Eye size={12} />
                    <span>Bật</span>
                  </button>
                </div>
              </div>

              <span className="flex items-center gap-2">
                <span>Đúng: <strong className="text-emerald-600">{correctCount}</strong></span>
                <span>Sai: <strong className="text-rose-600">{results.length - correctCount}</strong></span>
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
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-600">
                {currentQ.type === 'vn_to_zh' && '🇻🇳 Dịch sang tiếng Trung'}
                {currentQ.type === 'zh_to_vn' && '🇨🇳 Dịch sang tiếng Việt'}
                {currentQ.type === 'fill_blank' && '✍️ Điền từ vào chỗ trống'}
                {currentQ.type === 'hanzi_typing' && '⌨️ Luyện gõ chữ Hán'}
                {currentQ.type === 'sentence_typing' && '✍️ Viết câu tiếng Trung (Ngữ cảnh câu mẫu)'}
                {currentQ.type === 'listening_choice' && '🔊 Luyện nghe phát âm'}
              </span>

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

              {/* Hanzi Typing Pinyin Hint (governed by showQuizPinyin) */}
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

                  {/* Pinyin Hint for sentence_typing governed by showQuizPinyin */}
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
                      {renderOptionLabel(opt)}
                      {isAnswerSubmitted && isCorrectAnswer && <CheckCircle2 size={18} />}
                      {isAnswerSubmitted && isChosen && !isCorrectAnswer && <XCircle size={18} />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Answer Mode 2: Typing Input (for single hanzi or full sentence) */}
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
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setActiveStep('setup')}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-600 text-xs font-bold transition"
            >
              Hủy bài tập
            </button>

            {isAnswerSubmitted && (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-md transition active:scale-95"
              >
                <span>{currentIndex + 1 < quizQuestions.length ? 'Câu tiếp theo' : 'Xem Kết Quả'}</span>
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 6. STEP 4: QUIZ RESULTS SUMMARY */}
      {activeStep === 'results' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-6 max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
            <Trophy size={40} />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">Hoàn Thành Bài Kiểm Tra</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Kết Quả: {scorePercent}%
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Bạn đã trả lời đúng <strong>{correctCount}</strong> trên tổng số <strong>{results.length}</strong> câu hỏi.
            </p>
          </div>

          {/* Results Breakdown */}
          <div className="text-left space-y-2 max-h-60 overflow-y-auto pr-1">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Chi tiết từng từ:</div>
            {results.map((r, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl border text-xs flex items-center justify-between ${
                  r.isCorrect ? 'bg-emerald-50/60 border-emerald-200 text-slate-800' : 'bg-rose-50/60 border-rose-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="hanzi-font font-black text-base text-slate-900">{r.question.word.hanzi}</span>
                  <span className="text-slate-500">({r.question.word.pinyin})</span>
                  <span className="font-bold text-slate-800">• {r.question.word.meaning}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {r.isCorrect ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                      <CheckCircle2 size={14} /> Đúng
                    </span>
                  ) : (
                    <span className="text-rose-700 font-bold flex items-center gap-1 text-[11px]">
                      <XCircle size={14} /> Sai
                    </span>
                  )}
                  <button
                    onClick={() => onSpeak(r.question.type === 'sentence_typing' ? r.question.correctAnswer : r.question.word.hanzi)}
                    className="p-1 rounded-md bg-white hover:bg-stone-100 text-slate-600"
                    title="Nghe phát âm"
                  >
                    <Volume2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3 pt-4 border-t border-stone-100 flex-wrap">
            {correctCount < results.length && (
              <button
                onClick={handleRetakeWrongAnswers}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition active:scale-95"
              >
                <RotateCcw size={14} />
                <span>Ôn lại các từ làm sai ({results.length - correctCount})</span>
              </button>
            )}

            <button
              onClick={handleStartQuiz}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold text-xs transition active:scale-95"
            >
              <RotateCcw size={14} />
              <span>Làm lại bài mới</span>
            </button>

            <button
              onClick={() => setActiveStep('list')}
              className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition active:scale-95"
            >
              Quay lại danh sách giỏ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
