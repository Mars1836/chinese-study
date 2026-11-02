import React, { useState } from 'react';
import { Volume2, Wind, Sparkles, CheckCircle2 } from 'lucide-react';
import { InitialGroup, FinalGroup, PracticeSyllable } from '../types/lesson';

interface Props {
  initialsGroups: InitialGroup[];
  finalsGroups: FinalGroup[];
  practiceSyllables: PracticeSyllable[];
  onSpeak: (char: string, tone?: number) => void;
}

export const PinyinSection: React.FC<Props> = ({
  initialsGroups,
  finalsGroups,
  practiceSyllables,
  onSpeak
}) => {
  const [blowing, setBlowing] = useState<boolean>(false);

  const testPaper = (char: string, isAspirated: boolean) => {
    onSpeak(char);
    if (isAspirated) {
      setBlowing(true);
      setTimeout(() => setBlowing(false), 1200);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview & Paper simulation card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cinnabar-600">Phần 1 • Hệ thống phiên âm La-tinh (Pinyin)</span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">Cấu tạo một âm tiết Tiếng Trung</h3>
          </div>
          <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl">
            <div className="text-center">
              <span className="text-[11px] text-slate-500 block">Thanh điệu</span>
              <span className="text-base font-extrabold text-amber-600">ˇ</span>
            </div>
            <span className="text-slate-300 font-bold">+</span>
            <div className="text-center">
              <span className="text-[11px] text-slate-500 block">Thanh mẫu</span>
              <span className="text-base font-extrabold text-cinnabar-600">h</span>
            </div>
            <span className="text-slate-300 font-bold">+</span>
            <div className="text-center">
              <span className="text-[11px] text-slate-500 block">Vận mẫu</span>
              <span className="text-base font-extrabold text-indigo-600">ao</span>
            </div>
            <span className="text-slate-400 font-bold">=</span>
            <button
              onClick={() => onSpeak('好', 3)}
              className="px-3 py-1.5 bg-cinnabar-600 hover:bg-cinnabar-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm transition active:scale-95"
            >
              <span>hǎo (好)</span>
              <Volume2 size={13} />
            </button>
          </div>
        </div>

        {/* Aspirated Sound Paper Blow Simulation */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Wind size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span>Mẹo tờ giấy phân biệt Âm Bật Hơi (p, t, k) của thầy Dương Châu</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                Đặt một tờ giấy mỏng trước miệng 5cm. Khi đọc âm bật hơi (<strong>p, t, k</strong>), luồng hơi bật mạnh từ cuống họng ra làm <strong>tờ giấy bay tốc lên</strong>!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-amber-200 shrink-0">
            <div className="relative w-12 h-14 bg-stone-100 rounded-lg border border-stone-200 flex flex-col items-center pt-1 overflow-visible">
              <div className="w-8 h-1 bg-slate-400 rounded-full" />
              <div
                className={`w-6 h-10 bg-gradient-to-b from-white to-amber-100 border border-amber-400 rounded-sm shadow-sm flex items-center justify-center text-[9px] font-bold text-amber-800 ${
                  blowing ? 'paper-blowing' : ''
                }`}
              >
                GIẤY
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => testPaper('波', false)}
                className="px-3 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-bold text-slate-700 transition flex items-center justify-between gap-2"
              >
                <span>Đọc "b" (Đứng yên)</span>
              </button>
              <button
                onClick={() => testPaper('坡', true)}
                className="px-3 py-1 rounded-lg bg-cinnabar-600 hover:bg-cinnabar-700 text-xs font-bold text-white transition flex items-center justify-between gap-2 shadow-sm active:scale-95"
              >
                <span>Đọc "p" (Bay giấy!)</span>
                <Wind size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 11 Initials Section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-cinnabar-600 text-white inline-flex items-center justify-center text-sm">1.1</span>
            <span>11 Thanh Mẫu (Phụ Âm Đầu) — Bấm vào bất kỳ thẻ nào để nghe phát âm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Cả thẻ card đều nhận lệnh click. Tự động nhận diện giọng tiếng Trung của máy tính hoặc cao độ chuẩn.
          </p>
        </div>

        <div className="space-y-6">
          {initialsGroups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4">
              <div className="border-b border-stone-100 pb-2">
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{group.groupTitle}</h4>
                <p className="text-xs text-slate-500">{group.groupDesc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {group.items.map((item) => (
                  <div
                    key={item.pinyin}
                    onClick={() => onSpeak(item.speakChar)}
                    className={`rounded-2xl border p-4 cursor-pointer select-none transition-all duration-150 hover:shadow-md hover:scale-[1.02] active:scale-95 flex flex-col justify-between ${
                      item.aspirated
                        ? 'border-cinnabar-300 bg-cinnabar-50/40 hover:border-cinnabar-500'
                        : 'border-stone-200 bg-stone-50/50 hover:border-stone-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-3xl font-black ${item.aspirated ? 'text-cinnabar-600' : 'text-slate-900'}`}>
                            {item.pinyin}
                          </span>
                          <span className="hanzi-font text-xs text-slate-400 font-bold">({item.speakChar})</span>
                        </div>
                        {item.aspirated ? (
                          <span className="px-2 py-0.5 rounded-md bg-cinnabar-600 text-white text-[10px] font-extrabold uppercase flex items-center gap-1">
                            <Wind size={11} /> Bật hơi
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md bg-stone-200 text-slate-600 text-[10px] font-bold">
                            Không bật hơi
                          </span>
                        )}
                      </div>

                      <div className={`mt-2 text-xs font-bold ${item.aspirated ? 'text-cinnabar-700' : 'text-indigo-700'}`}>
                        {item.vnTip || item.readAs}
                      </div>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.detail || item.mouthTip}</p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSpeak(item.speakChar || item.pinyin);
                      }}
                      className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-stone-200 text-xs font-bold text-slate-800 shadow-sm group-hover:bg-cinnabar-600 group-hover:text-white group-hover:border-cinnabar-600 transition active:scale-95"
                    >
                      <Volume2 size={13} className="text-cinnabar-600 group-hover:text-white transition" />
                      <span>Phát âm "{item.pinyin}"</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 15 Finals Section */}
      <div className="space-y-4 pt-2">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white inline-flex items-center justify-center text-sm">1.2</span>
            <span>15 Vận Mẫu (6 Vận Mẫu Đơn & 9 Vận Mẫu Kép/Mũi)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Chú ý vận mẫu ü (tròn môi từ đầu đến cuối) và e (giữa ưa và ơ).</p>
        </div>

        <div className="space-y-6">
          {finalsGroups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base border-b border-stone-100 pb-2">{group.groupTitle}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {group.items.map((item) => (
                  <div
                    key={item.pinyin}
                    onClick={() => onSpeak(item.speakChar || item.pinyin)}
                    className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4 cursor-pointer select-none transition-all hover:border-indigo-400 hover:shadow-md hover:scale-[1.02] active:scale-95 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-black text-indigo-700 group-hover:text-indigo-800 transition">{item.pinyin}</span>
                          {item.speakChar && (
                            <span className="hanzi-font text-xs text-slate-400 font-bold">({item.speakChar})</span>
                          )}
                        </div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {item.vnTip}
                        </span>
                      </div>
                      {item.detail && <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.detail}</p>}
                      {item.warning && <div className="mt-1 text-[11px] font-semibold text-amber-700 bg-amber-50 p-1.5 rounded">{item.warning}</div>}
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSpeak(item.speakChar || item.pinyin);
                      }}
                      className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-stone-200 text-xs font-bold text-slate-800 shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition active:scale-95"
                    >
                      <Volume2 size={13} className="text-indigo-600 group-hover:text-white transition" />
                      <span>Phát âm "{item.pinyin}"</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Rules for yi, wu, yu */}
        <div className="bg-white rounded-3xl p-5 border-2 border-indigo-100 shadow-sm">
          <h4 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2 mb-3">
            <Sparkles size={18} className="text-indigo-600" />
            <span>Quy tắc viết khi Vận mẫu i, u, ü đứng một mình (Không có thanh mẫu)</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => onSpeak('衣')}
              className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 cursor-pointer hover:bg-indigo-100 transition flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-indigo-600 uppercase">Vận mẫu i</div>
                <div className="text-base font-extrabold text-slate-900 mt-0.5">i → <span className="text-indigo-700">yi</span> (衣 - Số 1 / Áo)</div>
                <p className="text-xs text-slate-600 mt-1">Thêm phụ âm câm y vào trước, giữ nguyên âm đọc.</p>
              </div>
              <Volume2 size={18} className="text-indigo-600" />
            </div>
            <div
              onClick={() => onSpeak('乌')}
              className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 cursor-pointer hover:bg-indigo-100 transition flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-indigo-600 uppercase">Vận mẫu u</div>
                <div className="text-base font-extrabold text-slate-900 mt-0.5">u → <span className="text-indigo-700">wu</span> (乌 - Số 5 / Quạ)</div>
                <p className="text-xs text-slate-600 mt-1">Thêm phụ âm câm w vào trước, giữ nguyên âm đọc.</p>
              </div>
              <Volume2 size={18} className="text-indigo-600" />
            </div>
            <div
              onClick={() => onSpeak('迂')}
              className="p-4 rounded-2xl bg-cinnabar-50/70 border border-cinnabar-100 cursor-pointer hover:bg-cinnabar-100 transition flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-cinnabar-600 uppercase">Vận mẫu ü (Quan trọng)</div>
                <div className="text-base font-extrabold text-slate-900 mt-0.5">ü → <span className="text-cinnabar-600">yu</span> (迂 / 鱼 - Cá)</div>
                <p className="text-xs text-slate-600 mt-1">Thêm y, bỏ 2 chấm, nhưng vẫn đọc tròn môi là "uy"!</p>
              </div>
              <Volume2 size={18} className="text-cinnabar-600" />
            </div>
          </div>
        </div>
      </div>

      {/* 15 Practice Syllables Table */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Bảng Ghép Âm Thực Hành (15 Âm Tiết Trong Video)</h3>
            <p className="text-xs text-slate-500">Chạm vào từng ô để nghe sự khác biệt giữa âm thường và âm bật hơi.</p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-stone-100 text-slate-600 rounded-full">
            n + ü = nü, l + ü = lü
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {practiceSyllables.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSpeak(item.hanzi)}
              className="p-3 rounded-2xl border border-stone-200 bg-stone-50/70 hover:bg-cinnabar-50 hover:border-cinnabar-300 cursor-pointer select-none transition flex items-center justify-between group active:scale-95"
            >
              <div>
                <div className="text-base font-extrabold text-slate-900 group-hover:text-cinnabar-700">
                  {item.pinyin} <span className="hanzi-font text-xs font-normal text-slate-400">({item.hanzi})</span>
                </div>
                <div className="text-[11px] text-slate-500">{item.meaning || item.vn}</div>
                <div className="text-[10px] font-bold text-cinnabar-600 mt-0.5">{item.note || item.tip}</div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-white group-hover:bg-cinnabar-600 text-slate-600 group-hover:text-white border border-stone-200 flex items-center justify-center shrink-0 transition">
                <Volume2 size={13} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
