import React, { useState } from 'react';
import { Volume2, Bell, Gauge, HelpCircle, X } from 'lucide-react';

interface AudioControlsProps {
  hasChineseVoice: boolean;
  chineseVoiceName: string;
  availableVoices: SpeechSynthesisVoice[];
  selectedVoiceURI: string;
  onSelectVoice: (voiceURI: string) => void;
  rate: number;
  onToggleRate: () => void;
  onTestSpeaker: () => void;
  onSpeak: (text: string, tone?: number) => void;
}

const formatVoiceLabel = (name: string): string => {
  if (name.includes('Huihui')) return 'Microsoft Huihui (Nữ - PRC)';
  if (name.includes('Yaoyao')) return 'Microsoft Yaoyao (Nữ - Trẻ)';
  if (name.includes('Kangkang')) return 'Microsoft Kangkang (Nam - PRC)';
  if (name.includes('Zhiwei')) return 'Microsoft Zhiwei (Nam)';
  if (name.includes('Xiaoxiao')) return 'Microsoft Xiaoxiao (Tự nhiên)';
  if (name.includes('Yunxi')) return 'Microsoft Yunxi (Nam)';
  if (name.includes('Google') && name.includes('普通话')) return 'Google 普通话 (Phổ Thông)';
  if (name.includes('Google') && name.includes('粵語')) return 'Google 粵語 (Quảng Đông)';

  return name
    .replace(' - Chinese (Simplified, PRC)', ' (zh-CN)')
    .replace(' - Chinese (Traditional, Taiwan)', ' (zh-TW)')
    .replace(' - Chinese (Traditional, Hong Kong S.A.R.)', ' (zh-HK)')
    .replace('Desktop', '')
    .trim();
};

