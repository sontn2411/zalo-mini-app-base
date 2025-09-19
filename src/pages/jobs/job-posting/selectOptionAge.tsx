import SelectInput from '@/components/shared/form/selectInput'
import useSettingStore from '@/store/useSetting'
import { AlertCircle } from 'lucide-react'

interface SelectOptionAgeProps {
  onChange: (value: string) => void
  error?: string
}

const SelectOptionAge = ({ onChange }: SelectOptionAgeProps) => {
  const { ListAgeRecruitment } = useSettingStore()

  return (
    <div className='w-full'>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        {/* <Briefcase className='w-4 h-4 inline mr-2' /> */}
        Độ tuổi
      </label>

      <SelectInput
        options={ListAgeRecruitment}
        maxSelect={1}
        title='Chọn tuổi'
        placeholder='Chọn tuổi'
        onChange={(values) => onChange(values[0])}
      />
    </div>
  )
}

export default SelectOptionAge
