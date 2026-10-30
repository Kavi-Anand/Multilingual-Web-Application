// Audio System Bridge to ttsService
import {
  speak,
  stopSpeech,
  pauseSpeech,
  resumeSpeech,
  initTTSService,
  previewPersonaVoice as previewPersona
} from '../services/ttsService';

export function initAudioSystem(onLoaded) {
  initTTSService();
}

export function playLayeredSpeech({
  text,
  langCode = 'ta-IN',
  languageName = 'Tamil',
  personaId = 'meera',
  rate = 1.0,
  lessonId = 'm1'
}) {
  speak({ text, langCode, languageName, personaId, rate, lessonId });
}

export function stopLayeredSpeech() {
  stopSpeech();
}

export function previewPersonaVoice(personaId, langCode = 'ta-IN', onStart, onEnd) {
  previewPersona(personaId, langCode);
}
