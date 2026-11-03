import React from 'react';
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
  BookOpen
} from 'lucide-react';
import { ThematicTopic } from '../../types/thematic';

interface TopicSelectorProps {
  topics: ThematicTopic[];
  selectedTopicId: string;
  onSelectTopic: (topicId: string) => void;
  allSentencesCount: number;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  topics,
  selectedTopicId,
  onSelectTopic,
  allSentencesCount
}) => {
  const isAllTopics = selectedTopicId === 'all';

  const getTopicIcon = (topicId: string) => {
    switch (topicId) {
      case 'all': return <Shuffle size={15} className={isAllTopics ? 'text-slate-950 animate-spin-slow' : 'text-amber-500'} />;
      case 'numbers': return <Hash size={15} className="text-amber-500" />;
      case 'time_calendar': return <Clock size={15} className="text-blue-500" />;
      case 'animals': return <Sparkles size={15} className="text-emerald-500" />;
      case 'jobs': return <Briefcase size={15} className="text-purple-500" />;
      case 'family': return <Users size={15} className="text-rose-500" />;
      case 'colors_adj': return <Palette size={15} className="text-pink-500" />;
      case 'food_fruits': return <UtensilsCrossed size={15} className="text-orange-500" />;
      case 'places_travel': return <Navigation size={15} className="text-cyan-500" />;
      case 'verbs': return <Zap size={15} className="text-teal-500" />;
      case 'adjectives': return <Smile size={15} className="text-amber-500" />;
      default: return <BookOpen size={15} />;
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
        <span>Chọn chủ đề luyện tập ({topics.length} chuyên đề + Kho trộn ngẫu nhiên):</span>
        <span>Tổng {allSentencesCount}+ câu mẫu</span>
      </div>

      {/* Responsive Grid for All Topics - No more horizontal scrolling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5">
        {/* Shuffle All Topics Button - Spans 2 cols */}
        <button
          onClick={() => onSelectTopic('all')}
          className={`col-span-2 flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-xs ${
            isAllTopics
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-amber-500/30 ring-2 ring-amber-300'
              : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="shrink-0">{getTopicIcon('all')}</span>
            <span className="truncate">🎲 Trộn ngẫu nhiên tất cả</span>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-md font-black shrink-0 ${
            isAllTopics ? 'bg-black/20 text-slate-950' : 'bg-stone-100 text-slate-500'
          }`}>
            {allSentencesCount} câu
          </span>
        </button>

        {/* 10 Individual Thematic Topics */}
        {topics.map((topic) => {
          const isSelected = selectedTopicId === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-xs ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-indigo-600/30 ring-2 ring-indigo-400'
                  : 'bg-white hover:bg-stone-100 text-slate-700 border border-stone-200'
              }`}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="shrink-0">{getTopicIcon(topic.id)}</span>
                <span className="truncate">{topic.title}</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md shrink-0 ${
                isSelected ? 'bg-white/20 text-white font-bold' : 'bg-stone-100 text-slate-500'
              }`}>
                {topic.sampleSentences.length}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
