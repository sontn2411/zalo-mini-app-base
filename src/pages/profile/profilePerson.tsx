import {
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  IdCard,
  FileText,
  Flag,
  VenusAndMars,
  GraduationCap,
  Building2,
  Briefcase,
} from 'lucide-react'
import ProfileField from './profileField'
import { useUserStore } from '@/store/useUserStore'
import useSettingStore from '@/store/useSetting'

const ProfilePerson = () => {
  const { laboreProfile } = useUserStore()
  const { ListEthnicity, ListGenderUser, ListJob } = useSettingStore()

  const defaultGender = ListGenderUser.find(
    (item) => item.value === laboreProfile?.gender
  )
  const defaultEthnicity = ListEthnicity.find(
    (item) => item.value === laboreProfile?.ethnicity
  )

  const defaultJob = ListJob.filter((item) =>
    laboreProfile?.desiredcareer.includes(item.value)
  )

  return (
    <div className='relative px-4 mt-6'>
      {/* Personal Info */}
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin cá nhân
        </h3>
        <div className='space-y-3'>
          <ProfileField
            icon={User}
            label='Họ và tên'
            value={laboreProfile?.fullname}
          />
          <ProfileField
            icon={Calendar}
            label='Ngày sinh'
            value={laboreProfile?.dateofbirth}
          />
          <ProfileField
            icon={VenusAndMars}
            label='Giới tính'
            value={defaultGender?.label}
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin liên hệ
        </h3>
        <div className='space-y-3'>
          <ProfileField
            icon={Phone}
            label='Số điện thoại'
            value={laboreProfile?.phone}
          />
          <ProfileField
            icon={Mail}
            label='Email'
            value={laboreProfile?.email}
          />
          <ProfileField
            icon={MapPin}
            label='Địa chỉ'
            value={laboreProfile?.address}
          />
        </div>
      </div>

      {/* Identity Info */}
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin định danh
        </h3>
        <div className='space-y-3'>
          <ProfileField
            icon={IdCard}
            label='Căn Cước Công Dân'
            value={laboreProfile?.cid}
          />
          <ProfileField
            icon={Calendar}
            label='Ngày cấp'
            value={laboreProfile?.ciddate}
          />
          <ProfileField
            icon={FileText}
            label='Nơi cấp'
            value={laboreProfile?.cidaddress}
          />
          <ProfileField
            icon={Flag}
            label='Dân tộc'
            value={defaultEthnicity?.label}
          />
        </div>
      </div>

      {/* Career Info */}
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin nghề nghiệp
        </h3>
        <div className='space-y-3'>
          <ProfileField
            icon={GraduationCap}
            label='Trình độ học vấn'
            value={laboreProfile?.traininglevel}
          />
          <ProfileField
            icon={Building2}
            label='Tên trường tốt nghiệp'
            value={laboreProfile?.schoolgraduate}
          />
          <ProfileField
            icon={Building2}
            label='Chuyên ngành đào tạo'
            value={laboreProfile?.trainingmajor}
          />

          <ProfileField
            icon={Briefcase}
            label='Nghề nghiệp mong muốn'
            value={
              defaultJob.length > 0
                ? defaultJob.map((job) => job.label).join('\n')
                : ''
            }
          />
        </div>
      </div>

      <div className='mb-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Giới thiệu bản thân
        </h3>
        <div
          className='flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100'
          dangerouslySetInnerHTML={{ __html: laboreProfile?.summary || '' }}
        ></div>
      </div>
    </div>
  )
}

export default ProfilePerson
