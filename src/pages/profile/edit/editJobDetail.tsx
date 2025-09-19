import { useDataJobDetail } from '@/api/query/jobs'
import { useParams } from 'react-router-dom'

const EditJobDetail = () => {
  const { id } = useParams()

  if (!id) return null

  const { data, isLoading } = useDataJobDetail(id)

  console.log('===data====', data)

  return <div></div>
}

export default EditJobDetail
