import React, { useState } from 'react';
import { DIALECT_DATA } from '../data/mockData';
import MascotVaani from './MascotVaani';
import { Mic, MicOff, Volume2, Sparkles, MapPin, CheckCircle2, Sliders, Play, Pause, AlertCircle, Compass } from 'lucide-react';

export default function ModuleDialectVoice({ isOffline }) {
  const [selectedDialectIndex, setSelectedDialectIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [playingAudioType, setPlayingAudioType] = useState(null); // 'standard' | 'dialect'

  const currentData = DIALECT_DATA[selectedDialectIndex];

  const triggerRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
      }, 1500);
    } else {
      setIsRecording(true);
    }
  };

  const handleAudioPlay = (type) => {
    if (playingAudioType === type) {
      setPlayingAudioType(null);
      window.speechSynthesis?.cancel();
      return;
    }

    setPlayingAudioType(type);
    const textToSpeak = type === 'dialect' ? currentData.transcription : currentData.translation;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.onend = () => setPlayingAudioType(null);
      utterance.onerror = () => setPlayingAudioType(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setPlayingAudioType(null), 4000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mascot Header */}
      <MascotVaani
        state={isRecording ? 'listening' : analyzing ? 'thinking' : 'greeting'}
        customText={
          isRecording
            ? 'Listening to child/parent audio feed... Say something in your home dialect!'
            : analyzing
            ? 'Running AI4Bharat IndicWhisper sub-dialect acoustic classifier...'
            : `Detected register: ${currentData.subDialect} with ${currentData.confidence}% confidence.`
        }
      />

      {/* Main Mic Recording & Dialect Switcher Box */}
      <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
              Module 2: Sub-Regional Voice Architecture
            </span>
            <h2 className="text-xl font-extrabold text-slate-900">
              Dialect-Aware Voice & ASR Detection Layer
            </h2>
            <p className="text-xs text-slate-500">
              Proves VidyaVaani understands regional registers across India's language continuum, not just single state languages.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" /> AI4Bharat IndicWhisper Core
            </span>
          </div>
        </div>

        {/* Mic Input & Spectrum Visualizer */}
        <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white p-6 rounded-3xl border border-amber-500/30 space-y-5 text-center relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
              {isRecording ? 'LIVE AUDIO RECORDING IN PROGRESS...' : analyzing ? 'ANALYZING ACOUSTICS...' : 'CLICK MIC TO SCAN VOICE INPUT'}
            </span>

            {/* Big Mic Button */}
            <div className="flex justify-center py-2">
              <button
                onClick={triggerRecording}
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all transform active:scale-95 ${
                  isRecording
                    ? 'bg-red-600 hover:bg-red-500 ring-8 ring-red-500/40 animate-pulse'
                    : analyzing
                    ? 'bg-amber-500 ring-8 ring-amber-500/40 animate-spin'
                    : 'bg-gradient-to-tr from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 ring-4 ring-amber-300/30 hover:scale-105'
                }`}
              >
                {isRecording ? (
                  <MicOff className="w-8 h-8 text-white" />
                ) : (
                  <Mic className="w-8 h-8 text-white" />
                )}
              </button>
            </div>

            <p className="text-xs text-slate-300 max-w-md mx-auto">
              {isRecording
                ? 'Speak in your native dialect (e.g. Varhadi Marathi, Kongu Tamil, Purvanchal Bhojpuri)...'
                : 'Or click one of the preset regional voice samples below for instant evaluation.'}
            </p>
          </div>

          {/* Dynamic Spectrum Analyzer Canvas Simulation */}
          <div className="h-16 bg-slate-950/90 rounded-2xl border border-slate-800 p-3 flex items-center justify-center gap-1 overflow-hidden">
            {isRecording ? (
              Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-gradient-to-t from-red-500 via-amber-400 to-emerald-400 rounded-full animate-pulse"
                  style={{
                    height: `${Math.floor(Math.random() * 40) + 10}px`,
                    animationDuration: `${0.2 + (i % 5) * 0.1}s`
                  }}
                ></div>
              ))
            ) : analyzing ? (
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono animate-pulse">
                <Sliders className="w-4 h-4 animate-spin" />
                <span>Classifying phonemes against Bhashini 120+ dialect corpus...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                <Compass className="w-4 h-4 text-amber-500" />
                <span>Acoustic Frequency Spectrum: Standing by for voice signal</span>
              </div>
            )}
          </div>
        </div>

        {/* Preset Dialect Sample Trigger Buttons */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Preset Sub-Regional Dialect Sample:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {DIALECT_DATA.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedDialectIndex(idx);
                  setPlayingAudioType(null);
                }}
                className={`p-3 rounded-2xl border text-left font-bold text-xs transition-all ${
                  selectedDialectIndex === idx
                    ? 'bg-amber-600 text-white border-amber-700 shadow-md ring-2 ring-amber-300'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                <div className="text-[10px] opacity-80 uppercase tracking-wider font-mono">
                  {item.stateLanguage}
                </div>
                <div className="font-extrabold text-sm truncate mt-0.5">
                  {item.subDialect}
                </div>
                <div className="text-[11px] opacity-90 mt-1 flex items-center justify-between">
                  <span>Conf: {item.confidence}%</span>
                  <MapPin className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DETECTED RESULT CARD */}
      <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border-2 border-emerald-500/70 p-6 rounded-3xl shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200 pb-4">
          <div>
            <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Acoustic Classifier Output
            </span>
            <h3 className="text-xl font-extrabold text-emerald-950 mt-1">
              Detected: {currentData.subDialect}
            </h3>
            <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-emerald-700" /> Geographic Coverage: {currentData.geographicCoverage}
            </p>
          </div>

          {/* Confidence Rating Gauge */}
          <div className="bg-white p-3.5 rounded-2xl border border-emerald-300 shadow-sm text-center min-w-[130px]">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Acoustic Match
            </div>
            <div className="text-2xl font-black text-emerald-700">
              {currentData.confidence}%
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full"
                style={{ width: `${currentData.confidence}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Live Audio Transcript Box */}
        <div className="bg-white p-4 rounded-2xl border border-emerald-200 space-y-2">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
            Detected Speech Transcript ({currentData.sampleAudioName}):
          </span>
          <p className="text-base font-serif italic text-slate-900 leading-relaxed font-semibold">
            "{currentData.transcription}"
          </p>
          <p className="text-xs text-slate-500 font-sans border-t border-slate-100 pt-2">
            Standard Translation: "{currentData.translation}"
          </p>
        </div>

        {/* Audio Listen Comparison Switch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => handleAudioPlay('dialect')}
            className={`p-3.5 rounded-2xl border font-bold text-xs flex items-center justify-between transition-all ${
              playingAudioType === 'dialect'
                ? 'bg-amber-600 text-white border-amber-700 shadow-md'
                : 'bg-white text-slate-800 border-amber-300 hover:bg-amber-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-900">
                {playingAudioType === 'dialect' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </div>
              <div className="text-left">
                <span className="block font-bold">1. Listen in Native Dialect Speech</span>
                <span className="text-[11px] text-slate-500 font-normal">Sub-regional IndicTTS voice model</span>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleAudioPlay('standard')}
            className={`p-3.5 rounded-2xl border font-bold text-xs flex items-center justify-between transition-all ${
              playingAudioType === 'standard'
                ? 'bg-emerald-700 text-white border-emerald-800 shadow-md'
                : 'bg-white text-slate-800 border-emerald-300 hover:bg-emerald-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-900">
                {playingAudioType === 'standard' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </div>
              <div className="text-left">
                <span className="block font-bold">2. Listen in Standard State Register</span>
                <span className="text-[11px] text-slate-500 font-normal">Standard literary TTS baseline</span>
              </div>
            </div>
          </button>
        </div>

        {/* DIALECT VOCABULARY MAPPING TABLE */}
        <div className="bg-white p-5 rounded-2xl border border-emerald-200 space-y-3">
          <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-600" /> Auto-Adjusted Vocabulary & Pronunciation Mapping
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[10px]">
                <tr>
                  <th className="p-2.5 rounded-l-xl">Standard State Word</th>
                  <th className="p-2.5">Sub-Regional Dialect Word</th>
                  <th className="p-2.5 rounded-r-xl">Pedagogical Context Adjustment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {currentData.adjustments.map((adj, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/50">
                    <td className="p-2.5 text-slate-500 font-serif">{adj.standard}</td>
                    <td className="p-2.5 text-amber-900 font-bold font-serif bg-amber-50/80 rounded">{adj.dialect}</td>
                    <td className="p-2.5 text-slate-700">{adj.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dialect Continuum Pedagogical Note */}
        <div className="bg-emerald-900 text-emerald-100 p-4 rounded-2xl text-xs space-y-1">
          <span className="font-bold text-amber-300 uppercase tracking-wider block flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-400" /> Pedagogy Insight for Judges:
          </span>
          <p className="leading-relaxed">
            {currentData.pedagogyImpact}
          </p>
        </div>
      </div>
    </div>
  );
}
