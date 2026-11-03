import { ThematicTopic, ThematicSentence, PlaylistSection } from '../types/thematic';

export const thematicTopics: ThematicTopic[] = [
  // ==========================================
  // 1. SỐ ĐẾM & LƯỢNG TỪ (Numbers & Measure Words)
  // ==========================================
  {
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
      { id: 110, hanzi: '他买了两瓶水和三碗热面条。', pinyin: 'Tā mǎi le liǎng píng shuǐ hé sān wǎn rè miàntiáo.', meaning: 'Anh ấy đã mua hai chai nước và ba bát mì sợi nóng.', difficulty: 'Nâng cao', tip: '瓶 (píng - chai), 碗 (wǎn - bát).' }
    ]
  },

  // ==========================================
  // 2. THỨ, THÁNG, NĂM & BUỔI TRONG NGÀY
  // ==========================================
  {
    id: 'time_calendar',
    title: 'Thứ trong tuần (Thứ 2 - CN), Tháng, Năm & Buổi',
    chineseTitle: '时间与日期',
    pinyinTitle: 'Shíjiān yǔ rìqī',
    iconName: 'Clock',
    badge: 'Chủ đề 2 • Ứng dụng cao',
    color: 'from-blue-500 to-indigo-600',
    desc: 'Nắm vững quy tắc nói Thứ trong tuần (Thứ 2 đến Chủ Nhật), 12 tháng, ngày (日/号), năm (年), giờ phút và các buổi sáng/trưa/chiều/tối.',
    grammarPoints: [
      {
        id: 1,
        title: 'Công thức nói Thứ trong tuần: 星期 (xīngqī) + Số thứ tự',
        formula: 'Thứ 2 đến Thứ 7: 星期 + (1 đến 6) | Chủ Nhật: 星期天 hoặc 星期日',
        explanation: 'Khác tiếng Việt (Thứ Hai là ngày đầu tuần), tiếng Trung dùng số 1: Thứ 2 = 星期一, Thứ 3 = 星期二, ... Thứ 7 = 星期六. Riêng Chủ Nhật là 星期天 (khẩu ngữ) hoặc 星期日 (văn viết).',
        usageNotes: [
          'Thứ Hai: 星期一 (xīngqīyī) — Số 1.',
          'Thứ Bảy: 星期六 (xīngqīliù) — Số 6.',
          'Chủ Nhật: 星期天 (xīngqītiān) hoặc 星期日 (xīngqīrì).'
        ],
        examples: [
          { hanzi: '今天星期几？今天星期三。', pinyin: 'Jīntiān xīngqī jǐ? Jīntiān xīngqīsān.', meaning: 'Hôm nay thứ mấy? Hôm nay thứ Tư.' }
        ]
      },
      {
        id: 2,
        title: 'Quy tắc nói thời gian: Lớn trước, Nhỏ sau',
        formula: 'Năm (年) → Tháng (月) → Ngày (日/号) → Buổi (早上/下午/晚上) → Giờ (点) → Phút (分)',
        explanation: 'Tiếng Trung luôn sắp xếp theo trật tự từ đơn vị thời gian lớn nhất đến nhỏ nhất.',
        usageNotes: [
          'Ngày 25 tháng 8: 八月二十五号 (bā yuè èrshíwǔ hào).',
          '3 giờ chiều: 下午三点 (xiàwǔ sān diǎn).'
        ],
        examples: [
          { hanzi: '明天下午三点我在学校。', pinyin: 'Míngtiān xiàwǔ sān diǎn wǒ zài xuéxiào.', meaning: '3 giờ chiều mai tôi ở trường.' }
        ]
      }
    ],
    words: [
      { id: 2001, hanzi: '星期一', pinyin: 'xīngqīyī', hanViet: 'Tinh kỳ nhất', meaning: 'Thứ Hai', type: 'Thời gian', writingGuide: 'Tinh 星期 + Nhất 一', exampleSentence: '星期一我们要开会。', examplePinyin: 'Xīngqīyī wǒmen yào kāihuì.', exampleVn: 'Thứ Hai chúng tôi phải họp.' },
      { id: 2002, hanzi: '星期二', pinyin: 'xīngqī\'èr', hanViet: 'Tinh kỳ nhị', meaning: 'Thứ Ba', type: 'Thời gian', writingGuide: 'Tinh 星期 + Nhị 二', exampleSentence: '星期二下午有中文课。', examplePinyin: 'Xīngqī\'èr xiàwǔ yǒu Zhōngwén kè.', exampleVn: 'Chiều thứ Ba có tiết tiếng Trung.' },
      { id: 2003, hanzi: '星期三', pinyin: 'xīngqīsān', hanViet: 'Tinh kỳ tam', meaning: 'Thứ Tư', type: 'Thời gian', writingGuide: 'Tinh 星期 + Tam 三', exampleSentence: '今天星期三，我很忙。', examplePinyin: 'Jīntiān xīngqīsān, wǒ hěn máng.', exampleVn: 'Hôm nay thứ Tư, tôi rất bận.' },
      { id: 2004, hanzi: '星期四', pinyin: 'xīngqīsì', hanViet: 'Tinh kỳ tứ', meaning: 'Thứ Năm', type: 'Thời gian', writingGuide: 'Tinh 星期 + Tứ 四', exampleSentence: '星期四去医院看病。', examplePinyin: 'Xīngqīsì qù yīyuàn kànbìng.', exampleVn: 'Thứ Năm đi bệnh viện khám bệnh.' },
      { id: 2005, hanzi: '星期五', pinyin: 'xīngqīwǔ', hanViet: 'Tinh kỳ ngũ', meaning: 'Thứ Sáu', type: 'Thời gian', writingGuide: 'Tinh 星期 + Ngũ 五', exampleSentence: '星期五晚上我们看电影。', examplePinyin: 'Xīngqīwǔ wǎnshang wǒmen kàn diànyǐng.', exampleVn: 'Tối thứ Sáu chúng tôi xem phim.' },
      { id: 2006, hanzi: '星期六', pinyin: 'xīngqīliù', hanViet: 'Tinh kỳ lục', meaning: 'Thứ Bảy', type: 'Thời gian', writingGuide: 'Tinh 星期 + Lục 六', exampleSentence: '星期六我去超市买东西。', examplePinyin: 'Xīngqīliù wǒ qù chāoshì mǎi dōngxi.', exampleVn: 'Thứ Bảy tôi đi siêu thị mua sắm.' },
      { id: 2007, hanzi: '星期天', pinyin: 'xīngqītiān', hanViet: 'Tinh kỳ thiên', meaning: 'Chủ Nhật (khẩu ngữ)', type: 'Thời gian', writingGuide: 'Tinh 星期 + Thiên 天', exampleSentence: '星期天在家休息。', examplePinyin: 'Xīngqītiān zài jiā xiūxi.', exampleVn: 'Chủ Nhật nghỉ ngơi ở nhà.' },
      { id: 2008, hanzi: '一月', pinyin: 'yī yuè', hanViet: 'Nhất nguyệt', meaning: 'Tháng 1', type: 'Thời gian', writingGuide: 'Nhất 一 + Nguyệt 月', exampleSentence: '一月是一年的开始。', examplePinyin: 'Yī yuè shì yì nián de kāishǐ.', exampleVn: 'Tháng một là khởi đầu của một năm.' },
      { id: 2009, hanzi: '十二月', pinyin: 'shí\'èr yuè', hanViet: 'Thập nhị nguyệt', meaning: 'Tháng 12', type: 'Thời gian', writingGuide: 'Thập nhị 十二 + Nguyệt 月', exampleSentence: '十二月天气很冷。', examplePinyin: 'Shí\'èr yuè tiānqì hěn lěng.', exampleVn: 'Tháng mười hai thời tiết rất lạnh.' },
      { id: 2010, hanzi: '今天', pinyin: 'jīntiān', hanViet: 'Kim thiên', meaning: 'Hôm nay', type: 'Thời gian', writingGuide: 'Kim 今 + Thiên 天', exampleSentence: '今天天气非常好。', examplePinyin: 'Jīntiān tiānqì fēicháng hǎo.', exampleVn: 'Thời tiết hôm nay cực kỳ đẹp.' },
      { id: 2011, hanzi: '明天', pinyin: 'míngtiān', hanViet: 'Minh thiên', meaning: 'Ngày mai', type: 'Thời gian', writingGuide: 'Nhật 日 + Nguyệt 月 = Minh 明 + Thiên 天', exampleSentence: '明天你想去哪里？', examplePinyin: 'Míngtiān nǐ xiǎng qù nǎlǐ?', exampleVn: 'Ngày mai bạn muốn đi đâu?' },
      { id: 2012, hanzi: '昨天', pinyin: 'zuótiān', hanViet: 'Tạc thiên', meaning: 'Hôm qua', type: 'Thời gian', writingGuide: 'Nhật 日 bên trái + Tạc 乍 bên phải', exampleSentence: '昨天我买了一本书。', examplePinyin: 'Zuótiān wǒ mǎi le yì běn shū.', exampleVn: 'Hôm qua tôi đã mua một cuốn sách.' },
      { id: 2013, hanzi: '现在', pinyin: 'xiànzài', hanViet: 'Hiện tại', meaning: 'Bây giờ / Hiện nay', type: 'Thời gian', writingGuide: 'Vương 王 + Kiến 见 = Hiện 现 + Tại 在', exampleSentence: '现在几点了？', examplePinyin: 'Xiànzài jǐ diǎn le?', exampleVn: 'Bây giờ mấy giờ rồi?' },
      { id: 2014, hanzi: '早上', pinyin: 'zǎoshang', hanViet: 'Tảo thượng', meaning: 'Buổi sáng sớm', type: 'Buổi trong ngày', writingGuide: 'Nhật 日 trên Thập 十 = Tảo 早 + Thượng 上', exampleSentence: '早上七点起床。', examplePinyin: 'Zǎoshang qī diǎn qǐchuáng.', exampleVn: 'Bảy giờ sáng thức dậy.' },
      { id: 2015, hanzi: '下午', pinyin: 'xiàwǔ', hanViet: 'Hạ ngọ', meaning: 'Buổi chiều', type: 'Buổi trong ngày', writingGuide: 'Hạ 下 + Ngọ 午', exampleSentence: '下午两点我们去图书馆。', examplePinyin: 'Xiàwǔ liǎng diǎn wǒmen qù túshūguǎn.', exampleVn: 'Hai giờ chiều chúng tôi đi thư viện.' },
      { id: 2016, hanzi: '晚上', pinyin: 'wǎnshang', hanViet: 'Vãn thượng', meaning: 'Buổi tối', type: 'Buổi trong ngày', writingGuide: 'Nhật 日 + Miễn 免 = Vãn 晚 + Thượng 上', exampleSentence: '晚上九点他在看书。', examplePinyin: 'Wǎnshang jiǔ diǎn tā zài kànshū.', exampleVn: 'Chín giờ tối anh ấy đang đọc sách.' }
    ],
    sampleSentences: [
      { id: 201, hanzi: '今天是星期三。', pinyin: 'Jīntiān shì xīngqīsān.', meaning: 'Hôm nay là thứ Tư.', difficulty: 'Cơ bản', tip: 'Thứ Tư tiếng Trung là 星期三 (số 3).' },
      { id: 202, hanzi: '明天下午两点我们去图书馆。', pinyin: 'Míngtiān xiàwǔ liǎng diǎn wǒmen qù túshūguǎn.', meaning: 'Hai giờ chiều mai chúng tôi đi thư viện.', difficulty: 'Trung cấp', tip: 'Thứ tự thời gian: Ngày mai (明天) -> Buổi chiều (下午) -> 2 giờ (两点).' },
      { id: 203, hanzi: '现在几点？现在是早上八点半。', pinyin: 'Xiànzài jǐ diǎn? Xiànzài shì zǎoshang bā diǎn bàn.', meaning: 'Bây giờ mấy giờ? Bây giờ là tám giờ rưỡi sáng.', difficulty: 'Cơ bản', tip: '半 (bàn) nghĩa là một nửa (30 phút / rưỡi).' },
      { id: 204, hanzi: '昨天是星期天，我在家休息。', pinyin: 'Zuótiān shì xīngqītiān, wǒ zài jiā xiūxi.', meaning: 'Hôm qua là Chủ Nhật, tôi nghỉ ngơi ở nhà.', difficulty: 'Cơ bản', tip: '在 + Nơi chốn + Hành động (Ở đâu làm gì).' },
      { id: 205, hanzi: '我的生日是十月五号。', pinyin: 'Wǒ de shēngrì shì shí yuè wǔ hào.', meaning: 'Sinh nhật của tôi là ngày 5 tháng 10.', difficulty: 'Cơ bản', tip: 'Tháng nói trước, ngày nói sau.' },
      { id: 206, hanzi: '今年是二零二六年。', pinyin: 'Jīnnián shì èr líng èr liù nián.', meaning: 'Năm nay là năm 2026.', difficulty: 'Cơ bản', tip: 'Năm đọc từng số riêng rẽ: 二 零 二 六 年.' },
      { id: 207, hanzi: '星期五晚上你忙不忙？', pinyin: 'Xīngqīwǔ wǎnshang nǐ máng bù máng?', meaning: 'Tối thứ Sáu bạn có bận không?', difficulty: 'Trung cấp', tip: 'Câu hỏi chính phản: 忙不忙 (bận hay không bận).' },
      { id: 208, hanzi: '明年三月我打算去中国旅游。', pinyin: 'Míngnián sān yuè wǒ dǎsuan qù Zhōngguó lǚyóu.', meaning: 'Tháng 3 năm sau tôi dự định đi Trung Quốc du lịch.', difficulty: 'Nâng cao', tip: '打算 (dǎsuan - dự định).' },
      { id: 209, hanzi: '每天早上七点他都去跑步。', pinyin: 'Měitiān zǎoshang qī diǎn tā dōu qù pǎobù.', meaning: '7 giờ mỗi sáng anh ấy đều đi chạy bộ.', difficulty: 'Trung cấp', tip: 'Đều làm gì: 都 (dōu).' },
      { id: 210, hanzi: '今天星期几？今天星期五。', pinyin: 'Jīntiān xīngqī jǐ? Jīntiān xīngqīwǔ.', meaning: 'Hôm nay là thứ mấy? Hôm nay là thứ Sáu.', difficulty: 'Cơ bản', tip: 'Hỏi thứ dùng 星期几 (xīngqī jǐ).' }
    ]
  },

  // ==========================================
  // 3. ĐỘNG VẬT & THÚ CƯNG
  // ==========================================
  {
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
  },

  // ==========================================
  // 4. NGHỀ NGHIỆP & CHỨC VỤ XÃ HỘI
  // ==========================================
  {
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
      { id: 410, hanzi: '我想在一家大型科技公司当工程师。', pinyin: 'Wǒ xiǎng zài yì jiā dàxíng kējì gōngsī dāng gōngchéngshī.', meaning: 'Tôi muốn làm một kỹ sư trong một công ty công nghệ lớn.', difficulty: 'Nâng cao', tip: '一家公司 (Lượng từ 家 cho công ty/doanh nghiệp).' }
    ]
  },

  // ==========================================
  // 5. GIA ĐÌNH, HỌ HÀNG & QUAN HỆ
  // ==========================================
  {
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
  },

  // ==========================================
  // 6. MÀU SẮC & TÍNH TỪ MIÊU TẢ
  // ==========================================
  {
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
      { id: 610, hanzi: '这里的衣服既便宜又好看，质量很棒。', pinyin: 'Zhèlǐ de yīfu jì piányi yòu hǎokàn, zhìliàng hěn bàng.', meaning: 'Quần áo ở đây vừa rẻ lại vừa đẹp, chất lượng rất đỉnh.', difficulty: 'Nâng cao', tip: '既...又...: Vừa... vừa...' }
    ]
  },

  // ==========================================
  // 7. ẨM THỰC, TRÁI CÂY & ĐỒ UỐNG
  // ==========================================
  {
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
  },

  // ==========================================
  // 8. ĐỊA ĐIỂM, GIAO THÔNG & HỎI ĐƯỜNG
  // ==========================================
  {
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
      { id: 810, hanzi: '我们明天早上在学校的大门口见面吧。', pinyin: 'Wǒmen míngtiān zǎoshang zài xuéxiào de dàménkǒu jiànmiàn ba.', meaning: 'Sáng mai chúng ta gặp nhau ở cổng lớn của trường học nhé.', difficulty: 'Trung cấp', tip: '在...见面 (gặp nhau ở đâu).' }
    ]
  }
];

