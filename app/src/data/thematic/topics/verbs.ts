import { ThematicTopic } from '../../../types/thematic';

export const verbsTopic: ThematicTopic = {
    id: 'verbs',
    title: '50+ Động Từ Cốt Lõi Thông Dụng Nhất',
    chineseTitle: '常用动词大全',
    pinyinTitle: 'Chángyòng dòngcí dàquán',
    iconName: 'Zap',
    badge: 'Chủ đề 9 • Linh hồn câu',
    color: 'from-teal-500 to-emerald-600',
    desc: 'Làm chủ các động từ quan trọng nhất trong tiếng Trung: hành động sinh hoạt (ăn, uống, ngủ), giác quan (nhìn, nghe, nói, viết), di chuyển (đi, đến, về, vào, ra), nhận thức (biết, hiểu, quen) và các trợ từ động thái.',
    grammarPoints: [
      {
        id: 1,
        title: 'Trợ từ động thái 了 (le): Biểu thị hành động đã hoàn thành',
        formula: 'Chủ ngữ + Động từ + 了 + (Tân ngữ) | Phủ định: 没 (有) + Động từ (BỎ 了)',
        explanation: 'Trợ từ 了 đặt ngay sau động từ để biểu thị hành động đã xảy ra hoặc đã hoàn thành. Khi phủ định, bắt buộc dùng 没 hoặc 没有 trước động từ và tuyệt đối KHÔNG dùng 了 ở cuối.',
        usageNotes: [
          'Tôi đã ăn cơm rồi: 我吃了饭 (Wǒ chī le fàn).',
          'Tôi chưa ăn cơm: 我没吃饭 (Wǒ méi chī fàn) — KHÔNG nói 我没吃了饭.',
          'Anh ấy đã mua hai quyển sách: 他买了两本书 (Tā mǎi le liǎng běn shū).'
        ],
        examples: [
          { hanzi: '我喝了一杯咖啡。', pinyin: 'Wǒ hē le yì bēi kāfēi.', meaning: 'Tôi đã uống một ly cà phê.' },
          { hanzi: '他还没来呢。', pinyin: 'Tā hái méi lái ne.', meaning: 'Anh ấy vẫn chưa đến đâu.' }
        ]
      },
      {
        id: 2,
        title: 'Phân biệt phó từ phủ định 不 (bù) vs 没 (méi)',
        formula: '不 (bù) + Động từ (thói quen, ý muốn, hiện tại & tương lai) | 没 (méi) + Động từ (quá khứ, sự việc chưa xảy ra)',
        explanation: '不 thể hiện ý chí chủ quan "không muốn làm" hoặc quy luật thói quen. 没 thể hiện sự thật khách quan "chưa làm / không có làm". Riêng động từ 是 (là) và 知道 (biết) luôn luôn dùng 不 (不是, 不知道).',
        usageNotes: [
          'Tôi không ăn thịt bò (thói quen/ăn chay): 我不吃牛肉 (Wǒ bù chī niúròu).',
          'Hôm nay tôi chưa ăn cơm: 今天我没吃饭 (Jīntiān wǒ méi chī fàn).',
          'Tôi không biết: 我不知道 (Wǒ bù zhīdào).'
        ],
        examples: [
          { hanzi: '明天我不去学校。', pinyin: 'Míngtiān wǒ bú qù xuéxiào.', meaning: 'Ngày mai tôi không đi học (chủ ý tương lai).' }
        ]
      },
      {
        id: 3,
        title: 'Động từ lặp lại (AA / ABAB): Thử làm một việc gì đó',
        formula: 'Động từ đơn âm tiết: AA (看看, 听听, 问问) | Song âm tiết: ABAB (学习学习, 休息休息)',
        explanation: 'Lặp lại động từ thể hiện hành động diễn ra trong thời gian ngắn, nhẹ nhàng, lịch sự hoặc mang ý nghĩa "thử làm xem sao".',
        usageNotes: [
          'Bạn xem thử cuốn sách này xem: 你看看这本书 (Nǐ kànkan zhè běn shū).',
          'Nghe thử bài hát này: 听听这首歌 (Tīngting zhè shǒu gē).'
        ],
        examples: [
          { hanzi: '我想听听你的想法。', pinyin: 'Wǒ xiǎng tīngting nǐ de xiǎngfǎ.', meaning: 'Tôi muốn nghe thử suy nghĩ của bạn.' }
        ]
      }
    ],
    words: [
      { id: 9001, hanzi: '看', pinyin: 'kàn', hanViet: 'Khán', meaning: 'Nhìn, xem, ngắm, đọc sách, khám bệnh', type: 'Động từ', writingGuide: 'Thủ 手 (bàn tay) che trên Mục 目 (con mắt)', exampleSentence: '我喜欢在家里看书。', examplePinyin: 'Wǒ xǐhuan zài jiā lǐ kànshū.', exampleVn: 'Tôi thích đọc sách ở nhà.' },
      { id: 9002, hanzi: '听', pinyin: 'tīng', hanViet: 'Thính', meaning: 'Nghe, lắng nghe', type: 'Động từ', writingGuide: 'Khẩu 口 + Cân 斤', exampleSentence: '请大家认真听。', examplePinyin: 'Qǐng dàjiā rènzhēn tīng.', exampleVn: 'Xin mọi người hãy chăm chú lắng nghe.' },
      { id: 9003, hanzi: '说', pinyin: 'shuō', hanViet: 'Thuyết', meaning: 'Nói, bảo', type: 'Động từ', writingGuide: 'Ngôn 讠+ Đoái 兑', exampleSentence: '你会说汉语吗？', examplePinyin: 'Nǐ huì shuō Hànyǔ ma?', exampleVn: 'Bạn biết nói tiếng Hán không?' },
      { id: 9004, hanzi: '读', pinyin: 'dú', hanViet: 'Độc', meaning: 'Đọc to, học tập', type: 'Động từ', writingGuide: 'Ngôn 讠+ Mãi 卖', exampleSentence: '请跟我读这个生词。', examplePinyin: 'Qǐng gēn wǒ dú zhè gè shēngcí.', exampleVn: 'Xin hãy đọc từ mới này theo tôi.' },
      { id: 9005, hanzi: '写', pinyin: 'xiě', hanViet: 'Tả', meaning: 'Viết, sáng tác', type: 'Động từ', writingGuide: 'Mịch 冖 ở trên + Dữ 与 ở dưới', exampleSentence: '他写汉字写得很漂亮。', examplePinyin: 'Tā xiě Hànzì xiě de hěn piàoliang.', exampleVn: 'Anh ấy viết chữ Hán rất đẹp.' },
      { id: 9006, hanzi: '吃', pinyin: 'chī', hanViet: 'Cật', meaning: 'Ăn', type: 'Động từ', writingGuide: 'Khẩu 口 + Khất 乞', exampleSentence: '你想吃什么中国菜？', examplePinyin: 'Nǐ xiǎng chī shénme Zhōngguó cài?', exampleVn: 'Bạn muốn ăn món Trung Quốc nào?' },
      { id: 9007, hanzi: '喝', pinyin: 'hē', hanViet: 'Hát', meaning: 'Uống', type: 'Động từ', writingGuide: 'Khẩu 口 + Hạt 曷', exampleSentence: '每天要多喝白开水。', examplePinyin: 'Měitiān yào duō hē báikāishuǐ.', exampleVn: 'Mỗi ngày cần uống nhiều nước sôi để nguội.' },
      { id: 9008, hanzi: '去', pinyin: 'qù', hanViet: 'Khứ', meaning: 'Đi (rời xa vị trí người nói)', type: 'Động từ', writingGuide: 'Thổ 土 ở trên + Khư 厶 ở dưới', exampleSentence: '明天我们去北京旅游。', examplePinyin: 'Míngtiān wǒmen qù Běijīng lǚyóu.', exampleVn: 'Ngày mai chúng tôi đi Bắc Kinh du lịch.' },
      { id: 9009, hanzi: '来', pinyin: 'lái', hanViet: 'Lai', meaning: 'Đến, lại (về phía người nói)', type: 'Động từ', writingGuide: 'Ngang 一 + Mễ 米 có phẩy mác', exampleSentence: '欢迎你来我家做客。', examplePinyin: 'Huānyíng nǐ lái wǒ jiā zuòkè.', exampleVn: 'Hoan nghênh bạn đến nhà tôi làm khách.' },
      { id: 9010, hanzi: '回', pinyin: 'huí', hanViet: 'Hồi', meaning: 'Về, trở về', type: 'Động từ', writingGuide: 'Khẩu 口 lớn bao bọc Khẩu 口 nhỏ bên trong', exampleSentence: '下课后他马上回家。', examplePinyin: 'Xiàkè hòu tā mǎshàng huí jiā.', exampleVn: 'Sau khi tan học anh ấy lập tức về nhà.' },
      { id: 9011, hanzi: '买', pinyin: 'mǎi', hanViet: 'Mãi', meaning: 'Mua', type: 'Động từ', writingGuide: 'Đầu móc trên + Đầu nét dưới', exampleSentence: '我想买两本中文书。', examplePinyin: 'Wǒ xiǎng mǎi liǎng běn Zhōngwén shū.', exampleVn: 'Tôi muốn mua hai cuốn sách tiếng Trung.' },
      { id: 9012, hanzi: '卖', pinyin: 'mài', hanViet: 'Mại', meaning: 'Bán (có chữ Thập 十 trên đầu)', type: 'Động từ', writingGuide: 'Thập 十 ở trên + Mãi 买 ở dưới', exampleSentence: '这家超市卖很多新鲜水果。', examplePinyin: 'Zhè jiā chāoshì mài hěn duō xīnxiān shuǐguǒ.', exampleVn: 'Siêu thị này bán rất nhiều hoa quả tươi.' },
      { id: 9013, hanzi: '学', pinyin: 'xué', hanViet: 'Học', meaning: 'Học tập, bắt chước', type: 'Động từ', writingGuide: '3 chấm phẩy trên + Mịch 冖 + Tử 子', exampleSentence: '我们要努力学好汉语。', examplePinyin: 'Wǒmen yào nǔlì xué hǎo Hànyǔ.', exampleVn: 'Chúng ta phải nỗ lực học giỏi tiếng Hán.' },
      { id: 9014, hanzi: '做', pinyin: 'zuò', hanViet: 'Tác', meaning: 'Làm, chế tạo, nấu ăn', type: 'Động từ', writingGuide: 'Nhân đứng 亻+ Cổ 古 + Phộc 攵', exampleSentence: '你今天晚上做什么？', examplePinyin: 'Nǐ jīntiān wǎnshang zuò shénme?', exampleVn: 'Tối nay bạn làm cái gì?' },
      { id: 9015, hanzi: '喜欢', pinyin: 'xǐhuan', hanViet: 'Hỷ hoan', meaning: 'Thích, yêu thích', type: 'Động từ', writingGuide: 'Hỷ 喜 + Hoan 欢', exampleSentence: '我很喜欢学中国书法。', examplePinyin: 'Wǒ hěn xǐhuan xué Zhōngguó shūfǎ.', exampleVn: 'Tôi rất thích học thư pháp Trung Hoa.' },
      { id: 9016, hanzi: '想', pinyin: 'xiǎng', hanViet: 'Tưởng', meaning: 'Muốn, nhớ, suy nghĩ', type: 'Động từ', writingGuide: 'Tương 相 (mộc + mục) + Tâm 心 ở dưới', exampleSentence: '我很想我的爸爸妈妈。', examplePinyin: 'Wǒ hěn xiǎng wǒ de bàba māmā.', exampleVn: 'Tôi rất nhớ bố mẹ của tôi.' },
      { id: 9017, hanzi: '要', pinyin: 'yào', hanViet: 'Yếu', meaning: 'Muốn, cần, phải, sắp', type: 'Động từ', writingGuide: 'Tây 西 ở trên + Nữ 女 ở dưới', exampleSentence: '我要一杯冰绿茶，谢谢。', examplePinyin: 'Wǒ yào yì bēi bīng lǜchá, xièxie.', exampleVn: 'Tôi muốn một ly trà xanh đá, cảm ơn.' },
      { id: 9018, hanzi: '认识', pinyin: 'rènshi', hanViet: 'Nhận thức', meaning: 'Quen biết, nhận biết', type: 'Động từ', writingGuide: 'Nhận 认 (ngôn 讠+ nhân 人) + Thức 识', exampleSentence: '认识你，我很高兴。', examplePinyin: 'Rènshi nǐ, wǒ hěn gāoxìng.', exampleVn: 'Rất vui được quen biết bạn.' },
      { id: 9019, hanzi: '知道', pinyin: 'zhīdào', hanViet: 'Tri đạo', meaning: 'Biết, nắm rõ thông tin', type: 'Động từ', writingGuide: 'Tri 知 (thỉ 矢 + khẩu 口) + Đạo 道', exampleSentence: '你知道去天安门怎么走吗？', examplePinyin: "Nǐ zhīdào qù Tiān'ānmén zěnme zǒu ma?", exampleVn: 'Bạn có biết đi Thiên An Môn đi như thế nào không?' },
      { id: 9020, hanzi: '找', pinyin: 'zhǎo', hanViet: 'Trảo', meaning: 'Tìm kiếm, thối tiền thừa', type: 'Động từ', writingGuide: 'Thủ 扌(tay) + Qua 戈 (cây giáo)', exampleSentence: '你找谁？我找王经理。', examplePinyin: 'Nǐ zhǎo shéi? Wǒ zhǎo Wáng jīnglǐ.', exampleVn: 'Bạn tìm ai? Tôi tìm giám đốc Vương.' },
      { id: 9021, hanzi: '等', pinyin: 'děng', hanViet: 'Đẳng', meaning: 'Chờ, đợi', type: 'Động từ', writingGuide: 'Trúc ⺮ ở trên + Tự 寺 (chùa) ở dưới', exampleSentence: '请大家稍等一下。', examplePinyin: 'Qǐng dàjiā shāoděng yíxià.', exampleVn: 'Xin mọi người chờ một lát.' },
      { id: 9022, hanzi: '帮', pinyin: 'bāng', hanViet: 'Bang', meaning: 'Giúp, hỗ trợ', type: 'Động từ', writingGuide: 'Bang 邦 ở trên + Cân 巾 ở dưới', exampleSentence: '你能帮我一个忙吗？', examplePinyin: 'Nǐ néng bāng wǒ yí gè máng ma?', exampleVn: 'Bạn có thể giúp tôi một tay được không?' }
    ],
    sampleSentences: [
      { id: 901, hanzi: '我每天早上喝一杯水，然后去学校。', pinyin: 'Wǒ měitiān zǎoshang hē yì bēi shuǐ, ránhòu qù xuéxiào.', meaning: 'Mỗi sáng tôi uống một ly nước, sau đó đi đến trường.', difficulty: 'Cơ bản', tip: 'Cặp liên từ: 然后 (ránhòu - sau đó).' },
      { id: 902, hanzi: '你听，老师正在给我们讲课呢。', pinyin: 'Nǐ tīng, lǎoshī zhèngzài gěi wǒmen jiǎngkè ne.', meaning: 'Bạn nghe kìa, thầy giáo đang giảng bài cho chúng ta đấy.', difficulty: 'Trung cấp', tip: '正在...呢 biểu thị hành động đang diễn ra.' },
      { id: 903, hanzi: '他想买一部新手机，但是没有钱。', pinyin: 'Tā xiǎng mǎi yí bù xīn shǒujī, dànshì méiyǒu qián.', meaning: 'Anh ấy muốn mua một chiếc điện thoại mới, nhưng không có tiền.', difficulty: 'Cơ bản', tip: 'Lượng từ cho điện thoại: 一部 (yí bù).' },
      { id: 904, hanzi: '我喜欢在家里看书和听音乐。', pinyin: 'Wǒ xǐhuan zài jiā lǐ kànshū hé tīng yīnyuè.', meaning: 'Tôi thích đọc sách và nghe nhạc ở nhà.', difficulty: 'Cơ bản', tip: 'Sở thích thường dùng: 喜欢 + Động từ.' },
      { id: 905, hanzi: '请问，你认识前面那位中文老师吗？', pinyin: 'Qǐngwèn, nǐ rènshi qiánmiàn nà wèi Zhōngwén lǎoshī ma?', meaning: 'Xin hỏi, bạn có quen biết vị giáo viên tiếng Trung phía trước không?', difficulty: 'Trung cấp', tip: '认识 (rènshi - quen biết người nào đó).' },
      { id: 906, hanzi: '你在找什么？我在找我的钥匙。', pinyin: 'Nǐ zài zhǎo shénme? Wǒ zài zhǎo wǒ de yàoshi.', meaning: 'Bạn đang tìm cái gì vậy? Tôi đang tìm chìa khóa của mình.', difficulty: 'Cơ bản', tip: '找 (zhǎo - tìm kiếm).' },
      { id: 907, hanzi: '请等我五分钟，我马上就来。', pinyin: 'Qǐng děng wǒ wǔ fēnzhōng, wǒ mǎshàng jiù lái.', meaning: 'Xin đợi tôi 5 phút, tôi tới ngay đây.', difficulty: 'Cơ bản', tip: '马上就 (mǎshàng jiù - lập tức, ngay).' },
      { id: 908, hanzi: '他昨天写了一封长信给他的妈妈。', pinyin: 'Tā zuótiān xiě le yì fēng cháng xìn gěi tā de māmā.', meaning: 'Hôm qua anh ấy đã viết một bức thư dài gửi cho mẹ.', difficulty: 'Trung cấp', tip: 'Lượng từ cho thư: 封 (fēng).' },
      { id: 909, hanzi: '你会说汉语吗？我会说一点儿。', pinyin: 'Nǐ huì shuō Hànyǔ ma? Wǒ huì shuō yìdiǎnr.', meaning: 'Bạn biết nói tiếng Hán không? Tôi biết nói một chút.', difficulty: 'Cơ bản', tip: '会 + Động từ: biết làm gì qua học tập.' },
      { id: 910, hanzi: '他帮我借了两本很有意思的中文书。', pinyin: 'Tā bāng wǒ jiè le liǎng běn hěn yǒu yìsi de Zhōngwén shū.', meaning: 'Anh ấy đã giúp tôi mượn hai cuốn sách tiếng Trung rất hay.', difficulty: 'Trung cấp', tip: 'A 帮 B + Động từ: A giúp B làm việc gì.' },
      { id: 911, hanzi: '你看懂了吗？', pinyin: 'Nǐ kàndǒng le ma?', meaning: 'Bạn xem có hiểu không?', difficulty: 'Cơ bản', tip: 'Bổ ngữ kết quả: 看懂 (xem hiểu).' },
      { id: 912, hanzi: '我们一起走吧。', pinyin: 'Wǒmen yìqǐ zǒu ba.', meaning: 'Chúng mình cùng đi thôi.', difficulty: 'Cơ bản', tip: 'Chúng ta cùng đi: 一起走.' },
      { id: 913, hanzi: '请坐，请喝水。', pinyin: 'Qǐng zuò, qǐng hē shuǐ.', meaning: 'Xin mời ngồi, xin mời uống nước.', difficulty: 'Cơ bản', tip: 'Lời mời lịch sự: 请坐, 请喝.' },
      { id: 914, hanzi: '他在听音乐。', pinyin: 'Tā zài tīng yīnyuè.', meaning: 'Anh ấy đang nghe nhạc.', difficulty: 'Cơ bản', tip: 'Đang làm gì: 在 + Động từ.' },
      { id: 915, hanzi: '你会写这个汉字吗？', pinyin: 'Nǐ huì xiě zhè ge hànzì ma?', meaning: 'Bạn biết viết chữ Hán này không?', difficulty: 'Cơ bản', tip: 'Biết viết: 会写 (huì xiě).' },
      { id: 916, hanzi: '我不想去，我想在家看书。', pinyin: 'Wǒ bù xiǎng qù, wǒ xiǎng zài jiā kànshū.', meaning: 'Tôi không muốn đi, tôi muốn ở nhà đọc sách.', difficulty: 'Cơ bản', tip: 'Ở nhà đọc sách: 在家看书.' }
    ]
  };
