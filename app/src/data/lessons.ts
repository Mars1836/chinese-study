import { lesson1Data } from './lesson1';
import { lesson2Data } from './lesson2';
import { lesson3Data } from './lesson3';
import { lesson4Data } from './lesson4';
import { lesson5Data } from './lesson5';
import { lesson13Data } from './lesson13_han2';
import { LessonData } from '../types/lesson';

export interface LessonSummary {
  id: number;
  sectionId?: string;
  title: string;
  pinyin: string;
  hanzi: string;
  desc: string;
}

export const lessonsList: LessonSummary[] = [
  {
    id: 1,
    sectionId: 'section-1',
    title: 'Bài 1: Xin Chào',
    pinyin: 'Nǐ hǎo',
    hanzi: '你好',
    desc: 'Làm chủ 11 Thanh mẫu, 15 Vận mẫu, Biến điệu Thanh 3, Nét chữ Hán & 10 từ mới.'
  },
  {
    id: 2,
    sectionId: 'section-1',
    title: 'Bài 2: Học Tiếng Hán',
    pinyin: 'Xué Hànyǔ',
    hanzi: '学汉语',
    desc: 'Âm cuống lưỡi, vận mẫu an/en/in/un, biến điệu và số đếm cơ bản.'
  },
  {
    id: 3,
    sectionId: 'section-1',
    title: 'Bài 3: Hôm Nay Thứ Mấy?',
    pinyin: 'Jīntiān xīngqī jǐ',
    hanzi: '今天星期几',
    desc: '3 Thanh mẫu z, c, s, vận mẫu er, -i, số đếm 1-10, các ngày trong tuần & lịch trình.'
  },
  {
    id: 4,
    sectionId: 'section-1',
    title: 'Bài 4: Bạn Là Người Nước Nào?',
    pinyin: 'Nǐ shì nǎ guó rén',
    hanzi: '你是哪国人',
    desc: '4 Thanh mẫu uốn lưỡi zh, ch, sh, r, nhóm vận mẫu u, câu chữ 是 và tên các quốc gia.'
  },
  {
    id: 5,
    sectionId: 'section-1',
    title: 'Bài 5: Xin Hỏi Quý Danh Của Ngài?',
    pinyin: 'Qǐngwèn nín guìxìng',
    hanzi: '请问您贵姓',
    desc: 'Hỏi quý danh 您贵姓, tên 叫什么名字, hỏi tuổi 多大 vs 几岁, câu hỏi Chính - Phản V 不 V.'
  },
  {
    id: 13,
    sectionId: 'section-2',
    title: 'Bài 13: Để Tôi Kiểm Tra Cho Bạn',
    pinyin: 'Ràng wǒ gěi nǐ jiǎnchá yíxià',
    hanzi: '让我给你检查一下',
    desc: 'Hán Ngữ 2: Câu Kiêm Ngữ (让/叫/请), Cụm động lượng từ 一下, Từ vựng chuyên đề y tế và khám bệnh.'
  }
];

export const allLessonsData: Record<number, LessonData> = {
  1: lesson1Data,
  2: lesson2Data,
  3: lesson3Data,
  4: lesson4Data,
  5: lesson5Data,
  13: lesson13Data
};
