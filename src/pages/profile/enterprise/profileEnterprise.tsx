import { Building2, ChevronRight, ClipboardList } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProfileItem from '../ProfileItem'
import { ROUTES } from '@/constants/routes'

const data = [
  {
    id: 1,
    name: 'Thông tin doanh nghiệp',
    icon: Building2,
    path: ROUTES.ENTERPRISEINFO,
  },
  {
    id: 2,
    name: 'Danh sách tin tuyển dụng',
    icon: ClipboardList,
    path: ROUTES.ENTERPRISERECRUITMENTS,
  },
]

const EnterpriseProfile = () => {
  return (
    <div className='space-y-3 p-4 pt-10  rounded-md'>
      {data.map((item) => {
        const Icon = item.icon
        return <ProfileItem key={item.id} {...item} icon={Icon} />
      })}
    </div>
  )
}

export default EnterpriseProfile