// Master pool of typing exercises across all topics for random challenge
export const allTypingSentences: ThematicSentence[] = thematicTopics.flatMap(t => t.sampleSentences);

// ==========================================
// DYNAMIC SENTENCE GENERATOR (TẠO CÂU KẾT HỢP NGẪU NHIÊN)
// ==========================================
const subjects = [
  { hanzi: '我', pinyin: 'Wǒ', vn: 'Tôi' },
  { hanzi: '你', pinyin: 'Nǐ', vn: 'Bạn' },
  { hanzi: '他', pinyin: 'Tā', vn: 'Anh ấy' },
  { hanzi: '她', pinyin: 'Tā', vn: 'Cô ấy' },
  { hanzi: '我们', pinyin: 'Wǒmen', vn: 'Chúng tôi' },
  { hanzi: '我朋友', pinyin: 'Wǒ péngyou', vn: 'Bạn tôi' },
  { hanzi: '我哥哥', pinyin: 'Wǒ gēge', vn: 'Anh trai tôi' },
  { hanzi: '王老师', pinyin: 'Wáng lǎoshī', vn: 'Thầy Vương' }
];

const times = [
  { hanzi: '今天', pinyin: 'jīntiān', vn: 'hôm nay' },
  { hanzi: '明天', pinyin: 'míngtiān', vn: 'ngày mai' },
  { hanzi: '昨天', pinyin: 'zuótiān', vn: 'hôm qua' },
  { hanzi: '星期一', pinyin: 'xīngqīyī', vn: 'thứ Hai' },
  { hanzi: '星期三', pinyin: 'xīngqīsān', vn: 'thứ Tư' },
  { hanzi: '星期六', pinyin: 'xīngqīliù', vn: 'thứ Bảy' },
  { hanzi: '星期天', pinyin: 'xīngqītiān', vn: 'Chủ Nhật' },
  { hanzi: '早上八点', pinyin: 'zǎoshang bā diǎn', vn: '8 giờ sáng' },
  { hanzi: '下午两点', pinyin: 'xiàwǔ liǎng diǎn', vn: '2 giờ chiều' },
  { hanzi: '晚上七点', pinyin: 'wǎnshang qī diǎn', vn: '7 giờ tối' }
];

