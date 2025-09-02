import IconUI from '@/components/ui/iconUi'
import BannerHome from './banner'
import RegisterCTA from './registerCTA'
import LatestJob from './latestJob'
import GeneralNews from './generalNews'

function HomePage() {
  return (
    <div className=' p-4 flex flex-col gap-8'>
      <BannerHome />
      <RegisterCTA />
      <LatestJob />
      <GeneralNews />
    </div>
  )
}

export default HomePage
