import { Briefcase } from 'lucide-react'
import SelectInput from '../selectInput'
import useSettingStore from '@/store/useSetting'

const JobSelectOption = () => {
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
        onChange={(values) => console.log('Ngành đã chọn:', values)}
      />
    </div>
  )
}

export default JobSelectOption
