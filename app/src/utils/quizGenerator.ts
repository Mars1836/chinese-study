import { BucketWord, QuizConfig, QuizQuestion, QuestionType } from '../types/bucket';
import { getAllAvailableWords } from '../data/allVocabPool';

/**
 * Standard array shuffle (Fisher-Yates)
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get distinct distractors for a word from the pool
 */
function getDistractors<T>(
  pool: BucketWord[],
  target: BucketWord,
  getter: (w: BucketWord) => T,
  count = 3
): T[] {
  const targetVal = getter(target);
  const candidates: T[] = [];
  const seen = new Set<T>();
  seen.add(targetVal);

  const shuffledPool = shuffleArray(pool);

  for (const item of shuffledPool) {
    const val = getter(item);
    if (val && !seen.has(val)) {
      seen.add(val);
      candidates.push(val);
      if (candidates.length >= count) break;
    }
  }

  return candidates;
}

export function generateQuiz(bucketWords: BucketWord[], config: QuizConfig): QuizQuestion[] {
  if (!bucketWords || bucketWords.length === 0) return [];

  const allWordsPool = getAllAvailableWords();
  const enabledTypes = config.enabledTypes.length > 0
    ? config.enabledTypes
    : (['vn_to_zh', 'zh_to_vn'] as QuestionType[]);

  // Determine question pool
  let targetWords = [...bucketWords];
  if (config.shuffle) {
    targetWords = shuffleArray(targetWords);
  }

  // Limit question count if requested
  const limit = config.questionCount > 0
    ? Math.min(config.questionCount, targetWords.length)
    : targetWords.length;

  const selectedWords = targetWords.slice(0, limit);
  const questions: QuizQuestion[] = [];

  selectedWords.forEach((word, index) => {
    // Distribute question types evenly or randomly across selected words
    const typeIndex = index % enabledTypes.length;
    const type = enabledTypes[typeIndex];

    switch (type) {
      case 'vn_to_zh': {
        const distractors = getDistractors(allWordsPool, word, w => `${w.hanzi} (${w.pinyin})`, 3);
        const correct = `${word.hanzi} (${word.pinyin})`;
        const options = shuffleArray([correct, ...distractors]);

        questions.push({
          id: `q_${index}_vn_to_zh`,
          type: 'vn_to_zh',
          word,
          prompt: 'Từ tiếng Trung nào có nghĩa là:',
          subPrompt: `👉 "${word.meaning}"`,
          options,
          correctAnswer: correct,
          explanation: `Chữ Hán: ${word.hanzi} • Pinyin: ${word.pinyin} mang nghĩa: "${word.meaning}"`
        });
        break;
      }

      case 'zh_to_vn': {
        const distractors = getDistractors(allWordsPool, word, w => w.meaning, 3);
        const correct = word.meaning;
        const options = shuffleArray([correct, ...distractors]);

        questions.push({
          id: `q_${index}_zh_to_vn`,
          type: 'zh_to_vn',
          word,
          prompt: 'Chữ Hán sau đây có nghĩa là gì?',
          subPrompt: `${word.hanzi}`,
          options,
          correctAnswer: correct,
          explanation: `"${word.hanzi}" (${word.pinyin}) nghĩa là: ${word.meaning}.`
        });
        break;
      }

      case 'fill_blank': {
        // Construct cloze sentence
        let cloze = '';
        let meaning = word.exampleMeaning || word.meaning;

        if (word.exampleHanzi && word.exampleHanzi.includes(word.hanzi)) {
          cloze = word.exampleHanzi.replace(word.hanzi, ' [ _____ ] ');
        } else {
          // Fallback meaningful template
          cloze = `我想学 [ _____ ] 。`;
          meaning = `Tôi muốn học ${word.meaning}.`;
        }

        const distractors = getDistractors(allWordsPool, word, w => w.hanzi, 3);
        const correct = word.hanzi;
        const options = shuffleArray([correct, ...distractors]);

        questions.push({
          id: `q_${index}_fill_blank`,
          type: 'fill_blank',
          word,
          prompt: 'Điền từ vựng thích hợp vào chỗ trống trong câu:',
          clozeSentence: cloze,
          clozeMeaning: meaning,
          options,
          correctAnswer: correct,
          explanation: `Câu hoàn chỉnh: "${word.exampleHanzi || (word.hanzi + ' - ' + word.meaning)}" (${meaning})`
        });
        break;
      }

      case 'hanzi_typing': {
        questions.push({
          id: `q_${index}_hanzi_typing`,
          type: 'hanzi_typing',
          word,
          prompt: 'Gõ chữ Hán tương ứng bằng bộ gõ IME:',
          subPrompt: `Ý nghĩa: "${word.meaning}"`,
          correctAnswer: word.hanzi,
          explanation: `Chữ Hán cần gõ: ${word.hanzi} (Phiên âm: ${word.pinyin}).`
        });
        break;
      }

      case 'sentence_typing': {
        // Target sentence from word's existing example sentence or contextual template
        let sentenceHanzi = '';
        let sentencePinyin = '';
        let sentenceMeaning = '';

        if (word.exampleHanzi && word.exampleHanzi.trim()) {
          sentenceHanzi = word.exampleHanzi.trim();
          sentencePinyin = word.examplePinyin ? word.examplePinyin.trim() : '';
          sentenceMeaning = word.exampleMeaning ? word.exampleMeaning.trim() : word.meaning;
        } else {
          // Meaningful contextual fallback sentence with this vocabulary
          sentenceHanzi = `我想学${word.hanzi}。`;
          sentencePinyin = `Wǒ xiǎng xué ${word.pinyin}.`;
          sentenceMeaning = `Tôi muốn học ${word.meaning}.`;
        }

        questions.push({
          id: `q_${index}_sentence_typing`,
          type: 'sentence_typing',
          word,
          prompt: `Dịch và viết câu tiếng Trung chứa từ "${word.hanzi}" (${word.meaning}):`,
          subPrompt: `Dịch nghĩa câu: "${sentenceMeaning}"`,
          clozeSentence: sentenceHanzi,
          clozePinyin: sentencePinyin,
          clozeMeaning: sentenceMeaning,
          correctAnswer: sentenceHanzi,
          explanation: `Câu tiếng Trung chính xác: "${sentenceHanzi}" (${sentencePinyin}) — Dịch nghĩa: "${sentenceMeaning}"`
        });
        break;
      }

      case 'listening_choice': {
        const distractors = getDistractors(allWordsPool, word, w => w.hanzi, 3);
        const correct = word.hanzi;
        const options = shuffleArray([correct, ...distractors]);

        questions.push({
          id: `q_${index}_listening_choice`,
          type: 'listening_choice',
          word,
          prompt: 'Bấm nghe phát âm chuẩn và chọn chữ Hán chính xác:',
          subPrompt: '🔊 Bấm vào nút loa để nghe lại nếu cần',
          options,
          correctAnswer: correct,
          explanation: `Phát âm: "${word.pinyin}" tương ứng với chữ Hán: ${word.hanzi} (${word.meaning}).`
        });
        break;
      }
    }
  });

  return config.shuffle ? shuffleArray(questions) : questions;
}
