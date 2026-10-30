import React, { useState } from 'react';
import { MASTER_LESSONS, LANGUAGES_MASTER, CULTURAL_REGIONS } from '../data/masterData';
import MascotVaani from './MascotVaani';
import HeroAudioPanel from './HeroAudioPanel';
import LanguageSelector from './LanguageSelector';
import TeachMeTeacherModal from './TeachMeTeacherModal';
import { BookOpen, Sparkles, ArrowRight, CheckCircle2, HelpCircle, Filter, GraduationCap, MapPin, Zap } from 'lucide-react';

export default function ModuleStudentCompanion({ grandmotherMode, onToast }) {
  const [selectedLessonId, setSelectedLessonId] = useState('m1');
  const [selectedLangId, setSelectedLangId] = useState('tamil');
  const [selectedDialectId, setSelectedDialectId] = useState('ta-std');
  const [selectedRegionId, setSelectedRegionId] = useState('tn');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [showTeachMeModal, setShowTeachMeModal] = useState(false);

  const currentLang = LANGUAGES_MASTER.find((l) => l.id === selectedLangId) || LANGUAGES_MASTER[0];
  const activeLesson = MASTER_LESSONS.find((l) => l.id === selectedLessonId) || MASTER_LESSONS[0];
  const currentRegion = CULTURAL_REGIONS.find((r) => r.id === selectedRegionId) || CULTURAL_REGIONS[0];

  // Dynamic literal & adapted content for active lesson
  const literalText = activeLesson.literalTranslations?.[selectedLangId] || 
    activeLesson.literalTranslations?.['tamil'] || 
    `[Literal NMT Baseline in ${currentLang.name}]`;

  const adaptedText = activeLesson.vidyaVaaniAdaptations?.[selectedLangId] || 
    activeLesson.vidyaVaaniAdaptations?.['tamil'] || 
    `[Vidya Vaani Adaptation in ${currentLang.name}]: ${activeLesson.englishText}`;

  const filteredLessons = MASTER_LESSONS.filter((l) => {
    const matchGrade = gradeFilter === 'all' || l.grade === Number(gradeFilter);
    const matchSubject = subjectFilter === 'all' || l.subject === subjectFilter;
    return matchGrade && matchSubject;
  });

  return (
    <div className="space-y-6">
      {/* Mascot Header Banner */}
      <MascotVaani
        state="greeting"
        customText={
          currentLang.tier === 'expansion'
            ? `${currentLang.name} [Phase 2 Roadmap]: Bhashini Indic NMT pipeline connected! Content review in progress.`
            : `Selected lesson: ${activeLesson.title} in ${currentLang.name}. Compare Literal vs. Vidya Vaani Adaptation below!`
        }
      />

      {/* SECTION 1: 22 EIGHTH SCHEDULE LANGUAGE SELECTOR & REGIONAL CONTEXT ENGINE */}
      <div className="bg-[#FFFBF5] p-5 rounded-3xl border border-teal-200/80 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                Local Context & Regional Engine
              </h3>
              <p className="text-xs text-slate-500">
                Adapts learning examples according to your state's agricultural & cultural motifs.
              </p>
            </div>
          </div>

          {/* Regional Selector Dropdown */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-700" />
            <select
              value={selectedRegionId}
              onChange={(e) => setSelectedRegionId(e.target.value)}
              className="bg-white border border-teal-300 font-bold text-xs rounded-xl px-3 py-1.5 text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {CULTURAL_REGIONS.map((r) => (
                <option key={r.id} value={r.id}>
                  Region: {r.name} ({r.fruit})
                </option>
              ))}
            </select>
          </div>
        </div>

        <LanguageSelector
          selectedLangId={selectedLangId}
          setSelectedLangId={setSelectedLangId}
          selectedDialectId={selectedDialectId}
          setSelectedDialectId={setSelectedDialectId}
          onNotifySchool={(langName) => onToast && onToast(`🔔 Notified local school cluster for ${langName} Phase 2 content rollout!`)}
        />
      </div>

      {/* SECTION 2: LESSON CONTENT LIBRARY GRID (15 Data-Driven Lessons) */}
      <div className="bg-[#FFFBF5] p-5 rounded-3xl border border-teal-200/80 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-0.5">
              NEP 2020 Mother-Tongue Primary Content Library
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>Primary Content Library</span>
              <span className="bg-teal-100 text-teal-900 text-xs px-2.5 py-0.5 rounded-full border border-teal-300 font-mono">
                15 Master Lessons
              </span>
            </h2>
          </div>

          {/* Filter Controls (Grade & Subject) */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="text-slate-500 flex items-center gap-1 font-bold">
              <Filter className="w-3.5 h-3.5 text-teal-700" /> Filter:
            </span>

            {/* Grade Filter */}
            <div className="flex items-center gap-1">
              {['all', '1', '2', '3', '4', '5'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGradeFilter(g)}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    gradeFilter === g ? 'bg-amber-600 text-white font-bold' : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {g === 'all' ? 'All' : `Gr ${g}`}
                </button>
              ))}
            </div>

            {/* Subject Filter */}
            <div className="flex items-center gap-1">
              {['all', 'math', 'evs', 'sci', 'lang'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSubjectFilter(s)}
                  className={`px-2.5 py-1 rounded-lg uppercase font-mono transition-colors ${
                    subjectFilter === s ? 'bg-teal-700 text-white font-bold' : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Lessons Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredLessons.map((les) => {
            const isSelected = les.id === activeLesson.id;
            return (
              <button
                key={les.id}
                onClick={() => setSelectedLessonId(les.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-teal-700 to-teal-800 text-white border-teal-900 shadow-md ring-2 ring-teal-300'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-teal-400 hover:bg-teal-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded uppercase ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    Grade {les.grade} • {les.subjectName || les.subject.toUpperCase()}
                  </span>
                  <BookOpen className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-teal-700'}`} />
                </div>
                <h3 className={`font-extrabold text-sm leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {les.title}
                </h3>
                <p className={`text-xs line-clamp-2 mt-1 italic ${isSelected ? 'text-teal-100' : 'text-slate-500'}`}>
                  "{les.englishText}"
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: ORIGINAL TEXTBOOK LESSON CARD & ✨ TEACH ME TRIGGER */}
      <div className="bg-slate-900 text-white p-5 rounded-3xl border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/40">
              Grade {activeLesson.grade} • {activeLesson.subjectName || activeLesson.subject.toUpperCase()}
            </span>
            <span className="text-xs text-slate-400 font-mono">{activeLesson.title}</span>
          </div>
          <p className="text-base sm:text-lg font-serif italic text-slate-100 leading-relaxed">
            "{activeLesson.englishText}"
          </p>
        </div>

        <button
          onClick={() => setShowTeachMeModal(true)}
          className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg transition-transform active:scale-95 flex items-center gap-2"
        >
          <GraduationCap className="w-4 h-4 text-slate-950" />
          <span>✨ "Teach Me" (AI Teacher)</span>
        </button>
      </div>

      {/* HERO FEATURE — SIDE-BY-SIDE SPLIT SCREEN COMPARISON */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-teal-200 pb-2">
          <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <span>Translation is Not Enough</span>
            <span className="text-xs bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300 font-mono">
              Hero Pedagogical Comparison
            </span>
          </h2>
          <span className="text-xs font-bold text-teal-800">
            Selected Language: <strong className="text-slate-900 font-extrabold">{currentLang.native} ({currentLang.name})</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* LEFT CARD: Literal Translation */}
          <div className="bg-slate-100/90 border-2 border-slate-300 p-5 rounded-3xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                <h3 className="font-extrabold text-slate-700 text-sm">
                  Literal Machine Translation
                </h3>
              </div>
              <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">
                Direct Linguistic Conversion
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-slate-800 font-serif leading-relaxed text-sm min-h-[90px]">
              "{literalText}"
            </div>

            <div className="bg-amber-50/80 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 space-y-1">
              <span className="font-bold flex items-center gap-1 text-amber-800">
                <HelpCircle className="w-3.5 h-3.5" /> Literal Translation Limit:
              </span>
              <p className="text-slate-600 leading-snug">
                Literal translation replaces words but preserves unfamiliar foreign motifs (like apple/ball) which primary village children cannot relate to.
              </p>
            </div>
          </div>

          {/* RIGHT CARD: Vidya Vaani Adaptation */}
          <div className="bg-emerald-50/90 border-2 border-emerald-600 p-5 rounded-3xl space-y-4 shadow-md">
            <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></span>
                <h3 className="font-extrabold text-emerald-950 text-sm flex items-center gap-1.5">
                  <span>Vidya Vaani Pedagogical Adaptation</span>
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </h3>
              </div>
              <span className="bg-emerald-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm font-mono">
                BCP-47: {currentLang.code}
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-300 shadow-sm text-slate-900 font-serif text-base sm:text-lg leading-relaxed font-bold">
              <span className="text-amber-700 font-bold text-xs block mb-1 font-sans">
                Culturally Adapted Script ({currentLang.name}):
              </span>
              "{adaptedText}"
            </div>

            {/* AUDIO CONTROL PANEL FOR ADAPTED TEXT */}
            <HeroAudioPanel
              text={adaptedText}
              langCode={currentLang.code}
              languageName={currentLang.name}
              lessonId={activeLesson.id}
            />
          </div>
        </div>

        {/* WHY VIDYA VAANI CHANGED IT (AI REASONING BREAKDOWN) */}
        <div className="bg-white p-5 rounded-3xl border-2 border-teal-200 shadow-sm space-y-3">
          <h4 className="font-extrabold text-xs text-teal-900 uppercase tracking-wider flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Why Vidya Vaani Changed It (AI Pedagogical Rationale)</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {activeLesson.adaptationsReasoning ? (
              activeLesson.adaptationsReasoning.map((r, idx) => (
                <div key={idx} className="bg-[#FFFBF5] border border-amber-200 p-3 rounded-2xl space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{r.change}</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-snug">
                    <strong>Reason:</strong> {r.reason}
                  </p>
                </div>
              ))
            ) : (
              <>
                <div className="bg-[#FFFBF5] border border-amber-200 p-3 rounded-2xl space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Apple → Cart Mango</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Reason: Local fruit familiarity</p>
                </div>
                <div className="bg-[#FFFBF5] border border-amber-200 p-3 rounded-2xl space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Train → Village Bus</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Reason: Contextual familiarity</p>
                </div>
                <div className="bg-[#FFFBF5] border border-amber-200 p-3 rounded-2xl space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Currency → ₹10</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Reason: Age-appropriate local context</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* TEACH ME VIRTUAL PRIMARY TEACHER MODAL */}
      {showTeachMeModal && (
        <TeachMeTeacherModal
          lesson={activeLesson}
          languageObj={currentLang}
          onClose={() => setShowTeachMeModal(false)}
        />
      )}
    </div>
  );
}

