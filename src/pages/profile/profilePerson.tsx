import React, { useState } from 'react'
import {
  User,
  Edit3,
  Camera,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Calendar,
  Save,
  X,
  Star,
  Award,
  Clock,
  IdCard,
  FileText,
  Flag,
} from 'lucide-react'

type ProfileData = {
  name: string
  phone: string
  email: string
  location: string
  dateOfBirth: string
  gender: 'male' | 'female' | 'other'
  experience: string
  skills: string
  hourlyRate: string
  citizenId: string
  issueDate: string
  issuePlace: string
  ethnicity: string
}

const ProfilePerson = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Nguyễn Văn An',
    phone: '+84 901 234 567',
    email: 'nguyenvanan@email.com',
    location: 'Nha Trang, Khánh Hòa',
    dateOfBirth: '1995-05-15',
    gender: 'male',
    experience: '3 năm kinh nghiệm',
    skills: 'Thợ điện, Sửa chữa máy móc',
    hourlyRate: '150,000 VNĐ/giờ',
    citizenId: '123456789012',
    issueDate: '2015-08-20',
    issuePlace: 'Công an Khánh Hòa',
    ethnicity: 'Kinh',
  })

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    setIsEditing(false)
    console.log('Profile saved:', profileData)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  type ProfileFieldProps = {
    icon: React.ElementType
    label: string
    value: string
    field: keyof ProfileData
    type?: string
    options?: { value: string; label: string }[]
    className?: string
  }

  const ProfileField: React.FC<ProfileFieldProps> = ({
    icon: Icon,
    label,
    value,
    field,
    type = 'text',
    options,
    className = '',
  }) => {
    if (!isEditing) {
      return (
        <div
          className={`flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 ${className}`}
        >
          <div className='flex-shrink-0'>
            <Icon size={20} className='text-gray-500' />
          </div>
          <div className='ml-3 flex-1'>
            <p className='text-sm font-medium text-gray-500'>{label}</p>
            <p className='text-gray-900 font-medium'>
              {value || 'Chưa cập nhật'}
            </p>
          </div>
        </div>
      )
    }

    if (type === 'select' && options) {
      return (
        <div className={`${className}`}>
          <label className='flex items-center text-sm font-medium text-gray-700 mb-2'>
            <Icon size={16} className='text-gray-500 mr-2' />
            {label}
          </label>
          <select
            value={value}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className='w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )
    }

    return (
      <div className={`${className}`}>
        <label className='flex items-center text-sm font-medium text-gray-700 mb-2'>
          <Icon size={16} className='text-gray-500 mr-2' />
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className='w-full p-4 bg-white border border-gray-200 rounded-xl transition-all focus:outline-color-1 focus:outline focus:outline-2 '
          placeholder={`Nhập ${label.toLowerCase()}`}
        />
      </div>
    )
  }

  return (
    <div className=' relative'>
      <div className=' fixed right-4'>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className='p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all'
          >
            <Edit3 size={20} />
          </button>
        ) : (
          <div className='flex flex-col items-center space-x-2'>
            <button
              onClick={handleCancel}
              className='p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all'
            >
              <X size={20} />
            </button>
            <button
              onClick={handleSave}
              className='p-3 bg-green-500 rounded-full hover:bg-green-600 transition-all shadow-lg'
            >
              <Save size={20} />
            </button>
          </div>
        )}
      </div>

      <div className='max-w-md mx-auto px-6 mt-6 '>
        {/* Personal Info */}
        <div className='mb-6'>
          <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
            Thông tin cá nhân
          </h3>
          <div className='space-y-3'>
            <ProfileField
              icon={User}
              label='Họ và tên'
              value={profileData.name}
              field='name'
              type='text'
            />
            <ProfileField
              icon={Calendar}
              label='Ngày sinh'
              value={profileData.dateOfBirth}
              field='dateOfBirth'
              type='date'
            />
            <ProfileField
              icon={User}
              label='Giới tính'
              value={profileData.gender}
              field='gender'
              type='select'
              options={[
                { value: 'male', label: 'Nam' },
                { value: 'female', label: 'Nữ' },
                { value: 'other', label: 'Khác' },
              ]}
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
              value={profileData.phone}
              field='phone'
              type='tel'
            />
            <ProfileField
              icon={Mail}
              label='Email'
              value={profileData.email}
              field='email'
              type='email'
            />
            <ProfileField
              icon={MapPin}
              label='Địa chỉ'
              value={profileData.location}
              field='location'
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
              value={profileData.citizenId}
              field='citizenId'
            />
            <ProfileField
              icon={Calendar}
              label='Ngày cấp'
              value={profileData.issueDate}
              field='issueDate'
              type='date'
            />
            <ProfileField
              icon={FileText}
              label='Nơi cấp'
              value={profileData.issuePlace}
              field='issuePlace'
            />
            <ProfileField
              icon={Flag}
              label='Dân tộc'
              value={profileData.ethnicity}
              field='ethnicity'
            />
          </div>
        </div>

        {/* Job Info */}
        <div className='mb-6'>
          <h3 className='text-lg font-bold text-gray-900 mb-4 px-2 flex items-center'>
            Thông tin nghề nghiệp
          </h3>
          <div className='space-y-3'>
            <ProfileField
              icon={Award}
              label='Kinh nghiệm'
              value={profileData.experience}
              field='experience'
            />
            <ProfileField
              icon={Star}
              label='Kỹ năng'
              value={profileData.skills}
              field='skills'
            />
            <ProfileField
              icon={Clock}
              label='Mức lương theo giờ'
              value={profileData.hourlyRate}
              field='hourlyRate'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePerson
