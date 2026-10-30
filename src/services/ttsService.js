// Multilingual Text-to-Speech (TTS) Service for BhashaSetu AI — Vidya Vaani (PS ID: 26042)

import { DEMO_TEST_PHRASES, DEMO_LESSON_AUDIO } from './demoAudioData';

let systemVoices = [];
let activeAudioElement = null;
let currentUtterance = null;

let currentDiagnosticState = {
  selectedLanguage: 'Hindi',
  langCode: 'hi-IN',
  textSentToTTS: '',
  nativeVoiceStatus: 'Checking...',
  cloudTTSStatus: 'Ready',
  cloudResponseCode: 'N/A',
  contentType: 'N/A',
  audioLoaded: 'NO',
  playbackStatus: 'IDLE', // 'IDLE' | 'GENERATING' | 'READY' | 'PLAYING' | 'PAUSED' | 'FAILED'
  engine: 'NONE', // 'NATIVE' | 'CACHED' | 'CLOUD' | 'UNAVAILABLE'
  engineLabel: '🔊 Audio Standing By',
  lastError: null
};

let listeners = new Set();

export function initTTSService() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const loadVoices = () => {
      systemVoices = window.speechSynthesis.getVoices();
      updateDiagnostics({
        nativeVoiceStatus: systemVoices.length > 0 ? `${systemVoices.length} native voices installed` : 'Loading voices...'
      });
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

export function subscribeTTS(listener) {
  listeners.add(listener);
  listener(currentDiagnosticState);
  return () => listeners.delete(listener);
}

function updateDiagnostics(partial) {
  currentDiagnosticState = { ...currentDiagnosticState, ...partial };
  listeners.forEach((fn) => {
    try {
      fn(currentDiagnosticState);
    } catch (e) {
      console.error('TTS Listener error:', e);
    }
  });
}

export function getAudioDiagnostics() {
  return currentDiagnosticState;
}

export function getInstalledVoices() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const fresh = window.speechSynthesis.getVoices();
    if (fresh && fresh.length > 0) {
      systemVoices = fresh;
    }
  }
  return systemVoices;
}

/**
 * Find native voice for language.
 * CRITICAL RULE: NEVER return an English voice for a non-English language!
 */
export function findNativeVoiceForLanguage(langCode) {
  const voices = getInstalledVoices();
  if (!voices || voices.length === 0) return null;

  const shortLang = (langCode || 'hi').split('-')[0].toLowerCase();

  // 1. Exact match (e.g. "hi-IN" or "hi_IN")
  let match = voices.find((v) => {
    const l = v.lang.toLowerCase().replace('_', '-');
    return l === langCode.toLowerCase();
  });
  if (match) return match;

  // 2. Loose match on language code prefix (e.g. "hi")
  match = voices.find((v) => {
    const l = v.lang.toLowerCase().replace('_', '-');
    return l.startsWith(shortLang);
  });
  if (match) return match;

  // 3. Match language name in voice name (e.g., "Hindi", "Tamil", "Telugu", "Marathi")
  const langNameMap = {
    'hi-IN': 'hindi',
    'ta-IN': 'tamil',
    'te-IN': 'telugu',
    'kn-IN': 'kannada',
    'ml-IN': 'malayalam',
    'mr-IN': 'marathi',
    'bn-IN': 'bengali',
    'gu-IN': 'gujarati',
    'pa-IN': 'punjabi',
    'or-IN': 'odia',
    'as-IN': 'assamese',
    'ur-IN': 'urdu'
  };

  const targetName = langNameMap[langCode];
  if (targetName) {
    match = voices.find((v) => v.name.toLowerCase().includes(targetName));
    if (match) return match;
  }

  // ABSOLUTE RULE: NEVER fall back to an English voice for a non-English language!
  return null;
}

/**
 * STOP all active audio cleanly
 */
export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (activeAudioElement) {
    try {
      activeAudioElement.pause();
      activeAudioElement.currentTime = 0;
    } catch (e) {}
    activeAudioElement = null;
  }
  currentUtterance = null;
  updateDiagnostics({
    playbackStatus: 'IDLE',
    engineLabel: '🔊 Audio Standing By',
    audioLoaded: 'NO'
  });
}

export function pauseSpeech() {
  if (currentDiagnosticState.engine === 'NATIVE' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.pause();
    updateDiagnostics({ playbackStatus: 'PAUSED', engineLabel: '⏸ Paused' });
  } else if (activeAudioElement) {
    activeAudioElement.pause();
    updateDiagnostics({ playbackStatus: 'PAUSED', engineLabel: '⏸ Paused' });
  }
}

