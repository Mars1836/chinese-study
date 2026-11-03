import { PlaylistSection } from '../../types/thematic';

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
