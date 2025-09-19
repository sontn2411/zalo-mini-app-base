import { AlertCircle, Briefcase } from 'lucide-react'
import SelectInput from '../selectInput'
import useSettingStore from '@/store/useSetting'

interface JobSelectOptionProps {
  onChange: (value: string) => void
  error?: string
}

const JobSelectOption = ({ onChange, error }: JobSelectOptionProps) => {
  const { ListJob } = useSettingStore()

  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <Briefcase className='w-4 h-4 inline mr-2' />
        Ngành nghề
      </label>

      <SelectInput
        options={ListJob}
        maxSelect={1}
        title='Chọn ngành nghề'
        placeholder='Chọn ngành nghề'
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

export default JobSelectOption
