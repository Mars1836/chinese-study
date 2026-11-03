import { ThematicTopic } from '../types/thematic';

export const thematicTopics: ThematicTopic[] = [
  {
    id: 'greetings',
    title: 'Giao Tiếp & Xã Giao Cơ Bản',
    chineseTitle: '社交问候',
    pinyinTitle: 'Shèjiāo wènhòu',
    iconName: 'MessageCircleHeart',
    badge: 'Chủ đề 1',
    color: 'from-rose-500 to-pink-600',
    desc: 'Các mẫu câu chào hỏi, cảm ơn, xin lỗi, làm quen và phép lịch sự trong văn hóa giao tiếp Trung Hoa.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cấu trúc câu hỏi đuôi với trợ từ 吗 (ma)',
        formula: 'Câu khẳng định + 吗 (ma)?',
        explanation: 'Thêm trợ từ nghi vấn 吗 vào cuối một câu khẳng định để chuyển thành câu hỏi Có... không? Trả lời khẳng định lặp lại vị ngữ, phủ định dùng 不 (bù).',
        usageNotes: [
          'Chữ 吗 mang thanh nhẹ, đọc ngắn và nhẹ.',
          'Khi trả lời có thể nói: 是的 (Đúng vậy) hoặc 不是 (Không phải).'
        ],
        examples: [
          { hanzi: '你好吗？', pinyin: 'Nǐ hǎo ma?', meaning: 'Bạn có khỏe không?' },
          { hanzi: '你忙吗？', pinyin: 'Nǐ máng ma?', meaning: 'Bạn có bận không?' },
          { hanzi: '你喝茶吗？', pinyin: 'Nǐ hē chá ma?', meaning: 'Bạn uống trà không?' }
        ]
      },
      {
        id: 2,
        title: 'Phó từ chỉ mức độ 太...了 (tài... le - Quá / Lắm)',
        formula: '太 + Tính từ + 了',
        explanation: 'Dùng để diễn tả cảm thán về mức độ cao hoặc vượt quá mong đợi (Tốt quá, đắt quá). Phủ định dùng 不太 (bú tài) và KHÔNG dùng 了 ở cuối.',
        usageNotes: [
          'Khẳng định: 太好了！ (Tốt quá rồi!)',
          'Phủ định: 不太好 (Không tốt lắm — không có 了).'
        ],
        examples: [
          { hanzi: '太好了！', pinyin: 'Tài hǎo le!', meaning: 'Tốt quá rồi / Tuyệt quá!' },
          { hanzi: '太贵了！', pinyin: 'Tài guì le!', meaning: 'Đắt quá rồi!' },
          { hanzi: '我不太忙。', pinyin: 'Wǒ bú tài máng.', meaning: 'Tôi không bận lắm.' }
        ]
      }
    ],
    words: [
      {
        id: 101,
        hanzi: '你好',
        pinyin: 'nǐ hǎo',
        hanViet: 'Nhĩ hảo',
        meaning: 'Xin chào',
        type: 'Chào hỏi',
        writingGuide: '你 (Nhân đứng 亻 + Mịch 冖 + Tiểu 小) + 好 (Nữ 女 + Tử 子)',
        exampleSentence: '你好！很高兴认识你。',
        examplePinyin: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.',
        exampleVn: 'Xin chào! Rất vui được quen biết bạn.'
      },
      {
        id: 102,
        hanzi: '谢谢',
        pinyin: 'xièxie',
        hanViet: 'Tạ tạ',
        meaning: 'Cảm ơn',
        type: 'Lịch sự',
        writingGuide: 'Ngôn 讠(lời nói) + Thân 身 (tấm thân) + Thốn 寸 (phép tắc)',
        exampleSentence: '太谢谢你了！',
        examplePinyin: 'Tài xièxie nǐ le!',
        exampleVn: 'Rất cảm ơn bạn!'
      },
      {
        id: 103,
        hanzi: '不客气',
        pinyin: 'bú kèqi',
        hanViet: 'Bất khách khí',
        meaning: 'Đừng khách sáo / Không có gì',
        type: 'Đáp lễ',
        writingGuide: '不 (Bất) + 客 (Miên 宀 + Truy 夂 + Khẩu 口) + 气 (Khí)',
        exampleSentence: '不用谢，不客气！',
        examplePinyin: 'Bú yòng xiè, bú kèqi!',
        exampleVn: 'Không cần cảm ơn, đừng khách sáo!'
      },
      {
        id: 104,
        hanzi: '对不起',
        pinyin: 'duìbuqǐ',
        hanViet: 'Đối bất khởi',
        meaning: 'Xin lỗi',
        type: 'Xin lỗi',
        writingGuide: '对 (Hựu 又 + Thốn 寸) + 不 + 起 (Tẩu 走 + Kỷ 己)',
        exampleSentence: '对不起，我来晚了。',
        examplePinyin: 'Duìbuqǐ, wǒ lái wǎn le.',
        exampleVn: 'Xin lỗi, tôi đến muộn rồi.'
      },
      {
        id: 105,
        hanzi: '没关系',
        pinyin: 'méi guānxi',
        hanViet: 'Một quan hệ',
        meaning: 'Không sao đâu / Đừng bận tâm',
        type: 'Đáp lời xin lỗi',
        writingGuide: '没 (Thủy 氵+ Thù 殳) + 关 (Khung) + 系 (Mịch 糹)',
        exampleSentence: '没关系，请进！',
        examplePinyin: 'Méi guānxi, qǐng jìn!',
        exampleVn: 'Không sao đâu, xin mời vào!'
      },
      {
        id: 106,
        hanzi: '再见',
        pinyin: 'zàijiàn',
        hanViet: 'Tái kiến',
        meaning: 'Tạm biệt / Hẹn gặp lại',
        type: 'Tạm biệt',
        writingGuide: '再 (Nhất 一 + Nhiễm) + 见 (Kiến - Mắt nhìn)',
        exampleSentence: '明天见，再见！',
        examplePinyin: 'Míngtiān jiàn, zàijiàn!',
        exampleVn: 'Ngày mai gặp lại, tạm biệt!'
      }
    ],
    sampleSentences: [
      { id: 1, hanzi: '你好，很高兴认识你。', pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ.', meaning: 'Xin chào, rất vui được làm quen với bạn.', difficulty: 'Cơ bản', tip: 'Câu cửa miệng khi lần đầu gặp mặt đối tác hoặc bạn bè.' },
      { id: 2, hanzi: '请问，您贵姓？', pinyin: 'Qǐngwèn, nín guìxìng?', meaning: 'Xin hỏi, quý danh của ngài là gì?', difficulty: 'Cơ bản', tip: 'Cách hỏi tên họ lịch sự, trang trọng nhất trong tiếng Trung.' },
      { id: 3, hanzi: '你最近工作忙不忙？', pinyin: 'Nǐ zuìjìn gōngzuò máng bu máng?', meaning: 'Dạo này bạn làm việc có bận không?', difficulty: 'Trung cấp', tip: 'Câu hỏi chính-phản (忙不忙 = 忙吗).' },
      { id: 4, hanzi: '太谢谢你的帮助了！', pinyin: 'Tài xièxie nǐ de bāngzhù le!', meaning: 'Vô cùng cảm ơn sự giúp đỡ của bạn!', difficulty: 'Trung cấp', tip: 'Dùng kết cấu 太...了 để tăng độ chân thành.' },
      { id: 5, hanzi: '祝你今天过得愉快！', pinyin: 'Zhù nǐ jīntiān guò de yúkuài!', meaning: 'Chúc bạn hôm nay một ngày vui vẻ!', difficulty: 'Nâng cao', tip: 'Lời chúc quen thuộc khi bắt đầu ngày mới.' }
    ]
  },

  {
    id: 'shopping',
    title: 'Mua Sắm, Giá Cả & Thanh Toán',
    chineseTitle: '购物与支付',
    pinyinTitle: 'Gòuwù yǔ zhīfù',
    iconName: 'ShoppingBag',
    badge: 'Chủ đề 2',
    color: 'from-amber-500 to-orange-600',
    desc: 'Hỏi giá tiền, mặc cả trả giá, phân biệt đồng Nhân Dân Tệ (块/元), thanh toán tiền mặt và quét mã QR WeChat/Alipay.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cách hỏi giá với 多少 (duōshao) và 怎么卖 (zěnme mài)',
        formula: 'Tên đồ vật + 多少钱 (duōshao qián)? / 怎么卖 (zěnme mài)?',
        explanation: '多少钱 là cách hỏi giá kinh điển nhất. Khi mua hoa quả hoặc đồ cân ký, người Trung Quốc thường hỏi "这个怎么卖？" (Cái này bán thế nào?).',
        examples: [
          { hanzi: '这个多少钱？', pinyin: 'Zhège duōshao qián?', meaning: 'Cái này bao nhiêu tiền?' },
          { hanzi: '苹果怎么卖？', pinyin: 'Píngguǒ zěnme mài?', meaning: 'Táo bán thế nào? (bao nhiêu 1 cân?)' }
        ]
      },
      {
        id: 2,
        title: 'Cấu trúc mặc cả: Có thể rẻ hơn một chút không?',
        formula: '能 / 可以 + 便宜一点儿 + 吗？',
        explanation: '一点儿 (yìdiǎnr) đứng sau tính từ biểu thị mức độ nhẹ, dùng để thương lượng mặc cả khéo léo.',
        examples: [
          { hanzi: '太贵了，便宜一点儿吧！', pinyin: 'Tài guì le, piányi yìdiǎnr ba!', meaning: 'Đắt quá, bớt một chút đi!' },
          { hanzi: '能便宜一点儿吗？', pinyin: 'Néng piányi yìdiǎnr ma?', meaning: 'Có thể rẻ hơn một chút không?' }
        ]
      }
    ],
    words: [
      {
        id: 201,
        hanzi: '买',
        pinyin: 'mǎi',
        hanViet: 'Mãi',
        meaning: 'Mua',
        type: 'Động từ',
        writingGuide: 'Móc ngang trên + Đầu 头',
        exampleSentence: '我想买这件衣服。',
        examplePinyin: 'Wǒ xiǎng mǎi zhè jiàn yīfu.',
        exampleVn: 'Tôi muốn mua chiếc áo này.'
      },
      {
        id: 202,
        hanzi: '多少钱',
        pinyin: 'duōshao qián',
        hanViet: 'Đa thiểu tiền',
        meaning: 'Bao nhiêu tiền',
        type: 'Cụm hỏi giá',
        writingGuide: '多 (Tịch 夕 x2) + 少 (Tiểu 小 + phẩy) + 钱 (Kim 钅 + Qua 戋)',
        exampleSentence: '请问一斤多少钱？',
        examplePinyin: 'Qǐngwèn yì jīn duōshao qián?',
        exampleVn: 'Xin hỏi một cân (nửa kg) bao nhiêu tiền?'
      },
      {
        id: 203,
        hanzi: '太贵了',
        pinyin: 'tài guì le',
        hanViet: 'Thái quý liễu',
        meaning: 'Đắt quá rồi',
        type: 'Cảm thán',
        writingGuide: '太 (Đại 大 + chấm) + 贵 (Trung 中 + Bối 贝 vỏ sò quý)',
        exampleSentence: '一百块太贵了！',
        examplePinyin: 'Yìbǎi kuài tài guì le!',
        exampleVn: '100 tệ đắt quá rồi!'
      },
      {
        id: 204,
        hanzi: '便宜',
        pinyin: 'piányi',
        hanViet: 'Tiện nghi',
        meaning: 'Rẻ, giá hời',
        type: 'Tính từ',
        writingGuide: '便 (Nhân đứng 亻 + Canh 更) + 宜 (Miên 宀 + Thả 且)',
        exampleSentence: '这种手机比较便宜。',
        examplePinyin: 'Zhè zhǒng shǒujī bǐjiào piányi.',
        exampleVn: 'Loại điện thoại này tương đối rẻ.'
      },
      {
        id: 205,
        hanzi: '微信支付',
        pinyin: 'Wēixìn zhīfù',
        hanViet: 'Vi tín chi phó',
        meaning: 'Thanh toán WeChat Pay',
        type: 'Thanh toán',
        writingGuide: '微 (Vi) + 信 (Ngôn 讠+ Nhân) + 支 (Chi) + 付 (Phó)',
        exampleSentence: '可以扫微信吗？',
        examplePinyin: 'Kěyǐ sǎo Wēixìn ma?',
        exampleVn: 'Có thể quét mã WeChat không?'
      }
    ],
    sampleSentences: [
      { id: 21, hanzi: '老板，这个多少钱一斤？', pinyin: 'Lǎobǎn, zhège duōshao qián yì jīn?', meaning: 'Ông chủ, cái này bao nhiêu tiền một cân?', difficulty: 'Cơ bản', tip: 'Ở Trung Quốc 1 cân (斤 jīn) = 500 gram.' },
      { id: 22, hanzi: '太贵了，五十块可以吗？', pinyin: 'Tài guì le, wǔshí kuài kěyǐ ma?', meaning: 'Đắt quá, 50 tệ được không?', difficulty: 'Trung cấp', tip: 'Mẹo trả giá trực tiếp nêu số tiền mình mong muốn.' },
      { id: 23, hanzi: '我可以刷卡还是扫二维码？', pinyin: 'Wǒ kěyǐ shuākǎ háishì sǎo èrwéimǎ?', meaning: 'Tôi có thể quẹt thẻ hay là quét mã QR?', difficulty: 'Trung cấp', tip: 'Cấu trúc lựa chọn A 还是 B (A hay là B).' },
      { id: 24, hanzi: '给我拿一件中号的，谢谢。', pinyin: 'Gěi wǒ ná yí jiàn zhōnghào de, xièxie.', meaning: 'Lấy cho tôi một chiếc cỡ M (size vừa), cảm ơn.', difficulty: 'Nâng cao', tip: 'Cấu trúc 给我 + Động từ (Làm gì đó cho tôi).' }
    ]
  },

  {
    id: 'dining',
    title: 'Ăn Uống & Nhà Hàng Ẩm Thực',
    chineseTitle: '餐厅点餐',
    pinyinTitle: 'Cāntīng diǎncān',
    iconName: 'UtensilsCrossed',
    badge: 'Chủ đề 3',
    color: 'from-emerald-500 to-teal-600',
    desc: 'Gọi món tại bàn, hương vị (cay, ngọt, mặn), yêu cầu đặc biệt (không bỏ hành/ớt), xin hóa đơn và đóng gói mang về.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cấu trúc gọi món với 来 (lái - Cho tôi...)',
        formula: '来 + Số lượng + Lượng từ + Món ăn/Đồ uống',
        explanation: 'Trong nhà hàng, người bản xứ dùng chữ 来 (lái) rất tự nhiên thay vì nói "我要" (Tôi muốn).',
        examples: [
          { hanzi: '来一碗牛肉面。', pinyin: 'Lái yì wǎn niúròumiàn.', meaning: 'Cho tôi một bát mì bò.' },
          { hanzi: '来两瓶啤酒。', pinyin: 'Lái liǎng píng píjiǔ.', meaning: 'Cho tôi hai chai bia.' }
        ]
      },
      {
        id: 2,
        title: 'Yêu cầu không ăn cay / không hành với 不要 (bú yào)',
        formula: '不要 + Gia vị / Món (放 ớt/hành...)',
        explanation: 'Muốn dặn đầu bếp không bỏ món gì thì dùng 不要放... (Đừng bỏ...).',
        examples: [
          { hanzi: '我不要辣。', pinyin: 'Wǒ bú yào là.', meaning: 'Tôi không ăn cay.' },
          { hanzi: '请不要放香菜。', pinyin: 'Qǐng bú yào fàng xiāngcài.', meaning: 'Xin đừng bỏ rau mùi (ngò).' }
        ]
      }
    ],
    words: [
      {
        id: 301,
        hanzi: '菜单',
        pinyin: 'càidān',
        hanViet: 'Thái đơn',
        meaning: 'Thực đơn / Menu',
        type: 'Danh từ',
        writingGuide: '菜 (Thảo 艹 + Thải 采) + 单 (Đơn giản)',
        exampleSentence: '服务员，请给我菜单。',
        examplePinyin: 'Fúwùyuán, qǐng gěi wǒ càidān.',
        exampleVn: 'Phục vụ viên, xin cho tôi xem thực đơn.'
      },
      {
        id: 302,
        hanzi: '点菜',
        pinyin: 'diǎncài',
        hanViet: 'Điểm thái',
        meaning: 'Gọi món',
        type: 'Động từ',
        writingGuide: '点 (Hắc 黑 rút gọn + 4 chấm hỏa) + 菜',
        exampleSentence: '我们可以点菜了吗？',
        examplePinyin: 'Wǒmen kěyǐ diǎncài le ma?',
        exampleVn: 'Chúng tôi có thể gọi món được chưa?'
      },
      {
        id: 303,
        hanzi: '买单',
        pinyin: 'mǎidān',
        hanViet: 'Mãi đơn',
        meaning: 'Thanh toán / Tính tiền',
        type: 'Động từ',
        writingGuide: '买 (Mua) + 单 (Hóa đơn)',
        exampleSentence: '服务员，买单！',
        examplePinyin: 'Fúwùyuán, mǎidān!',
        exampleVn: 'Phục vụ ơi, tính tiền!'
      },
      {
        id: 304,
        hanzi: '微辣',
        pinyin: 'wēi là',
        hanViet: 'Vi lạt',
        meaning: 'Cay nhẹ / Hơi cay',
        type: 'Tính từ',
        writingGuide: '微 (Nhỏ nhẹ) + 辣 (Tân 辛 cay + Thúc 束)',
        exampleSentence: '我要微辣的火锅。',
        examplePinyin: 'Wǒ yào wēi là de huǒguō.',
        exampleVn: 'Tôi muốn nồi lẩu cay nhẹ.'
      },
      {
        id: 305,
        hanzi: '打包',
        pinyin: 'dǎbāo',
        hanViet: 'Đả bao',
        meaning: 'Đóng gói mang về',
        type: 'Động từ',
        writingGuide: '打 (Thủ 扌+ Đinh 丁) + 包 (Bao bọc)',
        exampleSentence: '吃不完，请帮我打包。',
        examplePinyin: 'Chī bù wán, qǐng bāng wǒ dǎbāo.',
        exampleVn: 'Ăn không hết, xin đóng gói giúp tôi mang về.'
      }
    ],
    sampleSentences: [
      { id: 31, hanzi: '服务员，请给我们一份菜单。', pinyin: 'Fúwùyuán, qǐng gěi wǒmen yí fèn càidān.', meaning: 'Phục vụ ơi, xin cho chúng tôi một cuốn thực đơn.', difficulty: 'Cơ bản', tip: 'Lượng từ của menu là 份 (fèn).' },
      { id: 32, hanzi: '请问你们有什么特色菜？', pinyin: 'Qǐngwèn nǐmen yǒu shénme tèsè cài?', meaning: 'Xin hỏi các bạn có món đặc sản nào?', difficulty: 'Trung cấp', tip: '特色菜 (tèsè cài) là món đặc sắc nhất quán.' },
      { id: 33, hanzi: '我不吃辣，请一点儿辣椒都不要放。', pinyin: 'Wǒ bù chī là, qǐng yìdiǎnr làjiāo dōu bú yào fàng.', meaning: 'Tôi không ăn cay, xin đừng bỏ một chút ớt nào.', difficulty: 'Nâng cao', tip: 'Cấu trúc 一点儿...都 + Phủ định (Không một chút nào).' },
      { id: 34, hanzi: '这里的烤鸭味道真好吃！', pinyin: 'Zhèlǐ de kǎoyā wèidao zhēn hǎochī!', meaning: 'Vịt quay ở đây hương vị thực sự rất ngon!', difficulty: 'Trung cấp', tip: '烤鸭 (kǎoyā - vịt quay), 味道 (wèidao - hương vị).' }
    ]
  },

  {
    id: 'time',
    title: 'Thời Gian, Ngày Tháng & Hẹn Gặp',
    chineseTitle: '时间与日程',
    pinyinTitle: 'Shíjiān yǔ rìchéng',
    iconName: 'Clock',
    badge: 'Chủ đề 4',
    color: 'from-blue-500 to-indigo-600',
    desc: 'Hỏi giờ giấc, trật tự ngày tháng năm, các ngày trong tuần (星期), trạng từ chỉ thời gian và sắp xếp lịch hẹn.',
    grammarPoints: [
      {
        id: 1,
        title: 'Quy tắc vàng: Trật tự thời gian từ LỚN đến BÉ',
        formula: 'Năm (年) + Tháng (月) + Ngày (日/号) + Buổi + Giờ (点) + Phút (分)',
        explanation: 'Khác hoàn toàn với tiếng Việt (ngày/tháng/năm), tiếng Trung luôn đặt đơn vị thời gian lớn nhất lên trước: Năm → Tháng → Ngày → Sáng/Chiều → Giờ → Phút.',
        examples: [
          { hanzi: '2026年11月3日', pinyin: 'Èr líng èr liù nián shíyī yuè sān rì', meaning: 'Ngày 3 tháng 11 năm 2026' },
          { hanzi: '明天下午三点半', pinyin: 'Míngtiān xiàwǔ sān diǎn bàn', meaning: '3 giờ rưỡi chiều mai' }
        ]
      },
      {
        id: 2,
        title: 'Hỏi giờ với 现在几点了？ (Bây giờ mấy giờ rồi?)',
        formula: '现在 + 几点了？ (Xiànzài jǐ diǎn le?)',
        explanation: 'Giờ chẵn dùng 点 (diǎn), rưỡi dùng 半 (bàn - 30 phút), kém dùng 差 (chà).',
        examples: [
          { hanzi: '现在八点整。', pinyin: 'Xiànzài bā diǎn zhěng.', meaning: 'Bây giờ đúng 8 giờ.' },
          { hanzi: '差五分九点。', pinyin: 'Chà wǔ fēn jiǔ diǎn.', meaning: '9 giờ kém 5 phút.' }
        ]
      }
    ],
    words: [
      {
        id: 401,
        hanzi: '现在',
        pinyin: 'xiànzài',
        hanViet: 'Hiện tại',
        meaning: 'Bây giờ, hiện tại',
        type: 'Thời gian',
        writingGuide: '现 (Vương 王 + Kiến 见) + 在 (Thổ 土)',
        exampleSentence: '现在几点了？',
        examplePinyin: 'Xiànzài jǐ diǎn le?',
        exampleVn: 'Bây giờ là mấy giờ rồi?'
      },
      {
        id: 402,
        hanzi: '什么时候',
        pinyin: 'shénme shíhou',
        hanViet: 'Thập ma thời hậu',
        meaning: 'Khi nào / Lúc nào',
        type: 'Đại từ hỏi',
        writingGuide: '什么 + 时 (Nhật 日 + Thốn 寸) + 候',
        exampleSentence: '你什么时候来北京？',
        examplePinyin: 'Nǐ shénme shíhou lái Běijīng?',
        exampleVn: 'Khi nào bạn đến Bắc Kinh?'
      },
      {
        id: 403,
        hanzi: '星期天',
        pinyin: 'xīngqītiān',
        hanViet: 'Tinh kỳ thiên',
        meaning: 'Chủ Nhật',
        type: 'Ngày',
        writingGuide: '星 (Nhật 日 + Sinh 生) + 期 (Nguyệt 月) + 天',
        exampleSentence: '星期天你有空吗？',
        examplePinyin: 'Xīngqītiān nǐ yǒu kòng ma?',
        exampleVn: 'Chủ Nhật bạn có rảnh không?'
      },
      {
        id: 404,
        hanzi: '见面',
        pinyin: 'jiànmiàn',
        hanViet: 'Kiến diện',
        meaning: 'Gặp mặt',
        type: 'Động từ ly hợp',
        writingGuide: '见 (Kiến) + 面 (Diện - khuôn mặt)',
        exampleSentence: '我们下午两点在咖啡馆见面。',
        examplePinyin: 'Wǒmen xiàwǔ liǎng diǎn zài kāfēiguǎn jiànmiàn.',
        exampleVn: 'Chúng ta gặp mặt lúc 2 giờ chiều ở quán cà phê.'
      }
    ],
    sampleSentences: [
      { id: 41, hanzi: '请问现在几点？', pinyin: 'Qǐngwèn xiànzài jǐ diǎn?', meaning: 'Xin hỏi bây giờ là mấy giờ?', difficulty: 'Cơ bản', tip: 'Cách hỏi giờ phổ biến nhất.' },
      { id: 42, hanzi: '明天早上八点我们在学校门口见面。', pinyin: 'Míngtiān zǎoshang bā diǎn wǒmen zài xuéxiào ménkǒu jiànmiàn.', meaning: '8 giờ sáng mai chúng ta gặp nhau ở cổng trường.', difficulty: 'Trung cấp', tip: 'Thời gian (Sáng mai 8h) + Địa điểm (ở cổng trường) + Hành động (gặp).' },
      { id: 43, hanzi: '下个星期三你有时间跟我一起吃午饭吗？', pinyin: 'Xià gè xīngqīsān nǐ yǒu shíjiān gēn wǒ yìqǐ chī wǔfàn ma?', meaning: 'Thứ Tư tuần sau bạn có thời gian đi ăn trưa cùng tôi không?', difficulty: 'Nâng cao', tip: 'Cấu trúc 跟...一起 + V (Cùng ai đó làm gì).' }
    ]
  },

  {
    id: 'travel',
    title: 'Giao Thông, Du Lịch & Hỏi Đường',
    chineseTitle: '交通与问路',
    pinyinTitle: 'Jiāotōng yǔ wènlù',
    iconName: 'Navigation',
    badge: 'Chủ đề 5',
    color: 'from-cyan-500 to-blue-600',
    desc: 'Hỏi đường đi ở đâu, đi thẳng, rẽ trái/phải, bắt taxi, đi tàu điện ngầm và check-in khách sạn.',
    grammarPoints: [
      {
        id: 1,
        title: 'Hỏi vị trí và phương hướng với 在哪儿 / 怎么走',
        formula: 'Địa điểm + 在哪儿？ / 怎么走？',
        explanation: '在哪儿 (zài nǎr) là hỏi vị trí ở đâu. 怎么走 (zěnme zǒu) là hỏi lộ trình đi bằng cách nào (đi thẳng, rẽ góc...).',
        examples: [
          { hanzi: '地铁站在哪儿？', pinyin: 'Dìtiězhàn zài nǎr?', meaning: 'Trạm tàu điện ngầm ở đâu?' },
          { hanzi: '去故宫怎么走？', pinyin: 'Qù Gùgōng zěnme zǒu?', meaning: 'Đi đến Cố Cung đi đường nào?' }
        ]
      },
      {
        id: 2,
        title: 'Chỉ phương hướng: Rẽ trái, rẽ phải, đi thẳng',
        formula: '往 + Hướng (左/右/前) + 拐/走',
        explanation: '往 (wǎng) có nghĩa là "về phía/hướng về". 拐 (guǎi) là rẽ, quẹo.',
        examples: [
          { hanzi: '一直往前走。', pinyin: 'Yìzhí wǎng qián zǒu.', meaning: 'Cứ đi thẳng về phía trước.' },
          { hanzi: '往左拐。', pinyin: 'Wǎng zuǒ guǎi.', meaning: 'Rẽ sang bên trái.' }
        ]
      }
    ],
    words: [
      {
        id: 501,
        hanzi: '怎么走',
        pinyin: 'zěnme zǒu',
        hanViet: 'Chẩm ma tẩu',
        meaning: 'Đi đường nào / Đi như thế nào',
        type: 'Hỏi đường',
        writingGuide: '怎么 + 走 (Thổ 土 + Chỉ 止)',
        exampleSentence: '请问去天安门怎么走？',
        examplePinyin: 'Qǐngwèn qù Tiān\'ānmén zěnme zǒu?',
        exampleVn: 'Xin hỏi đi Quảng trường Thiên An Môn đi đường nào?'
      },
      {
        id: 502,
        hanzi: '地铁站',
        pinyin: 'dìtiězhàn',
        hanViet: 'Địa thiết trạm',
        meaning: 'Trạm tàu điện ngầm',
        type: 'Địa điểm',
        writingGuide: '地 (Thổ + Dã) + 铁 (Kim + Thất) + 站 (Lập + Chiêm)',
        exampleSentence: '附近有地铁站吗？',
        examplePinyin: 'Fùjìn yǒu dìtiězhàn ma?',
        exampleVn: 'Gần đây có trạm tàu điện ngầm không?'
      },
      {
        id: 503,
        hanzi: '出租车',
        pinyin: 'chūzūchē',
        hanViet: 'Xuất tô xa',
        meaning: 'Xe taxi',
        type: 'Phương tiện',
        writingGuide: '出 (Ra) + 租 (Hòa 禾 + Thả) + 车 (Xe)',
        exampleSentence: '我们打出租车去机场吧。',
        examplePinyin: 'Wǒmen dǎ chūzūchē qù jīchǎng ba.',
        exampleVn: 'Chúng ta bắt xe taxi ra sân bay đi.'
      },
      {
        id: 504,
        hanzi: '直走',
        pinyin: 'zhí zǒu',
        hanViet: 'Trực tẩu',
        meaning: 'Đi thẳng',
        type: 'Chỉ đường',
        writingGuide: '直 (Thập + Mục 目) + 走',
        exampleSentence: '一直走两百米就到了。',
        examplePinyin: 'Yìzhí zǒu liǎng bǎi mǐ jiù dào le.',
        exampleVn: 'Đi thẳng 200 mét nữa là tới nơi.'
      }
    ],
    sampleSentences: [
      { id: 51, hanzi: '请问，洗手间在哪儿？', pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎr?', meaning: 'Xin hỏi, nhà vệ sinh ở đâu?', difficulty: 'Cơ bản', tip: 'Câu hỏi sinh tồn số 1 khi đi du lịch nước ngoài.' },
      { id: 52, hanzi: '一直往前走，到了十字路口往右拐。', pinyin: 'Yìzhí wǎng qián zǒu, dào le shízìlùkǒu wǎng yòu guǎi.', meaning: 'Cứ đi thẳng về phía trước, đến ngã tư thì rẽ sang phải.', difficulty: 'Trung cấp', tip: '十字路口 (shízìlùkǒu - ngã tư đường hình chữ thập).' },
      { id: 53, hanzi: '师傅，请去北京大饭店，谢谢。', pinyin: 'Shīfu, qǐng qù Běijīng dà fàndiàn, xièxie.', meaning: 'Bác tài xế ơi, làm ơn chở đến khách sạn Bắc Kinh, cảm ơn.', difficulty: 'Trung cấp', tip: '师傅 (shīfu - sư phụ/bác tài) là cách xưng hô thân mật với tài xế taxi.' }
    ]
  },

  {
    id: 'health',
    title: 'Sức Khỏe, Triệu Chứng & Khám Bệnh',
    chineseTitle: '看病与健康',
    pinyinTitle: 'Kànbìng yǔ jiànkāng',
    iconName: 'Activity',
    badge: 'Chủ đề 6 (Nối Hán 2)',
    color: 'from-purple-500 to-indigo-600',
    desc: 'Diễn tả các triệu chứng đau ốm (đau đầu, sốt, cảm), nói chuyện với bác sĩ, uống thuốc và dặn dò nghỉ ngơi.',
    grammarPoints: [
      {
        id: 1,
        title: 'Cấu trúc hỏi thăm sức khỏe: ...怎么了？ (Làm sao thế?)',
        formula: 'Chủ ngữ (Bộ phận cơ thể / Người) + 怎么了？',
        explanation: 'Dùng để hỏi thăm khi thấy ai đó có biểu hiện mệt mỏi, bất thường hoặc gặp sự cố.',
        examples: [
          { hanzi: '你的头怎么了？', pinyin: 'Nǐ de tóu zěnme le?', meaning: 'Đầu bạn bị làm sao thế?' },
          { hanzi: '你今天怎么了？', pinyin: 'Nǐ jīntiān zěnme le?', meaning: 'Hôm nay bạn bị làm sao vậy?' }
        ]
      },
      {
        id: 2,
        title: 'Câu Kiêm Ngữ với 让 / 叫 (Bảo / Khiến ai làm gì)',
        formula: 'Chủ ngữ 1 + 让 / 叫 + Tân ngữ 1 (Chủ ngữ 2) + Động từ 2',
        explanation: 'Từ đứng giữa vừa là Tân ngữ của 让 vừa là Chủ ngữ thực hiện hành động thứ hai.',
        examples: [
          { hanzi: '医生让我多喝热水。', pinyin: 'Yīshēng ràng wǒ duō hē rèshuǐ.', meaning: 'Bác sĩ bảo tôi uống nhiều nước ấm.' },
          { hanzi: '大夫叫他多休息。', pinyin: 'Dàifu jiào tā duō xiūxi.', meaning: 'Bác sĩ bảo anh ấy nghỉ ngơi nhiều.' }
        ]
      }
    ],
    words: [
      {
        id: 601,
        hanzi: '头疼',
        pinyin: 'tóuténg',
        hanViet: 'Đầu thống',
        meaning: 'Đau đầu, nhức đầu',
        type: 'Triệu chứng',
        writingGuide: '头 (Đầu) + 疼 (Bộ Bệnh 疒 + Đông 冬)',
        exampleSentence: '我今天有点儿头疼。',
        examplePinyin: 'Wǒ jīntiān yǒudiǎnr tóuténg.',
        exampleVn: 'Hôm nay tôi hơi đau đầu một chút.'
      },
      {
        id: 602,
        hanzi: '发烧',
        pinyin: 'fāshāo',
        hanViet: 'Phát thiêu',
        meaning: 'Phát sốt, bị sốt',
        type: 'Triệu chứng',
        writingGuide: '发 (Bát) + 烧 (Hỏa 火 + Nghiêu 尧)',
        exampleSentence: '他发烧三十九度。',
        examplePinyin: 'Tā fāshāo sānshíjiǔ dù.',
        exampleVn: 'Anh ấy sốt 39 độ.'
      },
      {
        id: 603,
        hanzi: '感冒',
        pinyin: 'gǎnmào',
        hanViet: 'Cảm mạo',
        meaning: 'Bị cảm cúm',
        type: 'Bệnh',
        writingGuide: '感 (Hàm + Tâm 心) + 冒 (Nhật + Mục)',
        exampleSentence: '天气冷了，容易感冒。',
        examplePinyin: 'Tiānqì lěng le, róngyì gǎnmào.',
        exampleVn: 'Trời lạnh rồi, rất dễ bị cảm cúm.'
      },
      {
        id: 604,
        hanzi: '吃药',
        pinyin: 'chī yào',
        hanViet: 'Ngật dược',
        meaning: 'Uống thuốc (Người Trung Quốc dùng động từ "Ăn thuốc")',
        type: 'Điều trị',
        writingGuide: '吃 (Khẩu + Khất) + 药 (Thảo 艹 + Lạc 乐)',
        exampleSentence: '一天吃三次药。',
        examplePinyin: 'Yì tiān chī sān cì yào.',
        exampleVn: 'Một ngày uống thuốc 3 lần.'
      }
    ],
    sampleSentences: [
      { id: 61, hanzi: '你哪里不舒服？', pinyin: 'Nǐ nǎlǐ bù shūfu?', meaning: 'Bạn cảm thấy khó chịu ở chỗ nào?', difficulty: 'Cơ bản', tip: 'Câu hỏi kinh điển của bác sĩ khi bệnh nhân vào khám.' },
      { id: 62, hanzi: '让我给你量一下体温。', pinyin: 'Ràng wǒ gěi nǐ liáng yíxià tǐwēn.', meaning: 'Để tôi đo nhiệt độ cơ thể cho bạn một lát.', difficulty: 'Trung cấp', tip: 'Cấu trúc câu kiêm ngữ 让 kết hợp động lượng từ 一下.' },
      { id: 63, hanzi: '你感冒了，回去多喝水，按时吃药。', pinyin: 'Nǐ gǎnmào le, huíqù duō hē shuǐ, ànshí chī yào.', meaning: 'Bạn bị cảm rồi, về nhà uống nhiều nước, uống thuốc đúng giờ nhé.', difficulty: 'Nâng cao', tip: '按时 (ànshí - đúng giờ/đúng cữ).' }
    ]
  }
];

export const playlistSections = [
  {
    id: 'section-1',
    title: 'Hán Ngữ 1 (Tập 1)',
    subtitle: 'Nền tảng Ngữ Âm & Giao Tiếp Cơ Bản',
    badge: 'Section 1 (5 Bài)',
    desc: 'Hệ thống ngữ âm Pinyin toàn diện (Thanh mẫu, Vận mẫu, Biến điệu Thanh 3), 8 Nét bút thuận chữ Hán và các bài giao tiếp mở đầu.',
    lessonIds: [1, 2, 3, 4, 5]
  },
  {
    id: 'section-2',
    title: 'Hán Ngữ 2 (Tập 2)',
    subtitle: 'Ngữ Pháp Nâng Cao & Giao Tiếp Chuyên Đề',
    badge: 'Section 2 (Mới)',
    desc: 'Câu Kiêm Ngữ (让/叫/请), Cụm động lượng từ 一下, Ngữ pháp chuyên đề y tế, đời sống xã hội và mở rộng từ vựng.',
    lessonIds: [13]
  }
];
