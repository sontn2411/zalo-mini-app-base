import BannerHome from './banner'
import LatestJob from './latestJob'
import GeneralNews from './generalNews'
import { Search, Share2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Info, ShieldCheck, Newspaper, FileText } from 'lucide-react'
import { openShareSheet } from 'zmp-sdk/apis'
import SearchHome from './searchHome'

const menuItems = [
  { id: 1, name: 'Giới thiệu', icon: Info },
  { id: 2, name: 'Bảo hiểm thất nghiệp', icon: ShieldCheck },
  { id: 3, name: 'Tin tức', icon: Newspaper },
  { id: 4, name: 'Nghị định 70', icon: FileText },
]

function HomePage() {
  const navigate = useNavigate()
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
            <div
              key={item.id}
              className='flex flex-col items-center cursor-pointer'
            >
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-color-5'>
                <Icon className='w-5 h-5 text-color-4' />
              </div>
              <span className='mt-1 text-[10px]'>{item.name}</span>
            </div>
          )
        })}
      </div>

      <LatestJob />
      {/* <RegisterCTA /> */}
      <GeneralNews />
    </div>
  )
}

export default HomePage
