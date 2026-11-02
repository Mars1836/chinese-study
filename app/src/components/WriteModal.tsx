import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, Volume2, Eraser, Eye, EyeOff, RotateCcw, PenTool, Sparkles, Check } from 'lucide-react';
import { VocabItem } from '../types/lesson';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  vocab: VocabItem | null;
  onSpeak: (char: string) => void;
}

export const WriteModal: React.FC<Props> = ({
  isOpen,
  onClose,
  vocab,
  onSpeak
}) => {
  // If the word has multiple characters (e.g., 学习 -> ['学', '习']), split into chars
  const characters = vocab ? Array.from(vocab.hanzi) : [];
  const [selectedCharIndex, setSelectedCharIndex] = useState<number>(0);
  const [showWatermark, setShowWatermark] = useState<boolean>(true);
  const [brushSize, setBrushSize] = useState<number>(12);
  const [brushColor, setBrushColor] = useState<string>('#1e293b'); // slate-800
  const [history, setHistory] = useState<ImageData[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef<boolean>(false);

  const currentChar = characters[selectedCharIndex] || '';

  // Reset when vocab changes
  useEffect(() => {
    if (vocab) {
      setSelectedCharIndex(0);
      setHistory([]);
    }
  }, [vocab]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Initialize canvas
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const size = 320;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, size, size);
      // Save initial blank state
      setHistory([ctx.getImageData(0, 0, size, size)]);
    }
  }, [isOpen, selectedCharIndex]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
    }
  }, []);

  const undoCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || history.length <= 1) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const newHistory = [...history];
    newHistory.pop(); // Remove current state
    const prevState = newHistory[newHistory.length - 1];
    ctx.putImageData(prevState, 0, 0);
    setHistory(newHistory);
  }, [history]);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = brushColor;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDraw = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const state = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setHistory(prev => [...prev.slice(-15), state]); // Keep last 15 states
    }
  };

  if (!isOpen || !vocab) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-slate-900 to-cinnabar-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300">
              <PenTool size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">Ô Tập Viết 米字格</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/15 text-slate-200 font-medium">#{vocab.id}</span>
              </div>
              <h3 className="text-lg font-extrabold flex items-center gap-2 mt-0.5">
                <span>{vocab.hanzi}</span>
                <span className="text-cinnabar-400 text-sm font-normal">({vocab.pinyin})</span>
                <span className="text-xs text-slate-300 font-normal hidden sm:inline">— {vocab.meaning}</span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition active:scale-95"
            title="Đóng (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Character switcher tabs (if multi-character word) */}
        {characters.length > 1 && (
          <div className="px-5 py-2.5 bg-stone-100 border-b border-stone-200 flex items-center gap-2 overflow-x-auto shrink-0">
            <span className="text-xs font-bold text-slate-600 shrink-0">Chọn chữ để viết:</span>
            {characters.map((c, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCharIndex(idx);
                  clearCanvas();
                  onSpeak(c);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition ${
                  selectedCharIndex === idx
                    ? 'bg-cinnabar-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-stone-200 border border-stone-300'
                }`}
              >
                <span className="hanzi-font text-base">{c}</span>
                <span>(Nét #{idx + 1})</span>
              </button>
            ))}
          </div>
        )}

        {/* Body Area */}
        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Canvas Box */}
          <div className="flex flex-col items-center space-y-3">
            {/* The Authentic Mi Zi Ge Canvas */}
            <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-3xl overflow-hidden border-4 border-cinnabar-600 bg-white shadow-inner select-none touch-none">
              {/* SVG Grid: Trung cung & 2 duong cheo Mi Zi Ge */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Vien ngoai */}
                <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.3" />
                {/* Duong cheo X */}
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="5,5" opacity="0.35" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="5,5" opacity="0.35" />
                {/* Duong thap + */}
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.45" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.45" />
              </svg>

              {/* Watermark character guide */}
              {showWatermark && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                  <span className="hanzi-font text-[210px] text-stone-300/80 font-black leading-none">
                    {currentChar}
                  </span>
                </div>
              )}

              {/* Drawing Canvas */}
              <canvas
                ref={canvasRef}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
                onTouchStart={startDraw}
                onTouchMove={draw}
                onTouchEnd={stopDraw}
                className="absolute inset-0 w-full h-full cursor-crosshair z-10"
              />
            </div>

            {/* Canvas Toolbar */}
            <div className="w-full max-w-[320px] flex items-center justify-between gap-2 pt-1">
              <div className="flex items-center gap-1.5">
                {/* Brush Colors */}
                {[
                  { color: '#1e293b', label: 'Đen mực' },
                  { color: '#dc2626', label: 'Đỏ son' },
                  { color: '#2563eb', label: 'Lam đậm' }
                ].map(c => (
                  <button
                    key={c.color}
                    onClick={() => setBrushColor(c.color)}
                    style={{ backgroundColor: c.color }}
                    className={`w-7 h-7 rounded-full border-2 transition ${
                      brushColor === c.color ? 'border-amber-400 scale-110 shadow-xs' : 'border-white'
                    }`}
                    title={c.label}
                  />
                ))}

                {/* Brush size buttons */}
                <button
                  onClick={() => setBrushSize(prev => (prev === 8 ? 13 : prev === 13 ? 20 : 8))}
                  className="px-2.5 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition ml-1"
                  title="Đổi cỡ nét bút"
                >
                  Nét: {brushSize === 8 ? 'Mảnh' : brushSize === 13 ? 'Vừa' : 'Đậm'}
                </button>
              </div>

              {/* Actions: Watermark, Undo, Clear */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowWatermark(!showWatermark)}
                  className={`p-2 rounded-xl border text-xs font-bold transition ${
                    showWatermark ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-stone-100 text-slate-500 border-stone-200'
                  }`}
                  title={showWatermark ? 'Ẩn chữ mờ' : 'Hiện chữ mờ'}
                >
                  {showWatermark ? <Eye size={15} /> : <EyeOff size={15} />}
                </button>
                <button
                  onClick={undoCanvas}
                  disabled={history.length <= 1}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 border border-stone-200 disabled:opacity-40 transition"
                  title="Hoàn tác nét vừa viết"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={clearCanvas}
                  className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition"
                  title="Xóa trắng bảng viết"
                >
                  <Eraser size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Character Information & Radicals */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Highlight Card */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="hanzi-font text-4xl font-black text-slate-900">{currentChar}</span>
                    <span className="text-xl font-black text-cinnabar-600">{vocab.pinyin}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">
                    Hán-Việt: <span className="text-slate-800">{vocab.hanViet}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 mt-1">{vocab.meaning}</div>
                </div>

                <button
                  onClick={() => onSpeak(currentChar)}
                  className="px-3.5 py-2.5 rounded-2xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition"
                >
                  <Volume2 size={16} />
                  <span>Phát âm</span>
                </button>
              </div>

              {/* Radicals Breakdown */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <div className="text-xs font-extrabold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-600" />
                  <span>Chiết tự cấu tạo chữ:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vocab.radicals.map((r, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-amber-200 text-xs shadow-2xs">
                      <strong className="hanzi-font text-cinnabar-600 text-sm">{r.char || r.r}</strong>
                      <span className="font-bold text-slate-800">{r.name}:</span>
                      <span className="text-slate-500">{r.desc}</span>
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic pt-1 border-t border-amber-200/60">
                  💡 {vocab.mnemonic}
                </p>
              </div>

              {/* Writing Tip */}
              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-1">
                <div className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                  <Check size={14} className="text-indigo-600" />
                  <span>Quy tắc bút thuận gợi ý:</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Viết từ trên xuống dưới, từ trái qua phải; nếu có nét bao quanh thì vào trước đóng sau; nét sổ thẳng hoặc trục giữa viết làm chuẩn.
                </p>
              </div>
            </div>

            {/* Example Phrase */}
            <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 font-semibold">Ví dụ: </span>
                <span className="hanzi-font font-bold text-slate-900">{vocab.exampleHanzi}</span>
                <span className="text-indigo-600 font-medium ml-1">({vocab.examplePinyin})</span>
              </div>
              <button
                onClick={() => onSpeak(vocab.exampleHanzi)}
                className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 text-[11px] font-bold flex items-center gap-1 transition"
              >
                <Volume2 size={12} />
                <span>Nghe câu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
