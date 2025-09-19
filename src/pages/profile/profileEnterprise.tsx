import { MapPin, Phone, Mail, Building2, Users } from 'lucide-react'
import ProfileField from './profileField'
import { useUserStore } from '@/store/useUserStore'
import useSettingStore from '@/store/useSetting'

const ProfileEnterprise = () => {
  const { enterpriseProfile } = useUserStore()
  const { BusinessSize } = useSettingStore()

  const defaultSize = BusinessSize.find(
    (item) => item.value === enterpriseProfile?.businesssize
  )

  return (
    <div className='relative px-4 mt-6'>
      <div className='mb-6'>
        <div className='space-y-3'>
          <ProfileField
            icon={Building2}
            label='Tên công ty'
            value={enterpriseProfile?.companyname || ''}
          />
          <ProfileField
            icon={Mail}
            label='Email'
            value={enterpriseProfile?.email || ''}
          />
          <ProfileField
            icon={Mail}
            label='Email Công ty'
            value={enterpriseProfile?.companyemail || ''}
          />
          <ProfileField
            icon={Phone}
            label='Số điện thoại'
            value={enterpriseProfile?.companyphone || ''}
          />
          <ProfileField
            icon={MapPin}
            label='Địa chỉ'
            value={enterpriseProfile?.address || ''}
          />
          <ProfileField
            icon={Users}
            label='Quy mô'
            value={defaultSize?.label || ''}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileEnterprise
