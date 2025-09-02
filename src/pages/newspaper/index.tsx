import IconUI from '@/components/ui/iconUi'

const data = [
  {
    id: 1,
    name: 'Phiên giao dịch việc làm trực tiếp tại Ủy ban nhân dân xã Bác Ái Đông.',
    image:
      'https://thongtinvieclamkhanhhoa.vn/FileStorage/Content/images/B1.jpg',
    date: '28/08/2025',
  },
  {
    id: 2,
    name: 'Phiên giao dịch việc làm trực tiếp tại Ủy ban nhân dân xã Bác Ái Đông.',
    image:
      'https://thongtinvieclamkhanhhoa.vn/FileStorage/Content/images/B1.jpg',
    date: '28/08/2025',
  },
  {
    id: 3,
    name: 'Phiên giao dịch việc làm trực tiếp tại Ủy ban nhân dân xã Bác Ái Đông.',
    image:
      'https://thongtinvieclamkhanhhoa.vn/FileStorage/Content/images/B1.jpg',
    date: '28/08/2025',
  },
  {
    id: 4,
    name: 'Phiên giao dịch việc làm trực tiếp tại Ủy ban nhân dân xã Bác Ái Đông.',
    image:
      'https://thongtinvieclamkhanhhoa.vn/FileStorage/Content/images/B1.jpg',
    date: '28/08/2025',
  },
]

const NewspaperPage = () => {
  return (
    <div className='mt-6 px-4'>
      <ul className=' flex flex-col gap-6'>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <div className='flex gap-2'>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className=' rounded-md w-32'
                  />
                </div>
                <div className='w-full flex flex-col justify-between'>
                  <p className='font-medium line-clamp-2'>{item.name}</p>
                  <div className='flex items-center gap-1 text-color-2 '>
                    <IconUI icon='timeOutline' className='w-4 h-4' />
                    <p>{item.date}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NewspaperPage
