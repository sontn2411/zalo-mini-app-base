import { ROUTES } from '@/constants/routes'
import { DollarSign, Eye, Pen, Trash } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface RecruitmentItemProps {
  id: string
  status: string
  salary: string
  enddate: string
  location: string
  title: string
}

const RecruitmentItem = ({
  id,
  status,
  salary,
  enddate,
  location,
  title,
}: RecruitmentItemProps) => {
  const navigate = useNavigate()

  const handleView = () => {
    navigate(ROUTES.JOB_LIST + '/' + id)
  }

  return (
    <div
      key={id}
      className='p-4 rounded-lg bg-white hover:shadow-sm transition'
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-base font-semibold text-gray-800'>{title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === 'Lưu nháp'
              ? 'bg-gray-100 text-gray-600'
              : status === 'Chờ duyệt'
              ? 'bg-yellow-100 text-yellow-700'
              : status === 'Đang tuyển'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {status}
        </span>
      </div>

      <p className='text-sm text-gray-600 mt-2 flex items-center gap-1'>
        <DollarSign className='w-4 h-4 text-gray-500' />
        {salary}
      </p>
      {/* <p className='text-sm text-gray-600 flex items-center gap-1 mt-1'>
        <MapPin className='w-4 h-4 text-gray-500' />
        {location}
      </p> */}
      <p className='text-xs text-gray-500 mt-1'>Hạn tuyển: {enddate}</p>

      <div className='flex gap-2 mt-3'>
        <button
          onClick={handleView}
          className='flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200'
        >
          <Eye className='w-4 h-4' />
          Chi tiết
        </button>
        {status === 'Lưu nháp' || status === 'Chờ duyệt' ? (
          <button className='flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-color-5 text-color-1'>
            <Pen className='w-4 h-4' />
            Chỉnh sửa
          </button>
        ) : null}

        {status === 'Lưu nháp' && (
          <button
            // onClick={handleDelete}
            className='flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200'
          >
            <Trash className='w-4 h-4' />
            Xóa
          </button>
        )}
      </div>
    </div>
  )
}

export default RecruitmentItem
