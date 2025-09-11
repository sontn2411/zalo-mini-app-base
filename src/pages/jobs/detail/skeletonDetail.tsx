const SkeletonCard = () => (
  <div className='h-16 bg-gray-200 rounded animate-pulse' />
)

const SkeletonDetail = () => {
  return (
    <div className='p-4 space-y-4'>
      <div className='flex items-start space-x-4'>
        <div className='w-20 h-20 bg-gray-200 rounded-2xl animate-pulse' />
        <div className='flex-1 space-y-2'>
          <div className='h-6 bg-gray-200 rounded w-3/4 animate-pulse'></div>
          <div className='h-4 bg-gray-200 rounded w-1/2 animate-pulse'></div>
          <div className='flex space-x-4 mt-2'>
            <div className='h-3 bg-gray-200 rounded w-12 animate-pulse'></div>
            <div className='h-3 bg-gray-200 rounded w-16 animate-pulse'></div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3'>
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
      </div>

      {/* Tabs Skeleton */}
      <div className='space-y-4'>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className='h-40 bg-gray-200 rounded animate-pulse'
            ></div>
          ))}
      </div>
    </div>
  )
}

export default SkeletonDetail
