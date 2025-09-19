import { useDataJobForeigners } from '@/api/query/jobs'
import { useDataEnterprise } from '@/api/query/setting'
import SelectInput from '@/components/shared/form/selectInput'
import { ROUTES } from '@/constants/routes'
import { useDebounce } from '@/hooks/useDebounce'
import { noCompany } from '@/static'
import { Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const JobSkeleton = () => {
  return (
    <div className='bg-white w-full min-h-[7rem] rounded-xl shadow-sm px-4 py-3 animate-pulse'>
      <div className='flex gap-2 items-start'>
        <div className='flex-shrink-0 w-14 h-14 rounded bg-gray-200' />

        <div className='flex-1 min-w-0 space-y-2'>
          <div className='h-4 bg-gray-200 rounded w-3/4' />
          <div className='h-3 bg-gray-200 rounded w-1/2' />
          <div className='h-3 bg-gray-200 rounded w-1/3' />
        </div>
      </div>
    </div>
  )
}

const Decree70Page = () => {
  const [filters, setFilters] = useState<{ enterprise: string[] }>({
    enterprise: [],
  })
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { data: dataEnterprise } = useDataEnterprise()

  const navigate = useNavigate()

  const debouncedSearch = useDebounce(searchQuery, 500)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useDataJobForeigners({
      keyword: debouncedSearch,
      enterprise: filters.enterprise.join(',') || '',
    })

  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 }
    )
    observer.observe(observerRef.current)
    return () => observer.disconnect()
  }, [observerRef, hasNextPage, fetchNextPage])

  const jobs =
    data?.pages.reduce(
      (acc: any[], page) => [...acc, ...(page?.Data?.Data || [])],
      []
    ) || []

  const handleClearSearch = () => {
    setSearchQuery('')
    setFilters({ enterprise: [] })
  }

  return (
    <div className=' '>
      <div className='p-4 bg-white space-y-4'>
        <div className=' relative'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ' />
          <input
            type='text'
            placeholder='Tìm kiếm công việc...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full px-3 py-2 border rounded-md pl-10'
          />
          {searchQuery.length > 0 && (
            <button
              onClick={handleClearSearch}
              className='absolute right-3 top-1/2 -translate-y-1/2 '
            >
              <X className='w-5 h-5 text-gray-400' />
            </button>
          )}
        </div>

        {dataEnterprise && (
          <SelectInput
            options={[
              { value: '', label: 'Tất cả' },
              ...dataEnterprise.Data.Data,
            ]}
            title='Chọn doanh nghiệp'
            placeholder='Chọn doanh nghiệp'
            maxSelect={1}
            value={filters.enterprise}
            onChange={(values) => setFilters({ enterprise: values })}
          />
        )}
      </div>

      <div className='space-y-3  mt-4'>
        {isLoading &&
          Array.from({ length: 5 }).map((_, i) => <JobSkeleton key={i} />)}
        {jobs.map((job: any) => {
          const { title, thumbnail, company, publishdate, id } = job
          return (
            <div key={id} className=''>
              <button
                type='button'
                className='bg-white  w-full min-h-[7rem] rounded-xl shadow-sm hover:shadow-md active:bg-gray-50 transition text-left focus:outline-none focus:ring-1 focus:ring-gray-200 group relative cursor-pointer px-4'
                aria-label={`Chi tiết công việc: ${title}`}
                style={{ touchAction: 'manipulation' }}
                onClick={() => navigate(`${ROUTES.ND70}/${id}`)}
              >
                <div className='flex gap-2 items-start'>
                  <div className='flex-shrink-0 w-14 h-14 rounded overflow-hidden bg-white border border-gray-200 flex items-center justify-center'>
                    <img
                      src={thumbnail}
                      alt={title}
                      className='w-full h-full object-cover'
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src = noCompany)
                      }
                    />
                  </div>

                  {/* Content */}
                  <div className='flex-1 min-w-0 space-y-1'>
                    <div className='font-semibold text-sm text-gray-900 line-clamp-2'>
                      {title}
                    </div>
                    <div className='text-xs text-gray-600 font-medium line-clamp-1'>
                      {company}
                    </div>
                    <span className='text-xs text-gray-500'>
                      Ngày đăng: {publishdate}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          )
        })}
      </div>

      <div ref={observerRef} className=''>
        {isFetchingNextPage &&
          Array.from({ length: 2 }).map((_, i) => <JobSkeleton key={i} />)}
      </div>
    </div>
  )
}

export default Decree70Page
