import useSettingStore from '@/store/useSetting'
import { VenusAndMars } from 'lucide-react'

interface GenderFieldProps {
  disbaleLabel?: boolean
  value?: string
  onChange?: (value: string) => void
}

export default function GenderField({
  disbaleLabel = false,
  value,
  onChange,
}: GenderFieldProps) {
  const { ListGenderUser } = useSettingStore()

  return (
    <div className='flex gap-4 items-center'>
      {!disbaleLabel && (
        <label className='block text-sm font-semibold text-gray-700 '>
          <VenusAndMars className='w-4 h-4 inline mr-2' />
          Giới tính
        </label>
      )}
      <div className='flex gap-4'>
        {ListGenderUser.map((item) => {
          return (
            <label
              key={item.value}
              className='flex items-center gap-2 cursor-pointer text-sm'
            >
              <input
                type='radio'
                name='gender'
                value={item.value}
                checked={value === item.value}
                onChange={() => onChange?.(item.value)}
                className='accent-color-1'
              />
              {item.label}
            </label>
          )
        })}
      </div>
    </div>
  )
}
