import React, { useState, useEffect, useRef } from 'react';
import {
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  Trophy,
  Copy,
  Check,
  Dices,
  Sparkles,
  Volume2,
  VolumeX,
  Lightbulb,
  Shuffle
} from 'lucide-react';
import { ThematicSentence } from '../../types/thematic';

interface TypingStudioProps {
  currentSentence: ThematicSentence;
  sentencePool: ThematicSentence[];
  selectedSentenceIndex: number;
  isDynamic: boolean;
  onPrevSentence: () => void;
  onNextSentence: () => void;
  onRandomSentence: () => void;
  onGenerateDynamic: () => void;
  onSelectSentenceIndex: (index: number) => void;
  onSpeak: (text: string, tone?: number) => void;
  onCompleted: () => void;
  autoSpeakEnabled?: boolean;
  onToggleAutoSpeak?: (enabled: boolean) => void;
}

export const TypingStudio: React.FC<TypingStudioProps> = ({
  currentSentence,
  sentencePool,
  selectedSentenceIndex,
  isDynamic,
  onPrevSentence,
  onNextSentence,
  onRandomSentence,
  onGenerateDynamic,
  onSelectSentenceIndex,
  onSpeak,
  onCompleted,
  autoSpeakEnabled = true,
  onToggleAutoSpeak
}) => {
  const [userInput, setUserInput] = useState<string>('');
  // 2 independent clean switches as requested
  const [showTargetHanzi, setShowTargetHanzi] = useState<boolean>(false);
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Reset input on target sentence change
  useEffect(() => {
    setUserInput('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentSentence]);

  // Global keyboard shortcuts for sentence navigation:
  // - Alt + ArrowLeft: Previous sentence (works universally, even while focusing text input)
  // - Alt + ArrowRight: Next sentence (works universally, even while focusing text input)
  // - Bare ArrowLeft / ArrowRight: When input text box is not focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      const isInputFocused = activeTag === 'input' || activeTag === 'textarea';

      // Alt + ArrowLeft or (ArrowLeft when not focused in input)
      if ((e.altKey && e.key === 'ArrowLeft') || (!isInputFocused && e.key === 'ArrowLeft')) {
        e.preventDefault();
        onPrevSentence();
        return;
      }

      // Alt + ArrowRight or (ArrowRight when not focused in input)
      if ((e.altKey && e.key === 'ArrowRight') || (!isInputFocused && e.key === 'ArrowRight')) {
        e.preventDefault();
        onNextSentence();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrevSentence, onNextSentence]);

  // Target and user characters comparison
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

  // Auto-trigger completion handler
  useEffect(() => {
    if (isCompleted && userInput.length > 0) {
      onCompleted();
    }
  }, [isCompleted]);

  const handleCopySentence = () => {
    navigator.clipboard.writeText(currentSentence.hanzi);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-md space-y-6">
      {/* 1. Action Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-stone-100 pb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-800 font-extrabold text-xs">
            {isDynamic ? '✨ Câu Tạo Ngẫu Nhiên' : `Câu #${selectedSentenceIndex + 1} / ${sentencePool.length}`}
          </span>

          <span className="px-2.5 py-1.5 rounded-xl bg-amber-50 text-amber-800 font-bold text-xs">
            Độ khó: {currentSentence.difficulty || 'Cơ bản'}
          </span>

          <span className="px-2.5 py-1.5 rounded-xl bg-stone-100 text-slate-600 font-bold text-xs">
            {targetChars.length} ký tự
          </span>

          {/* Quick Prev / Next Buttons in Header with Shortcut Badges */}
          <div className="inline-flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200">
            <button
              onClick={onPrevSentence}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl hover:bg-white text-slate-700 text-xs font-bold transition active:scale-95 shadow-2xs"
              title="Câu trước (Phím tắt: Alt + ←)"
            >
              <ArrowLeft size={13} />
              <span className="hidden sm:inline">Câu trước</span>
              <kbd className="text-[10px] font-mono bg-stone-200/90 px-1 py-0.2 rounded text-slate-500">Alt+←</kbd>
            </button>
            <button
              onClick={onNextSentence}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl hover:bg-white text-slate-700 text-xs font-bold transition active:scale-95 shadow-2xs"
              title="Câu sau (Phím tắt: Alt + →)"
            >
              <span className="hidden sm:inline">Câu sau</span>
              <kbd className="text-[10px] font-mono bg-stone-200/90 px-1 py-0.2 rounded text-slate-500">Alt+→</kbd>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Clean, Independent Mode Toggles & Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* 1. Toggle Chữ Hán mẫu (Bật / Tắt) */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200">
            <span className="text-[11px] font-bold text-slate-500 pl-2">Chữ Hán:</span>
            <button
              onClick={() => setShowTargetHanzi(false)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition ${
                !showTargetHanzi
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ẩn chữ Hán mẫu (Chế độ thử thách tự nhớ chữ để gõ)"
            >
              <EyeOff size={13} />
              <span>Ẩn</span>
            </button>
            <button
              onClick={() => setShowTargetHanzi(true)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition ${
                showTargetHanzi
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Hiện chữ Hán mẫu để nhìn theo gõ"
            >
              <Eye size={13} />
              <span>Hiện</span>
            </button>
          </div>

          {/* 2. Toggle Phiên âm Pinyin (Bật / Tắt) */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200">
            <span className="text-[11px] font-bold text-slate-500 pl-2">Pinyin:</span>
            <button
              onClick={() => setShowPinyin(false)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition ${
                !showPinyin
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Tắt hiển thị Pinyin"
            >
              Tắt
            </button>
            <button
              onClick={() => setShowPinyin(true)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition ${
                showPinyin
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Bật hiển thị Pinyin"
            >
              Bật
            </button>
          </div>

          {/* 3. Toggle Tắt / Bật phát âm tự động khi gõ xong */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border border-stone-200">
            <span className="text-[11px] font-bold text-slate-500 pl-2">Phát âm:</span>
            <button
              onClick={() => onToggleAutoSpeak?.(false)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                !autoSpeakEnabled
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Tắt tự động đọc âm thanh khi gõ xong câu"
            >
              <VolumeX size={13} />
              <span>Tắt</span>
            </button>
            <button
              onClick={() => {
                onToggleAutoSpeak?.(true);
                onSpeak(currentSentence.hanzi);
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                autoSpeakEnabled
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Bật tự động phát âm chuẩn khi gõ xong câu"
            >
              <Volume2 size={13} />
              <span>Bật</span>
            </button>
          </div>

          {/* Random Sentence Button */}
          <button
            onClick={onRandomSentence}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold transition active:scale-95 border border-stone-200"
            title="Đổi một câu ngẫu nhiên trong danh sách"
          >
            <Dices size={15} className="text-indigo-600" />
            <span className="hidden sm:inline">Đổi câu ngẫu nhiên</span>
            <span className="sm:hidden">Đổi câu</span>
          </button>

          {/* Dynamic Sentence Generator Button */}
          <button
            onClick={onGenerateDynamic}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-xs font-bold transition active:scale-95 shadow-xs"
            title="Tạo một câu kết hợp ngữ pháp mới ngẫu nhiên"
          >
            <Sparkles size={14} className="text-amber-300" />
            <span>Tạo câu mới</span>
          </button>

          {/* Pronounce Button */}
          <button
            onClick={() => onSpeak(currentSentence.hanzi)}
            className="p-2 rounded-2xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold transition active:scale-95 shadow-xs"
            title="Nghe phát âm chuẩn cả câu"
          >
            <Volume2 size={16} />
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopySentence}
            className="p-2 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-600 text-xs transition border border-stone-200"
            title="Sao chép chữ Hán câu này"
          >
            {isCopied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      {/* 2. Target Display Box with Clean Real-Time Toggle & Audio Button */}
      <div className={`p-6 rounded-3xl transition-all space-y-4 border ${
        !showTargetHanzi
          ? 'bg-slate-900 text-white border-slate-800 shadow-inner'
          : 'bg-stone-50 border-stone-200/80'
      }`}>
        {/* Vietnamese Prompt & Quick Listen Button */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
              !showTargetHanzi ? 'text-amber-400' : 'text-slate-500'
            }`}>
              <Lightbulb size={14} />
              <span>{!showTargetHanzi ? 'Thử thách: Nhớ chữ Hán dựa theo nghĩa tiếng Việt:' : 'Dịch nghĩa tiếng Việt:'}</span>
            </div>
            <div className={`text-base sm:text-xl font-black ${
              !showTargetHanzi ? 'text-white' : 'text-slate-900'
            }`}>
              👉 {currentSentence.meaning}
            </div>
          </div>

          <button
            onClick={() => onSpeak(currentSentence.hanzi)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-bold transition active:scale-95 shrink-0 shadow-xs ${
              !showTargetHanzi
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                : 'bg-white hover:bg-stone-100 text-slate-800 border border-stone-200 shadow-2xs'
            }`}
            title="Bấm để nghe phát âm cả câu này"
          >
            <Volume2 size={15} className="text-amber-400 shrink-0" />
            <span>Nghe câu</span>
          </button>
        </div>

        {/* Character-by-Character Tiles */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
            <span>{!showTargetHanzi ? 'Các ô chữ Hán cần gõ (Sẽ tự động mở chữ khi bạn gõ đúng):' : 'Câu chữ Hán mẫu:'}</span>
            {!showTargetHanzi && (
              <span className="text-amber-300 font-semibold">
                (Đang ở chế độ Thử Thách Ẩn Chữ Hán 🛡️)
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 py-1">
            {targetChars.map((char, idx) => {
              const typedChar = inputChars[idx];
              const hasTyped = typedChar !== undefined;
              const isMatch = hasTyped && typedChar === char;
              const isWrong = hasTyped && typedChar !== char;

              if (!showTargetHanzi) {
                return (
                  <div
                    key={idx}
                    className={`min-w-[44px] h-14 sm:min-w-[50px] sm:h-16 px-2 rounded-2xl flex flex-col items-center justify-center font-black transition-all ${
                      isMatch
                        ? 'bg-emerald-500 text-white shadow-md scale-105 ring-2 ring-emerald-300'
                        : isWrong
                        ? 'bg-rose-500 text-white shadow-md ring-2 ring-rose-300'
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

        {/* Pinyin display: purely governed by showPinyin toggle */}
        {showPinyin && (
          <div className={`text-sm sm:text-base font-bold pt-1 ${
            !showTargetHanzi ? 'text-indigo-300' : 'text-indigo-700'
          }`}>
            🔤 Pinyin: {currentSentence.pinyin}
          </div>
        )}

        {/* Grammar Tip */}
        {currentSentence.tip && (
          <div className={`text-xs p-3 rounded-2xl border ${
            !showTargetHanzi
              ? 'bg-slate-800/60 border-slate-700 text-amber-200'
              : 'bg-amber-50/80 border-amber-200/60 text-amber-900'
          }`}>
            💡 <strong>Gợi ý ngữ cảnh:</strong> {currentSentence.tip}
          </div>
        )}
      </div>

      {/* 3. Input Field with Instant Accuracy Feedback */}
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

        {/* Progress Bar */}
        <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              isCompleted ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-indigo-600'
            }`}
            style={{ width: `${Math.min(100, (correctCount / targetChars.length) * 100)}%` }}
          />
        </div>
      </div>

      {/* 4. Victory Banner */}
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

          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              onClick={() => onSpeak(currentSentence.hanzi)}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-xs transition active:scale-95"
              title="Phát lại âm thanh câu vừa hoàn thành"
            >
              <Volume2 size={16} className="text-emerald-700" />
              <span>Nghe lại phát âm</span>
            </button>

            <button
              onClick={onRandomSentence}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-xs transition active:scale-95"
            >
              <Dices size={16} />
              <span>🎲 Câu ngẫu nhiên</span>
            </button>

            <button
              onClick={onPrevSentence}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-xs transition active:scale-95"
              title="Quay lại câu trước (Phím tắt: Alt + ←)"
            >
              <ArrowLeft size={16} />
              <span>Câu trước</span>
              <kbd className="hidden sm:inline-block text-[10px] font-mono bg-emerald-100 px-1 py-0.5 rounded text-emerald-800">Alt+←</kbd>
            </button>

            <button
              onClick={onNextSentence}
              className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md transition active:scale-95"
              title="Chuyển sang câu sau (Phím tắt: Alt + →)"
            >
              <span>Câu kế tiếp</span>
              <kbd className="hidden sm:inline-block text-[10px] font-mono bg-emerald-700 px-1.5 py-0.5 rounded text-white/90">Alt+→</kbd>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* 5. Fast Quick-Jump Carousel */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Danh sách câu trong danh mục hiện tại ({sentencePool.length} câu):
          </div>
          <button
            onClick={onRandomSentence}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-extrabold flex items-center gap-1"
          >
            <Shuffle size={12} />
            <span>Trộn ngẫu nhiên</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
          {sentencePool.map((sent, idx) => {
            const isCurrent = !isDynamic && idx === selectedSentenceIndex;
            return (
              <div
                key={sent.id}
                onClick={() => onSelectSentenceIndex(idx)}
                className={`p-3 rounded-2xl border text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                  isCurrent
                    ? 'border-indigo-500 bg-indigo-50/90 shadow-xs ring-2 ring-indigo-400'
                    : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="hanzi-font text-sm font-bold text-slate-900 truncate">{sent.hanzi}</div>
                  <div className="text-[11px] text-slate-500 truncate">{sent.meaning}</div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      onSpeak(sent.hanzi);
                    }}
                    className="p-1 rounded-lg hover:bg-stone-200/60 text-slate-400 hover:text-indigo-600 transition"
                    title="Nghe câu này"
                  >
                    <Volume2 size={13} />
                  </span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-stone-100 text-slate-600">
                    #{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
