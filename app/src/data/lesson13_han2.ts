import { LessonData } from '../types/lesson';

export const lesson13Data: LessonData = {
  id: 13,
  title: 'Để Tôi Kiểm Tra Cho Bạn',
  pinyinTitle: 'Ràng wǒ gěi nǐ jiǎnchá yíxià',
  hanziTitle: '让我给你检查一下',
  videoDesc: 'Giáo Trình Hán Ngữ 2 - Bài 13: Trọng tâm Câu Kiêm Ngữ (让, 叫, 请, 使), Cấu trúc hỏi thăm sức khỏe (怎么了), Động lượng từ 一下 và 18 từ vựng chuyên đề y tế khám bệnh.',
  videoUrl: 'https://www.youtube.com/watch?v=sLUg6LGlNek',
  initialsGroups: [
    {
      groupTitle: 'Ngữ âm & Trọng tâm phát âm Bài 13 (Hán Ngữ 2)',
      groupDesc: 'Ôn tập ngữ điệu câu hỏi thăm (怎么了), biến điệu của 一 (yī → yí trước xià Thanh 4) và thanh nhẹ (舒服 shūfu, 检查一下 jiǎnchá yíxià).',
      items: [
        { pinyin: 'ràng', speakChar: '让', vnTip: 'Đọc cong lưỡi r + àng (Thanh 4)', aspirated: false, detail: 'Âm cong lưỡi r, không rung r-r-r, chém dứt khoát thanh 4.' },
        { pinyin: 'téng', speakChar: '疼', vnTip: 'Đọc bật hơi t + éng (Thanh 2)', aspirated: true, detail: 'Âm t bật mạnh hơi ra ngoài, vuốt bổng từ 3 lên 5.' },
        { pinyin: 'chá', speakChar: '查', vnTip: 'Đọc uốn lưỡi ch + á (Thanh 2)', aspirated: true, detail: 'Uốn cong đầu lưỡi chạm ngạc cứng, bật mạnh hơi.' }
      ]
    }
  ],
  finalsGroups: [
    {
      groupTitle: 'Vận mẫu trọng tâm trong từ vựng Bài 13',
      items: [
        { pinyin: 'ang / eng', speakChar: '疼', vnTip: 'Vận mẫu mũi sau (téng, ràng)', detail: 'Mở rộng khoang họng, ngân vang sâu ở khoang mũi sau.' },
        { pinyin: 'ou', speakChar: '头', vnTip: 'Đọc như âu (tóu - cái đầu)', detail: 'Bắt đầu từ ô tròn môi thu nhanh về u.' },
        { pinyin: 'ia / ie', speakChar: '下', vnTip: 'Lướt nhanh i sang a (xià, jiǎn)', detail: 'Khóe miệng bẹp cười sang hai bên.' }
      ]
    }
  ],
  practiceSyllables: [
    { pinyin: 'tóu', hanzi: '头', meaning: 'Cái đầu', note: 'Thanh 2' },
    { pinyin: 'téng', hanzi: '疼', meaning: 'Đau nhức', note: 'Thanh 2 (Bật hơi)' },
    { pinyin: 'fāshāo', hanzi: '发烧', meaning: 'Phát sốt', note: 'Thanh 1 + Thanh 1' },
    { pinyin: 'gǎnmào', hanzi: '感冒', meaning: 'Cảm cúm', note: 'Thanh 3 + Thanh 4' },
    { pinyin: 'shūfu', hanzi: '舒服', meaning: 'Dễ chịu', note: 'Thanh nhẹ fu' },
    { pinyin: 'yīyuàn', hanzi: '医院', meaning: 'Bệnh viện', note: 'Thanh 1 + Thanh 4' },
    { pinyin: 'kànbìng', hanzi: '看病', meaning: 'Khám bệnh', note: 'Thanh 4 + Thanh 4' },
    { pinyin: 'yíxià', hanzi: '一下', meaning: 'Một lát / Một chút', note: 'Biến điệu yí' }
  ],
  toneContours: [
    { toneNumber: 1, name: 'Thanh 1 (Ngang cao)', mark: 'ˉ (shāo)', pitchCode: '55', desc: 'Cao phẳng kéo dài.', exampleHanzi: '烧', examplePinyin: 'shāo', meaning: 'Sốt / Đốt' },
    { toneNumber: 2, name: 'Thanh 2 (Đi lên)', mark: 'ˊ (téng)', pitchCode: '35', desc: 'Vuốt từ 3 lên 5.', exampleHanzi: '疼', examplePinyin: 'téng', meaning: 'Đau' },
    { toneNumber: 3, name: 'Thanh 3 (Trầm uốn)', mark: 'ˇ (gǎn)', pitchCode: '214', desc: 'Hạ trầm xuống đáy rồi uốn lên.', exampleHanzi: '感', examplePinyin: 'gǎn', meaning: 'Cảm' },
    { toneNumber: 4, name: 'Thanh 4 (Dứt khoát)', mark: 'ˋ (ràng)', pitchCode: '51', desc: 'Chém dứt khoát từ 5 xuống 1.', exampleHanzi: '让', examplePinyin: 'ràng', meaning: 'Bảo / Khiến' }
  ],
  toneRules: [
    {
      ruleNum: 1,
      title: 'Biến điệu của số từ 一 (yī → yí trước Thanh 4)',
      formula: 'yī + ˋ (Thanh 4) → yí + ˋ',
      desc: 'Chữ 一 đứng trước từ mang Thanh 4 như 下 (xià) phải đọc đổi thành Thanh 2: yíxià (一下 - một chút / một lát).',
      examples: [
        { hanzi: '看一下', writtenPinyin: 'kàn yīxià', readPinyin: 'kàn yíxià', meaning: 'Xem một chút' },
        { hanzi: '检查一下', writtenPinyin: 'jiǎnchá yīxià', readPinyin: 'jiǎnchá yíxià', meaning: 'Kiểm tra một lát' }
      ]
    },
    {
      ruleNum: 2,
      title: 'Trọng điểm ngữ pháp: Câu Kiêm Ngữ (兼语句) với 让 / 叫 / 请 / 使',
      formula: 'S + 让/叫/请 + Tân ngữ (O1/S2) + V2',
      desc: 'Tân ngữ của động từ thứ nhất đồng thời là Chủ ngữ của động từ thứ hai. Dùng để biểu thị sai khiến, cho phép hoặc nhờ vả.',
      examples: [
        { hanzi: '大夫让我躺下。', writtenPinyin: 'Dàifu ràng wǒ tǎng xià.', readPinyin: 'Dàifu ràng wǒ tǎng xià.', meaning: 'Bác sĩ bảo tôi nằm xuống.' },
        { hanzi: '妈妈叫我去医院。', writtenPinyin: 'Māma jiào wǒ qù yīyuàn.', readPinyin: 'Māma jiào wǒ qù yīyuàn.', meaning: 'Mẹ bảo tôi đi bệnh viện.' }
      ]
    }
  ],
  strokes: [
    { name: '1. Nét Ngang (横 - Héng)', symbol: '一', direction: 'Từ trái sang phải', tip: 'Kéo ngang, hơi nhấn nhẹ ở điểm kết thúc.', svgPath: 'M 25 50 L 135 50' },
    { name: '2. Nét Sổ (竖 - Shù)', symbol: '丨', direction: 'Thẳng từ trên xuống', tip: 'Giữ nét đứng thẳng làm cột trụ vững vàng.', svgPath: 'M 80 15 L 80 85' },
    { name: '3. Nét Phẩy (撇 - Piě)', symbol: '丿', direction: 'Trên phải cong xuống dưới trái', tip: 'Đặt bút đậm rồi vuốt nhẹ thanh thoát về trái.', svgPath: 'M 105 18 Q 85 58 40 82' },
    { name: '4. Nét Chấm (点 - Diǎn)', symbol: '丶', direction: 'Trên trái nhấn xuống dưới phải', tip: 'Đầu nhọn, đuôi tròn đậm.', svgPath: 'M 65 30 Q 82 45 95 65' },
    { name: '5. Nét Mác (捺 - Nà)', symbol: '乀', direction: 'Trên trái kéo xuống dưới phải', tip: 'Bắt đầu thanh, nhấn đậm rồi vẩy nhẹ.', svgPath: 'M 40 20 Q 75 60 125 80' },
    { name: '6. Nét Hất (提 - Tí)', symbol: '㇀', direction: 'Dưới trái hất lên trên phải', tip: 'Nhấn ở dưới rồi hất nhanh lên.', svgPath: 'M 40 75 L 115 30' },
    { name: '7. Nét Móc (钩 - Gōu)', symbol: '亅', direction: 'Cuối nét sổ/ngang móc nhọn', tip: 'Luôn bật nhẹ mũi bút.', svgPath: 'M 85 15 L 85 75 L 62 62' },
    { name: '8. Nét Gập (折 - Zhé)', symbol: '𠃍', direction: 'Đang kéo thì gập chuyển hướng', tip: 'Gập dứt khoát góc vuông.', svgPath: 'M 35 28 L 115 28 L 115 82' }
  ],
  strokeRules: [
    { ruleNum: 1, title: 'Bao quanh có cửa (Bộ Bệnh 疒 trong 疼, 病)', desc: 'Chấm trên đầu, phẩy sổ ngoài, rồi viết chữ 冬 hoặc 丙 bên trong.', examples: [{ hanzi: '疼', pinyin: 'téng', hv: 'Thống', meaning: 'Đau' }, { hanzi: '病', pinyin: 'bìng', hv: 'Bệnh', meaning: 'Bệnh tật' }] },
    { ruleNum: 2, title: 'Trên trước dưới sau (Chữ 头, 查)', desc: 'Viết từ phần đầu xuống thân dưới.', examples: [{ hanzi: '头', pinyin: 'tóu', hv: 'Đầu', meaning: 'Cái đầu' }, { hanzi: '查', pinyin: 'chá', hv: 'Tra', meaning: 'Kiểm tra' }] }
  ],
  vocab: [
            {
                id: 1,
                timestamp: '00:02:11',
                hanzi: '头',
                pinyin: 'tóu',
                hanViet: 'Đầu',
                type: 'Danh từ',
                meaning: 'Cái đầu (Mở rộng: 怎么了 zěnme le - Làm sao thế?)',
                radicals: [
                    { r: '头', name: 'Bộ Đầu', desc: 'Hai nét chấm tượng trưng cho tóc, nét cuối là chấm dài (không phải chữ Đại 大)' }
                ],
                mnemonic: 'Cấu trúc hỏi thăm cực hay ở [00:03:49]: Chủ ngữ + 怎么了？ (Làm sao thế / Bị sao vậy?). Ví dụ: 你的头怎么了？ (Đầu bạn sao thế?), 今天你怎么了？ (Hôm nay bạn sao thế?), 你的手怎么了？ (Tay bạn bị sao vậy?).',
                exampleHanzi: '你的头怎么了？',
                examplePinyin: 'Nǐ de tóu zěnme le?',
                exampleMeaning: 'Đầu của bạn bị làm sao thế?'
            },
            {
                id: 2,
                timestamp: '00:06:16',
                hanzi: '疼',
                pinyin: 'téng',
                hanViet: 'Đông / Thống',
                type: 'Động từ / Tính từ',
                meaning: 'Đau, nhức (头疼 tóuténg: đau đầu / nhức đầu)',
                radicals: [
                    { r: '疒', name: 'Bộ Bệnh', desc: 'Giường bệnh (mọi chữ chỉ bệnh tật đều có bộ này)' },
                    { r: '冬', name: 'Chữ Đông', desc: 'Mùa đông lạnh giá (dưới có 2 giọt băng đá)' }
                ],
                mnemonic: 'Câu chuyện nhớ chữ [00:06:44]: Mùa đông lạnh giá (冬) mà mắc bệnh nằm trên giường (疒) thì vô cùng Đau nhức (疼 téng)! Lưu ý cả 2 cách nói đều đúng: 我的头很疼 hoặc 我很头疼.',
                exampleHanzi: '我的头很疼。',
                examplePinyin: 'Wǒ de tóu hěn téng.',
                exampleMeaning: 'Đầu của tôi rất đau.'
            },
            {
                id: 3,
                timestamp: '00:10:02',
                hanzi: '舒服',
                pinyin: 'shūfu',
                hanViet: 'Thư phục',
                type: 'Tính từ',
                meaning: 'Thoải mái, dễ chịu (不舒服 bù shūfu: khó chịu, mệt trong người)',
                radicals: [
                    { r: '舌+予', name: 'Chữ Thư (舒)', desc: 'Cái lưỡi (舌) + Cho (予)' },
                    { r: '月+卩+又', name: 'Chữ Phục (服)', desc: 'Bộ Nguyệt/Nhục (月) chỉ cơ thể + Bộ Tiết (卩) + Bộ Hựu (又)' }
                ],
                mnemonic: 'Lưu ý chữ 服 khi đứng riêng đọc là fú (trong 衣服 yīfu quần áo), khi ghép vào 舒服 đọc thanh nhẹ là shūfu [00:10:20]. Khi đi khám bác sĩ hay hỏi: 你哪儿不舒服？ (Bạn khó chịu ở đâu?).',
                exampleHanzi: '这几天我觉得很不舒服。',
                examplePinyin: 'Zhè jǐ tiān wǒ juéde hěn bù shūfu.',
                exampleMeaning: 'Mấy ngày nay tôi cảm thấy rất khó chịu (không khỏe).'
            },
            {
                id: 4,
                timestamp: '00:17:04',
                hanzi: '流',
                pinyin: 'liú',
                hanViet: 'Lưu',
                type: 'Động từ',
                meaning: 'Chảy (Mở rộng: 流口水 chảy nước miếng • 流血 chảy máu)',
                radicals: [
                    { r: '氵', name: 'Bộ Chấm Thủy', desc: '3 giọt nước chảy' },
                    { r: '充/川', name: 'Phần phải', desc: 'Dòng sông nước chảy xuôi (川)' }
                ],
                mnemonic: 'Cô giáo mở rộng 3 cụm cực thực tế [00:17:41]: 流水 (nước chảy), 流口水 (liú kǒushuǐ - chảy nước dãi/nước miếng), 流血 (liúxiě - chảy máu: 你的手流血了，你疼吗？).',
                exampleHanzi: '你的手流血了，你疼吗？',
                examplePinyin: 'Nǐ de shǒu liúxiě le, nǐ téng ma?',
                exampleMeaning: 'Tay của bạn chảy máu rồi, bạn có đau không?'
            },
            {
                id: 5,
                timestamp: '00:22:36',
                hanzi: '鼻涕',
                pinyin: 'bítì',
                hanViet: 'Tị thế',
                type: 'Danh từ',
                meaning: 'Nước mũi (流鼻涕 liú bítì: chảy nước mũi, sổ mũi)',
                radicals: [
                    { r: '自+田+廾', name: 'Chữ Tị (鼻 - Cái mũi)', desc: 'Bộ Tự (自 - cái mũi) + Bộ Điền (田) + Bộ Củng (廾)' },
                    { r: '氵+弟', name: 'Chữ Thế (涕)', desc: 'Nước (氵) mũi của thằng em trai (弟)' }
                ],
                mnemonic: 'Người Trung Quốc khi chỉ vào bản thân (自 - tự mình) thường chỉ ngón trỏ vào cái mũi (鼻)! Chữ 涕 gồm nước (氵) + em trai (弟): Em nhỏ hay chảy nước mũi (流鼻涕).',
                exampleHanzi: '我头疼、流鼻涕。',
                examplePinyin: 'Wǒ tóuténg, liú bítì.',
                exampleMeaning: 'Tôi bị đau đầu và chảy nước mũi.'
            },
            {
                id: 6,
                timestamp: '00:26:52',
                hanzi: '发烧',
                pinyin: 'fāshāo',
                hanViet: 'Phát thiêu',
                type: 'Động từ',
                meaning: 'Sốt, bị sốt (Cơ thể phát nhiệt nóng như lửa đốt)',
                radicals: [
                    { r: '发', name: 'Chữ Phát', desc: 'Phát ra, tỏa ra' },
                    { r: '火+尧', name: 'Chữ Thiêu (烧)', desc: 'Bộ Hỏa (火 - lửa) + Chữ Nghiêu (尧 - KHÔNG có chấm trên đầu!)' }
                ],
                mnemonic: 'Bị sốt (发烧 fāshāo) là người nóng bừng như lửa đốt (火). Lưu ý tiếng Trung nói thẳng "我发烧" chứ không thêm từ "bị" ở trước.',
                exampleHanzi: '我头疼、流鼻涕，我还发烧。',
                examplePinyin: 'Wǒ tóuténg, liú bítì, wǒ hái fāshāo.',
                exampleMeaning: 'Tôi đau đầu, chảy nước mũi, tôi còn bị sốt nữa.'
            },
            {
                id: 7,
                timestamp: '00:29:47',
                hanzi: '让',
                pinyin: 'ràng',
                hanViet: 'Nhượng',
                type: 'Động từ sai khiến',
                meaning: 'Bảo, kêu, để, cho phép, nhường (Phủ định: 不让 bú ràng)',
                radicals: [
                    { r: '讠', name: 'Bộ Ngôn', desc: 'Dùng lời nói để bảo/cho phép' },
                    { r: '上', name: 'Chữ Thượng', desc: 'Ở trên / Nhường người khác lên trên' }
                ],
                mnemonic: 'Vừa mang nghĩa bảo/sai khiến (医生让我多喝水), vừa mang nghĩa để/cho phép (让我给你检查一下; 他不让我喝可乐 - Anh ấy không cho tôi uống Coca [00:31:07]).',
                exampleHanzi: '他不让我喝可乐。',
                examplePinyin: 'Tā bú ràng wǒ hē kělè.',
                exampleMeaning: 'Anh ấy không cho phép tôi uống Coca.'
            },
            {
                id: 8,
                timestamp: '00:32:10',
                hanzi: '检查',
                pinyin: 'jiǎnchá',
                hanViet: 'Kiểm tra',
                type: 'Động từ',
                meaning: 'Kiểm tra (Mở rộng: 身体 shēntǐ cơ thể/sức khỏe • 医院 yīyuàn bệnh viện)',
                radicals: [
                    { r: '木+佥', name: 'Chữ Kiểm (检)', desc: 'Bộ Mộc (木 - cây gỗ) + Chữ Thiêm (佥)' },
                    { r: '木+旦', name: 'Chữ Tra (查)', desc: 'Bộ Mộc (木 - cây) đặt trên chữ Đán (旦 - buổi sáng)' }
                ],
                mnemonic: 'Cả 2 chữ 检 và 查 đều có Bộ Mộc (木 - cây gỗ). Kết hợp cấu trúc 给 + Ai + V: 让我给你检查一下 (Để tôi kiểm tra cho bạn một chút), 检查身体 (kiểm tra sức khỏe).',
                exampleHanzi: '让我给你检查一下。',
                examplePinyin: 'Ràng wǒ gěi nǐ jiǎnchá yíxià.',
                exampleMeaning: 'Để tôi kiểm tra cho bạn một chút.'
            },
            {
                id: 9,
                timestamp: '00:40:14',
                hanzi: '病',
                pinyin: 'bìng',
                hanViet: 'Bệnh',
                type: 'Danh từ / Động từ',
                meaning: 'Bệnh, ốm (Mở rộng: 看病 kànbìng = Khám bệnh)',
                radicals: [
                    { r: '疒', name: 'Bộ Bệnh', desc: 'Giường bệnh' },
                    { r: '丙', name: 'Chữ Bính', desc: 'Biểu âm đọc bìng (Một nét ngang + chữ Nội 内)' }
                ],
                mnemonic: 'Chú ý [00:42:37]: 看病 (kànbìng) dùng cho cả Bác sĩ khám cho bệnh nhân (医生给我看病) LẪN Bệnh nhân đi khám bệnh tại bệnh viện (我去医院看病)! Bệnh khỏi rồi: 我的病好了.',
                exampleHanzi: '我的病好了。',
                examplePinyin: 'Wǒ de bìng hǎo le.',
                exampleMeaning: 'Bệnh của tôi khỏi (đỡ) rồi.'
            },
            {
                id: 10,
                timestamp: '00:45:12',
                hanzi: '严重',
                pinyin: 'yánzhòng',
                hanViet: 'Nghiêm trọng',
                type: 'Tính từ',
                meaning: 'Nghiêm trọng, (bệnh) nặng (Chữ 重 zhòng đứng riêng = nặng về trọng lượng)',
                radicals: [
                    { r: '严', name: 'Chữ Nghiêm', desc: 'Nghiêm khắc, nghiêm ngặt' },
                    { r: '重', name: 'Chữ Trọng (zhòng)', desc: 'Nặng (VD: 我的书包很重 - Cặp sách của tôi rất nặng)' }
                ],
                mnemonic: 'BẪY DỊCH THUẬT [00:46:46]: Tiếng Việt hỏi "Bệnh của tôi CÓ nặng không?" nhưng tiếng Trung chỉ nói "我的病严重吗？", TUYỆT ĐỐI KHÔNG dịch chữ "có" thành 有!',
                exampleHanzi: '医生，我的病严重吗？',
                examplePinyin: 'Yīshēng, wǒ de bìng yánzhòng ma?',
                exampleMeaning: 'Bác sĩ ơi, bệnh của tôi có nặng (nghiêm trọng) không?'
            },
            {
                id: 11,
                timestamp: '00:47:37',
                hanzi: '感冒',
                pinyin: 'gǎnmào',
                hanViet: 'Cảm mạo',
                type: 'Danh từ / Động từ',
                meaning: 'Cảm, cảm cúm (Mở rộng: 只是 zhǐshì = chỉ là)',
                radicals: [
                    { r: '咸+心', name: 'Chữ Cảm (感)', desc: 'Chữ Hàm (咸) ở trên + Bộ Tâm (心 - trái tim cảm nhận) ở dưới' },
                    { r: '曰+目', name: 'Chữ Mạo (冒)', desc: 'Cái mũ trùm xuống tận Bộ Mục (目 - con mắt)' }
                ],
                mnemonic: 'Khi bị cảm cúm chỉ nói "我感冒了" (không thêm từ bị). Bác sĩ trấn an [00:50:21]: 你的病不严重，只是感冒 (Bệnh của bạn không nặng đâu, chỉ là cảm cúm thôi).',
                exampleHanzi: '你的病不严重，只是感冒。',
                examplePinyin: 'Nǐ de bìng bù yánzhòng, zhǐshì gǎnmào.',
                exampleMeaning: 'Bệnh của bạn không nghiêm trọng đâu, chỉ là cảm cúm thôi.'
            },
            {
                id: 12,
                timestamp: '00:51:44',
                hanzi: '护士',
                pinyin: 'hùshi',
                hanViet: 'Hộ sĩ',
                type: 'Danh từ',
                meaning: 'Y tá, điều dưỡng (Chữ 士 đọc thanh nhẹ)',
                radicals: [
                    { r: '扌+户', name: 'Chữ Hộ (护)', desc: 'Bộ Tài gảy (扌- đôi tay) bảo vệ từng hộ gia đình (户)' },
                    { r: '士', name: 'Bộ Sĩ (士)', desc: 'Kẻ sĩ / Nhân viên chuyên môn (Ngang dưới NGẮN hơn ngang trên!)' }
                ],
                mnemonic: 'Người dùng đôi tay (扌) chăm sóc bảo hộ (护) bệnh nhân với chuyên môn (士) là cô Y tá (护士 hùshi). Phân biệt Bộ Sĩ (士) với Bộ Thổ (土).',
                exampleHanzi: '我只是一个护士。',
                examplePinyin: 'Wǒ zhǐshì yí gè hùshi.',
                exampleMeaning: 'Tôi chỉ là một y tá thôi.'
            },
            {
                id: 13,
                timestamp: '00:54:57',
                hanzi: '打针',
                pinyin: 'dǎzhēn',
                hanViet: 'Đả châm',
                type: 'Động từ ly hợp',
                meaning: 'Tiêm, chích thuốc (Ly hợp: 打一针 tiêm 1 mũi • 打两针 tiêm 2 mũi)',
                radicals: [
                    { r: '扌+丁', name: 'Chữ Đả (打)', desc: 'Bộ Tài gảy (扌- tay) + Chữ Đinh (丁)' },
                    { r: '钅+十', name: 'Chữ Châm (针)', desc: 'Bộ Kim (钅- kim loại) + Bộ Thập (十): cây kim tiêm' }
                ],
                mnemonic: 'Vì 打 (đánh/đâm) là động từ còn 针 (cây kim) là tân ngữ nên khi nói "tiêm mấy mũi" phải tách đôi nhét số vào giữa [00:57:49]: 我要打几针？ (Tôi phải tiêm mấy mũi?), 打一针 (tiêm 1 mũi).',
                exampleHanzi: '我要打几针？',
                examplePinyin: 'Wǒ yào dǎ jǐ zhēn?',
                exampleMeaning: 'Tôi phải tiêm mấy mũi?'
            },
            {
                id: 14,
                timestamp: '00:59:59',
                hanzi: '开',
                pinyin: 'kāi',
                hanViet: 'Khai',
                type: 'Động từ',
                meaning: 'Mở (开门), Kê đơn thuốc (开药 kāiyào)',
                radicals: [
                    { r: '一+廾', name: 'Chữ Khai (开)', desc: 'Hai tay (廾) kéo thanh chắn cửa ra để mở' }
                ],
                mnemonic: 'Ngoài nghĩa mở cửa (开门), trong bệnh viện 开 đi với 药 thành 开药 (kāiyào - kê đơn thuốc): 医生给我开药 (Bác sĩ kê đơn thuốc cho tôi).',
                exampleHanzi: '医生给我开药。',
                examplePinyin: 'Yīshēng gěi wǒ kāiyào.',
                exampleMeaning: 'Bác sĩ kê đơn thuốc cho tôi.'
            },
            {
                id: 15,
                timestamp: '01:02:33',
                hanzi: '药',
                pinyin: 'yào',
                hanViet: 'Dược',
                type: 'Danh từ',
                meaning: 'Thuốc (中药 Thuốc Bắc • 西药 Thuốc Tây • 南药 Thuốc Nam)',
                radicals: [
                    { r: '艹', name: 'Bộ Thảo đầu', desc: 'Cỏ cây thảo dược trên đầu' },
                    { r: '约', name: 'Chữ Ước (yuē)', desc: 'Bộ Mịch (纟) + Bộ Bao (勺)' }
                ],
                mnemonic: 'Thuốc (药) thời xưa làm từ cỏ cây thảo mộc nên có Bộ Thảo đầu (艹). CỰC LƯU Ý [01:02:48]: Thuốc Bắc phải dịch là 中药 (Zhōngyào), KHÔNG nói 北药! Uống thuốc viên dùng 吃药 (chī yào).',
                exampleHanzi: '我不喜欢喝中药，我喜欢吃西药。',
                examplePinyin: 'Wǒ bù xǐhuan hē Zhōngyào, wǒ xǐhuan chī xīyào.',
                exampleMeaning: 'Tôi không thích uống thuốc Bắc, tôi thích uống thuốc Tây.'
            },
            {
                id: 16,
                timestamp: '01:07:35',
                hanzi: '次',
                pinyin: 'cì',
                hanViet: 'Thứ',
                type: 'Động lượng từ',
                meaning: 'Lần (Công thức: Động từ + Số đếm + 次)',
                radicals: [
                    { r: '冫', name: 'Bộ Băng', desc: 'Hai nét chấm băng bên trái' },
                    { r: '欠', name: 'Bộ Khiếm', desc: 'Người há miệng ngáp / thiếu nợ bên phải' }
                ],
                mnemonic: 'Đứng sau động từ để đếm số lần thực hiện hành động: 一次 (1 lần), 两次 (2 lần - dùng 两), 一天要吃几次？ (Một ngày phải uống mấy lần?), 一天吃两次 (Một ngày uống 2 lần).',
                exampleHanzi: '一天要吃几次？',
                examplePinyin: 'Yì tiān yào chī jǐ cì?',
                exampleMeaning: 'Một ngày phải uống (thuốc) mấy lần?'
            },
            {
                id: 17,
                timestamp: '01:10:02',
                hanzi: '片',
                pinyin: 'piàn',
                hanViet: 'Phiến',
                type: 'Lượng từ',
                meaning: 'Viên (thuốc), lát, mảnh, tấm (一片药: 1 viên thuốc)',
                radicals: [
                    { r: '片', name: 'Bộ Phiến', desc: 'Mảnh gỗ mỏng xẻ ra từ thân cây (木)' }
                ],
                mnemonic: 'Dùng cho vật mỏng dẹt hoặc viên thuốc nén: 一片药 (yí piàn yào - 1 viên thuốc), 两片药 (liǎng piàn yào - 2 viên thuốc). Câu mẫu kinh điển: 一天吃两次，一次吃一片药.',
                exampleHanzi: '一天吃两次，一次吃一片药。',
                examplePinyin: 'Yì tiān chī liǎng cì, yí cì chī yí piàn yào.',
                exampleMeaning: 'Một ngày uống 2 lần, một lần uống 1 viên thuốc.'
            },
            {
                id: 18,
                timestamp: '01:12:41',
                hanzi: '休息',
                pinyin: 'xiūxi',
                hanViet: 'Hưu tức',
                type: 'Động từ',
                meaning: 'Nghỉ ngơi (休息一下 / 休息一会儿: nghỉ một lát; 多休息: nghỉ ngơi nhiều)',
                radicals: [
                    { r: '亻+木', name: 'Chữ Hưu (休)', desc: 'Người (亻) tựa lưng vào gốc cây (木) để nghỉ mát' },
                    { r: '自+心', name: 'Chữ Tức (息)', desc: 'Hơi thở từ mũi (自) đi thẳng xuống trái tim (心)' }
                ],
                mnemonic: 'Câu chuyện chữ Hán đẹp nhất bài [01:13:02]: Người đi đường mệt mỏi (亻) dựa lưng vào gốc cây (木) là Nghỉ (休), điều hòa hơi thở từ mũi (自) đến tim (心) là Ngơi (息)!',
                exampleHanzi: '医生让我在家休息。',
                examplePinyin: 'Yīshēng ràng wǒ zài jiā xiūxi.',
                exampleMeaning: 'Bác sĩ bảo tôi ở nhà nghỉ ngơi.'
            }
        ],
  dialogues: [
            {
                title: 'Hội thoại 1: Hỏi thăm bạn bị ốm & Khuyên đi bệnh viện khám bệnh (看病)',
                lines: [
                    { speaker: 'A', hanzi: '今天你怎么了？哪儿不舒服？', pinyin: 'Jīntiān nǐ zěnme le? Nǎr bù shūfu?', vn: 'Hôm nay bạn làm sao thế? Khó chịu ở đâu vậy?', note: 'Mẫu câu hỏi thăm kinh điển: Chủ ngữ + 怎么了？ / 哪儿不舒服？' },
                    { speaker: 'B', hanzi: '这几天我觉得很不舒服。我头疼、流鼻涕，我还发烧。', pinyin: 'Zhè jǐ tiān wǒ juéde hěn bù shūfu. Wǒ tóuténg, liú bítì, wǒ hái fāshāo.', vn: 'Mấy hôm nay mình thấy rất khó chịu. Mình đau đầu, chảy nước mũi, lại còn bị sốt nữa.', note: 'Liệt kê chuỗi triệu chứng: 头疼, 流鼻涕, 发烧.' },
                    { speaker: 'A', hanzi: '那你快去医院看病吧！', pinyin: 'Nà nǐ kuài qù yīyuàn kànbìng ba!', vn: 'Vậy bạn mau đi bệnh viện khám bệnh đi nhé!', note: '去医院看病 = Đi bệnh viện khám bệnh.' }
                ]
            },
            {
                title: 'Hội thoại 2: Bác sĩ kiểm tra sức khỏe (检查) & Chẩn đoán cảm cúm (感冒)',
                lines: [
                    { speaker: 'A', hanzi: '请坐，让我给你检查一下。', pinyin: 'Qǐng zuò, ràng wǒ gěi nǐ jiǎnchá yíxià.', vn: 'Mời ngồi, để tôi kiểm tra cho bạn một chút.', note: 'Câu Kiêm Ngữ 让我... kết hợp 给你检查一下.' },
                    { speaker: 'B', hanzi: '医生，我的病严重吗？', pinyin: 'Yīshēng, wǒ de bìng yánzhòng ma?', vn: 'Bác sĩ ơi, bệnh của cháu có nặng (nghiêm trọng) không ạ?', note: 'Tuyệt đối KHÔNG thêm chữ 有 trước 严重!' },
                    { speaker: 'A', hanzi: '你的病不严重，只是感冒。', pinyin: 'Nǐ de bìng bù yánzhòng, zhǐshì gǎnmào.', vn: 'Bệnh của bạn không nặng đâu, chỉ là bị cảm cúm thôi.', note: '只是 (zhǐshì) = chỉ là.' }
                ]
            },
            {
                title: 'Hội thoại 3: Tiêm thuốc (打针), Kê đơn (开药) & Lời dặn của Bác sĩ (多喝水、多休息)',
                lines: [
                    { speaker: 'B', hanzi: '医生，我要打针吗？我不想打针。', pinyin: 'Yīshēng, wǒ yào dǎzhēn ma? Wǒ bù xiǎng dǎzhēn.', vn: 'Bác sĩ ơi, cháu có phải tiêm không ạ? Cháu không muốn tiêm.', note: '打针 = tiêm.' },
                    { speaker: 'A', hanzi: '不用打针，我给你开药。', pinyin: 'Búyòng dǎzhēn, wǒ gěi nǐ kāiyào.', vn: 'Không cần tiêm đâu, tôi kê đơn thuốc cho bạn.', note: '给我/给你开药 = Kê đơn thuốc cho tôi/bạn.' },
                    { speaker: 'B', hanzi: '这药一天要吃几次？', pinyin: 'Zhè yào yì tiān yào chī jǐ cì?', vn: 'Thuốc này một ngày phải uống mấy lần ạ?', note: 'Động từ 吃 + Số lần + 次.' },
                    { speaker: 'A', hanzi: '一天吃两次，一次吃两片药。你要多喝水、多休息！', pinyin: 'Yì tiān chī liǎng cì, yí cì chī liǎng piàn yào. Nǐ yào duō hē shuǐ, duō xiūxi!', vn: 'Một ngày uống 2 lần, mỗi lần uống 2 viên thuốc. Bạn phải uống nhiều nước, nghỉ ngơi nhiều nhé!', note: 'Cấu trúc khuyên nhủ 多 + V: 多喝水, 多休息.' }
                ]
            }
        ],
  quiz: [
            {
                q: 'Câu 1 [00:46:46]: Khi muốn hỏi bác sĩ "Bác sĩ ơi, bệnh của tôi có nặng (nghiêm trọng) không?", câu nào dưới đây là ĐÚNG ngữ pháp tiếng Trung?',
                speakWord: '医生，我的病严重吗？',
                options: [
                    '医生，我的病有严重吗？ (Dịch từng chữ "có" = 有)',
                    '医生，我的病严重吗？ (Yīshēng, wǒ de bìng yánzhòng ma? — Tuyệt đối không thêm 有)',
                    '医生，我的病很严重吗？',
                    '医生，严重我的病吗？'
                ],
                correct: 1,
                explanation: 'Trong tiếng Trung, tính từ 严重 (yánzhòng) làm vị ngữ trực tiếp. Khi hỏi nghi vấn chỉ dùng "我的病严重吗？", tuyệt đối không được ghép chữ 有 (yǒu) đứng trước tính từ như tiếng Việt!'
            },
            {
                q: 'Câu 2 [01:02:48]: Trong tiếng Trung, "Thuốc Bắc" (thuốc Đông y cổ truyền Trung Hoa) được gọi là gì?',
                speakWord: '中药',
                options: [
                    '北药 (Běiyào)',
                    '中药 (Zhōngyào — Còn thuốc Tây là 西药, thuốc Nam là 南药)',
                    '东药 (Dōngyào)',
                    '上药 (Shàngyào)'
                ],
                correct: 1,
                explanation: 'Người Việt gọi là "Thuốc Bắc" (thuốc từ phương Bắc truyền sang), nhưng bản chất đó là thuốc y học cổ truyền Trung Quốc nên tiếng Trung bắt buộc gọi là 中药 (Zhōngyào), hoàn toàn không có từ "北药"!'
            },
            {
                q: 'Câu 3 [00:00:57]: Để khuyên bạn đang bị ốm "Bạn uống nhiều nước, nghỉ ngơi nhiều vào nhé!", cách sắp xếp từ nào dưới đây là ĐÚNG?',
                speakWord: '医生让我多喝水、多休息。',
                options: [
                    '你喝水多、休息多吧！ (Đặt 多 ở sau giống tiếng Việt)',
                    '你要多喝水、多休息！ (Đặt phó từ 多 đứng TRƯỚC động từ: 多 + V)',
                    '你喝多水、休息多吧！',
                    '你很喝水、很休息吧！'
                ],
                correct: 1,
                explanation: 'Khác với tiếng Việt ("uống nhiều, nghỉ nhiều"), trong tiếng Trung chữ 多 (duō) khi khuyên nhủ phải đứng TRƯỚC động từ: 多喝水 (uống nhiều nước), 多休息 (nghỉ ngơi nhiều), 多听多说 (nghe nhiều nói nhiều).'
            },
            {
                q: 'Câu 4 [00:54:57]: Vì "打针" (dǎzhēn - tiêm) là một Động từ ly hợp (打 = chích, 针 = mũi kim), nên khi muốn nói "Tiêm 2 mũi" hoặc hỏi "Phải tiêm mấy mũi?" ta phải nói thế nào?',
                speakWord: '我要打几针？',
                options: [
                    '打针两 / 要打针几？ (Đặt số lượng ở sau 针)',
                    '打两针 (dǎ liǎng zhēn) / 我要打几针？ (Nhét số lượng vào GIỮA chữ 打 và chữ 针)',
                    '两打针 / 几打针？',
                    '打二针'
                ],
                correct: 1,
                explanation: 'Với từ ly hợp 打针, chữ 针 vốn là danh từ (mũi kim/mũi tiêm) đóng vai trò tân ngữ của 打, nên số lượng phải đặt ở giữa: 打一针 (tiêm 1 mũi), 打两针 (tiêm 2 mũi), 打几针 (tiêm mấy mũi).'
            },
            {
                q: 'Câu 5 [01:19:03]: Trong câu Kiêm Ngữ "医生让我多休息" (Bác sĩ bảo tôi nghỉ ngơi nhiều), chữ "我" đóng vai trò ngữ pháp gì?',
                speakWord: '医生让我在家休息。',
                options: [
                    'Chỉ làm Chủ ngữ của cả câu',
                    'Chỉ làm Định ngữ',
                    'Là "Kiêm ngữ": Vừa làm Tân ngữ của động từ thứ nhất (让), vừa làm Chủ ngữ thực hiện động từ thứ hai (多休息)',
                    'Là Trạng ngữ chỉ thời gian'
                ],
                correct: 2,
                explanation: 'Đúng tên gọi "Kiêm ngữ" (兼语 = kiêm nhiệm 2 chức năng): "我" vừa là đối tượng bị "医生让" (Tân ngữ 1), vừa là người trực tiếp thực hiện hành động "多休息" (Chủ ngữ 2).'
            },
            {
                q: 'Câu 6 [00:06:44]: Chữ "疼" (téng - đau) và chữ "病" (bìng - bệnh) đều có chung bộ thủ nào bao quanh ở bên ngoài?',
                speakWord: '疼',
                options: [
                    'Bộ Quảng (广 - mái nhà rộng)',
                    'Bộ Bệnh / Nạch (疒 - hình chiếc giường bệnh có 2 nét chấm mồ hôi bên trái)',
                    'Bộ Miên (宀 - mái nhà)',
                    'Bộ Thi (尸 - thi thể)'
                ],
                correct: 1,
                explanation: 'Mọi chữ Hán liên quan đến ốm đau, bệnh tật (疼 đau, 病 bệnh, 痛 thống, 疯 điên...) đều mang Bộ Bệnh (疒).'
            },
            {
                q: 'Câu 7 [01:13:02]: Câu chuyện chiết tự của từ "休息" (xiūxi - nghỉ ngơi) được cấu tạo từ những bộ thủ nào?',
                speakWord: '休息',
                options: [
                    'Chữ 休 gồm Người (亻) dựa vào Cây (木); chữ 息 gồm cái Mũi (自) điều hòa hơi thở xuống Trái tim (心)',
                    'Bộ Thủy (氵) và Bộ Hỏa (火)',
                    'Bộ Kim (钅) và Bộ Thổ (土)',
                    'Bộ Ngôn (讠) và Bộ Khẩu (口)'
                ],
                correct: 0,
                explanation: 'Hình ảnh vô cùng sinh động: Người (亻) tựa vào gốc cây (木) là Nghỉ (休); hít thở từ mũi (自) xuống tim (心) là Ngơi (息).'
            },
            {
                q: 'Câu 8 [01:11:36]: Câu dặn liều lượng thuốc "Một ngày uống 2 lần, mỗi lần uống 1 viên thuốc" nói bằng tiếng Trung chuẩn là gì?',
                speakWord: '一天吃两次，一次吃一片药。',
                options: [
                    '一天喝二次，一次喝一片药。',
                    '一天吃两次，一次吃一片药。 (Yì tiān chī liǎng cì, yí cì chī yí piàn yào.)',
                    '一天两次吃，一片药吃一次。',
                    '两次一天吃，一片一次吃。'
                ],
                correct: 1,
                explanation: 'Bổ ngữ động lượng (两次 - 2 lần) và tân ngữ (一片药 - 1 viên thuốc) đều đặt SAU động từ 吃 (chī): 一天吃两次，一次吃一片药.'
            },
            {
                q: 'Câu 9 [00:34:05]: Để nói "Để tôi kiểm tra cho bạn một chút", vị trí của cụm "cho bạn (给你)" phải đặt ở đâu?',
                speakWord: '让我给你检查一下。',
                options: [
                    '让我检查一下给你。 (Đặt 给你 ở cuối câu giống tiếng Việt)',
                    '让我给你检查一下。 (Đặt 给你 đứng TRƯỚC động từ 检查)',
                    '给我让你检查一下。',
                    '让给你我检查一下。'
                ],
                correct: 1,
                explanation: 'Theo cấu trúc "给 + Ai + Động từ", đối tượng nhận hành động phải đưa lên trước động từ: 给你检查一下 (kiểm tra cho bạn), 给我开药 (kê thuốc cho tôi).'
            },
            {
                q: 'Câu 10 [00:18:17]: Khi nhìn thấy bạn bị đứt tay chảy máu, câu hỏi thăm "Tay của bạn chảy máu rồi, bạn có đau không?" nói thế nào?',
                speakWord: '你的手流血了，你疼吗？',
                options: [
                    '你的手流鼻涕了，你疼吗？',
                    '你的手流口水了，你疼吗？',
                    '你的手流血了，你疼吗？ (Nǐ de shǒu liúxiě le, nǐ téng ma?)',
                    '你的手发烧了，你疼吗？'
                ],
                correct: 2,
                explanation: '流血 (liúxiě) là chảy máu; còn 流鼻涕 là chảy nước mũi, 流口水 là chảy nước miếng, 发烧 là bị sốt.'
            },
            {
                q: 'Câu 11 [00:53:09]: Trong từ "护士" (hùshi - y tá), chữ "士" là bộ thủ gì và khác với chữ "土" (Thổ - đất) ở điểm nào?',
                speakWord: '护士',
                options: [
                    'Chữ 士 là Bộ Sĩ, có nét ngang dưới NGẮN HƠN nét ngang trên (còn Bộ Thổ 土 có nét ngang dưới dài hơn)',
                    'Chữ 士 là Bộ Thổ, hai nét ngang bằng nhau',
                    'Chữ 士 là Bộ Thập (十)',
                    'Chữ 士 là Bộ Vương (王)'
                ],
                correct: 0,
                explanation: 'Bộ Sĩ (士 - người có học thức/chuyên môn) có nét ngang trên dài, nét ngang dưới ngắn. Còn Bộ Thổ (土 - mặt đất) có nét ngang dưới dài hơn để làm nền đất vững chắc.'
            },
            {
                q: 'Câu 12 [00:42:37]: Từ mở rộng "看病" (kànbìng) trong tiếng Trung có điểm gì đặc biệt về chủ thể sử dụng?',
                speakWord: '看病',
                options: [
                    'Chỉ dùng cho bác sĩ, bệnh nhân không được dùng',
                    'Chỉ dùng cho bệnh nhân, bác sĩ không được dùng',
                    'Dùng được cho CẢ HAI phía: Bác sĩ khám bệnh cho bệnh nhân (医生给我看病) VÀ Bệnh nhân đi bệnh viện khám bệnh (我去医院看病)',
                    'Chỉ có nghĩa là nhìn người ốm'
                ],
                correct: 2,
                explanation: 'Cô giáo nhấn mạnh tại [00:42:37]: 看病 vừa có nghĩa là bác sĩ khám chữa bệnh cho mình (给你看病), vừa có nghĩa là bệnh nhân đi khám bệnh ở bệnh viện (去医院看病).'
            }
        ]
};
