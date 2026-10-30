import React, { useState, useEffect } from 'react';
import { getAudioDiagnostics, subscribeTTS, testLanguageVoice, findNativeVoiceForLanguage } from '../services/ttsService';
import { Radio, Smartphone, Cloud, Wifi, AlertTriangle, CheckCircle2, Play, Volume2 } from 'lucide-react';

export default function AudioDiagnosticModal({ onClose }) {
  const [diagInfo, setDiagInfo] = useState(getAudioDiagnostics());

  useEffect(() => {
    const unsub = subscribeTTS((newState) => {
      setDiagInfo(newState);
    });
    return () => unsub();
  }, []);

  const handleTestVoice = (langCode) => {
    testLanguageVoice(langCode);
  };

  const isTamilNativeInstalled = !!findNativeVoiceForLanguage('ta-IN');
  const isHindiNativeInstalled = !!findNativeVoiceForLanguage('hi-IN');
  const isTeluguNativeInstalled = !!findNativeVoiceForLanguage('te-IN');
  const isMarathiNativeInstalled = !!findNativeVoiceForLanguage('mr-IN');

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FFFBF5] max-w-2xl w-full rounded-3xl border-2 border-indigo-500 shadow-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto relative animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-indigo-200 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-900 text-white flex items-center justify-center text-xl shadow-md">
              🛠️
            </div>
            <div>
              <span className="text-[10px] font-bold text-indigo-900 uppercase font-mono tracking-wider block">
                SIH Judge & Developer Audio Verification Tool
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                Audio Engine Diagnostic & Voice Test Panel
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* DEDICATED VOICE TEST BUTTONS */}
        <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-2xl space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-amber-950 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Volume2 className="w-4 h-4 text-amber-700" />
              <span>Dedicated Voice Test Suite (Real Audio Output Verification)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {/* Tamil Voice Test */}
            <button
              onClick={() => handleTestVoice('ta-IN')}
              className="p-3 bg-white hover:bg-amber-100 border border-amber-300 rounded-xl text-left transition-all space-y-1 shadow-sm group"
            >
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-1.5 text-teal-900">
                  <Play className="w-3.5 h-3.5 fill-teal-700 text-teal-700 group-hover:scale-110 transition-transform" />
                  <span>🎤 TEST TAMIL VOICE</span>
                </span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isTamilNativeInstalled ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  {isTamilNativeInstalled ? 'Device Native' : 'Real Demo Speech'}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-serif italic">
                "வணக்கம்! இது வித்யா வாணியின் தமிழ் குரல் சோதனை."
              </p>
            </button>

            {/* Hindi Voice Test */}
            <button
              onClick={() => handleTestVoice('hi-IN')}
              className="p-3 bg-white hover:bg-amber-100 border border-amber-300 rounded-xl text-left transition-all space-y-1 shadow-sm group"
            >
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-1.5 text-teal-900">
                  <Play className="w-3.5 h-3.5 fill-teal-700 text-teal-700 group-hover:scale-110 transition-transform" />
                  <span>🎤 TEST HINDI VOICE</span>
                </span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isHindiNativeInstalled ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  {isHindiNativeInstalled ? 'Device Native' : 'Real Demo Speech'}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-serif italic">
                "नमस्ते! यह विद्या वाणी की हिंदी आवाज़ है।"
              </p>
            </button>

            {/* Telugu Voice Test */}
            <button
              onClick={() => handleTestVoice('te-IN')}
              className="p-3 bg-white hover:bg-amber-100 border border-amber-300 rounded-xl text-left transition-all space-y-1 shadow-sm group"
            >
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-1.5 text-teal-900">
                  <Play className="w-3.5 h-3.5 fill-teal-700 text-teal-700 group-hover:scale-110 transition-transform" />
                  <span>🎤 TEST TELUGU VOICE</span>
                </span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isTeluguNativeInstalled ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  {isTeluguNativeInstalled ? 'Device Native' : 'Real Demo Speech'}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-serif italic">
                "నమస్కారం! ఇది విద్యా వాణి తెలుగు వాయిస్ పరీక్ష."
              </p>
            </button>

            {/* Marathi Voice Test */}
            <button
              onClick={() => handleTestVoice('mr-IN')}
              className="p-3 bg-white hover:bg-amber-100 border border-amber-300 rounded-xl text-left transition-all space-y-1 shadow-sm group"
            >
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-1.5 text-teal-900">
                  <Play className="w-3.5 h-3.5 fill-teal-700 text-teal-700 group-hover:scale-110 transition-transform" />
                  <span>🎤 TEST MARATHI VOICE</span>
                </span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isMarathiNativeInstalled ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  {isMarathiNativeInstalled ? 'Device Native' : 'Real Demo Speech'}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-serif italic">
                "नमस्कार! ही विद्या वाणीची मराठी आवाज चाचणी आहे."
              </p>
            </button>
          </div>
        </div>

        {/* Diagnostic Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Active Engine Label</span>
            <span className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
              {diagInfo.engine === 'NATIVE' ? (
                <Smartphone className="w-4 h-4 text-emerald-600" />
              ) : (
                <Radio className="w-4 h-4 text-amber-600" />
              )}
              <span>{diagInfo.engineLabel}</span>
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Playback Status</span>
            <span className={`font-extrabold text-xs px-2.5 py-1 rounded-lg inline-block ${
              diagInfo.playbackStatus === 'PLAYING'
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-slate-100 text-slate-800 border border-slate-300'
            }`}>
              {diagInfo.playbackStatus}
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Selected Language</span>
            <span className="font-bold text-slate-900">
              {diagInfo.selectedLanguage} ({diagInfo.langCode})
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Native Voice Status</span>
            <span className="font-bold text-amber-900 block font-mono text-[11px]">
              {diagInfo.nativeVoiceStatus}
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Cloud TTS Response Code</span>
            <span className="font-bold text-slate-900 font-mono text-[11px]">{diagInfo.cloudResponseCode}</span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Audio Content-Type</span>
            <span className="font-bold text-slate-900 font-mono text-[11px]">{diagInfo.contentType}</span>
          </div>
        </div>

        {/* Text Sent to TTS */}
        <div className="bg-slate-900 text-white p-4 rounded-2xl space-y-1 font-mono text-xs border border-slate-800">
          <span className="text-amber-400 font-bold block">Exact Text Sent to Speech Engine:</span>
          <p className="text-slate-200 font-serif italic text-sm">
            "{diagInfo.textSentToTTS || 'No text submitted yet'}"
          </p>
        </div>

        {/* Error Diagnostic */}
        <div className="bg-slate-950 text-slate-400 p-3 rounded-2xl space-y-1 font-mono text-[11px] border border-slate-800">
          <span>Last System Diagnostic Log: </span>
          <span className="text-emerald-400 font-bold">{diagInfo.lastError || 'Clean system state — 0 errors'}</span>
        </div>

        <div className="text-right pt-2 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs rounded-xl shadow"
          >
            Close Diagnostics
          </button>
        </div>
      </div>
    </div>
  );
}
