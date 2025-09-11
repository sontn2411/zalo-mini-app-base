import { useDataNewList } from '@/api/query/news'
import NewsList from '@/components/shared/newsList'

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
      {
        threshold: 1.0,
      }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [hasNextPage, fetchNextPage, isLoading])
  return (
    <div className='p-4'>
      {data?.pages.map((page, i) => (
        <NewsList key={i} data={page.Data.Data} isLoading={isLoading} />
      ))}

      <div ref={loadMoreRef} className='h-10 flex items-center justify-center'>
        {isFetchingNextPage ? <span>Đang tải...</span> : null}
      </div>
    </div>
  )
}

export default NewspaperPage