const locations = [
  { hanzi: '在学校', pinyin: 'zài xuéxiào', vn: 'ở trường' },
  { hanzi: '在家', pinyin: 'zài jiā', vn: 'ở nhà' },
  { hanzi: '在图书馆', pinyin: 'zài túshūguǎn', vn: 'ở thư viện' },
  { hanzi: '在医院', pinyin: 'zài yīyuàn', vn: 'ở bệnh viện' },
  { hanzi: '在超市', pinyin: 'zài chāoshì', vn: 'ở siêu thị' },
  { hanzi: '在饭馆', pinyin: 'zài fànguǎn', vn: 'ở quán ăn' },
  { hanzi: '在中国银行', pinyin: 'zài Zhōngguó Yínháng', vn: 'ở Ngân hàng Trung Quốc' },
  { hanzi: '去北京', pinyin: 'qù Běijīng', vn: 'đi Bắc Kinh' }
];

const actions = [
  { hanzi: '学中文。', pinyin: 'xué Zhōngwén.', vn: 'học tiếng Trung.' },
  { hanzi: '买三个苹果。', pinyin: 'mǎi sān gè píngguǒ.', vn: 'mua ba quả táo.' },
  { hanzi: '看医生。', pinyin: 'kàn yīshēng.', vn: 'khám bác sĩ.' },
  { hanzi: '吃一碗牛肉面。', pinyin: 'chī yì wǎn niúròumiàn.', vn: 'ăn một bát mì bò.' },
  { hanzi: '喝一杯热咖啡。', pinyin: 'hē yì bēi rè kāfēi.', vn: 'uống một ly cà phê nóng.' },
  { hanzi: '买两本书。', pinyin: 'mǎi liǎng běn shū.', vn: 'mua hai cuốn sách.' },
  { hanzi: '看大熊猫。', pinyin: 'kàn dàxióngmāo.', vn: 'xem gấu trúc.' },
  { hanzi: '见好朋友。', pinyin: 'jiàn hǎo péngyou.', vn: 'gặp bạn thân.' },
  { hanzi: '换一点儿钱。', pinyin: 'huàn yìdiǎnr qián.', vn: 'đổi một ít tiền.' },
  { hanzi: '吃饺子喝茶。', pinyin: 'chī jiǎozi hē chá.', vn: 'ăn sủi cảo uống trà.' }
];

