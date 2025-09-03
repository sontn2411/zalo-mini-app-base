import { ArrowRight, Building2, MapPin, Phone, User } from 'lucide-react'
import { ButtonNextStep } from '../buttonSteps'

interface PersonBusinessProps {
  handleNextStep: () => void
}

const PersonBusiness = ({ handleNextStep }: PersonBusinessProps) => {
  return (
    <form className='space-y-6 animate-fadeIn'>
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Building2 className='w-4 h-4 inline mr-2' />
          Tên nhà tuyển dụng (công ty / tổ chức)
        </label>
        <input
          type='text'
          placeholder='Nhập họ và tên đầy đủ'
          className={`w-full px-4 py-3 border rounded-xl transition-all  focus:outline-color-1  focus:outline focus:outline-2  `}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <MapPin className='w-4 h-4 inline mr-2' />
          Địa chỉ
        </label>
        <textarea
          rows={3}
          placeholder='Nhập địa chỉ chi tiết (số nhà, đường, phường/xã, tỉnh)'
          className={`w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2`}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <User className='w-4 h-4 inline mr-2' />
          Tên người phụ trách
        </label>
        <input
          type='text'
          placeholder='Nhập họ và tên đầy đủ'
          className={`w-full px-4 py-3 border rounded-xl transition-all  focus:outline-color-1  focus:outline focus:outline-2 `}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Phone className='w-4 h-4 inline mr-2' />
          Số điện thoại
        </label>
        <input
          type='tel'
          placeholder='Nhập số điện thoại'
          className={`w-full px-4 py-3 border rounded-xl transition-all focus:outline-color-1  focus:outline focus:outline-2`}
        />
      </div>
      <div className='pt-2'>
        <ButtonNextStep handleNextStep={handleNextStep} />
      </div>
    </form>
  )
}

export default PersonBusiness
