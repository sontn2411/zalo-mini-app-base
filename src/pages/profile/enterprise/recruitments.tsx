import { useJobByEnterprise } from '@/api/query/jobs'
import { Search, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import RecruitmentItem from './recruitmentItem'
import useSettingStore from '@/store/useSetting'
import { useDebounce } from '@/hooks/useDebounce'

const Recruitments = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeTab, setActiveTab] = useState<string>('all')

  const { ListStatusJob } = useSettingStore()

  const status = activeTab === 'all' ? '' : activeTab

  const debouncedSearchQuery = useDebounce(searchQuery, 400)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useJobByEnterprise({
      rowIndex: 0,
      keyword: debouncedSearchQuery,
      status: status,
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

  return (
    <div className='flex flex-col h-full'>
      <div className='bg-white p-4 space-y-4 shadow-sm'>
        {/* Search box */}
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Nhập từ khóa tìm kiếm...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full pl-10 pr-4 py-2 rounded-lg border text-gray-900 placeholder-gray-500 focus:outline-color-1 focus:outline focus:outline-2'
          />
          {searchQuery.length > 0 && (
            <button
              onClick={() => setSearchQuery('')}
              className='absolute right-3 top-1/2 -translate-y-1/2'
            >
              <X className='w-5 h-5 text-gray-400' />
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className='flex gap-2 overflow-x-auto pb-2'>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-color-1 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Tất cả
          </button>

          {ListStatusJob?.map((item: { label: string; value: string }) => (
            <button
              key={item.value}
              onClick={() => setActiveTab(item.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeTab === item.value
                  ? 'bg-color-1 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Job list */}
      <div className='flex-1 overflow-y-auto pt-6 space-y-3'>
        {isLoading &&
          Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={`loading-${idx}`}
              className='p-4 rounded-lg bg-gray-100 animate-pulse'
            >
              <div className='h-4 bg-gray-300 rounded w-1/3 mb-2' />
              <div className='h-3 bg-gray-300 rounded w-1/2 mb-1' />
              <div className='h-3 bg-gray-300 rounded w-1/4' />
            </div>
          ))}

        {jobs.map((job: any) => (
          <RecruitmentItem {...job} key={job.id} />
        ))}

        {isFetchingNextPage &&
          Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={`loading-more-${idx}`}
              className='p-4 rounded-lg bg-gray-100 animate-pulse'
            >
              <div className='h-4 bg-gray-300 rounded w-1/3 mb-2' />
              <div className='h-3 bg-gray-300 rounded w-1/2 mb-1' />
              <div className='h-3 bg-gray-300 rounded w-1/4' />
            </div>
          ))}

        {/* Loadmore trigger */}
        <div ref={observerRef} />
      </div>
    </div>
  )
}

export default Recruitments
