import { AlertCircle, Clock } from 'lucide-react'
import SelectInput from './selectInput'
import useSettingStore from '@/store/useSetting'

interface ExperienceOptionsProps {
  onChange: (value: string) => void
  error?: string
  value: string
}

const ExperienceOptions = ({
  onChange,
  error,
  value,
}: ExperienceOptionsProps) => {
  const { ListExp } = useSettingStore()

  return (
    <>
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Clock className='w-4 h-4 inline mr-2' />
          Kinh nghiệm làm việc
        </label>

        <SelectInput
          options={ListExp}
          maxSelect={1}
          title='Chọn kinh nghiệm'
          placeholder='Chọn Khinh nghiệm'
          onChange={(values) => onChange(values[0])}
          className={`${error ? 'border-red-600' : ''}`}
          value={value}
        />
        {error && (
          <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {error}
          </p>
        )}
      </div>
    </>
  )
}

export default ExperienceOptions
