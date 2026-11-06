export interface PinyinExample {
  hanzi: string;
  pinyin: string;
  meaning: string;
  tone?: number;
}

export interface MasterInitial {
  id: string;
  pinyin: string;
  ipa: string;
  speakChar: string;
  vietnameseTip: string;
  detail: string;
  mouthPosture: string;
  isAspirated: boolean;
  category: 'môi' | 'răng-môi' | 'đầu lưỡi giữa' | 'cuống lưỡi' | 'mặt lưỡi' | 'đầu lưỡi trước' | 'đầu lưỡi sau (uốn lưỡi)' | 'bán nguyên âm';
  badge?: string;
  note?: string;
  examples: PinyinExample[];
}

export interface MasterFinal {
  id: string;
  pinyin: string;
  ipa: string;
  speakChar: string;
  vietnameseTip: string;
  detail: string;
  category: 'đơn' | 'kép' | 'mũi trước' | 'mũi sau' | 'đặc biệt';
  shortForm?: string; // e.g. iu for iou, ui for uei, un for uen
  standalone?: string; // e.g. yi, wu, yu, ya, wa...
  spellingNote?: string;
  badge?: string;
  examples: PinyinExample[];
}

export interface PinyinRule {
  id: string;
  ruleNumber: number;
  title: string;
  mnemonic: string;
  summary: string;
  content: string;
  formula?: string;
  importance: 'cực kỳ quan trọng' | 'quan trọng' | 'nâng cao';
  examples: {
    before?: string;
    written: string;
    spoken: string;
    hanzi?: string;
    meaning?: string;
    note?: string;
  }[];
}

export interface MinimalPair {
  id: string;
  title: string;
  contrastDesc: string;
  item1: {
    symbol: string;
    type: string;
    howToSay: string;
    example: PinyinExample;
  };
  item2: {
    symbol: string;
    type: string;
    howToSay: string;
    example: PinyinExample;
  };
  distinctionTip: string;
}

export interface PinyinMatrixRow {
  initial: string;
  initialType: string;
  finals: { [finalName: string]: string | null }; // syllable or null if invalid in Mandarin
}
