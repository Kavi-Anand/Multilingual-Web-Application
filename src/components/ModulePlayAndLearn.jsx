import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GAME_VOCABULARY } from '../data/lessons';
import { LANGUAGES_MASTER } from '../data/masterData';
import { playVernacularSpeech } from '../utils/speechEngine';
import MascotVaani from './MascotVaani';
import StoryModeKadhaiTime from './StoryModeKadhaiTime';
import { Trophy, Flame, Sparkles, Volume2, RotateCcw, CheckCircle2, HelpCircle, ShoppingBag, BookOpen } from 'lucide-react';

export default function ModulePlayAndLearn({ onToast }) {
  const [activeTab, setActiveTab] = useState('bazaar'); // 'bazaar' | 'story'
  const [targetLang, setTargetLang] = useState('tamil'); // 'tamil' | 'marathi' | 'bhojpuri'
  const [selectedGrade, setSelectedGrade] = useState(1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [selectedMotherTongue, setSelectedMotherTongue] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [shakenId, setShakenId] = useState(null);
  const [hintMessage, setHintMessage] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const selectedLangObj = LANGUAGES_MASTER.find((l) => l.id === targetLang) || LANGUAGES_MASTER[0];

  // Filter vocabulary by grade
  const currentVocabList = GAME_VOCABULARY.filter((v) => v.grade === selectedGrade) || GAME_VOCABULARY.slice(0, 4);

  // Scramble cards for game side B
  const [scrambledMotherTongue, setScrambledMotherTongue] = useState([]);

  useEffect(() => {
    resetGame();
  }, [selectedGrade, targetLang]);

  const resetGame = () => {
    setScore(0);
    setStreak(0);
    setMatchedIds([]);
    setSelectedEnglish(null);
    setSelectedMotherTongue(null);
    setShakenId(null);
    setHintMessage(null);
    setGameCompleted(false);

    // Shuffle mother tongue items
    const scrambled = [...currentVocabList].sort(() => Math.random() - 0.5);
    setScrambledMotherTongue(scrambled);
  };

  const getLangText = (item) => {
    switch (targetLang) {
      case 'marathi':
        return item.marathi;
      case 'bhojpuri':
        return item.bhojpuri;
      case 'tamil':
      default:
        return item.tamil;
    }
  };

  const handleSelectEnglish = (item) => {
    if (matchedIds.includes(item.id)) return;
    setSelectedEnglish(item);

    if (selectedMotherTongue) {
      checkMatch(item, selectedMotherTongue);
    }
  };

  const handleSelectMotherTongue = (item) => {
    if (matchedIds.includes(item.id)) return;
    setSelectedMotherTongue(item);

    // Trigger TTS audio playback for mother tongue term
    const textToSpeak = getLangText(item);
    const langCode = targetLang === 'tamil' ? 'ta-IN' : targetLang === 'marathi' ? 'mr-IN' : 'hi-IN';

    playVernacularSpeech({
      text: textToSpeak,
      langCode: langCode,
      languageName: targetLang.toUpperCase(),
      rate: 1.0,
      onToast: onToast
    });

    if (selectedEnglish) {
      checkMatch(selectedEnglish, item);
    }
  };

  const checkMatch = (engItem, mtItem) => {
    if (engItem.id === mtItem.id) {
      // MATCH SUCCESS!
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setMatchedIds((prev) => [...prev, engItem.id]);
      setSelectedEnglish(null);
      setSelectedMotherTongue(null);
      setHintMessage(null);

      // Confetti burst for match
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });

      if (newScore === currentVocabList.length) {
        setGameCompleted(true);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      }
    } else {
      // INCORRECT MATCH - Shake animation & Hint
      setStreak(0);
      setShakenId(engItem.id);
      setHintMessage(`Hint: "${engItem.english}" in ${targetLang.toUpperCase()} is "${getLangText(engItem)}"`);
      setTimeout(() => {
        setShakenId(null);
        setSelectedEnglish(null);
        setSelectedMotherTongue(null);
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-3 border-b border-amber-200 pb-2">
        <button
          onClick={() => setActiveTab('bazaar')}
          className={`px-4 py-2 rounded-2xl font-extrabold text-xs transition-all flex items-center gap-2 ${
            activeTab === 'bazaar'
              ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Bhasha Bazaar 🛍️ (Market Game)</span>
        </button>

        <button
          onClick={() => setActiveTab('story')}
          className={`px-4 py-2 rounded-2xl font-extrabold text-xs transition-all flex items-center gap-2 ${
            activeTab === 'story'
              ? 'bg-teal-700 text-white shadow-md ring-2 ring-teal-300'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-teal-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Kadhai Time 📖 (Interactive Story)</span>
        </button>
      </div>

      {activeTab === 'story' ? (
        <StoryModeKadhaiTime languageObj={selectedLangObj} />
      ) : (
        <>
          {/* Mascot Header */}
      <MascotVaani
        state={gameCompleted ? 'celebrating' : streak > 2 ? 'explaining' : 'greeting'}
        customText={
          gameCompleted
            ? `Shabash! You matched all ${score}/${currentVocabList.length} items! Vaani is super proud of you 🌟`
            : streak > 1
            ? `Awesome! You are on a ${streak}-item streak! Keep matching market stall items! 🔥`
            : 'Welcome to Word Match Bazaar! Tap an English market item and pair it with its mother-tongue word!'
        }
      />

      {/* Market Stall Header & Score Dashboard */}
      <div className="bg-[#FFFBF5] p-5 rounded-3xl border-2 border-amber-400 shadow-sm space-y-4">
        {/* Game Title Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl shadow-md">
              🧺
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
                Module 5: Interactive Learning Game
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>Word Match Bazaar (संदे बाजार)</span>
                <span className="bg-amber-100 text-amber-900 text-xs px-2 py-0.5 rounded-full border border-amber-300 font-mono">
                  Grade {selectedGrade} Set
                </span>
              </h2>
            </div>
          </div>

          {/* Score & Streak Counters */}
          <div className="flex items-center gap-3 font-bold text-xs">
            <div className="bg-teal-50 border border-teal-300 text-teal-900 px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm">
              <Trophy className="w-4 h-4 text-teal-700" />
              <span>Score: {score} / {currentVocabList.length}</span>
            </div>

            <div className="bg-amber-100 border border-amber-400 text-amber-900 px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm">
              <Flame className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>Streak: {streak} 🔥</span>
            </div>

            <button
              onClick={resetGame}
              className="p-2 rounded-xl bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 transition-colors"
              title="Reset Game"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Toggles: Target Language & Grade Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Target Language Toggle */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <span>Market Language:</span>
            {['tamil', 'marathi', 'bhojpuri'].map((lang) => (
              <button
                key={lang}
                onClick={() => setTargetLang(lang)}
                className={`px-3 py-1 rounded-xl capitalize transition-all ${
                  targetLang === lang
                    ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-300'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-teal-50'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Grade Level Toggle */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <span>Difficulty Level:</span>
            {[1, 2, 3].map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`px-3 py-1 rounded-xl transition-all ${
                  selectedGrade === g
                    ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-300'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
                }`}
              >
                Grade {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Marketplace Stall Scene (CSS/SVG Graphic) */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-4 rounded-3xl border-2 border-amber-400 shadow-md relative overflow-hidden flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/40 flex items-center justify-center text-2xl shadow-inner">
            🏪
          </div>
          <div>
            <h3 className="font-extrabold text-base text-white flex items-center gap-1.5">
              <span>Selvi Paatti's Village Haat Stall</span>
              <ShoppingBag className="w-4 h-4 text-amber-200" />
            </h3>
            <p className="text-xs text-amber-100">
              Match the English market item cards on the left with the mother-tongue fruits & goods on the right!
            </p>
          </div>
        </div>

        <span className="hidden sm:inline bg-amber-950/60 border border-amber-300/40 text-amber-200 text-xs px-3 py-1 rounded-full font-mono">
          Interactive Tap & Match Mode
        </span>
      </div>

      {/* Hint Message Toast */}
      {hintMessage && (
        <div className="bg-amber-100 border border-amber-400 p-3.5 rounded-2xl text-xs font-bold text-amber-950 flex items-center gap-2 animate-bounce shadow-sm">
          <HelpCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>{hintMessage}</span>
        </div>
      )}

      {/* MAIN GAME BOARD: 2 COLUMNS (Left: English, Right: Mother Tongue) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN: English Market Items */}
        <div className="bg-white p-5 rounded-3xl border border-teal-200 shadow-sm space-y-3">
          <h4 className="font-extrabold text-xs text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4 text-teal-700" /> 1. English Market Items
          </h4>

          <div className="space-y-2.5">
            {currentVocabList.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedEnglish?.id === item.id;
              const isShaken = shakenId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectEnglish(item)}
                  disabled={isMatched}
                  className={`w-full p-4 rounded-2xl border text-left font-bold text-sm transition-all duration-200 flex items-center justify-between ${
                    isMatched
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300 opacity-60 cursor-not-allowed'
                      : isSelected
                      ? 'bg-teal-700 text-white border-teal-800 shadow-md ring-2 ring-teal-300 transform scale-[1.02]'
                      : isShaken
                      ? 'bg-red-100 text-red-900 border-red-400 animate-shake'
                      : 'bg-[#FFFBF5] text-slate-800 border-amber-200 hover:bg-amber-50 hover:border-amber-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span>{item.english}</span>
                  </span>

                  {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Mother-Tongue Cards with Speaker Trigger */}
        <div className="bg-white p-5 rounded-3xl border border-amber-200 shadow-sm space-y-3">
          <h4 className="font-extrabold text-xs text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" /> 2. Mother-Tongue Cards ({targetLang.toUpperCase()})
          </h4>

          <div className="space-y-2.5">
            {scrambledMotherTongue.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedMotherTongue?.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectMotherTongue(item)}
                  disabled={isMatched}
                  className={`w-full p-4 rounded-2xl border text-left font-bold text-sm transition-all duration-200 flex items-center justify-between ${
                    isMatched
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300 opacity-60 cursor-not-allowed'
                      : isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md ring-2 ring-amber-300 transform scale-[1.02]'
                      : 'bg-[#FFFBF5] text-slate-900 border-amber-200 hover:bg-amber-50 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                    <span className="font-serif text-base font-bold">{getLangText(item)}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-amber-600 hover:text-amber-800" />
                    {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* GAME COMPLETED CELEBRATION SUMMARY */}
      {gameCompleted && (
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-6 rounded-3xl shadow-xl text-center space-y-4 animate-bounce border-2 border-emerald-400">
          <div className="w-16 h-16 rounded-full bg-white text-emerald-800 flex items-center justify-center mx-auto text-3xl font-bold shadow-md">
            🌟
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">
              Outstanding! Round Completed!
            </h3>
            <p className="text-sm text-emerald-100 mt-1 font-serif">
              "You matched {score}/{currentVocabList.length} items! Vaani is super proud of you 🌟"
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={resetGame}
              className="px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-transform active:scale-95"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}
