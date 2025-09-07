import InputCustom from '@/components/ui/inputCustom'
import { Building2, Lock, Mail, MapPin, Phone, User } from 'lucide-react'
import { useState } from 'react'
import TermsConditionBusiness from './termsConditionBusiness'
import { Button } from 'zmp-ui'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const registerBusinessSchema = z
  .object({
    email: z.string().email('Email không hợp lệ'),
    username: z.string().min(3, 'Tài khoản tối thiểu 3 ký tự'),
    password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    confirmPassword: z.string().min(6, 'Vui lòng nhập lại mật khẩu'),
    nameCompany: z.string().min(2, 'Tên doanh nghiệp không được để trống'),
    emailCompany: z.string().email('Email doanh nghiệp không hợp lệ'),
    addressCompany: z.string().min(5, 'Địa chỉ quá ngắn'),
    phoneNumber: z
      .string()
      .regex(/^\d{9,11}$/, 'Số điện thoại phải có 9-11 số'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
  })

type RegisterBusinessForm = z.infer<typeof registerBusinessSchema>

const RegisterBusiness = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterBusinessForm>({
    resolver: zodResolver(registerBusinessSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      nameCompany: '',
      emailCompany: '',
      addressCompany: '',
      phoneNumber: '',
    },
  })

  const onSubmit = (data: RegisterBusinessForm) => {
    console.log('Form data:', data)
  }

  return (
    <div className=' '>
      <div className='text-center mb-4 mt-4'>
        <h2 className='text-xl font-bold text-gray-900 mb-2'>Đăng ký</h2>
        <p className='text-gray-600 text-sm text-center px-4'>
          Hãy đồng hành cùng các doanh nghiệp tại việc làm Khánh Hòa
        </p>
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
            label='Tài khoản đăng nhập'
            placeholder='Nhập tài khoản đăng nhập'
            icon={User}
            {...register('username')}
            error={errors.username?.message}
          />
          <InputCustom
            label='Mật khẩu'
            type='password'
            placeholder='Nhập mật khẩu'
            icon={Lock}
            {...register('password')}
            error={errors.password?.message}
          />
          <InputCustom
            label='Nhập lại mật khẩu'
            type='password'
            placeholder='Xác nhận mật khẩu'
            icon={Lock}
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
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
            type='text'
            placeholder='Nhập số điện thoại'
            icon={Phone}
            {...register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
        </form>
        <TermsConditionBusiness />
        <div>
          <Button
            onClick={handleSubmit(onSubmit)}
            htmlType='submit'
            className='w-full bg-color-1 text-white py-3 rounded-xl text-sm font-medium'
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
