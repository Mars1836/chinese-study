import { LessonData } from '../types/lesson';

export const lesson3Data: LessonData = {
  id: 3,
  title: 'Hôm Nay Thứ Mấy?',
  pinyinTitle: 'Jīntiān xīngqī jǐ',
  hanziTitle: '今天星期几',
  videoDesc: 'Lộ trình Bài 3: 3 Thanh mẫu đầu lưỡi trước (z, c, s), Vận mẫu cuốn lưỡi (er, -i), Số đếm từ 1-10 (一到十), Cách nói Thứ trong tuần (星期) và Hỏi đáp lịch trình.',
  videoUrl: 'https://www.youtube.com/watch?v=sLUg6LGlNek',
  initialsGroups: [
    {
      groupTitle: 'Nhóm âm đầu lưỡi trước (z, c, s)',
      groupDesc: 'Phát âm bằng cách đặt đầu lưỡi tì vào mặt sau răng cửa trên. Âm "c" bật hơi mạnh, âm "s" xát nhẹ.',
      items: [
            {
                pinyin: 'z',
                speakChar: '资',
                readAs: 'zi → Đọc như "chư / tư" nhẹ',
                aspirated: false,
                badge: 'Không bật hơi',
                mouthTip: 'Đầu lưỡi đặt nhẹ ở mặt sau răng cửa hàm trên, phát âm giữa chữ "ch" và "t" tiếng Việt, KHÔNG bật hơi (tờ giấy đứng yên).'
            },
            {
                pinyin: 'c',
                speakChar: '雌',
                readAs: 'ci → Đọc như "chư / thư" BẬT HƠI MẠNH',
                aspirated: true,
                badge: '💨 BẬT HƠI MẠNH',
                mouthTip: 'Đầu lưỡi tì chặt vào mặt sau răng cửa trên rồi đột ngột bật mạnh luồng hơi ra ngoài làm tờ giấy trước miệng bay tốc lên!'
            },
            {
                pinyin: 's',
                speakChar: '思',
                readAs: 'si → Đọc như "xư" (x nhẹ tiếng Việt)',
                aspirated: false,
                badge: 'Âm xát nhẹ',
                mouthTip: 'Đầu lưỡi gần mặt sau răng cửa trên, để một khe hở nhỏ cho luồng hơi xì nhẹ ra ngoài, đọc thẳng lưỡi như chữ "xư".'
            }
        ]
    }
  ],
  finalsGroups: [
    {
      groupTitle: 'Vận mẫu đặc biệt Bài 3 (er, -i sau z, c, s)',
      items: [
            {
                pinyin: 'er',
                speakChar: '儿',
                vnTip: 'Đọc chữ "ơ" rồi uốn cong lưỡi sâu vào trong',
                detail: 'Vận mẫu đặc biệt chỉ đứng độc lập một mình làm âm tiết (không bao giờ ghép sau thanh mẫu). Bắt đầu bằng khẩu hình chữ "ơ", ngay lập tức cuộn đầu lưỡi cong ngược lên vòm họng.',
                drills: [
                    { p: 'ēr (儿)', h: '儿', tone: 1 },
                    { p: 'ér (而)', h: '而', tone: 2 },
                    { p: 'ěr (耳 - Tai)', h: '耳', tone: 3 },
                    { p: 'èr (二 - Số 2)', h: '二', tone: 4 }
                ]
            },
            {
                pinyin: 'uo',
                speakChar: '窝',
                vnTip: 'Đọc là "ua" (Tròn môi u rồi mở sang o/a)',
                detail: 'Thực chất chính là cách viết đầy đủ của vận mẫu "o". Quy tắc phân công: "o" chỉ đi với b, p, m, f (bo, po, mo, fo); còn "uo" đi với d, t, n, l, g, k, h, z, c, s. Đứng một mình viết là "wo" (我 wǒ).',
                drills: [
                    { p: 'duō (多)', h: '多', tone: 1 },
                    { p: 'tuō (托)', h: '托', tone: 1 },
                    { p: 'zuō (作)', h: '作', tone: 1 },
                    { p: 'cuò (错)', h: '错', tone: 4 }
                ]
            }
        ]
    }
  ],
  practiceSyllables: [
            { pinyin: 'zi', hanzi: '资', vn: 'chư / tư', note: 'i đọc thành ư' },
            { pinyin: 'ci', hanzi: '雌', vn: 'chư (bật hơi!)', note: 'i đọc thành ư' },
            { pinyin: 'si', hanzi: '思', vn: 'xư', note: 'i đọc thành ư' },
            { pinyin: 'di', hanzi: '低', vn: 'ti (giữ nguyên i)', note: 'Đối chiếu với zi' },
            { pinyin: 'zei', hanzi: '贼', vn: 'chấy', note: 'z + ei' },
            { pinyin: 'cen', hanzi: '参', vn: 'chân (bật hơi!)', note: 'c + en' },
            { pinyin: 'seng', hanzi: '僧', vn: 'xâng', note: 's + eng' },
            { pinyin: 'zou', hanzi: '邹', vn: 'châu', note: 'z + ou' },
            { pinyin: 'zong', hanzi: '宗', vn: 'chung', note: 'z + ong' },
            { pinyin: 'cong', hanzi: '匆', vn: 'chung (bật hơi!)', note: 'c + ong' },
            { pinyin: 'cuo', hanzi: '搓', vn: 'chua (bật hơi!)', note: 'c + uo' },
            { pinyin: 'zuo', hanzi: '作', vn: 'chua', note: 'z + uo' },
            { pinyin: 'zai', hanzi: '灾', vn: 'chai', note: 'z + ai (再 zài)' },
            { pinyin: 'cao', hanzi: '操', vn: 'chao (bật hơi!)', note: 'c + ao' },
            { pinyin: 'san', hanzi: '三', vn: 'xan', note: 's + an (Số 3)' },
            { pinyin: 'nǎr', hanzi: '哪儿', vn: 'nả-r (uốn lưỡi)', note: 'Âm Nhi hóa 儿' }
        ],
  toneContours: [
    { toneNumber: 1, name: 'Thanh 1 (Ngang)', mark: 'ˉ (jīn)', pitchCode: '55', desc: 'Cao phẳng kéo dài.', exampleHanzi: '今', examplePinyin: 'jīn', meaning: 'Hiện tại / Nay' },
    { toneNumber: 2, name: 'Thanh 2 (Đi lên)', mark: 'ˊ (míng)', pitchCode: '35', desc: 'Vuốt từ 3 lên 5.', exampleHanzi: '明', examplePinyin: 'míng', meaning: 'Sáng / Mai' },
    { toneNumber: 3, name: 'Thanh 3 (Trầm uốn)', mark: 'ˇ (jǐ)', pitchCode: '214', desc: 'Hạ trầm xuống đáy rồi uốn lên.', exampleHanzi: '几', examplePinyin: 'jǐ', meaning: 'Mấy' },
    { toneNumber: 4, name: 'Thanh 4 (Dứt khoát)', mark: 'ˋ (sì)', pitchCode: '51', desc: 'Chém dứt khoát từ 5 xuống 1.', exampleHanzi: '四', examplePinyin: 'sì', meaning: 'Số 4' }
  ],
  toneRules: [
    {
      ruleNum: 1,
      title: 'Quy tắc phát âm của chữ "i" sau z, c, s',
      formula: 'z / c / s + i → Đọc nghe như "ư"',
      desc: 'Khi i đứng sau z, c, s thì không đọc là "i" mà phát âm thành âm "ư" đầu lưỡi trước (zi, ci, si đọc như tư, thư, sư).',
      examples: [
        { hanzi: '四', writtenPinyin: 'sì', readPinyin: 'sư (Thanh 4)', meaning: 'Số 4' },
        { hanzi: '字', writtenPinyin: 'zì', readPinyin: 'tư (Thanh 4)', meaning: 'Chữ Hán' }
      ]
    },
    {
      ruleNum: 2,
      title: 'Cách nói Thứ trong tuần (星期 + Số đếm)',
      formula: 'Thứ trong tiếng Việt = 星期 + (Thứ - 1)',
      desc: 'Người Trung Quốc đếm từ Thứ Hai là 星期一 (Thứ + 1), Thứ Ba là 星期二 (Thứ + 2)... Riêng Chủ Nhật là 星期天 (xīngqī tiān) hoặc 星期日 (xīngqī rì).',
      examples: [
        { hanzi: '星期一', writtenPinyin: 'xīngqī yī', readPinyin: 'xīngqī yī', meaning: 'Thứ Hai' },
        { hanzi: '星期日', writtenPinyin: 'xīngqī rì', readPinyin: 'xīngqī rì', meaning: 'Chủ Nhật' }
      ]
    }
  ],
  strokes: [
    { name: '1. Nét Ngang Gập Hất', symbol: '㇇', direction: 'Ngang sang phải rồi gập hất', tip: 'Dùng trong chữ 买, 卖.', svgPath: 'M 30 35 L 120 35 L 50 80' },
    { name: '2. Nét Sổ Cong Móc', symbol: '乚', direction: 'Sổ thẳng rồi lượn móc lên', tip: 'Dùng trong chữ 七, 儿.', svgPath: 'M 50 20 L 50 70 Q 50 85 85 85 L 120 85 L 120 70' }
  ],
  strokeRules: [
    { ruleNum: 1, title: 'Bao quanh đáy trước đóng sau', desc: 'Chữ có bộ bao quanh.', examples: [{ hanzi: '回', pinyin: 'huí', hv: 'Hồi', meaning: 'Về' }] }
  ],
  vocab: [
            {
                id: 1, hanzi: '今天', pinyin: 'jīntiān', hanViet: 'Kim thiên', type: 'Danh từ thời gian', meaning: 'Hôm nay',
                radicals: [{ r: '人', name: 'Bộ Nhân', desc: 'Con người' }, { r: '天', name: 'Chữ Thiên', desc: 'Bầu trời / Ngày' }],
                mnemonic: '今 (Kim = hiện tại, ngay lúc này) + 天 (Thiên = ngày/trời) = Ngày hôm nay (今天). Lưu ý chữ 天 nét phẩy không nhô lên khỏi nét ngang đầu.',
                exampleHanzi: '今天星期一。', examplePinyin: 'Jīntiān xīngqī yī.', exampleMeaning: 'Hôm nay là thứ Hai.'
            },
            {
                id: 2, hanzi: '明天', pinyin: 'míngtiān', hanViet: 'Minh thiên', type: 'Danh từ thời gian', meaning: 'Ngày mai',
                radicals: [{ r: '日', name: 'Bộ Nhật', desc: 'Mặt trời' }, { r: '月', name: 'Bộ Nguyệt', desc: 'Mặt trăng' }],
                mnemonic: 'Chữ 明 (Minh = sáng sủa, ngày mai) ghép từ Mặt trời (日) và Mặt trăng (月): hết một ngày mặt trời lặn, mặt trăng lên rồi lại sáng là sang "Ngày mai" (明天)!',
                exampleHanzi: '明天见！', examplePinyin: 'Míngtiān jiàn!', exampleMeaning: 'Hẹn gặp lại ngày mai!'
            },
            {
                id: 3, hanzi: '昨天', pinyin: 'zuótiān', hanViet: 'Tạc thiên', type: 'Danh từ thời gian', meaning: 'Hôm qua',
                radicals: [{ r: '日', name: 'Bộ Nhật', desc: 'Ngày / Mặt trời' }, { r: '乍', name: 'Chữ Chạp', desc: 'Chợt qua, tạm thời' }],
                mnemonic: 'Chữ 昨 (Tạc) gồm bộ Nhật (日 - ngày) + chữ Chạp (乍 - vừa chợt qua) → Ngày vừa mới trôi qua chính là "Hôm qua" (昨天).',
                exampleHanzi: '昨天星期天。', examplePinyin: 'Zuótiān xīngqītiān.', exampleMeaning: 'Hôm qua là Chủ nhật.'
            },
            {
                id: 4, hanzi: '星期', pinyin: 'xīngqī', hanViet: 'Tinh kỳ', type: 'Danh từ', meaning: 'Tuần lễ / Thứ trong tuần',
                radicals: [{ r: '日+生', name: 'Chữ Tinh (星)', desc: 'Ngôi sao' }, { r: '其+月', name: 'Chữ Kỳ (期)', desc: 'Chu kỳ mặt trăng' }],
                mnemonic: '星 (Tinh = vì sao, tạo bởi mặt trời 日 sinh ra 生) + 期 (Kỳ = chu kỳ trăng 月). Ghép số 1→6 vào sau 星期 để gọi Thứ 2 → Thứ 7.',
                exampleHanzi: '今天星期三。', examplePinyin: 'Jīntiān xīngqī sān.', exampleMeaning: 'Hôm nay là thứ Tư (3 + 1 = Thứ 4).'
            },
            {
                id: 5, hanzi: '星期天 / 星期日', pinyin: 'xīngqītiān / xīngqīrì', hanViet: 'Tinh kỳ thiên / nhật', type: 'Danh từ thời gian', meaning: 'Chủ nhật',
                radicals: [{ r: '天', name: 'Chữ Thiên', desc: 'Dùng trong văn nói' }, { r: '日', name: 'Bộ Nhật', desc: 'Dùng trong văn viết' }],
                mnemonic: 'Tuyệt đối KHÔNG nói "星期七"! Văn nói hàng ngày thường dùng 星期天 (xīngqītiān), còn trên lịch hoặc văn bản trang trọng dùng 星期日 (xīngqīrì).',
                exampleHanzi: '明天星期天。', examplePinyin: 'Míngtiān xīngqītiān.', exampleMeaning: 'Ngày mai là Chủ nhật.'
            },
            {
                id: 6, hanzi: '几', pinyin: 'jǐ', hanViet: 'Kỷ', type: 'Đại từ nghi vấn', meaning: 'Mấy? Bao nhiêu? (Hỏi số nhỏ dưới 10)',
                radicals: [{ r: '丿', name: 'Nét Phẩy', desc: 'Kéo xuống bên trái' }, { r: '⺄', name: 'Ngang gập cong móc', desc: 'Uốn cong móc lên' }],
                mnemonic: 'Chữ 几 chỉ có 2 nét gọn gàng, dùng để hỏi con số từ 1 đến 9 (như 星期几？ = Thứ mấy?). Khi câu đã có 几 thì KHÔNG thêm 吗 ở cuối.',
                exampleHanzi: '今天星期几？', examplePinyin: 'Jīntiān xīngqī jǐ?', exampleMeaning: 'Hôm nay là thứ mấy?'
            },
            {
                id: 7, hanzi: '去', pinyin: 'qù', hanViet: 'Khứ', type: 'Động từ', meaning: 'Đi (đến một nơi nào đó)',
                radicals: [{ r: '土', name: 'Bộ Thổ', desc: 'Đất đai ở trên' }, { r: '厶', name: 'Bộ Tư', desc: 'Bàn chân bước đi ở dưới' }],
                mnemonic: 'Đôi chân (厶) bước đi trên mặt đất (土) nghĩa là "Đi" (去). Chú ý: "Không đi" viết là 不去 nhưng phải đọc biến điệu thành "bú qù"!',
                exampleHanzi: '我不去。', examplePinyin: 'Wǒ bú qù.', exampleMeaning: 'Tôi không đi.'
            },
            {
                id: 8, hanzi: '哪儿', pinyin: 'nǎr', hanViet: 'Ná nhi', type: 'Đại từ nghi vấn', meaning: 'Ở đâu? Đâu?',
                radicals: [{ r: '口', name: 'Bộ Khẩu', desc: 'Miệng hỏi' }, { r: '阝', name: 'Bộ Ấp', desc: 'Vùng đất' }, { r: '儿', name: 'Bộ Nhi', desc: 'Âm uốn lưỡi r' }],
                mnemonic: 'Dùng miệng (口) hỏi vùng đất (阝) nào (哪) kèm âm cuốn lưỡi 儿 (r) đặc trưng phương Bắc = "Ở đâu?" (哪儿 - nǎr).',
                exampleHanzi: '你去哪儿？', examplePinyin: 'Nǐ qù nǎr?', exampleMeaning: 'Bạn đi đâu đấy?'
            },
            {
                id: 9, hanzi: '我', pinyin: 'wǒ', hanViet: 'Ngã', type: 'Đại từ nhân xưng', meaning: 'Tôi, mình, tớ (Ngôi thứ 1)',
                radicals: [{ r: '手', name: 'Bộ Thủ', desc: 'Bàn tay bên trái' }, { r: '戈', name: 'Bộ Qua', desc: 'Cây giáo/vũ khí bên phải' }],
                mnemonic: 'Tay (手) cầm cây giáo (戈) bảo vệ bản thân mình chính là "Tôi" (我 - wǒ). Thêm chữ 们 thành 我们 (wǒmen - Chúng tôi).',
                exampleHanzi: '我很好。', examplePinyin: 'Wǒ hěn hǎo.', exampleMeaning: 'Tôi rất khỏe.'
            },
            {
                id: 10, hanzi: '再见', pinyin: 'zàijiàn', hanViet: 'Tái kiến', type: 'Động từ / Lời chào', meaning: 'Tạm biệt, hẹn gặp lại',
                radicals: [{ r: '再', name: 'Chữ Tái (zài)', desc: 'Lại một lần nữa' }, { r: '见', name: 'Chữ Kiến (jiàn)', desc: 'Gặp gỡ, nhìn thấy' }],
                mnemonic: '再 (Tái = lặp lại lần nữa) + 见 (Kiến = nhìn thấy, gặp lại, có bộ Nhi 儿 ở dưới) = Hẹn gặp lại (再见). Đọc dứt khoát cả 2 chữ Thanh 4!',
                exampleHanzi: '再见！明天见！', examplePinyin: 'Zàijiàn! Míngtiān jiàn!', exampleMeaning: 'Tạm biệt! Mai gặp lại nhé!'
            },
            {
                id: 11, hanzi: '北京', pinyin: 'Běijīng', hanViet: 'Bắc Kinh', type: 'Danh từ riêng', meaning: 'Thủ đô Bắc Kinh (Trung Quốc)',
                radicals: [{ r: '北', name: 'Chữ Bắc (běi)', desc: 'Phương Bắc (2 người quay lưng)' }, { r: '京', name: 'Chữ Kinh (jīng)', desc: 'Kinh đô lớn (亠+口+小)' }],
                mnemonic: '北 (Bắc = phương Bắc) + 京 (Kinh = kinh đô, gồm mái nhà 亠, cổng thành 口 và bộ Tiểu 小 ở dưới) = Thủ đô Bắc Kinh (北京).',
                exampleHanzi: '明天我去北京。', examplePinyin: 'Míngtiān wǒ qù Běijīng.', exampleMeaning: 'Ngày mai tôi đi Bắc Kinh.'
            },
            {
                id: 12, hanzi: '河内', pinyin: 'Hénèi', hanViet: 'Hà Nội', type: 'Danh từ riêng', meaning: 'Thủ đô Hà Nội (Việt Nam)',
                radicals: [{ r: '氵+可', name: 'Chữ Hà (河 - hé)', desc: 'Dòng sông (Bộ Chấm thủy 氵)' }, { r: '冂+人', name: 'Chữ Nội (内 - nèi)', desc: 'Bên trong (Người 人 ở trong khung 冂)' }],
                mnemonic: '河 (Hà = dòng sông, có 3 giọt nước 氵 bên trái + chữ Khả 可 bên phải) + 内 (Nội = bên trong) = Thành phố nằm trong lòng các dòng sông: Hà Nội (河内)!',
                exampleHanzi: '今天我去河内。', examplePinyin: 'Jīntiān wǒ qù Hénèi.', exampleMeaning: 'Hôm nay tôi đi Hà Nội.'
            }
        ],
  dialogues: [
            {
                title: 'Hội thoại 1: Hỏi Thứ trong tuần & Lịch học tiếng Hán',
                lines: [
                    { speaker: 'A', hanzi: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', vn: 'Hôm nay là thứ mấy?', note: 'Đã có đại từ nghi vấn 几 (jǐ) nên không dùng 吗 ở cuối câu.' },
                    { speaker: 'B', hanzi: '今天星期二。', pinyin: 'Jīntiān xīngqī èr.', vn: 'Hôm nay là thứ Ba.', note: 'Công thức: Số 2 (二) + 1 = Thứ Ba tiếng Việt.' },
                    { speaker: 'A', hanzi: '明天星期三吗？', pinyin: 'Míngtiān xīngqī sān ma?', vn: 'Ngày mai là thứ Tư phải không?', note: 'Câu hỏi Có/Không nên dùng trợ từ 吗 (ma) ở cuối câu.' },
                    { speaker: 'B', hanzi: '明天星期三，我去学习汉语。', pinyin: 'Míngtiān xīngqī sān, wǒ qù xuéxí Hànyǔ.', vn: 'Ngày mai là thứ Tư, tôi đi học tiếng Hán.', note: 'Kết hợp kiến thức Bài 2 (学习汉语) và Bài 3 (去).' }
                ]
            },
            {
                title: 'Hội thoại 2: Hỏi đi đâu (北京 / 河内) & Chào tạm biệt (再见)',
                lines: [
                    { speaker: 'A', hanzi: '明天你去哪儿？', pinyin: 'Míngtiān nǐ qù nǎr?', vn: 'Ngày mai bạn đi đâu?', note: '明天 có thể đặt trước 你 hoặc sau 你 (你明天去哪儿？). Đọc cuốn lưỡi chữ 哪儿 (nǎr).' },
                    { speaker: 'B', hanzi: '明天我去北京。你去不去？', pinyin: 'Míngtiān wǒ qù Běijīng. Nǐ qù bú qù?', vn: 'Ngày mai tôi đi Bắc Kinh. Bạn có đi không?', note: 'Chữ 不 đứng trước 去 (Thanh 4) biến điệu thành bú qù!' },
                    { speaker: 'A', hanzi: '我不去北京，我去河内。', pinyin: 'Wǒ bú qù Běijīng, wǒ qù Hénèi.', vn: 'Tôi không đi Bắc Kinh, tôi đi Hà Nội.', note: '北京 (Běijīng - Bắc Kinh) và 河内 (Hénèi - Hà Nội).' },
                    { speaker: 'B', hanzi: '好，再见！明天见！', pinyin: 'Hǎo, zàijiàn! Míngtiān jiàn!', vn: 'Được, tạm biệt! Hẹn gặp lại ngày mai!', note: 'Đọc dứt khoát các âm Thanh 4: zàijiàn, jiàn.' }
                ]
            }
        ],
  quiz: [
            {
                q: 'Câu 1: Trong 3 thanh mẫu đầu lưỡi trước (z, c, s), âm nào là "Âm bật hơi mạnh" làm bay tờ giấy trước miệng?',
                speakWord: '雌',
                options: ['Thanh mẫu z', 'Thanh mẫu c', 'Thanh mẫu s', 'Cả z và s'],
                correct: 1,
                explanation: 'Thanh mẫu "c" là âm đầu lưỡi trước BẬT HƠI MẠNH (đầu lưỡi tì mặt sau răng trên rồi bật hơi mạnh ra ngoài). Còn "z" không bật hơi, "s" là âm xát nhẹ.'
            },
            {
                q: 'Câu 2: Khi vận mẫu "i" ghép sau nhóm thanh mẫu "z, c, s" (tạo thành zi, ci, si), chữ "i" được phát âm như thế nào?',
                speakWord: '资',
                options: [
                    'Đọc là "i" giống như trong chữ bi, mi, di',
                    'Đọc là "ư" (zi = chư/tư, ci = chư bật hơi, si = xư)',
                    'Đọc tròn môi là "uy"',
                    'Đọc là "ơ" uốn lưỡi'
                ],
                correct: 1,
                explanation: 'Quy tắc vàng Bài 3: Chữ "i" khi đi sau z, c, s (và zh, ch, sh, r) bắt buộc đọc là "ư", hoàn toàn khác với di, ti, ni, li đọc là "i".'
            },
            {
                q: 'Câu 3: Trong tiếng Trung, "星期四" (xīngqī sì) tương ứng với thứ mấy trong tiếng Việt?',
                speakWord: '星期四',
                options: ['Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
                correct: 1,
                explanation: 'Tiếng Trung tính ngày đầu tuần là số 1 (星期一 = Thứ Hai). Do đó 星期四 (số 4) + 1 = Thứ Năm trong tiếng Việt!'
            },
            {
                q: 'Câu 4: Để nói "Chủ nhật" trong tiếng Trung, cách nói nào sau đây là ĐÚNG chuẩn?',
                speakWord: '星期天',
                options: [
                    '星期七 (xīngqī qī)',
                    '星期天 (xīngqītiān) hoặc 星期日 (xīngqīrì)',
                    '星期八 (xīngqī bā)',
                    '星期九 (xīngqī jiǔ)'
                ],
                correct: 1,
                explanation: 'Người Trung Quốc tuyệt đối KHÔNG nói "星期七" mà dùng "星期天" (văn nói) hoặc "星期日" (văn viết) để chỉ Chủ nhật.'
            },
            {
                q: 'Câu 5: Chọn phiên âm Pinyin và cách đọc đúng của 2 số đếm: "六 (số 6)" và "九 (số 9)"?',
                speakWord: '六',
                options: [
                    '六 (lù - đọc là lu) và 九 (jiǔ - đọc là chiu)',
                    '六 (liù - đọc là liâu, Thanh 4) và 九 (jiǔ - đọc là chiểu, Thanh 3)',
                    '六 (qī - đọc là chi) và 九 (bā - đọc là pa)',
                    '六 (sì - đọc là xư) và 九 (shí - đọc là sứ)'
                ],
                correct: 1,
                explanation: 'Vận mẫu iu là viết tắt của iou, nên 六 (liù) đọc rõ âm "ô/âu" ở giữa là "liâu" (Thanh 4), còn 九 (jiǔ) đọc là "chiểu" (Thanh 3).'
            },
            {
                q: 'Câu 6: Khi nói "Tôi không đi" (我不去), cụm "不去" phát âm chuẩn theo quy tắc biến điệu như thế nào?',
                speakWord: '不去',
                options: [
                    'Đọc là bù qù (giữ nguyên hai Thanh 4)',
                    'Đọc là bú qù (chữ 不 biến thành Thanh 2 vì đứng trước 去 mang Thanh 4)',
                    'Đọc là bǔ qù (chữ 不 biến thành Thanh 3)',
                    'Đọc là bū qù (chữ 不 biến thành Thanh 1)'
                ],
                correct: 1,
                explanation: 'Theo quy tắc biến điệu của chữ 不 (bù): Khi đứng trước một âm tiết mang Thanh 4 (như 去 qù), chữ 不 đổi sang Thanh 2 → đọc là "bú qù".'
            },
            {
                q: 'Câu 7: Câu nào dưới đây đặt vị trí từ chỉ thời gian "明天 (ngày mai)" SAI ngữ pháp tiếng Trung?',
                speakWord: '明天我去北京',
                options: [
                    '明天我去北京。 (Míngtiān wǒ qù Běijīng.)',
                    '我明天去北京。 (Wǒ míngtiān qù Běijīng.)',
                    '我去北京明天。 (Wǒ qù Běijīng míngtiān.)',
                    'Cả A và B đều đúng ngữ pháp'
                ],
                correct: 2,
                explanation: 'Danh từ chỉ thời gian (今天, 明天, 昨天, 星期...) chỉ được đặt TRƯỚC chủ ngữ hoặc ngay SAU chủ ngữ (trước động từ), tuyệt đối không đặt ở cuối câu như tiếng Việt.'
            },
            {
                q: 'Câu 8: Vì sao câu hỏi "今天星期几吗？" lại SAI ngữ pháp?',
                speakWord: '今天星期几',
                options: [
                    'Vì thiếu động từ 去',
                    'Vì trong câu đã có đại từ nghi vấn "几 (mấy)" nên cấm thêm trợ từ nghi vấn "吗" ở cuối câu',
                    'Vì chữ 今天 không được đứng đầu câu',
                    'Vì phải thay 吗 bằng 呢'
                ],
                correct: 1,
                explanation: 'Khi câu hỏi đã chứa đại từ nghi vấn (như 几 - mấy, 哪儿 - ở đâu), bản thân từ đó đã tạo thành câu hỏi nên tuyệt đối không được thêm 吗 vào cuối câu.'
            },
            {
                q: 'Câu 9: Chữ Hán nào dưới đây mang nghĩa là thủ đô "Hà Nội" (gồm Bộ Chấm thủy 氵 chỉ dòng sông + chữ Nội 内 bên trong)?',
                speakWord: '河内',
                options: ['北京 (Běijīng)', '河内 (Hénèi)', '再见 (Zàijiàn)', '星期 (Xīngqī)'],
                correct: 1,
                explanation: '河 (Hà = sông, có bộ chấm thủy 氵) + 内 (Nội = bên trong, khung Quynh 冂 và chữ Nhân 人) = 河内 (Hénèi - Hà Nội).'
            },
            {
                q: 'Câu 10: Giả sử hôm qua là Thứ Bảy (昨天星期六), vậy hôm nay (今天) và ngày mai (明天) nói bằng tiếng Trung như thế nào?',
                speakWord: '今天星期天',
                options: [
                    '今天星期五，明天星期六',
                    '今天星期天，明天星期一',
                    '今天星期七，明天星期八',
                    '今天星期一，明天星期二'
                ],
                correct: 1,
                explanation: 'Hôm qua là Thứ Bảy (星期六) → Hôm nay là Chủ Nhật (今天星期天 / 星期日) → Ngày mai là Thứ Hai đầu tuần mới (明天星期一).'
            }
        ]
};
