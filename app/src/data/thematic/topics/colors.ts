import { ThematicTopic } from '../../../types/thematic';

export const colorsTopic: ThematicTopic = {
    id: 'colors_adj',
    title: 'Màu Sắc & Tính Từ Miêu Tả Ngoại Hình',
    chineseTitle: '颜色与形容词',
    pinyinTitle: 'Yánsè yǔ xíngróngcí',
    iconName: 'Palette',
    badge: 'Chủ đề 6 • Sinh động',
    color: 'from-pink-500 to-rose-600',
    desc: 'Bảng màu sắc (đỏ, trắng, đen, lam, lục, vàng) cùng hệ thống tính từ miêu tả kích thước, ngoại hình, giá cả và tốc độ.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cấu trúc câu vị ngữ tính từ: Chủ ngữ + 很 + Tính từ',
        formula: 'Chủ ngữ + 很 / 非常 / 太 + Tính từ (KHÔNG dùng 是)',
        explanation: 'Trong tiếng Trung, câu miêu tả tính chất không dùng động từ to-be 是, mà bắt buộc dùng phó từ chỉ mức độ như 很 (hěn) trước tính từ.',
        usageNotes: [
          'Cô ấy rất xinh đẹp: 她很漂亮 (Tā hěn piàoliang) — Tuyệt đối KHÔNG nói 她是漂亮.',
          'Quần áo này rất đắt: 这件衣服很贵 (Zhè jiàn yīfu hěn guì).'
        ],
        examples: [
          { hanzi: '他长得很帅。', pinyin: 'Tā zhǎng de hěn shuài.', meaning: 'Anh ấy nhìn rất đẹp trai.' }
        ]
      }
    ],
    words: [
      { id: 6001, hanzi: '红色', pinyin: 'hóngsè', hanViet: 'Hồng sắc', meaning: 'Màu đỏ', type: 'Màu sắc', writingGuide: 'Mịch 纟+ Công 工 = Hồng 红 + Sắc 色', exampleSentence: '中国人很喜欢红色。', examplePinyin: 'Zhōngguórén hěn xǐhuan hóngsè.', exampleVn: 'Người Trung Quốc rất thích màu đỏ.' },
      { id: 6002, hanzi: '白色', pinyin: 'báisè', hanViet: 'Bạch sắc', meaning: 'Màu trắng', type: 'Màu sắc', writingGuide: 'Bạch 白 + Sắc 色', exampleSentence: '他穿一件白色的衬衫。', examplePinyin: 'Tā chuān yí jiàn báisè de chènshān.', exampleVn: 'Anh ấy mặc một chiếc áo sơ mi màu trắng.' },
      { id: 6003, hanzi: '黑色', pinyin: 'hēisè', hanViet: 'Hắc sắc', meaning: 'Màu đen', type: 'Màu sắc', writingGuide: 'Hắc 黑 + Sắc 色', exampleSentence: '这辆黑色的汽车很酷。', examplePinyin: 'Zhè liàng hēisè de qìchē hěn kù.', exampleVn: 'Chiếc xe hơi màu đen này rất ngầu.' },
      { id: 6004, hanzi: '蓝色', pinyin: 'lánsè', hanViet: 'Lam sắc', meaning: 'Màu xanh da trời / xanh lam', type: 'Màu sắc', writingGuide: 'Thảo 艹 + Giám 监 = Lam 蓝 + Sắc 色', exampleSentence: '今天的天空是蓝色的。', examplePinyin: 'Jīntiān de tiānkōng shì lánsè de.', exampleVn: 'Bầu trời hôm nay có màu xanh lam.' },
      { id: 6005, hanzi: '绿色', pinyin: 'lǜsè', hanViet: 'Lục sắc', meaning: 'Màu xanh lá cây', type: 'Màu sắc', writingGuide: 'Mịch 纟+ Lục 录 = Lục 绿 + Sắc 色', exampleSentence: '多看绿色的树对眼睛好。', examplePinyin: 'Duō kàn lǜsè de shù duì yǎnjing hǎo.', exampleVn: 'Nhìn nhiều cây xanh tốt cho mắt.' },
      { id: 6006, hanzi: '黄色', pinyin: 'huángsè', hanViet: 'Hoàng sắc', meaning: 'Màu vàng', type: 'Màu sắc', writingGuide: 'Hoàng 黄 + Sắc 色', exampleSentence: '黄色的香蕉很好吃。', examplePinyin: 'Huángsè de xiāngjiāo hěn hǎochī.', exampleVn: 'Quả chuối vàng rất ngon.' },
      { id: 6007, hanzi: '漂亮', pinyin: 'piàoliang', hanViet: 'Phiêu lượng', meaning: 'Xinh đẹp (dùng cho nữ / cảnh / đồ vật)', type: 'Tính từ', writingGuide: 'Phiêu 漂 (ba chấm thủy 氵) + Lượng 亮', exampleSentence: '你的新衣服真漂亮！', examplePinyin: 'Nǐ de xīn yīfu zhēn piàoliang!', exampleVn: 'Bộ đồ mới của bạn thật là đẹp!' },
      { id: 6008, hanzi: '帅', pinyin: 'shuài', hanViet: 'Soái', meaning: 'Đẹp trai (dùng cho nam)', type: 'Tính từ', writingGuide: 'Sư 师 bớt nét phẩy bên trái', exampleSentence: '那个男孩很帅。', examplePinyin: 'Nà gè nánhái hěn shuài.', exampleVn: 'Cậu con trai kia rất đẹp trai.' },
      { id: 6009, hanzi: '贵', pinyin: 'guì', hanViet: 'Quý', meaning: 'Đắt, quý báu', type: 'Tính từ', writingGuide: 'Trung 中 ở trên + Bối 贝 (vỏ sò/tiền của) ở dưới', exampleSentence: '这个苹果手机太贵了。', examplePinyin: 'Zhè gè Píngguǒ shǒujī tài guì le.', exampleVn: 'Chiếc điện thoại Apple này đắt quá.' },
      { id: 6010, hanzi: '便宜', pinyin: 'piányi', hanViet: 'Tiện nghi', meaning: 'Rẻ (giá rẻ)', type: 'Tính từ', writingGuide: 'Tiện 便 + Nghi 宜', exampleSentence: '这家商店的东西很便宜。', examplePinyin: 'Zhè jiā shāngdiàn de dōngxi hěn piányi.', exampleVn: 'Đồ ở cửa hàng này rất rẻ.' }
    ],
    sampleSentences: [
      { id: 601, hanzi: '这件红色的衣服真漂亮。', pinyin: 'Zhè jiàn hóngsè de yīfu zhēn piàoliang.', meaning: 'Bộ quần áo màu đỏ này thật là đẹp.', difficulty: 'Cơ bản', tip: '真 (zhēn) bổ nghĩa biểu cảm: Thật là...' },
      { id: 602, hanzi: '太贵了，可以便宜一点儿吗？', pinyin: 'Tài guì le, kěyǐ piányi yìdiǎnr ma?', meaning: 'Đắt quá rồi, có thể rẻ hơn một chút không?', difficulty: 'Cơ bản', tip: 'Câu mặc cả kinh điển khi đi mua sắm.' },
      { id: 603, hanzi: '我想买一双白色的运动鞋。', pinyin: 'Wǒ xiǎng mǎi yì shuāng báisè de yùndòngxié.', meaning: 'Tôi muốn mua một đôi giày thể thao màu trắng.', difficulty: 'Trung cấp', tip: 'Lượng từ cho giày đôi: 双 (shuāng).' },
      { id: 604, hanzi: '他的个子很高，长得非常帅。', pinyin: 'Tā de gèzi hěn gāo, zhǎng de fēicháng shuài.', meaning: 'Vóc dáng anh ấy rất cao, nhìn rất đẹp trai.', difficulty: 'Trung cấp', tip: '个子 (gèzi - chiều cao/vóc dáng).' },
      { id: 605, hanzi: '这个西瓜又大又甜，非常好吃。', pinyin: 'Zhè gè xīguā yòu dà yòu tián, fēicháng hǎochī.', meaning: 'Quả dưa hấu này vừa to lại vừa ngọt, ăn rất ngon.', difficulty: 'Trung cấp', tip: 'Cấu trúc 又...又...: Vừa... lại vừa...' },
      { id: 606, hanzi: '晴天的时候，天空是蓝色的。', pinyin: 'Qíngtiān de shíhou, tiānkōng shì lánsè de.', meaning: 'Lúc trời nắng đẹp, bầu trời có màu xanh biếc.', difficulty: 'Trung cấp', tip: '的时候 (lúc, khi).' },
      { id: 607, hanzi: '骑自行车比走路快得多。', pinyin: 'Qí zìxíngchē bǐ zǒulù kuài de duō.', meaning: 'Đi xe đạp nhanh hơn đi bộ rất nhiều.', difficulty: 'Trung cấp', tip: '比...快得多 (nhanh hơn nhiều).' },
      { id: 608, hanzi: '我爸爸买了一辆黑色的新车。', pinyin: 'Wǒ bàba mǎi le yí liàng hēisè de xīn chē.', meaning: 'Bố tôi đã mua một chiếc xe ô tô mới màu đen.', difficulty: 'Trung cấp', tip: 'Lượng từ cho xe cộ: 辆 (liàng).' },
      { id: 609, hanzi: '这间房子的窗户很大，采光很好。', pinyin: 'Zhè jiān fángzi de chuānghu hěn dà, cǎiguāng hěn hǎo.', meaning: 'Cửa sổ căn phòng này rất lớn, đón ánh sáng rất tốt.', difficulty: 'Nâng cao', tip: 'Lượng từ phòng: 间 (jiān).' },
      { id: 610, hanzi: '这里的衣服既便宜又好看，质量很棒。', pinyin: 'Zhèlǐ de yīfu jì piányi yòu hǎokàn, zhìliàng hěn bàng.', meaning: 'Quần áo ở đây vừa rẻ lại vừa đẹp, chất lượng rất đỉnh.', difficulty: 'Nâng cao', tip: '既...又...: Vừa... vừa...' },
      { id: 611, hanzi: '你喜欢什么颜色？', pinyin: 'Nǐ xǐhuan shénme yánsè?', meaning: 'Bạn thích màu gì?', difficulty: 'Cơ bản', tip: 'Màu gì: 什么颜色 (shénme yánsè).' },
      { id: 612, hanzi: '我喜欢白色。', pinyin: 'Wǒ xǐhuan báisè.', meaning: 'Tôi thích màu trắng.', difficulty: 'Cơ bản', tip: 'Màu trắng: 白色 (báisè).' },
      { id: 613, hanzi: '你看那朵红花。', pinyin: 'Nǐ kàn nà duǒ hóng huā.', meaning: 'Bạn nhìn bông hoa đỏ kìa.', difficulty: 'Cơ bản', tip: 'Bông hoa đỏ: 红花 (hóng huā).' },
      { id: 614, hanzi: '他穿黑色的衣服。', pinyin: 'Tā chuān hēisè de yīfu.', meaning: 'Anh ấy mặc quần áo màu đen.', difficulty: 'Cơ bản', tip: 'Mặc áo màu đen: 穿黑色的衣服.' },
      { id: 615, hanzi: '这支笔是蓝色的。', pinyin: 'Zhè zhī bǐ shì lánsè de.', meaning: 'Cây bút này có màu xanh lam.', difficulty: 'Cơ bản', tip: 'Màu xanh lam: 蓝色 (lánsè).' },
      { id: 616, hanzi: '这件衣服太贵了。', pinyin: 'Zhè jiàn yīfu tài guì le.', meaning: 'Bộ quần áo này đắt quá rồi.', difficulty: 'Cơ bản', tip: 'Đắt quá: 太贵了 (tài guì le).' }
    ]
  };
