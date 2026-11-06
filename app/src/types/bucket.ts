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
  | 'zh_to_pinyin'       // Chữ Hán -> Chọn Pinyin & thanh điệu đúng
  | 'pinyin_to_zh'       // Pinyin -> Chọn chữ Hán tương ứng
  | 'zh_to_hanviet'      // Chữ Hán -> Chọn âm Hán Việt
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

export type QuizOrderMode = 'interleaved' | 'staged' | 'word_by_word';

export interface QuizConfig {
  enabledTypes: QuestionType[];
  repeatsPerWord?: number; // e.g. 1, 2, 3, or -1 for all selected enabledTypes
  questionCount: number; // e.g. 5, 10, 15, or -1 for all generated
  shuffle: boolean;
  orderMode?: QuizOrderMode; // 'interleaved' (trộn đan xen) | 'staged' (theo vòng dạng bài) | 'word_by_word' (từng chữ một)
  retryWrongQuestions?: boolean; // Tự động đưa câu sai về cuối bài thi
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
  repeatIndex?: number; // Lần ôn thứ mấy của chữ này (1, 2, 3...)
  totalRepeatsForWord?: number; // Tổng số dạng câu hỏi của chữ này
  isRetry?: boolean; // Được tạo lại do làm sai
}

export interface QuizResultItem {
  question: QuizQuestion;
  userAnswer: string;
  isCorrect: boolean;
}
