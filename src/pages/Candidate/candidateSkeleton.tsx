const CandidateSkeleton = () => {
  return (
    <div className='py-4 mb-4 rounded-2xl space-y-6 animate-pulse'>
      {/* Header skeleton */}
      <div className='flex items-start space-x-4 px-4'>
        <div className='w-16 h-16 bg-gray-200 rounded-2xl' />
        <div className='flex-1 space-y-2'>
          <div className='h-4 bg-gray-200 rounded w-40' />
          <div className='h-3 bg-gray-200 rounded w-24' />
          <div className='flex gap-3'>
            <div className='h-3 bg-gray-200 rounded w-16' />
            <div className='h-3 bg-gray-200 rounded w-20' />
          </div>
        </div>
      </div>

      {/* Ngành nghề skeleton */}
      <div className='bg-white p-4 space-y-4'>
        <div className='h-4 bg-gray-200 rounded w-28' />
        <div className='h-3 bg-gray-200 rounded w-48' />
        <div className='grid grid-cols-2 gap-4'>
          <div className='h-3 bg-gray-200 rounded w-32' />
          <div className='h-3 bg-gray-200 rounded w-28' />
        </div>
        <div className='h-3 bg-gray-200 rounded w-40' />
      </div>

      {/* Thông tin chung skeleton */}
      <div className='bg-white p-4 space-y-4'>
        <div className='h-4 bg-gray-200 rounded w-36' />
        <div className='grid grid-cols-2 gap-4'>
          <div className='h-3 bg-gray-200 rounded w-24' />
          <div className='h-3 bg-gray-200 rounded w-20' />
          <div className='h-3 bg-gray-200 rounded w-32' />
          <div className='h-3 bg-gray-200 rounded w-28' />
        </div>
        <div className='h-3 bg-gray-200 rounded w-44' />
      </div>
    </div>
  )
}

export default CandidateSkeleton
