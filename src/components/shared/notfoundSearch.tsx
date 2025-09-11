import { SearchX } from 'lucide-react'

interface NotFoundProps {
  title?: string
  icon?: React.ReactNode
}
const NotFoundSearch = ({
  title = 'Không tìm thấy dữ liệu',
  icon = <SearchX className='w-10 h-10 text-gray-400' />,
}: NotFoundProps) => {
  return (
    <div className='flex flex-col items-center justify-center text-center py-12'>
      <div className='mb-3'>{icon}</div>
      <p className='text-gray-600 font-medium'>{title}</p>
    </div>
  )
}

export default NotFoundSearch
