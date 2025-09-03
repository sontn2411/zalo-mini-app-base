import {
  Briefcase,
  Camera,
  CheckCircle,
  Clock,
  DollarSign,
  Edit3,
  FileText,
  Gift,
  GraduationCap,
  Lock,
  MapPin,
  Phone,
  Save,
  Shield,
  User,
  X,
} from 'lucide-react'
import { useState } from 'react'
import ProfileSection from './profileSection'
import EditableField from './editableField'
import ReadOnlyField from './readOnlyField'

const experienceOptions = [
  'Chưa có kinh nghiệm',
  'Dưới 1 năm',
  '1-2 năm',
  '2-5 năm',
  '5-10 năm',
  'Trên 10 năm',
]

const salaryRanges = [
  'Dưới 5 triệu',
  '5-10 triệu',
  '10-20 triệu',
  '20-50 triệu',
  'Thỏa thuận',
  'Lương ngày',
  'Lương Giờ',
]

const benefitOptions = [
  'Căn tin',
  'Chăm sóc sức khỏe',
  'Điện thoại  ',
  'Nghỉ phép có lương',
  'Hoạt động nhóm',
  'Đào tạo',
  'Xe đưa đón',
  'Du lịch',
  'Phiếu quà tặng',
  'Hỗ trợ bữa ăn',
  'Đóng BHXH, BHYT, BHTN',
]

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)

  const [originalData] = useState({
    fullName: 'Nguyễn Văn Minh',
    address: '123 Đường Trần Phú, Phường Nam Nha Trang, Tỉnh Khánh Hòa',
    phone: '0905123456',
    jobPosition: 'Nhân viên Kế toán',
    educationLevel: 'Đại học',
    workExperience: '2-5 năm',
    expectedSalary: '10-15 triệu',
    otherBenefits: 'Bảo hiểm y tế, Bảo hiểm xã hội, Thưởng tháng 13',
    notes:
      'Có kinh nghiệm làm việc với phần mềm kế toán MISA, Excel nâng cao. Mong muốn làm việc trong môi trường chuyên nghiệp.',
    username: 'nguyenvanminh',
    password: '',
    confirmPassword: '',
    joinDate: '15/08/2025',
    profileCompletion: 85,
  })

  const handleSectionEdit = (section: string) => {
    setActiveSection(section)
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    //  setFormData({ ...originalData })
    setIsEditing(false)
    setActiveSection('')
    //  setErrors({})
  }

  const handleSave = () => {
    setIsSaving(true)
    setShowSuccessMessage(true)
    handleCancelEdit()

    setTimeout(() => {
      setShowSuccessMessage(false)
      setIsSaving(false)
    }, 2000)
  }

  return (
    <div className='mt-4 pb-6 px-4 relative'>
      <div className='bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white border-opacity-50'>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <div className='w-16 h-16 bg-gradient-to-br bg-color-1 rounded-2xl flex items-center justify-center shadow-lg'>
              <User className='w-8 h-8 text-white' />
            </div>
            {/* <button className='absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-md border-2 border-white'>
              <Camera className='w-3 h-3 text-white' />
            </button> */}
          </div>
          <div className='flex-1'>
            <h2 className='text-lg font-bold text-gray-900'>
              {originalData.fullName}
            </h2>
            <p className='text-gray-600 text-sm mb-2'>
              {originalData.jobPosition}
            </p>
          </div>
        </div>
      </div>

      {showSuccessMessage && (
        <div className='mx-4 mt-4 bg-green-50 border border-green-200 rounded-xl p-4 animate-slideDown sticky top-0 z-50 backdrop-blur-md'>
          <div className='flex items-center'>
            <CheckCircle className='w-5 h-5 text-green-600 mr-3' />
            <p className='text-sm font-medium text-green-800'>
              Thông tin đã được cập nhật thành công!
            </p>
          </div>
        </div>
      )}

      {isEditing && (
        <div className=' mt-4 bg-color-5 border border-color-1 rounded-xl p-4 sticky top-0 z-50 backdrop-blur-md'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Edit3 className='w-5 h-5 text-color-4 mr-2' />
              <span className='text-sm font-medium text-color-4'>
                Chế độ chỉnh sửa
              </span>
            </div>
            <div className='flex space-x-2'>
              <button
                onClick={handleCancelEdit}
                className='px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors'
              >
                <X className='w-4 h-4 inline mr-1' />
                Hủy
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className='px-3 py-1 bg-color-1 text-white rounded-lg text-sm  transition-colors disabled:opacity-50 flex items-center'
              >
                {isSaving ? (
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1'></div>
                ) : (
                  <Save className='w-4 h-4 mr-1' />
                )}
                {isSaving ? 'Đang lưu...' : 'Lưu'}
              </button>
            </div>
          </div>
        </div>
      )}

      <ProfileSection
        title='Thông tin cá nhân'
        icon={User}
        section='personal'
        handleSectionEdit={handleSectionEdit}
      >
        {isEditing && activeSection === 'personal' ? (
          <>
            <EditableField
              label='Họ và tên'
              name='fullName'
              value={originalData.fullName}
              // onChange={handleInputChange}
              placeholder='Nhập họ và tên đầy đủ'
              icon={User}
              // error={errors.fullName}
            />
            <EditableField
              label='Địa chỉ'
              name='address'
              value={originalData.address}
              // onChange={handleInputChange}
              placeholder='Nhập địa chỉ chi tiết'
              icon={MapPin}
              // error={errors.address}
              isTextarea={true}
              rows={3}
            />
            <ReadOnlyField
              label='Số điện thoại'
              value={originalData.phone}
              icon={Phone}
              locked={true}
            />
          </>
        ) : (
          <>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <User className='w-4 h-4 text-gray-500 mr-2' />
                <span className='text-sm text-gray-600'>Họ và tên:</span>
                <span className='text-sm font-medium text-gray-900 ml-2'>
                  {originalData.fullName}
                </span>
              </div>
              <div className='flex items-start'>
                <MapPin className='w-4 h-4 text-gray-500 mr-2 mt-0.5' />
                <div>
                  <span className='text-sm text-gray-600'>Địa chỉ:</span>
                  <p className='text-sm font-medium text-gray-900'>
                    {originalData.address}
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <Phone className='w-4 h-4 text-gray-500 mr-2' />
                <span className='text-sm text-gray-600'>Số điện thoại:</span>
                <span className='text-sm font-medium text-gray-900 ml-2'>
                  {originalData.phone}
                </span>
                <Lock className='w-3 h-3 text-gray-400 ml-1' />
              </div>
            </div>
          </>
        )}
      </ProfileSection>

      <ProfileSection
        title='Thông tin nghề nghiệp'
        icon={Briefcase}
        section='professional'
        handleSectionEdit={handleSectionEdit}
      >
        {isEditing && activeSection === 'professional' ? (
          <>
            <EditableField
              label='Vị trí công việc mong muốn'
              name='jobPosition'
              value={originalData.jobPosition}
              // onChange={handleInputChange}
              placeholder='VD: Nhân viên kế toán, Lập trình viên...'
              icon={Briefcase}
              // error={errors.jobPosition}
            />
            <EditableField
              label='Trình độ học vấn'
              name='educationLevel'
              value={originalData.educationLevel}
              // onChange={handleInputChange}
              placeholder='Chọn trình độ học vấn'
              icon={GraduationCap}
              // options={educationOptions}
            />
            <EditableField
              label='Kinh nghiệm làm việc'
              name='workExperience'
              value={originalData.workExperience}
              // onChange={handleInputChange}
              placeholder='Chọn kinh nghiệm'
              icon={Clock}
              options={experienceOptions}
            />
            <EditableField
              label='Mức lương mong muốn'
              name='expectedSalary'
              value={originalData.expectedSalary}
              // onChange={handleInputChange}
              placeholder='Chọn mức lương'
              icon={DollarSign}
              options={salaryRanges}
            />
            {/* <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <Gift className='w-4 h-4 inline mr-2' />
                Chế độ phúc lợi
              </label>
              <CheckboxGrid
                options={benefitOptions}
                selectedValues={formData.otherBenefits}
                onChange={handleInputChange}
              />
            </div> */}
            <EditableField
              label='Ghi chú thêm'
              name='notes'
              value={originalData.notes}
              // onChange={handleInputChange}
              placeholder='Thông tin bổ sung về bản thân, kỹ năng đặc biệt...'
              icon={FileText}
              isTextarea={true}
              rows={4}
            />
          </>
        ) : (
          <>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Vị trí mong muốn</p>
                  <p className='text-sm font-medium text-gray-900'>
                    {originalData.jobPosition}
                  </p>
                </div>
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Trình độ</p>
                  <p className='text-sm font-medium text-gray-900'>
                    {originalData.educationLevel}
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Kinh nghiệm</p>
                  <p className='text-sm font-medium text-gray-900'>
                    {originalData.workExperience}
                  </p>
                </div>
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Mức lương</p>
                  <p className='text-sm font-medium text-gray-900'>
                    {originalData.expectedSalary}
                  </p>
                </div>
              </div>
              {originalData.otherBenefits && (
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Chế độ phúc lợi</p>
                  <div className='flex flex-wrap gap-1'>
                    {originalData.otherBenefits
                      .split(', ')
                      .map((benefit, index) => (
                        <span
                          key={index}
                          className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'
                        >
                          {benefit}
                        </span>
                      ))}
                  </div>
                </div>
              )}
              {originalData.notes && (
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Ghi chú</p>
                  <p className='text-sm text-gray-700 bg-gray-50 p-3 rounded-xl'>
                    {originalData.notes}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </ProfileSection>

      <ProfileSection
        title='Bảo mật tài khoản'
        icon={Shield}
        section='security'
        handleSectionEdit={handleSectionEdit}
      >
        <div className='space-y-3'>
          <div className='flex items-center'>
            <User className='w-4 h-4 text-gray-500 mr-2' />
            <span className='text-sm text-gray-600'>Tên đăng nhập:</span>
            <span className='text-sm font-medium text-gray-900 ml-2'>
              {originalData.username}
            </span>
            <Lock className='w-3 h-3 text-gray-400 ml-1' />
          </div>
          <div className='flex items-center'>
            <Shield className='w-4 h-4 text-gray-500 mr-2' />
            <span className='text-sm text-gray-600'>Mật khẩu:</span>
            <span className='text-sm text-gray-500 ml-2'>••••••••</span>
          </div>
          <div className='bg-blue-50 border border-blue-200 rounded-xl p-3 mt-3'>
            <p className='text-xs text-blue-700'>
              <Shield className='w-3 h-3 inline mr-1' />
              Tài khoản được tạo ngày {originalData.joinDate}
            </p>
          </div>
        </div>
      </ProfileSection>
    </div>
  )
}

export default ProfilePage
