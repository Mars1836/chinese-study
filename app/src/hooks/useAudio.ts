import { useState, useEffect, useRef, useCallback } from 'react';

// Common pinyin to Hanzi mapping so Latin letters can always be pronounced accurately by Chinese TTS
const PINYIN_TO_HANZI: Record<string, string> = {
  // Initials
  b: '波', p: '坡', m: '摸', f: '佛',
  d: '得', t: '特', n: '讷', l: '勒',
  g: '哥', k: '科', h: '喝',
  j: '鸡', q: '七', x: '西',
  zh: '知', ch: '吃', sh: '诗', r: '日',
  z: '资', c: '雌', s: '思',
  y: '衣', w: '乌',
  // Finals
  a: '啊', o: '喔', e: '鹅', i: '衣', u: '乌', 'ü': '迂',
  ai: '哀', ei: '非', ao: '高', ou: '欧',
  an: '安', ang: '昂', en: '恩', eng: '灯', ong: '红',
  ia: '压', iao: '腰', ie: '椰', iu: '优', ian: '烟', iang: '央', in: '音', ing: '英', iong: '用',
  ua: '蛙', uo: '窝', uai: '歪', ui: '威', uan: '弯', un: '温', uang: '汪', ueng: '翁',
  'üe': '约', 'üan': '冤', 'ün': '晕', er: '儿',
  zi: '资', ci: '雌', si: '思', zhi: '知', chi: '吃', shi: '诗', ri: '日',
  yi: '衣', wu: '乌', yu: '迂',
};

// Phonetic fallback map
export const phoneticMap: Record<string, { vn: string; tone: number }> = {
  '波': { vn: 'pua', tone: 1 },
  '坡': { vn: 'pua', tone: 1 },
  '摸': { vn: 'mua', tone: 1 },
  '佛': { vn: 'phua', tone: 2 },
  '得': { vn: 'tưa', tone: 1 },
  '特': { vn: 'thưa', tone: 4 },
  '讷': { vn: 'nưa', tone: 4 },
  '勒': { vn: 'lưa', tone: 4 },
  '哥': { vn: 'cưa', tone: 1 },
  '科': { vn: 'khưa', tone: 1 },
  '喝': { vn: 'hưa', tone: 1 },
  '啊': { vn: 'a', tone: 1 },
  '喔': { vn: 'ô', tone: 1 },
  '鹅': { vn: 'ưa', tone: 2 },
  '衣': { vn: 'i', tone: 1 },
  '乌': { vn: 'u', tone: 1 },
  '迂': { vn: 'uy', tone: 1 },
  '你': { vn: 'nỉ', tone: 3 },
  '好': { vn: 'hảo', tone: 3 },
  '你好': { vn: 'ní hảo', tone: 2 },
  '很好': { vn: 'hén hảo', tone: 2 },
  '很大': { vn: 'hẩn tạ', tone: 3.5 },
  '不大': { vn: 'pú tạ', tone: 2 },
  '不': { vn: 'pù', tone: 4 },
  '大': { vn: 'tạ', tone: 4 },
  '忙': { vn: 'máng', tone: 2 },
  '吗': { vn: 'ma', tone: 1 },
  '很': { vn: 'hẩn', tone: 3 },
  '他': { vn: 'tha', tone: 1 },
  '她': { vn: 'tha', tone: 1 },
};

export function useAudio() {
  const [chineseVoice, setChineseVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [rate, setRate] = useState<number>(1.0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [currentlySpeakingText, setCurrentlySpeakingText] = useState<string>('');
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Voices with support for selecting user-preferred voice
  useEffect(() => {
    const updateVoices = () => {
      if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        if (!voices || voices.length === 0) return;

        // Chinese voices list
        const zhVoices = voices.filter(v =>
          v.lang.toLowerCase().startsWith('zh') ||
          v.lang.toLowerCase().includes('cmn') ||
          v.name.toLowerCase().includes('chinese') ||
          v.name.toLowerCase().includes('mandarin') ||
          v.name.toLowerCase().includes('huihui') ||
          v.name.toLowerCase().includes('yaoyao') ||
          v.name.toLowerCase().includes('kangkang')
        );

        // Sort so zh-CN and localService come first
        zhVoices.sort((a, b) => {
          if (a.lang === 'zh-CN' && b.lang !== 'zh-CN') return -1;
          if (b.lang === 'zh-CN' && a.lang !== 'zh-CN') return 1;
          if (a.localService && !b.localService) return -1;
          if (!a.localService && b.localService) return 1;
          return a.name.localeCompare(b.name);
        });

        setAvailableVoices(zhVoices);

        // Check if user previously selected a preferred voice in localStorage
        const savedURI = localStorage.getItem('chinese_tts_voice_uri');
        const matchedSaved = savedURI ? zhVoices.find(v => v.voiceURI === savedURI) : null;

        if (matchedSaved) {
          setChineseVoice(matchedSaved);
        } else if (zhVoices.length > 0) {
          setChineseVoice(zhVoices[0]);
        }
      }
    };

    updateVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  // Function to change current voice and save preference
  const selectVoice = useCallback((voiceURI: string) => {
    const target = availableVoices.find(v => v.voiceURI === voiceURI);
    if (target) {
      setChineseVoice(target);
      try {
        localStorage.setItem('chinese_tts_voice_uri', voiceURI);
      } catch {
        // ignore
      }

      // Audio preview of newly selected voice
      setTimeout(() => {
        try {
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance('你好！');
            u.voice = target;
            u.lang = target.lang || 'zh-CN';
            u.rate = rate;
            window.speechSynthesis.speak(u);
          }
        } catch {
          // ignore
        }
      }, 50);
    }
  }, [availableVoices, rate]);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Instant tactile click chime (Ensures user ALWAYS hears an immediate sound when clicking)
  const playClickFeedback = useCallback((freq = 620, dur = 0.06) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur);
    } catch {
      // Ignore audio context errors
    }
  }, [getAudioContext]);

  // Web Audio Synth Pitch
  const playPitchContour = useCallback((tone: number) => {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    const dur = rate === 1.0 ? 0.55 : 0.85;

    osc.type = 'sawtooth';
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, now);
    filter.Q.setValueAtTime(3, now);

    if (tone === 1) { // 55
      osc.frequency.setValueAtTime(320, now);
    } else if (tone === 2) { // 35
      osc.frequency.setValueAtTime(210, now);
      osc.frequency.exponentialRampToValueAtTime(330, now + dur);
    } else if (tone === 3) { // 214
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.linearRampToValueAtTime(140, now + dur * 0.4);
      osc.frequency.exponentialRampToValueAtTime(285, now + dur);
    } else if (tone === 3.5) { // 21
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.linearRampToValueAtTime(140, now + dur * 0.75);
    } else if (tone === 4) { // 51
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(145, now + dur * 0.7);
    }

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + dur);
  }, [getAudioContext, rate]);

  // Main Speech Function with Dual-Engine Fallback
  const speak = useCallback((text?: string, tone = 1) => {
    if (!text || typeof text !== 'string') return;
    
    // Play instant tactile sound so user gets 100% immediate audible feedback on click
    playClickFeedback(620, 0.06);
    
    // Resolve to pronounceable Hanzi if passed Latin pinyin
    const cleanText = text.trim();
    const spokenText = PINYIN_TO_HANZI[cleanText.toLowerCase()] || cleanText;

    setIsSpeaking(true);
    setCurrentlySpeakingText(spokenText);

    // Cancel any stuck utterance
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();
    }

    let speechStarted = false;

    // Safety timeout: if TTS doesn't start producing sound within 450ms (common with Chrome Cloud TTS lag),
    // immediately trigger Web Audio pitch so user NEVER experiences silence!
    const fallbackTimer = setTimeout(() => {
      if (!speechStarted) {
        playPitchContour(tone);
      }
    }, 450);

    if ('speechSynthesis' in window && chineseVoice) {
      setTimeout(() => {
        try {
          const u = new SpeechSynthesisUtterance(spokenText);
          (window as unknown as { __speechUtterance: SpeechSynthesisUtterance }).__speechUtterance = u;
          u.voice = chineseVoice;
          u.lang = 'zh-CN';
          u.rate = rate;

          u.onstart = () => {
            speechStarted = true;
            clearTimeout(fallbackTimer);
          };

          u.onend = () => {
            clearTimeout(fallbackTimer);
            setIsSpeaking(false);
            setCurrentlySpeakingText('');
          };

          u.onerror = () => {
            clearTimeout(fallbackTimer);
            setIsSpeaking(false);
            setCurrentlySpeakingText('');
            playPitchContour(tone);
          };

          window.speechSynthesis.speak(u);
        } catch {
          clearTimeout(fallbackTimer);
          playPitchContour(tone);
          setIsSpeaking(false);
        }
      }, 35);
    } else {
      clearTimeout(fallbackTimer);
      playPitchContour(tone);
      setTimeout(() => {
        setIsSpeaking(false);
        setCurrentlySpeakingText('');
      }, 500);
    }
  }, [playClickFeedback, playPitchContour, chineseVoice, rate]);

  // Speaker chime test
  const testSpeaker = useCallback(() => {
    const ctx = getAudioContext();
    if (ctx) {
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.12;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
      });
    }
    setTimeout(() => {
      speak('你好', 2);
    }, 360);
  }, [getAudioContext, speak]);

  const toggleRate = () => {
    setRate(prev => (prev === 1.0 ? 0.65 : 1.0));
  };

  return {
    chineseVoice,
    availableVoices,
    selectVoice,
    selectedVoiceURI: chineseVoice?.voiceURI || '',
    rate,
    toggleRate,
    isSpeaking,
    currentlySpeakingText,
    speak,
    playPitchContour,
    testSpeaker,
    hasChineseVoice: !!chineseVoice,
    chineseVoiceName: chineseVoice?.name || ''
  };
}