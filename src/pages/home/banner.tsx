const data = [
  'https://thongtinvieclamkhanhhoa.vn/assets/images/banner/dai-bieu-2025-2030.jpg',
  'https://res.cloudinary.com/dmgnjoeyq/image/upload/v1756439368/download_os1jq0.png',
  'https://res.cloudinary.com/dmgnjoeyq/image/upload/v1756439368/download_1_j5sebq.jpg',
]

const BannerHome = () => {
  return (
    <ul className='flex flex-col gap-2'>
      {data.map((item, index) => {
        return (
          <li key={index} className='relative overflow-hidden rounded-md'>
            <img src={item} alt='banner' className='rounded-md w-full' />
            <span className='absolute inset-0 shimmer'></span>
          </li>
        )
      })}
    </ul>
  )
}

export default BannerHome
