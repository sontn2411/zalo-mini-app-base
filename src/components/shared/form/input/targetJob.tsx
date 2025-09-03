import { Target } from 'lucide-react'

const TargetJob = () => {
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <Target className='w-4 h-4 inline mr-2' />
        Vị trí tuyển dụng
      </label>
      <input
        type='text'
        placeholder='Nhập vị trí tuyển dụng'
        className={`w-full px-4 py-3 border rounded-xl transition-all  focus:outline-color-1  focus:outline focus:outline-2  `}
      />
    </div>
  )
}

export default TargetJob
