import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SidebarNav from './components/SidebarNav';
import HeroDashboardHome from './components/HeroDashboardHome';
import UploadLessonSection from './components/UploadLessonSection';
import ModuleStudentCompanion from './components/ModuleStudentCompanion';
import VoiceQuizSpeakAndLearn from './components/VoiceQuizSpeakAndLearn';
import ModuleDialectVoice from './components/ModuleDialectVoice';
import TeacherCopilotDashboard from './components/TeacherCopilotDashboard';
import ModuleInsightsDashboard from './components/ModuleInsightsDashboard';
import ModulePlayAndLearn from './components/ModulePlayAndLearn';
import JudgeDemoModal from './components/JudgeDemoModal';
import GeneratedGameModal from './components/GeneratedGameModal';
import AudioDiagnosticModal from './components/AudioDiagnosticModal';
import { initTTSService } from './services/ttsService';
import { LANGUAGES_MASTER, MASTER_LESSONS } from './data/masterData';
import { Award, Sparkles, FileText, CheckCircle2, Play, Zap } from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState('home');
  const [isOffline, setIsOffline] = useState(false);
  const [grandmotherMode, setGrandmotherMode] = useState(true);
  const [accessibilityMode, setAccessibilityMode] = useState(false);
  const [childMode, setChildMode] = useState(false);
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [showJudgeDemoModal, setShowJudgeDemoModal] = useState(false);
  const [showAudioDiagnosticsModal, setShowAudioDiagnosticsModal] = useState(false);
  const [showGeneratedGameModal, setShowGeneratedGameModal] = useState(false);
  const [generatedGameLesson, setGeneratedGameLesson] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const selectedLangObj = LANGUAGES_MASTER[0]; // Tamil by default
  const activeLesson = MASTER_LESSONS[0];

  useEffect(() => {
    initTTSService();
  }, []);

  const handleToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleTurnLessonIntoGame = (processedLesson) => {
    setGeneratedGameLesson(processedLesson);
    setShowGeneratedGameModal(true);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      accessibilityMode ? 'bg-teal-50/90 text-black contrast-125' : 'bg-[#FFFBF5] text-slate-800'
    }`}>
      {/* Navbar */}
      <Navbar
        isOffline={isOffline}
        setIsOffline={setIsOffline}
        grandmotherMode={grandmotherMode}
        setGrandmotherMode={setGrandmotherMode}
        accessibilityMode={accessibilityMode}
        setAccessibilityMode={setAccessibilityMode}
        childMode={childMode}
        setChildMode={setChildMode}
        onOpenAudioDiagnostics={() => setShowAudioDiagnosticsModal(true)}
        onToast={handleToast}
      />

      {/* Main Layout Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-2 sm:px-4 py-4 flex flex-col lg:flex-row gap-4">
        {/* Left Navigation Sidebar */}
        <SidebarNav
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          isOffline={isOffline}
        />

        {/* Right Module Content Area */}
        <main className="flex-1 min-w-0 space-y-4">
          {/* Top Flagship Banner */}
          <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-emerald-950 text-white border border-teal-700/60 p-4 rounded-3xl flex flex-wrap items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl shadow-md border border-amber-300">
                🪔
              </div>
              <div>
                <h2 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <span>VidyaVaani Vernacular Pedagogy Engine</span>
                  <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    NEP 2020 MTB-MLE Compliant
                  </span>
                </h2>
                <p className="text-xs text-teal-100/90">
                  Mother Tongue-Based Primary Education & Real-Time Classroom Co-Pilot for Grades 1–5
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveModule('upload')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow transition-colors"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>📤 Upload Lesson</span>
              </button>

              <button
                onClick={() => setShowJudgeDemoModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow transition-transform active:scale-95 animate-pulse"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>🚀 2-Min Judge Demo</span>
              </button>

              <button
                onClick={() => setShowPitchModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-extrabold shadow transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Summary</span>
              </button>
            </div>
          </div>

          {/* Module Routing */}
          {activeModule === 'home' && (
            <HeroDashboardHome
              selectedLanguageObj={selectedLangObj}
              activeLesson={activeLesson}
              onNavigate={(mod) => setActiveModule(mod)}
              onOpenJudgeDemo={() => setShowJudgeDemoModal(true)}
            />
          )}

          {activeModule === 'upload' && (
            <UploadLessonSection
              onNavigateToGame={handleTurnLessonIntoGame}
              onToast={handleToast}
            />
          )}

          {activeModule === 'student' && (
            <ModuleStudentCompanion
              grandmotherMode={grandmotherMode}
              onToast={handleToast}
            />
          )}

          {activeModule === 'speak' && (
            <div className="space-y-6">
              <VoiceQuizSpeakAndLearn
                languageObj={selectedLangObj}
                onToast={handleToast}
              />
              <ModuleDialectVoice isOffline={isOffline} />
            </div>
          )}

          {activeModule === 'teacher' && (
            <TeacherCopilotDashboard
              isOffline={isOffline}
              onToast={handleToast}
            />
          )}

          {activeModule === 'insights' && (
            <ModuleInsightsDashboard isOffline={isOffline} />
          )}

          {activeModule === 'game' && (
            <ModulePlayAndLearn onToast={handleToast} />
          )}
        </main>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900/95 text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/50 flex items-start gap-3 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-snug">{toastMessage}</p>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-6 px-4 mt-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-lg">🪔</span>
            <span className="font-bold text-white">VidyaVaani (विद्या वाणी)</span>
            <span>— AI-Powered Vernacular Pedagogy Platform</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>Govt. of India Bhashini (ULCA)</span>
            <span>•</span>
            <span>AI4Bharat IndicTrans2 & IndicWhisper</span>
            <span>•</span>
            <span>NEP 2020 MTB-MLE</span>
          </div>
        </div>
      </footer>

      {/* Executive Summary Modal */}
      {showPitchModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFBF5] max-w-2xl w-full rounded-3xl border-2 border-teal-500 shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto relative">
            <div className="flex items-center justify-between border-b border-teal-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🪔</span>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    VidyaVaani Executive Platform Overview
                  </h3>
                  <span className="text-xs text-teal-800 font-mono font-semibold">
                    NEP 2020 MTB-MLE Pedagogy Stack
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowPitchModal(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
              <blockquote className="bg-teal-50 border-l-4 border-teal-700 p-3 text-slate-900 font-serif italic text-sm rounded-r-xl">
                "We didn't build a translator for textbooks. We built a translator for the moment a child's eyes light up understanding something for the first time — in the words their grandmother uses."
              </blockquote>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-teal-900 flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1. Upload Any Learning Material:
                  </h4>
                  <p>
                    Teachers upload PDF, DOCX, or photos of textbook pages. Vidya Vaani extracts objectives, translates, culturally adapts, and builds an interactive game!
                  </p>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-teal-900 flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2. Honest 3-Level Audio State Machine:
                  </h4>
                  <p>
                    State machine (IDLE → GENERATING → READY → PLAYING → ERROR) ensuring "Playing" is shown only when actual sound starts outputting.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-teal-900 flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3. Children's Game Engine:
                  </h4>
                  <p>
                    6 game types (Grow Your Garden 🌱, Bhasha Bazaar 🛍️, Word Safari 🦁, Listen & Catch 🎧) with mascot Vaani encouraging feedback.
                  </p>
                </div>
              </div>

              <div className="text-right pt-2 border-t border-slate-200">
                <button
                  onClick={() => setShowPitchModal(false)}
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl text-xs shadow"
                >
                  Close Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2-Minute Judge Demo Modal */}
      {showJudgeDemoModal && (
        <JudgeDemoModal
          onClose={() => setShowJudgeDemoModal(false)}
          onNavigateModule={(mod) => setActiveModule(mod)}
        />
      )}

      {/* Generated Game Modal */}
      {showGeneratedGameModal && (
        <GeneratedGameModal
          lesson={generatedGameLesson}
          onClose={() => setShowGeneratedGameModal(false)}
          onRewardClaim={() => setShowGeneratedGameModal(false)}
        />
      )}

      {/* Audio Diagnostic Modal */}
      {showAudioDiagnosticsModal && (
        <AudioDiagnosticModal
          onClose={() => setShowAudioDiagnosticsModal(false)}
        />
      )}
    </div>
  );
}
