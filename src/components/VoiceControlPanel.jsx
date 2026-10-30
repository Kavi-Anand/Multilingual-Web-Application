import React, { useState, useEffect } from 'react';
import { playVernacularSpeech, stopVernacularSpeech, getAvailableVoicePersonas, initVoices } from '../utils/speechEngine';
import { Play, Pause, RotateCcw, Volume2, Sparkles, Sliders, Cpu, Cloud, Smartphone } from 'lucide-react';

export default function VoiceControlPanel({ text, langCode = 'ta-IN', languageName = 'Tamil', onToast }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [selectedVoiceId, setSelectedVoiceId] = useState('');
  const [personaOptions, setPersonaOptions] = useState([]);
  const [activeEngineInfo, setActiveEngineInfo] = useState(null); // { engineType: 'device' | 'cloud', voiceName }

  useEffect(() => {
    initVoices(() => {
      const personas = getAvailableVoicePersonas(langCode);
      setPersonaOptions(personas);
      if (personas.length > 0 && !selectedVoiceId) {
        setSelectedVoiceId(personas[0].id);
      }
    });

    const personas = getAvailableVoicePersonas(langCode);
    setPersonaOptions(personas);
    if (personas.length > 0 && !selectedVoiceId) {
      setSelectedVoiceId(personas[0].id);
    }
  }, [langCode]);

  const handlePlay = () => {
    if (isPlaying) {
      stopVernacularSpeech();
      setIsPlaying(false);
      return;
    }

    if (!text) return;

    setIsPlaying(true);

    playVernacularSpeech({
      text: text,
      langCode: langCode,
      languageName: languageName,
      selectedVoiceId: selectedVoiceId,
      rate: speechRate,
      onStart: (info) => {
        setIsPlaying(true);
        setActiveEngineInfo(info);
      },
      onEnd: () => {
        setIsPlaying(false);
      },
      onError: () => {
        setIsPlaying(false);
      },
      onToast: onToast
    });
  };

  const handleReplay = () => {
    stopVernacularSpeech();
    setIsPlaying(false);
    setTimeout(() => {
      handlePlay();
    }, 150);
  };

  return (
    <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 text-white p-4 rounded-2xl border border-teal-500/30 space-y-3 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Play/Pause & Replay Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlay}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md transition-transform active:scale-95 ${
              isPlaying ? 'bg-amber-500 text-slate-950 animate-pulse' : 'bg-teal-600 hover:bg-teal-500 text-white'
            }`}
            title={isPlaying ? 'Pause Speech' : 'Play Speech'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={handleReplay}
            className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors"
            title="Replay from start"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Engine Status Badge */}
          {activeEngineInfo && (
            <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded-full border flex items-center gap-1 ${
              activeEngineInfo.engineType === 'device'
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                : 'bg-amber-950 text-amber-300 border-amber-500/40'
            }`}>
              {activeEngineInfo.engineType === 'device' ? <Smartphone className="w-3 h-3" /> : <Cloud className="w-3 h-3" />}
              <span>{activeEngineInfo.engineType === 'device' ? 'Playing via device voice' : 'Playing via cloud voice'}</span>
            </span>
          )}
        </div>

        {/* Persona Voice Selector Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 font-medium hidden sm:inline">Narrator:</span>
          <select
            value={selectedVoiceId}
            onChange={(e) => setSelectedVoiceId(e.target.value)}
            className="bg-slate-800 border border-teal-500/40 rounded-xl px-2.5 py-1 text-xs font-bold text-teal-200 focus:outline-none focus:ring-1 focus:ring-amber-400"
          >
            {personaOptions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {/* Speed Slider (0.75x - 1.25x) */}
        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-xl border border-slate-700 text-xs">
          <Sliders className="w-3 h-3 text-teal-400" />
          <span className="text-slate-400 text-[11px]">Speed:</span>
          <input
            type="range"
            min="0.75"
            max="1.25"
            step="0.05"
            value={speechRate}
            onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
            className="w-16 accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <span className="font-mono text-amber-300 font-bold text-[11px] w-8">{speechRate}x</span>
        </div>
      </div>

      {/* Visual Waveform Animation Bars (Tied to Speech State) */}
      <div className="h-8 bg-slate-950/80 rounded-xl border border-teal-500/20 px-3 flex items-center justify-center gap-1 overflow-hidden">
        {isPlaying ? (
          Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-gradient-to-t from-teal-500 to-amber-400 rounded-full animate-wave-${(i % 5) + 1}`}
              style={{ animationDuration: `${0.4 + (i % 4) * 0.15}s` }}
            ></div>
          ))
        ) : (
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-mono">
            <Volume2 className="w-3.5 h-3.5 text-teal-500" />
            <span>Waveform Standing By • Press play to listen ({languageName})</span>
          </div>
        )}
      </div>
    </div>
  );
}
