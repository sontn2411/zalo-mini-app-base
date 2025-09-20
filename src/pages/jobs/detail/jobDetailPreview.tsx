import { useDataJobDetailEdit } from '@/api/query/jobs'
import { useParams } from 'react-router-dom'
import SkeletonDetail from './skeletonDetail'
import JobDetailContent from './jobDetailContent'

const PageNotFound = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
    <h2 className='text-2xl font-bold text-gray-800 mb-2'>
      Không tìm thấy công việc
    </h2>
    <p className='text-gray-500 mb-4'>
      Công việc bạn đang tìm không tồn tại hoặc đã bị xoá.
    </p>
  </div>
)

const JobDetailPreview = () => {
  const { id } = useParams()
  if (!id) return null

  const { data, isLoading } = useDataJobDetailEdit(id)
  const dataJob = data?.Data
  const job = data?.Data

  if (isLoading) {
    return <SkeletonDetail />
  }

  if (!job) {
    return <PageNotFound />
  }

  return <JobDetailContent job={job} />
}

export default JobDetailPreview