/**
 * Sinh câu ngẫu nhiên phong phú kết hợp Chủ ngữ + Thời gian + Địa điểm + Hành động
 */
export function generateRandomSentence(): ThematicSentence {
  const s = subjects[Math.floor(Math.random() * subjects.length)];
  const t = times[Math.floor(Math.random() * times.length)];
  const l = locations[Math.floor(Math.random() * locations.length)];
  const a = actions[Math.floor(Math.random() * actions.length)];

  const hanzi = `${s.hanzi}${t.hanzi}${l.hanzi}${a.hanzi}`;
  const pinyin = `${s.pinyin} ${t.pinyin} ${l.pinyin} ${a.pinyin}`;
  const meaning = `${s.vn} ${t.vn} ${l.vn} ${a.vn}`;

  return {
    id: Date.now() + Math.floor(Math.random() * 10000),
    hanzi,
    pinyin,
    meaning,
    difficulty: 'Trung cấp',
    tip: '🎲 Câu tạo ngẫu nhiên kết hợp [Chủ ngữ + Thời gian + Địa điểm + Hành động].'
  };
}

export const playlistSections: PlaylistSection[] = [
  {
    id: 'section-1',
    title: 'Hán Ngữ 1 (Tập 1)',
    subtitle: 'Nền tảng Ngữ Âm & Giao Tiếp Cơ Bản',
    badge: 'Section 1 (Bài 1 - 5)',
    desc: 'Hệ thống ngữ âm Pinyin toàn diện (Thanh mẫu, Vận mẫu, Biến điệu Thanh 3), 8 Nét bút thuận chữ Hán và các bài giao tiếp mở đầu.',
    lessonIds: [1, 2, 3, 4, 5]
  },
  {
    id: 'section-2',
    title: 'Hán Ngữ 2 (Tập 2)',
    subtitle: 'Ngữ Pháp Nâng Cao & Giao Tiếp Chuyên Đề',
    badge: 'Section 2 (Bài 13)',
    desc: 'Câu Kiêm Ngữ (让/叫/请), Cụm động lượng từ 一下, Ngữ pháp chuyên đề y tế khám bệnh, đời sống xã hội và mở rộng từ vựng.',
    lessonIds: [13]
  }
];
