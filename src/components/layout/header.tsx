import { logo } from '@/static'
import { To, useLocation, useMatches, useNavigate } from 'react-router-dom'
import IconUI from '../ui/iconUi'

type RouteHandle = {
  title?: string
  desc?: string
}

const Header = () => {
  const matches = useMatches()
  const currentRoute = matches[matches.length - 1]
  const handle = currentRoute?.handle as RouteHandle | undefined
  const title = handle?.title || 'Ứng dụng'

  const navigate = useNavigate()

  const location = useLocation()

  const isHome = location.pathname === '/'

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  return (
    <div className='flex-none w-full min-h-12  px-4 pt-st pb-2 space-x-2 bg-color-3  '>
      <div className='flex items-center min-h-12'>
        {isHome ? (
          <div className='flex items-center gap-2'>
            <img
              src='https://thongtinvieclamkhanhhoa.vn/assets/images/brand/trung-tam-dich-viec-lam-logo-footer.svg'
              alt='logo'
              className='h-10'
            />
            <div className='text-sm text-color-4 leading-tight flex flex-col justify-between '>
              <p className='text-[0.8rem] font-bold '>
                Trung tâm dịch vụ việc làm Khánh Hòa
              </p>
              <p className='text-xs font-medium'>Xin Chào!</p>
            </div>
          </div>
        ) : (
          <div className='flex gap-4 items-center text-color-4'>
            <button onClick={handlePrev}>
              <IconUI icon='previous' className='w-5 h-5' />
            </button>
            <div className='flex flex-col'>
              <span className='text-xl font-medium'>{title}</span>
              {handle && handle.desc && (
                <span className='text-sm '>{handle.desc}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
