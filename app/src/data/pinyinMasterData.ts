import { MasterInitial, MasterFinal, PinyinRule, MinimalPair } from '../types/pinyinMaster';

// ==========================================
// 1. TẤT CẢ THANH MẪU (21 THANH MẪU + 2 BÁN NGUYÊN ÂM = 23)
// ==========================================
export const masterInitials: MasterInitial[] = [
  // --- NHÓM 1: ÂM HAI MÔI & ÂM RĂNG - MÔI ---
  {
    id: 'b',
    pinyin: 'b',
    ipa: '[p]',
    speakChar: '波',
    vietnameseTip: 'Đọc giống "p" trong tiếng Việt (không bật hơi)',
    detail: 'Hai môi khép chặt lại ngăn luồng không khí, sau đó mở ra nhẹ nhàng để luồng hơi thoát ra tự nhiên. KHÔNG bật hơi mạnh như tiếng Việt.',
    mouthPosture: 'Hai môi mím nhẹ rồi mở ra, thanh quản không rung.',
    isAspirated: false,
    category: 'môi',
    badge: 'Âm không bật hơi',
    note: 'Khi đọc tên âm tiết đơn lẻ thường ghép với vần "o" thành "bō" (pua).',
    examples: [
      { hanzi: '八', pinyin: 'bā', meaning: 'Số 8' },
      { hanzi: '爸爸', pinyin: 'bàba', meaning: 'Bố, cha' },
      { hanzi: '白', pinyin: 'bái', meaning: 'Màu trắng' }
    ]
  },
  {
    id: 'p',
    pinyin: 'p',
    ipa: '[pʰ]',
    speakChar: '坡',
    vietnameseTip: 'Đọc giống "p" nhưng BẬT HƠI thật mạnh (pù-h-ua)',
    detail: 'Vị trí khẩu hình hoàn toàn giống chữ "b", nhưng hai môi mím chặt hơn rồi bật mạnh luồng hơi từ phổi ra làm bay tờ giấy trước miệng.',
    mouthPosture: 'Hai môi mím chặt, nén hơi rồi bật bung mạnh luồng khí ra ngoài.',
    isAspirated: true,
    category: 'môi',
    badge: '🔥 Bật hơi mạnh (Bay giấy)',
    note: 'Đây là âm bật hơi kinh điển đối lập trực tiếp với âm "b". Đặt tờ giấy trước miệng để kiểm tra độ bật.',
    examples: [
      { hanzi: '怕', pinyin: 'pà', meaning: 'Sợ hãi' },
      { hanzi: '朋友', pinyin: 'péngyou', meaning: 'Bạn bè' },
      { hanzi: '票', pinyin: 'piào', meaning: 'Vé, phiếu' }
    ]
  },
  {
    id: 'm',
    pinyin: 'm',
    ipa: '[m]',
    speakChar: '摸',
    vietnameseTip: 'Đọc giống hệt chữ "m" trong tiếng Việt',
    detail: 'Hai môi khép lại, ngạc mềm hạ xuống để luồng hơi thoát qua khoang mũi, thanh đới rung tạo âm mũi.',
    mouthPosture: 'Hai môi khép, âm vang trong khoang mũi.',
    isAspirated: false,
    category: 'môi',
    badge: 'Âm mũi',
    note: 'Rất dễ phát âm, hoàn toàn tương đồng tiếng Việt.',
    examples: [
      { hanzi: '妈妈', pinyin: 'māma', meaning: 'Mẹ' },
      { hanzi: '忙', pinyin: 'máng', meaning: 'Bận rộn' },
      { hanzi: '买', pinyin: 'mǎi', meaning: 'Mua' }
    ]
  },
  {
    id: 'f',
    pinyin: 'f',
    ipa: '[f]',
    speakChar: '佛',
    vietnameseTip: 'Đọc giống chữ "ph" trong tiếng Việt',
    detail: 'Răng cửa hàm trên chạm nhẹ vào lòng môi dưới, đẩy luồng khí ma sát qua khe giữa răng và môi thoát ra.',
    mouthPosture: 'Răng trên cắn nhẹ môi dưới, luồng hơi ma sát thoát ra ngoài.',
    isAspirated: false,
    category: 'răng-môi',
    badge: 'Âm ma sát răng - môi',
    note: 'Khi đọc tên âm ghép với "o" đọc là "fó" (phua).',
    examples: [
      { hanzi: '飞', pinyin: 'fēi', meaning: 'Bay' },
      { hanzi: '饭', pinyin: 'fàn', meaning: 'Cơm, bữa ăn' },
      { hanzi: '风', pinyin: 'fēng', meaning: 'Gió' }
    ]
  },

  // --- NHÓM 2: ÂM ĐẦU LƯỠI GIỮA (d, t, n, l) ---
  {
    id: 'd',
    pinyin: 'd',
    ipa: '[t]',
    speakChar: '得',
    vietnameseTip: 'Đọc giống chữ "t" trong tiếng Việt (KHÔNG đọc là "đ")',
    detail: 'Đầu lưỡi chạm vào chân răng trên / lợi hàm trên, chặn luồng khí lại rồi đột ngột hạ lưỡi xuống để khí thoát ra. Tuyệt đối KHÔNG đọc như chữ "đ" của tiếng Việt.',
    mouthPosture: 'Đầu lưỡi dán vào lợi hàm trên rồi hạ nhanh, không bật hơi.',
    isAspirated: false,
    category: 'đầu lưỡi giữa',
    badge: 'Đọc là "t" (Không phải đ)',
    note: 'Khi đọc tên âm thường ghép với vần "e" thành "dé" (tưa).',
    examples: [
      { hanzi: '大', pinyin: 'dà', meaning: 'To, lớn' },
      { hanzi: '对', pinyin: 'duì', meaning: 'Đúng, đối với' },
      { hanzi: '弟弟', pinyin: 'dìdi', meaning: 'Em trai' }
    ]
  },
  {
    id: 't',
    pinyin: 't',
    ipa: '[tʰ]',
    speakChar: '特',
    vietnameseTip: 'Đọc giống chữ "th" nhưng BẬT HƠI mạnh (thưa)',
    detail: 'Vị trí đặt lưỡi y hệt chữ "d", nhưng khi hạ đầu lưỡi xuống thì tống mạnh luồng khí bị nén ra ngoài tạo tiếng bật giòn tan.',
    mouthPosture: 'Đầu lưỡi chạm lợi hàm trên rồi giật lùi, bật mạnh luồng khí ra.',
    isAspirated: true,
    category: 'đầu lưỡi giữa',
    badge: '🔥 Bật hơi mạnh (tương đương th)',
    note: 'Đối lập với "d". Phải có luồng hơi mạnh tống ra miệng.',
    examples: [
      { hanzi: '他', pinyin: 'tā', meaning: 'Anh ấy, ông ấy' },
      { hanzi: '天', pinyin: 'tiān', meaning: 'Trời, ngày' },
      { hanzi: '太', pinyin: 'tài', meaning: 'Quá, lắm' }
    ]
  },
  {
    id: 'n',
    pinyin: 'n',
    ipa: '[n]',
    speakChar: '讷',
    vietnameseTip: 'Đọc giống chữ "n" trong tiếng Việt',
    detail: 'Đầu lưỡi áp sát vào lợi trên, luồng hơi thoát ra qua đường khoang mũi, thanh đới rung động.',
    mouthPosture: 'Đầu lưỡi chặn lợi trên, âm thoát qua mũi tự nhiên.',
    isAspirated: false,
    category: 'đầu lưỡi giữa',
    badge: 'Âm mũi',
    note: 'Khi ghép với vần "ü" vẫn giữ nguyên 2 dấu chấm: nü (女 nǚ).',
    examples: [
      { hanzi: '你', pinyin: 'nǐ', meaning: 'Bạn, anh, chị' },
      { hanzi: '难', pinyin: 'nán', meaning: 'Khó khăn' },
      { hanzi: '那', pinyin: 'nà', meaning: 'Kia, đó' }
    ]
  },
  {
    id: 'l',
    pinyin: 'l',
    ipa: '[l]',
    speakChar: '勒',
    vietnameseTip: 'Đọc giống chữ "l" trong tiếng Việt',
    detail: 'Đầu lưỡi đặt vào lợi hàm trên, luồng hơi lách qua hai bên cạnh của lưỡi thoát ra ngoài.',
    mouthPosture: 'Đầu lưỡi chạm lợi trên, hơi thoát hai bên mép lưỡi.',
    isAspirated: false,
    category: 'đầu lưỡi giữa',
    badge: 'Âm biên (bên cạnh lưỡi)',
    note: 'Khi ghép với vần "ü" vẫn giữ nguyên 2 dấu chấm: lü (绿 lǜ).',
    examples: [
      { hanzi: '六', pinyin: 'liù', meaning: 'Số 6' },
      { hanzi: '老', pinyin: 'lǎo', meaning: 'Già, cũ' },
      { hanzi: '冷', pinyin: 'lěng', meaning: 'Lạnh' }
    ]
  },

  // --- NHÓM 3: ÂM CUỐNG LƯỠI / GỐC LƯỠI (g, k, h) ---
  {
    id: 'g',
    pinyin: 'g',
    ipa: '[k]',
    speakChar: '哥',
    vietnameseTip: 'Đọc giống chữ "c / k" trong tiếng Việt (cưa)',
    detail: 'Gốc lưỡi nâng cao chạm ngạc mềm (phần thịt mềm phía trong vòm họng), chặn hơi lại rồi mở ra nhẹ nhàng, KHÔNG bật hơi.',
    mouthPosture: 'Gốc lưỡi chặn cuống họng rồi hạ xuống nhẹ, không bật hơi.',
    isAspirated: false,
    category: 'cuống lưỡi',
    badge: 'Đọc là "c/k" (Không phải g)',
    note: 'Tuyệt đối không đọc là "gờ" tiếng Việt! Đọc là "cưa" (gē).',
    examples: [
      { hanzi: '哥哥', pinyin: 'gēge', meaning: 'Anh trai' },
      { hanzi: '高', pinyin: 'gāo', meaning: 'Cao' },
      { hanzi: '国', pinyin: 'guó', meaning: 'Đất nước' }
    ]
  },
  {
    id: 'k',
    pinyin: 'k',
    ipa: '[kʰ]',
    speakChar: '科',
    vietnameseTip: 'Đọc giống "kh" nhưng BẬT HƠI từ cuống họng',
    detail: 'Khẩu hình giống hệt chữ "g", nhưng khi mở gốc lưỡi thì bật tống mạnh luồng hơi từ cuống họng ra ngoài.',
    mouthPosture: 'Gốc lưỡi chặn ngạc mềm rồi bật mạnh luồng khí nóng ra.',
    isAspirated: true,
    category: 'cuống lưỡi',
    badge: '🔥 Bật hơi cuống họng (khưa)',
    note: 'Âm bật hơi mạnh từ sâu trong cuống họng.',
    examples: [
      { hanzi: '看', pinyin: 'kàn', meaning: 'Nhìn, xem' },
      { hanzi: '开', pinyin: 'kāi', meaning: 'Mở' },
      { hanzi: '口', pinyin: 'kǒu', meaning: 'Miệng' }
    ]
  },
  {
    id: 'h',
    pinyin: 'h',
    ipa: '[x]',
    speakChar: '喝',
    vietnameseTip: 'Đọc trung gian giữa chữ "h" và chữ "kh" nhẹ',
    detail: 'Gốc lưỡi nâng gần chạm ngạc mềm nhưng không chạm hẳn, để luồng hơi cọ xát ma sát nhẹ qua khe hẹp thoát ra. Nặng hơn "h" tiếng Việt nhưng nhẹ hơn "kh".',
    mouthPosture: 'Gốc lưỡi nâng nhẹ tạo khe hẹp ma sát ở vòm họng mềm.',
    isAspirated: false,
    category: 'cuống lưỡi',
    badge: 'Âm xát cuống họng',
    note: 'Khi nói nhanh người bản xứ đọc rất tự nhiên gần như "h" nhưng có độ ma sát họng.',
    examples: [
      { hanzi: '好', pinyin: 'hǎo', meaning: 'Tốt, đẹp' },
      { hanzi: '喝', pinyin: 'hē', meaning: 'Uống' },
      { hanzi: '很', pinyin: 'hěn', meaning: 'Rất' }
    ]
  },

  // --- NHÓM 4: ÂM MẶT LƯỠI (j, q, x) ---
  {
    id: 'j',
    pinyin: 'j',
    ipa: '[tɕ]',
    speakChar: '鸡',
    vietnameseTip: 'Đọc giống chữ "ch" tiếng Việt (mặt lưỡi áp ngạc cứng)',
    detail: 'Đầu lưỡi hạ xuống chân răng dưới, mặt lưỡi dâng lên ép chặt vào ngạc cứng (vòm họng trên), đẩy nhẹ hơi thoát ra, KHÔNG bật hơi.',
    mouthPosture: 'Khóe miệng kéo sang hai bên như cười, mặt lưỡi ép ngạc cứng.',
    isAspirated: false,
    category: 'mặt lưỡi',
    badge: 'Âm mặt lưỡi (Không bật hơi)',
    note: 'Chỉ ghép với vần "i" và "ü" (khi ghép với ü thì ü bỏ 2 chấm: ju, jue, jun).',
    examples: [
      { hanzi: '家', pinyin: 'jiā', meaning: 'Nhà, gia đình' },
      { hanzi: '九', pinyin: 'jiǔ', meaning: 'Số 9' },
      { hanzi: '叫', pinyin: 'jiào', meaning: 'Tên là, gọi là' }
    ]
  },
  {
    id: 'q',
    pinyin: 'q',
    ipa: '[tɕʰ]',
    speakChar: '七',
    vietnameseTip: 'Đọc giống "ch" nhưng BẬT HƠI sắc bén (bắn gió)',
    detail: 'Khẩu hình giống chữ "j", nhưng khi hạ mặt lưỡi xuống thì bật tống mạnh luồng khí ép qua kẽ răng ra ngoài, âm sắc bén.',
    mouthPosture: 'Mặt lưỡi ép ngạc cứng rồi bật mạnh tia khí sắc bén ra ngoài.',
    isAspirated: true,
    category: 'mặt lưỡi',
    badge: '🔥 Bật hơi sắc bén (Bay giấy)',
    note: 'Chỉ ghép với vần "i" và "ü" (khi ghép với ü thì ü bỏ 2 chấm: qu, que, qun).',
    examples: [
      { hanzi: '七', pinyin: 'qī', meaning: 'Số 7' },
      { hanzi: '去', pinyin: 'qù', meaning: 'Đi' },
      { hanzi: '钱', pinyin: 'qián', meaning: 'Tiền bạc' }
    ]
  },
  {
    id: 'x',
    pinyin: 'x',
    ipa: '[ɕ]',
    speakChar: '西',
    vietnameseTip: 'Đọc giống chữ "x" nhẹ của tiếng Việt (xì hơi)',
    detail: 'Đầu lưỡi hạ xuống chân răng dưới, mặt lưỡi nâng lên gần chạm ngạc cứng tạo khe hở hẹp cho luồng hơi ma sát lướt qua.',
    mouthPosture: 'Hai khóe miệng mở sang hai bên, hơi ma sát nhẹ thoát ra.',
    isAspirated: false,
    category: 'mặt lưỡi',
    badge: 'Âm xát mặt lưỡi',
    note: 'Chỉ ghép với vần "i" và "ü" (khi ghép với ü thì ü bỏ 2 chấm: xu, xue, xun).',
    examples: [
      { hanzi: '小', pinyin: 'xiǎo', meaning: 'Nhỏ, bé' },
      { hanzi: '谢', pinyin: 'xiè', meaning: 'Cảm ơn' },
      { hanzi: '想', pinyin: 'xiǎng', meaning: 'Muốn, nhớ, nghĩ' }
    ]
  },

  // --- NHÓM 5: ÂM ĐẦU LƯỠI TRƯỚC (z, c, s) ---
  {
    id: 'z',
    pinyin: 'z',
    ipa: '[ts]',
    speakChar: '资',
    vietnameseTip: 'Đọc giống "chưa" thẳng lưỡi (chữ "i" phát âm là "ư")',
    detail: 'Đầu lưỡi thẳng chạm nhẹ vào mặt sau răng cửa trên, nén hơi rồi hé nhẹ đầu lưỡi để hơi lướt ra, KHÔNG bật hơi.',
    mouthPosture: 'Lưỡi để thẳng tự nhiên, cắn nhẹ hai hàm răng rồi đẩy hơi nhẹ.',
    isAspirated: false,
    category: 'đầu lưỡi trước',
    badge: '⚠️ Chữ "i" đọc là "ư" (zi = zư)',
    note: 'Khi đi với "i" thì i biến âm đọc thành "ư" (zi đọc là zư). Lưỡi thẳng, KHÔNG uốn lưỡi.',
    examples: [
      { hanzi: '字', pinyin: 'zì', meaning: 'Chữ, từ' },
      { hanzi: '在', pinyin: 'zài', meaning: 'Ở, đang' },
      { hanzi: '再见', pinyin: 'zàijiàn', meaning: 'Tạm biệt' }
    ]
  },
  {
    id: 'c',
    pinyin: 'c',
    ipa: '[tsʰ]',
    speakChar: '疵',
    vietnameseTip: 'Đọc giống "x-th" BẬT HƠI xì gió mạnh (chữ "i" đọc là "ư")',
    detail: 'Vị trí lưỡi giống chữ "z", nhưng bật ép luồng hơi mạnh qua kẽ răng tạo âm xì gió bật hơi rất rõ rệt.',
    mouthPosture: 'Đầu lưỡi chạm răng trên, nén hơi rồi bật mạnh xì gió qua kẽ răng.',
    isAspirated: true,
    category: 'đầu lưỡi trước',
    badge: '🔥 Bật hơi xì mạnh (ci = cư)',
    note: 'Rất nhiều học viên phát âm sai âm này. Cần nén hơi và bật xì gió dứt khoát!',
    examples: [
      { hanzi: '词', pinyin: 'cí', meaning: 'Từ vựng' },
      { hanzi: '菜', pinyin: 'cài', meaning: 'Món ăn, rau' },
      { hanzi: '从', pinyin: 'cóng', meaning: 'Từ (nơi nào đó)' }
    ]
  },
  {
    id: 's',
    pinyin: 's',
    ipa: '[s]',
    speakChar: '思',
    vietnameseTip: 'Đọc giống "x" thẳng lưỡi (xưa) (chữ "i" đọc là "ư")',
    detail: 'Đầu lưỡi tiếp cận sát mặt sau răng cửa trên tạo khe hở hẹp, luồng hơi ma sát xì nhẹ qua.',
    mouthPosture: 'Răng khép hờ, đầu lưỡi thẳng sát răng trên, xì hơi nhẹ.',
    isAspirated: false,
    category: 'đầu lưỡi trước',
    badge: '⚠️ Chữ "i" đọc là "ư" (si = sư)',
    note: 'Lưỡi thẳng, không cong. Khi đi với "i" thì si đọc là "sư".',
    examples: [
      { hanzi: '四', pinyin: 'sì', meaning: 'Số 4' },
      { hanzi: '三', pinyin: 'sān', meaning: 'Số 3' },
      { hanzi: '岁', pinyin: 'suì', meaning: 'Tuổi' }
    ]
  },

  // --- NHÓM 6: ÂM ĐẦU LƯỠI SAU / UỐN LƯỠI (zh, ch, sh, r) ---
  {
    id: 'zh',
    pinyin: 'zh',
    ipa: '[ʈʂ]',
    speakChar: '知',
    vietnameseTip: 'Uốn cong đầu lưỡi lên ngạc cứng, đọc giống "tr" (trư)',
    detail: 'Đầu lưỡi uốn cong lên chạm vào ngạc cứng (vòm họng trên phía sau lợi), nén hơi rồi hạ nhẹ lưỡi để hơi lướt ra, KHÔNG bật hơi.',
    mouthPosture: 'Uốn cong đầu lưỡi lên vòm họng trên, môi hơi mở tròn.',
    isAspirated: false,
    category: 'đầu lưỡi sau (uốn lưỡi)',
    badge: '🔄 Uốn lưỡi (zhi = trư)',
    note: 'Chữ "i" đi kèm phát âm là "ư": zhi đọc là "trư". Khác với z (thẳng lưỡi).',
    examples: [
      { hanzi: '中', pinyin: 'zhōng', meaning: 'Ở giữa, Trung Quốc' },
      { hanzi: '这', pinyin: 'zhè', meaning: 'Đây, này' },
      { hanzi: '知道', pinyin: 'zhīdào', meaning: 'Biết, hiểu' }
    ]
  },
  {
    id: 'ch',
    pinyin: 'ch',
    ipa: '[ʈʂʰ]',
    speakChar: '吃',
    vietnameseTip: 'Uốn cong lưỡi + BẬT HƠI mạnh (chư)',
    detail: 'Vị trí uốn lưỡi giống hệt chữ "zh", nhưng bật bung luồng hơi mạnh từ họng thoát qua kẽ lưỡi.',
    mouthPosture: 'Uốn đầu lưỡi chạm vòm họng trên, nén khí rồi bật bung luồng hơi mạnh.',
    isAspirated: true,
    category: 'đầu lưỡi sau (uốn lưỡi)',
    badge: '🔥🔄 Uốn lưỡi + Bật hơi mạnh',
    note: 'Chữ "i" đi kèm phát âm là "ư": chi đọc là "chư" bật hơi. Khác với c (thẳng lưỡi).',
    examples: [
      { hanzi: '吃', pinyin: 'chī', meaning: 'Ăn' },
      { hanzi: '茶', pinyin: 'chá', meaning: 'Trà' },
      { hanzi: '车', pinyin: 'chē', meaning: 'Xe cộ' }
    ]
  },
  {
    id: 'sh',
    pinyin: 'sh',
    ipa: '[ʂ]',
    speakChar: '诗',
    vietnameseTip: 'Uốn cong đầu lưỡi lên ngạc cứng, đọc giống "s" nặng (sư)',
    detail: 'Đầu lưỡi uốn cong lên sát ngạc cứng nhưng không chạm hẳn, để luồng hơi ma sát cuồn cuộn qua vòm miệng thoát ra.',
    mouthPosture: 'Đầu lưỡi uốn cong lên sát ngạc cứng, hơi xát ra dày và trầm.',
    isAspirated: false,
    category: 'đầu lưỡi sau (uốn lưỡi)',
    badge: '🔄 Uốn lưỡi (shi = sư nặng)',
    note: 'Chữ "i" đi kèm phát âm là "ư": shi đọc là "sư" uốn lưỡi. Khác với s (thẳng lưỡi).',
    examples: [
      { hanzi: '是', pinyin: 'shì', meaning: 'Là, đúng' },
      { hanzi: '书', pinyin: 'shū', meaning: 'Sách' },
      { hanzi: '水', pinyin: 'shuǐ', meaning: 'Nước' }
    ]
  },
  {
    id: 'r',
    pinyin: 'r',
    ipa: '[ʐ]',
    speakChar: '日',
    vietnameseTip: 'Uốn cong lưỡi, đọc giữa "r" và "d" có rung nhẹ (rư)',
    detail: 'Vị trí khẩu hình y hệt chữ "sh", nhưng thanh quản RUNG ĐỘNG mạnh tạo âm hữu thanh.',
    mouthPosture: 'Uốn cong đầu lưỡi lên ngạc cứng, dây thanh rung rõ rệt.',
    isAspirated: false,
    category: 'đầu lưỡi sau (uốn lưỡi)',
    badge: '🔄 Uốn lưỡi + Rung thanh quản',
    note: 'Chữ "i" đi kèm phát âm là "ư": ri đọc là "rư". Không rung môi như r tiếng Việt.',
    examples: [
      { hanzi: '人', pinyin: 'rén', meaning: 'Người' },
      { hanzi: '日', pinyin: 'rì', meaning: 'Ngày, mặt trời' },
      { hanzi: '热', pinyin: 'rè', meaning: 'Nóng' }
    ]
  },

  // --- NHÓM 7: BÁN NGUYÊN ÂM / PHỤ ÂM ZERO (y, w) ---
  {
    id: 'y',
    pinyin: 'y',
    ipa: '[j]',
    speakChar: '衣',
    vietnameseTip: 'Bán nguyên âm của "i" (khi i đứng đầu âm tiết độc lập)',
    detail: 'Khi các vần dòng "i" (i, ia, ie, iao, iou, ian, in, iang, ing, iong) đứng đầu âm tiết không có phụ âm đi kèm thì viết thêm "y" hoặc thay "i" bằng "y".',
    mouthPosture: 'Mở rộng khóe miệng như phát âm "i".',
    isAspirated: false,
    category: 'bán nguyên âm',
    badge: 'Bán nguyên âm dòng i',
    note: 'i -> yi, ia -> ya, ie -> ye, iao -> yao, iou -> you, in -> yin, ing -> ying.',
    examples: [
      { hanzi: '一', pinyin: 'yī', meaning: 'Số 1' },
      { hanzi: '月', pinyin: 'yuè', meaning: 'Tháng, mặt trăng' },
      { hanzi: '有', pinyin: 'yǒu', meaning: 'Có' }
    ]
  },
  {
    id: 'w',
    pinyin: 'w',
    ipa: '[w]',
    speakChar: '乌',
    vietnameseTip: 'Bán nguyên âm của "u" (khi u đứng đầu âm tiết độc lập)',
    detail: 'Khi các vần dòng "u" (u, ua, uo, uai, uei, uan, uen, uang, ueng) đứng đầu âm tiết không có phụ âm đi kèm thì viết thêm "w" hoặc thay "u" bằng "w".',
    mouthPosture: 'Môi chu tròn nhỏ về phía trước như phát âm "u".',
    isAspirated: false,
    category: 'bán nguyên âm',
    badge: 'Bán nguyên âm dòng u',
    note: 'u -> wu, ua -> wa, uo -> wo, uai -> wai, uei -> wei, uan -> wan, uen -> wen.',
    examples: [
      { hanzi: '五', pinyin: 'wǔ', meaning: 'Số 5' },
      { hanzi: '我', pinyin: 'wǒ', meaning: 'Tôi, mình' },
      { hanzi: '问', pinyin: 'wèn', meaning: 'Hỏi' }
    ]
  }
];

