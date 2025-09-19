import { forwardRef } from 'react'
import useSettingStore from '@/store/useSetting'
import { VenusAndMars } from 'lucide-react'

interface GenderFieldProps {
  disableLabel?: boolean
  value?: string
  onChange?: (value: string) => void
  hiddenIcon?: boolean
}

const GenderField = forwardRef<HTMLInputElement, GenderFieldProps>(
  ({ disableLabel = false, value, onChange, hiddenIcon = false }, ref) => {
    const { ListGenderUser } = useSettingStore()

    return (
      <div className='flex gap-4'>
        {!disableLabel && (
          <label className='block text-sm font-semibold text-gray-700'>
            {!hiddenIcon && <VenusAndMars className='w-4 h-4 inline mr-2' />}
            Giới tính
          </label>
        )}
        <div className='flex gap-4'>
          {ListGenderUser.map((item) => (
            <label
              key={item.value}
              className='flex items-center gap-2 cursor-pointer text-sm'
            >
              <input
                ref={ref}
                type='radio'
                name='gender'
                value={item.value}
                checked={value === item.value}
                onChange={() => onChange?.(item.value)}
                className='accent-color-1'
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>
    )
  }
)

GenderField.displayName = 'GenderField'
export default GenderField
