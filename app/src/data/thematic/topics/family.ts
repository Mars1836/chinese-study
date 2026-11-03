import { ThematicTopic } from '../../../types/thematic';

export const familyTopic: ThematicTopic = {
    id: 'family',
    title: 'Gia Đình, Họ Hàng & Các Mối Quan Hệ',
    chineseTitle: '家庭与亲戚',
    pinyinTitle: 'Jiātíng yǔ qīnqi',
    iconName: 'Users',
    badge: 'Chủ đề 5 • Thân thuộc',
    color: 'from-rose-500 to-pink-600',
    desc: 'Xưng hô các thành viên gia đình (ông bà nội ngoại, bố mẹ, anh chị em, con cái, vợ chồng) và bạn bè đồng nghiệp.',
    grammarPoints: [
      {
        id: 1,
        title: 'Lược bỏ trợ từ sở hữu 的 (de) với người thân ruột thịt',
        formula: 'Đại từ nhân xưng (我, 你, 他) + Thành viên gia đình (bố, mẹ, anh, chị...)',
        explanation: 'Khi nói về người thân ruột thịt trong gia đình, ta thường lược bỏ chữ 的 (de) để thể hiện sự gần gũi, gắn bó.',
        usageNotes: [
          'Bố tôi: 我爸爸 (wǒ bàba) — Tự nhiên hơn 我是的爸爸.',
          'Mẹ bạn: 你妈妈 (nǐ māmā).',
          'Anh trai anh ấy: 他哥哥 (tā gēge).'
        ],
        examples: [
          { hanzi: '这是我哥哥，那是我妹妹。', pinyin: 'Zhè shì wǒ gēge, nà shì wǒ mèimei.', meaning: 'Đây là anh trai tôi, kia là em gái tôi.' }
        ]
      }
    ],
    words: [
      { id: 5001, hanzi: '爸爸', pinyin: 'bàba', hanViet: 'Bá bá', meaning: 'Bố, ba, cha', type: 'Gia đình', writingGuide: 'Phụ 父 ở trên + Ba 巴 ở dưới', exampleSentence: '我爸爸今年五十岁。', examplePinyin: 'Wǒ bàba jīnnián wǔshí suì.', exampleVn: 'Bố tôi năm nay 50 tuổi.' },
      { id: 5002, hanzi: '妈妈', pinyin: 'māmā', hanViet: 'Ma ma', meaning: 'Mẹ, má', type: 'Gia đình', writingGuide: 'Nữ 女 bên trái + Mã 马 bên phải', exampleSentence: '我妈妈做的菜最好吃。', examplePinyin: 'Wǒ māmā zuò de cài zuì hǎochī.', exampleVn: 'Món mẹ tôi nấu là ngon nhất.' },
      { id: 5003, hanzi: '哥哥', pinyin: 'gēge', hanViet: 'Ca ca', meaning: 'Anh trai', type: 'Gia đình', writingGuide: 'Hai chữ Khả 可 chồng lên nhau', exampleSentence: '我哥哥在上海工作。', examplePinyin: 'Wǒ gēge zài Shànghǎi gōngzuò.', exampleVn: 'Anh trai tôi làm việc ở Thượng Hải.' },
      { id: 5004, hanzi: '弟弟', pinyin: 'dìdi', hanViet: 'Đệ đệ', meaning: 'Em trai', type: 'Gia đình', writingGuide: 'Phẩy, ngang, gập, sổ móc, nét phẩy dài xuyên suốt', exampleSentence: '我弟弟比我小两岁。', examplePinyin: 'Wǒ dìdi bǐ wǒ xiǎo liǎng suì.', exampleVn: 'Em trai tôi nhỏ hơn tôi 2 tuổi.' },
      { id: 5005, hanzi: '姐姐', pinyin: 'jiějie', hanViet: 'Tỷ tỷ', meaning: 'Chị gái', type: 'Gia đình', writingGuide: 'Nữ 女 + Thả 且', exampleSentence: '我姐姐长得很漂亮。', examplePinyin: 'Wǒ jiějie zhǎng de hěn piàoliang.', exampleVn: 'Chị gái tôi lớn lên rất xinh đẹp.' },
      { id: 5006, hanzi: '妹妹', pinyin: 'mèimei', hanViet: 'Muội muội', meaning: 'Em gái', type: 'Gia đình', writingGuide: 'Nữ 女 + Vị 未', exampleSentence: '妹妹今年上初中。', examplePinyin: 'Mèimei jīnnián shàng chūzhōng.', exampleVn: 'Em gái năm nay lên cấp 2.' },
      { id: 5007, hanzi: '爷爷', pinyin: 'yéye', hanViet: 'Gia gia', meaning: 'Ông nội', type: 'Gia đình', writingGuide: 'Phụ 父 ở trên + Da 耶 ở dưới', exampleSentence: '爷爷每天早上打太极拳。', examplePinyin: 'Yéye měitiān zǎoshang dǎ tàijíquán.', exampleVn: 'Ông nội mỗi sáng đều tập Thái Cực Quyền.' },
      { id: 5008, hanzi: '奶奶', pinyin: 'nǎinai', hanViet: 'Nãi nãi', meaning: 'Bà nội', type: 'Gia đình', writingGuide: 'Nữ 女 + Nãi 乃', exampleSentence: '奶奶身体一直很好。', examplePinyin: 'Nǎinai shēntǐ yìzhí hěn hǎo.', exampleVn: 'Bà nội sức khỏe luôn luôn rất tốt.' },
      { id: 5009, hanzi: '朋友', pinyin: 'péngyou', hanViet: 'Bằng hữu', meaning: 'Bạn bè', type: 'Quan hệ', writingGuide: 'Bằng 朋 (2 chữ Nguyệt 月) + Hữu 友', exampleSentence: '我们在大学是好朋友。', examplePinyin: 'Wǒmen zài dàxué shì hǎo péngyou.', exampleVn: 'Chúng tôi là bạn tốt thời đại học.' },
      { id: 5010, hanzi: '同事', pinyin: 'tóngshì', hanViet: 'Đồng sự', meaning: 'Đồng nghiệp', type: 'Quan hệ', writingGuide: 'Đồng 同 + Sự 事', exampleSentence: '我和同事一起吃午饭。', examplePinyin: 'Wǒ hé tóngshì yìqǐ chī wǔfàn.', exampleVn: 'Tôi và đồng nghiệp cùng nhau ăn cơm trưa.' }
    ],
    sampleSentences: [
      { id: 501, hanzi: '你家有几口人？我家有五口人。', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén? Wǒ jiā yǒu wǔ kǒu rén.', meaning: 'Nhà bạn có mấy người? Nhà tôi có năm người.', difficulty: 'Cơ bản', tip: 'Lượng từ đếm thành viên gia đình: 口 (kǒu).' },
      { id: 502, hanzi: '这是我哥哥，他是大学生。', pinyin: 'Zhè shì wǒ gēge, tā shì dàxuésheng.', meaning: 'Đây là anh trai tôi, anh ấy là sinh viên đại học.', difficulty: 'Cơ bản', tip: 'Giới thiệu người thân không cần thêm chữ 的.' },
      { id: 503, hanzi: '我和我的好朋友一起学汉语。', pinyin: 'Wǒ hé wǒ de hǎo péngyou yìqǐ xué Hànyǔ.', meaning: 'Tôi và người bạn thân của tôi cùng nhau học tiếng Hán.', difficulty: 'Cơ bản', tip: 'A 和 B 一起 + Hành động (A cùng B làm gì).' },
      { id: 504, hanzi: '爷爷奶奶的身体都非常健康。', pinyin: 'Yéye nǎinai de shēntǐ dōu fēicháng jiànkāng.', meaning: 'Sức khỏe của ông nội bà nội đều vô cùng khỏe mạnh.', difficulty: 'Trung cấp', tip: '健康 (jiànkāng - khỏe mạnh).' },
      { id: 505, hanzi: '他的妻子也是一名优秀的高中老师。', pinyin: 'Tā de qīzi yě shì yì míng yōuxiù de gāozhōng lǎoshī.', meaning: 'Vợ của anh ấy cũng là một giáo viên cấp 3 xuất sắc.', difficulty: 'Trung cấp', tip: '妻子 (qīzi - vợ, cách gọi trang trọng).' },
      { id: 506, hanzi: '周末我们全家人常常一起吃晚饭。', pinyin: 'Zhōumò wǒmen quán jiā rén chángcháng yìqǐ chī wǎnfàn.', meaning: 'Cuối tuần cả gia đình chúng tôi thường cùng nhau ăn cơm tối.', difficulty: 'Trung cấp', tip: '全家人 (toàn thể người trong nhà).' },
      { id: 507, hanzi: '我弟弟比我小三岁，他很调皮。', pinyin: 'Wǒ dìdi bǐ wǒ xiǎo sān suì, tā hěn tiáopí.', meaning: 'Em trai tôi nhỏ hơn tôi ba tuổi, nó rất nghịch ngợm.', difficulty: 'Trung cấp', tip: 'Câu so sánh 比: A 比 B + Tính từ + Số lượng.' },
      { id: 508, hanzi: '这是我女儿小时候的照片，真可爱！', pinyin: 'Zhè shì wǒ nǚ\'ér xiǎoshíhou de zhàopiàn, zhēn kě\'ài!', meaning: 'Đây là ảnh hồi nhỏ của con gái tôi, thật đáng yêu!', difficulty: 'Trung cấp', tip: '小时候 (hồi còn nhỏ).' },
      { id: 509, hanzi: '我的外公外婆现在住在北京。', pinyin: 'Wǒ de wàigōng wàipó xiànzài zhù zài Běijīng.', meaning: 'Ông ngoại bà ngoại tôi hiện tại đang sống ở Bắc Kinh.', difficulty: 'Cơ bản', tip: '外公 (ông ngoại), 外婆 (bà ngoại).' },
      { id: 510, hanzi: '公司的同事们对我都非常热情友好。', pinyin: 'Gōngsī de tóngshìmen duì wǒ dōu fēicháng rèqíng yǒuhǎo.', meaning: 'Các đồng nghiệp ở công ty đối với tôi đều rất nhiệt tình thân thiện.', difficulty: 'Nâng cao', tip: '对...热情 (đối xử nhiệt tình với ai).' }
    ]
  };
