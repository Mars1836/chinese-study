import { LessonData } from '../types/lesson';

export const lesson4Data: LessonData = {
  id: 4,
  title: 'Bạn Là Người Nước Nào?',
  pinyinTitle: 'Nǐ shì nǎ guó rén',
  hanziTitle: '你是哪国人',
  videoDesc: 'Lộ trình Bài 4: 4 Thanh mẫu uốn lưỡi (zh, ch, sh, r), Vận mẫu cuốn lưỡi er và âm uốn lưỡi, Cấu trúc câu chữ Thị (是), Hỏi quốc tịch và chào hỏi làm quen.',
  videoUrl: 'https://www.youtube.com/watch?v=sLUg6LGlNek',
  initialsGroups: [
    {
      groupTitle: '4 Thanh mẫu uốn lưỡi / đầu lưỡi sau (zh, ch, sh, r)',
      groupDesc: 'Đầu lưỡi cong lên chạm vào ngạc cứng trên. Chú ý ch bật hơi mạnh, r rung nhẹ.',
      items: [
            {
                pinyin: 'zh',
                speakChar: '知',
                vnTip: 'Đọc như "tr" nặng ("trư")',
                aspirated: false,
                posture: 'Đầu lưỡi đặt ở phần gồ ghề sau lợi hàm trên, uốn nhẹ lưỡi, hơi trề môi dưới, KHÔNG bật hơi.'
            },
            {
                pinyin: 'ch',
                speakChar: '吃',
                vnTip: 'Đọc như "trư" nhưng BẬT HƠI mạnh',
                aspirated: true,
                posture: 'Đè chặt đầu lưỡi vào phần gồ ghề ở ngạc cứng rồi đẩy luồng hơi bật mạnh ra ngoài làm bay tờ giấy.'
            },
            {
                pinyin: 'sh',
                speakChar: '诗',
                vnTip: 'Đọc như "s" nặng ("sư")',
                aspirated: false,
                posture: 'Đầu lưỡi cong lên gần chạm ngạc cứng trước, hơi trề môi dưới, luồng hơi ma sát thoát ra êm.'
            },
            {
                pinyin: 'r',
                speakChar: '日',
                vnTip: 'Đọc như "rư" mềm (KHÔNG rung lưỡi)',
                aspirated: false,
                posture: 'Khẩu hình cong lưỡi và hơi trề môi giống hệt sh nhưng dây thanh rung. Tuyệt đối không rung lưỡi r-r-r!'
            }
        ]
    }
  ],
  finalsGroups: [
    {
      groupTitle: 'Vận mẫu đặc biệt Bài 4 (Nhóm vần bắt đầu bằng u: ua, uo, uai, uei, uan, uen, uang, ueng)',
      items: [
            {
                pinyin: 'ua',
                fullForm: 'u + a',
                speakChar: '蛙',
                vnTip: 'Đọc như "oa" (qua)',
                warning: 'Chu tròn môi đọc u rồi mở rộng miệng sang a.',
                isCritical: false
            },
            {
                pinyin: 'uai',
                fullForm: 'u + ai',
                speakChar: '歪',
                vnTip: 'Đọc như "oai"',
                warning: 'Môi tròn từ u mở sang a rồi thu về i (như chữ帅 shuài - đẹp trai).',
                isCritical: false
            },
            {
                pinyin: 'ui',
                fullForm: 'Viết tắt của u + ei (uei)',
                speakChar: '威',
                vnTip: 'Đọc là "uây" (CẤM đọc là uy!)',
                warning: 'Ở giữa có âm "e (ê/ơ)" bị ẩn đi khi viết! Ví dụ: 对 (duì) đọc là "tuây", 追 (zhuī) đọc là "truây".',
                isCritical: true
            },
            {
                pinyin: 'uan',
                fullForm: 'u + an',
                speakChar: '弯',
                vnTip: 'Đọc như "oan"',
                warning: 'Khi đi với zh, ch, sh, d, t, g, k, h đọc là "oan". (Nhưng nếu đi với j, q, x thì bản chất là üan đọc là duyên!).',
                isCritical: false
            },
            {
                pinyin: 'un',
                fullForm: 'Viết tắt của u + en (uen)',
                speakChar: '温',
                vnTip: 'Đọc là "uân" (CẤM đọc là un!)',
                warning: 'Ở giữa có âm "e (ơ/â)" bị ẩn! Ví dụ: 顺 (shùn) đọc là "suân", 春 (chūn) đọc là "truân".',
                isCritical: true
            },
            {
                pinyin: 'uang',
                fullForm: 'u + ang',
                speakChar: '汪',
                vnTip: 'Đọc như "oang" (vang mũi sau)',
                warning: 'Mở rộng miệng ở âm ang và ngân vang ở khoang mũi sau.',
                isCritical: false
            }
        ]
    }
  ],
  practiceSyllables: [
            { pinyin: 'zhi', hanzi: '知', vn: 'Đọc là: trư', tip: 'i đọc là ư, không bật hơi' },
            { pinyin: 'chi', hanzi: '吃', vn: 'Đọc là: trư (bật hơi)', tip: 'Ăn (吃) - Bật hơi mạnh!' },
            { pinyin: 'shi', hanzi: '是', vn: 'Đọc là: sư', tip: 'Là (是) - Cong lưỡi' },
            { pinyin: 'ri', hanzi: '日', vn: 'Đọc là: rư (mềm)', tip: 'Không rung lưỡi!' },
            { pinyin: 'zhua', hanzi: '抓', vn: 'Đọc là: troa', tip: 'zh + ua (Không bật hơi)' },
            { pinyin: 'chua', hanzi: '歘', vn: 'Đọc là: troa (bật hơi)', tip: 'CẤM đọc là "chua" tiếng Việt!' },
            { pinyin: 'shuo', hanzi: '说', vn: 'Đọc là: sua', tip: 'Nói (说 shuō) - sh + uo' },
            { pinyin: 'shuai', hanzi: '摔', vn: 'Đọc là: soai', tip: 'sh + uai (Đẹp trai 帅)' },
            { pinyin: 'chuan', hanzi: '穿', vn: 'Đọc là: troan (bật hơi)', tip: 'Mặc (穿) - ch + uan' },
            { pinyin: 'shun', hanzi: '顺', vn: 'Đọc là: suân', tip: 'sh + uen (Thuận lợi)' },
            { pinyin: 'rou', hanzi: '肉', vn: 'Đọc là: râu', tip: 'Thịt (肉) - Không rung lưỡi!' },
            { pinyin: 'zhui', hanzi: '追', vn: 'Đọc là: truây', tip: 'CẤM đọc là "truy"!' }
        ],
  toneContours: [
    { toneNumber: 1, name: 'Thanh 1 (Ngang)', mark: 'ˉ (zhōng)', pitchCode: '55', desc: 'Cao phẳng kéo dài.', exampleHanzi: '中', examplePinyin: 'zhōng', meaning: 'Trung' },
    { toneNumber: 2, name: 'Thanh 2 (Đi lên)', mark: 'ˊ (guó)', pitchCode: '35', desc: 'Vuốt từ 3 lên 5.', exampleHanzi: '国', examplePinyin: 'guó', meaning: 'Nước / Quốc gia' },
    { toneNumber: 3, name: 'Thanh 3 (Trầm uốn)', mark: 'ˇ (nǎ)', pitchCode: '214', desc: 'Hạ trầm xuống đáy rồi uốn lên.', exampleHanzi: '哪', examplePinyin: 'nǎ', meaning: 'Nào / Đâu' },
    { toneNumber: 4, name: 'Thanh 4 (Dứt khoát)', mark: 'ˋ (shì)', pitchCode: '51', desc: 'Chém dứt khoát từ 5 xuống 1.', exampleHanzi: '是', examplePinyin: 'shì', meaning: 'Là / Phải' }
  ],
  toneRules: [
    {
      ruleNum: 1,
      title: 'Quy tắc âm cuốn lưỡi er và đuôi -r (儿化音)',
      formula: 'Âm tiết + r (儿)',
      desc: 'Khi phát âm uốn lưỡi, đầu lưỡi cong lên chạm vòm họng trên tạo âm sắc Bắc Kinh đặc trưng.',
      examples: [
        { hanzi: '哪儿', writtenPinyin: 'nǎr', readPinyin: 'nǎr', meaning: 'Ở đâu / Chỗ nào' },
        { hanzi: '这儿', writtenPinyin: 'zhèr', readPinyin: 'zhèr', meaning: 'Ở đây / Chỗ này' }
      ]
    },
    {
      ruleNum: 2,
      title: 'Cấu trúc câu khẳng định và phủ định với chữ 是 (shì - Là)',
      formula: 'A + 是 + B / A + 不是 (bú shì) + B',
      desc: 'Là vị ngữ trong câu nhận định. Chú ý biến điệu chữ 不: đứng trước 是 (Thanh 4) đọc thành bú shì!',
      examples: [
        { hanzi: '我是越南人', writtenPinyin: 'Wǒ shì Yuènán rén', readPinyin: 'Wǒ shì Yuènán rén', meaning: 'Tôi là người Việt Nam' },
        { hanzi: '我不是中国人', writtenPinyin: 'Wǒ bú shì Zhōngguó rén', readPinyin: 'Wǒ bú shì Zhōngguó rén', meaning: 'Tôi không phải người Trung Quốc' }
      ]
    }
  ],
  strokes: [
    { name: '1. Nét Ngang Gập Cong Móc', symbol: '⺄', direction: 'Ngang gập cong lượn móc', tip: 'Dùng trong chữ 九, 几.', svgPath: 'M 30 35 L 100 35 L 85 70 Q 85 85 110 85 L 125 70' }
  ],
  strokeRules: [
    { ruleNum: 1, title: 'Trên trước dưới sau', desc: 'Áp dụng cho các chữ có tầng lớp.', examples: [{ hanzi: '是', pinyin: 'shì', hv: 'Thị', meaning: 'Là (Nhật 日 trên, Sơ 下 dưới)' }] }
  ],
  vocab: [
            {
                id: 1,
                hanzi: '是',
                pinyin: 'shì',
                hanViet: 'Thị',
                type: 'Động từ',
                meaning: 'Là, phải (Phủ định: 不是 bú shì)',
                radicals: [
                    { r: '日', name: 'Bộ Nhật', desc: 'Mặt trời' },
                    { r: '疋', name: 'Bộ Sơ', desc: 'Bước chân đi thẳng' }
                ],
                mnemonic: 'Dưới ánh mặt trời (日), bước chân đi ngay thẳng (疋) thì luôn "Là" (是) điều đúng đắn. Nhớ: 不是 đọc biến điệu thành "bú shì"!',
                exampleHanzi: '我是越南人。',
                examplePinyin: 'Wǒ shì Yuènán rén.',
                exampleMeaning: 'Tôi là người Việt Nam.'
            },
            {
                id: 2,
                hanzi: '哪',
                pinyin: 'nǎ',
                hanViet: 'Na',
                type: 'Đại từ nghi vấn',
                meaning: 'Nào (Khác với 哪儿 nǎr = ở đâu)',
                radicals: [
                    { r: '口', name: 'Bộ Khẩu', desc: 'Cái miệng để hỏi' },
                    { r: '阝', name: 'Bộ Ấp', desc: 'Vùng đất' }
                ],
                mnemonic: 'Không có bộ Nhi (儿) ở sau nên đọc thẳng lưỡi là "nǎ" (Nào): 哪国 (nǎ guó - nước nào). Nếu có 儿 (哪儿 nǎr) mới là "ở đâu".',
                exampleHanzi: '你是哪国人？',
                examplePinyin: 'Nǐ shì nǎ guó rén?',
                exampleMeaning: 'Bạn là người nước nào?'
            },
            {
                id: 3,
                hanzi: '国',
                pinyin: 'guó',
                hanViet: 'Quốc',
                type: 'Danh từ',
                meaning: 'Nước, quốc gia',
                radicals: [
                    { r: '囗', name: 'Bộ Vi', desc: 'Đường biên giới bao quanh' },
                    { r: '玉', name: 'Bộ Ngọc', desc: 'Ấn ngọc của vua (王 + 丶)' }
                ],
                mnemonic: 'Bên ngoài có biên giới (囗) bảo vệ ấn ngọc của nhà vua (玉) ở bên trong chính là một "Quốc gia" (国).',
                exampleHanzi: '哪国',
                examplePinyin: 'nǎ guó',
                exampleMeaning: 'Nước nào'
            },
            {
                id: 4,
                hanzi: '人',
                pinyin: 'rén',
                hanViet: 'Nhân',
                type: 'Danh từ',
                meaning: 'Người, con người',
                radicals: [
                    { r: '人', name: 'Bộ Nhân', desc: 'Hình hai chân bước đi' }
                ],
                mnemonic: 'Ghép sau tên quốc gia để chỉ người nước đó: 哪国人 (nǎ guó rén - người nước nào).',
                exampleHanzi: '哪国人',
                examplePinyin: 'nǎ guó rén',
                exampleMeaning: 'Người nước nào'
            },
            {
                id: 5,
                hanzi: '越南',
                pinyin: 'Yuènán',
                hanViet: 'Việt Nam',
                type: 'Danh từ riêng',
                meaning: 'Nước Việt Nam (越南人: Người Việt Nam)',
                radicals: [
                    { r: '走+戉', name: 'Chữ Việt (越)', desc: 'Bước chạy vượt qua' },
                    { r: '十+冂+干', name: 'Chữ Nam (南)', desc: 'Phương Nam ấm áp' }
                ],
                mnemonic: 'Vượt (越) qua dãy núi về phương Nam (南) là đất nước Việt Nam (越南).',
                exampleHanzi: '我是越南人。',
                examplePinyin: 'Wǒ shì Yuènán rén.',
                exampleMeaning: 'Tôi là người Việt Nam.'
            },
            {
                id: 6,
                hanzi: '中国',
                pinyin: 'Zhōngguó',
                hanViet: 'Trung Quốc',
                type: 'Danh từ riêng',
                meaning: 'Nước Trung Quốc (中国人: Người Trung Quốc)',
                radicals: [
                    { r: '口+丨', name: 'Chữ Trung (中)', desc: 'Nét sổ xuyên chính giữa' },
                    { r: '国', name: 'Chữ Quốc (国)', desc: 'Đất nước' }
                ],
                mnemonic: 'Chữ Trung (中) có nét sổ chia đôi chính giữa ô vuông. 中国人 (Zhōngguó rén) = Người Trung Quốc.',
                exampleHanzi: '他是中国人。',
                examplePinyin: 'Tā shì Zhōngguó rén.',
                exampleMeaning: 'Anh ấy là người Trung Quốc.'
            },
            {
                id: 7,
                hanzi: '英国',
                pinyin: 'Yīngguó',
                hanViet: 'Anh Quốc',
                type: 'Danh từ riêng',
                meaning: 'Nước Anh (英国人: Người Anh)',
                radicals: [
                    { r: '艹+央', name: 'Chữ Anh (英)', desc: 'Bộ Thảo + chữ Ương' },
                    { r: '国', name: 'Chữ Quốc (国)', desc: 'Đất nước' }
                ],
                mnemonic: 'Ở Bài 2 ta đã học 英语 (Yīngyǔ - Tiếng Anh), nay ghép 英 + 国 = 英国 (Nước Anh).',
                exampleHanzi: '他不是英国人。',
                examplePinyin: 'Tā bú shì Yīngguó rén.',
                exampleMeaning: 'Anh ấy không phải là người Anh.'
            },
            {
                id: 8,
                hanzi: '美国',
                pinyin: 'Měiguó',
                hanViet: 'Mỹ Quốc',
                type: 'Danh từ riêng',
                meaning: 'Nước Mỹ (美国人: Người Mỹ)',
                radicals: [
                    { r: '羊', name: 'Bộ Dương', desc: 'Con dê béo tốt ở trên' },
                    { r: '大', name: 'Bộ Đại', desc: 'To lớn ở dưới' }
                ],
                mnemonic: 'Thời xưa con dê (羊) béo và to lớn (大) là biểu tượng của cái Đẹp (美 - Mỹ). 美国 = Nước Mỹ.',
                exampleHanzi: '你爸爸是美国人吗？',
                examplePinyin: 'Nǐ bàba shì Měiguó rén ma?',
                exampleMeaning: 'Bố bạn là người Mỹ phải không?'
            },
            {
                id: 9,
                hanzi: '韩国',
                pinyin: 'Hánguó',
                hanViet: 'Hàn Quốc',
                type: 'Danh từ riêng',
                meaning: 'Nước Hàn Quốc (韩国人: Người Hàn Quốc)',
                radicals: [
                    { r: '十+日+十', name: '20 ngày nắng', desc: 'Bên trái chữ Hàn' },
                    { r: '韦', name: 'Bộ Viên', desc: 'Da thú thuộc giữ ấm' }
                ],
                mnemonic: 'Xứ sở kim chi lạnh giá suốt 20 ngày (十日十) phải mặc áo da thú (韦) → Hàn Quốc (韩国).',
                exampleHanzi: '她是韩国人吗？',
                examplePinyin: 'Tā shì Hánguó rén ma?',
                exampleMeaning: 'Cô ấy là người Hàn Quốc phải không?'
            },
            {
                id: 10,
                hanzi: '日本',
                pinyin: 'Rìběn',
                hanViet: 'Nhật Bản',
                type: 'Danh từ riêng',
                meaning: 'Nước Nhật Bản (日本人: Người Nhật)',
                radicals: [
                    { r: '日', name: 'Bộ Nhật', desc: 'Mặt trời' },
                    { r: '本', name: 'Chữ Bản', desc: 'Cây (木) đánh dấu gốc rễ' }
                ],
                mnemonic: 'Nơi mặt trời (日) mọc lên từ gốc cây (本) ở phương Đông chính là Nhật Bản (日本).',
                exampleHanzi: '不是，她是日本人。',
                examplePinyin: 'Bú shì, tā shì Rìběn rén.',
                exampleMeaning: 'Không phải, cô ấy là người Nhật Bản.'
            },
            {
                id: 11,
                hanzi: '也',
                pinyin: 'yě',
                hanViet: 'Dã',
                type: 'Phó từ',
                meaning: 'Cũng (Đứng trước động từ / phó từ)',
                radicals: [
                    { r: '乛+丨+乚', name: '3 nét chữ Dã', desc: 'Phần bên phải của chữ 他, 她' }
                ],
                mnemonic: 'Bỏ bộ Nhân (亻) hoặc bộ Nữ (女) ở chữ 他/她 đi chính là chữ Dã (也 - cũng). Nhớ câu 4 thanh 3: 我也很好 (wó yě hén hǎo).',
                exampleHanzi: '我也很好。',
                examplePinyin: 'Wǒ yě hěn hǎo.',
                exampleMeaning: 'Tôi cũng rất khỏe.'
            },
            {
                id: 12,
                hanzi: '对不起',
                pinyin: 'duìbuqǐ',
                hanViet: 'Đối bất khởi',
                type: 'Động từ / Cụm cố định',
                meaning: 'Xin lỗi (Mở rộng: 对 duì = Đúng)',
                radicals: [
                    { r: '又+寸', name: 'Chữ Đối (对)', desc: 'Tay cầm thước đo chuẩn xác = Đúng' },
                    { r: '走+己', name: 'Chữ Khởi (起)', desc: 'Tự mình (己) đứng dậy bước đi (走)' }
                ],
                mnemonic: 'Có lỗi với người ta đến mức không dám ngẩng mặt đứng dậy đối diện (对不起 = Xin lỗi). Đứng lẻ: 对吗？(Đúng không?), 不对 (bú duì - Không đúng).',
                exampleHanzi: '你是中国人，对吗？',
                examplePinyin: 'Nǐ shì Zhōngguó rén, duì ma?',
                exampleMeaning: 'Bạn là người Trung Quốc, đúng không?'
            },
            {
                id: 13,
                hanzi: '没什么',
                pinyin: 'méi shénme',
                hanViet: 'Một thập ma',
                type: 'Cụm cố định',
                meaning: 'Không có gì, không sao đâu (Đáp lại 对不起)',
                radicals: [
                    { r: '氵+殳', name: 'Chữ Một (没)', desc: 'Chìm xuống nước = Không có' },
                    { r: '亻+十', name: 'Chữ Thập (什)', desc: 'Trong từ 什么 (shénme - cái gì)' }
                ],
                mnemonic: 'Khi ai nói 对不起 (Xin lỗi), ta đáp lại 没什么 (Không có gì đâu). Tách riêng: 什么 (shénme) = Cái gì? (VD: 你学习什么？ - Bạn học cái gì?).',
                exampleHanzi: '你学习什么？',
                examplePinyin: 'Nǐ xuéxí shénme?',
                exampleMeaning: 'Bạn học cái gì?'
            },
            {
                id: 14,
                hanzi: '朋友',
                pinyin: 'péngyou',
                hanViet: 'Bằng hữu',
                type: 'Danh từ',
                meaning: 'Bạn, người bạn, bạn bè',
                radicals: [
                    { r: '月+月', name: 'Chữ Bằng (朋)', desc: 'Hai vầng trăng song hành' },
                    { r: '𠂇+又', name: 'Chữ Hữu (友)', desc: 'Hai bàn tay nắm chặt nhau' }
                ],
                mnemonic: 'Tình bạn (朋友) đẹp như hai vầng trăng (朋) luôn đi cùng nhau và hai bàn tay (友) nắm chặt giúp đỡ nhau.',
                exampleHanzi: '他是我朋友。',
                examplePinyin: 'Tā shì wǒ péngyou.',
                exampleMeaning: 'Anh ấy là bạn của tôi.'
            },
            {
                id: 15,
                hanzi: '男',
                pinyin: 'nán',
                hanViet: 'Nam',
                type: 'Danh từ / Tính từ',
                meaning: 'Nam, con trai (男朋友: Bạn trai)',
                radicals: [
                    { r: '田', name: 'Bộ Điền', desc: 'Đồng ruộng ở trên' },
                    { r: '力', name: 'Bộ Lực', desc: 'Sức lực ở dưới' }
                ],
                mnemonic: 'Người đàn ông (男) thời xưa là trụ cột bỏ sức lực (力) ra cày ruộng (田). Ghép: 男朋友 (nánpéngyou) = Bạn trai.',
                exampleHanzi: '他是你男朋友吗？',
                examplePinyin: 'Tā shì nǐ nánpéngyou ma?',
                exampleMeaning: 'Anh ấy là bạn trai của bạn phải không?'
            },
            {
                id: 16,
                hanzi: '女',
                pinyin: 'nǚ',
                hanViet: 'Nữ',
                type: 'Danh từ / Tính từ',
                meaning: 'Nữ, con gái (女朋友: Bạn gái)',
                radicals: [
                    { r: '女', name: 'Bộ Nữ', desc: 'Hình người phụ nữ dịu dàng' }
                ],
                mnemonic: 'Chú ý phiên âm nǚ giữ nguyên dấu 2 chấm trên chữ ü! Ghép: 女朋友 (nǚpéngyou) = Bạn gái.',
                exampleHanzi: '女朋友',
                examplePinyin: 'nǚpéngyou',
                exampleMeaning: 'Bạn gái'
            }
        ],
  dialogues: [
            {
                title: 'Hội thoại 1: Hỏi quốc tịch bản thân & người thân (你是哪国人？)',
                lines: [
                    { speaker: 'A', hanzi: '你好！你是哪国人？', pinyin: 'Nǐ hǎo! Nǐ shì nǎ guó rén?', vn: 'Xin chào! Bạn là người nước nào?', note: '哪 (nǎ) đứng trước 国 (guó) chỉ đọc nửa thanh 3.' },
                    { speaker: 'B', hanzi: '我是越南人，你呢？', pinyin: 'Wǒ shì Yuènán rén, nǐ ne?', vn: 'Tôi là người Việt Nam, thế còn bạn?', note: 'Dùng 你呢 (nǐ ne) để hỏi ngược lại ngắn gọn.' },
                    { speaker: 'A', hanzi: '我也是越南人。', pinyin: 'Wǒ yě shì Yuènán rén.', vn: 'Tôi cũng là người Việt Nam.', note: 'wǒ + yě (2 thanh 3) biến điệu thành wó yě.' },
                    { speaker: 'B', hanzi: '她是韩国人吗？', pinyin: 'Tā shì Hánguó rén ma?', vn: 'Cô ấy là người Hàn Quốc phải không?', note: 'Câu hỏi Có/Không dùng trợ từ 吗 (ma) ở cuối câu.' },
                    { speaker: 'A', hanzi: '不是，她是日本人。', pinyin: 'Bú shì, tā shì Rìběn rén.', vn: 'Không phải, cô ấy là người Nhật Bản.', note: '不是 bắt buộc đọc biến điệu là bú shì!' }
                ]
            },
            {
                title: 'Hội thoại 2: Xin lỗi (对不起 - 没什么) & Xác nhận Đúng/Sai (对吗 - 不对)',
                lines: [
                    { speaker: 'A', hanzi: '你是中国人，对吗？', pinyin: 'Nǐ shì Zhōngguó rén, duì ma?', vn: 'Bạn là người Trung Quốc, đúng không?', note: '对吗？ (Duì ma?) = Đúng không? / Phải không?' },
                    { speaker: 'B', hanzi: '不对，我是越南人。', pinyin: 'Bú duì, wǒ shì Yuènán rén.', vn: 'Không đúng, tôi là người Việt Nam.', note: '不对 đọc biến điệu thành bú duì (vì 对 là Thanh 4).' },
                    { speaker: 'A', hanzi: '对不起！', pinyin: 'Duìbuqǐ!', vn: 'Xin lỗi bạn nhé!', note: 'Âm 불 (bu) ở giữa đọc nhẹ thành thanh nhẹ: duìbuqǐ.' },
                    { speaker: 'B', hanzi: '没什么！', pinyin: 'Méi shénme!', vn: 'Không có gì đâu! / Không sao đâu!', note: 'Cặp câu vàng luôn đi cùng nhau: 对不起 — 没什么.' }
                ]
            },
            {
                title: 'Hội thoại 3: Giới thiệu Bạn bè, Bạn trai (男朋友) & Hỏi học gì (什么)',
                lines: [
                    { speaker: 'A', hanzi: '他是你男朋友吗？', pinyin: 'Tā shì nǐ nánpéngyou ma?', vn: 'Anh ấy là bạn trai của bạn phải không?', note: 'Trật tự ngược: 你 (bạn) + 男朋友 (bạn trai) = bạn trai của bạn.' },
                    { speaker: 'B', hanzi: '不是，他是我朋友。', pinyin: 'Bú shì, tā shì wǒ péngyou.', vn: 'Không phải, anh ấy là bạn của tôi.', note: '我朋友 (wǒ péngyou) = bạn của tôi.' },
                    { speaker: 'A', hanzi: '你学习什么？', pinyin: 'Nǐ xuéxí shénme?', vn: 'Bạn học cái gì?', note: '什么 (shénme - cái gì) đặt sau động từ 学习 (học).' },
                    { speaker: 'B', hanzi: '我学习汉语。', pinyin: 'Wǒ xuéxí Hànyǔ.', vn: 'Tôi học tiếng Hán.', note: 'Ôn tập từ vựng Bài 2 kết hợp ngữ pháp Bài 4.' }
                ]
            }
        ],
  quiz: [
            {
                q: 'Câu 1: Trong 4 thanh mẫu cong lưỡi "zh, ch, sh, r" của Bài 4, âm nào là ÂM BẬT HƠI mạnh làm bay tờ giấy trước miệng?',
                speakWord: '吃',
                options: [
                    'Âm zh (như trong 知 zhī)',
                    'Âm ch (như trong 吃 chī - đè lưỡi vào phần gồ ghề rồi bật mạnh hơi)',
                    'Âm sh (như trong 是 shì)',
                    'Âm r (như trong 日 rì)'
                ],
                correct: 1,
                explanation: 'Trong 4 âm cong lưỡi zh, ch, sh, r thì chỉ có "ch" là âm bật hơi mạnh. Khi đọc cần đè đầu lưỡi vào phần gồ ghề sau lợi trên rồi bật luồng hơi mạnh ra.'
            },
            {
                q: 'Câu 2: Hai vận mẫu viết tắt "ui" (như trong 对 duì, 追 zhuī) và "un" (như trong 顺 shùn) thực chất được viết tắt từ đâu và đọc thế nào?',
                speakWord: '追',
                options: [
                    'Đọc là "uy" và "un" giống hệt tiếng Việt',
                    'ui viết tắt của "uei" (đọc là uây); un viết tắt của "uen" (đọc là uân)',
                    'ui đọc là "oai"; un đọc là "oan"',
                    'Đọc tròn môi như ü'
                ],
                correct: 1,
                explanation: 'Cô giáo nhấn mạnh: ui = u + ei (bị ẩn e ở giữa nên phải đọc là "uây", tuyệt đối cấm đọc là uy); un = u + en (bị ẩn e ở giữa nên phải đọc là "uân").'
            },
            {
                q: 'Câu 3: Phân biệt cách đọc giữa cặp âm "ju, qu, xu" và "zhu, chu, ku" như thế nào cho chuẩn?',
                speakWord: '居',
                options: [
                    'Cả hai nhóm đều đọc là vần "u" bình thường',
                    'Nhóm "ju, qu, xu" bản chất là vận mẫu "ü" đã bỏ dấu 2 chấm nên phải đọc tròn môi (chuy, xuy); còn "zhu, chu, ku" là vận mẫu "u" thường (tru, khu)',
                    'Nhóm "zhu, chu, ku" đọc tròn môi là uy, còn "ju, qu, xu" đọc là u',
                    'Đọc giống hệt nhau'
                ],
                correct: 1,
                explanation: 'Khi j, q, x đi với ü, üe, üan, ün thì bỏ dấu 2 chấm trên đầu. Vì vậy ju, qu, xu là ü (đọc tròn môi), juan, quan, xuan là üan (chuyên, xuyên), jun, qun, xun là ün (chuyn, xuyn).'
            },
            {
                q: 'Câu 4: Khi vận mẫu "i" ghép với 7 thanh mẫu nào thì chữ "i" BẮT BUỘC phải đọc là "Ư"?',
                speakWord: '是',
                options: [
                    'b, p, m, f, d, t, n',
                    'j, q, x, g, k, h, l',
                    '7 âm đầu lưỡi trước và sau: z, c, s, zh, ch, sh, r (zi, ci, si, zhi, chi, shi, ri)',
                    'Tất cả các phụ âm trong tiếng Trung'
                ],
                correct: 2,
                explanation: 'Chỉ khi đi với 3 âm đầu lưỡi trước (z, c, s - Bài 3) và 4 âm cong lưỡi (zh, ch, sh, r - Bài 4) thì vận mẫu "i" mới đọc là "ư".'
            },
            {
                q: 'Câu 5: Tại sao cụm từ "người nước nào" trong tiếng Trung lại nói là "哪国人" (nǎ guó rén)?',
                speakWord: '哪国人',
                options: [
                    'Vì tiếng Trung sắp xếp ngẫu nhiên',
                    'Vì trong cụm danh từ tiếng Trung, từ phụ bổ nghĩa phải đứng TRƯỚC danh từ chính: 哪 (nào) + 国 (nước) + 人 (người)',
                    'Vì chữ 人 luôn phải đứng đầu câu',
                    'Vì chữ 哪 có nghĩa là người'
                ],
                correct: 1,
                explanation: 'Trong cụm danh từ tiếng Trung, trật tự ngược với tiếng Việt: "người (1) nước (2) nào (3)" phải đảo thành "nào (3) nước (2) người (1)" → 哪国人.'
            },
            {
                q: 'Câu 6: Để hỏi "Bố của bạn là người nước nào?", câu nào dưới đây có trật tự từ đúng chuẩn ngữ pháp?',
                speakWord: '你爸爸是哪国人？',
                options: [
                    '爸爸你是人国哪？',
                    '你爸爸是哪国人？ (Nǐ bàba shì nǎ guó rén?)',
                    '你爸爸是哪国人吗？',
                    '是哪国人你爸爸？'
                ],
                correct: 1,
                explanation: '"Bố của bạn" phải đảo thành 你爸爸 (nǐ bàba). Câu đã có đại từ nghi vấn 哪 (nào) nên tuyệt đối không thêm 吗 ở cuối câu.'
            },
            {
                q: 'Câu 7: Khi đọc câu có 4 Thanh 3 đi liền nhau "我也很好" (wǒ yě hěn hǎo - Tôi cũng rất khỏe), cách ngắt nhịp biến điệu tự nhiên nhất là gì?',
                speakWord: '我也很好。',
                options: [
                    'Giữ nguyên cả 4 thanh 3 không biến điệu',
                    'Chia thành 2 cặp thanh 3 (我也 / 很好) và biến điệu thành: "wó yě / hén hǎo"',
                    'Đổi tất cả thành Thanh 4',
                    'Đổi tất cả thành Thanh 1'
                ],
                correct: 1,
                explanation: 'Câu 我也很好 gồm 4 chữ Thanh 3, ta chia theo cụm nghĩa (Tôi cũng / rất khỏe) → mỗi cặp biến điệu 3+3 thành 2+3: đọc là "wó yě hén hǎo".'
            },
            {
                q: 'Câu 8: Khi người khác nói "对不起！" (Duìbuqǐ - Xin lỗi!), ta đáp lại lịch sự bằng câu nào trong Bài 4?',
                speakWord: '没什么',
                options: [
                    '不客气！ (Đừng khách sáo - dùng để đáp lại 谢谢)',
                    '没什么！ (Méi shénme - Không có gì đâu / Không sao đâu!)',
                    '不对！ (Bú duì - Không đúng!)',
                    '你好！ (Nǐ hǎo - Xin chào!)'
                ],
                correct: 1,
                explanation: 'Cặp câu chuẩn: 谢谢 (Cảm ơn) → 不客气 (Đừng khách sáo); còn 对不起 (Xin lỗi) → 没什么 (Không có gì / Không sao đâu).'
            },
            {
                q: 'Câu 9: Hai chữ Hán "美" (Mỹ - Đẹp) và "男" (Nam - Con trai) được tạo thành từ những bộ thủ nào?',
                speakWord: '美国',
                options: [
                    'Chữ 美 gồm Bộ Dương (羊 - con dê) + Bộ Đại (大 - to lớn); chữ 男 gồm Bộ Điền (田 - ruộng) + Bộ Lực (力 - sức lực)',
                    'Chữ 美 gồm Bộ Nữ + Bộ Tử; chữ 男 gồm Bộ Nhân + Bộ Thập',
                    'Cả hai chữ đều dùng Bộ Vi (囗)',
                    'Chữ 美 dùng Bộ Thủy; chữ 男 dùng Bộ Mộc'
                ],
                correct: 0,
                explanation: 'Con dê (羊) béo to lớn (大) là Đẹp (美 - trong 美国 Nước Mỹ). Người bỏ sức lực (力) cày ruộng (田) là người đàn ông (男 - trong 男朋友 Bạn trai).'
            },
            {
                q: 'Câu 10: Cách phát âm đúng của từ phủ định "不是" (Không phải là) và "不对" (Không đúng) là gì?',
                speakWord: '不是',
                options: [
                    'bù shì và bù duì (giữ nguyên Thanh 4 của chữ 不)',
                    'bú shì và bú duì (chữ 不 biến điệu thành Thanh 2 vì đứng trước Thanh 4)',
                    'bǔ shì và bǔ duì',
                    'bū shì và bū duì'
                ],
                correct: 1,
                explanation: 'Vì cả 是 (shì) và 对 (duì) đều mang Thanh 4, nên chữ 不 (bù) đứng trước chúng bắt buộc biến điệu thành Thanh 2: đọc là "bú shì" và "bú duì".'
            }
        ]
};
