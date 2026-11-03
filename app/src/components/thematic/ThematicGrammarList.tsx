import React from 'react';
import { Sparkles, Volume2 } from 'lucide-react';
import { ThematicGrammar } from '../../types/thematic';
import { AudioButton } from '../common/AudioButton';

interface ThematicGrammarListProps {
  grammarPoints: ThematicGrammar[];
  topicTitle: string;
  onSpeak: (text: string, tone?: number) => void;
}

export const ThematicGrammarList: React.FC<ThematicGrammarListProps> = ({
  grammarPoints,
  topicTitle,
  onSpeak
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Sparkles size={18} className="text-indigo-600" />
          <span>Ngữ Pháp Trọng Điểm: {topicTitle}</span>
        </h3>
      </div>

      <div className="space-y-5">
        {grammarPoints.map((gp) => (
          <div
            key={gp.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4"
          >
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                {gp.id}. {gp.title}
              </h4>
              <div className="mt-2 p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-extrabold text-indigo-900 font-mono">
                📐 Công thức: {gp.formula}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {gp.explanation}
            </p>

            {gp.usageNotes && gp.usageNotes.length > 0 && (
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Lưu ý khi sử dụng:
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                  {gp.usageNotes.map((note, nIdx) => (
                    <li key={nIdx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Example Sentences */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Ví dụ minh họa:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gp.examples.map((ex, eIdx) => (
                  <div
                    key={eIdx}
                    className="p-3.5 rounded-2xl bg-stone-50 hover:bg-indigo-50/60 border border-stone-200 transition space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="hanzi-font text-base font-bold text-slate-900">{ex.hanzi}</span>
                      <AudioButton
                        text={ex.hanzi}
                        onSpeak={onSpeak}
                        size="sm"
                        variant="ghost"
                        title="Nghe ví dụ"
                      />
                    </div>
                    <div className="text-xs font-bold text-indigo-700">{ex.pinyin}</div>
                    <div className="text-xs text-slate-600">{ex.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
