import { ThematicTopic } from '../../../types/thematic';

export const calendarTopic: ThematicTopic = {
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
  };
