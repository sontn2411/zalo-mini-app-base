import { AlertCircle, Clock } from 'lucide-react'
import SelectInput from '../selectInput'
import useSettingStore from '@/store/useSetting'

interface TimeOptionProps {
  onChange: (value: string) => void
  error?: string
}

const TimeOption = ({ onChange, error }: TimeOptionProps) => {
  const { ListWorkingTime } = useSettingStore()

  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <Clock className='w-4 h-4 inline mr-2' />
        Thới gian
      </label>

      <SelectInput
        options={ListWorkingTime}
        maxSelect={1}
        title='Chọn thời gian'
        placeholder='Chọn thời gian'
        onChange={(values) => onChange(values[0])}
        className={`${error ? 'border-red-600' : ''}`}
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

export default TimeOption
