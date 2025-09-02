import { Lock } from 'lucide-react'

interface ReadOnlyFieldProps {
  label: string
  value: string
  icon?: React.ElementType
  locked?: boolean
}

const ReadOnlyField: React.FC<ReadOnlyFieldProps> = ({
  label,
  value,
  icon: Icon,
  locked = false,
}) => (
  <div className='mb-4'>
    <label className='block text-sm font-medium text-gray-700 mb-2'>
      {Icon && <Icon className='w-4 h-4 inline mr-2' />}
      {label}
      {locked && <Lock className='w-4 h-4 inline ml-2 text-gray-400' />}
    </label>
    <div
      className={`px-4 py-3 rounded-xl border-2 border-dashed ${
        locked ? 'border-gray-200 bg-gray-50' : 'border-blue-200 bg-blue-50'
      }`}
    >
      <p className={`text-sm ${locked ? 'text-gray-500' : 'text-blue-800'}`}>
        {value}
        {locked && <span className='ml-2 text-xs'>(Không thể chỉnh sửa)</span>}
      </p>
    </div>
  </div>
)

export default ReadOnlyField
