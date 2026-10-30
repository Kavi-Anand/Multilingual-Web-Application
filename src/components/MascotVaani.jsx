import React from 'react';
import { Sparkles, Volume2 } from 'lucide-react';

export default function MascotVaani({ state = 'greeting', customText, onSpeak }) {
  // state can be: 'greeting' | 'thinking' | 'explaining' | 'listening' | 'celebrating'

  const getSpeechBubbleText = () => {
    if (customText) return customText;
    switch (state) {
      case 'thinking':
        return 'Analyzing context & adapting to local village culture... 🧠✨';
      case 'explaining':
        return 'Here is how your grandmother would explain this math problem! 👵🪔';
      case 'listening':
        return 'Listening closely to detect sub-regional dialect patterns... 🎙️';
      case 'celebrating':
        return 'Shabash! Excellent understanding! 🎉✨';
      case 'greeting':
      default:
        return 'Namaste! I am Vaani (वाणी). I translate lessons into the exact words you hear at home!';
    }
  };

  return (
    <div className="relative flex items-center gap-4 bg-gradient-to-r from-amber-100/80 via-orange-50/80 to-emerald-50/80 p-4 rounded-2xl border border-amber-200/60 shadow-sm backdrop-blur-sm transition-all duration-300">
      {/* Mascot Avatar Container */}
      <div className="relative group flex-shrink-0 cursor-pointer" onClick={onSpeak} title="Click to hear Vaani speak">
        {/* Glow halo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse-ring"></div>
        
        {/* SVG Animated Mascot Body */}
        <div className="relative w-20 h-20 bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 rounded-full p-1.5 shadow-md flex items-center justify-center border-2 border-amber-200 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Diya Flame Halo / Crown */}
            <path
              d="M 50 8 C 45 22, 42 25, 50 32 C 58 25, 55 22, 50 8 Z"
              fill="#F59E0B"
              className="animate-pulse"
            />
            <path
              d="M 50 12 C 47 22, 46 24, 50 29 C 54 24, 53 22, 50 12 Z"
              fill="#EF4444"
            />

            {/* Mascot Face Circle */}
            <circle cx="50" cy="58" r="32" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />

            {/* Cheeks */}
            <circle cx="34" cy="62" r="5" fill="#FCA5A5" opacity="0.6" />
            <circle cx="66" cy="62" r="5" fill="#FCA5A5" opacity="0.6" />

            {/* Eyes */}
            {state === 'thinking' ? (
              // Thinking Eyes (looking up)
              <g>
                <circle cx="38" cy="50" r="4" fill="#1E293B" />
                <circle cx="62" cy="50" r="4" fill="#1E293B" />
                <circle cx="39" cy="48" r="1.5" fill="#FFFFFF" />
                <circle cx="63" cy="48" r="1.5" fill="#FFFFFF" />
              </g>
            ) : state === 'listening' ? (
              // Wide curious eyes
              <g className="animate-blink">
                <circle cx="38" cy="52" r="5.5" fill="#1E293B" />
                <circle cx="62" cy="52" r="5.5" fill="#1E293B" />
                <circle cx="40" cy="50" r="2" fill="#FFFFFF" />
                <circle cx="64" cy="50" r="2" fill="#FFFFFF" />
              </g>
            ) : (
              // Happy blinking eyes
              <g className="animate-blink">
                <circle cx="38" cy="52" r="4.5" fill="#1E293B" />
                <circle cx="62" cy="52" r="4.5" fill="#1E293B" />
                <circle cx="40" cy="50" r="1.5" fill="#FFFFFF" />
                <circle cx="64" cy="50" r="1.5" fill="#FFFFFF" />
              </g>
            )}

            {/* Bindi (Cultural Rooting) */}
            <circle cx="50" cy="44" r="2.5" fill="#DC2626" />

            {/* Mouth */}
            {state === 'explaining' || state === 'celebrating' ? (
              // Big Happy Open Mouth
              <path d="M 40 64 Q 50 75 60 64 Z" fill="#991B1B" />
            ) : state === 'thinking' ? (
              // Small O mouth
              <circle cx="50" cy="66" r="3" fill="#991B1B" />
            ) : (
              // Gentle Smile
              <path d="M 40 63 Q 50 71 60 63" fill="none" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
            )}
          </svg>

          {/* Floating Sparkle Badge */}
          <div className="absolute -top-1 -right-1 bg-amber-500 text-white p-1 rounded-full shadow">
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </div>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1 bg-white/90 p-3.5 rounded-2xl rounded-tl-none border border-amber-200 shadow-sm text-sm relative">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="font-bold text-amber-900 text-xs tracking-wider uppercase block mb-0.5 flex items-center gap-1">
              <span>Vaani Pedagogy Mascot</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded font-mono">
                NEP 2020 MTB-MLE
              </span>
            </span>
            <p className="text-slate-700 leading-snug font-medium">{getSpeechBubbleText()}</p>
          </div>
          
          {onSpeak && (
            <button
              onClick={onSpeak}
              className="p-1.5 text-amber-700 hover:bg-amber-100 rounded-lg transition-colors flex-shrink-0"
              title="Speak text"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
