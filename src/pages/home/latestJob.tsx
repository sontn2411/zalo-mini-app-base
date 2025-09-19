import { ROUTES } from '@/constants/routes'
import { DollarSign, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import { useDataJobListHome } from '@/api/query/jobs'
import { noCompany } from '@/static'

const LatestJob = () => {
  const { data, isLoading } = useDataJobListHome()
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
  })
  const navigate = useNavigate()

  const jobs = data?.Data?.Data?.length ? data.Data.Data : []

  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-color-4'>
          Việc làm tuyển gấp
        </h2>
        <button
          onClick={() => navigate(ROUTES.JOB_LIST, { viewTransition: true })}
          className='text-color-1 text-sm flex items-center underline underline-offset-2'
        >
          Tất cả
        </button>
      </div>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {isLoading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className='flex-[0_0_60%] min-w-0 pr-4 animate-pulse'
                >
                  <div className='rounded-lg overflow-hidden shadow bg-white h-full flex flex-col'>
                    <div className='w-full aspect-video bg-gray-200' />
                    <div className='p-2 flex-1 space-y-2'>
                      <div className='h-4 bg-gray-200 rounded w-3/4' />
                      <div className='h-3 bg-gray-200 rounded w-1/2' />
                      <div className='h-3 bg-gray-200 rounded w-1/3' />
                    </div>
                  </div>
                </div>
              ))
            : jobs.map((item, i) => (
                <div
                  onClick={() => navigate(`${ROUTES.JOB_LIST}/${item.id}`)}
                  key={item.id}
                  className='flex-[0_0_60%] min-w-0 pr-4'
                >
                  <div className='rounded-lg overflow-hidden shadow bg-white h-full flex flex-col'>
                    <div className='w-full aspect-video'>
                      <img
                        src={item.thumbnail || item.image || noCompany}
                        alt={`banner-${i}`}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          e.currentTarget.src = noCompany
                        }}
                      />
                    </div>
                    <div className='p-2 flex flex-col justify-between flex-1'>
                      <div>
                        <p className='text-sm font-semibold line-clamp-2'>
                          {item.title}
                        </p>
                        {item.location && (
                          <p className='text-xs text-gray-500 flex items-center mt-1 line-clamp-1'>
                            <MapPin className='w-3 h-3 mr-1' />
                            {item.location}
                          </p>
                        )}
                        {item.salary && (
                          <p className='text-xs text-gray-500 flex items-center mt-1'>
                            <DollarSign className='w-3 h-3 mr-1' />
                            {item.salary}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default LatestJob
