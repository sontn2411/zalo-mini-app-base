import { Briefcase, ChevronRight, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import SearchFilter from '@/components/shared/searchFilter'
import { useDataCandidateInfinite } from '@/api/query/candidate'
import { noAvatar } from '@/static'
import { useEffect, useRef, useState } from 'react'

const CandidateSkeleton = () => (
  <div className='bg-white rounded-sm p-4 shadow-sm animate-pulse'>
    <div className='flex items-center space-x-4'>
      <div className='w-20 h-20 bg-gray-200 rounded-sm' />
      <div className='flex-1 space-y-2'>
        <div className='h-4 bg-gray-200 rounded w-1/2' />
        <div className='h-3 bg-gray-200 rounded w-1/3' />
        <div className='h-3 bg-gray-200 rounded w-2/5' />
      </div>
      <div className='w-5 h-5 bg-gray-200 rounded' />
    </div>
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

const CandidatePage = () => {
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

  const navigate = useNavigate()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useDataCandidateInfinite({
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

  if (isLoading) {
    return (
      <div>
        <SearchFilter
          isSearch={false}
          visibleFilters={['gender', 'age', 'location', 'industry', 'study']}
        />
        <div className='space-y-3'>
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <CandidateSkeleton key={idx} />
            ))}
        </div>
      </div>
    )
  }

  const candidates =
    data?.pages.reduce(
      (acc: any[], page) => [...acc, ...(page?.Data?.Data || [])],
      []
    ) || []

  return (
    <div className='overflow-hidden'>
      <SearchFilter
        isSearch={false}
        visibleFilters={['gender', 'study', 'age', 'location', 'industry']}
        onChange={(newFilters, query) => {
          setFilters(newFilters)
          setSearchQuery(query)
        }}
      />

      <div className='space-y-3 overflow-y-scroll h-full pb-20'>
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className='bg-white rounded-sm p-4 shadow-sm hover:shadow-md transition-all duration-200'
            onClick={() => navigate(`${ROUTES.CANDIDATE}/${candidate.id}`)}
          >
            <div className='flex items-center space-x-4'>
              <div className='relative flex-shrink-0 border rounded-sm p-1'>
                <img
                  src={candidate.thumbnail || noAvatar}
                  alt={candidate.fullname}
                  className='w-20 h-20 object-cover rounded-sm'
                  onError={(e) => {
                    e.currentTarget.src = noAvatar
                  }}
                />
              </div>

              <div className='flex-1 min-w-0'>
                <h3 className='font-bold text-gray-900 text-base mb-1'>
                  {candidate.fullname}
                </h3>
                {Array.isArray(candidate.job) && candidate.job.length > 0 && (
                  <div className='mb-2'>
                    {[...new Set(candidate.job as string[])].map(
                      (item, idx) => (
                        <p
                          key={idx}
                          className='text-color-1 font-medium text-sm truncate'
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                )}
                {candidate.location && (
                  <div className='flex items-center text-gray-500'>
                    <MapPin size={16} className='mr-2' />
                    <span className='text-sm truncate'>
                      {candidate.location}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isFetchingNextPage && (
          <div className='space-y-3'>
            {Array.from({ length: 3 }).map((_, idx) => (
              <CandidateSkeleton key={`loading-${idx}`} />
            ))}
          </div>
        )}

        <div ref={observerRef} />
      </div>
    </div>
  )
}

export default CandidatePage
