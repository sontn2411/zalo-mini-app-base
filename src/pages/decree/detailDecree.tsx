import { useDetailJobForeigner } from '@/api/query/jobs'
import { useParams } from 'react-router-dom'

const SkeletonDetail = () => {
  return (
    <div className='p-4 animate-pulse'>
      <div className='h-6 bg-gray-200 rounded w-3/4 mb-4' />
      <div className='h-4 bg-gray-200 rounded w-1/3 mb-2' />
      <div className='h-3 bg-gray-200 rounded w-1/4 mb-6' />

      <div className='rounded-lg bg-white p-4 shadow-lg mt-6'>
        <div className='h-4 bg-gray-200 rounded w-1/2 mb-3' />
        <div className='space-y-2'>
          <div className='h-3 bg-gray-200 rounded w-full' />
          <div className='h-3 bg-gray-200 rounded w-5/6' />
          <div className='h-3 bg-gray-200 rounded w-2/3' />
          <div className='h-3 bg-gray-200 rounded w-4/5' />
        </div>
      </div>
    </div>
  )
}

const DetailDecree = () => {
  const { id } = useParams()
  if (!id) return null

  const { data, isLoading, isError } = useDetailJobForeigner(id)

  if (isLoading) return <SkeletonDetail />
  if (isError)
    return <div className='p-4 text-red-500'>Không thể tải dữ liệu</div>

  const job = data?.Data?.Data
  const detail = job?.detailjob?.[0]

  if (!job) return <div className='p-4'>Không tìm thấy công việc</div>

  return (
    <div className='p-4'>
      <div className='font-bold text-xl mb-4 text-gray-800'>{job.title}</div>
      <div className='text-base text-gray-700 font-semibold mb-1 flex items-center'>
        {job.companyname}
      </div>
      <div className='text-gray-500 text-sm mb-4'>
        Ngày đăng: {job.publishdate}
      </div>

      <div className='relative rounded-lg bg-white p-4 shadow-lg mt-6'>
        <div className='absolute left-0 top-0 w-full h-1 rounded-t-lg bg-orange-500' />
        <div className='font-bold text-orange-500 mb-2 mt-2'>
          {detail?.position || 'Chi tiết công việc'}
        </div>

        {detail ? (
          <ul className='text-gray-800 text-sm space-y-1'>
            <li>
              <b>Chức danh công việc:</b> {detail.jobtitle}
            </li>
            <li>
              <b>Số lượng:</b> {detail.quantity}
            </li>
            <li>
              <b>Thời hạn làm việc:</b> {detail.workingtime}
            </li>
            <li>
              <b>Địa điểm làm việc:</b> {detail.location}
            </li>
            <li>
              <b>Trình độ:</b> {detail.level}
            </li>
            <li>
              <b>Lương:</b> {detail.salary}
            </li>
            <li>
              <b>Kinh nghiệm:</b> {detail.experience}
            </li>
            <li>
              <b>Mô tả:</b>{' '}
              <span
                dangerouslySetInnerHTML={{ __html: detail.summary || '' }}
              />
            </li>
          </ul>
        ) : (
          <div className='text-gray-500 text-sm'>
            Chưa có chi tiết công việc
          </div>
        )}
      </div>
    </div>
  )
}

export default DetailDecree
