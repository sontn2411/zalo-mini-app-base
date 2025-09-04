import { Swiper } from 'zmp-ui'

const data = [
  'https://picsum.photos/id/1018/600/300',
  'https://picsum.photos/id/1024/600/300',
  'https://picsum.photos/id/1035/600/300',
]

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
