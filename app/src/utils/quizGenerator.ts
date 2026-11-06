import { BucketWord, QuizConfig, QuizQuestion, QuestionType, QuizOrderMode } from '../types/bucket';
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

/**
 * Difficulty ranks for staged mode:
 * Recognition -> Audio/Pinyin -> Context Cloze -> Active Production
 */
const TYPE_DIFFICULTY_RANK: Record<QuestionType, number> = {
  zh_to_vn: 1,
  zh_to_hanviet: 2,
  zh_to_pinyin: 3,
  pinyin_to_zh: 4,
  vn_to_zh: 5,
  listening_choice: 6,
  fill_blank: 7,
  hanzi_typing: 8,
  sentence_typing: 9
};

/**
 * Factory helper: Create a single quiz question for a specific word and question type
 */
export function createSingleQuestion(
  word: BucketWord,
  type: QuestionType,
  allWordsPool: BucketWord[],
  id: string,
  repeatIndex = 1,
  totalRepeats = 1,
  isRetry = false
): QuizQuestion {
  switch (type) {
    case 'vn_to_zh': {
      const distractors = getDistractors(allWordsPool, word, w => `${w.hanzi} (${w.pinyin})`, 3);
      const correct = `${word.hanzi} (${word.pinyin})`;
      const options = shuffleArray([correct, ...distractors]);

      return {
        id,
        type: 'vn_to_zh',
        word,
        prompt: 'Từ tiếng Trung nào có nghĩa là:',
        subPrompt: `👉 "${word.meaning}"`,
        options,
        correctAnswer: correct,
        explanation: `Chữ Hán: ${word.hanzi} • Pinyin: ${word.pinyin} mang nghĩa: "${word.meaning}"`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'zh_to_vn': {
      const distractors = getDistractors(allWordsPool, word, w => w.meaning, 3);
      const correct = word.meaning;
      const options = shuffleArray([correct, ...distractors]);

      return {
        id,
        type: 'zh_to_vn',
        word,
        prompt: 'Chữ Hán sau đây có nghĩa là gì?',
        subPrompt: `${word.hanzi}`,
        options,
        correctAnswer: correct,
        explanation: `"${word.hanzi}" (${word.pinyin}) nghĩa là: ${word.meaning}.`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'zh_to_pinyin': {
      const distractors = getDistractors(allWordsPool, word, w => w.pinyin, 3);
      const correct = word.pinyin;
      const options = shuffleArray([correct, ...distractors]);

      return {
        id,
        type: 'zh_to_pinyin',
        word,
        prompt: 'Phiên âm Pinyin chuẩn của chữ Hán này là gì?',
        subPrompt: `${word.hanzi}`,
        options,
        correctAnswer: correct,
        explanation: `Chữ Hán "${word.hanzi}" (${word.meaning}) có phiên âm Pinyin là: "${word.pinyin}".`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'pinyin_to_zh': {
      const distractors = getDistractors(allWordsPool, word, w => `${w.hanzi} (${w.meaning})`, 3);
      const correct = `${word.hanzi} (${word.meaning})`;
      const options = shuffleArray([correct, ...distractors]);

      return {
        id,
        type: 'pinyin_to_zh',
        word,
        prompt: `Chữ Hán nào có phiên âm Pinyin là: "${word.pinyin}"?`,
        subPrompt: `🔤 Pinyin: ${word.pinyin}`,
        options,
        correctAnswer: correct,
        explanation: `Phiên âm "${word.pinyin}" tương ứng với chữ Hán: ${word.hanzi} (Nghĩa: ${word.meaning}).`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'zh_to_hanviet': {
      const hanVietTarget = word.hanViet || word.meaning;
      const distractors = getDistractors(
        allWordsPool.filter(w => !!w.hanViet && w.hanViet !== word.hanViet),
        word,
        w => w.hanViet || w.meaning,
        3
      );
      const correct = hanVietTarget;
      const options = shuffleArray([correct, ...distractors]);

      return {
        id,
        type: 'zh_to_hanviet',
        word,
        prompt: `Âm Hán Việt của chữ "${word.hanzi}" là gì?`,
        subPrompt: `${word.hanzi} (${word.meaning})`,
        options,
        correctAnswer: correct,
        explanation: `Chữ Hán "${word.hanzi}" (${word.pinyin}) có âm Hán Việt là: "${hanVietTarget}" (Nghĩa: ${word.meaning}).`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'fill_blank': {
      let cloze = '';
      let clozePinyin = '';
      let meaning = word.exampleMeaning || word.meaning;

      if (word.exampleHanzi && word.exampleHanzi.includes(word.hanzi)) {
        cloze = word.exampleHanzi.replace(word.hanzi, ' [ _____ ] ');
        clozePinyin = word.examplePinyin ? word.examplePinyin.replace(word.pinyin, ' [ _____ ] ') : '';
      } else {
        cloze = `我想学 [ _____ ] 。`;
        clozePinyin = `Wǒ xiǎng xué [ _____ ] .`;
        meaning = `Tôi muốn học ${word.meaning}.`;
      }

      const distractors = getDistractors(allWordsPool, word, w => `${w.hanzi} (${w.pinyin})`, 3);
      const correct = `${word.hanzi} (${word.pinyin})`;
      const options = shuffleArray([correct, ...distractors]);

      return {
        id,
        type: 'fill_blank',
        word,
        prompt: 'Điền từ vựng thích hợp vào chỗ trống trong câu:',
        clozeSentence: cloze,
        clozePinyin,
        clozeMeaning: meaning,
        options,
        correctAnswer: correct,
        explanation: `Câu hoàn chỉnh: "${word.exampleHanzi || (word.hanzi + ' - ' + word.meaning)}" (${meaning})`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'hanzi_typing': {
      return {
        id,
        type: 'hanzi_typing',
        word,
        prompt: 'Gõ chữ Hán tương ứng bằng bộ gõ IME:',
        subPrompt: `Ý nghĩa: "${word.meaning}"`,
        correctAnswer: word.hanzi,
        explanation: `Chữ Hán cần gõ: ${word.hanzi} (Phiên âm: ${word.pinyin}).`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'sentence_typing': {
      let sentenceHanzi = '';
      let sentencePinyin = '';
      let sentenceMeaning = '';

      if (word.exampleHanzi && word.exampleHanzi.trim()) {
        sentenceHanzi = word.exampleHanzi.trim();
        sentencePinyin = word.examplePinyin ? word.examplePinyin.trim() : '';
        sentenceMeaning = word.exampleMeaning ? word.exampleMeaning.trim() : word.meaning;
      } else {
        sentenceHanzi = `我想学${word.hanzi}。`;
        sentencePinyin = `Wǒ xiǎng xué ${word.pinyin}.`;
        sentenceMeaning = `Tôi muốn học ${word.meaning}.`;
      }

      return {
        id,
        type: 'sentence_typing',
        word,
        prompt: `Dịch và viết câu tiếng Trung chứa từ "${word.hanzi}" (${word.meaning}):`,
        subPrompt: `Dịch nghĩa câu: "${sentenceMeaning}"`,
        clozeSentence: sentenceHanzi,
        clozePinyin: sentencePinyin,
        clozeMeaning: sentenceMeaning,
        correctAnswer: sentenceHanzi,
        explanation: `Câu tiếng Trung chính xác: "${sentenceHanzi}" (${sentencePinyin}) — Dịch nghĩa: "${sentenceMeaning}"`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }

    case 'listening_choice': {
      const distractors = getDistractors(allWordsPool, word, w => `${w.hanzi} (${w.pinyin})`, 3);
      const correct = `${word.hanzi} (${word.pinyin})`;
      const options = shuffleArray([correct, ...distractors]);

      return {
        id,
        type: 'listening_choice',
        word,
        prompt: 'Bấm nghe phát âm chuẩn và chọn chữ Hán chính xác:',
        subPrompt: '🔊 Bấm vào nút loa để nghe lại nếu cần',
        options,
        correctAnswer: correct,
        explanation: `Phát âm: "${word.pinyin}" tương ứng với chữ Hán: ${word.hanzi} (${word.meaning}).`,
        repeatIndex,
        totalRepeatsForWord: totalRepeats,
        isRetry
      };
    }
  }
}

/**
 * Robust Spaced Shuffler:
 * Uses max-heap frequency balancing and border-swapping to guarantee
 * that questions from the SAME word NEVER appear consecutively,
 * while keeping random variety across questions and words.
 */
export function spacedShuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  if (questions.length <= 1) return questions;

  const pool = [...questions];
  const uniqueWords = Array.from(new Set(pool.map(q => q.word.hanzi)));
  if (uniqueWords.length <= 1) {
    return shuffleArray(pool);
  }

  // Group questions by word
  const questionsByWord = new Map<string, QuizQuestion[]>();
  uniqueWords.forEach(w => questionsByWord.set(w, []));
  pool.forEach(q => questionsByWord.get(q.word.hanzi)!.push(q));

  // Shuffle individual questions within each word group so question types appear in varied order
  uniqueWords.forEach(w => {
    questionsByWord.set(w, shuffleArray(questionsByWord.get(w)!));
  });

  const result: QuizQuestion[] = [];
  let lastWord: string | null = null;

  while (pool.length > 0) {
    const availableWords = uniqueWords.filter(w => {
      const list = questionsByWord.get(w);
      return list && list.length > 0;
    });

    if (availableWords.length === 0) break;

    // Filter words that are NOT the immediate previous word
    let validWords = availableWords.filter(w => w !== lastWord);
    if (validWords.length === 0) {
      validWords = availableWords;
    }

    // Sort validWords by remaining count descending (Highest remaining first to avoid end-trapping)
    validWords.sort((a, b) => {
      return questionsByWord.get(b)!.length - questionsByWord.get(a)!.length;
    });

    const maxCount = questionsByWord.get(validWords[0])!.length;
    // Collect all candidates tied for top remaining count
    const topCandidates = validWords.filter(w => questionsByWord.get(w)!.length === maxCount);

    // Pick one randomly among top candidates
    const chosenWord = topCandidates[Math.floor(Math.random() * topCandidates.length)];
    const chosenQuestion = questionsByWord.get(chosenWord)!.shift()!;

    // Remove from pool
    const pIdx = pool.findIndex(item => item.id === chosenQuestion.id);
    if (pIdx !== -1) pool.splice(pIdx, 1);

    result.push(chosenQuestion);
    lastWord = chosenWord;
  }

  // Post-pass safety: resolve any accidental collision by swapping with a safe distant slot
  for (let i = 1; i < result.length; i++) {
    if (result[i].word.hanzi === result[i - 1].word.hanzi) {
      for (let j = 0; j < result.length; j++) {
        if (
          j !== i &&
          j !== i - 1 &&
          result[j].word.hanzi !== result[i].word.hanzi &&
          (j === 0 || result[j - 1].word.hanzi !== result[i].word.hanzi) &&
          (j === result.length - 1 || result[j + 1].word.hanzi !== result[i].word.hanzi)
        ) {
          const temp = result[i];
          result[i] = result[j];
          result[j] = temp;
          break;
        }
      }
    }
  }

  return result;
}

/**
 * Generate a complete practice quiz with customizable repeats per word and sequencing
 */
export function generateQuiz(bucketWords: BucketWord[], config: QuizConfig): QuizQuestion[] {
  if (!bucketWords || bucketWords.length === 0) return [];

  const allWordsPool = getAllAvailableWords();
  const enabledTypes = config.enabledTypes.length > 0
    ? config.enabledTypes
    : (['vn_to_zh', 'zh_to_vn'] as QuestionType[]);

  // Base list of target words
  let targetWords = [...bucketWords];
  if (config.shuffle) {
    targetWords = shuffleArray(targetWords);
  }

  // How many times / question types to repeat each word
  // Each repetition for a word will use a DIFFERENT question type!
  const repeatsPerWord = config.repeatsPerWord ?? -1;
  const numRepeats = repeatsPerWord === -1
    ? enabledTypes.length
    : Math.max(1, Math.min(repeatsPerWord, enabledTypes.length));

  const allWordQuestions: QuizQuestion[] = [];

  targetWords.forEach((word, wordIndex) => {
    // For this specific word, select `numRepeats` DISTINCT question types (NO DUPLICATE TYPES!)
    let chosenTypes: QuestionType[] = [];
    if (numRepeats >= enabledTypes.length) {
      chosenTypes = [...enabledTypes];
    } else {
      // Rotate types across words so different words get different starting types
      chosenTypes = Array.from({ length: numRepeats }, (_, r) => {
        return enabledTypes[(wordIndex + r) % enabledTypes.length];
      });
    }

    chosenTypes.forEach((type, roundIndex) => {
      const qId = `q_w${wordIndex}_r${roundIndex}_${type}_${Date.now()}_${Math.random()}`;
      const question = createSingleQuestion(
        word,
        type,
        allWordsPool,
        qId,
        roundIndex + 1,
        chosenTypes.length,
        false
      );

      allWordQuestions.push(question);
    });
  });

  const orderMode: QuizOrderMode = config.orderMode || 'interleaved';
  let finalQuestions: QuizQuestion[] = [];

  if (orderMode === 'word_by_word') {
    finalQuestions = allWordQuestions;
  } else if (orderMode === 'staged') {
    // Stage-based: group by difficulty rank
    finalQuestions = [...allWordQuestions].sort((a, b) => {
      const rankA = TYPE_DIFFICULTY_RANK[a.type] || 99;
      const rankB = TYPE_DIFFICULTY_RANK[b.type] || 99;
      return rankA - rankB;
    });
    if (config.shuffle) {
      // Within each stage, use spaced shuffle to avoid adjacent same words
      const grouped: Record<number, QuizQuestion[]> = {};
      finalQuestions.forEach(q => {
        const r = TYPE_DIFFICULTY_RANK[q.type] || 99;
        if (!grouped[r]) grouped[r] = [];
        grouped[r].push(q);
      });
      finalQuestions = Object.keys(grouped)
        .sort((a, b) => Number(a) - Number(b))
        .flatMap(k => spacedShuffleQuestions(grouped[Number(k)]));
    }
  } else {
    // 'interleaved' / default:
    // ALWAYS use spacedShuffleQuestions to guarantee:
    // 1. Random ordering
    // 2. Questions of the same word are spaced out as far as possible
    // 3. NEVER two questions of the same word consecutively!
    finalQuestions = spacedShuffleQuestions(allWordQuestions);
  }

  // Limit total question count if requested and valid
  if (config.questionCount > 0 && config.questionCount < finalQuestions.length) {
    finalQuestions = finalQuestions.slice(0, config.questionCount);
  }

  return finalQuestions;
}
