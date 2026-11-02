import React, { useState } from 'react';
import { Volume2, RotateCcw, CheckCircle, XCircle, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DialogueScenario, QuizQuestion } from '../types/lesson';

interface Props {
  dialogues: DialogueScenario[];
  quiz: QuizQuestion[];
  onSpeak: (text: string) => void;
}

export const DialogueQuizSection: React.FC<Props> = ({
  dialogues,
  quiz,
  onSpeak
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const answerQuestion = (qIdx: number, oIdx: number) => {
    if (userAnswers[qIdx] !== undefined) return;
    const newAnswers = { ...userAnswers, [qIdx]: oIdx };
    setUserAnswers(newAnswers);

    // Speak answer word
    onSpeak(quiz[qIdx].speakWord);

    // If correct and complete, trigger confetti!
    const correctCount = Object.keys(newAnswers).filter(k => newAnswers[Number(k)] === quiz[Number(k)].correct).length;
    if (correctCount === quiz.length) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
  };

  const correctCount = Object.keys(userAnswers).filter(k => userAnswers[Number(k)] === quiz[Number(k)].correct).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
      {/* Left 6 Columns: Dialogues */}
      <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-5">
        <div className="border-b border-stone-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cinnabar-600">Phần 5.1 • Hội Thoại Thực Tế</span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">Mẫu Câu Giao Tiếp Bài 1</h3>
        </div>

        <div className="space-y-4">
          {dialogues.map((d, dIdx) => (
            <div key={dIdx} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4 space-y-3">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-cinnabar-700">{d.title}</h4>
              <div className="space-y-2.5">
                {d.lines.map((line, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-3 rounded-2xl bg-white border border-stone-200/90 flex items-start justify-between gap-3 hover:border-cinnabar-300 transition"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className={`w-7 h-7 rounded-xl ${line.speaker === 'A' ? 'bg-cinnabar-600' : 'bg-indigo-600'} text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5`}>
                        {line.speaker}
                      </span>
                      <div>
                        <div className="hanzi-font text-lg font-bold text-slate-900">{line.hanzi}</div>
                        <div className="text-xs font-bold text-cinnabar-600">{line.pinyin}</div>
                        <div className="text-xs text-slate-700 font-medium mt-0.5">{line.vn}</div>
                        <div className="text-[11px] text-slate-500 mt-1 bg-stone-50 px-2 py-0.5 rounded-md inline-block border border-stone-200/60">
                          {line.note}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onSpeak(line.hanzi)}
                      className="px-3 py-1.5 rounded-xl bg-cinnabar-50 hover:bg-cinnabar-600 text-cinnabar-700 hover:text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition"
                    >
                      <Volume2 size={13} />
                      <span>Nghe</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right 6 Columns: Interactive 8-Question Quiz */}
      <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm flex flex-col justify-between space-y-5">
        <div>
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Phần 5.2 • Kiểm Tra Phản Xạ</span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">8 Câu Trắc Nghiệm Tổng Hợp</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 font-extrabold text-xs border border-indigo-200 flex items-center gap-1">
                <Award size={14} /> Điểm: {correctCount} / {quiz.length}
              </span>
              <button
                onClick={resetQuiz}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-600 text-xs font-bold transition"
                title="Làm lại từ đầu"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          <div className="space-y-4 mt-4 max-h-[680px] overflow-y-auto pr-1">
            {quiz.map((item, qIdx) => {
              const answered = userAnswers[qIdx] !== undefined;
              const selectedOpt = userAnswers[qIdx];
              const isCorrect = selectedOpt === item.correct;

              return (
                <div
                  key={qIdx}
                  className={`p-4 rounded-2xl border transition-all ${
                    answered
                      ? isCorrect ? 'border-emerald-300 bg-emerald-50/20' : 'border-rose-300 bg-rose-50/20'
                      : 'border-stone-200 bg-stone-50/50'
                  } space-y-3`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.q}</h4>
                    <button
                      onClick={() => onSpeak(item.speakWord)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:border-cinnabar-400 text-cinnabar-600 text-xs font-bold shrink-0 flex items-center gap-1"
                    >
                      <Volume2 size={12} />
                      <span>Nghe</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {item.options.map((opt, oIdx) => {
                      let btnStyle = 'bg-white hover:bg-indigo-50 border-stone-200 text-slate-700';
                      if (answered) {
                        if (oIdx === item.correct) {
                          btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                        } else if (oIdx === selectedOpt) {
                          btnStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
                        } else {
                          btnStyle = 'bg-white/60 border-stone-200 text-slate-400';
                        }
                      }
                      return (
                        <button
                          key={oIdx}
                          onClick={() => answerQuestion(qIdx, oIdx)}
                          disabled={answered}
                          className={`w-full p-2.5 rounded-xl border text-left text-xs sm:text-sm transition flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                          {answered && oIdx === item.correct && <CheckCircle size={15} />}
                          {answered && oIdx === selectedOpt && oIdx !== item.correct && <XCircle size={15} />}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-slate-700 leading-relaxed">
                      <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                        {isCorrect ? '✔ Chính xác! ' : '✘ Chưa đúng! '}
                      </strong>
                      {item.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
