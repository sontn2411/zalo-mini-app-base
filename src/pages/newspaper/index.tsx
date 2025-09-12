import { useDataNewList } from '@/api/query/news'
import NewsList from '@/components/shared/newsList'
import NewsSkeleton from '@/components/shared/newsSkeleton'

import { useEffect, useRef } from 'react'

const NewspaperPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useDataNewList()

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!loadMoreRef.current || isLoading) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [hasNextPage, fetchNextPage, isLoading])

  return (
    <div className='p-4 space-y-4'>
      {isLoading ? (
        <>
          <NewsSkeleton />
          <NewsSkeleton />
          <NewsSkeleton />
          <NewsSkeleton />
          <NewsSkeleton />
        </>
      ) : (
        data?.pages.map((page, i) => (
          <NewsList key={i} data={page.Data.Data} isLoading={isLoading} />
        ))
      )}

      <div ref={loadMoreRef} className='h-10 flex items-center justify-center'>
        {isFetchingNextPage ? (
          <div className='w-full space-y-2'>
            <NewsSkeleton />
            <NewsSkeleton />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NewspaperPage
