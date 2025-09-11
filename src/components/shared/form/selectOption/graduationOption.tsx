import { GraduationCap } from 'lucide-react'
import SelectInput from '../selectInput'
import useSettingStore from '@/store/useSetting'

interface GraduationOptionProps {
  hiddenLabel?: boolean
}

const GraduationOption = ({ hiddenLabel = false }: GraduationOptionProps) => {
  const { ListStudy } = useSettingStore()

  return (
    <div>
      {!hiddenLabel && (
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <GraduationCap className='w-4 h-4 inline mr-2' />
          Trình độ CMKT cao nhất
        </label>
      )}

      <SelectInput
        options={ListStudy}
        maxSelect={1}
        title='Chọn Trình độ'
        placeholder='Chọn Trình độ'
        onChange={(values) => console.log('Ngành đã chọn:', values)}
      />
    </div>
  )
}

export default GraduationOption
