import { VocabItem } from './lesson';

export interface ThematicWord {
  id: number;
  hanzi: string;
  pinyin: string;
  hanViet: string;
  meaning: string;
  type: string;
  writingGuide: string;
  exampleSentence: string;
  examplePinyin: string;
  exampleVn: string;
}

export interface ThematicGrammarExample {
  hanzi: string;
  pinyin: string;
  meaning: string;
  breakdown?: string;
}

export interface ThematicGrammar {
  id: number;
  title: string;
  formula: string;
  explanation: string;
  usageNotes?: string[];
  examples: ThematicGrammarExample[];
}

export interface ThematicSentence {
  id: number;
  hanzi: string;
  pinyin: string;
  meaning: string;
  difficulty?: 'Cơ bản' | 'Trung cấp' | 'Nâng cao';
  tip?: string;
}

export interface ThematicTopic {
  id: string;
  title: string;
  chineseTitle: string;
  pinyinTitle: string;
  iconName: string;
  badge: string;
  color: string;
  desc: string;
  words: ThematicWord[];
  grammarPoints: ThematicGrammar[];
  sampleSentences: ThematicSentence[];
}

export interface PlaylistSection {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  lessonIds: number[];
}
