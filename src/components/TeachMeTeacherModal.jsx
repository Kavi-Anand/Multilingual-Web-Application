import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, Volume2, HelpCircle, ArrowRight, Award, MessageSquare } from 'lucide-react';
import HeroAudioPanel from './HeroAudioPanel';

export default function TeachMeTeacherModal({ lesson, languageObj, onClose }) {
  const [currentStep, setCurrentStep] = useState(1); // 1: Explain -> 2: Example -> 3: Question -> 4: Feedback -> 5: FollowUp
  const [studentAnswer, setStudentAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const seq = lesson.teachingSequence || {
    explanation: 'Addition combines two groups of items to find the total sum.',
    localExample: 'If you buy ₹10 mangoes and ₹5 sweets, 10 + 5 = ₹15.',
    question: 'How much is 10 + 5?',
    correctAnswer: '15',
    feedbackCorrect: 'Correct! 🎉 You understood market addition!',
    followUp: 'If you pay ₹20 note, how much change should you get back?'
  };

  const handleAnswerSubmit = (ans) => {
    setStudentAnswer(ans);
    setIsAnswered(true);
    setCurrentStep(4);

    if (ans === seq.correctAnswer || ans.includes(seq.correctAnswer)) {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FFFBF5] max-w-2xl w-full rounded-3xl border-2 border-teal-500 shadow-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto relative animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-teal-200 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-700 text-white flex items-center justify-center text-xl shadow-md">
              👩‍🏫
            </div>
            <div>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300 font-mono">
                ✨ Virtual Primary Teacher Sequence
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                Teach Me: {lesson.title} ({languageObj.name})
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Teaching Sequence Progress Indicator */}
        <div className="grid grid-cols-5 text-[10px] font-mono font-bold text-center border-b border-slate-200 pb-2">
          <span className={currentStep >= 1 ? 'text-teal-800 font-extrabold' : 'text-slate-400'}>1. Explain</span>
          <span className={currentStep >= 2 ? 'text-teal-800 font-extrabold' : 'text-slate-400'}>2. Example</span>
          <span className={currentStep >= 3 ? 'text-teal-800 font-extrabold' : 'text-slate-400'}>3. Question</span>
          <span className={currentStep >= 4 ? 'text-emerald-800 font-extrabold' : 'text-slate-400'}>4. Feedback</span>
          <span className={currentStep >= 5 ? 'text-indigo-800 font-extrabold' : 'text-slate-400'}>5. Follow-Up</span>
        </div>

        {/* STEP 1: EXPLAIN */}
        {currentStep >= 1 && (
          <div className="bg-white p-4 rounded-2xl border border-teal-200 space-y-2 shadow-sm">
            <span className="text-xs font-bold text-teal-900 uppercase tracking-wider block">
              Step 1: AI Teacher Concept Explanation
            </span>
            <p className="text-sm font-medium text-slate-800 leading-relaxed font-sans">
              "{seq.explanation}"
            </p>
          </div>
        )}

        {/* STEP 2: LOCAL EXAMPLE */}
        {currentStep >= 2 && (
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 space-y-2 shadow-sm">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Step 2: Culturally Adapted Local Example
            </span>
            <p className="text-sm font-serif italic text-slate-900 leading-relaxed font-semibold">
              "{seq.localExample}"
            </p>
          </div>
        )}

        {/* STEP 3: ASK QUESTION */}
        {currentStep >= 3 && (
          <div className="bg-indigo-900 text-white p-5 rounded-2xl border border-indigo-700 space-y-3 shadow-md">
            <span className="text-xs font-mono font-bold text-amber-300 uppercase block">
              Step 3: Teacher Check Question
            </span>
            <h4 className="font-extrabold text-base text-white">
              "{seq.question}"
            </h4>

            {!isAnswered ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {[seq.correctAnswer, '12', '18', '20'].map((ans, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSubmit(ans)}
                    className="px-4 py-2 bg-white text-indigo-950 font-extrabold text-xs rounded-xl hover:bg-amber-400 hover:text-slate-950 transition-colors shadow"
                  >
                    {ans}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-xs text-indigo-200">
                You answered: <strong className="text-white font-bold">{studentAnswer}</strong>
              </div>
            )}
          </div>
        )}

        {/* STEP 4: FEEDBACK */}
        {currentStep >= 4 && (
          <div className="bg-emerald-100 text-emerald-900 border border-emerald-300 p-4 rounded-2xl space-y-2 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Step 4: AI Encouraging Feedback
            </span>
            <p className="text-sm font-extrabold text-emerald-950">
              {seq.feedbackCorrect}
            </p>
          </div>
        )}

        {/* STEP 5: FOLLOW-UP */}
        {currentStep >= 5 && (
          <div className="bg-teal-50 border border-teal-300 p-4 rounded-2xl space-y-2 text-xs text-teal-950 shadow-sm">
            <span className="font-bold text-teal-900 uppercase tracking-wider block">
              Step 5: Master Challenge Follow-Up Question
            </span>
            <p className="font-semibold text-slate-800">
              "{seq.followUp}"
            </p>
          </div>
        )}

        {/* Next Step Control Button */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
          <HeroAudioPanel
            text={
              currentStep === 1
                ? seq.explanation
                : currentStep === 2
                ? seq.localExample
                : seq.question
            }
            langCode={languageObj.code}
            languageName={languageObj.name}
          />

          <button
            onClick={() => {
              if (currentStep < 5) setCurrentStep(currentStep + 1);
              else onClose();
            }}
            className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs rounded-2xl shadow flex items-center gap-1.5"
          >
            <span>{currentStep === 5 ? 'Finish Teaching Sequence' : 'Next Step'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
