import { Briefcase, ChevronRight, MapPin } from 'lucide-react'
import FilterCandidate from './filter'

// Dummy data
const candidates = [
  {
    id: 1,
    name: 'Châu Văn Đức',
    avatar: 'https://thongtinvieclamkhanhhoa.vn/Images/user-1.jpg',
    job: 'Điện Lạnh/Nhiệt Lạnh',
    location: 'Khánh Hòa',
  },
  {
    id: 2,
    name: 'Nguyễn Thị Hồng',
    avatar: 'https://thongtinvieclamkhanhhoa.vn/Images/user-1.jpg',
    job: 'Kế Toán - Tài Chính',
    location: 'Nha Trang',
  },
  {
    id: 3,
    name: 'Trần Văn Nam',
    avatar: 'https://thongtinvieclamkhanhhoa.vn/Images/user-3.jpg',
    job: 'Công Nghệ Thông Tin',
    location: 'Cam Ranh',
  },
]

const CandidatePage = () => {
  return (
    <div>
      <FilterCandidate />

      <div className='px-2 space-y-3'>
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className='bg-white rounded-sm p-4 shadow-sm hover:shadow-md transition-all duration-200'
          >
            <div className='flex items-center space-x-4'>
              {/* Avatar */}
              <div className='relative flex-shrink-0 border rounded-sm p-1'>
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className='w-20 h-20 object-cover rounded-sm'
                />
              </div>

              {/* Info */}
              <div className='flex-1 min-w-0'>
                <h3 className='font-bold text-gray-900 text-base mb-1 truncate'>
                  {candidate.name}
                </h3>

                <div className='flex items-center mb-2'>
                  <Briefcase size={16} className='text-color-1 mr-2' />
                  <p className='text-color-1 font-medium text-base truncate'>
                    {candidate.job}
                  </p>
                </div>

                <div className='flex items-center text-gray-500'>
                  <MapPin size={16} className='mr-2' />
                  <span className='text-sm truncate'>{candidate.location}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className='flex-shrink-0'>
                <ChevronRight size={20} className='text-gray-400' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CandidatePage