// ==========================================
// 2. TẤT CẢ VẬN MẪU (36 VẬN MẪU CHUẨN)
// ==========================================
export const masterFinals: MasterFinal[] = [
  // --- NHÓM 1: 6 VẬN MẪU ĐƠN CƠ BẢN ---
  {
    id: 'a',
    pinyin: 'a',
    ipa: '[a]',
    speakChar: '啊',
    vietnameseTip: 'Đọc giống "a" tiếng Việt',
    detail: 'Miệng mở to tự nhiên, lưỡi nằm phẳng ở đáy miệng, phát âm vang và sáng.',
    category: 'đơn',
    badge: 'Nguyên âm đơn',
    examples: [
      { hanzi: '爸', pinyin: 'bà', meaning: 'Bố' },
      { hanzi: '马', pinyin: 'mǎ', meaning: 'Ngựa' }
    ]
  },
  {
    id: 'o',
    pinyin: 'o',
    ipa: '[o]',
    speakChar: '喔',
    vietnameseTip: 'Đọc tròn môi "ô / ua"',
    detail: 'Môi tròn khép vừa, lưỡi hơi lùi về phía sau. Khi đi với b, p, m, f nghe hơi có âm đệm "ua" (bo nghe như pua, po nghe như phua).',
    category: 'đơn',
    badge: 'Nguyên âm đơn',
    examples: [
      { hanzi: '坡', pinyin: 'pō', meaning: 'Dốc' },
      { hanzi: '我', pinyin: 'wǒ', meaning: 'Tôi' }
    ]
  },
  {
    id: 'e',
    pinyin: 'e',
    ipa: '[ɤ]',
    speakChar: '鹅',
    vietnameseTip: 'Đọc giữa "ưa" và "ơ" trong tiếng Việt',
    detail: 'Khẩu hình mở vừa phải, khóe miệng hơi bẹt sang hai bên, lưỡi lùi về sau, phát âm âm thanh trung gian giữa "ưa" và "ơ".',
    category: 'đơn',
    badge: 'Nguyên âm đơn',
    examples: [
      { hanzi: '车', pinyin: 'chē', meaning: 'Xe' },
      { hanzi: '哥', pinyin: 'gē', meaning: 'Anh' }
    ]
  },
  {
    id: 'i',
    pinyin: 'i',
    ipa: '[i] / [ɨ]',
    speakChar: '衣',
    vietnameseTip: 'Có 2 cách đọc: "i" bình thường hoặc "ư" sau 7 âm đầu lưỡi',
    detail: '1) Sau đa số âm: đọc là "i", khóe miệng kéo rộng sang hai bên như mỉm cười.\n2) Sau 7 âm z, c, s, zh, ch, sh, r: đọc là "ư"!',
    category: 'đơn',
    badge: '⚠️ Có 2 cách đọc (i vs ư)',
    standalone: 'yi',
    spellingNote: 'Đi với z, c, s, zh, ch, sh, r đọc là "ư" (zi, ci, si, zhi, chi, shi, ri).',
    examples: [
      { hanzi: '你', pinyin: 'nǐ', meaning: 'Bạn (đọc là i)' },
      { hanzi: '四', pinyin: 'sì', meaning: 'Số 4 (đọc là ư: sư)' },
      { hanzi: '是', pinyin: 'shì', meaning: 'Là (đọc là ư: sư nặng)' }
    ]
  },
  {
    id: 'u',
    pinyin: 'u',
    ipa: '[u]',
    speakChar: '乌',
    vietnameseTip: 'Đọc giống "u" tiếng Việt',
    detail: 'Hai môi chu tròn nhỏ về phía trước, cuống lưỡi nâng cao về phía ngạc mềm.',
    category: 'đơn',
    badge: 'Nguyên âm đơn',
    standalone: 'wu',
    examples: [
      { hanzi: '五', pinyin: 'wǔ', meaning: 'Số 5' },
      { hanzi: '哭', pinyin: 'kū', meaning: 'Khóc' }
    ]
  },
  {
    id: 'ü',
    pinyin: 'ü',
    ipa: '[y]',
    speakChar: '迂',
    vietnameseTip: 'Đọc giống "uy", giữ tròn môi từ đầu đến cuối',
    detail: 'Khẩu hình vị trí lưỡi đặt ở chữ "i" (chân răng dưới), nhưng hai môi chu tròn khép kín như chữ "u" hoặc như huýt sáo. Giữ tròn môi không thay đổi!',
    category: 'đơn',
    badge: '👑 Tròn môi (Quy tắc bỏ 2 chấm)',
    standalone: 'yu',
    spellingNote: 'Đi với j, q, x, y BẮT BUỘC bỏ 2 chấm viết thành ju, qu, xu, yu. Đi với n, l thì GIỮ NGUYÊN 2 chấm (nü, lü).',
    examples: [
      { hanzi: '绿', pinyin: 'lǜ', meaning: 'Màu xanh lục' },
      { hanzi: '女', pinyin: 'nǚ', meaning: 'Phụ nữ' },
      { hanzi: '去', pinyin: 'qù', meaning: 'Đi (gốc là qü)' }
    ]
  },

  // --- NHÓM 2: 13 VẬN MẪU KÉP ---
  {
    id: 'ai',
    pinyin: 'ai',
    ipa: '[aɪ]',
    speakChar: '哀',
    vietnameseTip: 'Đọc giống "ai" tiếng Việt',
    detail: 'Mở to miệng phát âm "a" rồi trượt nhanh và mượt mà sang âm "i".',
    category: 'kép',
    examples: [{ hanzi: '爱', pinyin: 'ài', meaning: 'Yêu' }, { hanzi: '白', pinyin: 'bái', meaning: 'Trắng' }]
  },
  {
    id: 'ei',
    pinyin: 'ei',
    ipa: '[eɪ]',
    speakChar: '诶',
    vietnameseTip: 'Đọc giữa "ây" và "ê-i"',
    detail: 'Bắt đầu từ âm "e/ê" rồi trượt nhanh sang "i", khóe miệng kéo dài sang hai bên.',
    category: 'kép',
    examples: [{ hanzi: '黑', pinyin: 'hēi', meaning: 'Đen' }, { hanzi: '累', pinyin: 'lèi', meaning: 'Mệt' }]
  },
  {
    id: 'ao',
    pinyin: 'ao',
    ipa: '[aʊ]',
    speakChar: '熬',
    vietnameseTip: 'Đọc giống "ao" tiếng Việt',
    detail: 'Mở rộng miệng phát âm "a" rồi thu tròn môi lại dần về âm "o/u".',
    category: 'kép',
    examples: [{ hanzi: '高', pinyin: 'gāo', meaning: 'Cao' }, { hanzi: '好', pinyin: 'hǎo', meaning: 'Tốt' }]
  },
  {
    id: 'ou',
    pinyin: 'ou',
    ipa: '[oʊ]',
    speakChar: '欧',
    vietnameseTip: 'Đọc giống "âu" tiếng Việt',
    detail: 'Khẩu hình mở tròn môi ở "ô" rồi khép nhỏ dần lại về "u".',
    category: 'kép',
    examples: [{ hanzi: '口', pinyin: 'kǒu', meaning: 'Miệng' }, { hanzi: '走', pinyin: 'zǒu', meaning: 'Đi' }]
  },
  {
    id: 'ia',
    pinyin: 'ia',
    ipa: '[ia]',
    speakChar: '呀',
    vietnameseTip: 'Đọc lướt nhanh từ "i" sang "a" (i-a)',
    detail: 'Bắt đầu từ âm "i" nhẹ rồi lướt nhanh mở rộng miệng sang "a". Đứng một mình viết là ya.',
    category: 'kép',
    standalone: 'ya',
    examples: [{ hanzi: '家', pinyin: 'jiā', meaning: 'Nhà' }, { hanzi: '下', pinyin: 'xià', meaning: 'Dưới' }]
  },
  {
    id: 'ie',
    pinyin: 'ie',
    ipa: '[iɛ]',
    speakChar: '耶',
    vietnameseTip: 'Đọc giống "i-ê" (gần như "iê" trong "tiên")',
    detail: 'Phát âm "i" rồi lướt nhanh sang âm "e" (nghe như ê). Đứng một mình viết là ye.',
    category: 'kép',
    standalone: 'ye',
    examples: [{ hanzi: '写', pinyin: 'xiě', meaning: 'Viết' }, { hanzi: '谢谢', pinyin: 'xièxie', meaning: 'Cảm ơn' }]
  },
  {
    id: 'ua',
    pinyin: 'ua',
    ipa: '[ua]',
    speakChar: '蛙',
    vietnameseTip: 'Đọc giống "oa" tiếng Việt',
    detail: 'Bắt đầu từ âm "u" tròn môi rồi mở to miệng sang "a". Đứng một mình viết là wa.',
    category: 'kép',
    standalone: 'wa',
    examples: [{ hanzi: '花', pinyin: 'huā', meaning: 'Hoa' }, { hanzi: '话', pinyin: 'huà', meaning: 'Lời nói' }]
  },
  {
    id: 'uo',
    pinyin: 'uo',
    ipa: '[uo]',
    speakChar: '窝',
    vietnameseTip: 'Đọc giống "ua / uô" tiếng Việt',
    detail: 'Bắt đầu từ âm "u" rồi lướt sang "o". Đứng một mình viết là wo.',
    category: 'kép',
    standalone: 'wo',
    examples: [{ hanzi: '多', pinyin: 'duō', meaning: 'Nhiều' }, { hanzi: '国', pinyin: 'guó', meaning: 'Nước' }]
  },
  {
    id: 'üe',
    pinyin: 'üe',
    ipa: '[yɛ]',
    speakChar: '约',
    vietnameseTip: 'Đọc "uy-ê" (giữ tròn môi từ âm ü sang ê)',
    detail: 'Bắt đầu từ âm "ü" tròn môi rồi chuyển sang âm "e (ê)". Đứng một mình viết là yue.',
    category: 'kép',
    standalone: 'yue',
    spellingNote: 'Khi đi với j, q, x thì bỏ 2 chấm: jue, que, xue.',
    examples: [{ hanzi: '月', pinyin: 'yuè', meaning: 'Mặt trăng, tháng' }, { hanzi: '雪', pinyin: 'xuě', meaning: 'Tuyết' }]
  },
  {
    id: 'iao',
    pinyin: 'iao',
    ipa: '[iaʊ]',
    speakChar: '腰',
    vietnameseTip: 'Đọc giống "eo / i-ao" tiếng Việt',
    detail: 'Lướt nhanh từ "i" qua "a" rồi thu tròn môi về "o". Đứng một mình viết là yao.',
    category: 'kép',
    standalone: 'yao',
    examples: [{ hanzi: '小', pinyin: 'xiǎo', meaning: 'Nhỏ' }, { hanzi: '叫', pinyin: 'jiào', meaning: 'Kêu, gọi' }]
  },
  {
    id: 'iu',
    pinyin: 'iu (iou)',
    ipa: '[ioʊ]',
    speakChar: '优',
    vietnameseTip: 'Đọc giống "yêu" trong tiếng Việt',
    detail: 'Là dạng VIẾT TẮT của "iou". Bắt đầu từ "i", qua "o" nhẹ rồi về "u". Đứng một mình viết là you.',
    category: 'kép',
    shortForm: 'iou -> iu',
    standalone: 'you',
    badge: 'Viết tắt iou -> iu',
    spellingNote: 'Dấu thanh điệu luôn đánh trên chữ "u": liù, jiǔ, xiù.',
    examples: [{ hanzi: '六', pinyin: 'liù', meaning: 'Số 6' }, { hanzi: '九', pinyin: 'jiǔ', meaning: 'Số 9' }]
  },
  {
    id: 'uai',
    pinyin: 'uai',
    ipa: '[uaɪ]',
    speakChar: '歪',
    vietnameseTip: 'Đọc giống "oai" trong tiếng Việt',
    detail: 'Từ "u" tròn môi lướt qua "a" rồi về "i". Đứng một mình viết là wai.',
    category: 'kép',
    standalone: 'wai',
    examples: [{ hanzi: '快', pinyin: 'kuài', meaning: 'Nhanh' }, { hanzi: '外', pinyin: 'wài', meaning: 'Ngoài' }]
  },
  {
    id: 'ui',
    pinyin: 'ui (uei)',
    ipa: '[ueɪ]',
    speakChar: '威',
    vietnameseTip: 'Đọc giống "uây" trong tiếng Việt',
    detail: 'Là dạng VIẾT TẮT của "uei". Từ "u" qua "e (ê)" nhẹ rồi về "i". Đứng một mình viết là wei.',
    category: 'kép',
    shortForm: 'uei -> ui',
    standalone: 'wei',
    badge: 'Viết tắt uei -> ui',
    spellingNote: 'Dấu thanh điệu luôn đánh trên chữ "i": duì, guì, shuǐ.',
    examples: [{ hanzi: '水', pinyin: 'shuǐ', meaning: 'Nước' }, { hanzi: '对', pinyin: 'duì', meaning: 'Đúng' }]
  },

  // --- NHÓM 3: 8 VẬN MẪU MŨI TRƯỚC (KẾT THÚC BẰNG -N) ---
  {
    id: 'an',
    pinyin: 'an',
    ipa: '[an]',
    speakChar: '安',
    vietnameseTip: 'Đọc giống "an" tiếng Việt',
    detail: 'Phát âm "a" rồi đưa đầu lưỡi chạm vào lợi trên ngăn luồng hơi, âm thoát qua mũi.',
    category: 'mũi trước',
    examples: [{ hanzi: '看', pinyin: 'kàn', meaning: 'Xem' }, { hanzi: '半', pinyin: 'bàn', meaning: 'Một nửa' }]
  },
  {
    id: 'en',
    pinyin: 'en',
    ipa: '[ən]',
    speakChar: '恩',
    vietnameseTip: 'Đọc giống "ân" tiếng Việt',
    detail: 'Phát âm âm "e" nhẹ rồi nâng đầu lưỡi lên chạm lợi trên để hơi thoát qua khoang mũi.',
    category: 'mũi trước',
    examples: [{ hanzi: '很', pinyin: 'hěn', meaning: 'Rất' }, { hanzi: '本', pinyin: 'běn', meaning: 'Quyển' }]
  },
  {
    id: 'in',
    pinyin: 'in',
    ipa: '[in]',
    speakChar: '因',
    vietnameseTip: 'Đọc giống "in" tiếng Việt',
    detail: 'Khóe miệng mở rộng phát âm "i" rồi đưa đầu lưỡi chạm lợi hàm trên.',
    category: 'mũi trước',
    standalone: 'yin',
    examples: [{ hanzi: '心', pinyin: 'xīn', meaning: 'Trái tim' }, { hanzi: '您', pinyin: 'nín', meaning: 'Ngài, ông' }]
  },
  {
    id: 'ün',
    pinyin: 'ün',
    ipa: '[yn]',
    speakChar: '晕',
    vietnameseTip: 'Đọc giống "uyn" (giữ tròn môi)',
    detail: 'Phát âm "ü" tròn môi rồi đưa đầu lưỡi chạm lợi trên, môi vẫn giữ tròn! Đứng một mình viết là yun.',
    category: 'mũi trước',
    standalone: 'yun',
    spellingNote: 'Đi với j, q, x, y bỏ 2 chấm: jun, qun, xun, yun.',
    examples: [{ hanzi: '云', pinyin: 'yún', meaning: 'Mây' }, { hanzi: '裙子', pinyin: 'qúnzi', meaning: 'Váy' }]
  },
  {
    id: 'ian',
    pinyin: 'ian',
    ipa: '[iɛn]',
    speakChar: '烟',
    vietnameseTip: 'Đọc giống "i-en" (nghe như "iên" tiếng Việt)',
    detail: 'Từ "i" lướt qua "e (ê)" rồi đưa lưỡi lên lợi trên kết thúc âm mũi. Đứng một mình viết là yan.',
    category: 'mũi trước',
    standalone: 'yan',
    spellingNote: 'Chú ý chữ a ở đây đọc hơi giống âm "e": i-en (tiān đọc như thi-en).',
    examples: [{ hanzi: '天', pinyin: 'tiān', meaning: 'Trời, ngày' }, { hanzi: '钱', pinyin: 'qián', meaning: 'Tiền' }]
  },
  {
    id: 'uan',
    pinyin: 'uan',
    ipa: '[uan]',
    speakChar: '弯',
    vietnameseTip: 'Đọc giống "oan" trong tiếng Việt',
    detail: 'Bắt đầu từ "u" tròn môi lướt sang "an". Đứng một mình viết là wan.',
    category: 'mũi trước',
    standalone: 'wan',
    examples: [{ hanzi: '关', pinyin: 'guān', meaning: 'Đóng' }, { hanzi: '晚', pinyin: 'wǎn', meaning: 'Muộn, tối' }]
  },
  {
    id: 'un',
    pinyin: 'un (uen)',
    ipa: '[uən]',
    speakChar: '温',
    vietnameseTip: 'Đọc giống "uân" trong tiếng Việt',
    detail: 'Là dạng VIẾT TẮT của "uen". Bắt đầu từ "u" tròn môi lướt qua "en (ân)". Đứng một mình viết là wen.',
    category: 'mũi trước',
    shortForm: 'uen -> un',
    standalone: 'wen',
    badge: 'Viết tắt uen -> un',
    examples: [{ hanzi: '问', pinyin: 'wèn', meaning: 'Hỏi' }, { hanzi: '春', pinyin: 'chūn', meaning: 'Mùa xuân' }]
  },
  {
    id: 'üan',
    pinyin: 'üan',
    ipa: '[yɛn]',
    speakChar: '冤',
    vietnameseTip: 'Đọc giống "uy-en" (giữ tròn môi)',
    detail: 'Từ "ü" tròn môi lướt qua "e" rồi kết thúc âm n. Đứng một mình viết là yuan.',
    category: 'mũi trước',
    standalone: 'yuan',
    spellingNote: 'Đi với j, q, x, y bỏ 2 chấm: juan, quan, xuan, yuan.',
    examples: [{ hanzi: '远', pinyin: 'yuǎn', meaning: 'Xa' }, { hanzi: '元', pinyin: 'yuán', meaning: 'Đồng tiền' }]
  },

  // --- NHÓM 4: 8 VẬN MẪU MŨI SAU (KẾT THÚC BẰNG -NG) ---
  {
    id: 'ang',
    pinyin: 'ang',
    ipa: '[aŋ]',
    speakChar: '昂',
    vietnameseTip: 'Đọc giống "ang" tiếng Việt (khoang miệng mở to vang)',
    detail: 'Mở rộng miệng phát âm "a" rồi nâng gốc lưỡi chạm ngạc mềm, âm vang sâu trong khoang mũi.',
    category: 'mũi sau',
    examples: [{ hanzi: '忙', pinyin: 'máng', meaning: 'Bận' }, { hanzi: '唱', pinyin: 'chàng', meaning: 'Hát' }]
  },
  {
    id: 'eng',
    pinyin: 'eng',
    ipa: '[əŋ]',
    speakChar: '鞥',
    vietnameseTip: 'Đọc giống "âng" trong tiếng Việt',
    detail: 'Phát âm "e" rồi nâng gốc lưỡi chạm ngạc mềm, tạo âm mũi sau trầm ấm.',
    category: 'mũi sau',
    examples: [{ hanzi: '冷', pinyin: 'lěng', meaning: 'Lạnh' }, { hanzi: '等', pinyin: 'děng', meaning: 'Chờ đợi' }]
  },
  {
    id: 'ing',
    pinyin: 'ing',
    ipa: '[iŋ]',
    speakChar: '英',
    vietnameseTip: 'Đọc giống "inh" trong tiếng Việt',
    detail: 'Khóe miệng mở rộng phát âm "i" rồi nâng gốc lưỡi chạm ngạc mềm. Đứng một mình viết là ying.',
    category: 'mũi sau',
    standalone: 'ying',
    examples: [{ hanzi: '听', pinyin: 'tīng', meaning: 'Nghe' }, { hanzi: '星', pinyin: 'xīng', meaning: 'Ngôi sao' }]
  },
  {
    id: 'ong',
    pinyin: 'ong',
    ipa: '[ʊŋ]',
    speakChar: '轰',
    vietnameseTip: 'Đọc giống "ung" nhưng môi mở nhẹ, không phồng má',
    detail: 'Khác tiếng Việt: khi đọc kết thúc môi vẫn hơi mở tròn chứ không ngậm khép miệng lại.',
    category: 'mũi sau',
    examples: [{ hanzi: '红', pinyin: 'hóng', meaning: 'Màu đỏ' }, { hanzi: '中', pinyin: 'zhōng', meaning: 'Trung tâm' }]
  },
  {
    id: 'iang',
    pinyin: 'iang',
    ipa: '[iaŋ]',
    speakChar: '央',
    vietnameseTip: 'Đọc giống "i-ang" tiếng Việt',
    detail: 'Lướt nhanh từ "i" sang "ang". Đứng một mình viết là yang.',
    category: 'mũi sau',
    standalone: 'yang',
    examples: [{ hanzi: '想', pinyin: 'xiǎng', meaning: 'Nghĩ, nhớ' }, { hanzi: '亮', pinyin: 'liàng', meaning: 'Sáng' }]
  },
  {
    id: 'uang',
    pinyin: 'uang',
    ipa: '[uaŋ]',
    speakChar: '汪',
    vietnameseTip: 'Đọc giống "oang" tiếng Việt',
    detail: 'Từ "u" tròn môi lướt nhanh sang "ang". Đứng một mình viết là wang.',
    category: 'mũi sau',
    standalone: 'wang',
    examples: [{ hanzi: '黄', pinyin: 'huáng', meaning: 'Màu vàng' }, { hanzi: '双', pinyin: 'shuāng', meaning: 'Đôi, cặp' }]
  },
  {
    id: 'ueng',
    pinyin: 'ueng',
    ipa: '[uəŋ]',
    speakChar: '翁',
    vietnameseTip: 'Đọc giống "u-âng"',
    detail: 'Vận mẫu này không ghép với thanh mẫu nào mà chỉ đứng một mình, viết là weng.',
    category: 'mũi sau',
    standalone: 'weng',
    badge: 'Chỉ đứng độc lập (weng)',
    examples: [{ hanzi: '老翁', pinyin: 'wēng', meaning: 'Ông lão' }]
  },
  {
    id: 'iong',
    pinyin: 'iong',
    ipa: '[yʊŋ]',
    speakChar: '雍',
    vietnameseTip: 'Đọc giống "i-ung" (tròn môi)',
    detail: 'Bắt đầu từ "i/ü" tròn môi rồi lướt sang "ong". Đứng một mình viết là yong.',
    category: 'mũi sau',
    standalone: 'yong',
    examples: [{ hanzi: '穷', pinyin: 'qióng', meaning: 'Nghèo khó' }, { hanzi: '用', pinyin: 'yòng', meaning: 'Dùng' }]
  },

  // --- NHÓM 5: 1 VẬN MẪU UỐN LƯỠI ĐẶC BIỆT ---
  {
    id: 'er',
    pinyin: 'er',
    ipa: '[ɑɻ]',
    speakChar: '儿',
    vietnameseTip: 'Đọc "ơ" rồi uốn cong đầu lưỡi lên (ơ-r)',
    detail: 'Là vận mẫu đặc biệt tự tạo thành một âm tiết độc lập (không ghép với thanh mẫu nào) hoặc ghép vào đuôi từ khác tạo hiện tượng cuốn lưỡi (nhi hóa).',
    category: 'đặc biệt',
    badge: '🔄 Vận mẫu uốn lưỡi đặc thù',
    examples: [
      { hanzi: '二', pinyin: 'èr', meaning: 'Số 2' },
      { hanzi: '儿子', pinyin: 'érzi', meaning: 'Con trai' },
      { hanzi: '耳朵', pinyin: 'ěrduo', meaning: 'Cái tai' }
    ]
  }
];

