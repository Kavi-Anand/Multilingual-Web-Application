// Gemini-Style AI Voice Speech Synthesizer with User-Gesture AudioContext Unlocking

let currentAudioInstance = null;
let audioContextInstance = null;

function getAudioContext() {
  if (!audioContextInstance && typeof window !== 'undefined') {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      audioContextInstance = new AudioCtx();
    }
  }
  if (audioContextInstance && audioContextInstance.state === 'suspended') {
    audioContextInstance.resume();
  }
  return audioContextInstance;
}

/**
 * Main Gemini AI Voice Synthesizer
 */
export function playGeminiAIVoice({ text, langCode = 'ta-IN', voiceProfile = 'vaani', onStart, onEnd, onError }) {
  if (!text || !text.trim()) return;

  // Stop any active audio
  stopGeminiAIVoice();

  // Unlock Web Audio Context via user click gesture
  getAudioContext();

  const shortLang = langCode.split('-')[0] || 'ta';
  const cleanText = text.substring(0, 200);

  // Strategy 1: Google Translate GTX Audio Stream (Clean CORS-free native voice)
  const streamUrl = `https://translate.google.com/translate_tts?client=gtx&ie=UTF-8&tl=${shortLang}&q=${encodeURIComponent(cleanText)}`;

  try {
    const audio = new Audio();
    audio.src = streamUrl;
    currentAudioInstance = audio;

    // Pitch / Speed adjustment
    if (voiceProfile === 'amma') {
      audio.playbackRate = 0.85;
    } else if (voiceProfile === 'chhotu') {
      audio.playbackRate = 1.15;
    } else {
      audio.playbackRate = 1.0;
    }

    audio.onplay = () => {
      if (onStart) onStart();
    };

    audio.onended = () => {
      currentAudioInstance = null;
      if (onEnd) onEnd();
    };

    audio.onerror = (err) => {
      console.warn('Audio stream error, switching to WebSpeech fallback', err);
      currentAudioInstance = null;
      speakWithWebSpeech({ text: cleanText, shortLang, voiceProfile, onStart, onEnd, onError });
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Audio play exception, switching to WebSpeech fallback', err);
        currentAudioInstance = null;
        speakWithWebSpeech({ text: cleanText, shortLang, voiceProfile, onStart, onEnd, onError });
      });
    }
  } catch (err) {
    speakWithWebSpeech({ text: cleanText, shortLang, voiceProfile, onStart, onEnd, onError });
  }
}

/**
 * WebSpeech API Fallback
 */
function speakWithWebSpeech({ text, shortLang, voiceProfile, onStart, onEnd, onError }) {
  if (!('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const indicVoice = voices.find((v) => {
      const vLang = v.lang.toLowerCase();
      return vLang.includes(shortLang) || vLang.startsWith(shortLang);
    });

    if (indicVoice) {
      utterance.voice = indicVoice;
      utterance.lang = indicVoice.lang;
    } else {
      utterance.lang = shortLang === 'ta' ? 'ta-IN' : shortLang === 'mr' ? 'mr-IN' : 'hi-IN';
    }

    switch (voiceProfile) {
      case 'amma':
        utterance.pitch = 1.2;
        utterance.rate = 0.8;
        break;
      case 'masterji':
        utterance.pitch = 0.85;
        utterance.rate = 0.9;
        break;
      case 'chhotu':
        utterance.pitch = 1.35;
        utterance.rate = 1.1;
        break;
      default:
        utterance.pitch = 1.0;
        utterance.rate = 1.0;
        break;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    if (onEnd) onEnd();
  }
}

/**
 * Stop speech audio
 */
export function stopGeminiAIVoice() {
  if (typeof window !== 'undefined' && window.responsiveVoice) {
    try {
      window.responsiveVoice.cancel();
    } catch (e) {}
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (currentAudioInstance) {
    currentAudioInstance.pause();
    currentAudioInstance = null;
  }
}
