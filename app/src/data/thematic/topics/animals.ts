import { ThematicTopic } from '../../../types/thematic';

export const animalsTopic: ThematicTopic = {
    id: 'animals',
    title: 'Động Vật & Con Vật Nuôi',
    chineseTitle: '动物与宠物',
    pinyinTitle: 'Dòngwù yǔ chǒngwù',
    iconName: 'Dog',
    badge: 'Chủ đề 3 • Đời sống',
    color: 'from-emerald-500 to-green-600',
    desc: 'Tên gọi các loài động vật thân quen nhất: chó, mèo, chim, cá, thú cưng, các loài gia súc gia cầm và lượng từ đi kèm.',
    grammarPoints: [
      {
        id: 1,
        title: 'Lượng từ cho động vật: 只 (zhī), 条 (tiáo), 匹 (pǐ), 头 (tóu)',
        formula: '只 (zhī) cho thú nhỏ / 条 (tiáo) cho vật thân dài / 匹 (pǐ) cho ngựa / 头 (tóu) cho trâu bò',
        explanation: 'Đa số con vật dùng lượng từ 只 (zhī) như mèo, chó, chim, thỏ. Con có thân dài (cá, rắn) dùng 条 (tiáo). Ngựa dùng 匹 (pǐ). Trâu, bò, voi dùng 头 (tóu).',
        usageNotes: [
          'Một con mèo: 一只猫 (yì zhī māo).',
          'Một con cá: 一条鱼 (yì tiáo yú).',
          'Một con ngựa: 一匹马 (yì pǐ mǎ).',
          'Một con bò: 一头牛 (yì tóu niú).'
        ],
        examples: [
          { hanzi: '那只小狗真聪明。', pinyin: 'Nà zhī xiǎogǒu zhēn cōngming.', meaning: 'Chú chó nhỏ đó thật thông minh.' }
        ]
      }
    ],
    words: [
      { id: 3001, hanzi: '狗', pinyin: 'gǒu', hanViet: 'Cẩu', meaning: 'Con chó', type: 'Danh từ', writingGuide: 'Khuyển 犭bên trái + Cú 句 bên phải', exampleSentence: '我家有一只小狗。', examplePinyin: 'Wǒ jiā yǒu yì zhī xiǎogǒu.', exampleVn: 'Nhà tôi có một chú chó con.' },
      { id: 3002, hanzi: '猫', pinyin: 'māo', hanViet: 'Miêu', meaning: 'Con mèo', type: 'Danh từ', writingGuide: 'Khuyển 犭+ Thảo 艹 + Điền 田 = Miêu 苗', exampleSentence: '这只白猫喜欢睡觉。', examplePinyin: 'Zhè zhī bái māo xǐhuan shuìjiào.', exampleVn: 'Chú mèo trắng này thích ngủ.' },
      { id: 3003, hanzi: '鸟', pinyin: 'niǎo', hanViet: 'Điểu', meaning: 'Con chim', type: 'Danh từ', writingGuide: 'Chữ tượng hình con chim có mắt và đuôi', exampleSentence: '树上有很多鸟。', examplePinyin: 'Shù shang yǒu hěn duō niǎo.', exampleVn: 'Trên cây có rất nhiều chim.' },
      { id: 3004, hanzi: '鱼', pinyin: 'yú', hanViet: 'Ngư', meaning: 'Con cá', type: 'Danh từ', writingGuide: 'Đầu cá + Thân Điền 田 + Nét ngang đuôi', exampleSentence: '猫最喜欢吃鱼。', examplePinyin: 'Māo zuì xǐhuan chī yú.', exampleVn: 'Mèo thích ăn cá nhất.' },
      { id: 3005, hanzi: '马', pinyin: 'mǎ', hanViet: 'Mã', meaning: 'Con ngựa', type: 'Danh từ', writingGuide: 'Chữ tượng hình ngựa có bờm và 4 chân', exampleSentence: '他骑着一匹马。', examplePinyin: 'Tā qí zhe yì pǐ mǎ.', exampleVn: 'Anh ấy đang cưỡi một con ngựa.' },
      { id: 3006, hanzi: '牛', pinyin: 'niú', hanViet: 'Ngưu', meaning: 'Con bò / trâu', type: 'Danh từ', writingGuide: 'Phẩy nghiêng, 2 nét ngang, nét sổ chính giữa', exampleSentence: '草地上有一头牛。', examplePinyin: 'Cǎodì shang yǒu yì tóu niú.', exampleVn: 'Trên bãi cỏ có một con bò.' },
      { id: 3007, hanzi: '羊', pinyin: 'yáng', hanViet: 'Dương', meaning: 'Con cừu / Con dê', type: 'Danh từ', writingGuide: 'Hai sừng trên đầu + 3 nét ngang + Sổ đứng', exampleSentence: '山上有好多白色的羊。', examplePinyin: 'Shān shang yǒu hǎoduō báisè de yáng.', exampleVn: 'Trên núi có rất nhiều cừu trắng.' },
      { id: 3008, hanzi: '大熊猫', pinyin: 'dàxióngmāo', hanViet: 'Đại hùng miêu', meaning: 'Gấu trúc khổng lồ', type: 'Danh từ', writingGuide: 'Đại 大 + Hùng 熊 + Miêu 猫', exampleSentence: '大熊猫是中国的国宝。', examplePinyin: 'Dàxióngmāo shì Zhōngguó de guóbǎo.', exampleVn: 'Gấu trúc là quốc bảo của Trung Quốc.' },
      { id: 3009, hanzi: '兔子', pinyin: 'tùzi', hanViet: 'Thố tử', meaning: 'Con thỏ', type: 'Danh từ', writingGuide: 'Thỏ 兔 có tai dài và đuôi + Tử 子', exampleSentence: '小兔子喜欢吃胡萝卜。', examplePinyin: 'Xiǎo tùzi xǐhuan chī húluóbo.', exampleVn: 'Thỏ con thích ăn cà rốt.' },
      { id: 3010, hanzi: '宠物', pinyin: 'chǒngwù', hanViet: 'Sủng vật', meaning: 'Thú cưng', type: 'Danh từ', writingGuide: 'Sủng 宠 (yêu thương) + Vật 物 (đồ vật, loài vật)', exampleSentence: '你养宠物吗？', examplePinyin: 'Nǐ yǎng chǒngwù ma?', exampleVn: 'Bạn có nuôi thú cưng không?' }
    ],
    sampleSentences: [
      { id: 301, hanzi: '我家养了一只小狗和两只猫。', pinyin: 'Wǒ jiā yǎng le yì zhī xiǎogǒu hé liǎng zhī māo.', meaning: 'Nhà tôi nuôi một chú chó con và hai con mèo.', difficulty: 'Cơ bản', tip: 'Lượng từ cho chó và mèo là 只 (zhī).' },
      { id: 302, hanzi: '那只大熊猫真可爱！', pinyin: 'Nà zhī dàxióngmāo zhēn kě\'ài!', meaning: 'Con gấu trúc lớn kia thật đáng yêu!', difficulty: 'Cơ bản', tip: '真 (zhēn) biểu thị cảm thán: Thật là...' },
      { id: 303, hanzi: '你喜欢小狗还是小猫？', pinyin: 'Nǐ xǐhuan xiǎogǒu háishi xiǎomāo?', meaning: 'Bạn thích chó con hay mèo con?', difficulty: 'Cơ bản', tip: '还是 (háishi) dùng trong câu hỏi lựa chọn A hay B.' },
      { id: 304, hanzi: '河里有很多漂亮的小鱼。', pinyin: 'Hé lǐ yǒu hěn duō piàoliang de xiǎoyú.', meaning: 'Dưới sông có rất nhiều chú cá nhỏ xinh đẹp.', difficulty: 'Cơ bản', tip: 'Nhiều: 很多 (hěn duō).' },
      { id: 305, hanzi: '树上有一只小鸟在唱歌。', pinyin: 'Shù shang yǒu yì zhī xiǎoniǎo zài chànggē.', meaning: 'Trên cây có một chú chim nhỏ đang hót.', difficulty: 'Trung cấp', tip: '在... biểu thị hành động đang diễn ra.' },
      { id: 306, hanzi: '草地上有几匹马和两头牛。', pinyin: 'Cǎodì shang yǒu jǐ pǐ mǎ hé liǎng tóu niú.', meaning: 'Trên bãi cỏ có mấy con ngựa và hai con bò.', difficulty: 'Trung cấp', tip: '匹 (pǐ) cho ngựa, 头 (tóu) cho bò.' },
      { id: 307, hanzi: '这只白色的小兔子跑得真快。', pinyin: 'Zhè zhī báisè de xiǎo tùzi pǎo de zhēn kuài.', meaning: 'Chú thỏ con màu trắng này chạy thật nhanh.', difficulty: 'Trung cấp', tip: 'Bổ ngữ trạng thái: Động từ + 得 + Tính từ.' },
      { id: 308, hanzi: '中国四川有很多野生大熊猫。', pinyin: 'Zhōngguó Sìchuān yǒu hěn duō yěshēng dàxióngmāo.', meaning: 'Tứ Xuyên Trung Quốc có rất nhiều gấu trúc hoang dã.', difficulty: 'Nâng cao', tip: '野生 (yěshēng - hoang dã).' },
      { id: 309, hanzi: '动物园里有狮子、老虎和猴子。', pinyin: 'Dòngwùyuán lǐ yǒu shīzi, lǎohǔ hé hóuzi.', meaning: 'Trong sở thú có sư tử, hổ và khỉ.', difficulty: 'Nâng cao', tip: '动物园 (sở thú).' },
      { id: 310, hanzi: '我的猫每天都喜欢吃鱼和睡觉。', pinyin: 'Wǒ de māo měitiān dōu xǐhuan chī yú hé shuìjiào.', meaning: 'Mèo của tôi mỗi ngày đều thích ăn cá và đi ngủ.', difficulty: 'Cơ bản', tip: '每天都 (mỗi ngày đều).' }
    ]
  };