// ==========================================
// 3. 9 QUY TẮC & CHÚ THÍCH CỐT LÕI (KHÔNG THỂ QUÊN)
// ==========================================
export const masterPinyinRules: PinyinRule[] = [
  {
    id: 'rule-u-dots',
    ruleNumber: 1,
    title: 'Quy tắc bỏ 2 dấu chấm trên đầu chữ ü (ü ➔ u)',
    importance: 'cực kỳ quan trọng',
    mnemonic: 'Anh j, q, x, y dắt bé ü đi chơi, gặp cảnh sát bắt tháo kính (bỏ 2 chấm)!',
    summary: 'Khi ü đi với j, q, x, y thì BẮT BUỘC bỏ 2 chấm, nhưng phát âm VẪN PHẢI TRÒN MÔI.',
    formula: 'j, q, x, y + ü ➔ ju, qu, xu, yu (Đọc là uy, KHÔNG đọc là u)',
    content: `Trong tiếng Trung, 4 phụ âm mặt lưỡi j, q, x và bán nguyên âm y KHÔNG BAO GIỜ ghép với vần "u" (u thông thường). Vì vậy, khi chúng ghép với vần "ü" (tròn môi), người ta quy ước lược bỏ 2 dấu chấm phía trên để viết cho gọn mà không sợ bị nhầm lẫn.\n\n⚠️ Lưu ý đặc biệt: Khi đi với hai âm "n" và "l", BẮT BUỘC PHẢI GIỮ NGUYÊN 2 dấu chấm (nü, lü) để phân biệt với "nu" và "lu".`,
    examples: [
      { written: 'j + ü ➔ ju', spoken: '[tɕy] (đọc như chu-y)', hanzi: '句', meaning: 'Câu' },
      { written: 'q + ü ➔ qu', spoken: '[tɕʰy] (đọc như chu-y bật hơi)', hanzi: '去', meaning: 'Đi' },
      { written: 'x + ü ➔ xu', spoken: '[ɕy] (đọc như xu-y)', hanzi: '需', meaning: 'Cần thiết' },
      { written: 'y + ü ➔ yu', spoken: '[y] (đọc như uy tròn môi)', hanzi: '鱼', meaning: 'Con cá' },
      { written: 'n + ü ➔ nǚ', spoken: 'Giữ nguyên 2 chấm!', hanzi: '女', meaning: 'Phụ nữ (khác với nǔ 努)' },
      { written: 'l + ü ➔ lǜ', spoken: 'Giữ nguyên 2 chấm!', hanzi: '绿', meaning: 'Xanh lục (khác với lù 路)' }
    ]
  },
  {
    id: 'rule-i-pronunciation',
    ruleNumber: 2,
    title: 'Quy tắc 2 cách đọc của nguyên âm "i" ("i" vs "ư")',
    importance: 'cực kỳ quan trọng',
    mnemonic: '7 vị anh hùng đầu lưỡi (z, c, s & zh, ch, sh, r) biến "i" thành "ư"!',
    summary: 'Chữ "i" đứng sau 7 âm đầu lưỡi đọc là "Ư". Đứng sau các âm còn lại đọc là "I".',
    formula: '{z, c, s, zh, ch, sh, r} + i ➔ ĐỌC LÀ "Ư"',
    content: `Chữ cái "i" trong Pinyin có 2 giá trị ngữ âm hoàn toàn khác nhau:\n1. Khi đi sau 7 thanh mẫu gồm: 3 âm đầu lưỡi trước (z, c, s) và 4 âm đầu lưỡi sau uốn lưỡi (zh, ch, sh, r) ➔ "i" được phát âm là "Ư" (vị trí lưỡi giữ nguyên vị trí của thanh mẫu đó).\n2. Khi đi sau tất cả các thanh mẫu khác (b, p, m, d, t, n, l, j, q, x...) ➔ "i" đọc là "I" bình thường (kéo rộng khóe miệng).`,
    examples: [
      { written: 'zi, ci, si', spoken: 'zư, cư, sư (thẳng lưỡi)', hanzi: '字, 词, 四', meaning: 'Chữ, từ, số 4' },
      { written: 'zhi, chi, shi, ri', spoken: 'trư, chư, sư, rư (uốn cong lưỡi)', hanzi: '只, 吃, 是, 日', meaning: 'Chỉ, ăn, là, ngày' },
      { written: 'bi, pi, mi, di, ti, ni, li', spoken: 'pi, phi, mi, ti, thi, ni, li (đọc là i)', hanzi: '笔, 皮, 米, 地, 体, 你, 李', meaning: 'Bút, da, gạo, đất, thể, bạn, lý' },
      { written: 'ji, qi, xi', spoken: 'chi, chi (bật hơi), xi (đọc là i)', hanzi: '鸡, 七, 西', meaning: 'Gà, số 7, phía tây' }
    ]
  },
  {
    id: 'rule-abbreviations',
    ruleNumber: 3,
    title: 'Quy tắc viết tắt (Rút gọn) Pinyin khi ghép âm',
    importance: 'cực kỳ quan trọng',
    mnemonic: 'iou rút thành iu, uei rút thành ui, uen rút thành un!',
    summary: 'Khi có thanh mẫu đứng trước, 3 vận mẫu iou, uei, uen bắt buộc viết tắt thành iu, ui, un.',
    formula: 'iou ➔ iu  |  uei ➔ ui  |  uen ➔ un',
    content: `Khi 3 vận mẫu iou, uei, uen kết hợp với một phụ âm đầu, chữ cái nguyên âm ở giữa bị lược bỏ trên chữ viết:\n- iou viết thành iu (nhưng vẫn đọc là iêu/yêu).\n- uei viết thành ui (nhưng vẫn đọc là uây).\n- uen viết thành un (nhưng vẫn đọc là uân).\n\n🎯 Vị trí đánh dấu thanh điệu:\n- Trong "iu", dấu luôn đánh trên "u" (liù, jiǔ).\n- Trong "ui", dấu luôn đánh trên "i" (duì, guì, shuǐ).\n- Trong "un", dấu luôn đánh trên "u" (lùn, chūn).`,
    examples: [
      { before: 'l + iou', written: 'liù (viết tắt)', spoken: 'Đọc là li-êu (Số 6)', hanzi: '六', meaning: 'Số 6' },
      { before: 'j + iou', written: 'jiǔ (viết tắt)', spoken: 'Đọc là chi-êu (Số 9)', hanzi: '九', meaning: 'Số 9' },
      { before: 'd + uei', written: 'duì (viết tắt)', spoken: 'Đọc là tu-ây (Đúng)', hanzi: '对', meaning: 'Đúng, đối với' },
      { before: 'g + uei', written: 'guì (viết tắt)', spoken: 'Đọc là cu-ây (Quý, đắt)', hanzi: '贵', meaning: 'Quý, đắt' },
      { before: 'ch + uen', written: 'chūn (viết tắt)', spoken: 'Đọc là chu-ân (Mùa xuân)', hanzi: '春', meaning: 'Mùa xuân' },
      { before: 'l + uen', written: 'lùn (viết tắt)', spoken: 'Đọc là lu-ân (Luận bàn)', hanzi: '论', meaning: 'Bàn luận' }
    ]
  },
  {
    id: 'rule-y-w-transformation',
    ruleNumber: 4,
    title: 'Quy tắc thêm / biến đổi y và w khi không có thanh mẫu',
    importance: 'quan trọng',
    mnemonic: 'Đứng một mình: dòng i mượn y, dòng u mượn w, dòng ü thêm y bỏ 2 chấm!',
    summary: 'Âm tiết bắt đầu bằng i, u, ü khi đứng độc lập không có thanh mẫu phải chuyển đổi hoặc thêm y/w.',
    formula: 'i ➔ yi/y  |  u ➔ wu/w  |  ü ➔ yu/y',
    content: `Tiếng Trung quy định mọi âm tiết viết bằng chữ La-tinh phải rõ ràng ranh giới để người đọc không bị nhầm lẫn:\n\n1. Dòng i:\n- Nếu sau "i" không có nguyên âm khác: thêm "y" đằng trước ➔ yi (衣 yī), yin (因 yīn), ying (英 yīng).\n- Nếu sau "i" có nguyên âm khác: đổi "i" thành "y" ➔ ya, ye, yao, you, yan, yang, yong.\n\n2. Dòng u:\n- Nếu sau "u" không có nguyên âm khác: thêm "w" đằng trước ➔ wu (乌 wū).\n- Nếu sau "u" có nguyên âm khác: đổi "u" thành "w" ➔ wa, wo, wai, wei, wan, wen, wang, weng.\n\n3. Dòng ü:\n- Luôn thêm "y" đằng trước và bỏ 2 chấm ➔ yu (鱼 yú), yue (月 yuè), yuan (元 yuán), yun (云 yún).`,
    examples: [
      { written: 'i ➔ yī', spoken: 'yī', hanzi: '一', meaning: 'Số 1' },
      { written: 'u ➔ wǔ', spoken: 'wǔ', hanzi: '五', meaning: 'Số 5' },
      { written: 'ü ➔ yú', spoken: 'yú (tròn môi)', hanzi: '鱼', meaning: 'Con cá' },
      { written: 'ie ➔ yě', spoken: 'yě', hanzi: '也', meaning: 'Cũng' },
      { written: 'uo ➔ wǒ', spoken: 'wǒ', hanzi: '我', meaning: 'Tôi, mình' }
    ]
  },
  {
    id: 'rule-tone-placement',
    ruleNumber: 5,
    title: 'Quy tắc đánh dấu thanh điệu (Thứ tự ưu tiên)',
    importance: 'quan trọng',
    mnemonic: 'Có a thì gõ vào a, không a tìm đến o, e; i và u đi cùng nhau thì dấu đánh ở chữ cái đứng sau!',
    summary: 'Thứ tự ưu tiên đánh dấu thanh điệu: a > o, e > i, u (nếu iu/ui thì đánh ở chữ sau cùng).',
    formula: 'a ➔ o / e ➔ i / u (i và u gặp nhau: đánh ở âm tiết sau)',
    content: `Dấu thanh điệu (ˉ ˊ ˇ ˋ) trong tiếng Trung luôn được đánh trên các nguyên âm chính theo thứ tự ưu tiên tuyệt đối:\n1. Nếu trong vận mẫu có chữ "a": Luôn đánh dấu lên chữ "a" (VD: mā, bǎi, hǎo, kàn, máng).\n2. Nếu không có "a", tìm xem có "o" hoặc "e" không: Luôn đánh dấu lên "o" hoặc "e" (VD: gōu, hē, kǒu, fēi, běn, lěng).\n3. Nếu có cả "i" và "u" đi liền nhau (iu hoặc ui): Đánh dấu lên chữ cái NẰM PHÍA SAU (VD: trong "iu" đánh trên "u" ➔ liù, jiǔ; trong "ui" đánh trên "i" ➔ duì, guì, shuǐ).\n4. Trên chữ "i", khi đánh dấu thanh điệu thì BỎ DẤU CHẤM TRÊN ĐẦU CHỮ i (ví dụ: ī, í, ǐ, ì).`,
    examples: [
      { written: 'hǎo', spoken: 'Đánh trên "a"', hanzi: '好', meaning: 'Tốt (ưu tiên a)' },
      { written: 'gěi', spoken: 'Đánh trên "e"', hanzi: '给', meaning: 'Cho (không có a, chọn e)' },
      { written: 'liù', spoken: 'Đánh trên "u"', hanzi: '六', meaning: 'Số 6 (iu thì đánh trên u)' },
      { written: 'shuǐ', spoken: 'Đánh trên "i"', hanzi: '水', meaning: 'Nước (ui thì đánh trên i)' }
    ]
  },
  {
    id: 'rule-tone-sandhi-3',
    ruleNumber: 6,
    title: 'Quy tắc biến điệu thanh 3 (3+3, 3+3+3, Nửa thanh 3)',
    importance: 'cực kỳ quan trọng',
    mnemonic: 'Hai thanh 3 đi liền: trước hóa 2! Trước các thanh khác: chỉ đọc nửa đầu hạ giọng!',
    summary: '3 + 3 ➔ đọc thành 2 + 3 (nǐ hǎo đọc là ní hǎo). Đứng trước thanh 1, 2, 4 đọc nửa thanh 3.',
    formula: '3 + 3 ➔ 2 + 3  |  3 + {1, 2, 4, nhẹ} ➔ Nửa thanh 3 (hạ giọng 2-1)',
    content: `Thanh 3 là thanh có đường cao độ phức tạp nhất (hạ từ 2 xuống 1 rồi vút lên 4). Để phát âm lưu loát, người Trung Quốc biến điệu như sau:\n\n1. Hai thanh 3 đi liền nhau (3 + 3 ➔ 2 + 3):\nThanh 3 thứ nhất đọc thành thanh 2 (đi lên sắc nét), thanh thứ hai giữ nguyên.\nVD: 你好 nǐ hǎo ➔ đọc là ní hǎo; 可以 kěyǐ ➔ đọc là kéyǐ; 手表 shǒubiǎo ➔ đọc là shóubiǎo.\n\n2. Nửa thanh 3 (Half 3rd Tone):\nKhi thanh 3 đứng trước thanh 1, thanh 2, thanh 4 hoặc thanh nhẹ ➔ Chỉ đọc nửa phần đầu (hạ giọng trầm từ 2 xuống 1), KHÔNG nâng giọng vút lên 4 nữa!\nVD: 北京 Běijīng (3+1) ➔ Běi chỉ hạ giọng trầm, không vút lên.\n\n3. Ba thanh 3 đi liền nhau (3 + 3 + 3):\n- Ngắt theo cụm nghĩa 2 + 1 ➔ Đọc là (2 + 2) + 3. VD: 我很好 wǒ hěn hǎo ➔ wó hén hǎo.\n- Ngắt theo cụm nghĩa 1 + 2 ➔ Đọc là 3 + (2 + 3). VD: 米老鼠 Mǐ Lǎoshǔ ➔ Mǐ láoshǔ.`,
    examples: [
      { written: 'nǐ hǎo (你好)', spoken: 'ní hǎo', hanzi: '你好', meaning: 'Xin chào (3+3 ➔ 2+3)' },
      { written: 'kě yǐ (可以)', spoken: 'ké yǐ', hanzi: '可以', meaning: 'Có thể (3+3 ➔ 2+3)' },
      { written: 'wǒ hěn hǎo (我很好)', spoken: 'wó hén hǎo', hanzi: '我很好', meaning: 'Tôi rất khỏe (3+3+3)' },
      { written: 'Běi jīng (北京)', spoken: 'Běi hạ giọng trầm', hanzi: '北京', meaning: 'Bắc Kinh (Nửa thanh 3)' }
    ]
  },
  {
    id: 'rule-bu-yi-sandhi',
    ruleNumber: 7,
    title: 'Quy tắc biến điệu đặc biệt của chữ 不 (bù) và 一 (yī)',
    importance: 'cực kỳ quan trọng',
    mnemonic: 'Đứng trước thanh 4: cả 不 và 一 đều biến thành thanh 2!',
    summary: '不 đứng trước thanh 4 đọc là bú. 一 đứng trước thanh 4 đọc là yí, trước 1, 2, 3 đọc là yì.',
    formula: 'bù + Thanh 4 ➔ bú  |  yī + Thanh 4 ➔ yí  |  yī + {1, 2, 3} ➔ yì',
    content: `1. Biến điệu của chữ 不 (bù - gốc là thanh 4):\n- Khi đứng trước một thanh 4 khác: 不 đọc biến điệu thành THANH 2 "bú".\nVD: 不是 bù shì ➔ đọc là bú shì; 不要 bù yào ➔ đọc là bú yào; 对不起 duìbuqǐ ➔ đọc thanh nhẹ.\n- Khi đứng trước thanh 1, 2, 3: Vẫn giữ nguyên thanh 4 "bù" (bù gāo, bù lái, bù hǎo).\n\n2. Biến điệu của chữ 一 (yī - gốc là thanh 1):\n- Đứng một mình hoặc đọc số đếm, số thứ tự: Đọc nguyên bản thanh 1 "yī" (yī, èr, sān; dì-yī).\n- Đứng trước thanh 4: Biến điệu thành THANH 2 "yí" (VD: 一共 yí gòng, 一样 yí yàng, 一下 yí xià).\n- Đứng trước thanh 1, 2, 3: Biến điệu thành THANH 4 "yì" (VD: 一天 yì tiān, 一年 yì nián, 一起 yì qǐ).`,
    examples: [
      { written: 'bù shì (不是)', spoken: 'bú shì', hanzi: '不是', meaning: 'Không phải (bù đứng trước thanh 4)' },
      { written: 'bù yào (不要)', spoken: 'bú yào', hanzi: '不要', meaning: 'Không cần, đừng (bù đứng trước thanh 4)' },
      { written: 'yī dìng (一定)', spoken: 'yí dìng', hanzi: '一定', meaning: 'Nhất định (yī đứng trước thanh 4)' },
      { written: 'yī qǐ (一起)', spoken: 'yì qǐ', hanzi: '一起', meaning: 'Cùng nhau (yī đứng trước thanh 3)' },
      { written: 'yī tiān (一天)', spoken: 'yì tiān', hanzi: '一天', meaning: 'Một ngày (yī đứng trước thanh 1)' }
    ]
  },
  {
    id: 'rule-neutral-tone',
    ruleNumber: 8,
    title: 'Quy tắc thanh nhẹ (Khinh thanh - 轻声)',
    importance: 'quan trọng',
    mnemonic: 'Đọc nhẹ, ngắn, dứt khoát, không đánh dấu thanh điệu trên chữ cái!',
    summary: 'Một số âm tiết mất đi thanh điệu vốn có, đọc lướt nhanh, nhẹ nhàng và ngắn gọn.',
    formula: 'Không viết dấu thanh trên Pinyin (māma, bàba, xièxie)',
    content: `Trong tiếng Trung chuẩn, có rất nhiều âm tiết khi đi kèm trong từ ghép hoặc câu sẽ không mang thanh điệu đầy đủ mà chuyển sang "Thanh Nhẹ" (Khinh thanh):\n- Trên chữ viết Pinyin: Không ghi bất kỳ dấu thanh nào trên chữ cái đó.\n- Cách phát âm: Đọc ngắn lại (khoảng 1/2 độ dài âm thường), âm lượng nhỏ hơn và nhẹ nhàng.\n\nCác trường hợp thường đọc thanh nhẹ:\n1. Từ láy xưng hô thân mật: 妈妈 māma, 爸爸 bàba, 爷爷 yéye, 哥哥 gēge.\n2. Các trợ từ ngữ khí và trợ từ kết cấu: 的 de, 了 le, 吗 ma, 吧 ba, 呢 ne.\n3. Hậu tố danh từ: 子 zi (桌子 zhuōzi), 们 men (我们 wǒmen).\n4. Từ láy động từ: 看看 kànkan, 听听 tīngting.`,
    examples: [
      { written: 'māma (妈妈)', spoken: 'mā-ma (ma sau đọc nhẹ ngắn)', hanzi: '妈妈', meaning: 'Mẹ' },
      { written: 'xièxie (谢谢)', spoken: 'xiè-xie (xie sau đọc nhẹ)', hanzi: '谢谢', meaning: 'Cảm ơn' },
      { written: 'hǎo ma (好吗)', spoken: 'hǎo-ma', hanzi: '好吗', meaning: 'Được không?' },
      { written: 'wǒmen (我们)', spoken: 'wǒ-men', hanzi: '我们', meaning: 'Chúng tôi' }
    ]
  },
  {
    id: 'rule-er-hua',
    ruleNumber: 9,
    title: 'Hiện tượng uốn lưỡi cuốn âm (Nhi hóa - 儿化音)',
    importance: 'nâng cao',
    mnemonic: 'Chữ 儿 (r) dính vào đuôi chữ trước, vừa phát âm vừa uốn cong đầu lưỡi!',
    summary: 'Thêm chữ "r" vào cuối âm tiết trong văn nói Bắc Kinh để biểu thị sự nhỏ nhắn, đáng yêu hoặc biến nghĩa từ.',
    formula: 'Âm tiết + r (VD: nǎr, zhèr, huàr)',
    content: `Nhi hóa (儿化 érhuà) là một đặc trưng phát âm rất nổi tiếng của phương ngữ Bắc Kinh và tiếng Quan Thoại chuẩn:\n- Chữ viết Hán: Viết thêm chữ "儿" phía sau danh từ (VD: 哪儿, 这儿, 一点儿).\n- Chữ viết Pinyin: Thêm chữ cái "r" vào ngay đuôi của âm tiết đứng trước (VD: nǎr, zhèr, yìdiǎnr).\n- Cách đọc: Phát âm từ đứng trước đồng thời uốn cong đầu lưỡi lên ngạc cứng về phía sau ở cuối âm.\n\nTác dụng của nhi hóa:\n1. Phân biệt từ loại (VD: 画 huà là động từ "vẽ", còn 画儿 huàr là danh từ "bức tranh").\n2. Phân biệt ý nghĩa (VD: 头 tóu là "cái đầu", còn 头儿 tóur là "người đứng đầu, sếp").\n3. Mang sắc thái tình cảm thân mật, nhỏ bé, đáng yêu.`,
    examples: [
      { written: 'nǎr (哪儿)', spoken: 'nǎ + uốn lưỡi', hanzi: '哪儿', meaning: 'Ở đâu, chỗ nào' },
      { written: 'zhèr (这儿)', spoken: 'zhè + uốn lưỡi', hanzi: '这儿', meaning: 'Ở đây, chỗ này' },
      { written: 'yìdiǎnr (一点儿)', spoken: 'yìdiǎn + uốn lưỡi', hanzi: '一点儿', meaning: 'Một chút, một ít' },
      { written: 'huàr (画儿)', spoken: 'huà + uốn lưỡi', hanzi: '画儿', meaning: 'Bức tranh (danh từ)' }
    ]
  }
];

