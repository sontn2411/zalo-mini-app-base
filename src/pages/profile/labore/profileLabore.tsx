import { ROUTES } from '@/constants/routes'
import {
  Briefcase,
  ChevronRight,
  Gift,
  GraduationCap,
  Star,
  User,
  BookOpen,
} from 'lucide-react'

import ProfileItem from '../ProfileItem'

const data = [
  {
    id: 1,
    name: 'Thông tin cá nhân',
    icon: User,
    path: ROUTES.EDITINFOMATION,
  },
  {
    id: 2,
    name: 'Học vấn',
    icon: GraduationCap,
    path: ROUTES.EDITIEDUCATION,
  },

  {
    id: 4,
    name: 'Kinh nghiệm & Kỹ năng',
    icon: Briefcase,
    path: ROUTES.EDITIEXPERIENCE,
  },
  {
    id: 3,
    name: 'Tin học & Ngoại ngữ',
    icon: BookOpen,
    path: ROUTES.EDITILANGUAGEIT,
  },
  {
    id: 5,
    name: 'Phúc lợi & Mong muốn',
    icon: Gift,
    path: ROUTES.EDITIBENFITS,
  },
]

const ProfileLabore = () => {
  return (
    <div className='space-y-3 p-4 pt-10  rounded-md'>
      {data.map((item) => {
        const Icon = item.icon
        return <ProfileItem key={item.id} {...item} icon={Icon} />
      })}
    </div>
  )
}

export default ProfileLabore
