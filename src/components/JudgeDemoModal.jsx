import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { generateSpeech, stopAudio } from '../utils/audioService';
import { Rocket, ArrowRight, CheckCircle2, Play, Volume2, Sparkles, Trophy, Users, Upload, Gamepad2 } from 'lucide-react';

export default function JudgeDemoModal({ onClose, onNavigateModule }) {
  const [stepIndex, setStepIndex] = useState(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const demoSteps = [
    {
      step: 1,
      title: 'Step 1: Select Target Mother Tongue',
      desc: 'Selecting Tamil (தமிழ்) — 1 of 8 fully live Eighth Schedule languages.',
      actionLabel: 'Proceed to Upload Material',
      targetModule: 'student'
    },
    {
      step: 2,
      title: 'Step 2: Upload Learning Material ("Bring Your Own Lesson")',
      desc: 'Teacher uploads Grade 3 Science textbook page: "Plants need sunlight & water to grow."',
      actionLabel: 'Show Visual Processing Pipeline',
      targetModule: 'upload'
    },
    {
      step: 3,
      title: 'Step 3: Visual 8-Step File Processing Pipeline',
      desc: 'Pipeline executes: OCR extraction -> Learning Objective identification -> Transcreation.',
      actionLabel: 'Show Transcreation Comparison',
      targetModule: 'upload'
    },
    {
      step: 4,
      title: 'Step 4: Literal MT vs. Vidya Vaani Pedagogical Transcreation',
      desc: 'LEFT: Generic literal machine translation. RIGHT: Vidya Vaani mother-tongue adaptation with local village garden context.',
      actionLabel: 'Test Spoken Audio',
      targetModule: 'student'
    },
    {
      step: 5,
      title: 'Step 5: Listen to Spoken Tamil Voice (Real Audio Output)',
      desc: 'Executing BhashaSetu Speech Engine in spoken Tamil: "நம்ம வீட்ல அம்மா விறகு அடுப்புல சமையல் பண்ற மாதிரி..."',
      actionLabel: 'Click "Turn Into A Game"',
      targetModule: 'student',
      audioText: 'நம்ம வீட்ல அம்மா விறகு அடுப்புல சமையல் பண்ற மாதிரி, பச்சை செடிகள் சூரிய வெளிச்சத்தையும் தண்ணீளையும் வச்சு தாங்களே உணவு தயாரிக்குது!'
    },
    {
      step: 6,
      title: 'Step 6: "TURN INTO A GAME" — Auto-Generated Children\'s Game',
      desc: 'AI builds "Grow Your Garden 🌱" based on the uploaded plant growth lesson.',
      actionLabel: 'Solve Challenge',
      targetModule: 'game'
    },
    {
      step: 7,
      title: 'Step 7: Solve Interactive Challenge & Grow Plant',
      desc: 'Child answers "Fresh Water 💧" correctly! Virtual seedling grows into a flowering tree! 🌸',
      actionLabel: 'Claim Rewards',
      targetModule: 'game'
    },
    {
      step: 8,
      title: 'Step 8: Earn Rewards & AI Adaptive Progression',
      desc: 'Earned +100 XP, +25 Coins 🪙, and "Curious Learner" badge! AI recommends Market Addition next.',
      actionLabel: 'Open Teacher Co-Pilot',
      targetModule: 'insights'
    },
    {
      step: 9,
      title: 'Step 9: Open Teacher Co-Pilot Dashboard',
      desc: 'Teacher generates a multi-language lesson pack for rural vernacular classrooms.',
      actionLabel: 'Show Mixed Classroom Delivery',
      targetModule: 'teacher'
    },
    {
      step: 10,
      title: 'Step 10: Mixed-Language Classroom Delivery',
      desc: 'Demonstrates 1 English teacher delivering the SAME concept simultaneously to Tamil, Telugu, and Hindi students!',
      actionLabel: 'Complete Judge Presentation Tour',
      targetModule: 'teacher'
    }
  ];

  const currentStep = demoSteps.find((s) => s.step === stepIndex) || demoSteps[0];

  const handleNextStep = () => {
    if (currentStep.audioText) {
      setIsPlayingAudio(true);
      generateSpeech({
        text: currentStep.audioText,
        langCode: 'ta-IN',
        languageName: 'Tamil',
        rate: 1.0
      });
    }

    if (currentStep.targetModule && onNavigateModule) {
      onNavigateModule(currentStep.targetModule);
    }

    if (stepIndex < demoSteps.length) {
      setStepIndex(stepIndex + 1);
    } else {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FFFBF5] max-w-2xl w-full rounded-3xl border-2 border-amber-400 shadow-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto relative animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl shadow-md">
              🚀
            </div>
            <div>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-amber-300 font-mono">
                SIH 2026 Presentation Tour
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                2-Minute Guided Judge Demonstration
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

        {/* Step Progress Tracker */}
        <div className="flex items-center justify-between text-xs font-mono font-bold text-teal-800 border-b border-slate-200 pb-2">
          <span>Tour Progress: Step {stepIndex} of {demoSteps.length}</span>
          <div className="flex items-center gap-1">
            {demoSteps.map((s) => (
              <span
                key={s.step}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  s.step === stepIndex
                    ? 'bg-amber-500 ring-2 ring-amber-300 transform scale-125'
                    : s.step < stepIndex
                    ? 'bg-emerald-600'
                    : 'bg-slate-300'
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Current Step Card */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-950 to-slate-950 text-white p-6 rounded-3xl border border-teal-700/60 space-y-4 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              {currentStep.title}
            </span>
          </div>

          <p className="text-sm font-serif italic text-teal-100 leading-relaxed text-base">
            "{currentStep.desc}"
          </p>

          {currentStep.audioText && (
            <div className="bg-amber-950/80 border border-amber-500/60 p-3.5 rounded-2xl space-y-1 text-xs">
              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> Spoken Tamil Audio Output:
              </span>
              <p className="text-amber-100 font-serif italic">
                "{currentStep.audioText}"
              </p>
            </div>
          )}
        </div>

        {/* Control Button */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
          <button
            onClick={() => setStepIndex((prev) => Math.max(prev - 1, 1))}
            disabled={stepIndex === 1}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 disabled:opacity-40 font-bold rounded-xl text-xs"
          >
            Previous
          </button>

          <button
            onClick={handleNextStep}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center gap-2"
          >
            <span>{currentStep.actionLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Final Vision Statement */}
        <div className="text-center pt-2 text-[11px] text-slate-500 italic font-serif">
          "One lesson. Many languages. Every child gets a way to understand."
        </div>
      </div>
    </div>
  );
}
