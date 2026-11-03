import { ThematicTopic } from '../../../types/thematic';

export const countriesTopic: ThematicTopic = {
  id: 'countries_languages',
  title: 'Quốc Gia, Quốc Tịch & Ngôn Ngữ',
  chineseTitle: '国家与语言',
  pinyinTitle: 'Guójiā yǔ yǔyán',
  iconName: 'Globe',
  badge: 'Chủ đề 11 • Hội nhập Quốc tế',
  color: 'from-blue-600 to-indigo-700',
  desc: 'Các quốc gia (Việt Nam, Trung Quốc, Anh, Mỹ, Nhật, Hàn, Pháp, Đức...), quy tắc nói quốc tịch (+人), các ngôn ngữ (tiếng Việt, tiếng Trung, tiếng Anh, tiếng Pháp...), mẫu câu hỏi quốc tịch 你是哪国人 và hỏi khả năng ngôn ngữ 你会说中文吗.',
  grammarPoints: [
    {
      id: 1,
      title: 'Cách hỏi và trả lời quốc tịch: 是哪国人 vs 是 + [Tên nước] + 人',
      formula: 'Hỏi: Chủ ngữ + 是哪国人？ (shì nǎ guó rén?) | Đáp: Chủ ngữ + 是 + [Quốc gia] + 人',
      explanation: 'Trong tiếng Trung, để chỉ người của một quốc gia nào đó, chỉ cần lấy tên quốc gia ghép trực tiếp với từ 人 (rén - người).',
      usageNotes: [
        'Việt Nam (越南) + 人 = 越南人 (Người Việt Nam)',
        'Trung Quốc (中国) + 人 = 中国人 (Người Trung Quốc)',
        'Nước Anh (英国) + 人 = 英国人 (Người Anh)',
        'Nước Mỹ (美国) + 人 = 美国人 (Người Mỹ)',
        'Hỏi "Bạn là người nước nào?": 你是哪国人？ (Nǐ shì nǎ guó rén?)'
      ],
      examples: [
        { hanzi: '我是越南人。', pinyin: 'Wǒ shì Yuènán rén.', meaning: 'Tôi là người Việt Nam.' },
        { hanzi: '她是哪国人？她是美国人。', pinyin: 'Tā shì nǎ guó rén? Tā shì Měiguó rén.', meaning: 'Cô ấy là người nước nào? Cô ấy là người Mỹ.' }
      ]
    },
    {
      id: 2,
      title: 'Cấu trúc hỏi & nói khả năng ngôn ngữ: 会 + 说 + [Tên ngôn ngữ]',
      formula: 'Chủ ngữ + 会 / 不会 + 说 + [Ngôn ngữ] (+ 一点儿)',
      explanation: 'Động từ năng nguyện 会 (huì) diễn tả khả năng có được thông qua học hỏi, rèn luyện. Đi cùng 说 (shuō - nói) để biểu đạt khả năng giao tiếp bằng một thứ tiếng.',
      usageNotes: [
        'Khẳng định: 我会说汉语。(Tôi biết nói tiếng Hán.)',
        'Phủ định: 我不会说日语。(Tôi không biết nói tiếng Nhật.)',
        'Nói một chút: 我会说一点儿英语。(Tôi biết nói một chút tiếng Anh.)',
        'Câu hỏi: 你会说中文吗？ hoặc 你会不会说中文？'
      ],
      examples: [
        { hanzi: '你会说汉语吗？', pinyin: 'Nǐ huì shuō Hànyǔ ma?', meaning: 'Bạn có biết nói tiếng Trung không?' },
        { hanzi: '我会说一点儿英语和中文。', pinyin: 'Wǒ huì shuō yìdiǎnr Yīngyǔ hé Zhōngwén.', meaning: 'Tôi biết nói một chút tiếng Anh và tiếng Trung.' }
      ]
    },
    {
      id: 3,
      title: 'Phân biệt: 中文 (Zhōngwén), 汉语 (Hànyǔ) và 普通话 (Pǔtōnghuà)',
      formula: '中文 (Văn tự/Ngôn ngữ chung) • 汉语 (Hán ngữ học thuật) • 普通话 (Tiếng Phổ Thông chuẩn)',
      explanation: 'Người Trung Quốc và người học tiếng Trung thường dùng linh hoạt các từ này tùy theo ngữ cảnh đời sống hay văn bản.',
      usageNotes: [
        '中文 (Zhōngwén): Rất phổ biến trong đời sống hàng ngày ("học tiếng Trung" = 学中文, "sách tiếng Trung" = 中文书).',
        '汉语 (Hànyǔ): Thuật ngữ chính thống trong giáo trình, học thuật, chứng chỉ HSK (Hànyǔ Shuǐpíng Kǎoshì).',
        '普通话 (Pǔtōnghuà): Tiếng Phổ thông chuẩn của Trung Quốc đại lục (lấy âm Bắc Kinh làm tiêu chuẩn), để phân biệt với tiếng Quảng Đông (粤语), tiếng Thượng Hải, tiếng Phúc Kiến...',
        'Tên các thứ tiếng khác thường thêm 语 (yǔ) hoặc 文 (wén): 英语/英文 (tiếng Anh), 越南语/越文 (tiếng Việt), 日语/日文 (tiếng Nhật), 法语/法文 (tiếng Pháp).'
      ],
      examples: [
        { hanzi: '他在北京语言大学学汉语。', pinyin: 'Tā zài Běijīng Yǔyán Dàxué xué Hànyǔ.', meaning: 'Anh ấy học Hán ngữ tại Đại học Ngôn ngữ Bắc Kinh.' },
        { hanzi: '你的普通话非常标准。', pinyin: 'Nǐ de pǔtōnghuà fēicháng biāozhǔn.', meaning: 'Tiếng Phổ thông của bạn vô cùng chuẩn xác.' }
      ]
    }
  ],
  words: [
    {
      id: 11001,
      hanzi: '越南',
      pinyin: 'Yuènán',
      hanViet: 'Việt Nam',
      meaning: 'Nước Việt Nam',
      type: 'Quốc gia',
      writingGuide: 'Việt 越 (Tẩu 走 + Thoa 戉) + Nam 南 (Thập 十 + Quynh 冂 + Bát 八)',
      exampleSentence: '我出生在越南，我爱我的国家。',
      examplePinyin: 'Wǒ chūshēng zài Yuènán, wǒ ài wǒ de guójiā.',
      exampleVn: 'Tôi sinh ra ở Việt Nam, tôi yêu đất nước của tôi.'
    },
    {
      id: 11002,
      hanzi: '中国',
      pinyin: 'Zhōngguó',
      hanViet: 'Trung Quốc',
      meaning: 'Nước Trung Quốc',
      type: 'Quốc gia',
      writingGuide: 'Trung 中 (đường thẳng xuyên tâm) + Quốc 国 (Vi 口 bên ngoài bao quanh Ngọc 玉)',
      exampleSentence: '中国是一个历史悠久的国家。',
      examplePinyin: 'Zhōngguó shì yí gè lìshǐ yōujiǔ de guójiā.',
      exampleVn: 'Trung Quốc là một đất nước có lịch sử lâu đời.'
    },
    {
      id: 11003,
      hanzi: '英国',
      pinyin: 'Yīngguó',
      hanViet: 'Anh Quốc',
      meaning: 'Nước Anh (UK)',
      type: 'Quốc gia',
      writingGuide: 'Anh 英 (Thảo 艹 + Ương 央) + Quốc 国',
      exampleSentence: '大卫是英国人，他在伦敦工作。',
      examplePinyin: 'Dàwèi shì Yīngguó rén, tā zài Lúndūn gōngzuò.',
      exampleVn: 'David là người Anh, anh ấy làm việc ở London.'
    },
    {
      id: 11004,
      hanzi: '美国',
      pinyin: 'Měiguó',
      hanViet: 'Mỹ Quốc',
      meaning: 'Nước Mỹ (USA)',
      type: 'Quốc gia',
      writingGuide: 'Mỹ 美 (Dương 羊 cừu to + Đại 大) + Quốc 国',
      exampleSentence: '玛丽来自美国纽约。',
      examplePinyin: 'Mǎlì láizì Měiguó Niǔyuē.',
      exampleVn: 'Mary đến từ New York nước Mỹ.'
    },
    {
      id: 11005,
      hanzi: '日本',
      pinyin: 'Rìběn',
      hanViet: 'Nhật Bản',
      meaning: 'Nước Nhật Bản',
      type: 'Quốc gia',
      writingGuide: 'Nhật 日 (mặt trời) + Bản 本 (Mộc 木 có nét gạch ngang chỉ gốc rễ)',
      exampleSentence: '春天很多游客去日本看樱花。',
      examplePinyin: 'Chūntiān hěn duō yóukè qù Rìběn kàn yīnghuā.',
      exampleVn: 'Mùa xuân rất nhiều du khách đi Nhật Bản ngắm hoa anh đào.'
    },
    {
      id: 11006,
      hanzi: '韩国',
      pinyin: 'Hánguó',
      hanViet: 'Hàn Quốc',
      meaning: 'Nước Hàn Quốc',
      type: 'Quốc gia',
      writingGuide: 'Hàn 韩 (Thập 十 + Tảo 早 + Vi 韦) + Quốc 国',
      exampleSentence: '我妹妹很喜欢听韩国音乐。',
      examplePinyin: 'Wǒ mèimei hěn xǐhuan tīng Hánguó yīnyuè.',
      exampleVn: 'Em gái tôi rất thích nghe nhạc Hàn Quốc.'
    },
    {
      id: 11007,
      hanzi: '法国',
      pinyin: 'Fǎguó',
      hanViet: 'Pháp Quốc',
      meaning: 'Nước Pháp',
      type: 'Quốc gia',
      writingGuide: 'Pháp 法 (Thủy 氵+ Khứ 去) + Quốc 国',
      exampleSentence: '巴黎是法国的首都，非常浪漫。',
      examplePinyin: 'Bālí shì Fǎguó de shǒudū, fēicháng làngmàn.',
      exampleVn: 'Paris là thủ đô của nước Pháp, rất lãng mạn.'
    },
    {
      id: 11008,
      hanzi: '德国',
      pinyin: 'Déguó',
      hanViet: 'Đức Quốc',
      meaning: 'Nước Đức (Germany)',
      type: 'Quốc gia',
      writingGuide: 'Đức 德 (Xích 彳+ Thập 十 + Tứ 四 + Nhất 一 + Tâm 心) + Quốc 国',
      exampleSentence: '德国的汽车在世界上很有名。',
      examplePinyin: 'Déguó de qìchē zài shìjiè shang hěn yǒumíng.',
      exampleVn: 'Ô tô của nước Đức rất nổi tiếng trên thế giới.'
    },
    {
      id: 11009,
      hanzi: '俄罗斯',
      pinyin: 'Éluósī',
      hanViet: 'Nga La Tư',
      meaning: 'Nước Nga (Russia)',
      type: 'Quốc gia',
      writingGuide: 'Nga 俄 + La 罗 + Tư 斯',
      exampleSentence: '俄罗斯的冬天非常冷。',
      examplePinyin: 'Éluósī de dōngtiān fēicháng lěng.',
      exampleVn: 'Mùa đông ở nước Nga vô cùng lạnh.'
    },
    {
      id: 11010,
      hanzi: '澳大利亚',
      pinyin: 'Àodàlìyà',
      hanViet: 'Úc Đại Lợi Á',
      meaning: 'Nước Úc (Australia)',
      type: 'Quốc gia',
      writingGuide: 'Áo 澳 + Đại 大 + Lợi 利 + Á 亚',
      exampleSentence: '澳大利亚有很多袋鼠和考拉。',
      examplePinyin: 'Àodàlìyà yǒu hěn duō dàishǔ hé kǎolā.',
      exampleVn: 'Nước Úc có rất nhiều chuột túi và gấu koala.'
    },
    {
      id: 11011,
      hanzi: '加拿大',
      pinyin: 'Jiānádà',
      hanViet: 'Gia Nã Đại',
      meaning: 'Nước Canada',
      type: 'Quốc gia',
      writingGuide: 'Gia 加 + Nã 拿 + Đại 大',
      exampleSentence: '我叔叔一家住在加拿大。',
      examplePinyin: 'Wǒ shūshu yì jiā zhù zài Jiānádà.',
      exampleVn: 'Gia đình chú tôi sống ở Canada.'
    },
    {
      id: 11012,
      hanzi: '泰国',
      pinyin: 'Tàiguó',
      hanViet: 'Thái Quốc',
      meaning: 'Nước Thái Lan',
      type: 'Quốc gia',
      writingGuide: 'Thái 泰 (Tam 三 + Nhân 人 + Thủy 水) + Quốc 国',
      exampleSentence: '去泰国旅游又近又好玩。',
      examplePinyin: 'Qù Tàiguó lǚyóu yòu jìn yòu hǎowán.',
      exampleVn: 'Đi du lịch Thái Lan vừa gần vừa vui.'
    },
    {
      id: 11013,
      hanzi: '新加坡',
      pinyin: 'Xīnjiāpō',
      hanViet: 'Tân Gia Ba',
      meaning: 'Singapore',
      type: 'Quốc gia',
      writingGuide: 'Tân 新 + Gia 嘉 + Pha 坡',
      exampleSentence: '新加坡是一个花园城市。',
      examplePinyin: 'Xīnjiāpō shì yí gè huāyuán chéngshì.',
      exampleVn: 'Singapore là một thành phố vườn hoa.'
    },
    {
      id: 11014,
      hanzi: '越南人',
      pinyin: 'Yuènán rén',
      hanViet: 'Việt Nam nhân',
      meaning: 'Người Việt Nam',
      type: 'Quốc tịch',
      writingGuide: 'Tên nước 越南 + Nhân 人',
      exampleSentence: '我们都是热情友好的越南人。',
      examplePinyin: 'Wǒmen dōu shì rèqíng yǒuhǎo de Yuènán rén.',
      exampleVn: 'Chúng tôi đều là những người Việt Nam nhiệt tình và thân thiện.'
    },
    {
      id: 11015,
      hanzi: '中国人',
      pinyin: 'Zhōngguó rén',
      hanViet: 'Trung Quốc nhân',
      meaning: 'Người Trung Quốc',
      type: 'Quốc tịch',
      writingGuide: 'Tên nước 中国 + Nhân 人',
      exampleSentence: '王先生是中国人，在河内工作。',
      examplePinyin: 'Wáng xiānsheng shì Zhōngguó rén, zài Hénèi gōngzuò.',
      exampleVn: 'Ông Vương là người Trung Quốc, làm việc ở Hà Nội.'
    },
    {
      id: 11016,
      hanzi: '美国人',
      pinyin: 'Měiguó rén',
      hanViet: 'Mỹ Quốc nhân',
      meaning: 'Người Mỹ',
      type: 'Quốc tịch',
      writingGuide: 'Tên nước 美国 + Nhân 人',
      exampleSentence: '我的英语外教是美国人。',
      examplePinyin: 'Wǒ de Yīngyǔ wàijiào shì Měiguó rén.',
      exampleVn: 'Giáo viên tiếng Anh nước ngoài của tôi là người Mỹ.'
    },
    {
      id: 11017,
      hanzi: '外国人',
      pinyin: 'wàiguó rén',
      hanViet: 'Ngoại quốc nhân',
      meaning: 'Người nước ngoài',
      type: 'Danh từ',
      writingGuide: 'Ngoại 外 (Tịch 夕 + Bốc 卜) + Quốc 国 + Nhân 人',
      exampleSentence: '河内有很多外国人来旅游。',
      examplePinyin: 'Hénèi yǒu hěn duō wàiguó rén lái lǚyóu.',
      exampleVn: 'Hà Nội có rất nhiều người nước ngoài đến du lịch.'
    },
    {
      id: 11018,
      hanzi: '越南语',
      pinyin: 'Yuènányǔ',
      hanViet: 'Việt Nam ngữ',
      meaning: 'Tiếng Việt',
      type: 'Ngôn ngữ',
      writingGuide: 'Việt Nam 越南 + Ngữ 语 (Ngôn 讠+ Ngũ 五 + Khẩu 口)',
      exampleSentence: '许多外国朋友在学越南语。',
      examplePinyin: 'Xǔduō wàiguó péngyou zài xué Yuènányǔ.',
      exampleVn: 'Rất nhiều người bạn nước ngoài đang học tiếng Việt.'
    },
    {
      id: 11019,
      hanzi: '汉语',
      pinyin: 'Hànyǔ',
      hanViet: 'Hán ngữ',
      meaning: 'Tiếng Hán / Tiếng Trung',
      type: 'Ngôn ngữ',
      writingGuide: 'Hán 汉 (Thủy 氵+ Hựu 又) + Ngữ 语',
      exampleSentence: '汉语的发音和声调非常重要。',
      examplePinyin: 'Hànyǔ de fāyīn hé shēngdiào fēicháng zhòngyào.',
      exampleVn: 'Phát âm và thanh điệu của tiếng Hán vô cùng quan trọng.'
    },
    {
      id: 11020,
      hanzi: '中文',
      pinyin: 'Zhōngwén',
      hanViet: 'Trung văn',
      meaning: 'Tiếng Trung (văn tự & ngôn ngữ)',
      type: 'Ngôn ngữ',
      writingGuide: 'Trung 中 + Văn 文 (nét chấm, ngang, phẩy, mác)',
      exampleSentence: '每天练习打中文很有帮助。',
      examplePinyin: 'Měitiān liànxí dǎ Zhōngwén hěn yǒu bāngzhù.',
      exampleVn: 'Mỗi ngày luyện gõ tiếng Trung rất có ích.'
    },
    {
      id: 11021,
      hanzi: '英语',
      pinyin: 'Yīngyǔ',
      hanViet: 'Anh ngữ',
      meaning: 'Tiếng Anh',
      type: 'Ngôn ngữ',
      writingGuide: 'Anh 英 + Ngữ 语',
      exampleSentence: '英语是国际通用的语言。',
      examplePinyin: 'Yīngyǔ shì guójì tōngyòng de yǔyán.',
      exampleVn: 'Tiếng Anh là ngôn ngữ thông dụng quốc tế.'
    },
    {
      id: 11022,
      hanzi: '日语',
      pinyin: 'Rìyǔ',
      hanViet: 'Nhật ngữ',
      meaning: 'Tiếng Nhật',
      type: 'Ngôn ngữ',
      writingGuide: 'Nhật 日 + Ngữ 语',
      exampleSentence: '他在大学里专业是日语。',
      examplePinyin: 'Tā zài dàxué lǐ zhuānyè shì Rìyǔ.',
      exampleVn: 'Chuyên ngành của anh ấy ở đại học là tiếng Nhật.'
    },
    {
      id: 11023,
      hanzi: '韩语',
      pinyin: 'Hányǔ',
      hanViet: 'Hàn ngữ',
      meaning: 'Tiếng Hàn',
      type: 'Ngôn ngữ',
      writingGuide: 'Hàn 韩 + Ngữ 语',
      exampleSentence: '她为了看韩剧自学了韩语。',
      examplePinyin: 'Tā wèile kàn Hánjù zìxué le Hányǔ.',
      exampleVn: 'Cô ấy tự học tiếng Hàn để xem phim Hàn.'
    },
    {
      id: 11024,
      hanzi: '法语',
      pinyin: 'Fǎyǔ',
      hanViet: 'Pháp ngữ',
      meaning: 'Tiếng Pháp',
      type: 'Ngôn ngữ',
      writingGuide: 'Pháp 法 + Ngữ 语',
      exampleSentence: '法语被认为是世界上最优雅的语言之一。',
      examplePinyin: 'Fǎyǔ bèi rènwéi shì shìjiè shang zuì yōuyǎ de yǔyán zhī yī.',
      exampleVn: 'Tiếng Pháp được coi là một trong những ngôn ngữ thanh lịch nhất thế giới.'
    },
    {
      id: 11025,
      hanzi: '国家',
      pinyin: 'guójiā',
      hanViet: 'Quốc gia',
      meaning: 'Quốc gia / Đất nước',
      type: 'Danh từ',
      writingGuide: 'Quốc 国 + Gia 家 (Miên 宀 mái nhà + Thỉ 豕 con lợn)',
      exampleSentence: '世界上有两百多个国家和地区。',
      examplePinyin: 'Shìjiè shang yǒu liǎng bǎi duō gè guójiā hé dìqū.',
      exampleVn: 'Trên thế giới có hơn 200 quốc gia và vùng lãnh thổ.'
    },
    {
      id: 11026,
      hanzi: '语言',
      pinyin: 'yǔyán',
      hanViet: 'Ngữ ngôn',
      meaning: 'Ngôn ngữ / Tiếng',
      type: 'Danh từ',
      writingGuide: 'Ngữ 语 + Ngôn 言',
      exampleSentence: '学习新语言能开拓我们的视野。',
      examplePinyin: 'Xuéxí xīn yǔyán néng kāituò wǒmen de shìyě.',
      exampleVn: 'Học một ngôn ngữ mới có thể mở rộng tầm nhìn của chúng ta.'
    },
    {
      id: 11027,
      hanzi: '会',
      pinyin: 'huì',
      hanViet: 'Hội',
      meaning: 'Biết (thông qua học hỏi/rèn luyện)',
      type: 'Động từ năng nguyện',
      writingGuide: 'Nhân 人 trên đầu + Vân 云 mây bên dưới',
      exampleSentence: '你会说汉语和写汉字吗？',
      examplePinyin: 'Nǐ huì shuō Hànyǔ hé xiě hànzì ma?',
      exampleVn: 'Bạn có biết nói tiếng Trung và viết chữ Hán không?'
    },
    {
      id: 11028,
      hanzi: '说',
      pinyin: 'shuō',
      hanViet: 'Thuyết',
      meaning: 'Nói',
      type: 'Động từ',
      writingGuide: 'Ngôn 讠+ Đoái 兑',
      exampleSentence: '请说慢一点儿，我听得懂。',
      examplePinyin: 'Qǐng shuō màn yìdiǎnr, wǒ tīng de dǒng.',
      exampleVn: 'Xin hãy nói chậm một chút, tôi nghe hiểu được.'
    }
  ],
  sampleSentences: [
    {
      id: 1101,
      hanzi: '我是越南人。',
      pinyin: 'Wǒ shì Yuènán rén.',
      meaning: 'Tôi là người Việt Nam.',
      difficulty: 'Cơ bản',
      tip: 'Mẫu câu tự giới thiệu quốc tịch cơ bản nhất: Chủ ngữ + 是 + Tên quốc gia + 人.'
    },
    {
      id: 1102,
      hanzi: '你是哪国人？',
      pinyin: 'Nǐ shì nǎ guó rén?',
      meaning: 'Bạn là người nước nào?',
      difficulty: 'Cơ bản',
      tip: 'Câu hỏi quốc tịch chuẩn mực trong giao tiếp tiếng Trung.'
    },
    {
      id: 1103,
      hanzi: '你会说汉语吗？',
      pinyin: 'Nǐ huì shuō Hànyǔ ma?',
      meaning: 'Bạn có biết nói tiếng Trung không?',
      difficulty: 'Cơ bản',
      tip: 'Dùng động từ năng nguyện 会 (huì) + 说 (shuō) + tên ngôn ngữ.'
    },
    {
      id: 1104,
      hanzi: '我会说一点儿英语和中文。',
      pinyin: 'Wǒ huì shuō yìdiǎnr Yīngyǔ hé Zhōngwén.',
      meaning: 'Tôi biết nói một chút tiếng Anh và tiếng Trung.',
      difficulty: 'Cơ bản',
      tip: '一点儿 (yìdiǎnr) mang nghĩa một chút, một ít.'
    },
    {
      id: 1105,
      hanzi: '他是中国人，也是我的汉语老师。',
      pinyin: 'Tā shì Zhōngguó rén, yě shì wǒ de Hànyǔ lǎoshī.',
      meaning: 'Anh ấy là người Trung Quốc, cũng là thầy giáo tiếng Trung của tôi.',
      difficulty: 'Trung cấp',
      tip: 'Phó từ 也 (yě - cũng) đứng trước động từ 是.'
    },
    {
      id: 1106,
      hanzi: '越南语是我的母语。',
      pinyin: 'Yuènányǔ shì wǒ de mǔyǔ.',
      meaning: 'Tiếng Việt là tiếng mẹ đẻ của tôi.',
      difficulty: 'Cơ bản',
      tip: '母语 (mǔyǔ) có nghĩa là tiếng mẹ đẻ.'
    },
    {
      id: 1107,
      hanzi: '他在英国工作，英语说得很好。',
      pinyin: 'Tā zài Yīngguó gōngzuò, Yīngyǔ shuō de hěn hǎo.',
      meaning: 'Anh ấy làm việc ở Anh, tiếng Anh nói rất tốt.',
      difficulty: 'Trung cấp',
      tip: 'Cấu trúc bổ ngữ trình độ: Động từ + 得 + hěn hǎo (nói rất tốt).'
    },
    {
      id: 1108,
      hanzi: '玛丽是美国人，她正在学中文。',
      pinyin: 'Mǎlì shì Měiguó rén, tā zhèngzài xué Zhōngwén.',
      meaning: 'Mary là người Mỹ, cô ấy đang học tiếng Trung.',
      difficulty: 'Trung cấp',
      tip: '正在 (zhèngzài) diễn tả hành động đang diễn ra.'
    },
    {
      id: 1109,
      hanzi: '我很喜欢去日本和韩国旅游。',
      pinyin: 'Wǒ hěn xǐhuan qù Rìběn hé Hánguó lǚyóu.',
      meaning: 'Tôi rất thích đi Nhật Bản và Hàn Quốc du lịch.',
      difficulty: 'Trung cấp',
      tip: '和 (hé - và) dùng nối hai danh từ chỉ địa danh.'
    },
    {
      id: 1110,
      hanzi: '很多外国人喜欢学越南语。',
      pinyin: 'Hěn duō wàiguó rén xǐhuan xué Yuènányǔ.',
      meaning: 'Rất nhiều người nước ngoài thích học tiếng Việt.',
      difficulty: 'Trung cấp',
      tip: '外国人 (wàiguórén) = người nước ngoài.'
    },
    {
      id: 1111,
      hanzi: '你学中文多长时间了？',
      pinyin: 'Nǐ xué Zhōngwén duō cháng shíjiān le?',
      meaning: 'Bạn học tiếng Trung được bao lâu rồi?',
      difficulty: 'Trung cấp',
      tip: '多长时间 (duō cháng shíjiān) = bao lâu / thời gian bao dài.'
    },
    {
      id: 1112,
      hanzi: '我们都是越南人，我们爱越南。',
      pinyin: 'Wǒmen dōu shì Yuènán rén, wǒmen ài Yuènán.',
      meaning: 'Chúng tôi đều là người Việt Nam, chúng tôi yêu Việt Nam.',
      difficulty: 'Cơ bản',
      tip: '都 (dōu - đều) bổ nghĩa cho số nhiều 我们.'
    },
    {
      id: 1113,
      hanzi: '他会说四种语言：越南语、英语、汉语和法语。',
      pinyin: 'Tā huì shuō sì zhǒng yǔyán: Yuènányǔ, Yīngyǔ, Hànyǔ hé Fǎyǔ.',
      meaning: 'Anh ấy biết nói bốn thứ tiếng: tiếng Việt, tiếng Anh, tiếng Trung và tiếng Pháp.',
      difficulty: 'Nâng cao',
      tip: '种 (zhǒng) là lượng từ chỉ chủng loại (bốn loại ngôn ngữ).'
    },
    {
      id: 1114,
      hanzi: '你去过中国还是法国？',
      pinyin: 'Nǐ qùguo Zhōngguó háishì Fǎguó?',
      meaning: 'Bạn từng đi Trung Quốc hay là Pháp?',
      difficulty: 'Trung cấp',
      tip: '过 (guo) chỉ trải nghiệm từng làm gì + 还是 (háishì) câu hỏi lựa chọn.'
    }
  ]
};
