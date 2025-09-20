import React from 'react'

type ProfileFieldProps = {
  icon?: React.ElementType
  label?: string
  value?: string
  className?: string
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  icon: Icon,
  label,
  value,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 ${className}`}
    >
      <div className='flex-shrink-0'>
        {Icon && <Icon size={20} className='text-gray-500' />}
      </div>
      <div className='ml-3 flex-1'>
        {label && <p className='text-sm font-medium text-gray-500'>{label}</p>}
        <p className='text-gray-900 font-medium whitespace-pre-line'>
          {value || 'Chưa cập nhật'}
        </p>
      </div>
    </div>
  )
}

export default ProfileField