export function resumeSpeech() {
  if (currentDiagnosticState.engine === 'NATIVE' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.resume();
    updateDiagnostics({ playbackStatus: 'PLAYING', engineLabel: '▶ Playing' });
  } else if (activeAudioElement) {
    activeAudioElement.play().then(() => {
      updateDiagnostics({ playbackStatus: 'PLAYING', engineLabel: '▶ Playing' });
    }).catch((err) => {
      console.warn('Resume failed:', err);
    });
  }
}

/**
 * MAIN SPEECH PIPELINE
 */
export async function speak({
  text,
  langCode = 'hi-IN',
  languageName = 'Hindi',
  lessonId = 'm1',
  rate = 1.0,
  personaId = 'meera'
}) {
  if (!text || !text.trim()) {
    updateDiagnostics({
      playbackStatus: 'FAILED',
      lastError: 'No translated text provided for TTS'
    });
    return;
  }

  stopSpeech();

  const cleanText = text.trim();
  const shortLang = langCode.split('-')[0].toLowerCase();

  console.log('[VidyaVaani TTS Request]', {
    selectedLanguage: languageName,
    langCode,
    text: cleanText,
    lessonId,
    timestamp: new Date().toISOString()
  });

  updateDiagnostics({
    selectedLanguage: languageName,
    langCode,
    textSentToTTS: cleanText,
    playbackStatus: 'GENERATING',
    engineLabel: `⏳ Loading ${languageName} Speech...`,
    audioLoaded: 'NO',
    lastError: null
  });

  // STEP 1: Native SpeechSynthesis (Strict Language Match)
  const nativeVoice = findNativeVoiceForLanguage(langCode);

  console.log('[VidyaVaani TTS Diagnostic]', {
    langCode,
    languageName,
    nativeVoiceFound: nativeVoice ? nativeVoice.name : 'None (Not installed on device)',
    installedVoicesCount: systemVoices.length
  });

  if (nativeVoice && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.voice = nativeVoice;
      utterance.lang = nativeVoice.lang;
      utterance.rate = rate;

      if (personaId === 'meera' || personaId === 'kavya') utterance.pitch = 1.1;
      else if (personaId === 'arjun') utterance.pitch = 0.9;
      else utterance.pitch = 1.0;

      utterance.onstart = () => {
        console.log('[VidyaVaani TTS] Native SpeechStarted:', nativeVoice.name);
        updateDiagnostics({
          playbackStatus: 'PLAYING',
          engine: 'NATIVE',
          engineLabel: `🖥 Using native ${languageName} voice`,
          nativeVoiceStatus: `Native (${nativeVoice.name})`,
          audioLoaded: 'YES'
        });
      };

      utterance.onend = () => {
        console.log('[VidyaVaani TTS] Native Speech Finished');
        updateDiagnostics({ playbackStatus: 'IDLE', engineLabel: '✓ Speech Finished', audioLoaded: 'NO' });
      };

      utterance.onerror = (err) => {
        console.warn('Native SpeechSynthesis error, trying demo audio asset:', err);
        playDemoOrCloudAudio({ cleanText, langCode, languageName, lessonId, rate, shortLang });
      };

      currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
      return;
    } catch (e) {
      console.warn('Native SpeechSynthesis exception:', e);
    }
  } else {
    updateDiagnostics({ nativeVoiceStatus: `Native ${languageName} voice not installed on device` });
  }

  // STEP 2: Demo Audio Library / Validated Audio Stream
  const playedDemo = await playDemoOrCloudAudio({ cleanText, langCode, languageName, lessonId, rate, shortLang });
  if (playedDemo) return;

  // STEP 3: Honest Error Display if audio is unavailable
  updateDiagnostics({
    playbackStatus: 'FAILED',
    engine: 'UNAVAILABLE',
    engineLabel: `⚠️ ${languageName} voice unavailable`,
    lastError: `Native ${languageName} voice not installed on device and cloud audio unconfigured.`
  });
}

/**
 * Play Demo Audio Asset or Validate Cloud Audio Response
 */
async function playDemoOrCloudAudio({ cleanText, langCode, languageName, lessonId, rate, shortLang }) {
  const demoKey = `${lessonId}_${langCode}`;
  const demoConfig = DEMO_LESSON_AUDIO[demoKey] || DEMO_TEST_PHRASES[langCode];

  if (demoConfig && demoConfig.audioUrl) {
    try {
      const res = await fetch(demoConfig.audioUrl);
      updateDiagnostics({ cloudResponseCode: `${res.status} ${res.statusText}`, contentType: res.headers.get('content-type') || 'audio/wav' });

      if (res.status === 200) {
        const blob = await res.blob();
        if (blob.size > 0) {
          playValidatedAudioBlob(blob, `🎧 Using cached ${languageName} demo audio`, rate);
          return true;
        }
      }
    } catch (e) {
      console.warn('Static audio asset fetch exception:', e);
    }
  }

  // Try Cloud TTS API with Strict Response & Content-Type Validation
  try {
    const ttsUrl = `https://translate.google.com/translate_tts?client=gtx&ie=UTF-8&tl=${shortLang}&q=${encodeURIComponent(cleanText)}`;
    
    const response = await fetch(ttsUrl);
    updateDiagnostics({ cloudResponseCode: `${response.status} ${response.statusText}` });

    if (response.status !== 200) {
      throw new Error(`Cloud TTS returned HTTP ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || '';
    updateDiagnostics({ contentType });

    // Validate MIME Content-Type
    if (!contentType.toLowerCase().includes('audio') && !contentType.toLowerCase().includes('mpeg') && !contentType.toLowerCase().includes('wav') && !contentType.toLowerCase().includes('ogg')) {
      throw new Error(`Invalid Content-Type: '${contentType}'. Expected audio stream.`);
    }

    const blob = await response.blob();
    if (blob.size === 0) {
      throw new Error('Received 0-byte audio payload');
    }

    playValidatedAudioBlob(blob, `☁ Using cloud ${languageName} TTS`, rate);
    return true;
  } catch (err) {
    console.warn('[VidyaVaani TTS Validation Warning]:', err.message);
    updateDiagnostics({
      cloudTTSStatus: 'Unavailable',
      lastError: err.message
    });
    return false;
  }
}

/**
 * Play Validated Blob URL with HTMLAudioElement
 */
function playValidatedAudioBlob(blob, label, rate) {
  const objectUrl = URL.createObjectURL(blob);
  playValidatedAudioUrl(objectUrl, label, rate);
}

/**
 * Play Validated Audio URL via Standard HTMLAudioElement
 */
function playValidatedAudioUrl(url, label, rate) {
  const audio = new Audio();
  audio.src = url;
  audio.playbackRate = rate;
  activeAudioElement = audio;

  audio.onloadeddata = () => {
    updateDiagnostics({ audioLoaded: 'YES', playbackStatus: 'READY' });
  };

  audio.oncanplay = () => {
    updateDiagnostics({ audioLoaded: 'YES' });
  };

  audio.onplay = () => {
    updateDiagnostics({ playbackStatus: 'GENERATING' });
  };

  audio.onplaying = () => {
    // ACTUAL AUDIO PLAYBACK STARTED!
    console.log('[VidyaVaani Audio] Playing:', label);
    updateDiagnostics({
      playbackStatus: 'PLAYING',
      engineLabel: label,
      audioLoaded: 'YES'
    });
  };

  audio.onended = () => {
    console.log('[VidyaVaani Audio] Ended');
    activeAudioElement = null;
    updateDiagnostics({ playbackStatus: 'IDLE', engineLabel: '✓ Speech Finished', audioLoaded: 'NO' });
  };

  audio.onerror = (err) => {
    console.warn('[VidyaVaani Audio Error]:', err);
    activeAudioElement = null;
    updateDiagnostics({
      playbackStatus: 'FAILED',
      engine: 'UNAVAILABLE',
      engineLabel: '⚠️ Audio failed to play',
      lastError: 'HTMLAudioElement playback error'
    });
  };

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.warn('[VidyaVaani Audio Play Blocked]:', err);
      updateDiagnostics({
        playbackStatus: 'FAILED',
        engineLabel: '⚠️ Autoplay blocked — Click Play',
        lastError: err.message
      });
    });
  }
}

export function previewPersonaVoice(personaId, langCode = 'hi-IN', languageName = 'Hindi') {
  const sampleMap = {
    meera: `Namaste! I am Meera, your warm primary teacher in ${languageName}.`,
    arjun: `Hello! I am Arjun, your interactive learning mentor in ${languageName}.`,
    kavya: `Greetings! I am Kavya, your village story narrator in ${languageName}.`,
    ravi: `Hey there! I am Ravi, your energetic activity guide in ${languageName}.`
  };

  const text = sampleMap[personaId] || sampleMap.meera;
  speak({ text, langCode, languageName, personaId, rate: 1.0 });
}

export function testLanguageVoice(langCode) {
  const config = DEMO_TEST_PHRASES[langCode] || DEMO_TEST_PHRASES['hi-IN'];
  speak({
    text: config.text,
    langCode: langCode,
    languageName: config.langName,
    lessonId: 'test'
  });
}
