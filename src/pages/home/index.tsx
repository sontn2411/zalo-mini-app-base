import BannerHome from './banner'
import LatestJob from './latestJob'
import GeneralNews from './generalNews'
import { Link } from 'react-router-dom'
import { Info, ShieldCheck, Newspaper, FileText } from 'lucide-react'
import SearchHome from './searchHome'
import { ROUTES } from '@/constants/routes'
import { useHomeData } from '@/api/query/home'

const menuItems = [
  { id: 1, name: 'Giới thiệu', icon: Info, path: ROUTES.ABOUT },
  {
    id: 2,
    name: 'Bảo hiểm thất nghiệp',
    icon: ShieldCheck,
    path: ROUTES.INSURANCE,
  },
  { id: 3, name: 'Tin tức', icon: Newspaper, path: ROUTES.NEWS },
  { id: 4, name: 'Nghị định 70', icon: FileText, path: ROUTES.ND70 },
]

function HomePage() {
  const { data, isLoading } = useHomeData()

  return (
    <div className=' p-4 flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <SearchHome />
      </div>

      <BannerHome />

      <div className='grid grid-cols-4 gap-4 text-center'>
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              viewTransition={true}
              to={item.path}
              key={item.id}
              className='flex flex-col items-center cursor-pointer'
            >
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-color-5'>
                <Icon className='w-5 h-5 text-color-4' />
              </div>
              <span className='mt-1 text-[10px]'>{item.name}</span>
            </Link>
          )
        })}
      </div>

      <LatestJob />

      <GeneralNews data={data?.Data?.Data ?? []} isLoading={isLoading} />
    </div>
  )
}

export default HomePage
