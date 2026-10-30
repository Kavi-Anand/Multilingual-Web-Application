import React, { useState, useEffect } from 'react';
import { LIVE_CLASS_TRANSCRIPT_DEMO } from '../data/mockData';
import MascotVaani from './MascotVaani';
import VoiceControlPanel from './VoiceControlPanel';
import { Mic, MicOff, Volume2, Sparkles, Radio, Zap, AlertCircle, Play, Pause, MessageSquare } from 'lucide-react';

export default function ModuleTeacherCopilot({ isOffline, onToast }) {
  const [isLiveActive, setIsLiveActive] = useState(true);
  const [streamIndex, setStreamIndex] = useState(2);
  const [targetClassLanguage, setTargetClassLanguage] = useState('Tamil (தமிழ்)');

  useEffect(() => {
    let interval;
    if (isLiveActive) {
      interval = setInterval(() => {
        setStreamIndex((prev) => (prev < LIVE_CLASS_TRANSCRIPT_DEMO.length ? prev + 1 : prev));
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isLiveActive]);

  const toggleLive = () => {
    setIsLiveActive(!isLiveActive);
    if (!isLiveActive) {
      setStreamIndex(1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mascot Header */}
      <MascotVaani
        state={isLiveActive ? 'explaining' : 'greeting'}
        customText={
          isLiveActive
            ? 'Teacher Co-Pilot Active in Deep Indigo Live Mode! Listening to classroom speech...'
            : 'Standby mode. Turn on Live Class mic when you begin teaching in the classroom.'
        }
      />

      {/* Main Classroom Simulator Interface (Deep Indigo Theme #3730A3) */}
      <div className="bg-[#FFFBF5] p-6 rounded-3xl border-2 border-indigo-300 shadow-sm space-y-6">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-indigo-800 text-white font-bold text-xs px-3 py-0.5 rounded-full shadow-sm">
                Module 3: Live Classroom Assistant
              </span>
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3 text-emerald-700" /> 2G Edge Mode Active (&lt;110ms)
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-indigo-950 mt-1">
              Teacher Co-Pilot (Real-Time Live-Classroom Mode)
            </h2>
            <p className="text-xs text-slate-600">
              Assists non-native teachers posted to vernacular primary schools under NEP 2020. Phone stays on desk, giving live translation + local explanation chips.
            </p>
          </div>

          <button
            onClick={toggleLive}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm shadow-md transition-all ${
              isLiveActive
                ? 'bg-red-600 hover:bg-red-500 text-white animate-pulse'
                : 'bg-indigo-700 hover:bg-indigo-800 text-white'
            }`}
          >
            {isLiveActive ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            <span>{isLiveActive ? 'Pause Live Stream' : 'Start Live Class Feed'}</span>
          </button>
        </div>

        {/* Classroom Device Simulation Box (Deep Indigo Phone / Tablet Container) */}
        <div className="bg-indigo-950 text-white p-5 rounded-3xl border-4 border-indigo-900 shadow-xl space-y-4 max-w-4xl mx-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-indigo-300 font-mono border-b border-indigo-900 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-white font-bold">LIVE MIC INPUT (Hindi / English)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> Low Latency Stream
              </span>
              <span>Class Language: {targetClassLanguage}</span>
            </div>
          </div>

          {/* Real-time Streaming Transcript Feed */}
          <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
            {LIVE_CLASS_TRANSCRIPT_DEMO.slice(0, streamIndex).map((item) => (
              <div
                key={item.id}
                className="bg-indigo-900/80 border border-indigo-700/80 p-4 rounded-2xl space-y-3 shadow-sm hover:border-amber-400/50 transition-colors"
              >
                {/* Teacher Spoke */}
                <div>
                  <span className="text-[10px] text-indigo-300 font-mono block mb-0.5">
                    Teacher Spoke ({item.timestamp}):
                  </span>
                  <p className="text-sm font-medium text-white font-sans">
                    "{item.hindiOriginal}"
                  </p>
                  <p className="text-xs text-indigo-200/70 italic">
                    English: "{item.teacherOriginal}"
                  </p>
                </div>

                {/* 1. Live Mother Tongue Translation Stream Line */}
                <div className="bg-slate-950 p-3 rounded-xl border border-emerald-500/40 text-emerald-300 font-serif text-sm leading-relaxed">
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold mb-0.5">
                    1. Live Mother Tongue Translation Stream (Tamil):
                  </span>
                  "{item.motherTongueTrans}"
                </div>

                {/* Voice Control Panel for Item */}
                <VoiceControlPanel
                  text={item.motherTongueTrans}
                  langCode="ta-IN"
                  languageName="Tamil"
                  onToast={onToast}
                />

                {/* 2. AI Pedagogical Suggestion Chip */}
                <div className="bg-amber-500/10 border border-amber-400/40 p-3 rounded-xl text-amber-200 text-xs flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300 block mb-0.5">
                      2. Real-Time Local Pedagogy Suggestion Chip for Teacher:
                    </span>
                    <p className="leading-relaxed font-sans">{item.aiPedagogySuggestion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="bg-indigo-900 p-3 rounded-xl border border-indigo-800 flex items-center justify-between text-xs text-indigo-200 font-mono">
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Streaming low-latency inference packets...</span>
            </span>
            <span className="text-emerald-400 font-bold">
              0 Packets Dropped (2G Edge Buffer Active)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
