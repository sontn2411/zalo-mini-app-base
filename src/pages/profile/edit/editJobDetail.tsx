import { useDataJobDetail, useDataJobDetailEdit } from '@/api/query/jobs'
import JobPostingPage from '@/pages/jobs/job-posting'
import { useParams } from 'react-router-dom'

const EditJobDetail = () => {
  const { id } = useParams()

  if (!id) return null

  const { data, isLoading, isError } = useDataJobDetailEdit(id)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading job detail</div>

  return (
    <div>
      <JobPostingPage dataEdit={data.Data} />
    </div>
  )
}

export default EditJobDetail
