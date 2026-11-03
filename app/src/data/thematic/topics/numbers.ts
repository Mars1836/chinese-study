import { ThematicTopic } from '../../../types/thematic';

export const numbersTopic: ThematicTopic = {
    id: 'numbers',
    title: 'Số Đếm, Lượng Từ & Cách Đếm',
    chineseTitle: '数字与量词',
    pinyinTitle: 'Shùzì yǔ liàngcí',
    iconName: 'Hash',
    badge: 'Chủ đề 1 • Nền tảng cốt lõi',
    color: 'from-amber-500 to-yellow-600',
    desc: 'Học đếm từ 0 đến hàng vạn, phân biệt số 2 (二 vs 两), cách hỏi bao nhiêu (多少 vs 几) và trọn bộ các lượng từ thông dụng nhất trong tiếng Trung.',
    grammarPoints: [
      {
        id: 1,
        title: 'Phân biệt số 2: 二 (èr) và 两 (liǎng)',
        formula: 'Đếm số thứ tự / số phòng / số điện thoại: dùng 二 (èr) | Đếm số lượng + Lượng từ: dùng 两 (liǎng)',
        explanation: '二 (èr) dùng khi đọc số thuần túy (1, 2, 3), số thứ tự (第二), số tầng, số điện thoại. Khi chỉ số lượng đi kèm LƯỢNG TỪ (2 người, 2 con mèo, 2 cuốn sách) bắt buộc phải dùng 两 (liǎng).',
        usageNotes: [
          'Hai người: 两个人 (liǎng gè rén) — Tuyệt đối KHÔNG nói 二个人.',
          'Hai cuốn sách: 两本书 (liǎng běn shū).',
          'Số 22: 二十二 (èrshí\'èr).'
        ],
        examples: [
          { hanzi: '我有两个姐姐。', pinyin: 'Wǒ yǒu liǎng gè jiějie.', meaning: 'Tôi có hai người chị gái.' },
          { hanzi: '这是第二课。', pinyin: 'Zhè shì dì-èr kè.', meaning: 'Đây là bài học thứ hai.' }
        ]
      },
      {
        id: 2,
        title: 'Cấu trúc Lượng Từ chuẩn: Số từ + Lượng từ + Danh từ',
        formula: 'Số từ + Lượng từ (个, 只, 本, 张, 条, 件, 杯, 瓶, 碗, 双...) + Danh từ',
        explanation: 'Tiếng Trung bắt buộc phải có lượng từ đứng giữa số đếm và danh từ. Mỗi loại đồ vật có lượng từ riêng.',
        usageNotes: [
          '个 (gè): Lượng từ đa năng cho người, cái, quả (一个人, 一个苹果).',
          '只 (zhī): Lượng từ cho con vật (一只猫, 两只狗).',
          '本 (běn): Lượng từ cho sách vở, tạp chí (一本书).',
          '张 (zhāng): Lượng từ cho mặt phẳng như giấy, bàn, vé (一张纸, 一张桌子).',
          '件 (jiàn): Lượng từ cho áo quần, sự việc (一件衣服, 一件事).'
        ],
        examples: [
          { hanzi: '我想买三本书。', pinyin: 'Wǒ xiǎng mǎi sān běn shū.', meaning: 'Tôi muốn mua ba cuốn sách.' },
          { hanzi: '桌子上有一只猫。', pinyin: 'Zhuōzi shang yǒu yì zhī māo.', meaning: 'Trên bàn có một con mèo.' }
        ]
      }
    ],
    words: [
      { id: 1000, hanzi: '零', pinyin: 'líng', hanViet: 'Linh', meaning: 'Số 0', type: 'Số từ', writingGuide: 'Vũ 雨 ở trên + Lệnh 令 ở dưới', exampleSentence: '我的房间号是三零二。', examplePinyin: 'Wǒ de fángjiān hào shì sān líng èr.', exampleVn: 'Số phòng của tôi là 302.' },
      { id: 1001, hanzi: '一', pinyin: 'yī', hanViet: 'Nhất', meaning: 'Số 1', type: 'Số từ', writingGuide: 'Một nét ngang 一', exampleSentence: '一个人走在路上。', examplePinyin: 'Yí gè rén zǒu zài lù shang.', exampleVn: 'Một người đang đi trên đường.' },
      { id: 1002, hanzi: '二', pinyin: 'èr', hanViet: 'Nhị', meaning: 'Số 2 (đếm số, thứ tự)', type: 'Số từ', writingGuide: 'Hai nét ngang ngắn trên dài dưới', exampleSentence: '一加一等于二。', examplePinyin: 'Yī jiā yī děngyú èr.', exampleVn: 'Một cộng một bằng hai.' },
      { id: 1003, hanzi: '两', pinyin: 'liǎng', hanViet: 'Lưỡng', meaning: 'Số 2 (đi kèm lượng từ)', type: 'Số từ', writingGuide: 'Ngang 一 + Khung bao + 2 nét nhân 人 bên trong', exampleSentence: '来两杯冰水，谢谢。', examplePinyin: 'Lái liǎng bēi bīng shuǐ, xièxie.', exampleVn: 'Cho hai ly nước đá, cảm ơn.' },
      { id: 1004, hanzi: '三', pinyin: 'sān', hanViet: 'Tam', meaning: 'Số 3', type: 'Số từ', writingGuide: 'Ba nét ngang song song', exampleSentence: '我有三个好朋友。', examplePinyin: 'Wǒ yǒu sān gè hǎo péngyou.', exampleVn: 'Tôi có ba người bạn tốt.' },
      { id: 1005, hanzi: '四', pinyin: 'sì', hanViet: 'Tứ', meaning: 'Số 4', type: 'Số từ', writingGuide: 'Bộ Vi 囗 bao quanh nét phẩy và nét sổ cong', exampleSentence: '一年有四个季节。', examplePinyin: 'Yì nián yǒu sì gè jìjié.', exampleVn: 'Một năm có bốn mùa.' },
      { id: 1006, hanzi: '五', pinyin: 'wǔ', hanViet: 'Ngũ', meaning: 'Số 5', type: 'Số từ', writingGuide: 'Ngang trên, sổ thẳng, gập ngang dưới', exampleSentence: '我有五个苹果。', examplePinyin: 'Wǒ yǒu wǔ gè píngguǒ.', exampleVn: 'Tôi có năm quả táo.' },
      { id: 1007, hanzi: '六', pinyin: 'liù', hanViet: 'Lục', meaning: 'Số 6', type: 'Số từ', writingGuide: 'Chấm đầu, ngang, phẩy trái, chấm phải', exampleSentence: '今天星期六。', examplePinyin: 'Jīntiān xīngqīliù.', exampleVn: 'Hôm nay là thứ Bảy.' },
      { id: 1008, hanzi: '七', pinyin: 'qī', hanViet: 'Thất', meaning: 'Số 7', type: 'Số từ', writingGuide: 'Ngang cắt ngang nét sổ cong móc sang phải', exampleSentence: '一个星期有七天。', examplePinyin: 'Yí gè xīngqī yǒu qī tiān.', exampleVn: 'Một tuần có bảy ngày.' },
      { id: 1009, hanzi: '八', pinyin: 'bā', hanViet: 'Bát', meaning: 'Số 8', type: 'Số từ', writingGuide: 'Nét phẩy trái và nét mác phải tách rời', exampleSentence: '八点半开始上课。', examplePinyin: 'Bā diǎn bàn kāishǐ shàngkè.', exampleVn: 'Tám giờ rưỡi bắt đầu vào học.' },
      { id: 1010, hanzi: '九', pinyin: 'jiǔ', hanViet: 'Cửu', meaning: 'Số 9', type: 'Số từ', writingGuide: 'Phẩy trước, nét ngang gập cong móc sau', exampleSentence: '九月一号开学。', examplePinyin: 'Jiǔ yuè yī hào kāixué.', exampleVn: 'Ngày 1 tháng 9 khai giảng.' },
      { id: 1011, hanzi: '十', pinyin: 'shí', hanViet: 'Thập', meaning: 'Số 10', type: 'Số từ', writingGuide: 'Ngang trước sổ sau hình dấu thập', exampleSentence: '这本书十块钱。', examplePinyin: 'Zhè běn shū shí kuài qián.', exampleVn: 'Cuốn sách này 10 tệ.' },
      { id: 1012, hanzi: '百', pinyin: 'bǎi', hanViet: 'Bách', meaning: 'Trăm (100)', type: 'Số từ', writingGuide: 'Ngang 一 + Bạch 白', exampleSentence: '这本书一百块钱。', examplePinyin: 'Zhè běn shū yìbǎi kuài qián.', exampleVn: 'Cuốn sách này 100 tệ.' },
      { id: 1013, hanzi: '千', pinyin: 'qiān', hanViet: 'Thiên', meaning: 'Nghìn (1,000)', type: 'Số từ', writingGuide: 'Phẩy trên + Thập 十 dưới', exampleSentence: '这台电脑五千块。', examplePinyin: 'Zhè tái diànnǎo wǔqiān kuài.', exampleVn: 'Chiếc máy tính này 5000 tệ.' },
      { id: 1014, hanzi: '万', pinyin: 'wàn', hanViet: 'Vạn', meaning: 'Mười nghìn (10,000)', type: 'Số từ', writingGuide: 'Ngang + Nét ngang gập móc + Phẩy', exampleSentence: '他一个月赚一万块。', examplePinyin: 'Tā yí gè yuè zhuàn yíwàn kuài.', exampleVn: 'Một tháng anh ấy kiếm 1 vạn tệ (10,000 tệ).' },
      { id: 1015, hanzi: '个', pinyin: 'gè', hanViet: 'Cá', meaning: 'Cái, con, quả, người (lượng từ chung)', type: 'Lượng từ', writingGuide: 'Nhân 人 ở trên + Sổ đứng ở dưới', exampleSentence: '我买三个苹果。', examplePinyin: 'Wǒ mǎi sān gè píngguǒ.', exampleVn: 'Tôi mua ba quả táo.' },
      { id: 1016, hanzi: '只', pinyin: 'zhī', hanViet: 'Chích', meaning: 'Con (lượng từ động vật, chiếc giày/tay)', type: 'Lượng từ', writingGuide: 'Khẩu 口 ở trên + Bát 八 ở dưới', exampleSentence: '我家有一只小狗。', examplePinyin: 'Wǒ jiā yǒu yì zhī xiǎogǒu.', exampleVn: 'Nhà tôi có một con cún nhỏ.' },
      { id: 1017, hanzi: '本', pinyin: 'běn', hanViet: 'Bản', meaning: 'Quyển, cuốn (sách vở)', type: 'Lượng từ', writingGuide: 'Bộ Mộc 木 + Nét ngang chỉ gốc rễ', exampleSentence: '我想买两本书。', examplePinyin: 'Wǒ xiǎng mǎi liǎng běn shū.', exampleVn: 'Tôi muốn mua hai cuốn sách.' },
      { id: 1018, hanzi: '张', pinyin: 'zhāng', hanViet: 'Trương', meaning: 'Tờ, tấm, chiếc (mặt phẳng: vé, bàn, giấy)', type: 'Lượng từ', writingGuide: 'Cung 弓 bên trái + Trường 长 bên phải', exampleSentence: '请给我一张发票。', examplePinyin: 'Qǐng gěi wǒ yì zhāng fāpiào.', exampleVn: 'Xin cho tôi một tờ hóa đơn.' },
      { id: 1019, hanzi: '件', pinyin: 'jiàn', hanViet: 'Kiện', meaning: 'Chiếc, cái (áo, sự việc)', type: 'Lượng từ', writingGuide: 'Nhân đứng 亻 + Ngưu 牛 (con trâu)', exampleSentence: '这件衣服真好看。', examplePinyin: 'Zhè jiàn yīfu zhēn hǎokàn.', exampleVn: 'Chiếc áo này thật đẹp.' },
      { id: 1020, hanzi: '杯', pinyin: 'bēi', hanViet: 'Bôi', meaning: 'Cốc, ly (lượng từ đồ uống)', type: 'Lượng từ', writingGuide: 'Mộc 木 bên trái + Bất 不 bên phải', exampleSentence: '我想喝一杯水。', examplePinyin: 'Wǒ xiǎng hē yì bēi shuǐ.', exampleVn: 'Tôi muốn uống một ly nước.' }
    ],
    sampleSentences: [
      { id: 101, hanzi: '我买三个苹果。', pinyin: 'Wǒ mǎi sān gè píngguǒ.', meaning: 'Tôi mua ba quả táo.', difficulty: 'Cơ bản', tip: 'Cấu trúc lượng từ: Số 3 + 个 + 苹果.' },
      { id: 102, hanzi: '他有两只小猫。', pinyin: 'Tā yǒu liǎng zhī xiǎomāo.', meaning: 'Anh ấy có hai con mèo nhỏ.', difficulty: 'Cơ bản', tip: 'Hai con dùng 两只 (liǎng zhī), không dùng 二只.' },
      { id: 103, hanzi: '这本书二十五块钱。', pinyin: 'Zhè běn shū èrshíwǔ kuài qián.', meaning: 'Cuốn sách này hai mươi lăm tệ.', difficulty: 'Cơ bản', tip: '块 (kuài) là đơn vị tiền tệ khẩu ngữ (Đồng/Tệ).' },
      { id: 104, hanzi: '请给我一杯冰咖啡。', pinyin: 'Qǐng gěi wǒ yì bēi bīng kāfēi.', meaning: 'Xin cho tôi một ly cà phê đá.', difficulty: 'Cơ bản', tip: 'Lượng từ cho ly/cốc: 杯 (bēi).' },
      { id: 105, hanzi: '那个商店有一百个员工。', pinyin: 'Nà ge shāngdiàn yǒu yìbǎi gè yuángōng.', meaning: 'Cửa hàng đó có một trăm nhân viên.', difficulty: 'Trung cấp', tip: 'Một trăm là 一百 (yìbǎi).' },
      { id: 106, hanzi: '你有多少本中文书？', pinyin: 'Nǐ yǒu duōshao běn Zhōngwén shū?', meaning: 'Bạn có bao nhiêu cuốn sách tiếng Trung?', difficulty: 'Trung cấp', tip: '多少 (duōshao) dùng hỏi số lượng lớn hoặc không giới hạn.' },
      { id: 107, hanzi: '我们家一共有四口人。', pinyin: 'Wǒmen jiā yígòng yǒu sì kǒu rén.', meaning: 'Nhà chúng tôi tổng cộng có bốn người.', difficulty: 'Cơ bản', tip: 'Lượng từ cho nhân khẩu gia đình dùng 口 (kǒu).' },
      { id: 108, hanzi: '我想买两件好看的衣服。', pinyin: 'Wǒ xiǎng mǎi liǎng jiàn hǎokàn de yīfu.', meaning: 'Tôi muốn mua hai bộ quần áo đẹp.', difficulty: 'Trung cấp', tip: 'Lượng từ cho quần áo là 件 (jiàn).' },
      { id: 109, hanzi: '桌子上有五张白纸和三支笔。', pinyin: 'Zhuōzi shang yǒu wǔ zhāng bái zhǐ hé sān zhī bǐ.', meaning: 'Trên bàn có năm tờ giấy trắng và ba cây bút.', difficulty: 'Nâng cao', tip: '张 (zhāng) cho giấy, 支 (zhī) cho bút.' },
      { id: 110, hanzi: '他买了两瓶水和三碗热面条。', pinyin: 'Tā mǎi le liǎng píng shuǐ hé sān wǎn rè miàntiáo.', meaning: 'Anh ấy đã mua hai chai nước và ba bát mì sợi nóng.', difficulty: 'Nâng cao', tip: '瓶 (píng - chai), 碗 (wǎn - bát).' },
      { id: 111, hanzi: '你要几个？', pinyin: 'Nǐ yào jǐ gè?', meaning: 'Bạn muốn mấy cái?', difficulty: 'Cơ bản', tip: '几 (jǐ) dùng hỏi số lượng ít dưới 10.' },
      { id: 112, hanzi: '我有两块钱。', pinyin: 'Wǒ yǒu liǎng kuài qián.', meaning: 'Tôi có hai tệ.', difficulty: 'Cơ bản', tip: 'Tiền tệ: 两块钱.' },
      { id: 113, hanzi: '请给我一张纸。', pinyin: 'Qǐng gěi wǒ yì zhāng zhǐ.', meaning: 'Xin cho tôi một tờ giấy.', difficulty: 'Cơ bản', tip: 'Lượng từ tờ giấy: 一张纸.' },
      { id: 114, hanzi: '这里有五个人。', pinyin: 'Zhèlǐ yǒu wǔ gè rén.', meaning: 'Ở đây có năm người.', difficulty: 'Cơ bản', tip: '五个人: 5 người.' },
      { id: 115, hanzi: '我想喝一杯水。', pinyin: 'Wǒ xiǎng hē yì bēi shuǐ.', meaning: 'Tôi muốn uống một cốc nước.', difficulty: 'Cơ bản', tip: '一杯水: 1 cốc nước.' },
      { id: 116, hanzi: '他买了三本书。', pinyin: 'Tā mǎi le sān běn shū.', meaning: 'Anh ấy đã mua ba cuốn sách.', difficulty: 'Cơ bản', tip: '三本书: 3 cuốn sách.' }
    ]
  };
