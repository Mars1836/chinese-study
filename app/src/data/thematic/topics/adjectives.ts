import { ThematicTopic } from '../../../types/thematic';

export const adjectivesTopic: ThematicTopic = {
    id: 'adjectives',
    title: '50+ Tính Từ Miêu Tả Cảm Xúc, Trạng Thái & Tính Chất',
    chineseTitle: '常用形容词大全',
    pinyinTitle: 'Chángyòng xíngróngcí dàquán',
    iconName: 'Smile',
    badge: 'Chủ đề 10 • Biểu cảm sinh động',
    color: 'from-amber-500 to-rose-600',
    desc: 'Bộ sưu tập đầy đủ các cặp tính từ trái nghĩa thông dụng nhất: to/nhỏ, nhiều/ít, tốt/xấu, nhanh/chậm, nóng/lạnh, đói/khát, mệt/vui, khó/dễ, đắt/rẻ cùng cấu trúc so sánh hơn 比 (bǐ).',
    grammarPoints: [
      {
        id: 1,
        title: 'Cấu trúc câu vị ngữ tính từ chuẩn: Tuyệt đối KHÔNG dùng 是',
        formula: 'Chủ ngữ + 很 / 非常 / 太 + Tính từ',
        explanation: 'Trong tiếng Trung, câu miêu tả tính chất không có động từ to-be 是. Chữ 很 trong câu vị ngữ tính từ khẳng định thường đóng vai trò cân bằng ngữ âm (không nhất thiết phải dịch là "rất"). Nếu dùng 是, câu sẽ sai ngữ pháp nghiêm trọng.',
        usageNotes: [
          'Anh ấy rất tốt: 他很好 (Tā hěn hǎo) — KHÔNG nói 他是好.',
          'Hôm nay trời rất nóng: 今天天气很热 (Jīntiān tiānqì hěn rè).'
        ],
        examples: [
          { hanzi: '汉字很有意思。', pinyin: 'Hànzì hěn yǒu yìsi.', meaning: 'Chữ Hán rất thú vị.' }
        ]
      },
      {
        id: 2,
        title: 'Cấu trúc so sánh hơn với chữ 比 (bǐ)',
        formula: 'A + 比 (bǐ) + B + Tính từ (+ 得多 / 多了 / 一点儿)',
        explanation: 'Dùng chữ 比 để so sánh mức độ giữa 2 sự vật hoặc 2 người. Muốn nhấn mạnh hơn nhiều dùng 得多 hoặc 多了 ở cuối câu; hơn một ít dùng 一点儿.',
        usageNotes: [
          'Anh ấy cao hơn tôi: 他比我高 (Tā bǐ wǒ gāo).',
          'Tàu điện ngầm nhanh hơn xe buýt nhiều: 地铁比公交车快得多 (Dìtiě bǐ gōngjiāochē kuài de duō).'
        ],
        examples: [
          { hanzi: '今天比昨天冷一点儿。', pinyin: 'Jīntiān bǐ zuótiān lěng yìdiǎnr.', meaning: 'Hôm nay lạnh hơn hôm qua một chút.' }
        ]
      },
      {
        id: 3,
        title: 'Cấu trúc cảm thán: 太 + Tính từ + 了 (Tài... le)',
        formula: '太 + Tính từ + 了 (Quá... rồi / ...lắm)',
        explanation: 'Cấu trúc này dùng để bộc lộ cảm xúc khen ngợi hoặc phàn nàn về một mức độ vượt quá bình thường.',
        usageNotes: [
          'Quá tốt rồi: 太好了！ (Tài hǎo le!)',
          'Đắt quá rồi: 太贵了！ (Tài guì le!)'
        ],
        examples: [
          { hanzi: '这个西瓜太甜了！', pinyin: 'Zhè gè xīguā tài tián le!', meaning: 'Quả dưa hấu này ngọt quá đi thôi!' }
        ]
      }
    ],
    words: [
      { id: 9501, hanzi: '好', pinyin: 'hǎo', hanViet: 'Hảo', meaning: 'Tốt, đẹp, hay, khỏe', type: 'Tính từ', writingGuide: 'Nữ 女 bên trái + Tử 子 bên phải', exampleSentence: '他是一个好老师。', examplePinyin: 'Tā shì yí gè hǎo lǎoshī.', exampleVn: 'Thầy ấy là một giáo viên tốt.' },
      { id: 9502, hanzi: '坏', pinyin: 'huài', hanViet: 'Hoại', meaning: 'Xấu, tồi, hỏng hóc', type: 'Tính từ', writingGuide: 'Thổ 土 + Bất 不', exampleSentence: '这台电脑坏了。', examplePinyin: 'Zhè tái diànnǎo huài le.', exampleVn: 'Chiếc máy tính này bị hỏng rồi.' },
      { id: 9503, hanzi: '大', pinyin: 'dà', hanViet: 'Đại', meaning: 'To, lớn', type: 'Tính từ', writingGuide: 'Nhất 一 + Nhân 人 (người dang rộng 2 tay)', exampleSentence: '这个苹果很大很红。', examplePinyin: 'Zhè gè píngguǒ hěn dà hěn hóng.', exampleVn: 'Quả táo này rất to và đỏ.' },
      { id: 9504, hanzi: '小', pinyin: 'xiǎo', hanViet: 'Tiểu', meaning: 'Nhỏ, bé', type: 'Tính từ', writingGuide: 'Sổ móc giữa + 2 chấm hai bên', exampleSentence: '我家有一只小猫。', examplePinyin: 'Wǒ jiā yǒu yì zhī xiǎomāo.', exampleVn: 'Nhà tôi có một con mèo nhỏ.' },
      { id: 9505, hanzi: '多', pinyin: 'duō', hanViet: 'Đa', meaning: 'Nhiều', type: 'Tính từ', writingGuide: 'Hai chữ Tịch 夕 chồng lên nhau', exampleSentence: '超市里有很多新鲜蔬菜。', examplePinyin: 'Chāoshì lǐ yǒu hěn duō xīnxiān shūcài.', exampleVn: 'Trong siêu thị có rất nhiều rau tươi.' },
      { id: 9506, hanzi: '少', pinyin: 'shǎo', hanViet: 'Thiểu', meaning: 'Ít', type: 'Tính từ', writingGuide: 'Tiểu 小 + Nét phẩy xéo dưới', exampleSentence: '今天来开会的人很少。', examplePinyin: 'Jīntiān lái kāihuì de rén hěn shǎo.', exampleVn: 'Hôm nay người đến họp rất ít.' },
      { id: 9507, hanzi: '高', pinyin: 'gāo', hanViet: 'Cao', meaning: 'Cao (chiều cao, tòa nhà)', type: 'Tính từ', writingGuide: 'Chữ tượng hình cổng tháp cao', exampleSentence: '姚明的个子非常高。', examplePinyin: 'Yáo Míng de gèzi fēicháng gāo.', exampleVn: 'Vóc dáng Dao Minh rất cao.' },
      { id: 9508, hanzi: '矮', pinyin: 'ǎi', hanViet: 'Ải', meaning: 'Thấp, lùn', type: 'Tính từ', writingGuide: 'Thỉ 矢 (mũi tên ngắn) + Ủy 委', exampleSentence: '这棵树比那棵树矮。', examplePinyin: 'Zhè kē shù bǐ nà kē shù ǎi.', exampleVn: 'Cây này thấp hơn cây kia.' },
      { id: 9509, hanzi: '胖', pinyin: 'pàng', hanViet: 'Bàn', meaning: 'Mập, béo', type: 'Tính từ', writingGuide: 'Nguyệt 月 (thịt) + Bán 半 (nửa)', exampleSentence: '小猫长得胖乎乎的。', examplePinyin: 'Xiǎomāo zhǎng de pànghūhū de.', exampleVn: 'Mèo con lớn lên béo tròn béo trục.' },
      { id: 9510, hanzi: '瘦', pinyin: 'shòu', hanViet: 'Sấu', meaning: 'Gầy, ốm', type: 'Tính từ', writingGuide: 'Bệnh 疒+ Tẩu 叟', exampleSentence: '他最近工作太忙，瘦了。', examplePinyin: 'Tā zuìjìn gōngzuò tài máng, shòu le.', exampleVn: 'Dạo này anh ấy làm việc bận quá nên bị gầy đi.' },
      { id: 9511, hanzi: '快', pinyin: 'kuài', hanViet: 'Khoái', meaning: 'Nhanh, mau lẹ, vui sướng', type: 'Tính từ', writingGuide: 'Tâm đứng 忄+ Quyết 夬', exampleSentence: '中国高铁跑得非常快。', examplePinyin: 'Zhōngguó gāotiě pǎo de fēicháng kuài.', exampleVn: 'Tàu cao tốc Trung Quốc chạy cực kỳ nhanh.' },
      { id: 9512, hanzi: '慢', pinyin: 'màn', hanViet: 'Mạn', meaning: 'Chậm, từ từ', type: 'Tính từ', writingGuide: 'Tâm đứng 忄+ Mạn 曼', exampleSentence: '请您说慢一点儿。', examplePinyin: 'Qǐng nín shuō màn yìdiǎnr.', exampleVn: 'Xin ngài hãy nói chậm một chút.' },
      { id: 9513, hanzi: '热', pinyin: 'rè', hanViet: 'Nhiệt', meaning: 'Nóng (nhiệt độ, thời tiết)', type: 'Tính từ', writingGuide: 'Chấp 执 ở trên + Bốn chấm hỏa 灬 ở dưới', exampleSentence: '夏天天气非常热。', examplePinyin: 'Xiàtiān tiānqì fēicháng rè.', exampleVn: 'Mùa hè thời tiết rất nóng.' },
      { id: 9514, hanzi: '冷', pinyin: 'lěng', hanViet: 'Lãnh', meaning: 'Lạnh (nhiệt độ, thời tiết)', type: 'Tính từ', writingGuide: 'Băng 冫(hai chấm băng) + Lệnh 令', exampleSentence: '冬天北方很冷。', examplePinyin: 'Dōngtiān běifāng hěn lěng.', exampleVn: 'Mùa đông miền Bắc rất lạnh.' },
      { id: 9515, hanzi: '累', pinyin: 'lèi', hanViet: 'Luy', meaning: 'Mệt mỏi', type: 'Tính từ', writingGuide: 'Điền 田 (ruộng) ở trên + Mịch 糸 (dây tơ) ở dưới', exampleSentence: '今天走了一万步，好累啊。', examplePinyin: 'Jīntiān zǒu le yíwàn bù, hǎo lèi a.', exampleVn: 'Hôm nay đi bộ một vạn bước, mệt quá đi.' },
      { id: 9516, hanzi: '饿', pinyin: 'è', hanViet: 'Ngạ', meaning: 'Đói bụng', type: 'Tính từ', writingGuide: 'Thực 饣(thức ăn) + Ngã 我', exampleSentence: '肚子饿了，我们去吃饭吧。', examplePinyin: 'Dùzi è le, wǒmen qù chīfàn ba.', exampleVn: 'Bụng đói rồi, chúng ta đi ăn cơm thôi.' },
      { id: 9517, hanzi: '渴', pinyin: 'kě', hanViet: 'Khát', meaning: 'Khát nước', type: 'Tính từ', writingGuide: 'Thủy 氵(ba chấm nước) + Hạt 曷', exampleSentence: '我很渴，想喝冰水。', examplePinyin: 'Wǒ hěn kě, xiǎng hē bīng shuǐ.', exampleVn: 'Tôi rất khát, muốn uống nước đá.' },
      { id: 9518, hanzi: '忙', pinyin: 'máng', hanViet: 'Mang', meaning: 'Bận rộn', type: 'Tính từ', writingGuide: 'Tâm đứng 忄+ Vong 亡 (chết/mất)', exampleSentence: '你今天工作忙不忙？', examplePinyin: 'Nǐ jīntiān gōngzuò máng bù máng?', exampleVn: 'Hôm nay công việc của bạn có bận không?' },
      { id: 9519, hanzi: '高兴', pinyin: 'gāoxìng', hanViet: 'Cao hứng', meaning: 'Vui vẻ, hân hoan', type: 'Tính từ', writingGuide: 'Cao 高 + Hứng 兴', exampleSentence: '今天全家人都非常高兴。', examplePinyin: 'Jīntiān quán jiā rén dōu fēicháng gāoxìng.', exampleVn: 'Hôm nay cả nhà đều vô cùng vui vẻ.' },
      { id: 9520, hanzi: '难', pinyin: 'nán', hanViet: 'Nan', meaning: 'Khó khăn', type: 'Tính từ', writingGuide: 'Hữu 又 + Chuy 隹', exampleSentence: '发音不太难，汉字比较难。', examplePinyin: 'Fāyīn bú tài nán, Hànzì bǐjiào nán.', exampleVn: 'Phát âm không khó lắm, chữ Hán tương đối khó.' },
      { id: 9521, hanzi: '容易', pinyin: 'róngyì', hanViet: 'Dung dị', meaning: 'Dễ dàng', type: 'Tính từ', writingGuide: 'Dung 容 + Dịch 易', exampleSentence: '这道题非常容易。', examplePinyin: 'Zhè dào tí fēicháng róngyì.', exampleVn: 'Câu hỏi này rất dễ dàng.' },
      { id: 9522, hanzi: '舒服', pinyin: 'shūfu', hanViet: 'Thư phục', meaning: 'Thoải mái, dễ chịu, khỏe khoắn', type: 'Tính từ', writingGuide: 'Thư 舒 + Phục 服', exampleSentence: '坐在沙发上真舒服。', examplePinyin: 'Zuò zài shāfā shang zhēn shūfu.', exampleVn: 'Ngồi trên ghế sofa thật là thoải mái.' }
    ],
    sampleSentences: [
      { id: 1001, hanzi: '今天的天气非常冷，你要多穿衣服。', pinyin: 'Jīntiān de tiānqì fēicháng lěng, nǐ yào duō chuān yīfu.', meaning: 'Thời tiết hôm nay rất lạnh, bạn phải mặc nhiều quần áo vào.', difficulty: 'Cơ bản', tip: 'Cấu trúc lời khuyên: 多 + Động từ (làm việc gì nhiều hơn).' },
      { id: 1002, hanzi: '工作了一整天，我感觉特别累。', pinyin: 'Gōngzuò le yì zhěng tiān, wǒ gǎnjué tèbié lèi.', meaning: 'Làm việc suốt cả một ngày, tôi cảm thấy đặc biệt mệt mỏi.', difficulty: 'Trung cấp', tip: '特别 (tèbié - đặc biệt).' },
      { id: 1003, hanzi: '学中文不难，汉字非常有趣。', pinyin: 'Xué Zhōngwén bù nán, Hànzì fēicháng yǒuqù.', meaning: 'Học tiếng Trung không khó, chữ Hán vô cùng thú vị.', difficulty: 'Cơ bản', tip: '有趣 (yǒuqù - thú vị, có ý vị).' },
      { id: 1004, hanzi: '听到这个好消息，大家都很高兴。', pinyin: 'Tīngdào zhè gè hǎo xiāoxi, dàjiā dōu hěn gāoxìng.', meaning: 'Nghe được tin tốt lành này, mọi người đều rất vui mừng.', difficulty: 'Trung cấp', tip: '消息 (xiāoxi - tin tức).' },
      { id: 1005, hanzi: '这件衣服太贵了，有没有便宜一点儿的？', pinyin: 'Zhè jiàn yīfu tài guì le, yǒu méiyǒu piányi yìdiǎnr de?', meaning: 'Chiếc áo này đắt quá rồi, có chiếc nào rẻ hơn một chút không?', difficulty: 'Trung cấp', tip: 'Câu hỏi thăm dò giá cả rất tự nhiên.' },
      { id: 1006, hanzi: '他比我高五厘米，长得很帅。', pinyin: 'Tā bǐ wǒ gāo wǔ límǐ, zhǎng de hěn shuài.', meaning: 'Anh ấy cao hơn tôi 5 cm, nhìn rất đẹp trai.', difficulty: 'Trung cấp', tip: 'Cấu trúc câu chữ 比 (so sánh hơn).' },
      { id: 1007, hanzi: '我现在肚子很饿，想吃一碗热面条。', pinyin: 'Wǒ xiànzài dùzi hěn è, xiǎng chī yì wǎn rè miàntiáo.', meaning: 'Bây giờ bụng tôi rất đói, muốn ăn một bát mì nóng.', difficulty: 'Cơ bản', tip: '肚子饿 (dùzi è - đói bụng).' },
      { id: 1008, hanzi: '这里的环境很安静，住着非常舒服。', pinyin: 'Zhèlǐ de huánjìng hěn ānjìng, zhù zhe fēicháng shūfu.', meaning: 'Môi trường ở đây rất yên tĩnh, sống vô cùng thoải mái dễ chịu.', difficulty: 'Trung cấp', tip: '安静 (yên tĩnh), 舒服 (thoải mái).' },
      { id: 1009, hanzi: '跑步比散步快得多，能锻炼身体。', pinyin: 'Pǎobù bǐ sànbù kuài de duō, néng duànliàn shēntǐ.', meaning: 'Chạy bộ nhanh hơn đi dạo nhiều, có thể rèn luyện sức khỏe.', difficulty: 'Trung cấp', tip: '快得多 (nhanh hơn nhiều).' },
      { id: 1010, hanzi: '最近你工作忙不忙？我一点儿都不忙。', pinyin: 'Zuìjìn nǐ gōngzuò máng bù máng? Wǒ yìdiǎnr dōu bù máng.', meaning: 'Dạo gần đây công việc của bạn có bận không? Tôi chẳng bận chút nào.', difficulty: 'Trung cấp', tip: '一点儿都不 (yìdiǎnr dōu bù - một chút cũng không).' }
    ]
  };