// ==========================================
// 4. 10 CẶP ÂM SO SÁNH DỄ NHẦM LẪN NHẤT
// ==========================================
export const masterMinimalPairs: MinimalPair[] = [
  {
    id: 'pair-b-p',
    title: 'Cặp âm Môi: b vs p',
    contrastDesc: 'Âm không bật hơi (b) vs Âm bật hơi mạnh làm bay giấy (p)',
    item1: {
      symbol: 'b',
      type: 'Không bật hơi',
      howToSay: 'Hai môi khép nhẹ rồi mở, đọc như "p" tiếng Việt',
      example: { hanzi: '八', pinyin: 'bā', meaning: 'Số 8' }
    },
    item2: {
      symbol: 'p',
      type: '🔥 Bật hơi mạnh',
      howToSay: 'Mím chặt hai môi, nén hơi rồi bung mạnh luồng khí ra',
      example: { hanzi: '怕', pinyin: 'pà', meaning: 'Sợ hãi' }
    },
    distinctionTip: 'Để bàn tay hoặc tờ giấy trước miệng: đọc "bā" giấy đứng yên, đọc "pà" giấy bay tốc lên!'
  },
  {
    id: 'pair-d-t',
    title: 'Cặp âm Đầu lưỡi giữa: d vs t',
    contrastDesc: 'Đọc là "t" (d) vs Đọc là "th" bật hơi (t)',
    item1: {
      symbol: 'd',
      type: 'Không bật hơi',
      howToSay: 'Đọc giống chữ "t" tiếng Việt, KHÔNG đọc là "đ"',
      example: { hanzi: '大', pinyin: 'dà', meaning: 'To, lớn' }
    },
    item2: {
      symbol: 't',
      type: '🔥 Bật hơi mạnh',
      howToSay: 'Đầu lưỡi giật lùi, bật mạnh luồng khí như chữ "th"',
      example: { hanzi: '他', pinyin: 'tā', meaning: 'Anh ấy' }
    },
    distinctionTip: 'Nhớ câu: "d" đọc là t (dà ➔ tà), "t" đọc là th bật hơi (tā ➔ tha).'
  },
  {
    id: 'pair-g-k',
    title: 'Cặp âm Cuống lưỡi: g vs k',
    contrastDesc: 'Đọc là "c/k" (g) vs Bật hơi cuống họng "kh" (k)',
    item1: {
      symbol: 'g',
      type: 'Không bật hơi',
      howToSay: 'Đọc giống chữ "c/k" tiếng Việt (gē ➔ cưa)',
      example: { hanzi: '哥', pinyin: 'gē', meaning: 'Anh trai' }
    },
    item2: {
      symbol: 'k',
      type: '🔥 Bật hơi mạnh',
      howToSay: 'Bật mạnh luồng khí từ cuống họng như "kh"',
      example: { hanzi: '渴', pinyin: 'kě', meaning: 'Khát nước' }
    },
    distinctionTip: 'gē đọc nhẹ nhàng ở cổ họng; kě phát ra luồng hơi tống mạnh từ cuống họng.'
  },
  {
    id: 'pair-j-q',
    title: 'Cặp âm Mặt lưỡi: j vs q',
    contrastDesc: 'Mặt lưỡi ép ngạc (j) vs Bật hơi sắc bén (q)',
    item1: {
      symbol: 'j',
      type: 'Không bật hơi',
      howToSay: 'Đọc như "ch", khóe miệng kéo rộng sang hai bên',
      example: { hanzi: '鸡', pinyin: 'jī', meaning: 'Con gà' }
    },
    item2: {
      symbol: 'q',
      type: '🔥 Bật hơi sắc',
      howToSay: 'Vị trí như j nhưng bắn luồng tia khí cực mạnh và sắc qua kẽ răng',
      example: { hanzi: '七', pinyin: 'qī', meaning: 'Số 7' }
    },
    distinctionTip: 'Cả 2 đều kéo khóe mép mỉm cười, nhưng "q" luồng hơi bắn ra nghe tiếng xì rít sắc lẹm.'
  },
  {
    id: 'pair-z-c',
    title: 'Cặp âm Đầu lưỡi trước: z vs c',
    contrastDesc: 'Đầu lưỡi thẳng chặn răng (z) vs Bật hơi xì mạnh qua kẽ răng (c)',
    item1: {
      symbol: 'z',
      type: 'Không bật hơi',
      howToSay: 'Đầu lưỡi thẳng chạm sau răng trên, đọc như "chưa" phẳng',
      example: { hanzi: '早', pinyin: 'zǎo', meaning: 'Buổi sáng' }
    },
    item2: {
      symbol: 'c',
      type: '🔥 Bật hơi xì mạnh',
      howToSay: 'Đầu lưỡi nén hơi sau răng rồi tống xì mạnh qua kẽ răng',
      example: { hanzi: '草', pinyin: 'cǎo', meaning: 'Cỏ' }
    },
    distinctionTip: 'zǎo không xì gió; cǎo xì một luồng gió mạnh kèm tiếng xát rõ rệt.'
  },
  {
    id: 'pair-z-zh',
    title: 'Đối lập Phẳng lưỡi vs Uốn lưỡi: z vs zh',
    contrastDesc: 'Đầu lưỡi phẳng thẳng (z) vs Đầu lưỡi uốn cong lên vòm họng (zh)',
    item1: {
      symbol: 'z',
      type: 'Đầu lưỡi thẳng',
      howToSay: 'Lưỡi nằm thẳng chạm sau răng cửa trên (zì = zư)',
      example: { hanzi: '字', pinyin: 'zì', meaning: 'Chữ' }
    },
    item2: {
      symbol: 'zh',
      type: '🔄 Uốn cong lưỡi',
      howToSay: 'Uốn cong đầu lưỡi chạm ngạc cứng vòm miệng (zhī = trư)',
      example: { hanzi: '知', pinyin: 'zhī', meaning: 'Biết' }
    },
    distinctionTip: 'z: lưỡi phẳng chạm răng trước. zh: đầu lưỡi cong ngược lên vòm họng trên phía sau lợi.'
  },
  {
    id: 'pair-c-ch',
    title: 'Đối lập Bật hơi Phẳng vs Uốn lưỡi: c vs ch',
    contrastDesc: 'Bật hơi phẳng lưỡi (c) vs Bật hơi uốn cong lưỡi (ch)',
    item1: {
      symbol: 'c',
      type: '🔥 Bật hơi thẳng lưỡi',
      howToSay: 'Đầu lưỡi thẳng chạm răng, bật xì gió mạnh (cì = cư)',
      example: { hanzi: '次', pinyin: 'cì', meaning: 'Lần, lượt' }
    },
    item2: {
      symbol: 'ch',
      type: '🔥🔄 Uốn lưỡi bật hơi',
      howToSay: 'Uốn cong đầu lưỡi lên ngạc cứng rồi bật mạnh luồng khí (chī = chư)',
      example: { hanzi: '吃', pinyin: 'chī', meaning: 'Ăn' }
    },
    distinctionTip: 'Cả hai đều bật hơi cực mạnh, nhưng "c" phẳng lưỡi ở răng trước, "ch" uốn cong lưỡi sâu trong vòm họng.'
  },
  {
    id: 'pair-s-sh',
    title: 'Đối lập Ma sát Phẳng vs Uốn lưỡi: s vs sh',
    contrastDesc: 'Xì nhẹ phẳng lưỡi (s) vs Uốn cong lưỡi dày âm (sh)',
    item1: {
      symbol: 's',
      type: 'Đầu lưỡi thẳng',
      howToSay: 'Lưỡi thẳng sát răng trên, xì nhẹ như s tiếng Việt (sì = sư)',
      example: { hanzi: '四', pinyin: 'sì', meaning: 'Số 4' }
    },
    item2: {
      symbol: 'sh',
      type: '🔄 Uốn cong lưỡi',
      howToSay: 'Uốn cong đầu lưỡi sát ngạc cứng, âm trầm dày (shì = sư nặng)',
      example: { hanzi: '是', pinyin: 'shì', meaning: 'Là' }
    },
    distinctionTip: 'Câu thần chú kinh điển: "Sì shí sì, shí shì shí" (四是四，十是十 - Bốn là bốn, mười là mười).'
  },
  {
    id: 'pair-an-ang',
    title: 'Vận mẫu Mũi trước vs Mũi sau: an vs ang',
    contrastDesc: 'Kết thúc đầu lưỡi chạm lợi trên (an) vs Kết thúc cuống lưỡi chạm ngạc mềm (ang)',
    item1: {
      symbol: 'an',
      type: 'Mũi trước (-n)',
      howToSay: 'Đầu lưỡi kết thúc chạm vào lợi răng trên',
      example: { hanzi: '看', pinyin: 'kàn', meaning: 'Xem' }
    },
    item2: {
      symbol: 'ang',
      type: 'Mũi sau (-ng)',
      howToSay: 'Gốc lưỡi nâng cao chạm ngạc mềm, khoang miệng mở rộng vang',
      example: { hanzi: '康', pinyin: 'kāng', meaning: 'Khỏe mạnh' }
    },
    distinctionTip: 'an âm gọn ở đầu miệng; ang âm vang sâu trong khoang mũi và họng.'
  },
  {
    id: 'pair-en-eng',
    title: 'Vận mẫu Mũi trước vs Mũi sau: en vs eng',
    contrastDesc: 'Âm "ân" gọn đầu lưỡi (en) vs Âm "âng" vang cuống họng (eng)',
    item1: {
      symbol: 'en',
      type: 'Mũi trước (-n)',
      howToSay: 'Khẩu hình hẹp, đầu lưỡi chạm lợi trên',
      example: { hanzi: '很', pinyin: 'hěn', meaning: 'Rất' }
    },
    item2: {
      symbol: 'eng',
      type: 'Mũi sau (-ng)',
      howToSay: 'Cuống lưỡi nâng chạm ngạc mềm, âm trầm vang',
      example: { hanzi: '等', pinyin: 'děng', meaning: 'Chờ đợi' }
    },
    distinctionTip: 'hěn (rất) âm kết thúc nhẹ ở đầu răng; děng (chờ) âm vang sâu trong họng.'
  }
];

