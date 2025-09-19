import { ROUTES } from '@/constants/routes'
import { GeneralNewItem } from '@/types/home'
import { useNavigate } from 'react-router-dom'

interface NewListProps {
  data?: GeneralNewItem[]
  isLoading?: boolean
}

const NewsList = ({ data = [], isLoading = false }: NewListProps) => {
  const navigate = useNavigate()

  if (isLoading) {
    // render skeleton
    return (
      <div className='space-y-3'>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className='bg-white rounded-lg p-3 shadow-sm animate-pulse flex space-x-3'
          >
            <div className='w-16 h-16 bg-gray-200 rounded-lg' />
            <div className='flex-1 space-y-2'>
              <div className='h-4 bg-gray-200 rounded w-3/4' />
              <div className='h-3 bg-gray-200 rounded w-1/2' />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='space-y-3 '>
      {data.map((news) => (
        <div
          onClick={() => navigate(`${ROUTES.NEWS}/${news.id}`)}
          key={news.id}
          className='bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow'
        >
          <div className='flex items-start space-x-3'>
            <div className='w-16 h-16 rounded-lg overflow-hidden flex-shrink-0'>
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
    </div>
  )
}

export default NewsList
