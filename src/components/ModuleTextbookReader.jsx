import React, { useState } from 'react';
import { TEXTBOOKS, LANGUAGES, VOICE_PROFILES } from '../data/mockData';
import { translateWithAI } from '../utils/aiOrchestrator';
import MascotVaani from './MascotVaani';
import AudioPlayerWidget from './AudioPlayerWidget';
import { BookOpen, Sparkles, CheckCircle2, User, Globe, RefreshCw, Cpu, Zap } from 'lucide-react';

export default function ModuleTextbookReader() {
  const [selectedTbId, setSelectedTbId] = useState('tb1');
  const [targetLangId, setTargetLangId] = useState('tn');
  const [selectedVoice, setSelectedVoice] = useState('vaani');

  // Custom User Input Text State
  const [customInputText, setCustomInputText] = useState(
    'A shopkeeper has 15 red balls and buys 10 blue balls. How many total balls does he have?'
  );
  const [customTranscreation, setCustomTranscreation] = useState(null);
  const [isTranscreatingCustom, setIsTranscreatingCustom] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(0);

  const currentTb = TEXTBOOKS.find((t) => t.id === selectedTbId) || TEXTBOOKS[0];
  const currentLangObj = LANGUAGES.find((l) => l.id === targetLangId) || LANGUAGES[0];

  // AI Translation result for selected textbook chapter
  const textbookTransResult = translateWithAI(currentTb.englishText, targetLangId);

  const handleTranscreateCustomText = () => {
    if (!customInputText.trim()) return;

    setIsTranscreatingCustom(true);
    setPipelineStep(1);

    setTimeout(() => setPipelineStep(2), 300);
    setTimeout(() => setPipelineStep(3), 600);
    setTimeout(() => {
      setIsTranscreatingCustom(false);
      setPipelineStep(4);

      const res = translateWithAI(customInputText, targetLangId);
      setCustomTranscreation({
        original: customInputText,
        transcreated: res.translatedText,
        language: currentLangObj.name,
        langCode: currentLangObj.code
      });
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Mascot Header */}
      <MascotVaani
        state={isTranscreatingCustom ? 'thinking' : 'greeting'}
        customText={
          isTranscreatingCustom
            ? `Step ${pipelineStep}/4: Gemini NMT model processing into ${currentLangObj?.name}...`
            : `Selected language: ${currentLangObj.name} [ID: ${currentLangObj.code}]. Type any text or select a textbook chapter!`
        }
      />

      {/* Top Controls: Voice Selector & Language Bar */}
      <div className="bg-white p-5 rounded-3xl border border-amber-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-0.5">
              Gemini AI Indic Translation & Live Speech Engine
            </span>
            <h2 className="text-xl font-extrabold text-slate-900">
              Interactive Textbook Reader & Live AI Speech Console
            </h2>
          </div>

          {/* Speaker Voice Engine Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-amber-700" /> Speaker Voice:
            </span>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="bg-amber-50 border border-amber-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              {VOICE_PROFILES.map((vp) => (
                <option key={vp.id} value={vp.id}>
                  {vp.icon} {vp.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Target Language Selection Bar */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-600 mr-2 flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-emerald-700" /> Select Target Language:
          </span>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              onClick={() => {
                setTargetLangId(lang.id);
                setCustomTranscreation(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                targetLangId === lang.id
                  ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-300'
                  : 'bg-slate-100 hover:bg-amber-50 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              <span className="text-[10px] font-mono opacity-80 bg-black/10 px-1 rounded">
                {lang.code}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: UNIVERSAL DYNAMIC TRANSLATOR & SPEECH ENGINE */}
      <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-emerald-500/10 border-2 border-amber-300 p-6 rounded-3xl space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-600" /> Live Gemini AI Indic Translation & Speech
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Translate & Speak ANY Custom Text in {currentLangObj.name}
            </h3>
          </div>
          <span className="bg-amber-200 text-amber-950 text-xs font-bold px-3 py-1 rounded-full border border-amber-300 font-mono">
            Target Code: {currentLangObj.code}
          </span>
        </div>

        {/* Text Area */}
        <div className="space-y-3">
          <textarea
            rows={3}
            value={customInputText}
            onChange={(e) => {
              setCustomInputText(e.target.value);
              setCustomTranscreation(null);
            }}
            placeholder="Type or paste any English or Hindi textbook problem here..."
            className="w-full bg-white border border-amber-300 rounded-2xl p-4 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-inner"
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500 flex items-center gap-1 font-mono">
              <Cpu className="w-3.5 h-3.5 text-amber-700" /> Model: IndicTrans2 NMT + IndicTTS Engine
            </div>

            <button
              onClick={handleTranscreateCustomText}
              disabled={isTranscreatingCustom}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-700 hover:to-emerald-800 text-white font-bold text-xs shadow-lg transition-transform active:scale-95 disabled:opacity-50"
            >
              <Sparkles className={`w-4 h-4 ${isTranscreatingCustom ? 'animate-spin' : ''}`} />
              <span>{isTranscreatingCustom ? 'Running AI Translation...' : `🚀 AI Translate Text (${currentLangObj.name})`}</span>
            </button>
          </div>
        </div>

        {/* Custom Transcreation Output Box */}
        {customTranscreation && (
          <div className="bg-white p-5 rounded-2xl border border-emerald-300 space-y-4 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                AI Translated Script ({customTranscreation.language} — Code: {customTranscreation.langCode})
              </span>
            </div>

            <p className="text-xl font-serif text-slate-900 leading-relaxed font-bold">
              "{customTranscreation.transcreated}"
            </p>

            {/* Audio Player Widget */}
            <AudioPlayerWidget
              text={customTranscreation.transcreated}
              langCode={customTranscreation.langCode}
              languageName={customTranscreation.language}
              voiceProfile={selectedVoice}
            />
          </div>
        )}
      </div>

      {/* SECTION 2: NCERT TEXTBOOK LIBRARY */}
      <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700" />
            2. Or Select Sample NCERT Textbook Chapter:
          </h3>
          <span className="text-xs text-slate-500 font-mono">3 Sample Chapters</span>
        </div>

        {/* Textbook Cards Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TEXTBOOKS.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setSelectedTbId(tb.id)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedTbId === tb.id
                  ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-300/60'
                  : 'bg-slate-50 border-slate-200 hover:border-amber-300'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 font-mono block">
                {tb.chapter} • Grade {tb.grade} {tb.subject.toUpperCase()}
              </span>
              <h4 className="font-extrabold text-sm text-slate-900 mt-1 line-clamp-2">
                {tb.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Selected Textbook Reading Card */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-4">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">
              {currentTb.chapter} Original Textbook Text
            </span>
            <h3 className="text-base font-extrabold text-white mt-0.5">
              {currentTb.title}
            </h3>
          </div>

          <p className="text-sm font-serif italic text-slate-200 leading-relaxed">
            "{currentTb.englishText}"
          </p>

          {/* Transcreated Textbook Output in Native Script */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-emerald-500/60 space-y-3">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono font-bold">
              <span>Translated & Transcreated ({currentLangObj.name} — ID: {currentLangObj.code}):</span>
              <span className="bg-emerald-900 text-emerald-200 border border-emerald-500/40 px-2.5 py-0.5 rounded text-[10px]">
                Native Script Active
              </span>
            </div>
            <p className="text-lg font-serif text-emerald-200 leading-relaxed font-bold">
              "{textbookTransResult.translatedText}"
            </p>

            {/* Audio Player Widget */}
            <AudioPlayerWidget
              text={textbookTransResult.translatedText}
              langCode={currentLangObj.code}
              languageName={currentLangObj.name}
              voiceProfile={selectedVoice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
