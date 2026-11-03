import React from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { ThematicTopic } from '../../types/thematic';

interface ThematicBannerProps {
  isAllTopics: boolean;
  currentTopic: ThematicTopic;
  allSentencesCount: number;
  streak: number;
}

export const ThematicBanner: React.FC<ThematicBannerProps> = ({
  isAllTopics,
  currentTopic,
  streak
}) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-900/50 relative overflow-hidden">
      {/* Background Chinese Character Watermark */}
      <div className="absolute -right-6 -bottom-10 opacity-10 pointer-events-none select-none">
        <span className="hanzi-font text-[140px] sm:text-[180px] font-black">
          {isAllTopics ? '综合' : currentTopic.chineseTitle}
        </span>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-amber-300 text-xs font-bold">
            <Sparkles size={14} />
            <span>Chuyên Đề Từ Vựng Thực Tế & Luyện Gõ Tiếng Trung Thông Minh</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-2 flex-wrap">
            {isAllTopics ? (
              <>
                <span>🎲 Kho Luyện Gõ Tổng Hợp Toàn Bộ Chủ Đề</span>
                <span className="text-amber-400 hanzi-font">(全部主题)</span>
              </>
            ) : (
              <>
                <span>{currentTopic.title}</span>
                <span className="hanzi-font text-amber-400">— {currentTopic.chineseTitle}</span>
                <span className="text-sm text-slate-300 font-normal">({currentTopic.pinyinTitle})</span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {isAllTopics
              ? 'Luyện tập tổng hợp 100+ mẫu câu giao tiếp đời sống thực tế (Số đếm, Lịch thứ ngày, Động vật, Nghề nghiệp, Gia đình, Đồ ăn, Du lịch, Động từ và Tính từ). Hỗ trợ chế độ Thử Thách Ẩn Đáp Án và Sinh câu ngẫu nhiên.'
              : currentTopic.desc}
          </p>
        </div>

        {/* Streak Counter Box */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 shadow-sm">
            <Flame size={24} className="text-amber-400 animate-pulse" />
            <div>
              <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Chuỗi Gõ Chuẩn</div>
              <div className="text-base font-black text-amber-300">{streak} câu liên tiếp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
