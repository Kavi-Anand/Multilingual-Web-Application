import React, { useState, useEffect } from 'react';
import {
  speak,
  stopSpeech,
  pauseSpeech,
  resumeSpeech,
  subscribeTTS,
  testLanguageVoice,
  findNativeVoiceForLanguage
} from '../services/ttsService';
import { Play, Pause, Square, RotateCcw, Volume2, Smartphone, Cloud, AlertCircle, Radio, Sparkles } from 'lucide-react';

export default function HeroAudioPanel({ text, langCode = 'ta-IN', languageName = 'Tamil', lessonId = 'm1' }) {
  const [diag, setDiag] = useState({
    playbackStatus: 'IDLE',
    engineLabel: '🔊 Audio Standing By',
    audioLoaded: 'NO',
    selectedLanguage: languageName
  });
  const [speechRate, setSpeechRate] = useState(1.0);
  const [selectedPersona, setSelectedPersona] = useState('meera');

  const nativeVoice = findNativeVoiceForLanguage(langCode);

  useEffect(() => {
    const unsubscribe = subscribeTTS((newState) => {
      setDiag(newState);
    });
    return () => {
      unsubscribe();
      stopSpeech();
    };
  }, [text, langCode]);

  const handlePlayToggle = () => {
    if (diag.playbackStatus === 'PLAYING') {
      pauseSpeech();
    } else if (diag.playbackStatus === 'PAUSED') {
      resumeSpeech();
    } else {
      if (!text) return;
      speak({
        text,
        langCode,
        languageName,
        lessonId,
        rate: speechRate,
        personaId: selectedPersona
      });
    }
  };

  const handleStop = () => {
    stopSpeech();
  };

  const handleReplay = () => {
    stopSpeech();
    setTimeout(() => {
      speak({
        text,
        langCode,
        languageName,
        lessonId,
        rate: speechRate,
        personaId: selectedPersona
      });
    }, 150);
  };

  const isActivelyPlaying = diag.playbackStatus === 'PLAYING';
  const isGenerating = diag.playbackStatus === 'GENERATING';

  return (
    <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white p-5 rounded-3xl border border-indigo-700/50 space-y-4 shadow-md">
      {/* Header & Truthful Engine Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-900/80 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-800 text-white flex items-center justify-center font-bold text-lg shadow-sm border border-indigo-600/40">
            🔊
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
              <span>{languageName} Spoken Lesson</span>
              <span className="text-amber-400 font-mono text-xs">[{langCode}]</span>
            </h4>
            <p className="text-xs text-indigo-200">
              Target Language: <strong className="text-white font-extrabold">{languageName}</strong>
            </p>
          </div>
        </div>

        {/* Engine Source Badge */}
        <div className="flex items-center gap-2">
          <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 shadow-sm transition-colors ${
            isActivelyPlaying
              ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
              : isGenerating
              ? 'bg-amber-950 text-amber-300 border-amber-500/50 animate-pulse'
              : diag.playbackStatus === 'FAILED'
              ? 'bg-red-950 text-red-300 border-red-500/50'
              : 'bg-indigo-900 text-indigo-200 border-indigo-700'
          }`}>
            {diag.engine === 'NATIVE' ? (
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            ) : diag.engine === 'CACHED' ? (
              <Radio className="w-3.5 h-3.5 text-amber-400" />
            ) : diag.engine === 'CLOUD' ? (
              <Cloud className="w-3.5 h-3.5 text-sky-400" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5 text-red-400" />
            )}
            <span>{diag.engineLabel}</span>
          </span>
        </div>
      </div>

      {/* Control Buttons & Persona Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Play/Pause, Stop, Replay */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayToggle}
            className={`px-4 py-2.5 rounded-2xl font-extrabold text-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95 ${
              isActivelyPlaying
                ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-300'
                : 'bg-teal-600 hover:bg-teal-500 text-white'
            }`}
          >
            {isActivelyPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
            <span>
              {isActivelyPlaying ? '⏸ Pause' : diag.playbackStatus === 'PAUSED' ? '▶ Resume' : `▶ Play ${languageName} Speech`}
            </span>
          </button>

          <button
            onClick={handleStop}
            className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Stop Audio"
          >
            <Square className="w-4 h-4" />
          </button>

          <button
            onClick={handleReplay}
            className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Replay from start"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Voice Persona Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-indigo-200 font-semibold hidden sm:inline">Voice Persona:</span>
          <select
            value={selectedPersona}
            onChange={(e) => setSelectedPersona(e.target.value)}
            className="bg-indigo-900 border border-indigo-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-400"
          >
            <option value="meera">👩 Meera — Warm Teacher</option>
            <option value="arjun">👨 Arjun — Friendly Mentor</option>
            <option value="kavya">👩 Kavya — Storyteller</option>
            <option value="ravi">👨 Ravi — Energetic Guide</option>
          </select>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 bg-indigo-900/80 p-1 rounded-2xl border border-indigo-800 text-xs">
          {[0.75, 1.0, 1.25].map((speed) => (
            <button
              key={speed}
              onClick={() => setSpeechRate(speed)}
              className={`px-2.5 py-1 rounded-xl font-bold transition-colors ${
                speechRate === speed ? 'bg-amber-500 text-slate-950 shadow' : 'text-indigo-200 hover:text-white'
              }`}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>

      {/* Visual Waveform: ANIMATED ONLY WHILE ACTUALLY PLAYING */}
      <div className="h-10 bg-indigo-950 rounded-2xl border border-indigo-800 px-4 flex items-center justify-center gap-1.5 overflow-hidden">
        {isActivelyPlaying ? (
          Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-gradient-to-t from-teal-400 via-amber-400 to-emerald-400 rounded-full animate-wave-${(i % 5) + 1}`}
              style={{ animationDuration: `${0.4 + (i % 4) * 0.15}s` }}
            ></div>
          ))
        ) : (
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono">
            <Volume2 className="w-4 h-4 text-amber-400" />
            <span>
              {isGenerating
                ? `Loading ${languageName} speech...`
                : nativeVoice
                ? `Device native ${languageName} voice ready (${nativeVoice.name})`
                : `Real demo & cloud audio pipeline ready for ${languageName}`}
            </span>
          </div>
        )}
      </div>

      {/* Voice & Payload Diagnostic Line */}
      <div className="text-[11px] text-indigo-300 font-mono flex flex-wrap items-center justify-between border-t border-indigo-900/80 pt-2 gap-2">
        <span>
          Detected Voice: <strong className="text-amber-300 font-bold">{nativeVoice ? nativeVoice.name : `Real ${languageName} Speech Engine`}</strong>
        </span>
        <span className="text-teal-300">
          Audio Payload Loaded: <strong className="text-white font-bold">{diag.audioLoaded}</strong>
        </span>
      </div>
    </div>
  );
}
