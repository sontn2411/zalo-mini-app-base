import InputCustom from '@/components/ui/inputCustom'
import { Building2, Lock, Mail, MapPin, Phone, User } from 'lucide-react'
import { useState } from 'react'
import TermsConditionBusiness from './termsConditionBusiness'
import { Button, useSnackbar } from 'zmp-ui'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import IconUI from '@/components/ui/iconUi'
import { To, useNavigate } from 'react-router-dom'
import { insertRegisterEnterprise } from '@/api/query/auth'
import { useLoadingGlobal } from '@/store/useLoadingGlobal'
import {
  getAccessToken,
  getPhoneNumber,
  getUserID,
  nativeStorage,
} from 'zmp-sdk'
import { useUserStore } from '@/store/useUserStore'
import { KEYSTORAGE } from '@/constants/message'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'

export const registerBusinessSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  nameCompany: z.string().min(2, 'Tên doanh nghiệp không được để trống'),
  emailCompany: z.string().email('Email doanh nghiệp không hợp lệ'),
  addressCompany: z.string().min(5, 'Địa chỉ không hợp lệ'),
  phoneNumber: z.string().regex(/^\d{9,11}$/, 'Số điện thoại phải có 9-11 số'),
})

export type RegisterBusinessForm = z.infer<typeof registerBusinessSchema>

const RegisterBusiness = () => {
  const navigate = useNavigate()

  const { setIsLoadingGlobal } = useLoadingGlobal()

  const { userInfo } = useUserStore()

  const { openSnackbar } = useSnackbar()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterBusinessForm>({
    resolver: zodResolver(registerBusinessSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      nameCompany: '',
      emailCompany: '',
      addressCompany: '',
      phoneNumber: '',
    },
  })

  const registerEnterprise = insertRegisterEnterprise()

  const onSubmit = async (data: RegisterBusinessForm) => {
    setIsLoadingGlobal(true)
    const accessToken = await getAccessToken()
    const { token } = await getPhoneNumber()
    const userID = await getUserID({})
    if (!accessToken || !token) {
      console.error('Thiếu accessToken hoặc token, không thể đăng ký')
      setIsLoadingGlobal(false)
      return
    }

    const payload = {
      Accesstoken: accessToken,
      Code: token || '',
      ZaloId: userID,
      Email: data.email,
      CompanyName: data.nameCompany,
      CompanyEmail: data.emailCompany,
      CompanyAddress: data.addressCompany,
      CompanyPhone: data.phoneNumber,
    }

    registerEnterprise.mutate(payload, {
      onSuccess: (data) => {
        const { Data, StatusResult, Errors } = data

        if (StatusResult.Code === 0) {
          const { AccessToken, RefreshToken } = Data
          nativeStorage.setItem(KEYSTORAGE.ZALO_ID, userInfo.id)
          nativeStorage.setItem(KEYSTORAGE.ACCESSTOKEN, AccessToken)
          nativeStorage.setItem(KEYSTORAGE.REFRESHTOKEN, RefreshToken)

          navigate(ROUTES.PROFILE, { viewTransition: true })
          toast.success('Đăng ký người lao động thành công!')
        } else {
          toast.error(
            Errors[0].Message || 'Đăng ký thất bại, vui lòng thử lại!'
          )
        }

        setIsLoadingGlobal(false)
      },
      onError: (error) => {
        console.error('Đăng ký thất bại:', error)
        setIsLoadingGlobal(false)
      },
    })
  }

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  return (
    <div className='  '>
      <div className='pt-st relative bg-color-1 text-white rounded-b-3xl p-6 mb-6 shadow-md'>
        <button
          onClick={handlePrev}
          className='absolute left-4 top-14 bg-white/20 p-2 rounded-full'
        >
          <IconUI icon='previous' className='w-5 h-5' />
        </button>
        <div className='text-center'>
          <Building2 className='w-12 h-12 mx-auto mb-2' />
          <h2 className='text-2xl font-bold'>Đăng ký </h2>
          <p className='text-sm opacity-90'>
            Hãy đồng hành cùng việc làm Khánh Hòa để tìm kiếm nhân tài
          </p>
        </div>
      </div>

      <div className='bg-white p-4 rounded-xl shadow-sm'>
        <form className=' space-y-6 mb-6'>
          <InputCustom
            label='Email người dùng'
            type='email'
            placeholder='Nhập email'
            icon={Mail}
            {...register('email')}
            error={errors.email?.message}
          />

          <InputCustom
            label='Tên Doanh nghiệp'
            type='text'
            placeholder='Nhập tên doanh nghiệp'
            icon={Building2}
            {...register('nameCompany')}
            error={errors.nameCompany?.message}
          />

          <InputCustom
            label='Email Doanh nghiệp'
            type='email'
            placeholder='Nhập email doanh nghiệp'
            icon={Mail}
            {...register('emailCompany')}
            error={errors.emailCompany?.message}
          />

          <InputCustom
            label='Địa chỉ doanh nghiệp'
            type='text'
            placeholder='Nhập Địa chỉ doanh nghiệp'
            icon={MapPin}
            {...register('addressCompany')}
            error={errors.addressCompany?.message}
          />

          <InputCustom
            label='Số điện thoại doanh nghiệp'
            type='tel'
            placeholder='Nhập số điện thoại'
            icon={Phone}
            {...register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
        </form>
        {/* <TermsConditionBusiness /> */}
        <div>
          <Button
            onClick={handleSubmit(onSubmit)}
            htmlType='submit'
            className='w-full bg-color-1 text-white py-3 rounded-xl text-sm font-medium  hover:bg-color-1'
          >
            Đăng ký
          </Button>
          <div className='flex w-full items-center pt-4'>
            <span className='border  w-full'></span>
            <span className='text-sm px-2 text-color-2'>Hoặc</span>
            <span className='border w-full'></span>
          </div>

          <p className='text-center text-sm  my-3 underline underline-offset-2 font-normal '>
            Liên kết tài khoản doanh nghiệp với Zalo
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterBusiness
