import { ChevronRight, Clock, DollarSign, MapPin } from 'lucide-react'

const latestJobs = [
  {
    id: 1,
    title: 'Nhân viên Kế toán tổng hợp',
    company: 'Công ty TNHH Khánh Hòa Tech',
    location: 'TP. Nha Trang',
    salary: '8-12 triệu',
    type: 'Toàn thời gian',
    posted: '2 giờ trước',
    deadline: '15/09/2025',
    image:
      'https://res.cloudinary.com/dmgnjoeyq/image/upload/v1756452474/download_2_cfejj7.jpg',
  },
  {
    id: 2,
    title: 'Giao dịch viên Ngân hàng',
    company: 'Ngân hàng TMCP Kỹ Thương',
    location: 'Cam Ranh',
    salary: '10-15 triệu',
    type: 'Toàn thời gian',
    posted: '4 giờ trước',

    deadline: '20/09/2025',
    image:
      'https://res.cloudinary.com/dmgnjoeyq/image/upload/v1756452474/download_2_cfejj7.jpg',
  },
  {
    id: 3,
    title: 'Nhân viên Lễ tân Khách sạn',
    company: 'Khách sạn Sheraton Nha Trang',
    location: 'TP. Nha Trang',
    salary: 'Thỏa thuận',
    type: 'Ca đêm',
    posted: '6 giờ trước',
    urgent: true,
    deadline: '10/09/2025',
    image:
      'https://res.cloudinary.com/dmgnjoeyq/image/upload/v1756452474/download_2_cfejj7.jpg',
  },
  {
    id: 4,
    title: 'Kỹ sư Phần mềm',
    company: 'FPT Software',
    location: 'TP. Nha Trang',
    salary: '15-25 triệu',
    type: 'Toàn thời gian',
    posted: '1 ngày trước',

    deadline: '30/09/2025',
    image:
      'https://res.cloudinary.com/dmgnjoeyq/image/upload/v1756452474/download_2_cfejj7.jpg',
  },
]

const LatestJob = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Việc làm mới nhất
        </h2>
        <button className='text-color-1 text-sm font-medium flex items-center'>
          Xem tất cả
          <ChevronRight className='w-4 h-4 ml-1' />
        </button>
      </div>

      <div className='space-y-3'>
        {latestJobs.map((job) => (
          <div
            key={job.id}
            className='bg-white rounded-lg p-3 shadow-sm border-l-4 border-color-1 hover:shadow-md transition-shadow'
          >
            <div className='flex items-start justify-between mb-2'>
              <div className='flex-1'>
                <div className='flex gap-2'>
                  <img src={job.image} alt='name' className='h-16 border' />
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      {job.title}
                    </h3>
                    <p className='text-gray-600 text-sm mb-1'>{job.company}</p>

                    <div className='flex items-center space-x-2'>
                      <span className='text-xs text-gray-500'>
                        Hạn: {job.deadline}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=' text-xs flex gap-2 mt-2'>
                  <div className='bg-[#edeff0]  px-2 py-1 rounded-xl '>
                    <span>{job.location}</span>
                  </div>
                  <div className='bg-[#edeff0]  px-2 py-1 rounded-xl '>
                    <span> {job.salary}</span>
                  </div>
                </div>
                {/* <h3 className='font-semibold text-gray-900 mb-1'>
                  {job.title}
                </h3>
                <p className='text-gray-600 text-sm mb-1'>{job.company}</p>
                <div className='flex items-center text-gray-500 text-xs space-x-3 mb-2'>
                  <span className='flex items-center'>
                    <MapPin className='w-3 h-3 mr-1' />
                    {job.location}
                  </span>
                  <span className='flex items-center'>
                    <DollarSign className='w-3 h-3 mr-1' />
                    {job.salary}
                  </span>
                  <span className='flex items-center'>
                    <Clock className='w-3 h-3 mr-1' />
                    {job.posted}
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <span className='bg-blue-100 text-color-1 text-xs px-2 py-1 rounded'>
                      {job.type}
                    </span>
                    <span className='text-xs text-gray-500'>
                      Hạn: {job.deadline}
                    </span>
                  </div>
                  <button className='text-color-1 text-sm font-medium hover:text-blue-900'>
                    Chi tiết
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestJob
