import React, { useState } from 'react';
import { playTestChime, speakText, stopSpeech } from '../utils/audioSpeech';
import { Volume2, VolumeX, Play, Pause, CheckCircle2, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';

export default function AudioPlayerWidget({ text, langCode = 'ta-IN', languageName = 'Tamil', voiceProfile = 'vaani' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTestingChime, setIsTestingChime] = useState(false);
  const [audioStatus, setAudioStatus] = useState('Ready');

  const shortLang = langCode.split('-')[0] || 'ta';
  const gtxAudioUrl = text
    ? `https://translate.google.com/translate_tts?client=gtx&ie=UTF-8&tl=${shortLang}&q=${encodeURIComponent(text.substring(0, 180))}`
    : '';

  const handleTestSpeakerSound = () => {
    setIsTestingChime(true);
    setAudioStatus('Testing system speaker chime...');
    playTestChime(
      () => setIsTestingChime(true),
      () => {
        setIsTestingChime(false);
        setAudioStatus('Speaker Test Chime Completed! Speaker volume is verified.');
      }
    );
  };

  const handleToggleSpeak = () => {
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
      setAudioStatus('Audio Paused');
      return;
    }

    if (!text) return;

    setIsPlaying(true);
    setAudioStatus(`Playing spoken audio in ${languageName} [${langCode}]...`);

    speakText({
      text: text,
      langCode: langCode,
      voiceProfile: voiceProfile,
      onStart: () => {
        setIsPlaying(true);
        setAudioStatus(`Audio active: Playing ${languageName} spoken words...`);
      },
      onEnd: () => {
        setIsPlaying(false);
        setAudioStatus('Audio Finished');
      },
      onError: () => {
        setIsPlaying(false);
        setAudioStatus('Audio Stream Error');
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-5 rounded-3xl border border-amber-400/40 shadow-md space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleSpeak}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-lg transition-transform active:scale-95 ${
              isPlaying ? 'bg-red-600 text-white animate-pulse' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
            }`}
            title="Play/Pause native spoken speech"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
                <span>🔊 Native Spoken Voice ({languageName})</span>
                <span className="bg-amber-500/20 text-amber-300 font-mono text-[10px] px-2 py-0.5 rounded border border-amber-400/40">
                  {langCode}
                </span>
              </h4>
            </div>
            <p className="text-xs text-amber-200/80 font-mono">
              Status: {audioStatus}
            </p>
          </div>
        </div>

        {/* Test Speaker Volume Button */}
        <button
          onClick={handleTestSpeakerSound}
          disabled={isTestingChime}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl text-xs font-bold border border-slate-700 transition-colors"
        >
          <Volume2 className={`w-3.5 h-3.5 ${isTestingChime ? 'animate-bounce text-amber-400' : ''}`} />
          <span>{isTestingChime ? 'Chiming...' : '🔊 Test Speaker Sound'}</span>
        </button>
      </div>

      {/* Visible HTML5 Audio Player Control Bar */}
      {gtxAudioUrl && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Direct HTML5 Audio Stream Player:</span>
            <a
              href={gtxAudioUrl}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              Open Direct Audio Link ↗
            </a>
          </div>

          <audio
            controls
            src={gtxAudioUrl}
            className="w-full h-10 rounded-xl bg-slate-950 border border-slate-700 accent-amber-500"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}
