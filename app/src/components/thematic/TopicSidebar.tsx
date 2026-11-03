import React, { useState, useMemo } from 'react';
import {
  Shuffle,
  Hash,
  Clock,
  Sparkles,
  Briefcase,
  Users,
  Palette,
  UtensilsCrossed,
  Navigation,
  Zap,
  Smile,
  BookOpen,
  Search,
  X,
  Layers,
  PanelLeftClose,
  Globe
} from 'lucide-react';
import { ThematicTopic } from '../../types/thematic';

interface TopicSidebarProps {
  topics: ThematicTopic[];
  selectedTopicId: string;
  onSelectTopic: (topicId: string) => void;
  allSentencesCount: number;
  onClose?: () => void;
}

export const TopicSidebar: React.FC<TopicSidebarProps> = ({
  topics,
  selectedTopicId,
  onSelectTopic,
  allSentencesCount,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const isAllTopics = selectedTopicId === 'all';

  const getTopicIcon = (topicId: string, isSelected: boolean) => {
    switch (topicId) {
      case 'all':
        return <Shuffle size={18} className={isSelected ? 'text-amber-950 animate-spin-slow' : 'text-amber-500'} />;
      case 'numbers':
        return <Hash size={18} className={isSelected ? 'text-white' : 'text-amber-500'} />;
      case 'time_calendar':
        return <Clock size={18} className={isSelected ? 'text-white' : 'text-blue-500'} />;
      case 'animals':
        return <Sparkles size={18} className={isSelected ? 'text-white' : 'text-emerald-500'} />;
      case 'jobs':
        return <Briefcase size={18} className={isSelected ? 'text-white' : 'text-purple-500'} />;
      case 'family':
        return <Users size={18} className={isSelected ? 'text-white' : 'text-rose-500'} />;
      case 'colors_adj':
        return <Palette size={18} className={isSelected ? 'text-white' : 'text-pink-500'} />;
      case 'food_fruits':
        return <UtensilsCrossed size={18} className={isSelected ? 'text-white' : 'text-orange-500'} />;
      case 'places_travel':
        return <Navigation size={18} className={isSelected ? 'text-white' : 'text-cyan-500'} />;
      case 'verbs':
        return <Zap size={18} className={isSelected ? 'text-white' : 'text-teal-500'} />;
      case 'adjectives':
        return <Smile size={18} className={isSelected ? 'text-white' : 'text-amber-500'} />;
      case 'countries_languages':
        return <Globe size={18} className={isSelected ? 'text-white' : 'text-blue-500'} />;
      default:
        return <BookOpen size={18} className={isSelected ? 'text-white' : 'text-indigo-500'} />;
    }
  };

  // Filter topics based on search query
  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return topics;

    return topics.filter(topic => {
      const matchTitle = topic.title.toLowerCase().includes(q);
      const matchChinese = topic.chineseTitle.toLowerCase().includes(q);
      const matchPinyin = topic.pinyinTitle.toLowerCase().includes(q);
      const matchDesc = topic.desc.toLowerCase().includes(q);
      const matchWords = topic.words.some(
        w =>
          w.meaning.toLowerCase().includes(q) ||
          w.hanzi.includes(q) ||
          w.pinyin.toLowerCase().includes(q)
      );

      return matchTitle || matchChinese || matchPinyin || matchDesc || matchWords;
    });
  }, [topics, searchQuery]);

  const showAllCard = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return 'tất cả'.includes(q) || 'trộn'.includes(q) || 'toàn bộ'.includes(q) || 'ngẫu nhiên'.includes(q);
  }, [searchQuery]);

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-stone-200/80 shadow-md space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
        <div>
          <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
            <Layers size={17} className="text-indigo-600" />
            <span>Chủ Đề Luyện Tập</span>
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {topics.length} chuyên đề thực tế + Kho luyện gõ
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-100 shrink-0">
            {filteredTopics.length} / {topics.length}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-500 hover:text-slate-800 transition"
              title="Ẩn sidebar này"
            >
              <PanelLeftClose size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <Search size={15} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm chủ đề, từ vựng, chữ Hán..."
          className="w-full pl-9 pr-8 py-2 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            title="Xóa tìm kiếm"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Topics List */}
      <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
        {/* All Topics / Shuffle Option */}
        {showAllCard && (
          <button
            onClick={() => onSelectTopic('all')}
            title={`Toàn Bộ Chủ Đề (Trộn ngẫu nhiên)\nTổng hợp ${allSentencesCount}+ câu mẫu từ tất cả ${topics.length} chuyên đề để luyện phản xạ`}
            className={`w-full text-left p-3 rounded-2xl flex items-center justify-between gap-3 transition-all active:scale-95 group ${
              isAllTopics
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-md shadow-amber-500/25 ring-2 ring-amber-300'
                : 'bg-amber-50/60 hover:bg-amber-100/80 text-slate-800 border border-amber-200/80'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                isAllTopics ? 'bg-amber-400/80 shadow-xs' : 'bg-white text-amber-600 border border-amber-200'
              }`}>
                {getTopicIcon('all', isAllTopics)}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-black leading-snug">
                  🎲 Toàn Bộ Chủ Đề (Trộn ngẫu nhiên)
                </div>
                <div className={`text-[11px] font-medium ${isAllTopics ? 'text-slate-900/80' : 'text-slate-500'}`}>
                  Kho luyện phản xạ tổng hợp
                </div>
              </div>
            </div>

            <span className={`text-[10px] px-2 py-0.5 rounded-lg font-black shrink-0 ${
              isAllTopics ? 'bg-black/20 text-slate-950' : 'bg-white text-amber-800 border border-amber-200'
            }`}>
              {allSentencesCount} câu
            </span>
          </button>
        )}

        {/* 10 Thematic Topics */}
        {filteredTopics.map((topic) => {
          const isSelected = selectedTopicId === topic.id;
          const fullTooltip = `${topic.title} • ${topic.chineseTitle} (${topic.pinyinTitle})\n${topic.desc}\n• ${topic.sampleSentences.length} câu luyện gõ\n• ${topic.words.length} từ vựng chuyên sâu`;

          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              title={fullTooltip}
              className={`w-full text-left p-3 rounded-2xl flex items-center justify-between gap-3 transition-all active:scale-95 group ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold shadow-md shadow-indigo-600/25 ring-2 ring-indigo-400'
                  : 'bg-stone-50/70 hover:bg-stone-100 text-slate-700 border border-stone-200/70 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-white/20' : 'bg-white border border-stone-200 shadow-2xs'
                }`}>
                  {getTopicIcon(topic.id, isSelected)}
                </div>

                <div className="min-w-0 flex-1">
                  {/* Full Title - Never hidden with ellipsis */}
                  <div className={`text-xs sm:text-sm font-extrabold leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-800 group-hover:text-indigo-600'
                  }`}>
                    {topic.title}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] mt-0.5">
                    <span className={`hanzi-font font-bold ${
                      isSelected ? 'text-amber-300' : 'text-amber-600'
                    }`}>
                      {topic.chineseTitle}
                    </span>
                    <span className={isSelected ? 'text-indigo-200' : 'text-slate-400'}>
                      ({topic.pinyinTitle})
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <span className={`text-[10px] px-2 py-0.5 rounded-lg font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-stone-200'
                }`}>
                  {topic.sampleSentences.length} câu
                </span>
                <span className={`text-[9px] mt-0.5 ${
                  isSelected ? 'text-indigo-200' : 'text-slate-400'
                }`}>
                  {topic.words.length} từ
                </span>
              </div>
            </button>
          );
        })}

        {filteredTopics.length === 0 && !showAllCard && (
          <div className="text-center py-6 px-3 bg-stone-50 rounded-2xl border border-stone-200/80">
            <p className="text-xs font-bold text-slate-600">
              Không tìm thấy chủ đề phù hợp với "{searchQuery}"
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Thử tìm kiếm với từ khóa khác (VD: số, gia đình, ăn, thời gian...)
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition"
            >
              Xóa tìm kiếm
            </button>
          </div>
        )}
      </div>

      {/* Footer hint */}
      <div className="pt-1 text-[11px] text-slate-400 text-center border-t border-stone-100">
        💡 Rê chuột vào từng chủ đề để xem chi tiết đầy đủ
      </div>
    </div>
  );
};
