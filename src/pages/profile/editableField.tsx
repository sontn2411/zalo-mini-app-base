import { WorkerProfileForm } from '@/types/profile'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { Control, useController } from 'react-hook-form'

interface EditableFieldProps {
  name: keyof WorkerProfileForm
  label: string
  placeholder?: string
  icon?: React.ElementType
  type?: 'text' | 'password' | 'textarea' | 'select'
  options?: string[]
  value: string
  isTextarea?: boolean
  rows?: number
}

const EditableField: React.FC<EditableFieldProps> = ({
  name,
  label,
  placeholder,
  icon: Icon,
  type = 'text',
  options,
  value,
  isTextarea,
  rows,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700 mb-2'>
        {Icon && <Icon className='w-4 h-4 inline mr-2' />}
        {label}
      </label>
      {options ? (
        <select
          value={value}
          // onChange={(e) => onChange(name, e.target.value)}
          className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
        >
          <option value=''>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : isTextarea ? (
        <textarea
          value={value}
          // onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none 
          `}
        />
      ) : type === 'password' ? (
        <div className='relative'>
          <input
            type={
              name === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : showConfirmPassword
                ? 'text'
                : 'password'
            }
            value={value}
            // onChange={(e) => onChange(name, e.target.value)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all `}
          />
          <button
            type='button'
            onClick={() =>
              name === 'password'
                ? setShowPassword(!showPassword)
                : setShowConfirmPassword(!showConfirmPassword)
            }
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
          >
            {(name === 'password' ? showPassword : showConfirmPassword) ? (
              <EyeOff className='w-5 h-5' />
            ) : (
              <Eye className='w-5 h-5' />
            )}
          </button>
        </div>
      ) : (
        <input
          type={type}
          value={value}
          // onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all `}
        />
      )}
      {/* {error && (
        <p className='mt-1 text-sm text-red-600 flex items-center animate-slideDown'>
          <AlertCircle className='w-4 h-4 mr-1' />
    
        </p>
      )} */}
    </div>
  )
}

export default EditableField
