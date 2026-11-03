import { ThematicTopic } from '../../../types/thematic';

export const jobsTopic: ThematicTopic = {
    id: 'jobs',
    title: 'Nghề Nghiệp & Chức Vụ Xã Hội',
    chineseTitle: '职业与工作',
    pinyinTitle: 'Zhíyè yǔ gōngzuò',
    iconName: 'Briefcase',
    badge: 'Chủ đề 4 • Xã hội giao tiếp',
    color: 'from-purple-500 to-indigo-600',
    desc: 'Tên gọi các nghề nghiệp phổ biến: giáo viên, bác sĩ, kỹ sư, lập trình viên, cảnh sát, đầu bếp, tài xế và mẫu câu hỏi đáp nghề nghiệp.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cách hỏi nghề nghiệp: 你做什么工作？ / 你是做什么的？',
        formula: 'Chủ ngữ + 做什么工作？ / Chủ ngữ + 是做什么的？',
        explanation: 'Đây là 2 mẫu câu tự nhiên và thông dụng nhất để hỏi về công việc của một ai đó.',
        usageNotes: [
          'Bạn làm việc gì: 你做什么工作？ (Nǐ zuò shénme gōngzuò?)',
          'Trả lời: 我是 + Tên nghề nghiệp (VD: 我是医生 - Tôi là bác sĩ).'
        ],
        examples: [
          { hanzi: '你是做什么工作的？我是中文老师。', pinyin: 'Nǐ shì zuò shénme gōngzuò de? Wǒ shì Zhōngwén lǎoshī.', meaning: 'Bạn làm công việc gì? Tôi là giáo viên tiếng Trung.' }
        ]
      }
    ],
    words: [
      { id: 4001, hanzi: '老师', pinyin: 'lǎoshī', hanViet: 'Lão sư', meaning: 'Giáo viên / Thầy cô giáo', type: 'Nghề nghiệp', writingGuide: 'Lão 老 + Sư 师', exampleSentence: '王老师教我们汉语。', examplePinyin: 'Wáng lǎoshī jiāo wǒmen Hànyǔ.', exampleVn: 'Thầy Vương dạy chúng tôi tiếng Hán.' },
      { id: 4002, hanzi: '学生', pinyin: 'xuésheng', hanViet: 'Học sinh', meaning: 'Học sinh / Sinh viên', type: 'Danh từ', writingGuide: 'Học 学 + Sinh 生', exampleSentence: '我们都是大学学生。', examplePinyin: 'Wǒmen dōu shì dàxué xuésheng.', exampleVn: 'Chúng tôi đều là sinh viên đại học.' },
      { id: 4003, hanzi: '医生', pinyin: 'yīshēng', hanViet: 'Y sinh', meaning: 'Bác sĩ', type: 'Nghề nghiệp', writingGuide: 'Y 医 (khung bao có thỉ 矢) + Sinh 生', exampleSentence: '我爸爸在医院当医生。', examplePinyin: 'Wǒ bàba zài yīyuàn dāng yīshēng.', exampleVn: 'Bố tôi làm bác sĩ ở bệnh viện.' },
      { id: 4004, hanzi: '护士', pinyin: 'hùshi', hanViet: 'Hộ sĩ', meaning: 'Y tá', type: 'Nghề nghiệp', writingGuide: 'Hộ 护 (tay gảy 扌 + hộ 户) + Sĩ 士', exampleSentence: '护士在照顾病人。', examplePinyin: 'Hùshi zài zhàogù bìngrén.', exampleVn: 'Y tá đang chăm sóc người bệnh.' },
      { id: 4005, hanzi: '工程师', pinyin: 'gōngchéngshī', hanViet: 'Công trình sư', meaning: 'Kỹ sư', type: 'Nghề nghiệp', writingGuide: 'Công 工 + Trình 程 + Sư 师', exampleSentence: '他是一名优秀的软件工程师。', examplePinyin: 'Tā shì yì míng yōuxiù de ruǎnjiàn gōngchéngshī.', exampleVn: 'Anh ấy là một kỹ sư phần mềm xuất sắc.' },
      { id: 4006, hanzi: '警察', pinyin: 'jǐngchá', hanViet: 'Cảnh sát', meaning: 'Cảnh sát / Công an', type: 'Nghề nghiệp', writingGuide: 'Cảnh 警 (ngôn 讠ở dưới) + Sát 察', exampleSentence: '警察在路上指挥交通。', examplePinyin: 'Jǐngchá zài lù shang zhǐhuī jiāotōng.', exampleVn: 'Cảnh sát đang điều phối giao thông trên đường.' },
      { id: 4007, hanzi: '司机', pinyin: 'sījī', hanViet: 'Ty cơ', meaning: 'Tài xế / Bác tài', type: 'Nghề nghiệp', writingGuide: 'Ty 司 + Cơ 机', exampleSentence: '出租车司机很热情。', examplePinyin: 'Chūzūchē sījī hěn rèqíng.', exampleVn: 'Bác tài xế taxi rất nhiệt tình.' },
      { id: 4008, hanzi: '经理', pinyin: 'jīnglǐ', hanViet: 'Kinh lý', meaning: 'Giám đốc / Quản lý', type: 'Chức vụ', writingGuide: 'Kinh 经 + Lý 理', exampleSentence: '张经理在办公室开会。', examplePinyin: 'Zhāng jīnglǐ zài bàngōngshì kāihuì.', exampleVn: 'Giám đốc Trương đang họp trong văn phòng.' },
      { id: 4009, hanzi: '程序员', pinyin: 'chéngxùyuán', hanViet: 'Trình tự viên', meaning: 'Lập trình viên / Coder', type: 'Nghề nghiệp', writingGuide: 'Trình 程 + Tự 序 + Viên 员', exampleSentence: '程序员天天用电脑写代码。', examplePinyin: 'Chéngxùyuán tiāntiān yòng diànnǎo xiě dàimǎ.', exampleVn: 'Lập trình viên ngày ngày dùng máy tính viết mã code.' },
      { id: 4010, hanzi: '厨师', pinyin: 'chúshī', hanViet: 'Trù sư', meaning: 'Đầu bếp', type: 'Nghề nghiệp', writingGuide: 'Trù 厨 + Sư 师', exampleSentence: '这位厨师做的北京烤鸭最好吃。', examplePinyin: 'Zhè wèi chúshī zuò de Běijīng kǎoyā zuì hǎochī.', exampleVn: 'Đầu bếp này làm món vịt quay Bắc Kinh ngon nhất.' }
    ],
    sampleSentences: [
      { id: 401, hanzi: '你是做什么工作的？', pinyin: 'Nǐ shì zuò shénme gōngzuò de?', meaning: 'Bạn làm công việc gì vậy?', difficulty: 'Cơ bản', tip: 'Câu hỏi nghề nghiệp thông dụng.' },
      { id: 402, hanzi: '我爸爸是医生，妈妈是小学老师。', pinyin: 'Wǒ bàba shì yīshēng, māmā shì xiǎoxué lǎoshī.', meaning: 'Bố tôi là bác sĩ, mẹ tôi là giáo viên tiểu học.', difficulty: 'Cơ bản', tip: 'Cấu trúc 是 + nghề nghiệp.' },
      { id: 403, hanzi: '他是一名优秀的电脑程序员。', pinyin: 'Tā shì yì míng yōuxiù de diànnǎo chéngxùyuán.', meaning: 'Anh ấy là một lập trình viên máy tính xuất sắc.', difficulty: 'Trung cấp', tip: 'Lượng từ trang trọng cho người: 一名 (yì míng).' },
      { id: 404, hanzi: '我们的总经理去北京出差了。', pinyin: 'Wǒmen de zǒngjīnglǐ qù Běijīng chūchāi le.', meaning: 'Tổng giám đốc của chúng tôi đã đi Bắc Kinh công tác rồi.', difficulty: 'Trung cấp', tip: '出差 (chūchāi - đi công tác).' },
      { id: 405, hanzi: '医院里的护士姐姐非常温柔有耐​​心。', pinyin: 'Yīyuàn lǐ de hùshi jiějie fēicháng wēnróu yǒu nàixīn.', meaning: 'Chị y tá ở bệnh viện vô cùng dịu dàng và kiên nhẫn.', difficulty: 'Nâng cao', tip: '温柔 (dịu dàng), 耐心 (kiên nhẫn).' },
      { id: 406, hanzi: '这位出租车司机的普通话很好。', pinyin: 'Zhè wèi chūzūchē sījī de pǔtōnghuà hěn hǎo.', meaning: 'Bác tài xế taxi này nói tiếng phổ thông rất chuẩn.', difficulty: 'Trung cấp', tip: 'Lượng từ lịch sự: 这位 (zhè wèi).' },
      { id: 407, hanzi: '餐厅的厨师做中国菜做得很好吃。', pinyin: 'Cāntīng de chúshī zuò Zhōngguó cài zuò de hěn hǎochī.', meaning: 'Đầu bếp nhà hàng nấu món Trung rất ngon.', difficulty: 'Nâng cao', tip: 'Bổ ngữ trạng thái: 做得很好吃.' },
      { id: 408, hanzi: '他大学毕业以后当了一名警察。', pinyin: 'Tā dàxué bìyè yǐhòu dāng le yì míng jǐngchá.', meaning: 'Sau khi tốt nghiệp đại học, anh ấy đã làm một cảnh sát.', difficulty: 'Trung cấp', tip: '当 (dāng - làm nghề gì).' },
      { id: 409, hanzi: '很多外国留学生在北京大学学中文。', pinyin: 'Hěn duō wàiguó liúxuéshēng zài Běijīng Dàxué xué Zhōngwén.', meaning: 'Rất nhiều du học sinh nước ngoài học tiếng Trung tại Đại học Bắc Kinh.', difficulty: 'Trung cấp', tip: '留学生 (du học sinh).' },
      { id: 410, hanzi: '我想在一家大型科技公司当工程师。', pinyin: 'Wǒ xiǎng zài yì jiā dàxíng kējì gōngsī dāng gōngchéngshī.', meaning: 'Tôi muốn làm một kỹ sư trong một công ty công nghệ lớn.', difficulty: 'Nâng cao', tip: '一家公司 (Lượng từ 家 cho công ty/doanh nghiệp).' },
      { id: 411, hanzi: '你做什么工作？', pinyin: 'Nǐ zuò shénme gōngzuò?', meaning: 'Bạn làm nghề gì?', difficulty: 'Cơ bản', tip: 'Câu hỏi nghề nghiệp thông dụng nhất.' },
      { id: 412, hanzi: '我是一名学生。', pinyin: 'Wǒ shì yì míng xuésheng.', meaning: 'Tôi là một học sinh.', difficulty: 'Cơ bản', tip: 'Lượng từ danh xưng: 一名学生.' },
      { id: 413, hanzi: '王老师是我的中文老师。', pinyin: 'Wáng lǎoshī shì wǒ de Zhōngwén lǎoshī.', meaning: 'Thầy Vương là giáo viên tiếng Trung của tôi.', difficulty: 'Cơ bản', tip: 'Giáo viên tiếng Trung: 中文老师.' },
      { id: 414, hanzi: '他爸爸是医生。', pinyin: 'Tā bàba shì yīshēng.', meaning: 'Bố của anh ấy là bác sĩ.', difficulty: 'Cơ bản', tip: 'Bác sĩ: 医生 (yīshēng).' },
      { id: 415, hanzi: '我妈妈在学校工作。', pinyin: 'Wǒ māma zài xuéxiào gōngzuò.', meaning: 'Mẹ tôi làm việc ở trường học.', difficulty: 'Cơ bản', tip: 'Làm việc ở đâu: 在...工作.' },
      { id: 416, hanzi: '你哥哥是护士吗？', pinyin: 'Nǐ gēge shì hùshi ma?', meaning: 'Anh trai bạn có phải là y tá không?', difficulty: 'Cơ bản', tip: 'Y tá: 护士 (hùshi).' }
    ]
  };
