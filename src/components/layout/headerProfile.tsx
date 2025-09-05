import { To, useNavigate } from 'react-router-dom'
import IconUI from '../ui/iconUi'
import { Edit3, Save, SquarePen, X } from 'lucide-react'

import { getRouteParams, openShareSheet } from 'zmp-sdk/apis'
import { Button } from 'zmp-ui'

const data = {
  avatar: 'https://h5.zdn.vn/static/images/avatar.png',
  id: '3368637342326461234',
  name: 'User Name',
}

const HeaderProfile = () => {
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  return (
    <div className=''>
      {/* <div className='flex items-center gap-3'>
          <img
            src={data.avatar}
            alt={data.name}
            className='w-10 h-10 rounded-full object-cover border'
          />
          <span className='text-base font-semibold text-gray-900'>
            {data.name}
          </span>
        </div> */}

      <div className='bg-gradient-to-r from-blue-600 to-purple-600  pt-st text-white'>
        <div className='max-w-md mx-auto px-6 pb-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-bold'>Hồ sơ</h2>
              <p className='text-blue-100 text-sm'>Quản lý thông tin cá nhân</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile
