import { ROUTES } from '@/constants/routes'
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
          <div className='flex items-start justify-between mb-2'>
            <div className='flex-1'>
              <div className='flex gap-2'>
                <img src={job.thumbnail} alt='name' className='h-16 border' />
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>
                    {job.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-1'>{job.company}</p>
                  {job.deadline && (
                    <div className='flex items-center space-x-2'>
                      <span className='text-xs text-gray-500'>
                        Hạn: {job.deadline}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className=' text-xs flex gap-2 mt-2'>
                {job.location && (
                  <div className='bg-[#edeff0]  px-2 py-1 rounded-xl '>
                    <span>{job.location}</span>
                  </div>
                )}
                {job.salary && (
                  <div className='bg-[#edeff0]  px-2 py-1 rounded-xl '>
                    <span> {job.salary}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobList
