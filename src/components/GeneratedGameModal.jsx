import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import MascotVaani from './MascotVaani';
import HeroAudioPanel from './HeroAudioPanel';
import { generateSpeech } from '../utils/audioService';
import { Sparkles, Trophy, Flame, Volume2, CheckCircle2, RotateCcw, Award, ArrowRight, Star, Heart, Smile } from 'lucide-react';

export default function GeneratedGameModal({ lesson, onClose, onRewardClaim }) {
  const [gameMode, setGameMode] = useState(lesson?.gameType || 'garden'); // 'garden' | 'bazaar' | 'safari' | 'listen' | 'builder'
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [plantStage, setPlantStage] = useState(1); // 1: Seedling -> 2: Plant -> 3: Bush -> 4: Flowering Tree
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [difficulty, setDifficulty] = useState('Normal'); // 'Easy' | 'Normal' | 'Challenge'

  // Dynamic question bank based on gameMode / lesson topic
  const questions = gameMode === 'garden' ? [
    {
      q: 'What does your village plant need most to grow strong leaves?',
      options: ['💧 Fresh Rain Water', '🍬 Candy Sweets', '🧸 Toy Doll', '⚽ Leather Ball'],
      correct: 0,
      hint: 'Plants drink water through their roots!'
    },
    {
      q: 'What helps green leaves make food during daytime?',
      options: ['☀️ Bright Sunlight', '🌙 Night Moon', '🌧️ Hail Storm', '🔦 Electric Flashlight'],
      correct: 0,
      hint: 'Sunlight gives leaves natural energy!'
    },
    {
      q: 'Where do plant roots anchor to soak up minerals?',
      options: ['🌱 Rich Soil Earth', '🧱 Cement Floor', '🥤 Plastic Bottle', '🎈 Air Balloon'],
      correct: 0,
      hint: 'Soil holds nutrients for plants!'
    }
  ] : gameMode === 'bazaar' ? [
    {
      q: 'Muthu buys 2 sweet mangoes at ₹5 each. What is the total cost?',
      options: ['₹10', '₹15', '₹8', '₹20'],
      correct: 0,
      hint: 'Add 5 + 5 = 10 rupees!'
    },
    {
      q: 'If Muthu pays with a ₹20 note, how much change should he get back?',
      options: ['₹10', '₹5', '₹2', '₹15'],
      correct: 0,
      hint: 'Subtract 20 - 10 = 10 rupees change!'
    }
  ] : [
    {
      q: 'Match the picture of 🥭 with its mother-tongue word:',
      options: ['மாம்பழம் (Mango)', 'வாழைப்பழம் (Banana)', 'தேங்காய் (Coconut)', 'ஆப்பிள் (Apple)'],
      correct: 0,
      hint: 'Mango is the king of summer fruits!'
    },
    {
      q: 'Which object belongs in a school bag?',
      options: ['✏️ Pencil', '🥛 Milk Bottle', '🍌 Banana', '🧱 Brick'],
      correct: 0,
      hint: 'You write with a pencil!'
    }
  ];

  const currentQ = questions[currentQuestionIdx] || questions[0];

  const handleAnswerSelect = (optionIdx) => {
    setSelectedAnswer(optionIdx);

    if (optionIdx === currentQ.correct) {
      // CORRECT ANSWER!
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setPlantStage((prev) => Math.min(prev + 1, 4));

      setFeedbackMsg({
        type: 'success',
        title: 'Awesome! You got it! 🎉',
        text: 'Vaani is super proud of you! Your virtual plant grew bigger!'
      });

      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });

      setTimeout(() => {
        if (currentQuestionIdx + 1 < questions.length) {
          setCurrentQuestionIdx(currentQuestionIdx + 1);
          setSelectedAnswer(null);
          setFeedbackMsg(null);
        } else {
          setGameFinished(true);
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
        }
      }, 1400);
    } else {
      // INCORRECT CHOICE — Friendly encouraging guidance (NO harsh "Incorrect")
      setStreak(0);
      setFeedbackMsg({
        type: 'encouraging',
        title: 'Almost there! Let’s try another clue 💡',
        text: currentQ.hint || 'Think about what you see in the village garden!'
      });
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setPlantStage(1);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setFeedbackMsg(null);
    setGameFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FFFBF5] max-w-3xl w-full rounded-3xl border-2 border-amber-400 shadow-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto relative animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center text-xl font-bold shadow-md">
              🎮
            </div>
            <div>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-amber-300 font-mono">
                AI Generated Children's Game
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                {lesson?.topic || 'Interactive Learning Adventure'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Difficulty Selector */}
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="bg-white border border-amber-300 text-slate-800 font-bold text-xs rounded-xl px-2.5 py-1 focus:outline-none"
            >
              <option value="Easy">Grade 1-2 (Easy)</option>
              <option value="Normal">Grade 3-4 (Normal)</option>
              <option value="Challenge">Grade 5 (Challenge)</option>
            </select>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Mascot Vaani Encouragement */}
        <MascotVaani
          state={gameFinished ? 'celebrating' : feedbackMsg?.type === 'success' ? 'celebrating' : 'greeting'}
          customText={
            gameFinished
              ? 'Shabash! You completed the game adventure! Your garden is full of blooming flowers! 🌸🎉'
              : feedbackMsg
              ? `${feedbackMsg.title} ${feedbackMsg.text}`
              : 'Let’s solve this challenge together! Tap the correct answer below!'
          }
        />

        {/* GAME SELECTION TABS (6 Reusable Game Types) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-amber-200 pb-2 text-xs font-bold">
          <span className="text-slate-500 font-mono">Game Mode:</span>
          {[
            { id: 'garden', label: '🌱 Grow Your Garden' },
            { id: 'bazaar', label: '🧺 Bhasha Bazaar' },
            { id: 'safari', label: '🦁 Word Safari' }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                setGameMode(mode.id);
                handleRestart();
              }}
              className={`px-3 py-1 rounded-xl transition-all ${
                gameMode === mode.id
                  ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-300'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-teal-50'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {!gameFinished ? (
          <div className="space-y-4">
            {/* GROW YOUR GARDEN VISUAL PLANT PROGRESS BAR */}
            {gameMode === 'garden' && (
              <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-5 rounded-3xl border border-emerald-600 shadow-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/40 flex items-center justify-center text-4xl shadow-inner">
                    {plantStage === 1 ? '🌱' : plantStage === 2 ? '🌿' : plantStage === 3 ? '🌳' : '🌸'}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-300 font-extrabold uppercase block">
                      Virtual Village Garden Status
                    </span>
                    <h4 className="text-base font-extrabold text-white">
                      {plantStage === 1
                        ? 'Tiny Seedling sprouted'
                        : plantStage === 2
                        ? 'Green Stem & Leaves growing'
                        : plantStage === 3
                        ? 'Healthy Plant Bush'
                        : 'Beautiful Flowering Tree! 🌸'}
                    </h4>
                    <p className="text-xs text-emerald-200">
                      Answer challenges correctly to water and grow your plant!
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-amber-300">
                    Question {currentQuestionIdx + 1} of {questions.length}
                  </div>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < plantStage ? 'bg-amber-400' : 'bg-slate-700'
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* QUESTION CARD */}
            <div className="bg-white p-5 rounded-3xl border-2 border-teal-200 shadow-sm space-y-4">
              <h4 className="font-extrabold text-base text-slate-900 leading-snug">
                "{currentQ.q}"
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === currentQ.correct;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(idx)}
                      className={`p-4 rounded-2xl border text-left font-bold text-xs transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? isCorrect
                            ? 'bg-emerald-600 text-white border-emerald-700 shadow-md ring-2 ring-emerald-300'
                            : 'bg-amber-500 text-slate-950 border-amber-600 ring-2 ring-amber-300'
                          : 'bg-[#FFFBF5] text-slate-900 border-amber-200 hover:bg-amber-50 hover:border-amber-400'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && isCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Audio Panel for Spoken Question */}
            <HeroAudioPanel
              text={currentQ.q}
              langCode="ta-IN"
              languageName="Tamil"
            />
          </div>
        ) : (
          /* GAME COMPLETED CELEBRATION CARD */
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-6 rounded-3xl shadow-xl text-center space-y-4 border-2 border-emerald-400 animate-bounce">
            <div className="w-16 h-16 rounded-full bg-white text-emerald-800 flex items-center justify-center mx-auto text-3xl font-bold shadow-md">
              🌸
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">
                Outstanding! Game Mastered!
              </h3>
              <p className="text-sm text-emerald-100 mt-1 font-serif">
                "Your plant is healthy & blooming! You earned rewards for understanding the lesson!"
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <span className="bg-amber-400 text-slate-950 px-4 py-2 rounded-2xl font-black text-xs shadow-md">
                +100 XP
              </span>
              <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-4 py-2 rounded-2xl font-black text-xs shadow-md">
                +25 Coins 🪙
              </span>
              <span className="bg-indigo-950 text-indigo-200 border border-indigo-500/40 px-4 py-2 rounded-2xl font-black text-xs shadow-md">
                🏆 Curious Learner Badge
              </span>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs rounded-2xl shadow"
              >
                Play Again
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-2xl shadow"
              >
                Claim Rewards & Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
