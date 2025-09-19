import React, { useState } from 'react'
import { Edit3, Check, X, AlertCircle, LucideIcon } from 'lucide-react'

interface InputEditableProps {
  label: string
  name: string
  value: string
  icon?: LucideIcon
  error?: string
  placeholder?: string
  onSave?: (newValue: string) => void
}

const InputEditable = ({
  label,
  name,
  value,
  icon: Icon,
  error,
  placeholder = '',
  onSave,
}: InputEditableProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [tempValue, setTempValue] = useState(value)

  const handleSave = () => {
    onSave?.(tempValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempValue(value)
    setIsEditing(false)
  }

  return (
    <div className='mb-4'>
      <label
        htmlFor={name}
        className='block text-sm font-semibold text-gray-700 mb-1'
      >
        {Icon && <Icon className='w-4 h-4 inline mr-2 text-gray-500' />}
        {label}
      </label>

      {isEditing ? (
        <div className='flex items-center gap-2'>
          <input
            id={name}
            name={name}
            type='text'
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            placeholder={placeholder}
            className={`flex-1 px-4 py-2 border rounded-xl transition-all
              focus:outline-color-1 focus:outline focus:outline-2
              ${error ? 'border-red-500' : 'border-gray-300'}
            `}
            autoFocus
          />
          <Check
            size={18}
            className='text-green-500 cursor-pointer'
            onClick={handleSave}
          />
          <X
            size={18}
            className='text-red-500 cursor-pointer'
            onClick={handleCancel}
          />
        </div>
      ) : (
        <div className='flex items-center justify-between px-3 py-2 border border-gray-200 rounded-xl bg-gray-50'>
          <span className='text-gray-800 text-sm'>
            {value || (
              <span className='italic text-gray-400'>Chưa có dữ liệu</span>
            )}
          </span>
          <Edit3
            size={18}
            className='text-gray-400 cursor-pointer'
            onClick={() => setIsEditing(true)}
          />
        </div>
      )}

      {error && (
        <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
          <AlertCircle className='w-4 h-4 mr-1' />
          {error}
        </p>
      )}
    </div>
  )
}

export default InputEditable
