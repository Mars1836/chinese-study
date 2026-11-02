import { LessonData } from '../types/lesson';

export const lesson2Data: LessonData = {
  id: 2,
  title: 'Học Tiếng Hán',
  pinyinTitle: 'Xué Hànyǔ',
  hanziTitle: '学习汉语',
  videoDesc: 'Lộ trình Bài 2: 3 Thanh mẫu mặt lưỡi trước (j, q, x), 12 Vận mẫu dòng i và ü, Quy tắc bỏ dấu hai chấm khi ghép với j/q/x, Biến điệu chữ 不 và 13 từ vựng giao tiếp gia đình.',
  videoUrl: 'https://www.youtube.com/watch?v=sLUg6LGlNek',
  initialsGroups: [
            {
                groupTitle: 'Nhóm Âm Mặt Lưỡi Trước (j, q, x) — Chỉ ghép với dòng i và ü',
                groupDesc: 'Mẹo đặt lưỡi của thầy Dương Châu: Đầu lưỡi hạ xuống chạm nhẹ mặt sau răng hàm dưới, mặt lưỡi nâng lên tiếp xúc ngạc cứng, khóe miệng kéo căng sang hai bên như đang cười.',
                items: [
                    {
                        pinyin: 'j',
                        speakChar: '鸡',
                        samplePinyin: 'jī (鸡 - Con gà)',
                        vnTip: 'Đọc như "chi" (không bật hơi)',
                        aspirated: false,
                        detail: 'Đầu lưỡi đặt ở lợi hàm dưới, mặt lưỡi áp vào ngạc cứng rồi mở nhẹ, miệng cười bẹp, KHÔNG bật hơi.'
                    },
                    {
                        pinyin: 'q',
                        speakChar: '七',
                        samplePinyin: 'qī (七 - Số 7)',
                        vnTip: 'Đọc như "chi" nhưng BẬT HƠI mạnh!',
                        aspirated: true,
                        detail: 'Vị trí lưỡi giống hệt chữ j (đầu lưỡi hàm dưới), nhưng đè chặt mặt lưỡi rồi tống mạnh luồng hơi ra ngoài làm bay tờ giấy!'
                    },
                    {
                        pinyin: 'x',
                        speakChar: '西',
                        samplePinyin: 'xī (西 - Phía Tây)',
                        vnTip: 'Đọc như chữ "xi" tiếng Việt',
                        aspirated: false,
                        detail: 'Đầu lưỡi đặt dưới răng hàm dưới, mặt lưỡi gần ngạc cứng tạo khe hẹp cho luồng hơi xát nhẹ ra ngoài, miệng cười bẹp.'
                    }
                ]
            }
        ],
  finalsGroups: [
            {
                groupTitle: 'Dòng 1: 8 Vận Mẫu Bắt Đầu Bằng "i" (Khóe miệng kéo căng sang hai bên)',
                items: [
                    { pinyin: 'ia', speakChar: '呀', vnTip: 'Đọc như "gia / i-a"', detail: 'Đọc lướt nhanh từ âm i sang âm a (VD: j + ia = jiā 家 - Nhà).' },
                    { pinyin: 'ie', speakChar: '耶', vnTip: 'Đọc như "giê / i-ê"', detail: 'Chữ e khi đứng sau i hoặc ü không đọc là "ưa" mà đọc thành âm "ê" (VD: jiě 姐 - Chị gái).' },
                    { pinyin: 'iao', speakChar: '腰', vnTip: 'Đọc như "giao / i-ao"', detail: 'Kết hợp i + ao (VD: xiǎo 小 - Nhỏ bé).' },
                    { pinyin: 'iu (iou)', speakChar: '优', vnTip: 'Đọc như "giâu / i-âu" (Chú ý!)', detail: 'Nguyên gốc là i + ou (iou). Khi ghép với thanh mẫu thì viết tắt bỏ o thành "iu", nhưng phải đọc rõ âm "âu" ở giữa (VD: jiǔ 九 đọc là chiểu, không đọc chiu!).' },
                    { pinyin: 'ian', speakChar: '烟', vnTip: 'Đọc như "gien / i-ên" (Chú ý!)', detail: 'Khi phát âm chữ a trong ian biến âm thành "e/ê", nên đọc là "gien / iên" chứ không đọc là "i-an" (VD: tiān 天 đọc là thiên/thien).' },
                    { pinyin: 'iang', speakChar: '央', vnTip: 'Đọc như "giang / i-ang"', detail: 'Vận mẫu mũi sau: mở rộng khoang miệng ở âm ang (VD: xiāng 香 - Thơm).' },
                    { pinyin: 'in', speakChar: '因', vnTip: 'Đọc như "in" (miệng cười bẹp)', detail: 'Vận mẫu mũi trước: miệng bẹp sang 2 bên, kết thúc đầu lưỡi chạm lợi trên (VD: jīn 今).' },
                    { pinyin: 'ing', speakChar: '英', vnTip: 'Đọc như "inh / i-ưng" (vang mũi sau)', detail: 'Miệng cười bẹp, đầu lưỡi hạ hàm dưới, ngân vang ở khoang mũi sau (VD: Yīngyǔ 英语 - Tiếng Anh).' }
                ]
            },
            {
                groupTitle: 'Dòng 2: 4 Vận Mẫu Bắt Đầu Bằng "ü" (Môi chu tròn từ đầu đến cuối)',
                items: [
                    { pinyin: 'üe', speakChar: '约', vnTip: 'Đọc như "uyê" (Tròn môi!)', detail: 'Bắt đầu bằng âm ü tròn môi rồi lướt sang ê (VD: xué 学 - Học, yuè 月 - Tháng).' },
                    { pinyin: 'üan', speakChar: '冤', vnTip: 'Đọc như "uyên" (Tròn môi!)', detail: 'Môi chu tròn đọc ü + an thành "uyên" (VD: quán 全 - Toàn bộ, yuán 元 - Đồng tệ).' },
                    { pinyin: 'ün', speakChar: '晕', vnTip: 'Đọc như "uyn" (Tròn môi!)', detail: 'Môi chu tròn từ đầu đến cuối đọc như "uyn" (VD: qún 群 - Đám/Bầy, yún 云 - Mây).' },
                    { pinyin: 'iong', speakChar: '拥', vnTip: 'Đọc như "iung / giung" (Tròn môi)', detail: 'Kết hợp i + ong với hai môi chu tròn, vang mũi sau (VD: xiōng 兄 - Huynh, qióng 穷 - Nghèo).' }
                ]
            }
        ],
  practiceSyllables: [
            { pinyin: 'jiā', hanzi: '家', meaning: 'j + ia (Gia đình)', note: 'Không bật hơi' },
            { pinyin: 'qiē', hanzi: '切', meaning: 'q + ie (Cắt/Thái)', note: 'Bật hơi mạnh!' },
            { pinyin: 'xiǎo', hanzi: '小', meaning: 'x + iao (Nhỏ bé)', note: 'Đọc như xẻo' },
            { pinyin: 'jiǔ', hanzi: '九', meaning: 'j + iu (Số 9)', note: 'Đọc là chiểu (i+ou)!' },
            { pinyin: 'qiān', hanzi: '千', meaning: 'q + ian (Một nghìn)', note: 'Bật hơi + vần iên' },
            { pinyin: 'xiāng', hanzi: '香', meaning: 'x + iang (Thơm)', note: 'Âm mũi sau mở miệng' },
            { pinyin: 'jīn', hanzi: '今', meaning: 'j + in (Hôm nay)', note: 'Miệng cười bẹp' },
            { pinyin: 'qīng', hanzi: '青', meaning: 'q + ing (Màu xanh)', note: 'Bật hơi + mũi sau' },
            { pinyin: 'nüè', hanzi: '虐', meaning: 'n + üe (Ngược đãi)', note: 'Giữ nguyên 2 chấm!' },
            { pinyin: 'xiōng', hanzi: '兄', meaning: 'x + iong (Huynh)', note: 'Tròn môi iung' },
            { pinyin: 'liǎ', hanzi: '俩', meaning: 'l + ia (Hai người)', note: 'Ghép l + ia' },
            { pinyin: 'liè', hanzi: '列', meaning: 'l + ie (Hàng lối)', note: 'Đọc như liê' },
            { pinyin: 'miáo', hanzi: '苗', meaning: 'm + iao (Cây mạ)', note: 'Ghép m + iao' },
            { pinyin: 'diū', hanzi: '丢', meaning: 'd + iu (Đánh mất)', note: 'Đọc như tiêu (i+ou)' },
            { pinyin: 'tiān', hanzi: '天', meaning: 't + ian (Bầu trời)', note: 'Bật hơi: thiên!' },
            { pinyin: 'niáng', hanzi: '娘', meaning: 'n + iang (Mẹ/Nương)', note: 'Âm mũi sau' },
            { pinyin: 'pīn', hanzi: '拼', meaning: 'p + in (Ghép âm)', note: 'Bật hơi: phin!' },
            { pinyin: 'tīng', hanzi: '听', meaning: 't + ing (Nghe)', note: 'Bật hơi: thinh!' },
            { pinyin: 'qióng', hanzi: '穷', meaning: 'q + iong (Nghèo)', note: 'Bật hơi + tròn môi' },
            { pinyin: 'lüè', hanzi: '略', meaning: 'l + üe (Chiến lược)', note: 'Giữ nguyên 2 chấm!' }
        ],
  toneContours: [
    { toneNumber: 1, name: 'Thanh 1 (Âm bằng cao)', mark: 'ˉ (yīng)', pitchCode: '55', desc: 'Cao phẳng 55, không hạ giọng.', exampleHanzi: '英', examplePinyin: 'yīng', meaning: 'Tinh anh / Nước Anh' },
    { toneNumber: 2, name: 'Thanh 2 (Đi lên nhanh)', mark: 'ˊ (xué)', pitchCode: '35', desc: 'Từ 3 vút lên 5.', exampleHanzi: '学', examplePinyin: 'xué', meaning: 'Học' },
    { toneNumber: 3, name: 'Thanh 3 (Trầm rồi uốn)', mark: 'ˇ (yǔ)', pitchCode: '214', desc: 'Hạ sâu 2 xuống 1 rồi uốn lên 4.', exampleHanzi: '语', examplePinyin: 'yǔ', meaning: 'Ngôn ngữ' },
    { toneNumber: 4, name: 'Thanh 4 (Dứt khoát rơi)', mark: 'ˋ (tài)', pitchCode: '51', desc: 'Chém dứt khoát từ 5 xuống 1.', exampleHanzi: '太', examplePinyin: 'tài', meaning: 'Quá / Lắm' }
  ],
  toneRules: [
    {
      ruleNum: 1,
      title: 'Biến điệu của chữ 不 (bù → bú trước Thanh 4)',
      formula: 'bù + ˋ (Thanh 4) → bú + ˋ',
      desc: 'Bản gốc chữ 不 là Thanh 4 (bù). Đứng trước chữ mang Thanh 4 đổi thành Thanh 2 (bú). Đứng trước Thanh 1, 2, 3 giữ nguyên bù.',
      examples: [
        { hanzi: '不太', writtenPinyin: 'bù tài', readPinyin: 'bú tài', meaning: 'Không... lắm (trước tài T4)' },
        { hanzi: '不客气', writtenPinyin: 'bù kèqi', readPinyin: 'bú kèqi', meaning: 'Đừng khách sáo / Không có gì' },
        { hanzi: '不难', writtenPinyin: 'bù nán', readPinyin: 'bù nán (Giữ nguyên bù)', meaning: 'Không khó (nán là T2)' },
        { hanzi: '不忙', writtenPinyin: 'bù máng', readPinyin: 'bù máng (Giữ nguyên bù)', meaning: 'Không bận (máng là T2)' }
      ]
    },
    {
      ruleNum: 2,
      title: 'Biến điệu Thanh 3 trong câu (yǔ + hěn → yú hěn)',
      formula: 'ˇ + ˇ → ˊ + ˇ',
      desc: 'Khi hai chữ mang Thanh 3 đi liền nhau (như 语 yǔ và 很 hěn), chữ thứ nhất đổi đọc thành Thanh 2 (yú hěn).',
      examples: [
        { hanzi: '英语很难', writtenPinyin: 'Yīngyǔ hěn nán', readPinyin: 'Yīngyú hěn nán', meaning: 'Tiếng Anh rất khó' },
        { hanzi: '汉语很难', writtenPinyin: 'Hànyǔ hěn nán', readPinyin: 'Hànyú hěn nán', meaning: 'Tiếng Hán rất khó' },
        { hanzi: '很好', writtenPinyin: 'hěn hǎo', readPinyin: 'hén hǎo', meaning: 'Rất tốt' }
      ]
    },
    {
      ruleNum: 3,
      title: 'Quy tắc vàng: j, q, x ghép với ü, üe, üan, ün (BỎ 2 CHẤM)',
      formula: 'j/q/x + ü... → ju, qu, xu (Đọc tròn môi!)',
      desc: 'j, q, x không bao giờ ghép với u thường mà chỉ ghép với ü. Khi viết bỏ 2 chấm, nhưng đọc bắt buộc chu tròn môi.',
      examples: [
        { hanzi: '居', writtenPinyin: 'jū', readPinyin: 'j + ü (chuy)', meaning: 'Ở / Cư trú' },
        { hanzi: '七', writtenPinyin: 'qī', readPinyin: 'chi (bật hơi)', meaning: 'Số 7' },
        { hanzi: '学', writtenPinyin: 'xué', readPinyin: 'x + üe (xuế - tròn môi)', meaning: 'Học' }
      ]
    },
    {
      ruleNum: 4,
      title: 'Quy tắc Vận mẫu i và ü đứng độc lập',
      formula: 'i... → y... và ü... → yu...',
      desc: 'Khi không có thanh mẫu đứng trước, vần i biến thành y (ia→ya, ie→ye, in→yin); vần ü viết thành yu (ü→yu, üe→yue).',
      examples: [
        { hanzi: '月', writtenPinyin: 'yuè', readPinyin: 'ü + e (uyê)', meaning: 'Tháng / Trăng' },
        { hanzi: '英', writtenPinyin: 'yīng', readPinyin: 'in (thêm y)', meaning: 'Tinh anh' },
        { hanzi: '云', writtenPinyin: 'yún', readPinyin: 'ün (uyn)', meaning: 'Đám mây' }
      ]
    }
  ],
  strokes: [
    { name: '1. Nét Ngang (横 - Héng)', symbol: '一', direction: 'Từ trái sang phải', tip: 'Kéo ngang, hơi nhấn nhẹ ở điểm kết thúc.', svgPath: 'M 25 50 L 135 50' },
    { name: '2. Nét Sổ (竖 - Shù)', symbol: '丨', direction: 'Thẳng từ trên xuống', tip: 'Giữ nét đứng thẳng làm cột trụ vững vàng.', svgPath: 'M 80 15 L 80 85' },
    { name: '3. Nét Phẩy (撇 - Piě)', symbol: '丿', direction: 'Trên phải cong xuống dưới trái', tip: 'Đặt bút đậm rồi vuốt nhẹ thanh thoát về trái.', svgPath: 'M 105 18 Q 85 58 40 82' },
    { name: '4. Nét Chấm (点 - Diǎn)', symbol: '丶', direction: 'Trên trái nhấn xuống dưới phải', tip: 'Đầu nhọn, đuôi tròn đậm, không chấm tròn như dấu chấm.', svgPath: 'M 65 30 Q 82 45 95 65' },
    { name: '5. Nét Mác (捺 - Nà)', symbol: '乀', direction: 'Trên trái kéo xuống dưới phải', tip: 'Bắt đầu thanh, xuống chân nhấn đậm rồi vẩy nhẹ.', svgPath: 'M 40 20 Q 75 60 125 80' },
    { name: '6. Nét Hất (提 - Tí)', symbol: '㇀', direction: 'Dưới trái hất lên trên phải', tip: 'Nhấn ở dưới rồi hất nhanh nhọn lên phía trên.', svgPath: 'M 40 75 L 115 30' },
    { name: '7. Nét Móc (钩 - Gōu)', symbol: '亅', direction: 'Cuối nét sổ/ngang móc nhọn', tip: 'Có sổ móc, ngang móc, luôn bật nhẹ mũi bút.', svgPath: 'M 85 15 L 85 75 L 62 62' },
    { name: '8. Nét Gập (折 - Zhé)', symbol: '𠃍', direction: 'Đang kéo thì gập chuyển hướng', tip: 'Gập dứt khoát tại góc vuông chuyển hướng.', svgPath: 'M 35 28 L 115 28 L 115 82' }
  ],
  strokeRules: [
    { ruleNum: 1, title: 'Ngang trước sổ sau (先横后竖)', desc: 'Nét ngang viết trước, nét sổ cắt qua sau.', examples: [{ hanzi: '十', pinyin: 'shí', hv: 'Thập', meaning: 'Số 10' }] },
    { ruleNum: 2, title: 'Phẩy trước mác sau (先撇后捺)', desc: 'Nét phẩy bên trái trước, nét mác bên phải sau.', examples: [{ hanzi: '八', pinyin: 'bā', hv: 'Bát', meaning: 'Số 8' }] },
    { ruleNum: 3, title: 'Trên trước dưới sau (从上到下)', desc: 'Viết từng tầng từ trên xuống dưới.', examples: [{ hanzi: '三', pinyin: 'sān', hv: 'Tam', meaning: 'Số 3' }, { hanzi: '爸', pinyin: 'bà', hv: 'Phụ', meaning: 'Bố' }] },
    { ruleNum: 4, title: 'Trái trước phải sau (从左到右)', desc: 'Viết bộ bên trái rồi đến bộ bên phải.', examples: [{ hanzi: '汉', pinyin: 'hàn', hv: 'Hán', meaning: 'Tiếng Hán' }, { hanzi: '语', pinyin: 'yǔ', hv: 'Ngữ', meaning: 'Ngôn ngữ' }] },
    { ruleNum: 5, title: 'Ngoài trước trong sau (从外到内)', desc: 'Bao khung ngoài trước, viết ruột bên trong sau.', examples: [{ hanzi: '月', pinyin: 'yuè', hv: 'Nguyệt', meaning: 'Mặt trăng' }] },
    { ruleNum: 6, title: 'Vào trước đóng sau (先进入后关门)', desc: 'Dựng khung, viết nội dung bên trong rồi mới đóng đáy.', examples: [{ hanzi: '日', pinyin: 'rì', hv: 'Nhật', meaning: 'Mặt trời' }] },
    { ruleNum: 7, title: 'Giữa trước hai bên sau (先中间后两边)', desc: 'Chữ đối xứng: nét chính giữa trước, hai bên sau.', examples: [{ hanzi: '小', pinyin: 'xiǎo', hv: 'Tiểu', meaning: 'Nhỏ bé' }, { hanzi: '学', pinyin: 'xué', hv: 'Học', meaning: 'Học tập' }] }
  ],
  vocab: [
            {
                id: 1,
                hanzi: '学习',
                singleChar: '学',
                pinyin: 'xuéxí (xué)',
                hanViet: 'Học tập',
                type: 'Động từ',
                meaning: 'Học, học tập',
                radicals: [
                    { r: '⺍ + 冖', name: 'Chấm đầu & Bộ Mịch', desc: 'Mái trường che chở' },
                    { r: '子', name: 'Bộ Tử', desc: 'Đứa trẻ đang học' },
                    { r: '习', name: 'Chữ Tập (Bộ Vũ)', desc: 'Chim non vỗ cánh tập bay' }
                ],
                mnemonic: 'Chữ 学 (Học) là đứa trẻ (子) dưới mái nhà (冖) được truyền dạy tri thức. Chữ 习 (Tập) là hình đôi cánh chim non tập bay mỗi ngày. Ghép lại 学习 (xuéxí) là Học tập!',
                exampleHanzi: '你学习汉语吗？',
                examplePinyin: 'Nǐ xuéxí Hànyǔ ma?',
                exampleMeaning: 'Bạn có học tiếng Hán không?'
            },
            {
                id: 2,
                hanzi: '汉语',
                singleChar: '汉',
                pinyin: 'Hànyǔ',
                hanViet: 'Hán ngữ',
                type: 'Danh từ',
                meaning: 'Tiếng Hán, tiếng Trung Quốc',
                radicals: [
                    { r: '氵+ 又', name: 'Chữ Hán (汉)', desc: 'Bộ Chấm thủy (氵) + Bộ Hựu (又 bàn tay)' },
                    { r: '讠+ 五 + 口', name: 'Chữ Ngữ (语)', desc: 'Bộ Ngôn (讠) + Bộ Ngũ (五) + Bộ Khẩu (口)' }
                ],
                mnemonic: 'Chữ 汉 (Hán) bắt nguồn từ dòng sông Hán Thủy (氵). Chữ 语 (Ngữ) gồm lời nói (讠) phát ra từ cái miệng (口) nói được 5 (五) thứ tiếng!',
                exampleHanzi: '我学习汉语。',
                examplePinyin: 'Wǒ xuéxí Hànyǔ.',
                exampleMeaning: 'Tôi học tiếng Hán.'
            },
            {
                id: 3,
                hanzi: '英语',
                singleChar: '英',
                pinyin: 'Yīngyǔ',
                hanViet: 'Anh ngữ',
                type: 'Danh từ',
                meaning: 'Tiếng Anh',
                radicals: [
                    { r: '艹', name: 'Bộ Thảo đầu', desc: 'Hoa cỏ tinh túy' },
                    { r: '央', name: 'Chữ Ương', desc: 'Ở vị trí trung tâm (Bộ Đại 大 + Khung)' }
                ],
                mnemonic: 'Chữ 英 (Anh) có Bộ Thảo đầu (艹) phía trên và chữ Ương (央) phía dưới, chỉ tinh hoa hoặc phiên âm nước Anh (Yīngguó). Ghép với 语 thành 英语 (Tiếng Anh).',
                exampleHanzi: '我姐姐学习英语。',
                examplePinyin: 'Wǒ jiějie xuéxí Yīngyǔ.',
                exampleMeaning: 'Chị gái tôi học tiếng Anh.'
            },
            {
                id: 4,
                hanzi: '太',
                singleChar: '太',
                pinyin: 'tài',
                hanViet: 'Thái',
                type: 'Phó từ chỉ mức độ',
                meaning: 'Quá, lắm (不太: Không... lắm / 太...了: Quá... rồi)',
                radicals: [
                    { r: '大', name: 'Bộ Đại', desc: 'To lớn (Người dang rộng tay chân)' },
                    { r: '丶', name: 'Nét Chấm', desc: 'Thêm 1 dấu chấm ở dưới chữ Đại' }
                ],
                mnemonic: 'Chữ 大 (Đại) vốn đã là "To lớn", thêm một nét chấm (丶) ở dưới thì trở thành "Quá lớn, quá mức" (太 - tài)! Lưu ý: 不太 đọc biến điệu là "bú tài".',
                exampleHanzi: '不太忙',
                examplePinyin: 'bú tài máng',
                exampleMeaning: 'Không bận lắm (Chú ý biến điệu bú!)'
            },
            {
                id: 5,
                hanzi: '难',
                singleChar: '难',
                pinyin: 'nán',
                hanViet: 'Nan',
                type: 'Tính từ',
                meaning: 'Khó, khó khăn',
                radicals: [
                    { r: '又', name: 'Bộ Hựu', desc: 'Bàn tay phải' },
                    { r: '隹', name: 'Bộ Chuy', desc: 'Con chim đuôi ngắn (gồm Nhân đứng 亻 + 4 nét ngang)' }
                ],
                mnemonic: 'Dùng tay không (又) mà muốn bắt được con chim sẻ (隹) đang bay trên trời là việc vô cùng "Khó khăn" (难 - nán)!',
                exampleHanzi: '汉语不太难。',
                examplePinyin: 'Hànyǔ bú tài nán.',
                exampleMeaning: 'Tiếng Hán không khó lắm.'
            },
            {
                id: 6,
                hanzi: '谢谢',
                singleChar: '谢',
                pinyin: 'xièxie',
                hanViet: 'Tạ tạ',
                type: 'Động từ / Giao tiếp',
                meaning: 'Cảm ơn',
                radicals: [
                    { r: '讠', name: 'Bộ Ngôn', desc: 'Lời nói chân thành' },
                    { r: '身', name: 'Bộ Thân', desc: 'Thân mình cúi xuống' },
                    { r: '寸', name: 'Bộ Thốn', desc: 'Phép tắc, chừng mực' }
                ],
                mnemonic: 'Khi nói lời "Cảm ơn" (谢), ta dùng lời nói (讠), cúi tấm thân mình (身) đúng phép tắc chừng mực (寸). Đọc lặp lại 谢谢 (xièxie - chữ sau thanh nhẹ).',
                exampleHanzi: '谢谢你！',
                examplePinyin: 'Xièxie nǐ!',
                exampleMeaning: 'Cảm ơn bạn!'
            },
            {
                id: 7,
                hanzi: '不客气',
                singleChar: '客',
                pinyin: 'bú kèqi',
                hanViet: 'Bất khách khí',
                type: 'Cụm giao tiếp',
                meaning: 'Đừng khách sáo / Không có gì (Đáp lại lời cảm ơn)',
                radicals: [
                    { r: '宀 + 夂 + 口', name: 'Chữ Khách (客)', desc: 'Dưới mái nhà (宀), bước chân khách đến (夂) dùng miệng (口) chào hỏi' },
                    { r: '气', name: 'Bộ Khí (气)', desc: 'Không khí, thái độ cử chỉ' }
                ],
                mnemonic: '客气 (kèqi) là khách sáo. Thêm 不 (bù) đứng trước 客 (kè - Thanh 4) nên biến điệu thành "bú kèqi" (Đừng khách sáo / Không có gì)!',
                exampleHanzi: '不客气！',
                examplePinyin: 'Bú kèqi!',
                exampleMeaning: 'Không có gì đâu / Đừng khách sáo!'
            },
            {
                id: 8,
                hanzi: '爸爸',
                singleChar: '爸',
                pinyin: 'bàba',
                hanViet: 'Bá',
                type: 'Danh từ',
                meaning: 'Bố, ba, cha',
                radicals: [
                    { r: '父', name: 'Bộ Phụ (Cha)', desc: 'Hình người cha uy nghiêm ở phía trên' },
                    { r: '巴', name: 'Chữ Ba', desc: 'Gợi âm đọc "ba" ở phía dưới' }
                ],
                mnemonic: 'Chữ 爸 là chữ hình thanh điển hình: nửa trên là Bộ Phụ (父 - nghĩa là Cha), nửa dưới là chữ Ba (巴 - gợi âm đọc "bà").',
                exampleHanzi: '你爸爸好吗？',
                examplePinyin: 'Nǐ bàba hǎo ma?',
                exampleMeaning: 'Bố của bạn có khỏe không?'
            },
            {
                id: 9,
                hanzi: '妈妈',
                singleChar: '妈',
                pinyin: 'māma',
                hanViet: 'Má',
                type: 'Danh từ',
                meaning: 'Mẹ, má',
                radicals: [
                    { r: '女', name: 'Bộ Nữ', desc: 'Người phụ nữ (chỉ ý nghĩa)' },
                    { r: '马', name: 'Bộ Mã', desc: 'Con ngựa (chỉ âm đọc "ma")' }
                ],
                mnemonic: 'Người phụ nữ (女) vất vả chăm con suốt ngày đêm bền bỉ như ngựa (马) chính là "Mẹ" (妈妈 - māma).',
                exampleHanzi: '你爸爸妈妈好吗？',
                examplePinyin: 'Nǐ bàba māma hǎo ma?',
                exampleMeaning: 'Bố mẹ bạn có khỏe không?'
            },
            {
                id: 10,
                hanzi: '哥哥',
                singleChar: '哥',
                pinyin: 'gēge',
                hanViet: 'Ca ca',
                type: 'Danh từ',
                meaning: 'Anh trai',
                radicals: [
                    { r: '可', name: 'Chữ Khả (trên)', desc: 'Gồm chữ Đinh + Bộ Khẩu (口)' },
                    { r: '可', name: 'Chữ Khả (dưới)', desc: 'Hai chữ Khả (可) chồng lên nhau' }
                ],
                mnemonic: 'Hai chữ Khả (可) chồng lên nhau tạo thành chữ Ca (哥 - Anh trai): Người anh cả luôn vững vàng gánh vác việc gia đình.',
                exampleHanzi: '你哥哥忙吗？',
                examplePinyin: 'Nǐ gēge máng ma?',
                exampleMeaning: 'Anh trai bạn có bận không?'
            },
            {
                id: 11,
                hanzi: '弟弟',
                singleChar: '弟',
                pinyin: 'dìdi',
                hanViet: 'Đệ đệ',
                type: 'Danh từ',
                meaning: 'Em trai',
                radicals: [
                    { r: '丷', name: 'Hai nét chấm phẩy', desc: 'Giống chiếc sừng nhỏ nghịch ngợm' },
                    { r: '弓', name: 'Bộ Cung', desc: 'Cây cung tên' },
                    { r: '丨+ 丿', name: 'Nét Sổ & Phẩy', desc: 'Mũi tên xuyên qua cây cung' }
                ],
                mnemonic: 'Cậu "Em trai" (弟弟 - dìdi) tinh nghịch thích cầm cây cung (弓) và mũi tên chạy nhảy.',
                exampleHanzi: '我弟弟学习英语。',
                examplePinyin: 'Wǒ dìdi xuéxí Yīngyǔ.',
                exampleMeaning: 'Em trai tôi học tiếng Anh.'
            },
            {
                id: 12,
                hanzi: '姐姐',
                singleChar: '姐',
                pinyin: 'jiějie',
                hanViet: 'Tỷ tỷ',
                type: 'Danh từ',
                meaning: 'Chị gái',
                radicals: [
                    { r: '女', name: 'Bộ Nữ', desc: 'Phái nữ' },
                    { r: '且', name: 'Chữ Thả', desc: 'Hình các bậc thang cao lên (người chị lớn hơn)' }
                ],
                mnemonic: 'Người con gái (女) sinh ra trước, cao hơn các em từng bậc (且) là "Chị gái" (姐姐 - jiějie).',
                exampleHanzi: '你姐姐好吗？',
                examplePinyin: 'Nǐ jiějie hǎo ma?',
                exampleMeaning: 'Chị gái bạn có khỏe không?'
            },
            {
                id: 13,
                hanzi: '妹妹',
                singleChar: '妹',
                pinyin: 'mèimei',
                hanViet: 'Muội muội',
                type: 'Danh từ',
                meaning: 'Em gái',
                radicals: [
                    { r: '女', name: 'Bộ Nữ', desc: 'Phái nữ' },
                    { r: '未', name: 'Chữ Vị', desc: 'Nghĩa là "chưa" (nét ngang trên ngắn hơn nét ngang dưới - cây chưa lớn hẳn)' }
                ],
                mnemonic: 'Người con gái (女) còn nhỏ, chưa (未) trưởng thành hẳn chính là cô "Em gái" (妹妹 - mèimei).',
                exampleHanzi: '我妹妹也学习汉语。',
                examplePinyin: 'Wǒ mèimei yě xuéxí Hànyǔ.',
                exampleMeaning: 'Em gái tôi cũng học tiếng Hán.'
            }
        ],
  dialogues: [
            {
                title: 'Hội thoại 1 (Bài khóa chuẩn): Hỏi thăm việc học tiếng Hán & Độ khó',
                lines: [
                    { speaker: 'A', hanzi: '你学习汉语吗？', pinyin: 'Nǐ xuéxí Hànyǔ ma?', vn: 'Bạn có học tiếng Hán không?', note: 'xuéxí (学习): chữ xué là x + üe bỏ dấu 2 chấm, đọc tròn môi.' },
                    { speaker: 'B', hanzi: '我学习汉语。', pinyin: 'Wǒ xuéxí Hànyǔ.', vn: 'Tôi học tiếng Hán.', note: 'Cấu trúc S + V + O giống trật tự tiếng Việt.' },
                    { speaker: 'A', hanzi: '汉语难吗？', pinyin: 'Hànyǔ nán ma?', vn: 'Tiếng Hán có khó không?', note: '难 (nán - Thanh 2): Khó.' },
                    { speaker: 'B', hanzi: '汉语不太难。', pinyin: 'Hànyǔ bú tài nán.', vn: 'Tiếng Hán không khó lắm.', note: '不太 (bú tài): 不 biến điệu thành Thanh 2 trước 太 (Thanh 4).' }
                ]
            },
            {
                title: 'Hội thoại 2: Hỏi thăm gia đình (爸爸妈妈) & Cảm ơn - Đáp lễ',
                lines: [
                    { speaker: 'A', hanzi: '你爸爸妈妈好吗？', pinyin: 'Nǐ bàba māma hǎo ma?', vn: 'Bố mẹ của bạn có khỏe không?', note: 'Đại từ 你 ghép trực tiếp với 爸爸妈妈 để chỉ sở hữu thân mật.' },
                    { speaker: 'B', hanzi: '他们都很好。谢谢！', pinyin: 'Tāmen dōu hěn hǎo. Xièxie!', vn: 'Họ đều rất khỏe. Cảm ơn bạn!', note: '谢谢 (xièxie): âm thứ hai đọc thanh nhẹ.' },
                    { speaker: 'A', hanzi: '不客气！', pinyin: 'Bú kèqi!', vn: 'Không có gì / Đừng khách sáo!', note: '不 đứng trước 客 (kè - Thanh 4) đọc thành bú kèqi.' }
                ]
            },
            {
                title: 'Hội thoại 3: Hỏi thăm anh chị em & So sánh tiếng Anh - tiếng Hán',
                lines: [
                    { speaker: 'A', hanzi: '你学习英语吗？', pinyin: 'Nǐ xuéxí Yīngyǔ ma?', vn: 'Bạn có học tiếng Anh không?', note: '英语 (Yīngyǔ): Tiếng Anh.' },
                    { speaker: 'B', hanzi: '我不学习英语，我弟弟学习英语。', pinyin: 'Wǒ bù xuéxí Yīngyǔ, wǒ dìdi xuéxí Yīngyǔ.', vn: 'Tôi không học tiếng Anh, em trai tôi học tiếng Anh.', note: '不 đứng trước 学 (xué - Thanh 2) giữ nguyên là bù.' },
                    { speaker: 'A', hanzi: '你哥哥忙吗？', pinyin: 'Nǐ gēge máng ma?', vn: 'Anh trai bạn có bận không?', note: '哥哥 (gēge): Anh trai.' },
                    { speaker: 'B', hanzi: '他不太忙。', pinyin: 'Tā bú tài máng.', vn: 'Anh ấy không bận lắm.', note: '不太忙 đọc là bú tài máng.' }
                ]
            }
        ],
  quiz: [
            {
                q: 'Câu 1: Trong nhóm thanh mẫu mặt lưỡi "j, q, x", âm nào là ÂM BẬT HƠI MẠNH (làm bay tờ giấy trước miệng)?',
                speakWord: '七',
                options: [
                    'Thanh mẫu j (như trong 鸡 jī)',
                    'Thanh mẫu q (như trong 七 qī - đè chặt lưỡi hàm dưới rồi tống mạnh luồng hơi ra)',
                    'Thanh mẫu x (như trong 西 xī)',
                    'Cả 3 âm j, q, x đều không bật hơi'
                ],
                correct: 1,
                explanation: 'Thanh mẫu q là âm bật hơi mạnh: vị trí lưỡi giống hệt chữ j (đầu lưỡi đặt lợi hàm dưới, đọc như "chi") nhưng phải bật mạnh luồng hơi từ phổi ra làm bay tờ giấy.'
            },
            {
                q: 'Câu 2: Tại sao chữ "学" (Học) được viết Pinyin là "xué" (không có dấu hai chấm trên chữ u) nhưng lại phải đọc tròn môi là "xuế"?',
                speakWord: '学',
                options: [
                    'Vì người in sách viết thiếu dấu hai chấm',
                    'Vì quy tắc Pinyin: Khi j, q, x ghép với ü, üe, üan, ün thì bắt buộc BỎ DẤU HAI CHẤM trên đầu chữ ü, nhưng cách đọc vẫn giữ nguyên là âm tròn môi ü',
                    'Vì chữ u sau x đọc giống hệt chữ u trong bu, pu',
                    'Vì chữ x chỉ ghép với u thường'
                ],
                correct: 1,
                explanation: 'Quy tắc vàng Bài 2: Ba thanh mẫu j, q, x không bao giờ ghép với u thường mà chỉ ghép với ü. Khi viết Pinyin, người ta lược bỏ dấu 2 chấm (ju, qu, xu, jue, que, xue...), nhưng bắt buộc phải đọc tròn môi là ü!'
            },
            {
                q: 'Câu 3: Ngược lại với j, q, x, tại sao khi "n" và "l" ghép với "ü, üe" (như nǚ 女, lüè 略) ta PHẢI GIỮ NGUYÊN dấu hai chấm?',
                speakWord: '女',
                options: [
                    'Để trang trí cho đẹp',
                    'Vì n và l ghép được với cả u thường (nu, lu) lẫn ü tròn môi (nü, lü), nếu bỏ dấu hai chấm sẽ bị nhầm lẫn hai âm khác nhau',
                    'Vì n và l là âm bật hơi',
                    'Có thể bỏ dấu hai chấm tùy ý'
                ],
                correct: 1,
                explanation: 'Thanh mẫu n và l vừa ghép được với u (nu 奴, lu 路) vừa ghép được với ü (nǚ 女, lǜ 绿). Do đó bắt buộc phải giữ nguyên dấu hai chấm trên ü để phân biệt.'
            },
            {
                q: 'Câu 4: Vận mẫu "ian" (như trong 天 tiān, 千 qiān) và "iu" (như trong 九 jiǔ) được phát âm chuẩn như thế nào?',
                speakWord: '九',
                options: [
                    'Đọc y hệt chữ "ian" và "iu" trong tiếng Việt',
                    '"ian" đọc nghiêng về "i-en / gien"; còn "iu" (viết tắt của iou) phải đọc rõ âm "âu" ở giữa thành "i-âu / giâu" (jiǔ đọc là chiểu)',
                    'Cả hai đều đọc thành âm u tròn môi',
                    'Bỏ nguyên âm ở cuối khi đọc'
                ],
                correct: 1,
                explanation: 'Thầy Dương Châu nhấn mạnh: "ian" đọc là "gien/iên" (không đọc i-an), còn "iu" bản chất là "i + ou (iou)" nên khi ghép với j thành jiǔ (九) phải đọc là "chiểu" (không đọc chiu).'
            },
            {
                q: 'Câu 5: Khi cụm từ "不太难" (Không khó lắm) và "不客气" (Đừng khách sáo) có chữ 不 đứng trước 太 (tài - Thanh 4) và 客 (kè - Thanh 4), ta đọc biến điệu như thế nào?',
                speakWord: '不太难',
                options: [
                    'bù tài nán và bù kèqi (giữ nguyên Thanh 4)',
                    'bú tài nán và bú kèqi (chữ 不 biến điệu thành Thanh 2 là "bú")',
                    'bǔ tài nán và bǔ kèqi (đổi thành Thanh 3)',
                    'bū tài nán và bū kèqi (đổi thành Thanh 1)'
                ],
                correct: 1,
                explanation: 'Theo quy tắc biến điệu của chữ 不 (bù): Khi đứng trước một âm tiết mang Thanh 4 (như tài 太, kè 客), chữ 不 đổi thành Thanh 2 (bú tài nán, bú kèqi).'
            },
            {
                q: 'Câu 6: Chữ "汉" (Hán trong 汉语 Hànyǔ) gồm hai bộ thủ nào ghép lại?',
                speakWord: '汉语',
                options: [
                    'Bộ Ngôn (讠) và Bộ Ngũ (五)',
                    'Bộ Chấm thủy (氵- 3 giọt nước chỉ sông Hán Thủy) bên trái và Bộ Hựu (又 - bàn tay) bên phải',
                    'Bộ Thảo đầu (艹) và chữ Ương (央)',
                    'Bộ Nữ (女) và Bộ Tử (子)'
                ],
                correct: 1,
                explanation: 'Chữ 汉 (Hán) có Bộ Chấm thủy (氵) bên trái gợi nhắc dòng sông Hán Thủy và Bộ Hựu (又) ở bên phải.'
            },
            {
                q: 'Câu 7: Chữ "难" (nán - Khó) và chữ "谢" (xiè - Cảm ơn) được chiết tự từ những bộ thủ nào?',
                speakWord: '谢谢',
                options: [
                    '难 = Bộ Hựu (又 tay) + Bộ Chuy (隹 chim đuôi ngắn); 谢 = Bộ Ngôn (讠 lời nói) + Bộ Thân (身 cơ thể) + Bộ Thốn (寸 phép tắc)',
                    '难 = Bộ Khẩu + Bộ Mã; 谢 = Bộ Nhân + Bộ Dã',
                    '难 = Bộ Phụ + Chữ Ba; 谢 = Bộ Nữ + Chữ Vị',
                    'Cả hai chữ đều chỉ có 1 bộ thủ duy nhất'
                ],
                correct: 0,
                explanation: 'Dùng tay (又) bắt chim sẻ (隹) là việc Khó (难). Dùng lời nói (讠), cúi tấm thân (身) đúng chừng mực (寸) là Cảm ơn (谢).'
            },
            {
                q: 'Câu 8: Khi người khác nói "谢谢！" (Xièxie! - Cảm ơn!), bạn đáp lại lịch sự bằng câu nào trong Bài 2?',
                speakWord: '不客气',
                options: [
                    '你好吗？ (Nǐ hǎo ma?)',
                    '不客气！ (Bú kèqi! — Đừng khách sáo / Không có gì!)',
                    '不太忙！ (Bú tài máng!)',
                    '汉语很难！ (Hànyǔ hěn nán!)'
                ],
                correct: 1,
                explanation: 'Để đáp lại lời cảm ơn (谢谢), người Trung Quốc dùng cụm "不客气！" (Bú kèqi! - Đừng khách sáo / Không có gì).'
            },
            {
                q: 'Câu 9: Trong 6 từ chỉ người thân Bài 2 (爸爸, 妈妈, 哥哥, 弟弟, 姐姐, 妹妹), hai chữ nào có Bộ Nữ (女) ở bên trái?',
                speakWord: '姐姐',
                options: [
                    '爸爸 (bàba) và 哥哥 (gēge)',
                    '哥哥 (gēge) và 弟弟 (dìdi)',
                    '姐姐 (jiějie - Chị gái) và 妹妹 (mèimei - Em gái) (cùng với 妈妈 māma - Mẹ)',
                    '爸爸 (bàba) và 弟弟 (dìdi)'
                ],
                correct: 2,
                explanation: 'Các từ chỉ người thân phái nữ gồm 妈妈 (Mẹ), 姐姐 (Chị gái: Bộ Nữ 女 + chữ Thả 且) và 妹妹 (Em gái: Bộ Nữ 女 + chữ Vị 未) đều có Bộ Nữ (女) ở bên trái.'
            },
            {
                q: 'Câu 10: Câu "英语难，汉语不难。" (Tiếng Anh khó, tiếng Hán không khó) tại sao không dùng chữ "很" trước chữ "难"?',
                speakWord: '英语难，汉语不难。',
                options: [
                    'Vì người nói quên chữ 很',
                    'Vì khi câu vị ngữ tính từ lược bỏ phó từ 很 ở vế khẳng định, câu đó mang hàm ý SO SÁNH đối lập trực tiếp giữa hai sự vật (Tiếng Anh và Tiếng Hán)',
                    'Vì chữ 难 không bao giờ đi với 很',
                    'Vì câu này là câu hỏi'
                ],
                correct: 1,
                explanation: 'Trong tiếng Trung, câu khẳng định với tính từ đơn âm tiết nếu không có phó từ chỉ mức độ (như 很, 太) sẽ mang nghĩa so sánh đối chiếu: 英语难，汉语不难 (Tiếng Anh thì khó, còn tiếng Hán thì không khó).'
            }
        ]
};
