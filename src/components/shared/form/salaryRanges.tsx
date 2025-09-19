import { AlertCircle, DollarSign } from 'lucide-react'
import SelectInput from './selectInput'
import useSettingStore from '@/store/useSetting'

interface SalaryRangesProps {
  onChange: (value: string) => void
  error?: string
}

const SalaryRanges = ({ onChange, error }) => {
  const { ListSalary } = useSettingStore()

  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <DollarSign className='w-4 h-4 inline mr-2' />
        Mức lương
      </label>

      <SelectInput
        options={ListSalary}
        maxSelect={1}
        title='Chọn Mức lương'
        placeholder='Chọn Mức lương'
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

export default SalaryRanges
