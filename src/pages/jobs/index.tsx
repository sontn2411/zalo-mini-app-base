import { useEffect, useRef, useState } from 'react'
import { useDataJobListInfinite } from '@/api/query/jobs'
import JobList from '@/components/shared/jobList'
import NotFoundSearch from '@/components/shared/notfoundSearch'
import SearchFilter from '@/components/shared/searchFilter'

const JobListSkeleton = () => (
  <div className='space-y-3'>
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className='bg-white rounded-sm p-4 shadow-sm animate-pulse'>
        <div className='flex items-center space-x-4'>
          <div className='w-20 h-20 bg-gray-200 rounded-sm' />
          <div className='flex-1 space-y-3'>
            <div className='h-4 bg-gray-200 rounded w-1/2' />
            <div className='h-3 bg-gray-200 rounded w-1/3' />
            <div className='h-3 bg-gray-200 rounded w-1/4' />
          </div>
        </div>
      </div>
    ))}
  </div>
)

interface Filters {
  industry: string[]
  location: string[]
  salary: string[]
  experience: string[]
  jobType: string[]
  gender: string[]
  age: string[]
}

const JobListPage = () => {
  const [filters, setFilters] = useState<Filters>({
    industry: [],
    location: [],
    salary: [],
    experience: [],
    jobType: [],
    gender: [],
    age: [],
  })
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useDataJobListInfinite({
      keyword: searchQuery,
      job: filters.industry.join(',') || '',
      ward: filters.location.join(',') || '',
      salary: filters.salary.join(',') || '',
      gender: filters.gender.join(',') || '',
      jobtype: filters.jobType.join(',') || '',
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
    <div className='flex flex-col gap-4 overflow-hidden'>
      <SearchFilter
        visibleFilters={['industry', 'location', 'salary', 'gender', 'jobType']}
        onChange={(newFilters, query) => {
          setFilters(newFilters)
          setSearchQuery(query)
        }}
      />

      <div className='px-4 py-4 h-full overflow-y-scroll space-y-3'>
        {isLoading ? (
          <JobListSkeleton />
        ) : jobs.length === 0 ? (
          <NotFoundSearch title='Không tìm thấy công việc phù hợp' />
        ) : (
          <>
            <JobList data={jobs} />

            {isFetchingNextPage && <JobListSkeleton />}

            <div ref={observerRef} />
          </>
        )}
      </div>
    </div>
  )
}

export default JobListPage
