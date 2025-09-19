import { ROUTES } from '@/constants/routes'
import { Search, Share2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { openShareSheet } from 'zmp-sdk/apis'

const dataBtn = [
  { id: 1, name: 'Việc tìm người', path: ROUTES.JOB_LIST },
  { id: 2, name: 'Người tìm việc', path: ROUTES.CANDIDATE },
  { id: 3, name: 'Việc làm nước ngoài', path: ROUTES.LABOREXPORT },
]

const SearchHome = () => {
  const navigate = useNavigate()

  const handleShareApp = async () => {
    await openShareSheet({
      type: 'zmp_deep_link',
      data: {
        title: 'Trung tâm dịch vụ việc làm Khánh Hòa - Trang chủ',
        description: 'Trang chủ',
        thumbnail:
          'https://thongtinvieclamkhanhhoa.vn/assets/images/share-img.jpg',
      },
    })
  }

  return (
    <>
      <div className='flex w-full gap-2 items-center'>
        <div className='relative flex-1'>
          <Search className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none' />
          <input
            type='text'
            placeholder='Tìm kiếm công việc'
            className='w-full h-9 pl-10 pr-3 text-sm border rounded-md focus:ring-1 focus:ring-color-1 focus:outline-none text-gray-700 placeholder:text-gray-500'
            onFocus={() =>
              navigate(ROUTES.JOB_LIST, {
                viewTransition: true,
                state: { home: true },
              })
            }
          />
        </div>

        <button
          onClick={handleShareApp}
          className='text-color-2 p-2 rounded-md hover:bg-gray-100'
        >
          <Share2 className='w-5 h-5' />
        </button>
      </div>

      <ul className='flex flex-wrap gap-2 mt-1 '>
        {dataBtn.map((item) => (
          <li key={item.id} className='pt-2'>
            <Link
              viewTransition={true}
              to={item.path}
              className='text-[0.7rem] px-2 py-2.5 border rounded-md bg-color-4 text-white font-medium transition-colors'
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SearchHome
