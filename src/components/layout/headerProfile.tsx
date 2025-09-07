import { To, useNavigate } from 'react-router-dom'
import IconUI from '../ui/iconUi'
import { Edit3, Pen, Save, SquarePen, X } from 'lucide-react'

import { getRouteParams, openShareSheet } from 'zmp-sdk/apis'
import { Button } from 'zmp-ui'

const data = {
  avatar: 'https://h5.zdn.vn/static/images/avatar.png',
  id: '3368637342326461234',
  name: 'Trần Ngọc Sơn',
}

const HeaderProfile = () => {
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  return (
    <div className='flex-none w-full min-h-12  px-4 pt-st pb-2 space-x-2 bg-color-3  '>
      <div className='flex items-center gap-2 min-h-12'>
        <div>
          <img src={data.avatar} alt={data.name} className='w-16 h-16' />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xl font-bold '>{data.name}</p>
          <button className='flex items-center gap-1 text-sm text-color-4 font-medium mt-1'>
            <Pen className='w-4 h-4' />
            <span>Chỉnh sửa hồ sơ</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile
