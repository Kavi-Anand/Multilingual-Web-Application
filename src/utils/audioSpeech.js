// Multi-Engine Guaranteed Spoken Audio Engine with DOM Audio Node + WebSpeech

/**
 * Main Speak Function
 */
export function speakText({ text, langCode = 'ta-IN', voiceProfile = 'vaani', onStart, onEnd, onError }) {
  if (!text || !text.trim()) return;

  // Stop any active audio
  stopSpeech();

  const shortLang = langCode.split('-')[0] || 'ta';
  const cleanText = text.substring(0, 200);

  // Strategy 1: DOM Audio Player Element (Bypasses background throttling)
  let domAudio = document.getElementById('vidyavaani-global-audio');
  if (!domAudio) {
    domAudio = document.createElement('audio');
    domAudio.id = 'vidyavaani-global-audio';
    domAudio.style.display = 'none';
    document.body.appendChild(domAudio);
  }

  // Audio Stream URL (Google GTX CORS-unblocked stream)
  const gtxUrl = `https://translate.google.com/translate_tts?client=gtx&ie=UTF-8&tl=${shortLang}&q=${encodeURIComponent(cleanText)}`;
  
  domAudio.src = gtxUrl;

  if (voiceProfile === 'amma') {
    domAudio.playbackRate = 0.85;
  } else if (voiceProfile === 'chhotu') {
    domAudio.playbackRate = 1.15;
  } else {
    domAudio.playbackRate = 1.0;
  }

  domAudio.onplay = () => {
    if (onStart) onStart();
  };

  domAudio.onended = () => {
    if (onEnd) onEnd();
  };

  domAudio.onerror = (err) => {
    console.warn('DOM Audio element GTX stream failed, switching to Secondary Source', err);
    trySecondaryAudioStream({ text: cleanText, shortLang, voiceProfile, onStart, onEnd, onError });
  };

  const playPromise = domAudio.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.warn('DOM Audio play promise rejected, trying WebSpeech API', err);
      tryWebSpeechFallback({ text: cleanText, shortLang, voiceProfile, onStart, onEnd, onError });
    });
  }
}

/**
 * Secondary Audio Stream Source (Youdao / Open TTS Proxy)
 */
function trySecondaryAudioStream({ text, shortLang, voiceProfile, onStart, onEnd, onError }) {
  const domAudio = document.getElementById('vidyavaani-global-audio');
  if (!domAudio) return tryWebSpeechFallback({ text, shortLang, voiceProfile, onStart, onEnd, onError });

  const secondaryUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=${shortLang}`;
  domAudio.src = secondaryUrl;

  domAudio.onerror = () => {
    tryWebSpeechFallback({ text, shortLang, voiceProfile, onStart, onEnd, onError });
  };

  const promise = domAudio.play();
  if (promise !== undefined) {
    promise.catch(() => {
      tryWebSpeechFallback({ text, shortLang, voiceProfile, onStart, onEnd, onError });
    });
  }
}

/**
 * WebSpeech API Fallback with explicit voice matching
 */
function tryWebSpeechFallback({ text, shortLang, voiceProfile, onStart, onEnd, onError }) {
  if (!('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const matchingVoice = voices.find((v) => {
      const vLang = v.lang.toLowerCase();
      return vLang.includes(shortLang) || vLang.startsWith(shortLang);
    });

    if (matchingVoice) {
      utterance.voice = matchingVoice;
      utterance.lang = matchingVoice.lang;
    } else {
      utterance.lang = shortLang === 'ta' ? 'ta-IN' : shortLang === 'mr' ? 'mr-IN' : 'hi-IN';
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
 * Test Chime Function to verify speaker audio device is working
 */
export function playTestChime(onStart, onEnd) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume();

    if (onStart) onStart();

    const freqs = [440, 554.37, 659.25, 880];
    let time = ctx.currentTime;

    freqs.forEach((f) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, time);
      gain.gain.setValueAtTime(0.2, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(time);
      osc.stop(time + 0.3);
      time += 0.15;
    });

    setTimeout(() => {
      ctx.close();
      if (onEnd) onEnd();
    }, 800);
  } catch (e) {
    if (onEnd) onEnd();
  }
}

/**
 * Stop any active speech
 */
export function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  const domAudio = document.getElementById('vidyavaani-global-audio');
  if (domAudio) {
    domAudio.pause();
    domAudio.currentTime = 0;
  }
}
