import React, { forwardRef } from 'react'
import { AlertCircle, LucideIcon } from 'lucide-react'

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  icon?: LucideIcon
  error?: string
}

// dùng forwardRef để RHF gắn ref
const InputCustom = forwardRef<HTMLInputElement, InputCustomProps>(
  (
    {
      label,
      name,
      type = 'text',
      placeholder = '',
      icon: Icon,
      error,
      ...rest
    },
    ref
  ) => {
    return (
      <div className='mb-4'>
        <label
          htmlFor={name}
          className='block text-sm font-semibold text-gray-700 mb-2'
        >
          {Icon && <Icon className='w-4 h-4 inline mr-2 text-gray-500' />}
          {label}
        </label>
        <input
          id={name}
          name={name}
          ref={ref} // rất quan trọng cho RHF
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-xl transition-all 
            focus:outline-color-1 focus:outline focus:outline-2 
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
          {...rest} // nhận onChange, value từ register
        />
        {error && (
          <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {error}
          </p>
        )}
      </div>
    )
  }
)

InputCustom.displayName = 'InputCustom'

export default InputCustom
