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
  VenusAndMars,
  GraduationCap,
  Building2,
} from 'lucide-react'
import ProfileField from './profileField'

export type ProfileData = {
  name: string
  phone: string
  email: string
  location: string
  dateOfBirth: string
  gender: string
  experience: string
  skills: string
  hourlyRate: string
  citizenId: string
  issueDate: string
  issuePlace: string
  ethnicity: string
  educationLevel: string
  school: string
  major: string
  graduation: string
}

const ProfilePerson = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Nguyễn Văn An',
    phone: '+84 901 234 567',
    email: 'nguyenvanan@email.com',
    location: 'Nha Trang, Khánh Hòa',
    dateOfBirth: '1995-05-15',
    gender: 'Nam',
    experience: '3 năm kinh nghiệm',
    skills: 'Thợ điện, Sửa chữa máy móc',
    hourlyRate: '150,000 VNĐ/giờ',
    citizenId: '123456789012',
    issueDate: '2015-08-20',
    issuePlace: 'Công an Khánh Hòa',
    ethnicity: 'Kinh',
    educationLevel: 'Đại học',
    school: 'Đai học Nha Trang',
    major: 'CNTT',
    graduation: '',
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

  return (
    <div className=' relative'>
      {/* <div className=' fixed right-4'>
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
      </div> */}

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
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={Calendar}
              label='Ngày sinh'
              value={profileData.dateOfBirth}
              field='dateOfBirth'
              type='date'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={VenusAndMars}
              label='Giới tính'
              value={profileData.gender}
              field='gender'
              type='select'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
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
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={Mail}
              label='Email'
              value={profileData.email}
              field='email'
              type='email'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={MapPin}
              label='Địa chỉ'
              value={profileData.location}
              field='location'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
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
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={Calendar}
              label='Ngày cấp'
              value={profileData.issueDate}
              field='issueDate'
              type='date'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={FileText}
              label='Nơi cấp'
              value={profileData.issuePlace}
              field='issuePlace'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={Flag}
              label='Dân tộc'
              value={profileData.ethnicity}
              field='ethnicity'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-bold text-gray-900 mb-4 px-2 flex items-center'>
            Thông tin nghề nghiệp
          </h3>
          <div className=' space-y-3'>
            <ProfileField
              icon={GraduationCap}
              label='Trình độ học vấn'
              value={profileData.educationLevel}
              field='educationLevel'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />

            <ProfileField
              icon={Building2}
              label='Tên trường tốt nghiệp'
              value={profileData.school}
              field='school'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />

            <ProfileField
              icon={Building2}
              label='Chuyên ngành đào tạo'
              value={profileData.major}
              field='major'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
            <ProfileField
              icon={GraduationCap}
              label='Trình độ CMKT cao nhất'
              value={profileData.graduation}
              field='graduation'
              isEditing={isEditing}
              handleInputChange={handleInputChange}
              type='select'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePerson
