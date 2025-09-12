import { ROUTES } from '@/constants/routes'
import { Clock, DollarSign, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface JobListItem {
  id: string
  location: string
  salary: string
  thumbnail: string
  title: string
  company: string
  deadline: string
}
interface JobListProps {
  data: JobListItem[]
}

const JobList = ({ data }: JobListProps) => {
  const navigate = useNavigate()
  return (
    <div className='space-y-3'>
      {data.map((job) => (
        <div
          onClick={() => navigate(ROUTES.JOB_LIST + '/' + job.id)}
          key={job.id}
          className='bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow'
        >
          <div className='flex gap-4'>
            <div className=''>
              <img src={job.thumbnail} alt='name' className=' h-24 border' />
            </div>
            <div className='w-full'>
              <h3 className='font-semibold text-gray-900 mb-1 line-clamp-2'>
                {job.title}
              </h3>
              <p className='text-gray-600 text-sm mb-1 line-clamp-1'>
                {job.company}
              </p>

              <div className='flex flex-col gap-1'>
                {/* <p className='flex items-center space-x-1 text-gray-500'>
                  <Clock className='w-4 h-4' />
                  <span className='text-xs '>22/12/2025</span>
                </p> */}
                <div className='flex gap-4'>
                  {job.location && (
                    <p className='flex items-center space-x-1 text-gray-500'>
                      <MapPin className='w-4 h-4' />
                      <span className='text-xs text-gray-500'>
                        {job.location}
                      </span>
                    </p>
                  )}
                  {job.salary && (
                    <p className='flex items-center space-x-1 text-gray-500'>
                      <DollarSign className='w-4 h-4' />
                      <span className='text-xs text-gray-500'>
                        {job.salary}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobList
