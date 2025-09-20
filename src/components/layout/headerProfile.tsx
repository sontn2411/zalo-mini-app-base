import { To, useNavigate } from 'react-router-dom'

import { useUserStore } from '@/store/useUserStore'
import { Pen } from 'lucide-react'
import { useUserInfo } from '@/hooks/useUserInfo'
import { useEffect, useState } from 'react'
import { ROUTES } from '@/constants/routes'
import { noAvatar, noCompany } from '@/static'
import { email } from 'zod'
import IconUI from '../ui/iconUi'

const HeaderProfile = () => {
  const navigate = useNavigate()
  const { laboreProfile, enterpriseProfile } = useUserStore()
  const { userInfo } = useUserInfo()
  const [profile, setProfile] = useState<{ avatar: string; name: string }>({
    avatar: '',
    name: '',
  })

  useEffect(() => {
    if (enterpriseProfile) {
      setProfile({
        avatar: enterpriseProfile.avatart || noCompany,
        name: enterpriseProfile.companyname,
      })
    } else if (laboreProfile) {
      setProfile({
        avatar: laboreProfile.avatar || noAvatar,
        name: laboreProfile.fullname,
      })
    } else {
      setProfile({
        avatar: userInfo?.avatar || noAvatar,
        name: userInfo?.name || '',
      })
    }
  }, [userInfo, laboreProfile, enterpriseProfile])

  return (
    <div className='flex-none w-full min-h-12  px-4 pt-st pb-2 space-x-2 bg-color-3  relative'>
      {/* <div className='flex items-center gap-2 min-h-12'>
        <div>
          <img
            src={profile?.avatar}
            alt={profile?.name}
            className='w-12 h-12 rounded-full object-cover'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-base font-bold '>{profile?.name}</p>

          {(laboreProfile || enterpriseProfile) &&
            (!(laboreProfile?.isactive ?? enterpriseProfile?.isactive) ? (
              <span className='text-sm text-color-4 font-medium'>
                Đang chờ phê duyệt
              </span>
            ) : (
              <></>
            ))}
         
        </div>
      </div> */}
      <div className='   '>
        <button>
          <IconUI icon='previous' className='w-5 h-5' />
        </button>
      </div>
      <div className=' mx-auto w-full '>
        <div className='flex flex-col items-center gap-2'>
          <img
            src={profile?.avatar}
            alt={profile?.name}
            className='w-20 h-20 rounded-full object-cover border-4 border-white shadow-md'
            onError={(e) => ((e.target as HTMLImageElement).src = noAvatar)}
          />

          <p className='text-base font-bold text-color-4'>{profile?.name}</p>

          {(laboreProfile || enterpriseProfile) &&
            (!(laboreProfile?.isactive ?? enterpriseProfile?.isactive) ? (
              <span className='px-3 py-0.5 rounded-full text-xs font-medium bg-white text-gray-700 shadow-sm'>
                Đang chờ phê duyệt
              </span>
            ) : (
              <></>
            ))}

          {/* <span className='text-sm text-gray-700'>{profile?.email}</span> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile
