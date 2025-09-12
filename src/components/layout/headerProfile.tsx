import { To, useNavigate } from 'react-router-dom'

import { useUserStore } from '@/store/useUserStore'

const HeaderProfile = () => {
  const navigate = useNavigate()
  const { userInfo } = useUserStore()

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  return (
    <div className='flex-none w-full min-h-12  px-4 pt-st pb-2 space-x-2 bg-color-3  '>
      <div className='flex items-center gap-2 min-h-12'>
        <div>
          <img
            src={userInfo.avatar}
            alt={userInfo.name}
            className='w-16 h-16 rounded-full object-cover'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xl font-bold '>{userInfo.name}</p>
          {/* <button className='flex items-center gap-1 text-sm text-color-4 font-medium mt-1'>
            <Pen className='w-4 h-4' />
            <span>Chỉnh sửa hồ sơ</span>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile
