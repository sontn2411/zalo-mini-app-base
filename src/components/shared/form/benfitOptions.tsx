import { AlertCircle, Gift } from 'lucide-react'
import SelectInput from './selectInput'
import useSettingStore from '@/store/useSetting'

interface BenfitOptionProps {
  onChange: (value: string[]) => void
  error?: string
  value: string[]
}

const BenfitOptions = ({ onChange, error, value }: BenfitOptionProps) => {
  const { ListBenefits } = useSettingStore()

  //Blfom+nfvJTE1Cww8B5MWL7mqt+kKc652/EgtwZIAAs=
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <Gift className='w-4 h-4 inline mr-2' />
        Chế độ phúc lợi
      </label>
      <SelectInput
        options={ListBenefits}
        maxSelect={999}
        title='Chọn Phúc lợi'
        placeholder='Chọn tối thiểu 1 phúc lợi'
        onChange={(values) => onChange(values)}
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

export default BenfitOptions
