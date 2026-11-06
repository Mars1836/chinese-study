import React, { useState, useMemo } from 'react';
import {
  Volume2,
  Search,
  BookOpen,
  Sparkles,
  Wind,
  Layers,
  Flame,
  AlertTriangle,
  Lightbulb,
  ArrowLeftRight,
  Grid,
  X,
  CheckCircle2,
  BookmarkCheck
} from 'lucide-react';
import {
  masterInitials,
  masterFinals,
  masterPinyinRules,
  masterMinimalPairs,
  commonPinyinMatrix
} from '../../data/pinyinMasterData';
import { MasterInitial, MasterFinal, PinyinRule, MinimalPair } from '../../types/pinyinMaster';

interface Props {
  onSpeak: (text: string, tone?: number) => void;
}

type TabType = 'initials' | 'finals' | 'rules' | 'pairs' | 'matrix';

export const PinyinMasterStudio: React.FC<Props> = ({ onSpeak }) => {
  const [activeTab, setActiveTab] = useState<TabType>('initials');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedInitialCategory, setSelectedInitialCategory] = useState<string>('all');
  const [selectedFinalCategory, setSelectedFinalCategory] = useState<string>('all');
  const [blowing, setBlowing] = useState<boolean>(false);
  const [blownChar, setBlownChar] = useState<string>('');

  // Handle Paper Blow Simulation
  const handleTestPaper = (char: string, isAspirated: boolean, speakText: string) => {
    onSpeak(speakText);
    setBlownChar(char);
    if (isAspirated) {
      setBlowing(true);
      setTimeout(() => setBlowing(false), 1200);
    } else {
      setBlowing(false);
    }
  };

  // Filtered Initials
  const filteredInitials = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return masterInitials.filter(item => {
      const matchCategory = selectedInitialCategory === 'all' || item.category === selectedInitialCategory;
      if (!matchCategory) return false;
      if (!q) return true;
      return (
        item.pinyin.toLowerCase().includes(q) ||
        item.vietnameseTip.toLowerCase().includes(q) ||
        item.detail.toLowerCase().includes(q) ||
        item.mouthPosture.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q)) ||
        (item.note && item.note.toLowerCase().includes(q)) ||
        item.examples.some(ex => ex.hanzi.includes(q) || ex.pinyin.toLowerCase().includes(q) || ex.meaning.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedInitialCategory]);

  // Filtered Finals
  const filteredFinals = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return masterFinals.filter(item => {
      const matchCategory = selectedFinalCategory === 'all' || item.category === selectedFinalCategory;
      if (!matchCategory) return false;
      if (!q) return true;
      return (
        item.pinyin.toLowerCase().includes(q) ||
        item.vietnameseTip.toLowerCase().includes(q) ||
        item.detail.toLowerCase().includes(q) ||
        (item.shortForm && item.shortForm.toLowerCase().includes(q)) ||
        (item.standalone && item.standalone.toLowerCase().includes(q)) ||
        (item.spellingNote && item.spellingNote.toLowerCase().includes(q)) ||
        item.examples.some(ex => ex.hanzi.includes(q) || ex.pinyin.toLowerCase().includes(q) || ex.meaning.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedFinalCategory]);

  // Filtered Rules
  const filteredRules = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return masterPinyinRules;
    return masterPinyinRules.filter(
      r =>
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.content.toLowerCase().includes(q) ||
        r.mnemonic.toLowerCase().includes(q) ||
        r.examples.some(e => e.written.toLowerCase().includes(q) || (e.hanzi && e.hanzi.includes(q)) || (e.meaning && e.meaning.toLowerCase().includes(q)))
    );
  }, [searchQuery]);

  // Filtered Pairs
  const filteredPairs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return masterMinimalPairs;
    return masterMinimalPairs.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.contrastDesc.toLowerCase().includes(q) ||
        p.item1.symbol.toLowerCase().includes(q) ||
        p.item2.symbol.toLowerCase().includes(q) ||
        p.distinctionTip.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* 1. Header Hero Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-900/60">
        <div className="absolute -right-6 -bottom-10 opacity-10 pointer-events-none select-none text-[150px] font-black hanzi-font">
          拼音
        </div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold">
            <Sparkles size={14} className="text-amber-400" />
            <span>Sổ Tay & Tra Cứu Ngữ Âm Tiếng Trung Toàn Diện</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Bảng Vận Âm & Vận Mẫu Pinyin — 汉语拼音全集
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Hệ thống hóa toàn bộ <strong>21 Thanh mẫu chính thức + 2 Bán nguyên âm (y, w)</strong>, <strong>36 Vận mẫu</strong> (Đơn, Kép, Mũi, Uốn lưỡi), <strong>9 Quy tắc chính tả cốt lõi</strong>, <strong>10 Cặp âm dễ nhầm lẫn</strong> và <strong>Ma trận phối âm</strong> trực quan giúp bạn dễ dàng ôn tập và tra cứu lại bất cứ lúc nào!
          </p>

          {/* Quick Stats Summary Badges */}
          <div className="flex items-center gap-2 flex-wrap pt-2 text-[11px] font-bold">
            <span className="px-3 py-1 rounded-xl bg-white/10 text-white border border-white/10">
              23 Thanh mẫu (Initials)
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/10 text-white border border-white/10">
              36 Vận mẫu (Finals)
            </span>
            <span className="px-3 py-1 rounded-xl bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
              9 Quy tắc bất hủ
            </span>
            <span className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-200 border border-amber-400/30">
              10 Cặp âm phân biệt
            </span>
          </div>
        </div>
      </div>

      {/* 2. Paper Blow Simulator Mini-Widget */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-200/90 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20 mt-0.5">
            <Wind size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span>Mẹo Tờ Giấy Kiểm Tra Luồng Hơi (Âm Bật Hơi vs Không Bật Hơi)</span>
              <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-black">
                Mẹo Thầy Dương Châu
              </span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed max-w-2xl">
              Khi học tiếng Trung, các âm bật hơi (<strong>p, t, k, q, c, ch</strong>) bắt buộc phải có luồng hơi mạnh tống từ phổi ra làm <strong>tờ giấy bay tốc lên</strong>. Ngược lại, các âm thường (<strong>b, d, g, j, z, zh</strong>) tờ giấy phải <strong>đứng yên</strong>!
            </p>
          </div>
        </div>

        {/* Paper Animation Simulator Box */}
        <div className="flex items-center gap-3.5 bg-white px-4 py-3 rounded-2xl border border-amber-200 shrink-0 shadow-inner">
          <div className="relative w-14 h-16 bg-stone-100 rounded-xl border border-stone-200 flex flex-col items-center pt-1.5 overflow-visible">
            <div className="w-9 h-1.5 bg-slate-400 rounded-full" />
            <div
              className={`w-7 h-11 bg-gradient-to-b from-white to-amber-100 border-2 border-amber-400 rounded-sm shadow-sm flex items-center justify-center text-[10px] font-black text-amber-900 ${
                blowing ? 'paper-blowing' : ''
              }`}
            >
              GIẤY
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="text-[11px] font-bold text-slate-500">
              {blownChar ? (
                <span>Đang thử: <strong>"{blownChar}"</strong> {blowing ? '💨 Bay giấy!' : '🛑 Giấy đứng yên'}</span>
              ) : (
                'Bấm thử âm:'
              )}
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => handleTestPaper('b (Không bật)', false, '波')}
                className="px-2.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition active:scale-95"
              >
                b (Đứng yên)
              </button>
              <button
                onClick={() => handleTestPaper('p (Bật hơi)', true, '坡')}
                className="px-2.5 py-1.5 rounded-xl bg-cinnabar-600 hover:bg-cinnabar-700 text-white text-xs font-extrabold transition shadow-xs active:scale-95 flex items-center gap-1"
              >
                <Flame size={12} />
                <span>p (Bay giấy!)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Search Bar & Primary Navigation Tabs */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
        {/* Search Input Box */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm nhanh: gõ ký tự Pinyin (zh, q, ü, ang), mẹo tiếng Việt (bật hơi, uốn lưỡi, 2 chấm), hoặc chữ Hán ví dụ..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-stone-200 transition"
              title="Xóa tìm kiếm"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Primary Tabs Navigation Bar */}
        <div className="flex items-center justify-between border-t border-stone-100 pt-3 flex-wrap gap-2">
          <div className="inline-flex items-center p-1 rounded-2xl bg-stone-100 border border-stone-200 flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('initials')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition active:scale-95 ${
                activeTab === 'initials'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers size={15} className={activeTab === 'initials' ? 'text-cinnabar-600' : 'text-slate-400'} />
              <span>1. Tất Cả Thanh Mẫu ({masterInitials.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('finals')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition active:scale-95 ${
                activeTab === 'finals'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen size={15} className={activeTab === 'finals' ? 'text-indigo-600' : 'text-slate-400'} />
              <span>2. Tất Cả Vận Mẫu ({masterFinals.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('rules')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition active:scale-95 ${
                activeTab === 'rules'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <AlertTriangle size={15} className={activeTab === 'rules' ? 'text-amber-500' : 'text-slate-400'} />
              <span>3. Quy Tắc & Ghi Chú ({masterPinyinRules.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('pairs')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition active:scale-95 ${
                activeTab === 'pairs'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ArrowLeftRight size={15} className={activeTab === 'pairs' ? 'text-rose-500' : 'text-slate-400'} />
              <span>4. So Sánh Cặp Âm ({masterMinimalPairs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black transition active:scale-95 ${
                activeTab === 'matrix'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid size={15} className={activeTab === 'matrix' ? 'text-teal-600' : 'text-slate-400'} />
              <span>5. Bảng Ghép Vần</span>
            </button>
          </div>

          <span className="text-[11px] text-slate-400 font-semibold px-2">
            💡 Bấm vào nút loa 🔊 ở bất kỳ đâu để nghe giọng đọc chuẩn
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: TẤT CẢ THANH MẪU (INITIALS)                                        */}
      {/* ========================================================================= */}
      {activeTab === 'initials' && (
        <div className="space-y-4">
          {/* Sub-category filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold scrollbar-none">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider shrink-0">Vị trí phát âm:</span>
            {[
              { id: 'all', label: `Tất cả (${masterInitials.length})` },
              { id: 'môi', label: 'Âm môi (b, p, m)' },
              { id: 'răng-môi', label: 'Răng-môi (f)' },
              { id: 'đầu lưỡi giữa', label: 'Đầu lưỡi giữa (d, t, n, l)' },
              { id: 'cuống lưỡi', label: 'Cuống lưỡi (g, k, h)' },
              { id: 'mặt lưỡi', label: 'Mặt lưỡi (j, q, x)' },
              { id: 'đầu lưỡi trước', label: 'Đầu lưỡi trước (z, c, s)' },
              { id: 'đầu lưỡi sau (uốn lưỡi)', label: 'Uốn lưỡi (zh, ch, sh, r)' },
              { id: 'bán nguyên âm', label: 'Bán nguyên âm (y, w)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedInitialCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition active:scale-95 ${
                  selectedInitialCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white hover:bg-stone-100 text-slate-600 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredInitials.map(initial => (
              <div
                key={initial.id}
                className="bg-white rounded-3xl p-5 border-2 border-stone-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md space-y-3.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Pinyin, IPA & Category */}
                  <div className="flex items-start justify-between gap-2 border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                        <span className="text-3xl font-black text-indigo-700 tracking-tight font-sans">
                          {initial.pinyin}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-400">IPA: {initial.ipa}</div>
                        <div className="text-[11px] font-bold text-slate-500 capitalize">
                          Nhóm: {initial.category}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <button
                        onClick={() => onSpeak(initial.speakChar)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black transition active:scale-95 shadow-xs"
                        title={`Nghe phát âm chuẩn của âm ${initial.pinyin}`}
                      >
                        <Volume2 size={13} />
                        <span>Nghe</span>
                      </button>

                      {initial.isAspirated && (
                        <button
                          onClick={() => handleTestPaper(initial.pinyin, true, initial.speakChar)}
                          className="flex items-center gap-1 text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-200 hover:bg-rose-100 transition"
                          title="Thử thổi luồng hơi"
                        >
                          <Wind size={10} />
                          <span>Thổi giấy</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Vietnamese Tip & Badge */}
                  <div className="space-y-2 pt-1">
                    {initial.badge && (
                      <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold ${
                        initial.isAspirated
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : initial.pinyin.startsWith('zh') || initial.pinyin.startsWith('ch') || initial.pinyin.startsWith('sh') || initial.pinyin === 'r'
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-indigo-50 text-indigo-800 border border-indigo-100'
                      }`}>
                        {initial.badge}
                      </span>
                    )}

                    <div className="text-xs font-extrabold text-slate-900 bg-stone-50 p-2.5 rounded-2xl border border-stone-200/80">
                      👉 {initial.vietnameseTip}
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {initial.detail}
                    </p>

                    <div className="text-[11px] text-slate-500 bg-amber-50/70 p-2 rounded-xl border border-amber-100 flex items-start gap-1.5">
                      <Lightbulb size={13} className="text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Khẩu hình:</strong> {initial.mouthPosture}</span>
                    </div>

                    {initial.note && (
                      <div className="text-[11px] text-indigo-700 bg-indigo-50/60 p-2 rounded-xl border border-indigo-100">
                        ℹ️ <strong>Lưu ý:</strong> {initial.note}
                      </div>
                    )}
                  </div>
                </div>

                {/* Real-life Examples List with clickable audio */}
                <div className="border-t border-stone-100 pt-2.5 space-y-1.5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Từ vựng mẫu ứng dụng:
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {initial.examples.map((ex, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSpeak(ex.hanzi)}
                        className="p-2 rounded-xl bg-stone-50 hover:bg-indigo-50/80 border border-stone-200 hover:border-indigo-200 text-left transition group active:scale-95"
                        title={`Bấm để nghe phát âm từ "${ex.hanzi}" (${ex.pinyin})`}
                      >
                        <div className="hanzi-font text-sm font-bold text-slate-900 group-hover:text-indigo-600">
                          {ex.hanzi}
                        </div>
                        <div className="text-[10px] font-bold text-indigo-600">{ex.pinyin}</div>
                        <div className="text-[10px] text-slate-500 truncate">{ex.meaning}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInitials.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-stone-200 text-slate-400">
              Không tìm thấy thanh mẫu nào khớp với từ khóa "{searchQuery}"
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: TẤT CẢ VẬN MẪU (FINALS)                                           */}
      {/* ========================================================================= */}
      {activeTab === 'finals' && (
        <div className="space-y-4">
          {/* Sub-category filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold scrollbar-none">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider shrink-0">Loại vần:</span>
            {[
              { id: 'all', label: `Tất cả (${masterFinals.length})` },
              { id: 'đơn', label: '6 Vận mẫu đơn (a, o, e, i, u, ü)' },
              { id: 'kép', label: '13 Vận mẫu kép' },
              { id: 'mũi trước', label: '8 Vận mẫu mũi trước (-n)' },
              { id: 'mũi sau', label: '8 Vận mẫu mũi sau (-ng)' },
              { id: 'đặc biệt', label: '1 Vận mẫu uốn lưỡi (er)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedFinalCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition active:scale-95 ${
                  selectedFinalCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white hover:bg-stone-100 text-slate-600 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFinals.map(fin => (
              <div
                key={fin.id}
                className="bg-white rounded-3xl p-5 border-2 border-stone-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md space-y-3.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Pinyin, IPA & Category */}
                  <div className="flex items-start justify-between gap-2 border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                        <span className="text-2xl font-black text-indigo-700 tracking-tight font-sans">
                          {fin.pinyin}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-400">IPA: {fin.ipa}</div>
                        <div className="text-[11px] font-bold text-slate-500 capitalize">
                          Vần: {fin.category}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onSpeak(fin.speakChar)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black transition active:scale-95 shadow-xs"
                      title={`Nghe phát âm mẫu vần ${fin.pinyin}`}
                    >
                      <Volume2 size={13} />
                      <span>Nghe</span>
                    </button>
                  </div>

                  {/* Vietnamese Tip & Details */}
                  <div className="space-y-2 pt-1">
                    {fin.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold bg-indigo-50 text-indigo-800 border border-indigo-200">
                        {fin.badge}
                      </span>
                    )}

                    <div className="text-xs font-extrabold text-slate-900 bg-stone-50 p-2.5 rounded-2xl border border-stone-200/80">
                      👉 {fin.vietnameseTip}
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">
                      {fin.detail}
                    </p>

                    {fin.shortForm && (
                      <div className="text-[11px] font-bold text-rose-700 bg-rose-50 p-2 rounded-xl border border-rose-200">
                        ✍️ Viết tắt: <strong>{fin.shortForm}</strong>
                      </div>
                    )}

                    {fin.standalone && (
                      <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                        🌱 Khi đứng độc lập viết là: <strong>{fin.standalone}</strong>
                      </div>
                    )}

                    {fin.spellingNote && (
                      <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-xl border border-amber-200">
                        ⚠️ <strong>Lưu ý chính tả:</strong> {fin.spellingNote}
                      </div>
                    )}
                  </div>
                </div>

                {/* Real-life Examples List */}
                <div className="border-t border-stone-100 pt-2.5 space-y-1.5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Ví dụ ghép từ thực tế:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {fin.examples.map((ex, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSpeak(ex.hanzi)}
                        className="p-2 rounded-xl bg-stone-50 hover:bg-indigo-50/80 border border-stone-200 hover:border-indigo-200 text-left transition group active:scale-95"
                        title={`Nghe phát âm từ "${ex.hanzi}" (${ex.pinyin})`}
                      >
                        <div className="hanzi-font text-sm font-bold text-slate-900 group-hover:text-indigo-600">
                          {ex.hanzi}
                        </div>
                        <div className="text-[10px] font-bold text-indigo-600">{ex.pinyin}</div>
                        <div className="text-[10px] text-slate-500 truncate">{ex.meaning}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFinals.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-stone-200 text-slate-400">
              Không tìm thấy vận mẫu nào khớp với từ khóa "{searchQuery}"
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: QUY TẮC & GHI CHÚ CỐT LÕI (CORE RULES)                             */}
      {/* ========================================================================= */}
      {activeTab === 'rules' && (
        <div className="space-y-5">
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-3xl text-xs text-amber-900 leading-relaxed flex items-center gap-3">
            <BookmarkCheck size={20} className="text-amber-600 shrink-0" />
            <div>
              <strong>9 Quy Tắc Chính Tả & Biến Âm Bất Hủ Trong Tiếng Trung:</strong> Đây là những quy tắc mà người học hay nhầm lẫn hoặc quên nhất khi viết và phát âm Pinyin. Nắm chắc 9 quy tắc này sẽ giúp bạn phát âm chuẩn như người bản xứ!
            </div>
          </div>

          <div className="space-y-4">
            {filteredRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-white rounded-3xl p-6 border-2 border-stone-200 shadow-sm space-y-4 hover:border-indigo-300 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      #{rule.ruleNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      {rule.title}
                    </h3>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold self-start sm:self-auto ${
                    rule.importance === 'cực kỳ quan trọng'
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                  }`}>
                    {rule.importance.toUpperCase()}
                  </span>
                </div>

                {/* Mnemonic Rhyme */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-black flex items-center gap-2">
                  <Lightbulb size={16} className="text-amber-600 shrink-0" />
                  <span>💡 Câu thần chú ghi nhớ: <em>"{rule.mnemonic}"</em></span>
                </div>

                {/* Formula if available */}
                {rule.formula && (
                  <div className="p-3 rounded-2xl bg-slate-900 text-amber-300 font-mono text-xs sm:text-sm font-bold">
                    Công thức: {rule.formula}
                  </div>
                )}

                {/* Main Explanation */}
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                  {rule.content}
                </div>

                {/* Illustrative Examples */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Bảng ví dụ minh họa & đối chiếu:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {rule.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-indigo-700 truncate">{ex.written}</div>
                          <div className="text-xs font-black text-slate-900 flex items-center gap-1.5 mt-0.5">
                            {ex.hanzi && <span className="hanzi-font text-sm">{ex.hanzi}</span>}
                            <span>👉 {ex.spoken}</span>
                          </div>
                          {ex.meaning && <div className="text-[11px] text-slate-500 truncate">{ex.meaning}</div>}
                        </div>

                        {ex.hanzi && (
                          <button
                            onClick={() => onSpeak(ex.hanzi!)}
                            className="p-2 rounded-xl bg-stone-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition shrink-0 active:scale-95"
                            title={`Phát âm từ "${ex.hanzi}"`}
                          >
                            <Volume2 size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRules.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-stone-200 text-slate-400">
              Không tìm thấy quy tắc nào khớp với từ khóa "{searchQuery}"
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SO SÁNH CẶP ÂM DỄ NHẦM LẪN (MINIMAL PAIRS)                          */}
      {/* ========================================================================= */}
      {activeTab === 'pairs' && (
        <div className="space-y-4">
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-3xl text-xs text-indigo-950 leading-relaxed flex items-center gap-3">
            <ArrowLeftRight size={20} className="text-indigo-600 shrink-0" />
            <div>
              <strong>10 Cặp Âm Đối Lập Người Việt Thường Xuyên Phát Âm Sai:</strong> Đối chiếu trực quan giữa âm không bật hơi vs bật hơi, âm thẳng lưỡi vs uốn lưỡi, âm mũi trước vs mũi sau giúp bạn nghe và phát âm chuẩn xác tuyệt đối!
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPairs.map((pair) => (
              <div
                key={pair.id}
                className="bg-white rounded-3xl p-5 border-2 border-stone-200 shadow-sm space-y-4 hover:border-indigo-300 transition"
              >
                <div className="border-b border-stone-100 pb-2.5">
                  <h4 className="text-sm sm:text-base font-black text-slate-900 flex items-center justify-between">
                    <span>{pair.title}</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{pair.contrastDesc}</p>
                </div>

                {/* Comparison Dual Cards */}
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Side A */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-900">{pair.item1.symbol}</span>
                      <button
                        onClick={() => onSpeak(pair.item1.example.hanzi)}
                        className="p-1.5 rounded-xl bg-white hover:bg-stone-100 text-slate-700 shadow-2xs transition active:scale-95"
                        title="Nghe âm mẫu"
                      >
                        <Volume2 size={13} />
                      </button>
                    </div>
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-200/80 text-slate-700">
                      {pair.item1.type}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-snug">{pair.item1.howToSay}</p>
                    <div className="pt-1 border-t border-stone-200/60 text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="hanzi-font text-sm">{pair.item1.example.hanzi}</span>
                      <span className="text-indigo-600">({pair.item1.example.pinyin})</span>
                      <span className="text-[10px] text-slate-500 font-normal truncate">— {pair.item1.example.meaning}</span>
                    </div>
                  </div>

                  {/* Side B */}
                  <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-rose-700">{pair.item2.symbol}</span>
                      <button
                        onClick={() => onSpeak(pair.item2.example.hanzi)}
                        className="p-1.5 rounded-xl bg-white hover:bg-rose-100 text-rose-700 shadow-2xs transition active:scale-95"
                        title="Nghe âm mẫu"
                      >
                        <Volume2 size={13} />
                      </button>
                    </div>
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800">
                      {pair.item2.type}
                    </span>
                    <p className="text-[11px] text-slate-700 leading-snug">{pair.item2.howToSay}</p>
                    <div className="pt-1 border-t border-rose-200/60 text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="hanzi-font text-sm">{pair.item2.example.hanzi}</span>
                      <span className="text-rose-600">({pair.item2.example.pinyin})</span>
                      <span className="text-[10px] text-slate-500 font-normal truncate">— {pair.item2.example.meaning}</span>
                    </div>
                  </div>
                </div>

                {/* Distinction Tip */}
                <div className="text-[11px] text-slate-600 bg-amber-50 p-2.5 rounded-xl border border-amber-200 flex items-start gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mẹo phân biệt:</strong> {pair.distinctionTip}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredPairs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-stone-200 text-slate-400">
              Không tìm thấy cặp âm nào khớp với từ khóa "{searchQuery}"
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: MA TRẬN GHÉP VẦN PINYIN (COMBINATION TABLE)                        */}
      {/* ========================================================================= */}
      {activeTab === 'matrix' && (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-stone-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Ma Trận Phối Âm Thanh Mẫu x Vận Mẫu (Pinyin Combination Table)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Bấm vào bất kỳ âm tiết nào bên dưới để nghe ngay phát âm giọng đọc bản xứ:
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {commonPinyinMatrix.map((group, gIdx) => (
              <div key={gIdx} className="space-y-2 bg-stone-50/80 p-4 rounded-2xl border border-stone-200/80">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center">
                    {group.initial}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                    Dòng thanh mẫu: {group.name} ({group.syllables.length} âm tiết tiêu biểu)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 pt-1">
                  {group.syllables.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSpeak(item.sample.hanzi)}
                      className="p-2 rounded-xl bg-white hover:bg-indigo-50 border border-stone-200 hover:border-indigo-300 text-left transition shadow-2xs active:scale-95 group"
                      title={`Bấm để nghe âm "${item.sample.syllable}" (${item.sample.hanzi} - ${item.sample.meaning})`}
                    >
                      <div className="text-xs font-black text-indigo-700 group-hover:text-indigo-800">
                        {item.sample.syllable}
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mt-0.5">
                        <span className="hanzi-font font-bold text-slate-800">{item.sample.hanzi}</span>
                        <Volume2 size={11} className="text-slate-400 group-hover:text-indigo-600" />
                      </div>
                      <div className="text-[9px] text-slate-400 truncate mt-0.5">
                        {item.sample.meaning}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
