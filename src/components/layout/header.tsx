import { To, useLocation, useMatches, useNavigate } from 'react-router-dom'
import IconUI from '../ui/iconUi'
import { logo } from '@/static'
import { Pen } from 'lucide-react'
import { useUserStore } from '@/store/useUserStore'
import { ROUTES } from '@/constants/routes'

type RouteHandle = {
  title?: string
  desc?: string
  edit?: boolean
}

const Header = () => {
  const matches = useMatches()
  const { enterpriseProfile, laboreProfile } = useUserStore()
  const currentRoute = matches[matches.length - 1]
  const handle = currentRoute?.handle as RouteHandle | undefined
  const title = handle?.title || 'Ứng dụng'
  const isEdit = handle?.edit || false

  const navigate = useNavigate()

  const location = useLocation()

  const isHome = location.pathname === '/'

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  const handleEdit = () => {
    if (enterpriseProfile) {
      navigate(ROUTES.EDITBUSINESS)
    } else {
      navigate(ROUTES.EDITPERSON)
    }
  }

  return (
    <div className='flex-none w-full min-h-12  px-4 pt-st pb-2 space-x-2 bg-color-3  '>
      <div className='flex items-center min-h-12'>
        {isHome ? (
          <div className='flex items-center gap-2'>
            <img src={logo} alt='logo' className='h-10' />
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
              {isEdit &&
                ((laboreProfile && laboreProfile.isactive) ||
                  (enterpriseProfile && enterpriseProfile.isactive)) && (
                  <button
                    onClick={handleEdit}
                    className='flex items-center gap-1 text-sm text-color-4 font-medium mt-1 pl-2'
                  >
                    <span>Chỉnh sửa hồ sơ</span>
                    <Pen className='w-4 h-4' />
                  </button>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
