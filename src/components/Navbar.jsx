import React, { useState } from 'react';
import { Wifi, WifiOff, Heart, Eye, Award, Sparkles, Globe } from 'lucide-react';

export default function Navbar({
  isOffline,
  setIsOffline,
  grandmotherMode,
  setGrandmotherMode,
  accessibilityMode,
  setAccessibilityMode,
  childMode,
  setChildMode,
  onOpenAudioDiagnostics,
  onToast
}) {
  const toggleOffline = () => {
    const nextState = !isOffline;
    setIsOffline(nextState);
    if (onToast) {
      if (nextState) {
        onToast('📶 Offline Edge Mode ACTIVE: Core vocabulary & 14 lessons cached on-device with zero internet required!');
      } else {
        onToast('⚡ Cloud Sync Restored: Connected to Bhashini & AI4Bharat servers.');
      }
    }
  };

  const toggleChildMode = () => {
    const nextState = !childMode;
    if (setChildMode) setChildMode(nextState);
    if (onToast) {
      onToast(nextState ? '👧 Child Mode ACTIVE: Game-first visual view with large icons and mascot guidance!' : 'Standard Learning Stack Active.');
    }
  };

  const toggleGrandmother = () => {
    const nextState = !grandmotherMode;
    setGrandmotherMode(nextState);
    if (onToast) {
      if (nextState) {
        onToast('👵 Grandmother Mode ON: Lessons will integrate local folk proverbs & oral tradition!');
      } else {
        onToast('Standard Pedagogy Mode Active.');
      }
    }
  };

  const toggleAccessibility = () => {
    const nextState = !accessibilityMode;
    setAccessibilityMode(nextState);
    if (onToast) {
      if (nextState) {
        onToast('👁️ Accessibility Mode ON: High contrast and speech audio clarity enabled.');
      } else {
        onToast('Standard Display Mode.');
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFBF5]/95 backdrop-blur-md border-b border-teal-200/70 shadow-sm">
      {/* Top Govt. & Tech Crest Banner with Credibility Line */}
      <div className="bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950 text-teal-100 text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 shadow-inner">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="flex items-center gap-1.5 text-teal-100 font-semibold">
            <span>Powered by Bhashini (Govt. of India)</span>
            <span className="text-amber-400">•</span>
            <span className="text-amber-300 font-bold">8 languages fully live · 22 Eighth Schedule languages architecture-ready via Bhashini</span>
            <span className="text-amber-400">•</span>
            <span>On-Device Edge AI</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-teal-200 font-mono">
          <button
            onClick={onOpenAudioDiagnostics}
            className="hover:text-amber-300 transition-colors underline flex items-center gap-1"
          >
            <span>🛠️ Audio Diagnostics</span>
          </button>
          <span>•</span>
          <span className="flex items-center gap-1 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30 text-emerald-300">
            <Award className="w-3 h-3 text-amber-400" /> NEP 2020 MTB-MLE Framework
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-800 to-teal-900 flex items-center justify-center text-white shadow-md border border-teal-500/40">
            <span className="text-xl">🪔</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 font-sans">
                VidyaVaani <span className="text-teal-800 font-serif font-normal text-lg">(विद्या वाणी)</span>
              </h1>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                22 Schedule Languages Architecture
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              AI-Powered Mother Tongue Primary Education & Real-Time Classroom Co-Pilot
            </p>
          </div>
        </div>

        {/* Global Controls & Toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Child Mode Toggle */}
          <button
            onClick={toggleChildMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              childMode
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-md ring-2 ring-emerald-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50'
            }`}
            title="Switch between Child Visual Mode and Teacher Mode"
          >
            <span>👧 Child Mode: {childMode ? 'ON' : 'OFF'}</span>
          </button>

          {/* Grandmother Mode Toggle */}
          <button
            onClick={toggleGrandmother}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              grandmotherMode
                ? 'bg-amber-100 text-amber-900 border-amber-400 shadow-sm ring-2 ring-amber-300/50'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-amber-50 hover:text-amber-800'
            }`}
            title="Integrate local folklore, proverbs, and grandmother storytelling style"
          >
            <Heart className={`w-3.5 h-3.5 ${grandmotherMode ? 'fill-amber-600 text-amber-600' : ''}`} />
            <span className="hidden sm:inline">Grandmother Mode</span>
            {grandmotherMode && <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>}
          </button>

          {/* Accessibility Toggle */}
          <button
            onClick={toggleAccessibility}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              accessibilityMode
                ? 'bg-teal-100 text-teal-900 border-teal-400 shadow-sm ring-2 ring-teal-300/50'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-teal-50 hover:text-teal-800'
            }`}
            title="High contrast and speech audio clarity mode"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Accessibility Mode</span>
          </button>

          {/* Offline Mode Switch */}
          <button
            onClick={toggleOffline}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border shadow-sm transition-all ${
              isOffline
                ? 'bg-amber-600 text-white border-amber-700 shadow-amber-200'
                : 'bg-teal-700 text-white border-teal-800 shadow-teal-200'
            }`}
          >
            {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            <span>{isOffline ? 'Offline: ON (Edge AI)' : 'Cloud: Online'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
