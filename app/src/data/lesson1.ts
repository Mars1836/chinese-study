import { LessonData } from '../types/lesson';

export const lesson1Data: LessonData = {
  id: 1,
  title: 'Xin Chào',
  pinyinTitle: 'Nǐ hǎo',
  hanziTitle: '你好',
  videoDesc: 'Lộ trình Bài 1 Giáo trình Hán Ngữ 1: Làm chủ 11 Thanh mẫu, 15 Vận mẫu, 4 Thanh điệu, Điểm nhấn mốc 01:00:38 (Nửa thanh 3 & Biến điệu chữ 不), 8 Nét chữ Hán & 10 Từ mới.',
  videoUrl: 'https://www.youtube.com/watch?v=sLUg6LGlNek&t=3638s',
  initialsGroups: [
    {
      groupTitle: 'Nhóm 1: Âm môi - môi & Âm môi - răng (b, p, m, f)',
      groupDesc: 'Phát âm dùng hai môi chạm nhau (b, p, m) hoặc răng trên chạm nhẹ môi dưới (f). Khi đọc mẫu thường ghép với vần "o / uo".',
      items: [
        { pinyin: 'b', speakChar: '波', vnTip: 'Đọc như "p" (pua) tiếng Việt', aspirated: false, detail: 'Hai môi khép lại rồi mở ra nhẹ nhàng, KHÔNG bật hơi.' },
        { pinyin: 'p', speakChar: '坡', vnTip: 'Đọc như "p" nhưng BẬT HƠI mạnh', aspirated: true, detail: 'Hai môi mím lại, đẩy mạnh luồng hơi từ phổi ra làm rung tờ giấy trước miệng.' },
        { pinyin: 'm', speakChar: '摸', vnTip: 'Đọc như chữ "m" (mua) tiếng Việt', aspirated: false, detail: 'Hai môi khép, luồng hơi đi qua khoang mũi tự nhiên.' },
        { pinyin: 'f', speakChar: '佛', vnTip: 'Đọc như chữ "ph" (phua) tiếng Việt', aspirated: false, detail: 'Răng hàm trên chạm nhẹ vào lòng môi dưới, đẩy hơi nhẹ ra ngoài.' }
      ]
    },
    {
      groupTitle: 'Nhóm 2: Âm đầu lưỡi giữa (d, t, n, l)',
      groupDesc: 'Đầu lưỡi đặt ở phần lợi hàm trên. Khi đọc mẫu ghép với vần "e (ưa/ơ)".',
      items: [
        { pinyin: 'd', speakChar: '得', vnTip: 'Đọc như chữ "t" (tưa) tiếng Việt', aspirated: false, detail: 'Không đọc là "đ"! Đặt đầu lưỡi ở lợi hàm trên, phát âm "t" không bật hơi.' },
        { pinyin: 't', speakChar: '特', vnTip: 'Đọc như chữ "th" (thưa) BẬT HƠI mạnh', aspirated: true, detail: 'Đầu lưỡi chạm lợi hàm trên rồi bật mạnh luồng hơi ra ngoài.' },
        { pinyin: 'n', speakChar: '讷', vnTip: 'Đọc như chữ "n" (nưa) tiếng Việt', aspirated: false, detail: 'Lưỡi hơi cong vào phía trong, âm thoát qua mũi.' },
        { pinyin: 'l', speakChar: '勒', vnTip: 'Đọc như chữ "l" (lưa) tiếng Việt', aspirated: false, detail: 'Đầu lưỡi chạm lợi trên rồi bật nhẹ ra phía ngoài.' }
      ]
    },
    {
      groupTitle: 'Nhóm 3: Âm gốc lưỡi / Cuống lưỡi (g, k, h)',
      groupDesc: 'Phát âm từ phần gốc lưỡi (cuống họng). Khi đọc mẫu thường ghép với vần "e (ưa/ơ)".',
      items: [
        { pinyin: 'g', speakChar: '哥', vnTip: 'Đọc như chữ "c / k" (cưa) tiếng Việt', aspirated: false, detail: 'Gốc lưỡi nâng lên chạm ngạc mềm, đọc "cưa" rõ ràng, không bật hơi.' },
        { pinyin: 'k', speakChar: '科', vnTip: 'Đọc như "kh/k" BẬT HƠI từ cuống họng', aspirated: true, detail: 'Giống vị trí chữ g nhưng bật mạnh luồng hơi từ cuống họng ra ngoài.' },
        { pinyin: 'h', speakChar: '喝', vnTip: 'Đọc giữa chữ "h" và "kh" (khưa nhẹ)', aspirated: false, detail: 'Hơi ma sát nhẹ ở cuống họng, nặng hơn chữ h nhưng nhẹ hơn chữ kh tiếng Việt.' }
      ]
    }
  ],
  finalsGroups: [
    {
      groupTitle: '6 Vận Mẫu Đơn (a, o, e, i, u, ü)',
      items: [
        { pinyin: 'a', speakChar: '啊', vnTip: 'Đọc như "a" tiếng Việt', detail: 'Há rộng miệng tự nhiên, âm vang và sáng.' },
        { pinyin: 'o', speakChar: '喔', vnTip: 'Đọc tròn môi "ô / ua"', detail: 'Khi ghép bo, po, mo, fo nghe như pua, phua, mua, phua.' },
        { pinyin: 'e', speakChar: '鹅', vnTip: 'Đọc giữa "ưa" và "ơ"', detail: 'Khẩu hình mở vừa phải, giữ nguyên vị trí lưỡi tạo âm trung gian ưa-ơ.' },
        { pinyin: 'i', speakChar: '衣', vnTip: 'Đọc như "i" (kéo mép cười)', detail: 'Khóe miệng kéo căng sang hai bên. Đứng một mình viết là yi.' },
        { pinyin: 'u', speakChar: '乌', vnTip: 'Đọc như "u" (chu tròn môi)', detail: 'Chu tròn hai môi về phía trước. Đứng một mình viết là wu.' },
        { pinyin: 'ü', speakChar: '迂', vnTip: 'Đọc như "uy" (Tròn môi từ đầu đến cuối)', detail: 'Đầu lưỡi răng dưới, môi tròn như huýt sáo. Đứng một mình viết là yu.' }
      ]
    },
    {
      groupTitle: '9 Vận Mẫu Kép & Mũi (ai, ei, ao, ou, an, ang, en, eng, ong)',
      items: [
        { pinyin: 'ai', speakChar: '哀', vnTip: 'Đọc như "ai"', detail: 'Mở miệng đọc a rồi lướt nhanh sang i (VD: 哀 āi).' },
        { pinyin: 'ei', speakChar: '非', vnTip: 'Đọc như "ây"', detail: 'Miệng hơi bẹt sang hai bên, đọc giữa "ây" và "ê-i" (VD: 非 fēi).' },
        { pinyin: 'ao', speakChar: '高', vnTip: 'Đọc như "ao"', detail: 'Há to miệng ở âm a rồi khép tròn môi về âm o/u (VD: 高 gāo).' },
        { pinyin: 'ou', speakChar: '欧', vnTip: 'Đọc như "âu"', detail: 'Bắt đầu từ âm ô tròn môi rồi thu nhỏ về u (VD: 欧 ōu).' },
        { pinyin: 'an', speakChar: '安', vnTip: 'Đọc như "an"', detail: 'Vận mẫu mũi trước, kết thúc đầu lưỡi chạm lợi trên (VD: 安 ān).' },
        { pinyin: 'ang', speakChar: '昂', vnTip: 'Đọc như "ang"', detail: 'Vận mẫu mũi sau: há rộng miệng, âm vang sâu khoang mũi (VD: 昂 áng).' },
        { pinyin: 'en', speakChar: '恩', vnTip: 'Đọc như "ân"', detail: 'Khẩu hình hẹp, kết thúc chạm lợi trên (VD: 恩 ēn).' },
        { pinyin: 'eng', speakChar: '灯', vnTip: 'Đọc như "âng"', detail: 'Vận mẫu mũi sau, đọc trầm và vang hơn en (VD: 灯 dēng).' },
        { pinyin: 'ong', speakChar: '红', vnTip: 'Đọc như "ung" (Môi mở nhẹ)', detail: 'Khác tiếng Việt: không ngậm kín phồng má mà môi hơi tròn mở (VD: 红 hóng).' }
      ]
    }
  ],
  practiceSyllables: [
    { pinyin: 'ba', hanzi: '八', meaning: 'b + a (Số 8)', note: 'Không bật hơi' },
    { pinyin: 'po', hanzi: '坡', meaning: 'p + o (Sườn dốc)', note: 'Bật hơi mạnh!' },
    { pinyin: 'de', hanzi: '得', meaning: 'd + e (Đạt được)', note: 'Đọc như tưa' },
    { pinyin: 'mi', hanzi: '咪', meaning: 'm + i (Meo)', note: 'Mỉm cười' },
    { pinyin: 'fu', hanzi: '夫', meaning: 'f + u (Phu)', note: 'Răng chạm môi' },
    { pinyin: 'nǚ', hanzi: '女', meaning: 'n + ü (Phụ nữ)', note: 'Giữ 2 chấm tròn môi' },
    { pinyin: 'pai', hanzi: '拍', meaning: 'p + ai (Vỗ tay)', note: 'Bật hơi mạnh!' },
    { pinyin: 'fei', hanzi: '非', meaning: 'f + ei (Bay)', note: 'Đọc như phây' },
    { pinyin: 'tao', hanzi: '涛', meaning: 't + ao (Sóng lớn)', note: 'Bật hơi mạnh!' },
    { pinyin: 'lou', hanzi: '搂', meaning: 'l + ou (Lầu)', note: 'Đọc như lâu' },
    { pinyin: 'gan', hanzi: '干', meaning: 'g + an (Khô/Can)', note: 'Đọc như can' },
    { pinyin: 'kang', hanzi: '康', meaning: 'k + ang (Khỏe)', note: 'Bật hơi cuống họng!' },
    { pinyin: 'ken', hanzi: '肯', meaning: 'k + en (Bằng lòng)', note: 'Bật hơi mạnh!' },
    { pinyin: 'peng', hanzi: '烹', meaning: 'p + eng (Nấu)', note: 'Bật hơi mạnh!' },
    { pinyin: 'hong', hanzi: '轰', meaning: 'h + ong (Màu đỏ)', note: 'Môi tròn không phồng má' }
  ],
  toneContours: [
    {
      toneNumber: 1,
      name: 'Thanh 1 (Âm bằng cao)',
      mark: 'ˉ (ā)',
      pitchCode: '55',
      desc: 'Cao, phẳng và kéo dài đều từ 5 đến 5. Giống bác sĩ bảo bạn há miệng kêu Aaaa...',
      exampleHanzi: '妈',
      examplePinyin: 'mā',
      meaning: 'Mẹ'
    },
    {
      toneNumber: 2,
      name: 'Thanh 2 (Đi lên cao)',
      mark: 'ˊ (á)',
      pitchCode: '35',
      desc: 'Từ tầm trung bậc 3 vuốt cao vút lên bậc 5. Tương tự dấu sắc trong câu hỏi tiếng Việt (Hả?, Á?).',
      exampleHanzi: '麻',
      examplePinyin: 'má',
      meaning: 'Tê / Vừng'
    },
    {
      toneNumber: 3,
      name: 'Thanh 3 (Trầm rồi uốn lên)',
      mark: 'ˇ (ǎ)',
      pitchCode: '214',
      desc: 'Hạ sâu từ bậc 2 xuống đáy bậc 1 rồi vòng lên bậc 4. Đứng trước từ khác chỉ đọc nửa thanh 3 (2→1).',
      exampleHanzi: '马',
      examplePinyin: 'mǎ',
      meaning: 'Con ngựa'
    },
    {
      toneNumber: 4,
      name: 'Thanh 4 (Dứt khoát từ trên xuống)',
      mark: 'ˋ (à)',
      pitchCode: '51',
      desc: 'Chém dứt khoát từ đỉnh 5 xuống đáy 1. Tuyệt đối không đọc thành dấu huyền tiếng Việt.',
      exampleHanzi: '骂',
      examplePinyin: 'mà',
      meaning: 'Mắng mỏ'
    }
  ],
  toneRules: [
    {
      ruleNum: 1,
      title: 'Hai Thanh 3 đi liền nhau (3 + 3 → 2 + 3)',
      formula: 'ˇ + ˇ → ˊ + ˇ',
      desc: 'Chữ thứ nhất đổi cách đọc thành Thanh 2. Khi viết Pinyin vẫn giữ nguyên dấu Thanh 3.',
      examples: [
        { hanzi: '你好', writtenPinyin: 'nǐ hǎo', readPinyin: 'ní hǎo', meaning: 'Xin chào' },
        { hanzi: '很好', writtenPinyin: 'hěn hǎo', readPinyin: 'hén hǎo', meaning: 'Rất tốt' }
      ]
    },
    {
      ruleNum: 2,
      title: 'Ba Thanh 3 đi liền nhau (3 + 3 + 3)',
      formula: 'ˇ + ˇ + ˇ → 3 + 2 + 3',
      desc: 'Biến điệu chữ ở giữa thành Thanh 2 hoặc theo cụm ngữ nghĩa.',
      examples: [
        { hanzi: '我很好', writtenPinyin: 'wǒ hěn hǎo', readPinyin: 'wǒ hén hǎo', meaning: 'Tôi rất khỏe (3 thanh 3: chữ giữa đọc thanh 2)' },
        { hanzi: '我也好', writtenPinyin: 'wǒ yě hǎo', readPinyin: 'wǒ yé hǎo', meaning: 'Tôi cũng khỏe' },
        { hanzi: '你好马', writtenPinyin: 'nǐ hǎo mǎ', readPinyin: 'ní hǎo mǎ / nǐ háo mǎ', meaning: 'Chào anh Mã (Ví dụ 3 thanh 3: 马 mǎ là họ Mã/con ngựa, khác với câu hỏi "你好吗 nǐ hǎo ma" = Bạn khỏe không)' }
      ]
    },
    {
      ruleNum: 3,
      title: 'Nửa Thanh 3 (Điểm nhấn mốc 01:00:38)',
      formula: 'ˇ + (Thanh 1, 2, 4, nhẹ) → Chỉ đọc nửa 2→1',
      desc: 'Thanh 3 đứng trước Thanh 1, 2, 4 hoặc Thanh nhẹ thì CHỈ ĐỌC NỬA ĐI XUỐNG (2→1), không uốn vút lên.',
      examples: [
        { hanzi: '很高', writtenPinyin: 'hěn gāo', readPinyin: 'hěn gāo (2→1)', meaning: 'Rất cao (trước T1)' },
        { hanzi: '很忙', writtenPinyin: 'hěn máng', readPinyin: 'hěn máng (2→1)', meaning: 'Rất bận (trước T2)' },
        { hanzi: '很大', writtenPinyin: 'hěn dà', readPinyin: 'hěn dà (2→1)', meaning: 'Rất to (trước T4)' },
        { hanzi: '你们', writtenPinyin: 'nǐmen', readPinyin: 'nǐmen (2→1)', meaning: 'Các bạn (trước Thanh nhẹ)' }
      ]
    },
    {
      ruleNum: 4,
      title: 'Biến điệu của chữ 不 (bù → bú)',
      formula: 'bù + ˋ (Thanh 4) → bú + ˋ',
      desc: 'Bản gốc 不 là Thanh 4 (bù). Đứng trước chữ mang Thanh 4 đổi thành Thanh 2 (bú). Đứng trước Thanh 1, 2, 3 giữ nguyên bù.',
      examples: [
        { hanzi: '不大', writtenPinyin: 'bù dà', readPinyin: 'bú dà (Biến điệu!)', meaning: 'Không to' },
        { hanzi: '不高', writtenPinyin: 'bù gāo', readPinyin: 'bù gāo (Giữ nguyên bù)', meaning: 'Không cao' },
        { hanzi: '不忙', writtenPinyin: 'bù máng', readPinyin: 'bù máng (Giữ nguyên bù)', meaning: 'Không bận' }
      ]
    }
  ],
  strokes: [
    { name: '1. Nét Ngang (横 - Héng)', symbol: '一', direction: 'Từ trái sang phải', tip: 'Kéo ngang, hơi nhấn nhẹ ở điểm kết thúc.', svgPath: 'M 25 50 L 135 50' },
    { name: '2. Nét Sổ (竖 - Shù)', symbol: '丨', direction: 'Thẳng từ trên xuống', tip: 'Giữ nét đứng thẳng làm cột trụ vững vàng.', svgPath: 'M 80 15 L 80 85' },
    { name: '3. Nét Phẩy (撇 - Piě)', symbol: '丿', direction: 'Trên phải cong xuống dưới trái', tip: 'Đặt bút đậm rồi vuốt nhẹ thanh thoát về trái.', svgPath: 'M 105 18 Q 85 58 40 82' },
    { name: '4. Nét Chấm (点 - Diǎn)', symbol: '丶', direction: 'Trên trái nhấn xuống dưới phải', tip: 'Đầu nhọn, đuôi tròn đậm, không chấm tròn như dấu chấm.', svgPath: 'M 65 30 Q 82 45 95 65' },
    { name: '5. Nét Mác (捺 - Nà)', symbol: '乀', direction: 'Trên trái kéo xuống dưới phải', tip: 'Bắt đầu thanh, xuống chân nhấn đậm rồi vẩy nhẹ.', svgPath: 'M 40 20 Q 75 60 125 80' },
    { name: '6. Nét Hất (提 - Tí)', symbol: '㇀', direction: 'Dưới trái hất lên trên phải', tip: 'Nhấn ở dưới rồi hất nhanh nhọn lên phía trên.', svgPath: 'M 40 75 L 115 30' },
    { name: '7. Nét Móc (钩 - Gōu)', symbol: '亅', direction: 'Cuối nét sổ/ngang móc nhọn', tip: 'Có sổ móc, ngang móc, luôn bật nhẹ mũi bút.', svgPath: 'M 85 15 L 85 75 L 62 62' },
    { name: '8. Nét Gập (折 - Zhé)', symbol: '𠃍', direction: 'Đang kéo thì gập chuyển hướng', tip: 'Gập dứt khoát tại góc vuông chuyển hướng.', svgPath: 'M 35 28 L 115 28 L 115 82' }
  ],
  strokeRules: [
    { ruleNum: 1, title: 'Ngang trước sổ sau (先横后竖)', desc: 'Nét ngang viết trước, nét sổ cắt qua viết sau.', examples: [{ hanzi: '十', pinyin: 'shí', hv: 'Thập', meaning: 'Số 10 (Ngang 一 trước, Sổ 丨 sau)' }] },
    { ruleNum: 2, title: 'Phẩy trước mác sau (先撇后捺)', desc: 'Nét phẩy nghiêng trái viết trước, nét mác nghiêng phải viết sau.', examples: [{ hanzi: '人', pinyin: 'rén', hv: 'Nhân', meaning: 'Người' }, { hanzi: '八', pinyin: 'bā', hv: 'Bát', meaning: 'Số 8' }] },
    { ruleNum: 3, title: 'Trên trước dưới sau (从上到下)', desc: 'Các bộ phận trên viết trước, dưới viết sau.', examples: [{ hanzi: '二', pinyin: 'èr', hv: 'Nhị', meaning: 'Số 2' }, { hanzi: '三', pinyin: 'sān', hv: 'Tam', meaning: 'Số 3' }] },
    { ruleNum: 4, title: 'Trái trước phải sau (从左到右)', desc: 'Phần bên trái viết trước, phần bên phải viết sau.', examples: [{ hanzi: '川', pinyin: 'chuān', hv: 'Xuyên', meaning: 'Dòng sông' }, { hanzi: '好', pinyin: 'hǎo', hv: 'Hảo', meaning: 'Tốt (Bộ Nữ trái, Bộ Tử phải)' }] },
    { ruleNum: 5, title: 'Ngoài trước trong sau (先外后内)', desc: 'Viết khung ngoài trước, nhân bên trong sau.', examples: [{ hanzi: '月', pinyin: 'yuè', hv: 'Nguyệt', meaning: 'Mặt trăng' }] },
    { ruleNum: 6, title: 'Vào nhà trước đóng cửa sau (先里后封口)', desc: 'Viết khung ngoài → viết ruột bên trong → gạch đáy đóng cửa.', examples: [{ hanzi: '日', pinyin: 'rì', hv: 'Nhật', meaning: 'Mặt trời / Ngày' }] },
    { ruleNum: 7, title: 'Giữa trước hai bên sau (先中间后两边)', desc: 'Chữ đối xứng: nét chính giữa trước, hai bên sau.', examples: [{ hanzi: '小', pinyin: 'xiǎo', hv: 'Tiểu', meaning: 'Nhỏ bé' }] }
  ],
  vocab: [
    {
      id: 1,
      hanzi: '你',
      pinyin: 'nǐ',
      hanViet: 'Nhĩ',
      type: 'Đại từ',
      meaning: 'Bạn, anh, chị (ngôi thứ 2 số ít)',
      radicals: [
        { char: '亻', name: 'Bộ Nhân đứng', desc: 'Người' },
        { char: '冖', name: 'Bộ Mịch', desc: 'Khăn trùm' },
        { char: '小', name: 'Bộ Tiểu', desc: 'Nhỏ bé' }
      ],
      mnemonic: 'Người (亻) đội khăn (冖) che chở cho đứa bé nhỏ (小) đối diện chính là "Bạn" (你).',
      exampleHanzi: '你好！',
      examplePinyin: 'Nǐ hǎo!',
      exampleMeaning: 'Xin chào bạn!'
    },
    {
      id: 2,
      hanzi: '好',
      pinyin: 'hǎo',
      hanViet: 'Hảo',
      type: 'Tính từ',
      meaning: 'Tốt, khỏe, đẹp, hay',
      radicals: [
        { char: '女', name: 'Bộ Nữ', desc: 'Phụ nữ' },
        { char: '子', name: 'Bộ Tử', desc: 'Con cái' }
      ],
      mnemonic: 'Người phụ nữ (女) sinh được con (子) đủ nếp đủ tẻ là điều rất "Tốt đẹp" (好).',
      exampleHanzi: '很好',
      examplePinyin: 'hěn hǎo',
      exampleMeaning: 'Rất tốt / Rất khỏe'
    },
    {
      id: 3,
      hanzi: '吗',
      pinyin: 'ma',
      hanViet: 'Ma',
      type: 'Trợ từ nghi vấn',
      meaning: 'Không? Phải không? (Hỏi Có/Không)',
      radicals: [
        { char: '口', name: 'Bộ Khẩu', desc: 'Cái miệng' },
        { char: '马', name: 'Bộ Mã', desc: 'Con ngựa' }
      ],
      mnemonic: 'Dùng cái miệng (口) hỏi xem con ngựa (马) chạy nhanh "không?" (吗).',
      exampleHanzi: '你好吗？',
      examplePinyin: 'Nǐ hǎo ma?',
      exampleMeaning: 'Bạn có khỏe không?'
    },
    {
      id: 4,
      hanzi: '忙',
      pinyin: 'máng',
      hanViet: 'Mang',
      type: 'Tính từ',
      meaning: 'Bận, bận rộn',
      radicals: [
        { char: '忄', name: 'Bộ Tâm đứng', desc: 'Trái tim, tâm trí' },
        { char: '亡', name: 'Bộ Vong', desc: 'Mất đi' }
      ],
      mnemonic: 'Làm việc "bận rộn" (忙) đến mức tâm trí (忄) như mất tiêu (亡).',
      exampleHanzi: '你忙吗？',
      examplePinyin: 'Nǐ máng ma?',
      exampleMeaning: 'Bạn có bận không?'
    },
    {
      id: 5,
      hanzi: '大',
      pinyin: 'dà',
      hanViet: 'Đại',
      type: 'Tính từ',
      meaning: 'To, lớn',
      radicals: [
        { char: '一', name: 'Nét Ngang', desc: 'Dang tay' },
        { char: '人', name: 'Bộ Nhân', desc: 'Con người' }
      ],
      mnemonic: 'Hình ảnh con người (人) dang rộng cả 2 cánh tay (一) để diễn tả cái "To lớn" (大).',
      exampleHanzi: '很大 / 不大',
      examplePinyin: 'hěn dà / bú dà',
      exampleMeaning: 'Rất to / Không to'
    },
    {
      id: 6,
      hanzi: '很',
      pinyin: 'hěn',
      hanViet: 'Ngân',
      type: 'Phó từ chỉ mức độ',
      meaning: 'Rất, lắm (Đứng trước tính từ)',
      radicals: [
        { char: '彳', name: 'Bộ Xích', desc: 'Bước chân' },
        { char: '艮', name: 'Bộ Cấn', desc: 'Cứng rắn' }
      ],
      mnemonic: 'Trước tính từ trong câu khẳng định luôn thêm 很 để câu tự nhiên cân bằng.',
      exampleHanzi: '很忙',
      examplePinyin: 'hěn máng',
      exampleMeaning: 'Rất bận (Đọc nửa thanh 3)'
    },
    {
      id: 7,
      hanzi: '不',
      pinyin: 'bù (bú)',
      hanViet: 'Bất',
      type: 'Phó từ phủ định',
      meaning: 'Không, chẳng',
      radicals: [
        { char: '一', name: 'Nét Ngang', desc: 'Mặt đất' },
        { char: '丿丨丶', name: '3 nét dưới', desc: 'Cây đâm rễ' }
      ],
      mnemonic: 'Đứng trước Thanh 4 thì biến điệu đọc thành bú (bú dà 不大).',
      exampleHanzi: '不忙 / 不大',
      examplePinyin: 'bù máng / bú dà',
      exampleMeaning: 'Không bận / Không to'
    },
    {
      id: 8,
      hanzi: '呢',
      pinyin: 'ne',
      hanViet: 'Ni',
      type: 'Trợ từ ngữ khí',
      meaning: 'Thế còn... thì sao? (Hỏi tỉnh lược)',
      radicals: [
        { char: '口', name: 'Bộ Khẩu', desc: 'Miệng' },
        { char: '尸', name: 'Bộ Thi', desc: 'Hình người' },
        { char: '匕', name: 'Bộ Chủy', desc: 'Thìa' }
      ],
      mnemonic: 'Dùng miệng (口) hỏi ngược lại: "Thế còn bạn?" (你呢？).',
      exampleHanzi: '我很好，你呢？',
      examplePinyin: 'Wǒ hěn hǎo, nǐ ne?',
      exampleMeaning: 'Tôi rất khỏe, thế còn bạn?'
    },
    {
      id: 9,
      hanzi: '他',
      pinyin: 'tā',
      hanViet: 'Tha',
      type: 'Đại từ ngôi 3',
      meaning: 'Anh ấy, ông ấy (Nam giới)',
      radicals: [
        { char: '亻', name: 'Bộ Nhân đứng', desc: 'Người nam' },
        { char: '也', name: 'Chữ Dã', desc: 'Cũng' }
      ],
      mnemonic: 'Có Bộ Nhân đứng (亻) bên trái chỉ phái mạnh ("Anh ấy").',
      exampleHanzi: '他很忙。',
      examplePinyin: 'Tā hěn máng.',
      exampleMeaning: 'Anh ấy rất bận.'
    },
    {
      id: 10,
      hanzi: '她',
      pinyin: 'tā',
      hanViet: 'Tha',
      type: 'Đại từ ngôi 3',
      meaning: 'Cô ấy, chị ấy (Nữ giới)',
      radicals: [
        { char: '女', name: 'Bộ Nữ', desc: 'Phụ nữ' },
        { char: '也', name: 'Chữ Dã', desc: 'Cũng' }
      ],
      mnemonic: 'Đọc giống hệt 他 (tā), nhưng thay bằng Bộ Nữ (女) để chỉ phái đẹp ("Cô ấy").',
      exampleHanzi: '她好吗？',
      examplePinyin: 'Tā hǎo ma?',
      exampleMeaning: 'Cô ấy có khỏe không?'
    }
  ],
  dialogues: [
    {
      title: 'Tình huống 1: Chào hỏi cơ bản',
      lines: [
        { speaker: 'A', hanzi: '你好！', pinyin: 'Nǐ hǎo! (Đọc: Ní hǎo!)', vn: 'Xin chào bạn!', note: '2 thanh 3 đi liền: 你 đọc thành ní.' },
        { speaker: 'B', hanzi: '你好！', pinyin: 'Nǐ hǎo! (Đọc: Ní hǎo!)', vn: 'Chào bạn!', note: 'Chào phổ biến nhất mọi thời điểm.' }
      ]
    },
    {
      title: 'Tình huống 2: Hỏi thăm sức khỏe & dùng 呢 (ne)',
      lines: [
        { speaker: 'A', hanzi: '你好吗？', pinyin: 'Nǐ hǎo ma?', vn: 'Bạn có khỏe không?', note: 'Thêm trợ từ 吗 vào cuối câu.' },
        { speaker: 'B', hanzi: '很好，你呢？', pinyin: 'Hěn hǎo, nǐ ne?', vn: 'Rất khỏe, thế còn bạn?', note: '你呢 = Thế còn bạn?' },
        { speaker: 'A', hanzi: '我也很好。', pinyin: 'Wǒ yě hěn hǎo.', vn: 'Tôi cũng rất khỏe.', note: 'Đọc mượt là Wǒ yé hén hǎo.' }
      ]
    },
    {
      title: 'Tình huống 3: Hỏi thăm công việc & ngôi thứ 3',
      lines: [
        { speaker: 'A', hanzi: '你忙吗？', pinyin: 'Nǐ máng ma?', vn: 'Bạn có bận không?', note: '你 đọc nửa thanh 3 trước máng.' },
        { speaker: 'B', hanzi: '不忙。他呢？', pinyin: 'Bù máng. Tā ne?', vn: 'Không bận. Thế còn anh ấy?', note: '不 trước máng giữ nguyên bù.' },
        { speaker: 'A', hanzi: '他很忙。', pinyin: 'Tā hěn máng.', vn: 'Anh ấy rất bận.', note: '很 đọc nửa thanh 3.' }
      ]
    },
    {
      title: 'Tình huống 4: Biến điệu 不 trước Thanh 4',
      lines: [
        { speaker: 'A', hanzi: '大吗？', pinyin: 'Dà ma?', vn: 'Có to không?', note: '大 (Thanh 4) đọc mạnh dứt khoát.' },
        { speaker: 'B', hanzi: '不大。', pinyin: 'Bù dà → Đọc: Bú dà!', vn: 'Không to.', note: '不 trước Thanh 4 đổi thành bú.' }
      ]
    }
  ],
  quiz: [
    {
      q: 'Câu 1: Nhóm thanh mẫu nào sau đây đều là "Âm bật hơi" (làm bay tờ giấy trước miệng)?',
      speakWord: '坡特科',
      options: ['b, d, g', 'p, t, k', 'm, n, l', 'f, h, b'],
      correct: 1,
      explanation: 'Ba âm p (pua bật hơi), t (thưa bật hơi), k (khưa bật hơi) là 3 thanh mẫu bật hơi mạnh của Bài 1.'
    },
    {
      q: 'Câu 2: Khi hai chữ mang Thanh 3 đi liền nhau như "你好", ta phát âm chuẩn như thế nào?',
      speakWord: '你好',
      options: [
        'Đọc cả hai thành Thanh 2: ní háo',
        'Đổi âm tiết thứ nhất thành Thanh 2: "ní hǎo" (viết vẫn nǐ hǎo)',
        'Đổi âm tiết thứ hai thành Thanh 1: nǐ hāo',
        'Đọc thành hai dấu nặng'
      ],
      correct: 1,
      explanation: 'Quy tắc 3 + 3: âm tiết đầu biến thành Thanh 2 (ní hǎo), viết Pinyin vẫn giữ dấu hỏi.'
    },
    {
      q: 'Câu 3 (Mốc 01:00:38): Chữ "不" (bù) ghép trước chữ "大" (dà - Thanh 4) đọc là gì?',
      speakWord: '不大',
      options: ['bù dà (giữ nguyên)', 'bǔ dà (thanh 3)', 'bú dà (đổi thành Thanh 2)', 'bū dà (thanh 1)'],
      correct: 2,
      explanation: 'Chữ 不 (bù) đứng trước âm tiết mang Thanh 4 đổi thành Thanh 2: đọc là "bú dà".'
    },
    {
      q: 'Câu 4 (Mốc 01:00:38): Thế nào là quy tắc đọc "Nửa thanh 3" trong 很高 (hěn gāo), 很忙 (hěn máng)?',
      speakWord: '很忙',
      options: [
        'Thanh 3 đứng trước Thanh 1, 2, 4 hoặc nhẹ chỉ đọc nửa đi xuống (2→1), không vút lên.',
        'Đọc thành Thanh 2 trong mọi trường hợp.',
        'Bỏ luôn thanh điệu đọc như Thanh 1.',
        'Chỉ đọc nửa uốn lên.'
      ],
      correct: 0,
      explanation: 'Thầy Dương Châu giải thích: Thanh 3 trước Thanh 1, 2, 4 chỉ đọc nửa đi xuống (2→1) giúp câu nói mượt mà.'
    },
    {
      q: 'Câu 5: Vận mẫu "ü" (tròn môi) khi đứng một mình thì viết Pinyin như thế nào?',
      speakWord: '迂',
      options: ['wu', 'yi', 'yu (bỏ 2 chấm nhưng vẫn đọc tròn môi uy)', 'yü'],
      correct: 2,
      explanation: 'ü đứng một mình thêm y phía trước và bỏ dấu 2 chấm thành "yu", đọc tròn môi là uy.'
    },
    {
      q: 'Câu 6: Chữ "好" (hǎo - Tốt) gồm 2 bộ thủ nào ghép lại?',
      speakWord: '好',
      options: [
        'Bộ Nhân đứng (亻) và Bộ Tiểu (小)',
        'Bộ Nữ (女) bên trái và Bộ Tử (子) bên phải',
        'Bộ Khẩu (口) và Bộ Mã (马)',
        'Bộ Tâm đứng (忄) và Bộ Vong (亡)'
      ],
      correct: 1,
      explanation: '好 gồm Bộ Nữ (女) và Bộ Tử (子): Gia đình có phụ nữ và con cái đủ nếp tẻ là điều tốt đẹp.'
    },
    {
      q: 'Câu 7: Hai chữ "他" (Anh ấy) và "她" (Cô ấy) khác nhau ở điểm nào?',
      speakWord: '他',
      options: [
        'Phát âm hoàn toàn khác nhau',
        'Cùng đọc là "tā", nhưng 他 dùng Bộ Nhân đứng (亻), còn 她 dùng Bộ Nữ (女)',
        '他 dùng cho đồ vật, 她 dùng cho người',
        'Không có sự khác biệt'
      ],
      correct: 1,
      explanation: 'Cả hai đều đọc là tā (Thanh 1). 他 là nam (Bộ Nhân đứng), 她 là nữ (Bộ Nữ).'
    },
    {
      q: 'Câu 8: Để nói "Tôi rất khỏe, thế còn bạn?" bằng tiếng Trung, chọn câu nào?',
      speakWord: '我很好，你呢？',
      options: [
        '你好吗，你呢？',
        '我很好，你吗？',
        '我很好，你呢？ (Wǒ hěn hǎo, nǐ ne?)',
        '我不忙，他吗？'
      ],
      correct: 2,
      explanation: 'Trợ từ 呢 dùng hỏi tỉnh lược: 我很好，你呢？ (Wǒ hěn hǎo, nǐ ne?).'
    }
  ]
};
