import { useState } from 'react'
import { ROUTES } from '@/constants/routes'
import { DollarSign, Eye, Pen, Trash } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { nativeStorage } from 'zmp-sdk'
import { KEYSTORAGE } from '@/constants/message'
import { deleteRecruitment } from '@/api/query/jobs'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

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
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const handleView = () => {
    navigate(ROUTES.JOB_DETAIL.replace(':id', id))
  }

  const handleNavigateEdit = () => {
    navigate(ROUTES.ENTERPRISEEDITJOB.replace(':id', id))
  }

  const queryClient = useQueryClient()

  const deleteJob = deleteRecruitment()

  const handleDelete = () => {
    deleteJob.mutate(id, {
      onSuccess: (res) => {
        const { StatusResult } = res
        setIsConfirmOpen(false)
        if (StatusResult.Code == 0) {
          queryClient.invalidateQueries({ queryKey: ['jobByEnterprise'] })
        } else {
          toast.error('Xóa tin tuyển dụng thất bại')
        }
      },
      onError: () => {
        toast.error('Xóa tin tuyển dụng thất bại')
        setIsConfirmOpen(false)
      },
    })
  }

  // console.log(
  //   'Rendering RecruitmentItem:',
  //   nativeStorage.getItem(KEYSTORAGE.ACCESSTOKEN)
  // )

  return (
    <>
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
                : status === 'Chờ xét duyệt'
                ? 'bg-yellow-100 text-yellow-700'
                : status === 'Đăng tuyển'
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
        <p className='text-xs text-gray-500 mt-1'>Hạn tuyển: {enddate}</p>

        <div className='flex gap-2 mt-3'>
          <button
            onClick={handleView}
            className='flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200'
          >
            <Eye className='w-4 h-4' />
            Chi tiết
          </button>

          {(status === 'Lưu nháp' || status === 'Chờ duyệt') && (
            <button
              onClick={handleNavigateEdit}
              className='flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-color-5 text-color-1'
            >
              <Pen className='w-4 h-4' />
              Chỉnh sửa
            </button>
          )}

          {status === 'Lưu nháp' && (
            <button
              onClick={() => setIsConfirmOpen(true)}
              className='flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200'
            >
              <Trash className='w-4 h-4' />
              Xóa
            </button>
          )}
        </div>
      </div>

      {/* Modal xác nhận xóa */}
      {isConfirmOpen && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-2xl p-6 w-[85%] max-w-sm shadow-lg'>
            <p className='text-lg font-semibold text-gray-800 text-center'>
              Bạn có chắc chắn muốn xóa tin này?
            </p>
            <div className='flex gap-3 mt-6'>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className='flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 text-base font-medium'
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className='flex-1 py-3 rounded-xl bg-red-500 text-white text-base font-medium'
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RecruitmentItem
