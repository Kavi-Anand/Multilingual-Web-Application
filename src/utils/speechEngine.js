// Multi-Engine Text-to-Speech (TTS) Wrapper using ttsService
import { speak, stopSpeech, findNativeVoiceForLanguage } from '../services/ttsService';

export function initVoices(onVoicesLoaded) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const load = () => {
      const voices = window.speechSynthesis.getVoices();
      if (onVoicesLoaded) onVoicesLoaded(voices);
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }
}

export function getAvailableVoicePersonas(targetLangCode = 'ta-IN') {
  const nativeVoice = findNativeVoiceForLanguage(targetLangCode);
  if (nativeVoice) {
    return [
      { id: nativeVoice.name, label: `${nativeVoice.name} (Device Native Voice)`, voiceObj: nativeVoice, lang: nativeVoice.lang }
    ];
  }
  return [
    { id: 'meera', label: 'Meera (Warm Primary Teacher)', gender: 'female' },
    { id: 'arjun', label: 'Arjun (Friendly Mentor)', gender: 'male' },
    { id: 'kavya', label: 'Kavya (Storyteller)', gender: 'female' }
  ];
}

export function playVernacularSpeech({
  text,
  langCode = 'ta-IN',
  languageName = 'Tamil',
  rate = 1.0,
  personaId = 'meera'
}) {
  speak({ text, langCode, languageName, rate, personaId });
}

export function stopVernacularSpeech() {
  stopSpeech();
}
