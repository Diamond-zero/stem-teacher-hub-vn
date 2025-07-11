
import { Resource } from '@/types/resource';

export const mockResources: Resource[] = [
  {
    id: 1,
    title: 'Bài giảng Vật lý: Định luật Newton',
    author: 'GV. Nguyễn Văn A',
    school: 'THPT Chu Văn An',
    date: '2 ngày trước',
    downloads: 125,
    views: 340,
    likes: 23,
    tags: ['Vật lý', 'THPT', 'PowerPoint'],
    level: 'THPT',
    type: 'Bài giảng',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&w=400',
    description: 'Bài giảng chi tiết về ba định luật Newton với các ví dụ thực tế và bài tập ứng dụng.'
  },
  {
    id: 2,
    title: 'Thí nghiệm Hóa học: Phản ứng Acid-Base',
    author: 'GV. Trần Thị B',
    school: 'THCS Lê Quý Đôn',
    date: '1 tuần trước',
    downloads: 89,
    views: 256,
    likes: 18,
    tags: ['Hóa học', 'THCS', 'Thí nghiệm'],
    level: 'THCS',
    type: 'Hướng dẫn',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=400',
    description: 'Hướng dẫn thực hiện các thí nghiệm cơ bản về phản ứng acid-base an toàn và hiệu quả.'
  },
  {
    id: 3,
    title: 'Dự án STEM: Robot dọn rác tự động',
    author: 'GV. Lê Văn C',
    school: 'THPT Nguyễn Du',
    date: '3 ngày trước',
    downloads: 201,
    views: 478,
    likes: 45,
    tags: ['Robotics', 'STEM', 'Dự án'],
    level: 'THPT',
    type: 'Dự án',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&w=400',
    description: 'Hướng dẫn xây dựng robot dọn rác tự động sử dụng Arduino và cảm biến siêu âm.'
  },
  {
    id: 4,
    title: 'Toán học thực tế: Ứng dụng đạo hàm',
    author: 'GV. Phạm Thị D',
    school: 'THPT Marie Curie',
    date: '5 ngày trước',
    downloads: 156,
    views: 389,
    likes: 31,
    tags: ['Toán học', 'THPT', 'Ứng dụng'],
    level: 'THPT',
    type: 'Bài giảng',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&w=400',
    description: 'Các bài toán thực tế ứng dụng đạo hàm trong kinh tế, vật lý và kỹ thuật.'
  },
  {
    id: 5,
    title: 'Sinh học: Mô hình DNA 3D',
    author: 'GV. Hoàng Văn E',
    school: 'THPT Lê Hồng Phong',
    date: '1 tuần trước',
    downloads: 98,
    views: 287,
    likes: 22,
    tags: ['Sinh học', 'THPT', 'Mô hình'],
    level: 'THPT',
    type: 'Hướng dẫn',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&w=400',
    description: 'Hướng dẫn tạo mô hình DNA 3D bằng vật liệu đơn giản cho giờ học sinh học.'
  },
  {
    id: 6,
    title: 'Công nghệ thông tin: Lập trình Scratch',
    author: 'GV. Ngô Thị F',
    school: 'THCS Trần Phú',
    date: '4 ngày trước',
    downloads: 167,
    views: 412,
    likes: 38,
    tags: ['Tin học', 'THCS', 'Scratch'],
    level: 'THCS',
    type: 'Khóa học',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&w=400',
    description: 'Khóa học lập trình Scratch từ cơ bản đến nâng cao cho học sinh THCS.'
  }
];
