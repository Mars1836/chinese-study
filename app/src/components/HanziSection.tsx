import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Eraser, Eye, EyeOff } from 'lucide-react';
import { StrokeItem, StrokeRule } from '../types/lesson';

interface Props {
  strokes: StrokeItem[];
  strokeRules: StrokeRule[];
  onSpeak: (char: string) => void;
}

export const HanziSection: React.FC<Props> = ({
  strokes,
  strokeRules,
  onSpeak
}) => {
  const [selectedChar, setSelectedChar] = useState<string>('你');
  const [selectedPinyin, setSelectedPinyin] = useState<string>('nǐ');
  const [selectedHint, setSelectedHint] = useState<string>('Nhân đứng 亻 + Mịch 冖 + Tiểu 小');
  const [showWatermark, setShowWatermark] = useState<boolean>(true);
  const [brushSize, setBrushSize] = useState<number>(11);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef<boolean>(false);

  const sampleChars = [
    { char: '你', pinyin: 'nǐ', hint: 'Bạn: Nhân đứng 亻 + Mịch 冖 + Tiểu 小' },
    { char: '好', pinyin: 'hǎo', hint: 'Tốt: Bộ Nữ 女 (trái) + Bộ Tử 子 (phải)' },
    { char: '吗', pinyin: 'ma', hint: 'Không?: Bộ Khẩu 口 + Bộ Mã 马' },
    { char: '忙', pinyin: 'máng', hint: 'Bận: Bộ Tâm đứng 忄 + Bộ Vong 亡' },
    { char: '大', pinyin: 'dà', hint: 'To: Ngang 一 trước, Phẩy 丿 rồi Mác 乀' },
    { char: '十', pinyin: 'shí', hint: 'Số 10: Ngang 一 trước, Sổ 丨 sau' },
    { char: '人', pinyin: 'rén', hint: 'Người: Phẩy 丿 trước, Mác 乀 sau' },
    { char: '小', pinyin: 'xiǎo', hint: 'Nhỏ: Giữa trước (亅), hai bên sau (丶 丶)' },
    { char: '日', pinyin: 'rì', hint: 'Mặt trời: Vào nhà trước, đóng cửa sau' },
    { char: '月', pinyin: 'yuè', hint: 'Mặt trăng: Ngoài trước, trong sau' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const selectCharToPractice = (char: string, pinyin: string, hint: string) => {
    setSelectedChar(char);
    setSelectedPinyin(pinyin);
    setSelectedHint(hint);
    clearCanvas();
    onSpeak(char);
  };

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
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
    ctx.strokeStyle = '#1e293b';
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDraw = () => {
    isDrawing.current = false;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 8 Basic Strokes */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cinnabar-600">Phần 3.1 • Cấu tạo Chữ Hán</span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">8 Nét Chữ Hán Cơ Bản (Vĩnh Tự Bát Pháp)</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Mọi chữ Hán đều ghép từ 8 nét cơ bản này.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {strokes.map((s, i) => (
            <div key={i} className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{s.name}</span>
                  <span className="hanzi-font text-xl font-black text-cinnabar-600 bg-cinnabar-50 px-2.5 py-0.5 rounded-lg border border-cinnabar-100">
                    {s.symbol}
                  </span>
                </div>
                <div className="bg-white rounded-xl border border-stone-200 p-2 my-2 flex items-center justify-center">
                  <svg viewBox="0 0 160 100" className="w-full h-16">
                    <line x1="80" y1="0" x2="80" y2="100" stroke="#f1f5f9" strokeDasharray="3,3" />
                    <line x1="0" y1="50" x2="160" y2="50" stroke="#f1f5f9" strokeDasharray="3,3" />
                    <path d={s.svgPath} stroke="#dc2626" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <div className="text-xs font-bold text-indigo-700 mt-1">{s.direction}</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7 Rules & Interactive Mi Zi Ge Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Columns: 7 Stroke Order Rules */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Phần 3.2 • Quy Tắc Bút Thuận</span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">7 Quy Tắc Viết Chữ Hán Chuẩn</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Bấm vào bất kỳ chữ nào để nạp chữ đó vào Bảng Tập Viết bên cạnh.</p>
          </div>

          <div className="space-y-3">
            {strokeRules.map((r) => (
              <div key={r.ruleNum} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-extrabold inline-flex items-center justify-center shrink-0">
                      {r.ruleNum}
                    </span>
                    <span>{r.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-8">{r.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pl-8 sm:pl-0 shrink-0">
                  {r.examples.map((ex, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectCharToPractice(ex.hanzi, ex.pinyin, `${ex.hanzi} (${ex.pinyin}): ${ex.meaning}`)}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-cinnabar-50 border border-stone-200 hover:border-cinnabar-300 text-left transition flex items-center gap-2 shadow-sm active:scale-95"
                    >
                      <span className="hanzi-font text-xl font-bold text-cinnabar-600">{ex.hanzi}</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">{ex.pinyin} ({ex.hv})</div>
                        <div className="text-[10px] text-slate-500">{ex.meaning}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 5 Columns: Interactive Mi Zi Ge Canvas */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cinnabar-600">Tương tác trực tiếp</span>
                <h3 className="text-lg font-extrabold text-slate-900">Bảng Tập Viết Ô Chữ Mễ (米字格)</h3>
              </div>
              <button
                onClick={() => onSpeak(selectedChar)}
                className="px-3.5 py-1.5 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition"
              >
                <Volume2 size={13} />
                <span>{selectedChar} ({selectedPinyin})</span>
              </button>
            </div>

            {/* Character Selector Pills */}
            <div className="mt-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1.5">Chọn chữ để tô nét:</span>
              <div className="flex flex-wrap gap-1.5">
                {sampleChars.map((item) => (
                  <button
                    key={item.char}
                    onClick={() => selectCharToPractice(item.char, item.pinyin, item.hint)}
                    className={`px-2.5 py-1 rounded-lg border text-sm font-bold hanzi-font transition ${
                      selectedChar === item.char
                        ? 'bg-cinnabar-600 text-white border-cinnabar-600 shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 text-slate-800 border-stone-200'
                    }`}
                  >
                    {item.char}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Container */}
          <div className="flex flex-col items-center justify-center my-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden select-none touch-none border-2 border-cinnabar-600 shadow-inner bg-[#fffdf9]">
              {/* Red Mi Zi Ge Guidelines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                <line x1="0" y1="100" x2="200" y2="100" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="5,5" />
                <line x1="100" y1="0" x2="100" y2="200" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="5,5" />
                <line x1="0" y1="0" x2="200" y2="200" stroke="#fecaca" strokeWidth="1" strokeDasharray="4,6" />
                <line x1="200" y1="0" x2="0" y2="200" stroke="#fecaca" strokeWidth="1" strokeDasharray="4,6" />
              </svg>

              {/* Watermark character for tracing */}
              {showWatermark && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none kaiti-font text-[180px] sm:text-[195px] text-stone-200 leading-none">
                  {selectedChar}
                </div>
              )}

              {/* Interactive Canvas */}
              <canvas
                ref={canvasRef}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
                onTouchStart={startDraw}
                onTouchMove={draw}
                onTouchEnd={stopDraw}
                className="relative z-10 w-full h-full cursor-crosshair"
              />
            </div>
            <div className="mt-2 text-xs font-semibold text-slate-600 bg-stone-100 px-3 py-1 rounded-xl">
              {selectedHint}
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <label htmlFor="brush" className="text-xs font-semibold text-slate-600">Nét bút:</label>
              <input
                id="brush"
                type="range"
                min="6"
                max="20"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-20 accent-cinnabar-600 cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowWatermark(!showWatermark)}
                className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                {showWatermark ? <EyeOff size={13} /> : <Eye size={13} />}
                <span>{showWatermark ? 'Ẩn chữ' : 'Hiện chữ'}</span>
              </button>
              <button
                onClick={clearCanvas}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1 active:scale-95"
              >
                <Eraser size={13} />
                <span>Xóa viết lại</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
