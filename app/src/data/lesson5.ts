import { LessonData } from '../types/lesson';

export const lesson5Data: LessonData = {
  id: 5,
  title: 'Xin Hỏi Quý Danh Của Ngài?',
  pinyinTitle: 'Qǐngwèn nín guìxìng',
  hanziTitle: '请问您贵姓',
  videoDesc: 'Lộ trình Bài 5: Cách hỏi quý danh (您贵姓), hỏi tên (叫什么名字), hỏi tuổi (多大 vs 几岁), Câu hỏi Chính - Phản (V 不 V) và 15 từ mới giao tiếp.',
  videoUrl: 'https://www.youtube.com/watch?v=sLUg6LGlNek',
  initialsGroups: [
    {
      groupTitle: 'Nhóm từ khóa giao tiếp lễ phép Bài 5',
      groupDesc: 'Các từ ngữ kính cẩn dùng khi gặp gỡ, giao tiếp, hỏi thăm thông tin đối tác.',
      items: [
        { pinyin: 'qǐng', speakChar: '请', vnTip: 'Xin / Mời (Thanh 3)', aspirated: false, detail: 'Đặt ở đầu câu để thể hiện sự lịch thiệp, tôn trọng (VD: 请问 - Xin hỏi).' },
        { pinyin: 'wèn', speakChar: '问', vnTip: 'Hỏi (Thanh 4)', aspirated: false, detail: 'Gồm Bộ Môn 门 (cửa) bên ngoài, Bộ Khẩu 口 (miệng) bên trong: Đứng ngoài cửa mở miệng hỏi thăm.' },
        { pinyin: 'guì', speakChar: '贵', vnTip: 'Quý / Đắt (Thanh 4)', aspirated: false, detail: 'Quý báu, cao quý. Trong câu 请问您贵姓 nghĩa là "Xin hỏi quý danh / quý tính của ngài".' },
        { pinyin: 'xìng', speakChar: '姓', vnTip: 'Họ (Thanh 4)', aspirated: false, detail: 'Gồm Bộ Nữ 女 (phụ nữ) bên trái, chữ Sinh 生 (sinh nở) bên phải: Chế độ mẫu hệ con sinh ra mang họ mẹ.' },
        { pinyin: 'jiào', speakChar: '叫', vnTip: 'Kêu / Tên là (Thanh 4)', aspirated: false, detail: 'Gồm Bộ Khẩu 口 bên trái, số 4 四 bên phải: Dùng miệng gọi tên.' },
        { pinyin: 'shénme', speakChar: '什么', vnTip: 'Cái gì / Gì (Thanh nhẹ)', aspirated: false, detail: 'Đại từ nghi vấn dùng hỏi đồ vật hoặc thông tin (叫什么名字 - Tên là gì?).' },
        { pinyin: 'míngzi', speakChar: '名字', vnTip: 'Tên / Danh tự (Thanh nhẹ)', aspirated: false, detail: 'Tên gọi cá nhân. Chữ 字 đọc thanh nhẹ.' },
        { pinyin: 'nín', speakChar: '您', vnTip: 'Ngài / Thầy (Kính cẩn)', aspirated: false, detail: 'Chữ 你 (bạn) ở trên + Bộ Tâm 心 (trái tim) ở dưới: Đặt đối phương trong tim để tôn kính.' }
      ]
    }
  ],
  finalsGroups: [
    {
      groupTitle: 'Trục thời gian 3 năm & Hiện tại (Thời gian từ)',
      items: [
        { pinyin: 'qùnián', speakChar: '去年', vnTip: 'Năm ngoái (Quá khứ)', detail: 'Chữ 去 (Đi qua) + 年 (Năm): Năm đã trôi qua rồi.' },
        { pinyin: 'jīnnián', speakChar: '今年', vnTip: 'Năm nay (Hiện tại)', detail: 'Chữ 今 (Nay) + 年 (Năm): Năm nay hiện tại.' },
        { pinyin: 'míngnián', speakChar: '明年', vnTip: 'Năm sau (Tương lai)', detail: 'Chữ 明 (Sáng/Mai) + 年 (Năm): Năm kế tiếp tươi sáng.' },
        { pinyin: 'xiànzài', speakChar: '现在', vnTip: 'Hiện tại / Bây giờ', detail: 'Chữ 现 (Hiện) + 在 (Tại): Ngay lúc này đây.' }
      ]
    }
  ],
  practiceSyllables: [
    { pinyin: 'qǐngwèn', hanzi: '请问', meaning: 'Xin hỏi', note: 'Mở đầu câu hỏi lịch sự' },
    { pinyin: 'guìxìng', hanzi: '贵姓', meaning: 'Quý họ', note: 'Dùng hỏi họ người khác' },
    { pinyin: 'shénme', hanzi: '什么', meaning: 'Cái gì', note: 'Đại từ nghi vấn' },
    { pinyin: 'míngzi', hanzi: '名字', meaning: 'Tên', note: 'Từ chỉ danh xưng' },
    { pinyin: 'jīnnián', hanzi: '今年', meaning: 'Năm nay', note: 'Danh từ thời gian' },
    { pinyin: 'duō dà', hanzi: '多大', meaning: 'Bao nhiêu tuổi', note: 'Dùng cho người lớn (>10 tuổi)' },
    { pinyin: 'jǐ suì', hanzi: '几岁', meaning: 'Mấy tuổi', note: 'Dùng cho trẻ em (≤10 tuổi)' },
    { pinyin: 'xuéxí', hanzi: '学习', meaning: 'Học tập', note: 'Động từ học' },
    { pinyin: 'hànzì', hanzi: '汉字', meaning: 'Chữ Hán', note: 'Danh từ' },
    { pinyin: 'fāyīn', hanzi: '发音', meaning: 'Phát âm', note: 'Danh từ' },
    { pinyin: 'yínháng', hanzi: '银行', meaning: 'Ngân hàng', note: 'Nơi giao dịch tiền tệ' },
    { pinyin: 'xuéxiào', hanzi: '学校', meaning: 'Trường học', note: 'Nơi dạy học' }
  ],
  toneContours: [
    { toneNumber: 1, name: 'Thanh 1 (Ngang)', mark: 'ˉ (qīng)', pitchCode: '55', desc: 'Cao phẳng kéo dài.', exampleHanzi: '清', examplePinyin: 'qīng', meaning: 'Trong' },
    { toneNumber: 2, name: 'Thanh 2 (Đi lên)', mark: 'ˊ (nín)', pitchCode: '35', desc: 'Vuốt từ 3 lên 5.', exampleHanzi: '您', examplePinyin: 'nín', meaning: 'Ngài (Kính cẩn)' },
    { toneNumber: 3, name: 'Thanh 3 (Trầm uốn)', mark: 'ˇ (qǐng)', pitchCode: '214', desc: 'Hạ trầm xuống đáy rồi uốn lên.', exampleHanzi: '请', examplePinyin: 'qǐng', meaning: 'Xin / Mời' },
    { toneNumber: 4, name: 'Thanh 4 (Dứt khoát)', mark: 'ˋ (xìng)', pitchCode: '51', desc: 'Chém dứt khoát từ 5 xuống 1.', exampleHanzi: '姓', examplePinyin: 'xìng', meaning: 'Họ' }
  ],
  toneRules: [
    {
      ruleNum: 1,
      title: 'Câu hỏi Chính - Phản (正反问句: V 不 V / Adj 不 Adj)',
      formula: 'Chủ ngữ + [Động từ + 不 + Động từ] / [Tính từ + 不 + Tính từ] + Tân ngữ?',
      desc: 'Là dạng câu hỏi ghép giữa thể khẳng định và phủ định. ĐÃ CÓ "V 不 V" THÌ TUYỆT ĐỐI KHÔNG ĐƯỢC THÊM TRỢ TỪ "吗" Ở CUỐI CÂU NỮA!',
      examples: [
        { hanzi: '你学不学汉语？', writtenPinyin: 'Nǐ xué bu xué Hànyǔ?', readPinyin: 'Nǐ xué bu xué Hànyǔ?', meaning: 'Bạn có học tiếng Hán không?' },
        { hanzi: '你忙不忙？', writtenPinyin: 'Nǐ máng bu máng?', readPinyin: 'Nǐ máng bu máng?', meaning: 'Bạn có bận không?' },
        { hanzi: '他是不是老师？', writtenPinyin: 'Tā shì bu shì lǎoshī?', readPinyin: 'Tā shì bu shì lǎoshī?', meaning: 'Anh ấy có phải là giáo viên không?' },
        { hanzi: '去不去银行？', writtenPinyin: 'Qù bu qù yínháng?', readPinyin: 'Qù bu qù yínháng?', meaning: 'Có đi ngân hàng không?' }
      ]
    },
    {
      ruleNum: 2,
      title: 'Phân biệt cách hỏi tuổi: 多大 (duō dà) vs 几岁 (jǐ suì)',
      formula: 'Người lớn (>10 tuổi): 多大? • Trẻ em (≤10 tuổi): 几岁?',
      desc: 'Hỏi người cùng trang lứa hoặc lớn tuổi hơn dùng: 你今年多大？(Năm nay bạn bao nhiêu tuổi?). Hỏi trẻ con dưới 10 tuổi dùng: 你今年几岁？(Năm nay cháu mấy tuổi?).',
      examples: [
        { hanzi: '你今年多大？', writtenPinyin: 'Nǐ jīnnián duō dà?', readPinyin: 'Nǐ jīnnián duō dà?', meaning: 'Năm nay bạn bao nhiêu tuổi? (>10 tuổi)' },
        { hanzi: '你今年几岁？', writtenPinyin: 'Nǐ jīnnián jǐ suì?', readPinyin: 'Nǐ jīnnián jǐ suì?', meaning: 'Năm nay cháu mấy tuổi? (≤10 tuổi)' }
      ]
    }
  ],
  strokes: [
    { name: '1. Nét Sổ Hất', symbol: '𠄌', direction: 'Sổ thẳng rồi hất chéo lên phải', tip: 'Dùng trong chữ 农, 长.', svgPath: 'M 40 25 L 40 75 L 115 45' },
    { name: '2. Nét Ngang Gập Cong Móc', symbol: '⺄', direction: 'Ngang gập cong lượn móc', tip: 'Dùng trong chữ 九, 几.', svgPath: 'M 30 35 L 100 35 L 85 70 Q 85 85 110 85 L 125 70' }
  ],
  strokeRules: [
    { ruleNum: 1, title: 'Trên trước dưới sau & Trái trước phải sau', desc: 'Áp dụng cho chữ 您 (你 trên, 心 dưới).', examples: [{ hanzi: '您', pinyin: 'nín', hv: 'Nâm', meaning: 'Ngài / Thầy' }] }
  ],
  vocab: [
            {
                id: 1,
                hanzi: '请问',
                pinyin: 'qǐngwèn',
                hanViet: 'Thỉnh vấn',
                type: 'Động từ',
                meaning: 'Xin hỏi (Tách lẻ: 请 qǐng = mời/xin; 问 wèn = hỏi)',
                radicals: [
                    { r: '讠+青', name: 'Chữ Thỉnh (请)', desc: 'Lời nói (讠) xanh mát chân thành (青)' },
                    { r: '门+口', name: 'Chữ Vấn (问)', desc: 'Đến trước cửa (门) mở miệng (口) hỏi' }
                ],
                mnemonic: 'Mở đầu mọi câu hỏi lịch sự. Lưu ý biến điệu: 请你 (qǐng nǐ → đọc là qíng nǐ - mời bạn); 不问 (bù wèn → đọc là bú wèn - không hỏi).',
                exampleHanzi: '请问，您贵姓？',
                examplePinyin: 'Qǐngwèn, nín guìxìng?',
                exampleMeaning: 'Xin hỏi, quý tính của ngài là gì?'
            },
            {
                id: 2,
                hanzi: '您',
                pinyin: 'nín',
                hanViet: 'Nhẫm',
                type: 'Đại từ nhân xưng',
                meaning: 'Ngài, ông, bà, bác, thầy/cô (Cách gọi tôn kính của 你)',
                radicals: [
                    { r: '你', name: 'Chữ Nhĩ', desc: 'Bạn (ở phía trên)' },
                    { r: '心', name: 'Bộ Tâm', desc: 'Trái tim (ở phía dưới)' }
                ],
                mnemonic: 'Đặt người đối diện (你) lên trên trái tim mình (心) để thể hiện sự kính trọng sâu sắc (您 nín).',
                exampleHanzi: '您好！',
                examplePinyin: 'Nín hǎo!',
                exampleMeaning: 'Xin chào Ngài / Chào Thầy Cô!'
            },
            {
                id: 3,
                hanzi: '贵',
                pinyin: 'guì',
                hanViet: 'Quý',
                type: 'Tính từ',
                meaning: 'Quý, đắt, quý giá',
                radicals: [
                    { r: '中+一', name: 'Phần trên', desc: 'Chữ Trung + nét ngang' },
                    { r: '贝', name: 'Bộ Bối', desc: 'Vỏ sò / Tiền bạc châu báu' }
                ],
                mnemonic: 'Có bộ Bối (贝 - tiền bạc châu báu) ở dưới nên mang nghĩa Quý giá, Đắt đỏ (贵 guì).',
                exampleHanzi: '您贵姓？',
                examplePinyin: 'Nín guìxìng?',
                exampleMeaning: 'Quý danh (họ) của ngài là gì?'
            },
            {
                id: 4,
                hanzi: '姓',
                pinyin: 'xìng',
                hanViet: 'Tính',
                type: 'Danh từ / Động từ',
                meaning: 'Họ, mang họ (贵姓: Quý tính)',
                radicals: [
                    { r: '女', name: 'Bộ Nữ', desc: 'Người phụ nữ / Người mẹ' },
                    { r: '生', name: 'Bộ Sinh', desc: 'Sinh đẻ' }
                ],
                mnemonic: 'Thời cổ đại theo chế độ mẫu hệ, người mẹ (女) sinh ra con (生) thì con mang Họ (姓) của mẹ! Trả lời họ: 我姓 + Họ (CẤM nói 我贵姓!).',
                exampleHanzi: '我姓阮。',
                examplePinyin: 'Wǒ xìng Ruǎn.',
                exampleMeaning: 'Tôi họ Nguyễn.'
            },
            {
                id: 5,
                hanzi: '叫',
                pinyin: 'jiào',
                hanViet: 'Khiếu',
                type: 'Động từ',
                meaning: 'Gọi, tên là (Phủ định: 不叫 bú jiào)',
                radicals: [
                    { r: '口', name: 'Bộ Khẩu', desc: 'Cái miệng để gọi tên' },
                    { r: '丩', name: 'Nét sổ gập + sổ', desc: 'Âm vang vọng lại' }
                ],
                mnemonic: 'Dùng cái miệng (口) để gọi tên (叫 jiào). Phủ định: 不叫 đọc biến điệu thành bú jiào.',
                exampleHanzi: '我叫阮明安。',
                examplePinyin: 'Wǒ jiào Ruǎn Míng\'ān.',
                exampleMeaning: 'Tôi tên là Nguyễn Minh An.'
            },
            {
                id: 6,
                hanzi: '名字',
                pinyin: 'míngzi',
                hanViet: 'Danh tự',
                type: 'Danh từ',
                meaning: 'Tên, họ tên',
                radicals: [
                    { r: '夕+口', name: 'Chữ Danh (名)', desc: 'Chiều tối (夕) dùng miệng (口) xưng tên' },
                    { r: '宀+子', name: 'Chữ Tự (字)', desc: 'Đứa con (子) dưới mái nhà (宀)' }
                ],
                mnemonic: 'Buổi chiều tối (夕) không nhìn rõ mặt nhau nên phải dùng miệng (口) đọc Tên (名).',
                exampleHanzi: '你叫什么名字？',
                examplePinyin: 'Nǐ jiào shénme míngzi?',
                exampleMeaning: 'Bạn tên là gì?'
            },
            {
                id: 7,
                hanzi: '什么',
                pinyin: 'shénme',
                hanViet: 'Thập ma',
                type: 'Đại từ nghi vấn',
                meaning: 'Cái gì, gì (2 công thức: V + 什么 và 什么 + N)',
                radicals: [
                    { r: '亻+十', name: 'Chữ Thập (什)', desc: 'Bộ Nhân đứng + Bộ Thập' },
                    { r: '丿+厶', name: 'Chữ Ma (么)', desc: 'Nét phẩy + Bộ Tư' }
                ],
                mnemonic: 'Đứng sau động từ (学什么 học gì) hoặc đứng trước danh từ (什么名字 tên gì, 什么学校 trường gì).',
                exampleHanzi: '你学什么？',
                examplePinyin: 'Nǐ xué shénme?',
                exampleMeaning: 'Bạn học cái gì?'
            },
            {
                id: 8,
                hanzi: '年',
                pinyin: 'nián',
                hanViet: 'Niên',
                type: 'Danh từ',
                meaning: 'Năm (去年 Năm ngoái • 今年 Năm nay • 明年 Năm sau)',
                radicals: [
                    { r: '丿+干', name: 'Chữ Niên (年)', desc: 'Mùa màng thu hoạch mỗi năm một lần' }
                ],
                mnemonic: 'Ghép giống hệt chữ 天 (ngày): 去年 (qùnián - năm ngoái), 今年 (jīnnián - năm nay), 明年 (míngnián - năm sau).',
                exampleHanzi: '我明年去中国。',
                examplePinyin: 'Wǒ míngnián qù Zhōngguó.',
                exampleMeaning: 'Năm sau tôi đi Trung Quốc.'
            },
            {
                id: 9,
                hanzi: '今年',
                pinyin: 'jīnnián',
                hanViet: 'Kim niên',
                type: 'Danh từ thời gian',
                meaning: 'Năm nay',
                radicals: [
                    { r: '人+一+乛', name: 'Chữ Kim (今)', desc: 'Hiện tại, ngày nay' },
                    { r: '年', name: 'Chữ Niên (年)', desc: 'Năm' }
                ],
                mnemonic: 'Có thể đặt trước hoặc sau Chủ ngữ: 今年我二十岁 hoặc 我今年二十岁.',
                exampleHanzi: '你今年多大？',
                examplePinyin: 'Nǐ jīnnián duō dà?',
                exampleMeaning: 'Năm nay bạn bao nhiêu tuổi?'
            },
            {
                id: 10,
                hanzi: '多',
                pinyin: 'duō',
                hanViet: 'Đa',
                type: 'Tính từ / Phó từ',
                meaning: 'Nhiều, bao nhiêu (Khi đi với tính từ)',
                radicals: [
                    { r: '夕+夕', name: 'Hai Bộ Tịch (夕)', desc: 'Nhiều buổi tối chồng lên nhau' }
                ],
                mnemonic: 'Một buổi tối (夕) nối tiếp một buổi tối (夕) nữa là rất Nhiều (多 duō). Ghép với 大 thành 多大 (bao nhiêu tuổi).',
                exampleHanzi: '多大',
                examplePinyin: 'duō dà',
                exampleMeaning: 'Bao nhiêu tuổi'
            },
            {
                id: 11,
                hanzi: '多大',
                pinyin: 'duō dà',
                hanViet: 'Đa đại',
                type: 'Cụm nghi vấn',
                meaning: 'Bao nhiêu tuổi (Dùng cho người > 10 tuổi)',
                radicals: [
                    { r: '多', name: 'Chữ Đa', desc: 'Bao nhiêu' },
                    { r: '大', name: 'Bộ Đại', desc: 'To lớn' }
                ],
                mnemonic: 'Hỏi người từ 10 tuổi trở lên dùng 多大 (duō dà). Hỏi trẻ nhỏ ≤ 10 tuổi dùng 几岁 (jǐ suì).',
                exampleHanzi: '你姐姐今年多大？',
                examplePinyin: 'Nǐ jiějie jīnnián duō dà?',
                exampleMeaning: 'Chị gái bạn năm nay bao nhiêu tuổi?'
            },
            {
                id: 12,
                hanzi: '岁',
                pinyin: 'suì',
                hanViet: 'Tuế',
                type: 'Danh từ / Lượng từ',
                meaning: 'Tuổi (Đứng sau số đếm, không cần 是)',
                radicals: [
                    { r: '山', name: 'Bộ Sơn', desc: 'Ngọn núi ở trên' },
                    { r: '夕', name: 'Bộ Tịch', desc: 'Chiều tối ở dưới' }
                ],
                mnemonic: 'Năm tháng tuổi tác (岁 suì) chồng chất cao như núi (山) qua bao buổi chiều tà (夕).',
                exampleHanzi: '我今年二十岁。',
                examplePinyin: 'Wǒ jīnnián èrshí suì.',
                exampleMeaning: 'Năm nay tôi 20 tuổi.'
            },
            {
                id: 13,
                hanzi: '现在',
                pinyin: 'xiànzài',
                hanViet: 'Hiện tại',
                type: 'Danh từ thời gian',
                meaning: 'Bây giờ, hiện tại',
                radicals: [
                    { r: '王+见', name: 'Chữ Hiện (现)', desc: 'Nhìn thấy (见) viên ngọc (王) hiện ra' },
                    { r: '土', name: 'Chữ Tại (在)', desc: 'Có Bộ Thổ (土 - đất đai) bên trong' }
                ],
                mnemonic: 'Đặt trước hoặc ngay sau Chủ ngữ: 我现在回学校 hoặc 现在我回学校.',
                exampleHanzi: '我现在回学校。',
                examplePinyin: 'Wǒ xiànzài huí xuéxiào.',
                exampleMeaning: 'Bây giờ tôi về trường học.'
            },
            {
                id: 14,
                hanzi: '回',
                pinyin: 'huí',
                hanViet: 'Hồi',
                type: 'Động từ',
                meaning: 'Về, quay về (回国 về nước, 回学校 về trường)',
                radicals: [
                    { r: '囗', name: 'Bộ Vi', desc: 'Vòng vây lớn bên ngoài' },
                    { r: '口', name: 'Bộ Khẩu', desc: 'Ô nhỏ bên trong' }
                ],
                mnemonic: 'Hai vòng vuông đồng tâm biểu thị sự quay trở về (回 huí).',
                exampleHanzi: '你回不回学校？',
                examplePinyin: 'Nǐ huí bu huí xuéxiào?',
                exampleMeaning: 'Bạn có về trường không?'
            },
            {
                id: 15,
                hanzi: '学校 / 银行',
                pinyin: 'xuéxiào / yínháng',
                hanViet: 'Học hiệu / Ngân hàng',
                type: 'Danh từ địa điểm',
                meaning: 'Trường học (学校) & Ngân hàng (银行)',
                radicals: [
                    { r: '木+交', name: 'Chữ Hiệu (校)', desc: 'Cây cối (木) + Giao lưu (交) = Trường học' },
                    { r: '钅+艮 / 彳', name: 'Ngân hàng (银行)', desc: 'Kim loại bạc (钅) + Bước chân giao dịch (彳)' }
                ],
                mnemonic: 'Hai địa điểm mới cực kỳ thông dụng để ghép với 去 (đi) và 回 (về).',
                exampleHanzi: '你去不去银行？',
                examplePinyin: 'Nǐ qù bu qù yínháng?',
                exampleMeaning: 'Bạn có đi ngân hàng không?'
            }
        ],
  dialogues: [
            {
                title: 'Hội thoại 1: Làm quen trang trọng — Hỏi Họ (贵姓), Họ Tên (名字) & Quốc Tịch',
                lines: [
                    { speaker: 'A', hanzi: '请问，您贵姓？', pinyin: 'Qǐngwèn, nín guìxìng?', vn: 'Xin hỏi, quý tính (họ) của ngài là gì ạ?', note: 'Dùng 请问 + 您贵姓 cực kỳ lịch sự khi mới gặp.' },
                    { speaker: 'B', hanzi: '我姓阮。你叫什么名字？', pinyin: 'Wǒ xìng Ruǎn. Nǐ jiào shénme míngzi?', vn: 'Tôi họ Nguyễn. Bạn tên là gì?', note: 'Trả lời họ dùng 我姓..., tuyệt đối không nói 我贵姓!' },
                    { speaker: 'A', hanzi: '我姓张，叫张东。你是越南人吗？', pinyin: 'Wǒ xìng Zhāng, jiào Zhāng Dōng. Nǐ shì Yuènán rén ma?', vn: 'Tôi họ Trương, tên là Trương Đông. Bạn là người Việt Nam phải không?', note: 'Giới thiệu cả Họ (姓) lẫn Họ tên đầy đủ (叫).' },
                    { speaker: 'B', hanzi: '对，我是越南人。', pinyin: 'Duì, wǒ shì Yuènán rén.', vn: 'Đúng vậy, tôi là người Việt Nam.', note: 'Dùng 对 (duì - Đúng) đã học ở Bài 4 để xác nhận.' }
                ]
            },
            {
                title: 'Hội thoại 2: Hỏi Tuổi (多大 vs 几岁) & Gia Đình',
                lines: [
                    { speaker: 'A', hanzi: '陈丽，你今年多大？', pinyin: 'Chén Lì, nǐ jīnnián duō dà?', vn: 'Trần Lệ ơi, năm nay bạn bao nhiêu tuổi?', note: 'Hỏi tuổi thanh niên/người lớn (>10 tuổi) dùng 多大.' },
                    { speaker: 'B', hanzi: '我今年十九岁。你呢？', pinyin: 'Wǒ jīnnián shíjiǔ suì. Nǐ ne?', vn: 'Năm nay mình 19 tuổi. Thế còn bạn?', note: 'Nói tuổi không cần dùng động từ 是 (shì).' },
                    { speaker: 'A', hanzi: '我今年二十岁。你姐姐今年多大？', pinyin: 'Wǒ jīnnián èrshí suì. Nǐ jiějie jīnnián duō dà?', vn: 'Năm nay mình 20 tuổi. Chị gái bạn năm nay bao nhiêu tuổi?', note: '你姐姐 (nǐ jiějie) đọc biến điệu thành ní jiějie.' },
                    { speaker: 'B', hanzi: '她今年二十五岁。', pinyin: 'Tā jīnnián èrshíwǔ suì.', vn: 'Chị ấy năm nay 25 tuổi.', note: '25 = 2 (二) + 10 (十) + 5 (五) = 二十五.' }
                ]
            },
            {
                title: 'Hội thoại 3: Câu Hỏi Chính Phản (去不去 / 回不回) & Địa Điểm (银行 / 学校)',
                lines: [
                    { speaker: 'A', hanzi: '阮明安，你现在去哪儿？', pinyin: 'Ruǎn Míng\'ān, nǐ xiànzài qù nǎr?', vn: 'Nguyễn Minh An, bây giờ bạn đi đâu thế?', note: '现在 (xiànzài - bây giờ) đặt trước động từ 去.' },
                    { speaker: 'B', hanzi: '我现在去银行，你去不去？', pinyin: 'Wǒ xiànzài qù yínháng, nǐ qù bu qù?', vn: 'Bây giờ mình đi ngân hàng, bạn có đi không?', note: 'Câu hỏi chính phản 去不去 (có đi không) không dùng 吗.' },
                    { speaker: 'A', hanzi: '我不去，我现在回学校。', pinyin: 'Wǒ bú qù, wǒ xiànzài huí xuéxiào.', vn: 'Mình không đi, bây giờ mình về trường học.', note: '不去 đọc biến điệu thành bú qù; 回学校 = về trường.' },
                    { speaker: 'B', hanzi: '明天你去不去河内？', pinyin: 'Míngtiān nǐ qù bu qù Hénèi?', vn: 'Ngày mai bạn có đi Hà Nội không?', note: 'Mẫu V + 不 + V + Tân ngữ: 去不去河内？' },
                    { speaker: 'A', hanzi: '我去河内。', pinyin: 'Wǒ qù Hénèi.', vn: 'Mình có đi Hà Nội.', note: 'Trả lời khẳng định cho 去不去.' }
                ]
            }
        ],
  quiz: [
            {
                q: 'Câu 1: Khi người khác hỏi lịch sự "请问，您贵姓？" (Xin hỏi quý danh/họ của ngài?), cách trả lời nào dưới đây là ĐÚNG chuẩn?',
                speakWord: '我姓阮。',
                options: [
                    '我贵姓阮。 (Wǒ guìxìng Ruǎn.)',
                    '我姓阮。 (Wǒ xìng Ruǎn — Hoặc: 免贵姓阮 Miǎnguì xìng Ruǎn)',
                    '您姓阮。 (Nín xìng Ruǎn.)',
                    '我叫贵姓阮。'
                ],
                correct: 1,
                explanation: 'Chữ "贵 (guì - quý)" chỉ dùng để tôn칭 họ của đối phương (您贵姓). Khi tự xưng họ của mình chỉ được nói "我姓 + Họ" (ví dụ: 我姓阮), tuyệt đối không nói "我贵姓..."!'
            },
            {
                q: 'Câu 2: Tại sao đại từ nhân xưng "您" (nín - Ngài/Ông/Bà/Thầy/Cô) lại mang sắc thái tôn kính hơn chữ "你" (nǐ)?',
                speakWord: '您',
                options: [
                    'Vì có Bộ Kim (钅) chỉ vàng bạc',
                    'Vì cấu tạo chữ 您 gồm chữ Nhĩ (你 - bạn) đặt phía trên Bộ Tâm (心 - trái tim): đặt người đối diện lên trên trái tim mình',
                    'Vì có Bộ Miên (宀) chỉ mái nhà',
                    'Vì đọc ở Thanh 4'
                ],
                correct: 1,
                explanation: 'Chữ 您 (nín) được tạo bởi chữ 你 ở trên và Bộ Tâm (心 - trái tim) ở dưới, hàm ý luôn đặt người đối diện trong tim với sự kính trọng.'
            },
            {
                q: 'Câu 3: Mẹo ghi nhớ chữ Hán của họ "陈" (Chén - Họ Trần, trong tên nhân vật 陈丽 Trần Lệ) mà cô giáo hướng dẫn là gì?',
                speakWord: '陈丽',
                options: [
                    'Mặt trời (日) và Mặt trăng (月)',
                    '"Hào khí Đông A" của nhà Trần: Bên trái là Bộ Phụ (阝- nhìn như chữ A), bên phải là chữ Đông (东)',
                    'Cây cung (弓) dài (长)',
                    'Mái nhà (宀) có người phụ nữ (女)'
                ],
                correct: 1,
                explanation: 'Nhà Trần nổi tiếng với "Hào khí Đông A": Chữ 陈 (Trần) gồm Bộ Phụ (阝- gợi chữ A) bên trái và chữ Đông (东) bên phải!'
            },
            {
                q: 'Câu 4: Để hỏi "Bạn học trường gì?" và "Bạn học cái gì?", thứ tự của chữ "什么" (shénme) trong 2 câu này khác nhau thế nào?',
                speakWord: '什么学校',
                options: [
                    'Cả hai đều đặt 什么 ở cuối câu',
                    'Hỏi "học cái gì" dùng V + 什么 (你学什么？); còn hỏi "trường gì" dùng 什么 + N (什么学校)',
                    'Hỏi "trường gì" nói là 学校什么',
                    'Cả hai đều phải thêm 吗 ở cuối câu'
                ],
                correct: 1,
                explanation: 'Công thức 1: Động từ + 什么 (学什么 = học cái gì). Công thức 2: 什么 + Danh từ (什么学校 = trường gì, 什么名字 = tên gì, 什么银行 = ngân hàng gì).'
            },
            {
                q: 'Câu 5: Sự khác biệt giữa hai cách hỏi tuổi "你今年多大？" (duō dà) và "你今年几岁？" (jǐ suì) là gì?',
                speakWord: '你今年多大？',
                options: [
                    '多大 dùng cho trẻ sơ sinh, 几岁 dùng cho người già',
                    '多大 dùng cho người > 10 tuổi (thanh thiếu niên, bạn bè, người lớn); còn 几岁 dùng để hỏi các bé ≤ 10 tuổi',
                    '多大 chỉ dùng cho con trai, 几岁 chỉ dùng cho con gái',
                    'Không có sự khác biệt nào'
                ],
                correct: 1,
                explanation: 'Vì 几 (mấy) thường chỉ con số nhỏ từ 1–10 nên 几岁 dùng hỏi trẻ nhỏ ≤ 10 tuổi; còn từ trên 10 tuổi trở lên dùng 多大 (duō dà).'
            },
            {
                q: 'Câu 6: Câu trả lời "Năm nay tôi 25 tuổi" trong tiếng Trung viết như thế nào là chuẩn ngữ pháp nhất?',
                speakWord: '我今年二十五岁。',
                options: [
                    '我今年是二十五岁。 (Dùng 是)',
                    '我今年二十五岁。 (Wǒ jīnnián èrshíwǔ suì — Không cần dùng 是)',
                    '我今年二五岁。',
                    '今年二十五岁我。'
                ],
                correct: 1,
                explanation: 'Khi nói tuổi trong tiếng Trung, số tuổi + 岁 đóng vai trò vị ngữ trực tiếp (我今年二十五岁), không dùng động từ 是 (shì). Số 25 ghép là 二十五 (2 chục + 5).'
            },
            {
                q: 'Câu 7: Khi chuyển câu hỏi "你去河内吗？" (Bạn có đi Hà Nội không?) sang dạng Câu hỏi Chính Phản (正反问句), câu nào dưới đây là ĐÚNG?',
                speakWord: '你去不去河内？',
                options: [
                    '你去不去河内吗？ (Vừa dùng 去不去 vừa giữ 吗)',
                    '你去不去河内？ (Nǐ qù bu qù Hénèi? — Nhân đôi động từ V 不 V và BỎ 吗)',
                    '你不去去河内？',
                    '河内你去不去吗？'
                ],
                correct: 1,
                explanation: 'Công thức câu hỏi chính phản có tân ngữ: Chủ ngữ + V + 不 + V + Tân ngữ (你去不去河内？). Đã dùng V 不 V thì tuyệt đối không được thêm 吗 ở cuối câu!'
            },
            {
                q: 'Câu 8: Bộ ba từ chỉ năm "Năm ngoái • Năm nay • Năm sau" trong tiếng Trung lần lượt là gì?',
                speakWord: '今年',
                options: [
                    '昨天 • 今天 • 明天 (Đây là Hôm qua • Hôm nay • Ngày mai)',
                    '去年 (qùnián) • 今年 (jīnnián) • 明年 (míngnián)',
                    '上年 • 中年 • 下年',
                    '一年 • 二年 • 三年'
                ],
                correct: 1,
                explanation: 'Chỉ cần thay chữ 天 (ngày) trong 昨天/今天/明天 bằng chữ 年 (nián - năm) và đổi 昨 thành 去 (qù - đã qua): 去年 (năm ngoái) • 今年 (năm nay) • 明年 (năm sau).'
            },
            {
                q: 'Câu 9: Trong chữ "在" (zài - ở tại, trong từ 现在 xiànzài) và chữ "回" (huí - quay về), các bộ thủ bên trong là gì?',
                speakWord: '现在',
                options: [
                    'Bên trong chữ 在 là Bộ Thổ (土 - đất, nét ngang dưới dài hơn); chữ 回 ngoài là Bộ Vi (囗), trong là Bộ Khẩu (口)',
                    'Bên trong chữ 在 là Bộ Sĩ (士); chữ 回 gồm hai chữ Nhật',
                    'Cả hai chữ đều chứa Bộ Mộc (木)',
                    'Cả hai chữ đều chứa Bộ Kim (钅)'
                ],
                correct: 0,
                explanation: 'Chữ 在 (ở tại một mảnh đất) chứa Bộ Thổ (土 - nét ngang dưới dài hơn ngang trên). Chữ 回 (về) ngoài là vòng biên giới lớn Bộ Vi (囗), trong là Bộ Khẩu (口).'
            },
            {
                q: 'Câu 10: Cách đọc biến điệu đúng của các cụm từ "请你" (Mời bạn), "不问" (Không hỏi) và "不叫" (Không gọi là) là gì?',
                speakWord: '请你',
                options: [
                    'qǐng nǐ, bù wèn, bù jiào (Giữ nguyên không biến điệu)',
                    'qíng nǐ (2 thanh 3 → 2+3), bú wèn và bú jiào (不 đứng trước Thanh 4 đổi thành Thanh 2)',
                    'qìng nǐ, bǔ wèn, bǔ jiào',
                    'qīng nǐ, bū wèn, bū jiào'
                ],
                correct: 1,
                explanation: '请你 gồm hai Thanh 3 đi liền nhau nên đọc thành "qíng nǐ". Còn 问 (wèn) và 叫 (jiào) đều là Thanh 4 nên chữ 不 đứng trước bắt buộc đọc thành "bú wèn" và "bú jiào".'
            }
        ]
};
