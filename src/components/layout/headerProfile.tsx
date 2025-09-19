import { To, useNavigate } from 'react-router-dom'

import { useUserStore } from '@/store/useUserStore'
import { Pen } from 'lucide-react'
import { useUserInfo } from '@/hooks/useUserInfo'
import { useEffect, useState } from 'react'
import { ROUTES } from '@/constants/routes'
import { noAvatar, noCompany } from '@/static'

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

  // const handlePrev = () => {
  //   navigate(-1 as To, {
  //     viewTransition: true,
  //   })
  // }

  // const handleEdit = () => {
  //   if (enterpriseProfile) {
  //     navigate(ROUTES.EDITBUSINESS)
  //   } else {
  //     navigate(ROUTES.EDITPERSON)
  //   }
  // }

  return (
    <div className='flex-none w-full min-h-12  px-4 pt-st pb-2 space-x-2 bg-color-3  '>
      <div className='flex items-center gap-2 min-h-12'>
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
              // <button
              //   onClick={handleEdit}
              //   className='flex items-center gap-1 text-sm text-color-4 font-medium mt-1'
              // >
              //   <Pen className='w-4 h-4' />
              //   <span>Chỉnh sửa hồ sơ</span>
              // </button>
              <></>
            ))}
          {/* */}
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile
