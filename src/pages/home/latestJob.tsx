import { ROUTES } from '@/constants/routes'
import { ChevronRight, Clock, DollarSign, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'

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
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
  })
  const navigate = useNavigate()

  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Việc làm tuyển gấp
        </h2>
        <button
          onClick={() => navigate(ROUTES.JOB_LIST, { viewTransition: true })}
          className='text-color-1 text-sm  flex items-center underline underline-offset-2'
        >
          Tất cả
        </button>
      </div>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {latestJobs.map((item, i) => (
            <div key={item.id} className='flex-[0_0_60%] min-w-0 pr-4'>
              <div className='rounded-lg overflow-hidden shadow bg-white h-full flex flex-col'>
                <div className='w-full aspect-video'>
                  <img
                    src={item.image}
                    alt={`banner-${i}`}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-2 flex flex-col justify-between flex-1'>
                  <div>
                    <p className='text-sm font-semibold line-clamp-2'>
                      {item.title}
                    </p>
                    <p className='text-xs text-gray-500 flex items-center mt-1'>
                      <MapPin className='w-3 h-3 mr-1' />
                      {item.location}
                    </p>
                    <p className='text-xs text-gray-500 flex items-center mt-1'>
                      <DollarSign className='w-3 h-3 mr-1' /> {item.salary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <JobList /> */}
    </div>
  )
}

export default LatestJob
