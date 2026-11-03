export interface BucketWord {
  id: string; // unique identifier
  hanzi: string;
  pinyin: string;
  hanViet?: string;
  meaning: string;
  type?: string;
  source: string; // e.g. "Bài 1: Xin Chào" or "Chuyên đề: 1. Số Đếm & Tiền Tệ"
  exampleHanzi?: string;
  examplePinyin?: string;
  exampleMeaning?: string;
  addedAt: number;
}

export type QuestionType =
  | 'vn_to_zh'           // Tiếng Việt -> Tiếng Trung (Chọn chữ Hán)
  | 'zh_to_vn'           // Tiếng Trung -> Tiếng Việt (Chọn nghĩa)
  | 'fill_blank'         // Điền từ còn thiếu vào câu
  | 'hanzi_typing'       // Luyện gõ từ vựng chữ Hán theo nghĩa
  | 'sentence_typing'    // Viết / Luyện gõ cả câu tiếng Trung chứa từ vựng
  | 'listening_choice';  // Nghe phát âm -> Chọn chữ Hán

export interface QuestionTypeOption {
  type: QuestionType;
  title: string;
  desc: string;
  badge: string;
  iconName: string;
}

export interface QuizConfig {
  enabledTypes: QuestionType[];
  questionCount: number; // e.g. 5, 10, 15, or -1 for all
  shuffle: boolean;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  word: BucketWord;
  prompt: string;
  subPrompt?: string;
  clozeSentence?: string;
  clozePinyin?: string;
  clozeMeaning?: string;
  options?: string[]; // for multiple choice
  correctAnswer: string;
  explanation: string;
}

export interface QuizResultItem {
  question: QuizQuestion;
  userAnswer: string;
  isCorrect: boolean;
}
