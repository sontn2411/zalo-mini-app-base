import { banner1, banner2, banner3 } from '@/static'
import { Swiper } from 'zmp-ui'

const data = [banner1, banner2, banner3]

const BannerHome = () => {
  return (
    <div className=''>
      <Swiper autoplay loop className='rounded-md overflow-hidden'>
        {data.map((item, index) => (
          <Swiper.Slide key={index}>
            <img
              src={item}
              alt={`banner-${index}`}
              className='w-full h-full object-cover rounded-md'
            />
          </Swiper.Slide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerHome
