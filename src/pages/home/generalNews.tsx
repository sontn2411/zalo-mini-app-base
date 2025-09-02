import { ChevronRight } from 'lucide-react'

// General news data
const generalNews = [
  {
    id: 1,
    title: 'Thông báo tuyển dụng viên chức năm 2025',
    summary:
      'UBND tỉnh Khánh Hòa thông báo kế hoạch tuyển dụng viên chức các đơn vị sự nghiệp công lập trên địa bàn tỉnh...',
    image:
      'https://thongtinvieclamkhanhhoa.vn/FileStorage/Content/images/B1.jpg',
    date: '29/08/2025',
  },
  {
    id: 2,
    title: 'Hội nghị kết nối cung cầu lao động Quý III/2025',
    summary:
      'Trung tâm Dịch vụ việc làm tỉnh tổ chức hội nghị kết nối việc làm với 150+ doanh nghiệp...',
    image:
      'https://thongtinvieclamkhanhhoa.vn/FileStorage/Content/images/B1.jpg',
    date: '28/08/2025',
  },
  {
    id: 3,
    title: 'Chương trình đào tạo kỹ năng nghề du lịch',
    summary:
      'Mở đăng ký khóa đào tạo hướng dẫn viên du lịch, lễ tân khách sạn miễn phí cho người lao động...',
    image:
      'https://thongtinvieclamkhanhhoa.vn/FileStorage/Content/images/B1.jpg',
    date: '27/08/2025',
  },
]

const GeneralNews = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-900'>Tin tức</h2>
        <button className='text-color-1 text-sm font-medium flex items-center'>
          Xem tất cả
          <ChevronRight className='w-4 h-4 ml-1' />
        </button>
      </div>

      <div className='space-y-3'>
        {generalNews.map((news) => (
          <div
            key={news.id}
            className='bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='flex items-start space-x-3'>
              <div className='w-16 h-16 rounded-lg overflow-hidden flex-shrink-0'>
                <img
                  src={news.image}
                  alt={news.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex-1'>
                <h3 className='font-semibold text-gray-900 text-sm mb-1 line-clamp-2'>
                  {news.title}
                </h3>

                <div className='flex items-center justify-between'>
                  <span className='text-gray-400 text-xs'>{news.date}</span>
                  <button className='text-color-1 text-xs font-medium'>
                    Đọc thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GeneralNews
