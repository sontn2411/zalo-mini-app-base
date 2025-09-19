import { useEffect, useState } from 'react'
import { CircleDot } from 'lucide-react'
import useSettingStore from '@/store/useSetting'

const TYPE = {
  DRAFT: 'lưu nháp',
  PENDING: 'chờ xét duyệt',
}

const arrTypes = [TYPE.DRAFT, TYPE.PENDING]

interface StatusOptionProps {
  value: string
  onChange: (value: string) => void
}

const StatusOption = ({ value, onChange }: StatusOptionProps) => {
  const { ListStatusJob } = useSettingStore()

  const options = ListStatusJob.filter((item) =>
    arrTypes.includes(item.label.toLocaleLowerCase())
  )

  return (
    <div className='pb-6'>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <CircleDot className='w-4 h-4 inline mr-2' />
        Trạng thái
      </label>
      <div className='flex gap-2'>
        {options.map((opt, index) => (
          <div key={opt.value} className='block w-full'>
            <input
              type='radio'
              name='radio-in-form'
              id={`radio-in-form-${index}`}
              className='hidden'
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
            />
            <label
              htmlFor={`radio-in-form-${index}`}
              className={`flex p-3 w-full border rounded-md text-sm cursor-pointer ${
                value === opt.value
                  ? 'border-color-1 bg-color-5 text-color-1'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <span
                className={`mr-2 w-4 h-4 mt-0.5 rounded-full border flex items-center justify-center ${
                  value === opt.value
                    ? 'border-color-1 bg-color-1'
                    : 'border-gray-300'
                }`}
              >
                {value === opt.value && (
                  <span className='w-2 h-2 bg-white rounded-full'></span>
                )}
              </span>
              <h5
                className={`text-sm ${
                  value === opt.value
                    ? 'text-color-1 font-medium'
                    : 'text-gray-600'
                }`}
              >
                {opt.label}
              </h5>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatusOption
