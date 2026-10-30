import React from 'react';
import { BookOpen, Mic, Gamepad2, GraduationCap, Flame, Trophy, Award, Sparkles, ArrowRight, Heart, Users, Activity } from 'lucide-react';

export default function HeroDashboardHome({
  selectedLanguageObj,
  activeLesson,
  onNavigate,
  onOpenJudgeDemo
}) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Welcome Banner (Deep Indigo & Teal Visual Identity) */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 text-white p-6 sm:p-8 rounded-3xl border border-indigo-700/60 shadow-xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              BhashaSetu AI • Vidya Vaani
            </span>
            <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full font-mono">
              PS ID: 26042
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight font-sans">
            Learning begins in the language a child thinks in.
          </h1>

          <p className="text-sm sm:text-base text-indigo-200 leading-relaxed font-serif">
            An AI-powered mother-tongue learning companion for India's multilingual classrooms. Transforming textbook content into familiar village culture, voice, and interactive games.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenJudgeDemo}
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg transition-transform active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>🚀 Launch 2-Min Judge Demo</span>
            </button>

            <button
              onClick={() => onNavigate('upload')}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>📤 Bring Your Own Lesson</span>
            </button>

            <button
              onClick={() => onNavigate('learn')}
              className="px-5 py-3 rounded-2xl bg-teal-700 hover:bg-teal-600 text-white font-extrabold text-xs shadow transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore 15 Lessons</span>
            </button>
          </div>
        </div>

        {/* HERO PRODUCT LOOP DIAGRAM BANNER */}
        <div className="mt-6 pt-4 border-t border-indigo-800/80 text-xs font-mono">
          <span className="text-[10px] uppercase font-bold text-amber-300 block mb-2 font-mono">
            Vidya Vaani Complete Pedagogy Loop:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 text-indigo-100 font-bold overflow-x-auto pb-1">
            <span className="bg-indigo-900/90 px-2.5 py-1 rounded-xl border border-indigo-700">📄 UPLOAD</span>
            <span>→</span>
            <span className="bg-indigo-900/90 px-2.5 py-1 rounded-xl border border-indigo-700">🧠 UNDERSTAND</span>
            <span>→</span>
            <span className="bg-indigo-900/90 px-2.5 py-1 rounded-xl border border-indigo-700">🌐 TRANSLATE</span>
            <span>→</span>
            <span className="bg-indigo-900/90 px-2.5 py-1 rounded-xl border border-indigo-700">🌱 CULTURALLY ADAPT</span>
            <span>→</span>
            <span className="bg-indigo-900/90 px-2.5 py-1 rounded-xl border border-indigo-700">🔊 SPEAK</span>
            <span>→</span>
            <span className="bg-indigo-900/90 px-2.5 py-1 rounded-xl border border-indigo-700">🎮 PLAY</span>
            <span>→</span>
            <span className="bg-indigo-900/90 px-2.5 py-1 rounded-xl border border-indigo-700">🧠 ASSESS</span>
            <span>→</span>
            <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-xl">📈 PERSONALIZE</span>
          </div>
        </div>
      </div>

      {/* LEARNER STATS DASHBOARD CARD (Aarav, 480 XP, 6 Days Streak) */}
      <div className="bg-white p-5 rounded-3xl border border-teal-200 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3 bg-[#FFFBF5] rounded-2xl border border-amber-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg">
            🧒
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Current Learner</span>
            <span className="text-sm font-extrabold text-slate-900 block">Aarav (Gr 2)</span>
            <span className="text-[11px] text-teal-800 font-semibold">{selectedLanguageObj.name}</span>
          </div>
        </div>

        <div className="p-3 bg-teal-50/80 rounded-2xl border border-teal-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-lg">
            <Flame className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Learning Streak</span>
            <span className="text-sm font-extrabold text-slate-900 block">6 Days 🔥</span>
            <span className="text-[11px] text-emerald-800 font-semibold">Active Daily</span>
          </div>
        </div>

        <div className="p-3 bg-indigo-50/80 rounded-2xl border border-indigo-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-800 text-white flex items-center justify-center font-bold text-lg">
            <Trophy className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Earned XP</span>
            <span className="text-sm font-extrabold text-slate-900 block">480 XP</span>
            <span className="text-[11px] text-indigo-800 font-semibold">Level 3 Master</span>
          </div>
        </div>

        <div className="p-3 bg-emerald-50/80 rounded-2xl border border-emerald-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg">
            <Activity className="w-5 h-5 text-emerald-200" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Overall Progress</span>
            <span className="text-sm font-extrabold text-slate-900 block">72%</span>
            <span className="text-[11px] text-emerald-800 font-semibold">12 / 15 Lessons</span>
          </div>
        </div>
      </div>

      {/* 4 PRIMARY ACTION TILES (LEARN, SPEAK, PLAY, TEACH) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* LEARN TILE */}
        <button
          onClick={() => onNavigate('learn')}
          className="bg-white p-5 rounded-3xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-md text-left transition-all duration-200 space-y-3 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center group-hover:scale-110 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 font-mono block">
              15 Data-Driven Lessons
            </span>
            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-teal-800 flex items-center justify-between">
              <span>LEARN</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Explore split-screen transcreation comparisons & AI reasoning breakdown.
            </p>
          </div>
        </button>

        {/* SPEAK TILE */}
        <button
          onClick={() => onNavigate('speak')}
          className="bg-white p-5 rounded-3xl border-2 border-amber-200 hover:border-amber-500 hover:shadow-md text-left transition-all duration-200 space-y-3 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mic className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 font-mono block">
              Voice Challenge
            </span>
            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-800 flex items-center justify-between">
              <span>SPEAK</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Practice pronunciation in {selectedLanguageObj.name} with AI voice feedback.
            </p>
          </div>
        </button>

        {/* PLAY TILE */}
        <button
          onClick={() => onNavigate('play')}
          className="bg-white p-5 rounded-3xl border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-md text-left transition-all duration-200 space-y-3 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 font-mono block">
              Bhasha Bazaar 🛍️
            </span>
            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-800 flex items-center justify-between">
              <span>PLAY</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Match market items, hear audio words, and earn streak rewards.
            </p>
          </div>
        </button>

        {/* TEACH TILE */}
        <button
          onClick={() => onNavigate('teach')}
          className="bg-white p-5 rounded-3xl border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-md text-left transition-all duration-200 space-y-3 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center group-hover:scale-110 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-800 font-mono block">
              Teacher Co-Pilot
            </span>
            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-800 flex items-center justify-between">
              <span>TEACH</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Generate localized lesson plans for mixed-language classrooms.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
