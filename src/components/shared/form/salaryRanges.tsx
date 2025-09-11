import { DollarSign } from 'lucide-react'
import SelectInput from './selectInput'
import useSettingStore from '@/store/useSetting'

const SalaryRanges = () => {
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
        onChange={(values) => console.log('Ngành đã chọn:', values)}
      />
    </div>
  )
}

export default SalaryRanges
