import React from 'react';
import { Volume2, Bell, Gauge } from 'lucide-react';

interface AudioControlsProps {
  hasChineseVoice: boolean;
  chineseVoiceName: string;
  rate: number;
  onToggleRate: () => void;
  onTestSpeaker: () => void;
  onSpeak: (text: string, tone?: number) => void;
}

export const AudioControls: React.FC<AudioControlsProps> = ({
  hasChineseVoice,
  chineseVoiceName,
  rate,
  onToggleRate,
  onTestSpeaker,
  onSpeak
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 bg-stone-100/90 p-1.5 rounded-2xl border border-stone-200">
      {/* Voice Status Pill */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-semibold shadow-sm border border-stone-200">
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${hasChineseVoice ? 'bg-emerald-500' : 'bg-amber-500'}`} />
        <span className="truncate max-w-[140px] sm:max-w-[180px]">
          {hasChineseVoice ? `Giọng: ${chineseVoiceName || 'zh-CN'}` : 'Gói cao độ Web Audio'}
        </span>
      </div>

      {/* Speed Toggle */}
      <button
        onClick={onToggleRate}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-800 border border-stone-200 shadow-sm text-xs font-bold transition active:scale-95"
        title="Chuyển đổi tốc độ phát âm (1.0x / 0.65x)"
      >
        <Gauge size={14} className="text-cinnabar-600" />
        <span>{rate === 1.0 ? '1.0x' : '0.65x'}</span>
      </button>

      {/* Test Speaker Chime */}
      <button
        onClick={onTestSpeaker}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition active:scale-95"
        title="Phát tiếng chuông kiểm tra loa"
      >
        <Bell size={13} />
        <span className="hidden sm:inline">Thử Loa</span>
      </button>

      {/* Quick Test Audio */}
      <button
        onClick={() => onSpeak('你好', 2)}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-bold shadow-sm transition active:scale-95"
        title="Phát âm thử chữ '你好'"
      >
        <Volume2 size={14} />
        <span>"你好"</span>
      </button>
    </div>
  );
};