// ==========================================
// 5. MA TRẬN PHỐI ÂM PINYIN (PINYIN COMBINATION MATRIX)
// ==========================================
// Ma trận kết hợp tiêu biểu các âm tiết chuẩn trong tiếng Quan Thoại
export interface PinyinSyllableEntry {
  syllable: string;
  hanzi: string;
  meaning: string;
}

export const commonPinyinMatrix: {
  initial: string;
  name: string;
  syllables: { final: string; sample: PinyinSyllableEntry }[];
}[] = [
  {
    initial: 'b',
    name: 'b (pua)',
    syllables: [
      { final: 'a', sample: { syllable: 'bā', hanzi: '八', meaning: 'Số 8' } },
      { final: 'o', sample: { syllable: 'bō', hanzi: '波', meaning: 'Sóng' } },
      { final: 'ai', sample: { syllable: 'bǎi', hanzi: '百', meaning: 'Trăm' } },
      { final: 'ei', sample: { syllable: 'běi', hanzi: '北', meaning: 'Bắc' } },
      { final: 'ao', sample: { syllable: 'bāo', hanzi: '包', meaning: 'Túi, bao' } },
      { final: 'an', sample: { syllable: 'bàn', hanzi: '半', meaning: 'Nửa' } },
      { final: 'en', sample: { syllable: 'běn', hanzi: '本', meaning: 'Quyển' } },
      { final: 'ang', sample: { syllable: 'bāng', hanzi: '帮', meaning: 'Giúp' } },
      { final: 'eng', sample: { syllable: 'bēng', hanzi: '崩', meaning: 'Sụp' } },
      { final: 'i', sample: { syllable: 'bǐ', hanzi: '笔', meaning: 'Bút' } },
      { final: 'ie', sample: { syllable: 'bié', hanzi: '别', meaning: 'Đừng' } },
      { final: 'iao', sample: { syllable: 'biǎo', hanzi: '表', meaning: 'Đồng hồ' } },
      { final: 'ian', sample: { syllable: 'biān', hanzi: '边', meaning: 'Bên' } },
      { final: 'in', sample: { syllable: 'bīn', hanzi: '宾', meaning: 'Khách' } },
      { final: 'ing', sample: { syllable: 'bīng', hanzi: '冰', meaning: 'Băng' } },
      { final: 'u', sample: { syllable: 'bù', hanzi: '不', meaning: 'Không' } }
    ]
  },
  {
    initial: 'p',
    name: 'p (phua - bật hơi)',
    syllables: [
      { final: 'a', sample: { syllable: 'pà', hanzi: '怕', meaning: 'Sợ' } },
      { final: 'o', sample: { syllable: 'pō', hanzi: '坡', meaning: 'Dốc' } },
      { final: 'ai', sample: { syllable: 'pái', hanzi: '牌', meaning: 'Biển hiệu' } },
      { final: 'ei', sample: { syllable: 'pèi', hanzi: '配', meaning: 'Phối hợp' } },
      { final: 'ao', sample: { syllable: 'pǎo', hanzi: '跑', meaning: 'Chạy' } },
      { final: 'ou', sample: { syllable: 'póu', hanzi: '剖', meaning: 'Mổ xẻ' } },
      { final: 'an', sample: { syllable: 'pàn', hanzi: '盼', meaning: 'Trông mong' } },
      { final: 'en', sample: { syllable: 'pēn', hanzi: '喷', meaning: 'Phun' } },
      { final: 'ang', sample: { syllable: 'pàng', hanzi: '胖', meaning: 'Béo' } },
      { final: 'eng', sample: { syllable: 'péng', hanzi: '朋', meaning: 'Bạn' } },
      { final: 'i', sample: { syllable: 'pí', hanzi: '皮', meaning: 'Da' } },
      { final: 'ie', sample: { syllable: 'piān', hanzi: '篇', meaning: 'Bài' } },
      { final: 'iao', sample: { syllable: 'piào', hanzi: '票', meaning: 'Vé' } },
      { final: 'ian', sample: { syllable: 'pián', hanzi: '便宜', meaning: 'Rẻ' } },
      { final: 'in', sample: { syllable: 'pǐn', hanzi: '品', meaning: 'Phẩm chất' } },
      { final: 'ing', sample: { syllable: 'píng', hanzi: '平', meaning: 'Bình an' } },
      { final: 'u', sample: { syllable: 'pǔ', hanzi: '普', meaning: 'Phổ thông' } }
    ]
  },
  {
    initial: 'm',
    name: 'm (mua)',
    syllables: [
      { final: 'a', sample: { syllable: 'mā', hanzi: '妈', meaning: 'Mẹ' } },
      { final: 'o', sample: { syllable: 'mó', hanzi: '磨', meaning: 'Mài' } },
      { final: 'e', sample: { syllable: 'me', hanzi: '么', meaning: 'Trợ từ' } },
      { final: 'ai', sample: { syllable: 'mǎi', hanzi: '买', meaning: 'Mua' } },
      { final: 'ei', sample: { syllable: 'mèi', hanzi: '妹', meaning: 'Em gái' } },
      { final: 'ao', sample: { syllable: 'māo', hanzi: '猫', meaning: 'Con mèo' } },
      { final: 'ou', sample: { syllable: 'móu', hanzi: '谋', meaning: 'Mưu' } },
      { final: 'an', sample: { syllable: 'màn', hanzi: '慢', meaning: 'Chậm' } },
      { final: 'en', sample: { syllable: 'mén', hanzi: '门', meaning: 'Cửa' } },
      { final: 'ang', sample: { syllable: 'máng', hanzi: '忙', meaning: 'Bận' } },
      { final: 'eng', sample: { syllable: 'méng', hanzi: '蒙', meaning: 'Mơ màng' } },
      { final: 'i', sample: { syllable: 'mǐ', hanzi: '米', meaning: 'Gạo' } },
      { final: 'ie', sample: { syllable: 'miè', hanzi: '灭', meaning: 'Diệt' } },
      { final: 'iao', sample: { syllable: 'miáo', hanzi: '苗', meaning: 'Mầm' } },
      { final: 'iu', sample: { syllable: 'miù', hanzi: '谬', meaning: 'Sai lầm' } },
      { final: 'ian', sample: { syllable: 'miàn', hanzi: '面', meaning: 'Mặt, mì' } },
      { final: 'in', sample: { syllable: 'mín', hanzi: '民', meaning: 'Dân' } },
      { final: 'ing', sample: { syllable: 'míng', hanzi: '明', meaning: 'Sáng' } },
      { final: 'u', sample: { syllable: 'mù', hanzi: '木', meaning: 'Gỗ' } }
    ]
  },
  {
    initial: 'd',
    name: 'd (tưa)',
    syllables: [
      { final: 'a', sample: { syllable: 'dà', hanzi: '大', meaning: 'To, lớn' } },
      { final: 'e', sample: { syllable: 'dé', hanzi: '得', meaning: 'Đạt được' } },
      { final: 'ai', sample: { syllable: 'dài', hanzi: '带', meaning: 'Mang theo' } },
      { final: 'ei', sample: { syllable: 'děi', hanzi: '得', meaning: 'Phải (làm gì)' } },
      { final: 'ao', sample: { syllable: 'dào', hanzi: '到', meaning: 'Đến' } },
      { final: 'ou', sample: { syllable: 'dōu', hanzi: '都', meaning: 'Đều' } },
      { final: 'an', sample: { syllable: 'dàn', hanzi: '蛋', meaning: 'Trứng' } },
      { final: 'ang', sample: { syllable: 'dāng', hanzi: '当', meaning: 'Làm (nghề)' } },
      { final: 'eng', sample: { syllable: 'děng', hanzi: '等', meaning: 'Chờ đợi' } },
      { final: 'ong', sample: { syllable: 'dōng', hanzi: '东', meaning: 'Phía đông' } },
      { final: 'i', sample: { syllable: 'dì', hanzi: '弟', meaning: 'Em trai' } },
      { final: 'ie', sample: { syllable: 'dié', hanzi: '蝶', meaning: 'Bướm' } },
      { final: 'iao', sample: { syllable: 'diào', hanzi: '钓', meaning: 'Câu cá' } },
      { final: 'iu', sample: { syllable: 'diū', hanzi: '丢', meaning: 'Mất' } },
      { final: 'ian', sample: { syllable: 'diàn', hanzi: '电', meaning: 'Điện' } },
      { final: 'ing', sample: { syllable: 'dīng', hanzi: '丁', meaning: 'Đinh' } },
      { final: 'u', sample: { syllable: 'dú', hanzi: '读', meaning: 'Đọc' } },
      { final: 'ui', sample: { syllable: 'duì', hanzi: '对', meaning: 'Đúng' } },
      { final: 'uan', sample: { syllable: 'duǎn', hanzi: '短', meaning: 'Ngắn' } },
      { final: 'un', sample: { syllable: 'dùn', hanzi: '顿', meaning: 'Bữa ăn' } }
    ]
  },
  {
    initial: 't',
    name: 't (thưa - bật hơi)',
    syllables: [
      { final: 'a', sample: { syllable: 'tā', hanzi: '他', meaning: 'Anh ấy' } },
      { final: 'e', sample: { syllable: 'tè', hanzi: '特', meaning: 'Đặc biệt' } },
      { final: 'ai', sample: { syllable: 'tài', hanzi: '太', meaning: 'Quá, lắm' } },
      { final: 'ao', sample: { syllable: 'táo', hanzi: '桃', meaning: 'Quả đào' } },
      { final: 'ou', sample: { syllable: 'tóu', hanzi: '头', meaning: 'Cái đầu' } },
      { final: 'an', sample: { syllable: 'tán', hanzi: '谈', meaning: 'Nói chuyện' } },
      { final: 'ang', sample: { syllable: 'tāng', hanzi: '汤', meaning: 'Canh, súp' } },
      { final: 'eng', sample: { syllable: 'téng', hanzi: '疼', meaning: 'Đau' } },
      { final: 'ong', sample: { syllable: 'tóng', hanzi: '同', meaning: 'Cùng' } },
      { final: 'i', sample: { syllable: 'tī', hanzi: '踢', meaning: 'Đá (bóng)' } },
      { final: 'ie', sample: { syllable: 'tiē', hanzi: '贴', meaning: 'Dán' } },
      { final: 'iao', sample: { syllable: 'tiáo', hanzi: '条', meaning: 'Lượng từ dải' } },
      { final: 'ian', sample: { syllable: 'tiān', hanzi: '天', meaning: 'Trời, ngày' } },
      { final: 'ing', sample: { syllable: 'tīng', hanzi: '听', meaning: 'Nghe' } },
      { final: 'u', sample: { syllable: 'tú', hanzi: '图', meaning: 'Tranh ảnh' } },
      { final: 'ui', sample: { syllable: 'tuǐ', hanzi: '腿', meaning: 'Cái chân' } },
      { final: 'uan', sample: { syllable: 'tuán', hanzi: '团', meaning: 'Đoàn thể' } },
      { final: 'un', sample: { syllable: 'tūn', hanzi: '吞', meaning: 'Nuốt' } }
    ]
  },
  {
    initial: 'g',
    name: 'g (cưa)',
    syllables: [
      { final: 'a', sample: { syllable: 'gē', hanzi: '歌', meaning: 'Bài hát' } },
      { final: 'e', sample: { syllable: 'gē', hanzi: '哥', meaning: 'Anh trai' } },
      { final: 'ai', sample: { syllable: 'gài', hanzi: '盖', meaning: 'Đậy nắp' } },
      { final: 'ei', sample: { syllable: 'gěi', hanzi: '给', meaning: 'Cho' } },
      { final: 'ao', sample: { syllable: 'gāo', hanzi: '高', meaning: 'Cao' } },
      { final: 'ou', sample: { syllable: 'gǒu', hanzi: '狗', meaning: 'Con chó' } },
      { final: 'an', sample: { syllable: 'gàn', hanzi: '干', meaning: 'Làm' } },
      { final: 'en', sample: { syllable: 'gēn', hanzi: '跟', meaning: 'Cùng với' } },
      { final: 'ang', sample: { syllable: 'gāng', hanzi: '刚', meaning: 'Vừa mới' } },
      { final: 'eng', sample: { syllable: 'gēng', hanzi: '更', meaning: 'Càng' } },
      { final: 'ong', sample: { syllable: 'gōng', hanzi: '工', meaning: 'Công việc' } },
      { final: 'u', sample: { syllable: 'gǔ', hanzi: '古', meaning: 'Cổ kính' } },
      { final: 'ua', sample: { syllable: 'guā', hanzi: '瓜', meaning: 'Dưa' } },
      { final: 'uo', sample: { syllable: 'guó', hanzi: '国', meaning: 'Quốc gia' } },
      { final: 'uai', sample: { syllable: 'guài', hanzi: '怪', meaning: 'Quái lạ' } },
      { final: 'ui', sample: { syllable: 'guì', hanzi: '贵', meaning: 'Quý, đắt' } },
      { final: 'uan', sample: { syllable: 'guān', hanzi: '关', meaning: 'Đóng' } },
      { final: 'un', sample: { syllable: 'gǔn', hanzi: '滚', meaning: 'Lăn, cút' } },
      { final: 'uang', sample: { syllable: 'guāng', hanzi: '光', meaning: 'Ánh sáng' } }
    ]
  },
  {
    initial: 'k',
    name: 'k (khưa - bật hơi)',
    syllables: [
      { final: 'a', sample: { syllable: 'kǎ', hanzi: '卡', meaning: 'Thẻ card' } },
      { final: 'e', sample: { syllable: 'kě', hanzi: '渴', meaning: 'Khát nước' } },
      { final: 'ai', sample: { syllable: 'kāi', hanzi: '开', meaning: 'Mở' } },
      { final: 'ao', sample: { syllable: 'kǎo', hanzi: '考', meaning: 'Thi cử' } },
      { final: 'ou', sample: { syllable: 'kǒu', hanzi: '口', meaning: 'Cái miệng' } },
      { final: 'an', sample: { syllable: 'kàn', hanzi: '看', meaning: 'Nhìn, xem' } },
      { final: 'en', sample: { syllable: 'kěn', hanzi: '肯', meaning: 'Đồng ý' } },
      { final: 'ang', sample: { syllable: 'kāng', hanzi: '康', meaning: 'Khỏe' } },
      { final: 'eng', sample: { syllable: 'kēng', hanzi: '坑', meaning: 'Hố' } },
      { final: 'ong', sample: { syllable: 'kōng', hanzi: '空', meaning: 'Trống rỗng' } },
      { final: 'u', sample: { syllable: 'kū', hanzi: '哭', meaning: 'Khóc' } },
      { final: 'ua', sample: { syllable: 'kuà', hanzi: '跨', meaning: 'Bước qua' } },
      { final: 'uo', sample: { syllable: 'kuò', hanzi: '阔', meaning: 'Rộng lớn' } },
      { final: 'uai', sample: { syllable: 'kuài', hanzi: '快', meaning: 'Nhanh' } },
      { final: 'ui', sample: { syllable: 'kuī', hanzi: '亏', meaning: 'Lỗ vốn' } },
      { final: 'uan', sample: { syllable: 'kuǎn', hanzi: '款', meaning: 'Khoản tiền' } },
      { final: 'un', sample: { syllable: 'kùn', hanzi: '困', meaning: 'Buồn ngủ, khốn' } },
      { final: 'uang', sample: { syllable: 'kuàng', hanzi: '矿', meaning: 'Mỏ quặng' } }
    ]
  },
  {
    initial: 'zh',
    name: 'zh (trưa - uốn lưỡi)',
    syllables: [
      { final: 'a', sample: { syllable: 'zhā', hanzi: '扎', meaning: 'Buộc' } },
      { final: 'e', sample: { syllable: 'zhē', hanzi: '遮', meaning: 'Che chở' } },
      { final: 'i', sample: { syllable: 'zhī', hanzi: '知', meaning: 'Biết (đọc là trư)' } },
      { final: 'ai', sample: { syllable: 'zhāi', hanzi: '摘', meaning: 'Hái' } },
      { final: 'ei', sample: { syllable: 'zhèi', hanzi: '这', meaning: 'Này (khẩu ngữ)' } },
      { final: 'ao', sample: { syllable: 'zhǎo', hanzi: '找', meaning: 'Tìm kiếm' } },
      { final: 'ou', sample: { syllable: 'zhōu', hanzi: '周', meaning: 'Tuần, chu vi' } },
      { final: 'an', sample: { syllable: 'zhàn', hanzi: '站', meaning: 'Trạm, đứng' } },
      { final: 'en', sample: { syllable: 'zhēn', hanzi: '真', meaning: 'Thật sự' } },
      { final: 'ang', sample: { syllable: 'zhāng', hanzi: '张', meaning: 'Tờ (lượng từ)' } },
      { final: 'eng', sample: { syllable: 'zhèng', hanzi: '正', meaning: 'Chính xác' } },
      { final: 'ong', sample: { syllable: 'zhōng', hanzi: '中', meaning: 'Trung Quốc' } },
      { final: 'u', sample: { syllable: 'zhù', hanzi: '住', meaning: 'Ở, cư trú' } },
      { final: 'ua', sample: { syllable: 'zhuā', hanzi: '抓', meaning: 'Bắt lấy' } },
      { final: 'uo', sample: { syllable: 'zhuō', hanzi: '桌', meaning: 'Cái bàn' } },
      { final: 'uai', sample: { syllable: 'zhuǎi', hanzi: '拽', meaning: 'Lôi kéo' } },
      { final: 'ui', sample: { syllable: 'zhuī', hanzi: '追', meaning: 'Đuổi theo' } },
      { final: 'uan', sample: { syllable: 'zhuān', hanzi: '专', meaning: 'Chuyên môn' } },
      { final: 'un', sample: { syllable: 'zhǔn', hanzi: '准', meaning: 'Chuẩn xác' } },
      { final: 'uang', sample: { syllable: 'zhuāng', hanzi: '装', meaning: 'Trang phục' } }
    ]
  },
  {
    initial: 'ch',
    name: 'ch (chưa - uốn lưỡi + bật hơi)',
    syllables: [
      { final: 'a', sample: { syllable: 'chá', hanzi: '茶', meaning: 'Trà' } },
      { final: 'e', sample: { syllable: 'chē', hanzi: '车', meaning: 'Xe' } },
      { final: 'i', sample: { syllable: 'chī', hanzi: '吃', meaning: 'Ăn (đọc là chư)' } },
      { final: 'ai', sample: { syllable: 'chāi', hanzi: '拆', meaning: 'Tháo dỡ' } },
      { final: 'ao', sample: { syllable: 'chǎo', hanzi: '炒', meaning: 'Xào' } },
      { final: 'ou', sample: { syllable: 'chōu', hanzi: '抽', meaning: 'Hút (thuốc)' } },
      { final: 'an', sample: { syllable: 'chàn', hanzi: '颤', meaning: 'Rung rẩy' } },
      { final: 'en', sample: { syllable: 'chén', hanzi: '沉', meaning: 'Trầm' } },
      { final: 'ang', sample: { syllable: 'cháng', hanzi: '长', meaning: 'Dài' } },
      { final: 'eng', sample: { syllable: 'chéng', hanzi: '城', meaning: 'Thành phố' } },
      { final: 'ong', sample: { syllable: 'chóng', hanzi: '虫', meaning: 'Côn trùng' } },
      { final: 'u', sample: { syllable: 'chū', hanzi: '出', meaning: 'Ra ngoài' } },
      { final: 'ua', sample: { syllable: 'chuā', hanzi: '欻', meaning: 'Tiếng xé gió' } },
      { final: 'uo', sample: { syllable: 'chuò', hanzi: '绰', meaning: 'Rộng rãi' } },
      { final: 'uai', sample: { syllable: 'chuài', hanzi: '踹', meaning: 'Đá' } },
      { final: 'ui', sample: { syllable: 'chuī', hanzi: '吹', meaning: 'Thổi' } },
      { final: 'uan', sample: { syllable: 'chuān', hanzi: '穿', meaning: 'Mặc' } },
      { final: 'un', sample: { syllable: 'chūn', hanzi: '春', meaning: 'Mùa xuân' } },
      { final: 'uang', sample: { syllable: 'chuáng', hanzi: '床', meaning: 'Cái giường' } }
    ]
  },
  {
    initial: 'sh',
    name: 'sh (sưa - uốn lưỡi)',
    syllables: [
      { final: 'a', sample: { syllable: 'shā', hanzi: '沙', meaning: 'Cát' } },
      { final: 'e', sample: { syllable: 'shē', hanzi: '奢', meaning: 'Xa hoa' } },
      { final: 'i', sample: { syllable: 'shì', hanzi: '是', meaning: 'Là (đọc là sư)' } },
      { final: 'ai', sample: { syllable: 'shài', hanzi: '晒', meaning: 'Phơi nắng' } },
      { final: 'ei', sample: { syllable: 'shéi', hanzi: '谁', meaning: 'Ai' } },
      { final: 'ao', sample: { syllable: 'shǎo', hanzi: '少', meaning: 'Ít' } },
      { final: 'ou', sample: { syllable: 'shǒu', hanzi: '手', meaning: 'Bàn tay' } },
      { final: 'an', sample: { syllable: 'shān', hanzi: '山', meaning: 'Núi' } },
      { final: 'en', sample: { syllable: 'shēn', hanzi: '深', meaning: 'Sâu' } },
      { final: 'ang', sample: { syllable: 'shàng', hanzi: '上', meaning: 'Trên' } },
      { final: 'eng', sample: { syllable: 'shēng', hanzi: '生', meaning: 'Sinh, sống' } },
      { final: 'u', sample: { syllable: 'shū', hanzi: '书', meaning: 'Sách' } },
      { final: 'ua', sample: { syllable: 'shuā', hanzi: '刷', meaning: 'Chải (răng)' } },
      { final: 'uo', sample: { syllable: 'shuō', hanzi: '说', meaning: 'Nói' } },
      { final: 'uai', sample: { syllable: 'shuài', hanzi: '帅', meaning: 'Đẹp trai' } },
      { final: 'ui', sample: { syllable: 'shuǐ', hanzi: '水', meaning: 'Nước' } },
      { final: 'uan', sample: { syllable: 'shuāng', hanzi: '双', meaning: 'Đôi' } },
      { final: 'un', sample: { syllable: 'shùn', hanzi: '顺', meaning: 'Thuận lợi' } }
    ]
  }
];
