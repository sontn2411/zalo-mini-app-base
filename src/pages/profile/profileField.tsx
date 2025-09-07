import { DatePicker } from 'zmp-ui'
import type { ProfileData } from './profilePerson'
import DateRangePicker from '@/components/shared/dateRangePicker'
import SheetPortal from '@/components/shared/form/sheetPortal'
import { useState } from 'react'
import { X } from 'lucide-react'
import SheetDate from '@/components/shared/form/sheetDate'
import GenderField from '@/components/shared/form/genderField'
import GraduationOption from '@/components/shared/form/selectOption/graduationOption'

type ProfileFieldProps = {
  icon: React.ElementType
  label: string
  value: string
  field: keyof ProfileData
  type?: string
  options?: { value: string; label: string }[]
  className?: string
  isEditing: boolean
  handleInputChange: (field: string, value: string) => void
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  icon: Icon,
  label,
  value,
  field,
  type = 'text',
  options,
  className = '',
  isEditing,
  handleInputChange,
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

  if (type === 'select') {
    return (
      <div className={`${className}`}>
        <label className='flex items-center text-sm font-medium text-gray-700 mb-2'>
          <Icon size={16} className='text-gray-500 mr-2' />
          {label}
        </label>
        {/* <select
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className='w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
        {field == 'gender' && <GenderField disbaleLabel={true} />}
        {field == 'graduation' && <GraduationOption hiddenLabel={true} />}
      </div>
    )
  }

  if (type === 'date') {
    return (
      <div className={`${className}`}>
        <label className='flex items-center text-sm font-medium text-gray-700 mb-2'>
          <Icon size={16} className='text-gray-500 mr-2' />
          {label}
        </label>
        <SheetDate title='Chọn ngày' singleDate={true} disableLabel={true} />
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
        className='w-full p-4 bg-white border border-gray-200 rounded-xl transition-all focus:outline-color-1 focus:outline focus:outline-2   disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed '
        placeholder={`Nhập ${label.toLowerCase()}`}
        disabled={field === 'phone' || field === 'email'}
      />
    </div>
  )
}

export default ProfileField
