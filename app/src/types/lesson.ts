export interface InitialItem {
  pinyin: string;
  speakChar: string;
  vnTip?: string;
  aspirated: boolean;
  detail?: string;
  readAs?: string;
  badge?: string;
  mouthTip?: string;
  posture?: string;
  samplePinyin?: string;
}

export interface InitialGroup {
  groupTitle: string;
  groupDesc: string;
  items: InitialItem[];
}

export interface FinalItem {
  pinyin: string;
  speakChar: string;
  vnTip: string;
  detail?: string;
  drills?: any[];
  fullForm?: string;
  warning?: string;
  isCritical?: boolean;
}

export interface FinalGroup {
  groupTitle: string;
  items: FinalItem[];
}

export interface PracticeSyllable {
  pinyin: string;
  hanzi: string;
  meaning?: string;
  note?: string;
  vn?: string;
  tip?: string;
}

export interface ToneContour {
  toneNumber: number; // 1, 2, 3, 3.5, 4
  name: string;
  mark: string;
  pitchCode: string;
  desc: string;
  exampleHanzi: string;
  examplePinyin: string;
  meaning: string;
}

export interface ToneRule {
  ruleNum: number;
  title: string;
  formula: string;
  desc: string;
  examples: {
    hanzi: string;
    writtenPinyin: string;
    readPinyin: string;
    meaning: string;
  }[];
}

export interface StrokeItem {
  name: string;
  symbol: string;
  direction: string;
  tip: string;
  svgPath: string;
}

export interface StrokeRule {
  ruleNum: number;
  title: string;
  desc: string;
  examples: {
    hanzi: string;
    pinyin: string;
    hv: string;
    meaning: string;
  }[];
}

export interface Radical {
  char?: string;
  r?: string;
  name: string;
  desc?: string;
  meaning?: string;
}

export interface VocabItem {
  id: number;
  hanzi: string;
  pinyin: string;
  hanViet: string;
  type: string;
  meaning: string;
  radicals: Radical[];
  mnemonic: string;
  exampleHanzi: string;
  examplePinyin: string;
  exampleMeaning: string;
  singleChar?: string;
  timestamp?: string;
}

export interface DialogueLine {
  speaker: string;
  hanzi: string;
  pinyin: string;
  vn: string;
  note: string;
}

export interface DialogueScenario {
  title: string;
  lines: DialogueLine[];
}

export interface QuizQuestion {
  q: string;
  speakWord: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LessonData {
  id: number;
  title: string;
  pinyinTitle: string;
  hanziTitle: string;
  videoDesc: string;
  videoUrl: string;
  initialsGroups: InitialGroup[];
  finalsGroups: FinalGroup[];
  practiceSyllables: PracticeSyllable[];
  toneContours: ToneContour[];
  toneRules: ToneRule[];
  strokes: StrokeItem[];
  strokeRules: StrokeRule[];
  vocab: VocabItem[];
  dialogues: DialogueScenario[];
  quiz: QuizQuestion[];
}
