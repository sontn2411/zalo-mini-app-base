import JobList from '@/components/shared/jobList'
import { ROUTES } from '@/constants/routes'
import { ChevronRight, Clock, DollarSign, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LatestJob = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Việc làm mới nhất
        </h2>
        <button
          onClick={() => navigate(ROUTES.JOB_LIST, { viewTransition: true })}
          className='text-color-1 text-sm font-medium flex items-center'
        >
          Xem tất cả
          <ChevronRight className='w-4 h-4 ml-1' />
        </button>
      </div>

      <JobList />
    </div>
  )
}

export default LatestJob
