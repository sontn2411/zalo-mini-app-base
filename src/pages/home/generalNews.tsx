import { ROUTES } from '@/constants/routes'
import { GeneralNewItem } from '@/types/home'
import { useNavigate } from 'react-router-dom'

interface GeneralNewsProps {
  data: GeneralNewItem[]
  isLoading: boolean
}

const GeneralNews = ({ data, isLoading }: GeneralNewsProps) => {
  const navigate = useNavigate()

  const skeletons = Array.from({ length: 5 })

  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-900'>Tin tức</h2>
      </div>

      <div className='space-y-3'>
        {isLoading
          ? skeletons.map((_, idx) => (
              <div
                key={idx}
                className='bg-white rounded-lg p-3 shadow-sm animate-pulse flex items-start space-x-3'
              >
                <div className='w-16 h-16 rounded-lg bg-gray-200 flex-shrink-0'></div>
                <div className='flex-1 space-y-2'>
                  <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                  <div className='h-3 bg-gray-200 rounded w-1/2'></div>
                </div>
              </div>
            ))
          : data.map((news) => (
              <div
                onClick={() => navigate(`${ROUTES.NEWS}/${news.id}`)}
                key={news.id}
                className='bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer'
              >
                <div className='flex items-start space-x-3'>
                  <div className='w-20 h-20 rounded-lg overflow-hidden flex-shrink-0'>
                    <img
                      src={news.thumbnail}
                      alt={news.title}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-gray-900 text-sm mb-1 line-clamp-2'>
                      {news.title}
                    </h3>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-400 text-xs'>
                        {news.publishdate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        {!isLoading && (
          <div
            onClick={() => navigate(ROUTES.NEWS)}
            className='text-center text-color-1 underline underline-offset-2 text-sm font-medium cursor-pointer'
          >
            <span>Xem thêm</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default GeneralNews