export const AudioControls: React.FC<AudioControlsProps> = ({
  hasChineseVoice,
  chineseVoiceName,
  availableVoices,
  selectedVoiceURI,
  onSelectVoice,
  rate,
  onToggleRate,
  onTestSpeaker,
  onSpeak
}) => {
  const [showVoiceGuide, setShowVoiceGuide] = useState<boolean>(false);

  return (
    <div className="inline-flex items-center gap-1.5 bg-stone-100 p-1 rounded-2xl border border-stone-200/90 shadow-inner shrink-0">
      {/* Interactive Voice Selector Dropdown */}
      <div className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-semibold shadow-2xs border border-stone-200/80 group hover:border-slate-300 transition shrink-0">
        <span
          className={`w-2 h-2 rounded-full shrink-0 ${
            hasChineseVoice ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
          title={hasChineseVoice ? 'Đã nhận dạng giọng đọc tiếng Trung' : 'Đang dùng bộ giả lập cao độ'}
        />

        <span className="text-slate-400 text-[11px] font-bold shrink-0">Giọng:</span>

        {availableVoices.length > 1 ? (
          <select
            value={selectedVoiceURI}
            onChange={(e) => onSelectVoice(e.target.value)}
            className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer max-w-[130px] sm:max-w-[160px] truncate"
            title={`Đang dùng: ${chineseVoiceName}\nBấm vào để chọn đổi giọng đọc khác`}
          >
            {availableVoices.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI} className="text-slate-900 bg-white py-1">
                {formatVoiceLabel(v.name)}
              </option>
            ))}
          </select>
        ) : (
          <span
            className="text-xs font-bold text-slate-800 truncate max-w-[130px] sm:max-w-[160px] cursor-pointer"
            onClick={() => setShowVoiceGuide(true)}
            title="Bấm để xem hướng dẫn thêm nhiều giọng đọc tiếng Trung trên máy tính"
          >
            {hasChineseVoice ? formatVoiceLabel(chineseVoiceName) : 'Gói cao độ Web Audio'}
          </span>
        )}

        {/* Small Guide Help Button */}
        <button
          onClick={() => setShowVoiceGuide(!showVoiceGuide)}
          className="text-slate-400 hover:text-indigo-600 transition ml-0.5 shrink-0"
          title="Bấm để xem cách cài thêm nhiều giọng đọc tiếng Trung (Nam/Nữ) trên máy"
        >
          <HelpCircle size={12} />
        </button>
      </div>

      {/* Speed Toggle */}
      <button
        onClick={onToggleRate}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-stone-50 text-slate-800 border border-stone-200/80 shadow-2xs text-xs font-bold transition active:scale-95 shrink-0"
        title="Chuyển đổi tốc độ phát âm (1.0x / 0.65x)"
      >
        <Gauge size={13} className="text-cinnabar-600 shrink-0" />
        <span className="whitespace-nowrap">{rate === 1.0 ? '1.0x' : '0.65x'}</span>
      </button>

      {/* Unified Audio Preview Button */}
      <button
        onClick={() => onSpeak('你好', 2)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-2xs transition active:scale-95 shrink-0 whitespace-nowrap"
        title="Phát âm thử chữ '你好' bằng giọng hiện tại"
      >
        <Volume2 size={13} className="text-amber-300 shrink-0" />
        <span>Nghe thử</span>
      </button>

      {/* Small Discrete Chime Test */}
      <button
        onClick={onTestSpeaker}
        className="p-1.5 rounded-xl bg-white hover:bg-stone-50 text-slate-500 hover:text-slate-800 border border-stone-200/80 shadow-2xs transition active:scale-95 shrink-0"
        title="Phát tiếng chuông kiểm tra loa thiết bị"
      >
        <Bell size={13} />
      </button>

      {/* Voice Installation Guide Modal / Tooltip Popover */}
      {showVoiceGuide && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <span>🎙️ Cài Thêm Giọng Tiếng Trung Miễn Phí</span>
              </h4>
              <button
                onClick={() => setShowVoiceGuide(false)}
                className="p-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-500"
              >
                <X size={15} />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
              <p>
                Trình duyệt lấy trực tiếp danh sách giọng đọc từ Windows / hệ điều hành của bạn:
              </p>
              <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 space-y-1.5 font-medium">
                <div className="text-slate-900 font-bold">👉 Cách cài thêm giọng Nam & Nữ trên Windows:</div>
                <ol className="list-decimal list-inside space-y-1 text-slate-600">
                  <li>Mở <strong>Settings (Cài đặt Windows)</strong></li>
                  <li>Vào <strong>Time & Language</strong> → <strong>Speech (Giọng nói)</strong></li>
                  <li>Tại mục <strong>Manage voices</strong> → Bấm <strong>Add voices</strong></li>
                  <li>Tìm và chọn <strong>Chinese (Simplified, China)</strong> để cài thêm giọng <strong>Kangkang (Nam)</strong> hoặc <strong>Yaoyao (Nữ)</strong></li>
                  <li>Khởi động lại trình duyệt, bạn sẽ thấy thêm các tùy chọn giọng mới trong danh sách!</li>
                </ol>
              </div>

              {availableVoices.length > 0 && (
                <div className="pt-1">
                  <div className="font-bold text-slate-800 mb-1">
                    Các giọng hiện có trên máy bạn ({availableVoices.length}):
                  </div>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {availableVoices.map((v) => (
                      <div
                        key={v.voiceURI}
                        onClick={() => {
                          onSelectVoice(v.voiceURI);
                          setShowVoiceGuide(false);
                        }}
                        className={`p-2 rounded-xl text-xs flex items-center justify-between cursor-pointer transition ${
                          selectedVoiceURI === v.voiceURI
                            ? 'bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold'
                            : 'hover:bg-stone-100 text-slate-700'
                        }`}
                      >
                        <span>{formatVoiceLabel(v.name)}</span>
                        {selectedVoiceURI === v.voiceURI && (
                          <span className="text-[10px] text-indigo-600 font-black">Đang chọn</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowVoiceGuide(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition"
            >
              Đã Hiểu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
