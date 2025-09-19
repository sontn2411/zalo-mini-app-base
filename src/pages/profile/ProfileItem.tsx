import { ChevronRight, LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ProfileItemProps {
  id: number | string
  name: string
  icon: LucideIcon
  path: string
}

const ProfileItem = ({ id, name, icon: Icon, path }: ProfileItemProps) => {
  const navigate = useNavigate()

  return (
    <div
      key={id}
      onClick={() => navigate(path)}
      className='flex items-center justify-between px-6 py-4 border rounded-lg bg-white cursor-pointer hover:bg-gray-50'
    >
      <div className='flex items-center gap-4'>
        <Icon className='w-6 h-6 text-color-1' />
        <span className='text-base font-medium text-gray-700'>{name}</span>
      </div>
      <ChevronRight className='w-5 h-5 text-gray-400' />
    </div>
  )
}

export default ProfileItem
