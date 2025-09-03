import { NavLink } from 'react-router-dom'
import IconUI from '../ui/iconUi'
import { ROUTES } from '@/constants/routes'

const NAV_ITEMS = [
  {
    id: 1,
    name: 'Trang chủ',
    icon: 'home',
    iconActive: 'homeActive',
    path: '/',
  },
  {
    id: 5,
    name: 'Tuyển dụng',
    icon: 'file',
    iconActive: 'activeFile',
    path: ROUTES.JOB_LIST,
  },
  {
    id: 6,
    name: 'Ứng viên',
    icon: 'users',
    iconActive: 'activeUsers',
    path: ROUTES.CANDIDATE,
  },
  {
    id: 2,
    name: 'Nghị định 70',
    icon: 'newspaper',
    iconActive: 'newspaperActive',
    path: ROUTES.ND70,
  },
  // {
  //   id: 3,
  //   name: 'Đăng tin',
  //   icon: 'briefcase',
  //   iconActive: 'briefcaseActive',
  //   path: '/jobs/posting',
  // },
  {
    id: 4,
    name: 'Cá nhân',
    icon: 'profile',
    iconActive: 'profileActive',
    path: '/profile',
  },
]

const Footer = () => {
  return (
    <div className='w-full relative z-[1]'>
      <div
        className='w-full px-2 pt-2 grid text-3xs relative z-20 justify-center pb-sb bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.08)]'
        style={{
          gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        }}
      >
        {NAV_ITEMS.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.path}
              className='flex flex-col items-center space-y-0.5 p-1 active:scale-105'
              viewTransition
            >
              {({ isActive }) =>
                item.name ? (
                  <>
                    <div className='w-6 h-6 flex justify-center items-center'>
                      <IconUI
                        icon={isActive ? item.iconActive : item.icon}
                        className={`w-6 h-6 ${
                          isActive ? 'text-color-1' : 'text-color-2'
                        }`}
                      />
                    </div>
                    <div
                      className={`text-xs  truncate font-medium ${
                        isActive ? 'text-color-1' : ' text-color-2'
                      }`}
                    >
                      {item.name}
                    </div>
                  </>
                ) : (
                  <IconUI icon={isActive ? item.iconActive : item.icon} />
                )
              }
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
