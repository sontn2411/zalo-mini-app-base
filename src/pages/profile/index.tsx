import ProfilePerson from './profilePerson'
import ButtonCTA from './buttonCTA'
import { useUserStore } from '@/store/useUserStore'
import ProfileEnterprise from './profileEnterprise'
import { useAuthLogin } from '@/hooks/useAuthLogin'
import useSettingUser from '@/hooks/useSettingUser'
import ProfileLabore from './labore/profileLabore'
import EnterpriseProfile from './enterprise/profileEnterprise'
import HeaderProfile from '@/components/layout/headerProfile'

const SkeletonProfile = () => {
  return (
    <div className='p-4 space-y-4 animate-pulse'>
      {/* Info rows */}
      <div className='space-y-2'>
        <div className='h-3 w-3/4 bg-gray-300 rounded'></div>
        <div className='h-3 w-2/3 bg-gray-300 rounded'></div>
        <div className='h-3 w-1/2 bg-gray-300 rounded'></div>
      </div>

      {/* CTA button */}
      <div className='h-10 w-full bg-gray-300 rounded-lg'></div>
    </div>
  )
}

const ProfilePage = () => {
  const { laboreProfile, enterpriseProfile } = useUserStore()
  const isBtnRegister = laboreProfile || enterpriseProfile

  const scope = useSettingUser()

  const { isLoadingProfile } = useAuthLogin(scope)

  console.log('=========', laboreProfile)

  return (
    <>
      <HeaderProfile />
      <div className=' relative'>
        <div className='absolute bg-color-3 w-full h-20 top-0 left-0 '></div>
        <div className='relative z-10 '>
          {/* <ProfileLabore /> */}
          {isLoadingProfile && <SkeletonProfile />}

          {laboreProfile && <ProfileLabore />}
          {enterpriseProfile && <EnterpriseProfile />}
          {!isBtnRegister && (
            <div className='mt-10'>
              <ButtonCTA />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProfilePage
