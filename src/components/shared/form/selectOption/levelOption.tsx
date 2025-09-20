import { AlertCircle, GraduationCap } from 'lucide-react'
import SelectInput from '../selectInput'
import useSettingStore from '@/store/useSetting'

interface LevelOptionProps {
  onChange: (value: string) => void
  error: string
  value: string
}

const LevelOption = ({ onChange, error, value }) => {
  const { TechnicalLevel } = useSettingStore()

  return (
    <div className=''>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <GraduationCap className='w-4 h-4 inline mr-2' />
        Trình độ
      </label>

      <SelectInput
        options={TechnicalLevel}
        maxSelect={1}
        title='Chọn Trình độ'
        placeholder='Chọn Trình độ'
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
  )
}

export default LevelOption
