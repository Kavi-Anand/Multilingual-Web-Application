import React, { useState } from 'react';
import { BRANCHING_STORY } from '../data/masterData';
import HeroAudioPanel from './HeroAudioPanel';
import { BookOpen, Sparkles, ArrowRight, CheckCircle2, RotateCcw, Award } from 'lucide-react';

export default function StoryModeKadhaiTime({ languageObj }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [storyCompleted, setStoryCompleted] = useState(false);

  const scene = BRANCHING_STORY.scenes.find((s) => s.step === currentStepIndex) || BRANCHING_STORY.scenes[0];

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);

    if (choice.nextStep === 'finish') {
      setStoryCompleted(true);
    } else {
      setTimeout(() => {
        setCurrentStepIndex(choice.nextStep);
        setSelectedChoice(null);
      }, 800);
    }
  };

  const handleRestartStory = () => {
    setCurrentStepIndex(1);
    setSelectedChoice(null);
    setStoryCompleted(false);
  };

  return (
    <div className="bg-[#FFFBF5] p-6 rounded-3xl border-2 border-teal-300 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-teal-200 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-700 text-white flex items-center justify-center text-xl shadow-md">
            📖
          </div>
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
              Interactive Story Mode
            </span>
            <h3 className="font-extrabold text-slate-900 text-base">
              Kadhai Time: {BRANCHING_STORY.title}
            </h3>
          </div>
        </div>

        <button
          onClick={handleRestartStory}
          className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-teal-50 text-slate-700 rounded-xl text-xs font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Restart Story
        </button>
      </div>

      {/* Main Narrative Card */}
      {!storyCompleted ? (
        <div className="space-y-4">
          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase">
              Scene {scene.step} of 4:
            </span>
            <p className="text-base font-serif italic text-slate-100 leading-relaxed">
              "{scene.narrative}"
            </p>
            <div className="bg-slate-950 p-3.5 rounded-2xl border border-emerald-500/40 text-emerald-300 font-serif font-bold text-sm">
              "{scene.nativeNarrative}"
            </div>
          </div>

          {/* Audio Panel */}
          <HeroAudioPanel
            text={scene.nativeNarrative}
            langCode={languageObj.code}
            languageName={languageObj.name}
          />

          {/* Branching Choice Prompt */}
          <div className="bg-white p-5 rounded-3xl border border-amber-300 space-y-3 shadow-sm">
            <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" /> {scene.question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scene.choices.map((choice, idx) => {
                const isSelected = selectedChoice?.label === choice.label;
                return (
                  <button
                    key={idx}
                    onClick={() => handleChoiceSelect(choice)}
                    className={`p-4 rounded-2xl border text-left font-bold text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-teal-700 text-white border-teal-900 shadow-md ring-2 ring-teal-300'
                        : 'bg-[#FFFBF5] text-slate-900 border-amber-200 hover:bg-amber-50 hover:border-amber-400'
                    }`}
                  >
                    <span>{choice.label}</span>
                    <ArrowRight className="w-4 h-4 text-amber-500" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Story Completed Summary */
        <div className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white p-6 rounded-3xl shadow-xl text-center space-y-4 border-2 border-emerald-400">
          <div className="w-16 h-16 rounded-full bg-white text-emerald-800 flex items-center justify-center mx-auto text-3xl font-bold shadow-md">
            🌟
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">
              Story Complete!
            </h3>
            <p className="text-sm text-teal-100 mt-1 font-serif">
              "Meena and Muthu learned mathematics, sharing, and kindness at the village Haat!"
            </p>
          </div>
          <button
            onClick={handleRestartStory}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-2xl text-xs shadow"
          >
            Read Story Again
          </button>
        </div>
      )}
    </div>
  );
}
