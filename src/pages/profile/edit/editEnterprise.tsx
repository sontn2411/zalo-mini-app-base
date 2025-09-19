import { insertUpdateEntrprise } from '@/api/query/auth'
import SelectInput from '@/components/shared/form/selectInput'
import InputCustom from '@/components/ui/inputCustom'
import { ROUTES } from '@/constants/routes'

import { useLoadingGlobal } from '@/store/useLoadingGlobal'
import useSettingStore from '@/store/useSetting'
import { useUserStore } from '@/store/useUserStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, Building2, Mail, MapPin, Users } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from 'zmp-ui'
import z from 'zod'

export const registerBusinessSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  nameCompany: z.string().min(2, 'Tên doanh nghiệp không được để trống'),
  emailCompany: z.string().email('Email doanh nghiệp không hợp lệ'),
  addressCompany: z.string().min(5, 'Địa chỉ không hợp lệ'),
  phoneNumber: z.string().regex(/^\d{9,11}$/, 'Số điện thoại phải có 9-11 số'),
  businessSize: z.string().min(1, 'Vui lòng chọn quy mô công ty'),
})

export type RegisterBusinessForm = z.infer<typeof registerBusinessSchema>

const EditEnterprise = () => {
  const { enterpriseProfile, setEnterpriseProfile } = useUserStore()
  const { setIsLoadingGlobal } = useLoadingGlobal()
  const { BusinessSize } = useSettingStore()

  const updateProfile = insertUpdateEntrprise()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterBusinessForm>({
    resolver: zodResolver(registerBusinessSchema),
    mode: 'onChange',
    defaultValues: {
      email: enterpriseProfile?.email,
      nameCompany: enterpriseProfile?.companyname,
      emailCompany: enterpriseProfile?.companyemail,
      addressCompany: enterpriseProfile?.address,
      phoneNumber: enterpriseProfile?.companyphone,
      businessSize: enterpriseProfile?.businesssize || '',
    },
  })

  const onSubmit = (value: RegisterBusinessForm) => {
    setIsLoadingGlobal(true)
    const payload = {
      Email: value.email,
      CompanyName: value.nameCompany,
      CompanyEmail: value.emailCompany,
      CompanyAddress: value.addressCompany,
      CompanyPhone: value.phoneNumber,
      BusinessSize: value.businessSize,
    }

    updateProfile.mutate(payload, {
      onSuccess: (res) => {
        const { Data, StatusResult, Errors } = res
        setIsLoadingGlobal(false)
        if (StatusResult.Code == 0) {
          setEnterpriseProfile({ ...Data })

          toast.success('Thay dổi thông tin thành công!')
          navigate(ROUTES.PROFILE, { viewTransition: true })
        } else {
          if (Errors) {
            const message = Errors[0].Message
            toast.error(message)
          }
        }
      },
      onError: (res) => {
        console.log('=errror', res)
        setIsLoadingGlobal(false)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' relative'>
      <div className='py-4 mb-4 bg-white'>
        <div className='space-y-6 px-4 '>
          <InputCustom
            label='Tên công ty'
            placeholder='Nhập tên công ty'
            icon={Building2}
            error={errors.nameCompany?.message}
            {...register('nameCompany')}
          />
          <InputCustom
            label='Email Công ty'
            placeholder='Nhập Email công ty'
            icon={Mail}
            error={errors.emailCompany?.message}
            {...register('emailCompany')}
            disabled
          />
          <InputCustom
            label='Email'
            placeholder='Nhập Email '
            icon={Mail}
            error={errors.email?.message}
            {...register('email')}
            disabled
          />

          <InputCustom
            label='Địa chỉ công ty'
            placeholder='Nhập địa chỉ công ty'
            icon={MapPin}
            error={errors.addressCompany?.message}
            {...register('addressCompany')}
          />

          <InputCustom
            label='Số điện thoại công ty'
            placeholder='Nhập số điện thoại công ty'
            icon={MapPin}
            error={errors.phoneNumber?.message}
            {...register('phoneNumber')}
          />

          <Controller
            name='businessSize'
            control={control}
            render={({ field }) => (
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  <Users className='w-4 h-4 inline mr-2' />
                  Quy mô
                </label>
                <SelectInput
                  options={BusinessSize}
                  maxSelect={1}
                  title='Chọn quy mô'
                  placeholder='Chọn quy mô'
                  onChange={(values) => field.onChange(values[0])}
                  className={`${errors.businessSize ? 'border-red-600' : ''}`}
                />
                {errors.businessSize && (
                  <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
                    <AlertCircle className='w-4 h-4 mr-1' />
                    {errors.businessSize.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className='w-full px-4 pb-6 pt-4 fixed bottom-0 bg-white '>
          <Button
            htmlType='submit'
            className='w-full bg-color-1 text-white py-3 rounded-xl text-sm font-medium hover:bg-color-1'
          >
            Lưu
          </Button>
        </div>
      </div>
    </form>
  )
}

export default EditEnterprise
