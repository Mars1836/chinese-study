import { ThematicTopic } from '../../../types/thematic';

export const foodTopic: ThematicTopic = {
    id: 'food_fruits',
    title: 'Ẩm Thực, Trái Cây & Đồ Uống',
    chineseTitle: '饮食与水果',
    pinyinTitle: 'Yǐnshí yǔ shuǐguǒ',
    iconName: 'UtensilsCrossed',
    badge: 'Chủ đề 7 • Đời sống thực tế',
    color: 'from-orange-500 to-amber-600',
    desc: 'Gọi món tại nhà hàng: cơm, mì, bánh bao, sủi cảo, hoa quả (táo, dưa hấu, chuối), đồ uống (trà, cà phê, nước khoáng) và thanh toán hóa đơn.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cấu trúc khen ngon: 好吃 (hǎochī) và 好喝 (hǎohē)',
        formula: 'Đồ ăn + 好吃 (ngon) | Đồ uống + 好喝 (uống ngon)',
        explanation: 'Tiếng Trung phân biệt rõ ngon khi ăn (好吃 - hǎochī) và ngon khi uống (好喝 - hǎohē).',
        usageNotes: [
          'Sủi cảo ngon: 饺子很好吃 (Jiǎozi hěn hǎochī).',
          'Trà xanh uống ngon: 绿茶很好喝 (Lǜchá hěn hǎohē).'
        ],
        examples: [
          { hanzi: '中国菜非常好吃。', pinyin: 'Zhōngguó cài fēicháng hǎochī.', meaning: 'Món ăn Trung Quốc cực kỳ ngon.' }
        ]
      }
    ],
    words: [
      { id: 7001, hanzi: '米饭', pinyin: 'mǐfàn', hanViet: 'Mễ phạn', meaning: 'Cơm trắng', type: 'Món ăn', writingGuide: 'Mễ 米 (hạt gạo) + Phạn 饭 (thực 饣)', exampleSentence: '我每天中午吃米饭。', examplePinyin: 'Wǒ měitiān zhōngwǔ chī mǐfàn.', exampleVn: 'Trưa nào tôi cũng ăn cơm.' },
      { id: 7002, hanzi: '面条', pinyin: 'miàntiáo', hanViet: 'Diện điều', meaning: 'Mì sợi', type: 'Món ăn', writingGuide: 'Diện 面 + Điều 条', exampleSentence: '来一碗热气腾腾的牛肉面。', examplePinyin: 'Lái yì wǎn rèqì téngténg de niúròumiàn.', exampleVn: 'Cho một bát mì bò nóng hổi.' },
      { id: 7003, hanzi: '饺子', pinyin: 'jiǎozi', hanViet: 'Kiảo tử', meaning: 'Bánh chẻo / Sủi cảo', type: 'Món ăn', writingGuide: 'Thực 饣+ Giao 交 = Kiảo 饺 + Tử 子', exampleSentence: '过年的时候我们全家包饺子。', examplePinyin: 'Guònián de shíhou wǒmen quánjiā bāo jiǎozi.', exampleVn: 'Dịp Tết cả nhà chúng tôi gói sủi cảo.' },
      { id: 7004, hanzi: '包子', pinyin: 'bāozi', hanViet: 'Bao tử', meaning: 'Bánh bao', type: 'Món ăn', writingGuide: 'Bao 包 + Tử 子', exampleSentence: '早上我吃了两个肉包子。', examplePinyin: 'Zǎoshang wǒ chī le liǎng gè ròubāozi.', exampleVn: 'Sáng nay tôi đã ăn hai cái bánh bao nhân thịt.' },
      { id: 7005, hanzi: '苹果', pinyin: 'píngguǒ', hanViet: 'Bình quả', meaning: 'Quả táo', type: 'Trái cây', writingGuide: 'Bình 苹 (thảo 艹) + Quả 果', exampleSentence: '苹果一斤多少钱？', examplePinyin: 'Píngguǒ yì jīn duōshao qián.', exampleVn: 'Táo bao nhiêu tiền một cân (500g)?' },
      { id: 7006, hanzi: '西瓜', pinyin: 'xīguā', hanViet: 'Tây qua', meaning: 'Dưa hấu', type: 'Trái cây', writingGuide: 'Tây 西 + Qua 瓜 (dưa)', exampleSentence: '夏天吃冰西瓜真爽！', examplePinyin: 'Xiàtiān chī bīng xīguā zhēn shuǎng!', exampleVn: 'Mùa hè ăn dưa hấu ướp lạnh thật sảng khoái!' },
      { id: 7007, hanzi: '咖啡', pinyin: 'kāfēi', hanViet: 'Cà phê', meaning: 'Cà phê', type: 'Đồ uống', writingGuide: 'Khẩu 口 + Gia 加 = Cà 咖 | Khẩu 口 + Phi 非 = Phê 啡', exampleSentence: '我不加糖喝纯黑咖啡。', examplePinyin: 'Wǒ bù jiā táng hē chún hēi kāfēi.', exampleVn: 'Tôi không cho đường, uống cà phê đen nguyên chất.' },
      { id: 7008, hanzi: '茶', pinyin: 'chá', hanViet: 'Trà', meaning: 'Trà / Chè', type: 'Đồ uống', writingGuide: 'Thảo 艹 ở trên + Nhân 人 ở giữa + Mộc 木 ở dưới', exampleSentence: '中国人吃完饭喜欢喝热茶。', examplePinyin: 'Zhōngguórén chī wán fàn xǐhuan hē rè chá.', exampleVn: 'Người Trung Quốc ăn cơm xong thích uống trà nóng.' },
      { id: 7009, hanzi: '牛奶', pinyin: 'niúnǎi', hanViet: 'Ngưu nãi', meaning: 'Sữa bò tươi', type: 'Đồ uống', writingGuide: 'Ngưu 牛 + Nãi 奶 (nữ 女 + nãi 乃)', exampleSentence: '睡前喝一杯热牛奶。', examplePinyin: 'Shuì qián hē yì bēi rè niúnǎi.', exampleVn: 'Trước khi ngủ uống một ly sữa nóng.' },
      { id: 7010, hanzi: '买单', pinyin: 'mǎidān', hanViet: 'Mãi đơn', meaning: 'Tính tiền / Thanh toán hóa đơn', type: 'Động từ', writingGuide: 'Mãi 买 + Đơn 单', exampleSentence: '服务员，请买单！', examplePinyin: 'Fúwùyuán, qǐng mǎidān!', exampleVn: 'Phục vụ, xin tính tiền!' }
    ],
    sampleSentences: [
      { id: 701, hanzi: '服务员，请给我们一份菜单。', pinyin: 'Fúwùyuán, qǐng gěi wǒmen yí fèn càidān.', meaning: 'Phục vụ, xin cho chúng tôi một cuốn thực đơn.', difficulty: 'Cơ bản', tip: 'Lượng từ cho thực đơn, văn bản: 一份 (yí fèn).' },
      { id: 702, hanzi: '我想吃一碗牛肉面和一盘热饺子。', pinyin: 'Wǒ xiǎng chī yì wǎn niúròumiàn hé yì pán rè jiǎozi.', meaning: 'Tôi muốn ăn một bát mì bò và một đĩa sủi cảo nóng.', difficulty: 'Cơ bản', tip: 'Lượng từ: 一碗 (một bát), 一盘 (một đĩa).' },
      { id: 703, hanzi: '中国菜非常好吃，我最喜欢吃火锅。', pinyin: 'Zhōngguó cài fēicháng hǎochī, wǒ zuì xǐhuan chī huǒguō.', meaning: 'Món ăn Trung Quốc rất ngon, tôi thích ăn lẩu nhất.', difficulty: 'Cơ bản', tip: '火锅 (huǒguō - lẩu).' },
      { id: 704, hanzi: '你喝茶还是喝咖啡？给我一杯绿茶。', pinyin: 'Nǐ hē chá háishi hē kāfēi? Gěi wǒ yì bēi lǜchá.', meaning: 'Bạn uống trà hay uống cà phê? Cho tôi một ly trà xanh.', difficulty: 'Cơ bản', tip: '还是 trong câu hỏi lựa chọn.' },
      { id: 705, hanzi: '今天天气很热，我想吃冰西瓜。', pinyin: 'Jīntiān tiānqì hěn rè, wǒ xiǎng chī bīng xīguā.', meaning: 'Hôm nay trời rất nóng, tôi muốn ăn dưa hấu ướp lạnh.', difficulty: 'Cơ bản', tip: '冰 (bīng - đá / lạnh).' },
      { id: 706, hanzi: '早上我常常吃面包和喝热牛奶。', pinyin: 'Zǎoshang wǒ chángcháng chī miànbāo hé hē rè niúnǎi.', meaning: 'Buổi sáng tôi thường ăn bánh mì và uống sữa nóng.', difficulty: 'Cơ bản', tip: 'Bữa sáng lành mạnh.' },
      { id: 707, hanzi: '服务员，买单！一共多少钱？', pinyin: 'Fúwùyuán, mǎidān! Yígòng duōshao qián?', meaning: 'Phục vụ, tính tiền! Tổng cộng bao nhiêu tiền?', difficulty: 'Cơ bản', tip: 'Câu hỏi tính tiền chuẩn: 一共多少钱？' },
      { id: 708, hanzi: '这个苹果很甜，一斤五块钱。', pinyin: 'Zhè gè píngguǒ hěn tián, yì jīn wǔ kuài qián.', meaning: 'Quả táo này rất ngọt, năm tệ một cân (500g).', difficulty: 'Cơ bản', tip: '1 斤 (jīn) ở TQ = 500 gram.' },
      { id: 709, hanzi: '我肚子很饿，我们去饭馆吃饭吧。', pinyin: 'Wǒ dùzi hěn è, wǒmen qù fànguǎn chīfàn ba.', meaning: 'Bụng tôi đói quá rồi, chúng ta đến quán ăn cơm đi.', difficulty: 'Cơ bản', tip: '饿 (è - đói bụng), 吧 (ba - nhé/đi).' },
      { id: 710, hanzi: '晚上少喝一点儿咖啡，喝温水对身体好。', pinyin: 'Wǎnshang shǎo hē yìdiǎnr kāfēi, hē wēnshuǐ duì shēntǐ hǎo.', meaning: 'Buổi tối bớt uống cà phê đi, uống nước ấm tốt cho sức khỏe.', difficulty: 'Trung cấp', tip: '少 + Động từ: làm việc gì ít đi.' }
    ]
  };
