import { ROUTES } from '@/constants/routes'
import { noAvatar } from '@/static'
import useSettingStore from '@/store/useSetting'
import { DollarSign, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface CandidateItemProps {
  id: string
  thumbnail: string
  fullname: string
  job: string[]
  location: string
  salary: string
}

const CandidateItem = ({
  id,
  thumbnail,
  fullname,
  job,
  location,
  salary,
}: CandidateItemProps) => {
  const navigate = useNavigate()
  const { ListSalary } = useSettingStore()

  const salarySelect = ListSalary.find((item) => item.value === salary)

  return (
    <div
      key={id}
      className='bg-white rounded-sm p-4 shadow-sm hover:shadow-md transition-all duration-200'
      onClick={() => navigate(`${ROUTES.CANDIDATE}/${id}`)}
    >
      <div className='flex items-start space-x-4'>
        {/* Avatar */}
        <div className='relative flex-shrink-0 border rounded-sm p-1'>
          <img
            src={thumbnail || noAvatar}
            alt={fullname}
            className='w-20 h-20 object-cover rounded-sm'
            onError={(e) => {
              e.currentTarget.src = noAvatar
            }}
          />
        </div>

        {/* Thông tin */}
        <div className='flex-1 min-w-0'>
          {/* Jobs */}
          {Array.isArray(job) && job.length > 0 && (
            <div className='mb-1'>
              {(() => {
                const jobs = [...new Set(job as string[])]
                const [first, ...rest] = jobs

                return (
                  <>
                    <span className='block text-base font-semibold text-gray-900'>
                      {first}
                    </span>
                    {rest.length > 0 && (
                      <span className='text-sm text-gray-600'>
                        {rest.join(', ')}
                      </span>
                    )}
                  </>
                )
              })()}
            </div>
          )}
          <h3 className='font-medium text-gray-700 text-sm mb-2'>{fullname}</h3>
          <div className='flex gap-2'>
            {salarySelect && (
              <div className='flex items-center text-gray-500'>
                <DollarSign className='w-4 h-4 mr-1' />
                <span className='text-sm truncate'>{salarySelect.label}</span>
              </div>
            )}

            {location && (
              <div className='flex items-center text-gray-500'>
                <MapPin className='w-4 h-4 mr-1' />
                <span className='text-sm truncate'>{location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateItem
