import { ThematicTopic } from '../../../types/thematic';

export const placesTopic: ThematicTopic = {
    id: 'places_travel',
    title: 'Địa Điểm, Giao Thông & Hỏi Đường',
    chineseTitle: '地点与交通',
    pinyinTitle: 'Dìdiǎn yǔ jiāotōng',
    iconName: 'Navigation',
    badge: 'Chủ đề 8 • Sinh tồn du lịch',
    color: 'from-cyan-500 to-blue-600',
    desc: 'Bệnh viện, ngân hàng, trường học, siêu thị, sân bay, ga tàu, tàu điện ngầm, hỏi đường đi như thế nào và khoảng cách xa gần.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cấu trúc diễn tả hành động tại một địa điểm: 在 + Địa điểm + Động từ',
        formula: 'Chủ ngữ + 在 (zài) + Địa điểm + Động từ hành động',
        explanation: 'Trong tiếng Trung, giới từ chỉ nơi chốn 在 luôn đứng TRƯỚC động từ hành động (khác tiếng Việt: Làm gì ở đâu -> Tiếng Trung: Ở đâu làm gì).',
        usageNotes: [
          'Tôi học tiếng Trung ở trường: 我在学校学中文 (Wǒ zài xuéxiào xué Zhōngwén) — KHÔNG nói 我学中文在学校.',
          'Anh ấy làm việc ở bệnh viện: 他在医院工作 (Tā zài yīyuàn gōngzuò).'
        ],
        examples: [
          { hanzi: '我们在中国银行换钱。', pinyin: 'Wǒmen zài Zhōngguó Yínháng huànqián.', meaning: 'Chúng tôi đổi tiền ở Ngân hàng Trung Quốc.' }
        ]
      }
    ],
    words: [
      { id: 8001, hanzi: '学校', pinyin: 'xuéxiào', hanViet: 'Học hiệu', meaning: 'Trường học', type: 'Địa điểm', writingGuide: 'Học 学 + Hiệu 校', exampleSentence: '学校里有很多漂亮的花。', examplePinyin: 'Xuéxiào lǐ yǒu hěn duō piàoliang de huā.', exampleVn: 'Trong trường có rất nhiều hoa đẹp.' },
      { id: 8002, hanzi: '医院', pinyin: 'yīyuàn', hanViet: 'Y viện', meaning: 'Bệnh viện', type: 'Địa điểm', writingGuide: 'Y 医 + Viện 院', exampleSentence: '生病了要去医院看医生。', examplePinyin: 'Shēngbìng le yào qù yīyuàn kàn yīshēng.', exampleVn: 'Bị ốm rồi phải đến bệnh viện khám bác sĩ.' },
      { id: 8003, hanzi: '银行', pinyin: 'yínháng', hanViet: 'Ngân hàng', meaning: 'Ngân hàng', type: 'Địa điểm', writingGuide: 'Kim 金 + Cấn 艮 = Ngân 银 + Hành 行', exampleSentence: '我想去中国银行换人民币。', examplePinyin: 'Wǒ xiǎng qù Zhōngguó Yínháng huàn rénmínbì.', exampleVn: 'Tôi muốn đến Ngân hàng Trung Quốc đổi nhân dân tệ.' },
      { id: 8004, hanzi: '超市', pinyin: 'chāoshì', hanViet: 'Siêu thị', meaning: 'Siêu thị', type: 'Địa điểm', writingGuide: 'Siêu 超 + Thị 市', exampleSentence: '下班后我去超市买菜。', examplePinyin: 'Xiàbān hòu wǒ qù chāoshì mǎi cài.', exampleVn: 'Sau khi tan làm tôi đi siêu thị mua thức ăn.' },
      { id: 8005, hanzi: '机场', pinyin: 'jīchǎng', hanViet: 'Cơ trường', meaning: 'Sân bay / Phi trường', type: 'Địa điểm', writingGuide: 'Cơ 机 + Trường 场 (thổ 土)', exampleSentence: '下午四点我去机场接朋友。', examplePinyin: 'Xiàwǔ sì diǎn wǒ qù jīchǎng jiē péngyou.', exampleVn: '4 giờ chiều tôi ra sân bay đón bạn.' },
      { id: 8006, hanzi: '火车站', pinyin: 'huǒchēzhàn', hanViet: 'Hỏa xa trạm', meaning: 'Ga xe lửa / Ga tàu', type: 'Giao thông', writingGuide: 'Hỏa 火 + Xa 车 + Trạm 站', exampleSentence: '从这里坐地铁去火车站很快。', examplePinyin: 'Cóng zhèlǐ zuò dìtiě qù huǒchēzhàn hěn kuài.', exampleVn: 'Từ đây đi tàu điện ngầm ra ga tàu rất nhanh.' },
      { id: 8007, hanzi: '地铁站', pinyin: 'dìtiězhàn', hanViet: 'Địa thiết trạm', meaning: 'Ga tàu điện ngầm', type: 'Giao thông', writingGuide: 'Địa 地 + Thiết 铁 + Trạm 站', exampleSentence: '离这里最近的地铁站在哪里？', examplePinyin: 'Lí zhèlǐ zuì jìn de dìtiězhàn zài nǎlǐ?', exampleVn: 'Ga tàu điện ngầm gần đây nhất ở đâu?' },
      { id: 8008, hanzi: '洗手间', pinyin: 'xǐshǒujiān', hanViet: 'Tẩy thủ gian', meaning: 'Nhà vệ sinh / Toilet', type: 'Địa điểm', writingGuide: 'Tẩy 洗 (thủy 氵) + Thủ 手 + Gian 间', exampleSentence: '请问，洗手间在哪里？', examplePinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?', exampleVn: 'Xin hỏi, nhà vệ sinh ở đâu?' },
      { id: 8009, hanzi: '怎么走', pinyin: 'zěnme zǒu', hanViet: 'Chẩm ma tẩu', meaning: 'Đi như thế nào (hỏi đường)', type: 'Cụm từ', writingGuide: 'Chẩm 怎 + Ma 么 + Tẩu 走', exampleSentence: '去天安门怎么走？', examplePinyin: 'Qù Tiān\'ānmén zěnme zǒu?', exampleVn: 'Đi Thiên An Môn đi như thế nào?' },
      { id: 8010, hanzi: '北京', pinyin: 'Běijīng', hanViet: 'Bắc Kinh', meaning: 'Bắc Kinh (thủ đô TQ)', type: 'Địa danh', writingGuide: 'Bắc 北 + Kinh 京', exampleSentence: '我很想去北京爬长城。', examplePinyin: 'Wǒ hěn xiǎng qù Běijīng pá Chángchéng.', exampleVn: 'Tôi rất muốn đi Bắc Kinh leo Vạn Lý Trường Thành.' }
    ],
    sampleSentences: [
      { id: 801, hanzi: '请问，洗手间在哪里？', pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?', meaning: 'Xin hỏi, nhà vệ sinh ở đâu vậy?', difficulty: 'Cơ bản', tip: 'Câu hỏi sinh tồn quan trọng nhất khi đi du lịch.' },
      { id: 802, hanzi: '明天是星期六，我打算去中国银行换一点儿人民币。', pinyin: 'Míngtiān shì xīngqīliù, wǒ dǎsuan qù Zhōngguó Yínháng huàn yìdiǎnr rénmínbì.', meaning: 'Ngày mai là thứ Bảy, tôi dự định đến Ngân hàng Trung Quốc đổi một ít tiền Nhân Dân Tệ.', difficulty: 'Trung cấp', tip: '换人民币 (huàn rénmínbì - đổi tiền TQ).' },
      { id: 803, hanzi: '从学校坐地铁去机场大概要一个小时。', pinyin: 'Cóng xuéxiào zuò dìtiě qù jīchǎng dàgài yào yí gè xiǎoshí.', meaning: 'Đi tàu điện ngầm từ trường ra sân bay mất khoảng một tiếng đồng hồ.', difficulty: 'Trung cấp', tip: 'Cấu trúc: 从 A 坐...去 B (Từ A đi phương tiện gì đến B).' },
      { id: 804, hanzi: '明天上午我要去医院看医生。', pinyin: 'Míngtiān shàngwǔ wǒ yào qù yīyuàn kàn yīshēng.', meaning: 'Sáng mai tôi phải đi bệnh viện khám bác sĩ.', difficulty: 'Cơ bản', tip: '看医生 / 看病 (khám bệnh).' },
      { id: 805, hanzi: '超市就在饭馆的旁边，非常方便。', pinyin: 'Chāoshì jiù zài fànguǎn de pángbiān, fēicháng fāngbiàn.', meaning: 'Siêu thị ở ngay bên cạnh quán ăn, rất là tiện lợi.', difficulty: 'Cơ bản', tip: '在...旁边 (ở ngay bên cạnh).' },
      { id: 806, hanzi: '你知道去首都国际机场怎么走吗？', pinyin: 'Nǐ zhīdào qù Shǒudū Guójì Jīchǎng zěnme zǒu ma?', meaning: 'Bạn có biết đường đi đến Sân bay Quốc tế Thủ đô đi như thế nào không?', difficulty: 'Trung cấp', tip: 'Hỏi đường: 去 + Địa điểm + 怎么走？' },
      { id: 807, hanzi: '我打算坐高速铁路去上海旅游。', pinyin: 'Wǒ dǎsuan zuò gāosù tiělù qù Shànghǎi lǚyóu.', meaning: 'Tôi dự định đi tàu cao tốc đến Thượng Hải du lịch.', difficulty: 'Trung cấp', tip: '高速铁路 (Gao thiêt / tàu cao tốc).' },
      { id: 808, hanzi: '离这里最近的地铁站在哪里？', pinyin: 'Lí zhèlǐ zuì jìn de dìtiězhàn zài nǎlǐ?', meaning: 'Ga tàu điện ngầm gần đây nhất nằm ở đâu?', difficulty: 'Trung cấp', tip: '离这里最近 (gần nơi này nhất).' },
      { id: 809, hanzi: '热烈欢迎你来到美丽的越南河内！', pinyin: 'Rèliè huānyíng nǐ lái dào měilì de Yuènán Hénèi!', meaning: 'Nhiệt liệt chào mừng bạn đến với thủ đô Hà Nội của đất nước Việt Nam tươi đẹp!', difficulty: 'Nâng cao', tip: '热烈欢迎 (nhiệt liệt chào mừng).' },
      { id: 810, hanzi: '我们明天早上在学校的大门口见面吧。', pinyin: 'Wǒmen míngtiān zǎoshang zài xuéxiào de dàménkǒu jiànmiàn ba.', meaning: 'Sáng mai chúng ta gặp nhau ở cổng lớn của trường học nhé.', difficulty: 'Trung cấp', tip: '在...见面 (gặp nhau ở đâu).' },
      { id: 811, hanzi: '你去哪儿？', pinyin: 'Nǐ qù nǎr?', meaning: 'Bạn đi đâu đấy?', difficulty: 'Cơ bản', tip: 'Câu hỏi điểm đến kinh điển nhất.' },
      { id: 812, hanzi: '我去超市买东西。', pinyin: 'Wǒ qù chāoshì mǎi dōngxi.', meaning: 'Tôi đi siêu thị mua đồ.', difficulty: 'Cơ bản', tip: 'Mua đồ: 买东西 (mǎi dōngxi).' },
      { id: 813, hanzi: '他现在不在家。', pinyin: 'Tā xiànzài bú zài jiā.', meaning: 'Hiện tại anh ấy không ở nhà.', difficulty: 'Cơ bản', tip: 'Không ở nhà: 不在家.' },
      { id: 814, hanzi: '请问，地铁站在哪儿？', pinyin: 'Qǐngwèn, dìtiězhàn zài nǎr?', meaning: 'Xin hỏi, ga tàu điện ngầm ở đâu?', difficulty: 'Cơ bản', tip: 'Ga tàu điện ngầm: 地铁站.' },
      { id: 815, hanzi: '我在中国学习汉语。', pinyin: 'Wǒ zài Zhōngguó xuéxí Hànyǔ.', meaning: 'Tôi học tiếng Hán ở Trung Quốc.', difficulty: 'Cơ bản', tip: 'Ở đâu làm gì: 在...学习.' },
      { id: 816, hanzi: '我们回家吧。', pinyin: 'Wǒmen huí jiā ba.', meaning: 'Chúng mình về nhà thôi.', difficulty: 'Cơ bản', tip: 'Về nhà: 回家 (huí jiā).' }
    ]
  };
