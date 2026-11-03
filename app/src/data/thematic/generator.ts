import { ThematicSentence } from '../../types/thematic';

// ==========================================
// DYNAMIC SENTENCE GENERATOR (TẠO CÂU KẾT HỢP NGẪU NHIÊN)
// ==========================================
const subjects = [
  { hanzi: '我', pinyin: 'Wǒ', vn: 'Tôi' },
  { hanzi: '你', pinyin: 'Nǐ', vn: 'Bạn' },
  { hanzi: '他', pinyin: 'Tā', vn: 'Anh ấy' },
  { hanzi: '她', pinyin: 'Tā', vn: 'Cô ấy' },
  { hanzi: '我们', pinyin: 'Wǒmen', vn: 'Chúng tôi' },
  { hanzi: '我朋友', pinyin: 'Wǒ péngyou', vn: 'Bạn tôi' },
  { hanzi: '我哥哥', pinyin: 'Wǒ gēge', vn: 'Anh trai tôi' },
  { hanzi: '王老师', pinyin: 'Wáng lǎoshī', vn: 'Thầy Vương' }
];

const times = [
  { hanzi: '今天', pinyin: 'jīntiān', vn: 'hôm nay' },
  { hanzi: '明天', pinyin: 'míngtiān', vn: 'ngày mai' },
  { hanzi: '昨天', pinyin: 'zuótiān', vn: 'hôm qua' },
  { hanzi: '星期一', pinyin: 'xīngqīyī', vn: 'thứ Hai' },
  { hanzi: '星期三', pinyin: 'xīngqīsān', vn: 'thứ Tư' },
  { hanzi: '星期六', pinyin: 'xīngqīliù', vn: 'thứ Bảy' },
  { hanzi: '星期天', pinyin: 'xīngqītiān', vn: 'Chủ Nhật' },
  { hanzi: '早上八点', pinyin: 'zǎoshang bā diǎn', vn: '8 giờ sáng' },
  { hanzi: '下午两点', pinyin: 'xiàwǔ liǎng diǎn', vn: '2 giờ chiều' },
  { hanzi: '晚上七点', pinyin: 'wǎnshang qī diǎn', vn: '7 giờ tối' }
];

const locations = [
  { hanzi: '在学校', pinyin: 'zài xuéxiào', vn: 'ở trường' },
  { hanzi: '在家', pinyin: 'zài jiā', vn: 'ở nhà' },
  { hanzi: '在图书馆', pinyin: 'zài túshūguǎn', vn: 'ở thư viện' },
  { hanzi: '在医院', pinyin: 'zài yīyuàn', vn: 'ở bệnh viện' },
  { hanzi: '在超市', pinyin: 'zài chāoshì', vn: 'ở siêu thị' },
  { hanzi: '在饭馆', pinyin: 'zài fànguǎn', vn: 'ở quán ăn' },
  { hanzi: '在中国银行', pinyin: 'zài Zhōngguó Yínháng', vn: 'ở Ngân hàng Trung Quốc' },
  { hanzi: '去北京', pinyin: 'qù Běijīng', vn: 'đi Bắc Kinh' }
];

const actions = [
  { hanzi: '学中文。', pinyin: 'xué Zhōngwén.', vn: 'học tiếng Trung.' },
  { hanzi: '买三个苹果。', pinyin: 'mǎi sān gè píngguǒ.', vn: 'mua ba quả táo.' },
  { hanzi: '看医生。', pinyin: 'kàn yīshēng.', vn: 'khám bác sĩ.' },
  { hanzi: '吃一碗牛肉面。', pinyin: 'chī yì wǎn niúròumiàn.', vn: 'ăn một bát mì bò.' },
  { hanzi: '喝一杯热咖啡。', pinyin: 'hē yì bēi rè kāfēi.', vn: 'uống một ly cà phê nóng.' },
  { hanzi: '买两本书。', pinyin: 'mǎi liǎng běn shū.', vn: 'mua hai cuốn sách.' },
  { hanzi: '看大熊猫。', pinyin: 'kàn dàxióngmāo.', vn: 'xem gấu trúc.' },
  { hanzi: '见好朋友。', pinyin: 'jiàn hǎo péngyou.', vn: 'gặp bạn thân.' },
  { hanzi: '换一点儿钱。', pinyin: 'huàn yìdiǎnr qián.', vn: 'đổi một ít tiền.' },
  { hanzi: '吃饺子喝茶。', pinyin: 'chī jiǎozi hē chá.', vn: 'ăn sủi cảo uống trà.' }
];

/**
 * Sinh câu ngẫu nhiên phong phú kết hợp Chủ ngữ + Thời gian + Địa điểm + Hành động
 */
export function generateRandomSentence(): ThematicSentence {
  const s = subjects[Math.floor(Math.random() * subjects.length)];
  const t = times[Math.floor(Math.random() * times.length)];
  const l = locations[Math.floor(Math.random() * locations.length)];
  const a = actions[Math.floor(Math.random() * actions.length)];

  const hanzi = `${s.hanzi}${t.hanzi}${l.hanzi}${a.hanzi}`;
  const pinyin = `${s.pinyin} ${t.pinyin} ${l.pinyin} ${a.pinyin}`;
  const meaning = `${s.vn} ${t.vn} ${l.vn} ${a.vn}`;

  return {
    id: Date.now() + Math.floor(Math.random() * 10000),
    hanzi,
    pinyin,
    meaning,
    difficulty: 'Trung cấp',
    tip: '🎲 Câu tạo ngẫu nhiên kết hợp [Chủ ngữ + Thời gian + Địa điểm + Hành động].'
  };
}
