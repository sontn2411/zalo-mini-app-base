import { useState } from 'react'
import InputCustom from '@/components/ui/inputCustom'
import {
  User,
  Lock,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
  Award,
  FileText,
  UserRound,
  Briefcase,
} from 'lucide-react'
import { Button, DatePicker } from 'zmp-ui'
import SelectInput from '@/components/shared/form/selectInput'
import GenderField from '@/components/shared/form/genderField'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import GraduationOption from '@/components/shared/form/selectOption/graduationOption'

const jobOptions = [
  'Kế toán',
  'Lập trình viên',
  'Nhân viên bán hàng',
  'Thiết kế đồ họa',
  'Quản lý dự án',
  'Marketing',
  'Bảo vệ',
]

const registerPersonSchema = z
  .object({
    username: z.string().min(3, 'Tên đăng nhập tối thiểu 3 ký tự'),
    password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    confirmPassword: z.string(),
    fullName: z.string().min(1, 'Vui lòng nhập họ tên'),
    idCard: z.string().min(9, 'Số CCCD không hợp lệ'),
    issuePlace: z.string().min(1, 'Vui lòng nhập nơi cấp'),
    phone: z.string().regex(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ'),
    address: z.string().min(1, 'Vui lòng nhập địa chỉ'),
    email: z.string().email('Email không hợp lệ'),
    ethnicity: z.string().min(1, 'Vui lòng nhập dân tộc'),
    educationLevel: z.string().min(1, 'Vui lòng nhập trình độ học vấn'),
    graduationSchool: z.string().min(1, 'Vui lòng nhập trường tốt nghiệp'),
    major: z.string().min(1, 'Vui lòng nhập chuyên ngành'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu xác nhận không khớp',
  })

type RegisterPersonForm = z.infer<typeof registerPersonSchema>

const RegisterPerson = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPersonForm>({
    resolver: zodResolver(registerPersonSchema),
  })

  const onSubmit = (data: RegisterPersonForm) => {
    console.log('Form data:', data)
  }
  return (
    <div className='pb-2'>
      <div className='rounded-2xl shadow-sm'>
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='bg-white p-4 rounded-xl shadow-sm'>
            <h3 className='text-base font-semibold text-gray-800 mb-3'>
              Thông tin đăng nhập
            </h3>
            <InputCustom
              label='Tên đăng nhập'
              placeholder='Nhập tên đăng nhập'
              icon={User}
              error={errors.username?.message}
              {...register('username')}
            />
            <InputCustom
              label='Mật khẩu'
              type='password'
              placeholder='Nhập mật khẩu'
              icon={Lock}
              error={errors.password?.message}
              {...register('password')}
            />
            <InputCustom
              label='Nhập lại mật khẩu'
              type='password'
              placeholder='Xác nhận mật khẩu'
              icon={Lock}
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
          </div>

          {/* Thông tin cá nhân */}
          <div className='bg-white p-4 rounded-xl shadow-sm mt-6'>
            <h3 className='text-base font-semibold text-gray-800 mb-3'>
              Thông tin cá nhân
            </h3>
            <InputCustom
              label='Họ và Tên'
              placeholder='Nhập họ và tên đầy đủ'
              icon={UserRound}
              error={errors.fullName?.message}
              {...register('fullName')}
            />
            <InputCustom
              label='Căn Cước Công Dân'
              placeholder='Nhập số CCCD'
              icon={FileText}
              error={errors.idCard?.message}
              {...register('idCard')}
            />

            <div className='my-4'>
              <label className='block text-sm font-semibold text-gray-700 mb-2 '>
                <Calendar className='w-4 h-4 inline mr-2 text-gray-500' />
                Ngày cấp
              </label>
              <DatePicker
                placeholder='Chọn ngày'
                inputClass='hover:border hover:border-color-1 !focus:border-color-1 rounded-xl'
              />
            </div>
            <InputCustom
              label='Nơi cấp'
              placeholder='Nhập nơi cấp'
              icon={MapPin}
              error={errors.issuePlace?.message}
              {...register('issuePlace')}
            />
            <InputCustom
              label='Số điện thoại'
              placeholder='Nhập số điện thoại'
              icon={Phone}
              error={errors.phone?.message}
              {...register('phone')}
            />
            <InputCustom
              label='Địa chỉ liên lạc'
              placeholder='Nhập địa chỉ'
              icon={MapPin}
              error={errors.address?.message}
              {...register('address')}
            />
            <InputCustom
              label='Email'
              type='email'
              placeholder='Nhập email'
              icon={Mail}
              error={errors.email?.message}
              {...register('email')}
            />
            <div className='my-4'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                <Calendar className='w-4 h-4 inline mr-2 text-gray-500' />
                Ngày sinh
              </label>
              <DatePicker
                placeholder='Chọn ngày'
                inputClass='hover:border hover:border-color-1 !focus:border-color-1 !rounded-xl'
              />
            </div>
            <InputCustom
              label='Dân tộc'
              placeholder='Ví dụ: Kinh'
              icon={User}
              error={errors.ethnicity?.message}
              {...register('ethnicity')}
            />
            <div className='my-4'>
              <GenderField />
            </div>
          </div>

          {/* Học vấn */}
          <div className='bg-white p-4 rounded-xl shadow-sm mt-6'>
            <h3 className='text-base font-semibold text-gray-800 mb-3'>
              Học vấn
            </h3>
            <InputCustom
              label='Trình độ học vấn'
              placeholder='Ví dụ: Đại học, Cao đẳng'
              icon={GraduationCap}
              error={errors.educationLevel?.message}
              {...register('educationLevel')}
            />

            <InputCustom
              label='Tên trường tốt nghiệp'
              placeholder='Nhập tên trường'
              icon={Building2}
              error={errors.graduationSchool?.message}
              {...register('graduationSchool')}
            />
            <InputCustom
              label='Chuyên ngành đào tạo'
              placeholder='Nhập chuyên ngành'
              icon={Award}
              error={errors.major?.message}
              {...register('major')}
            />

            <div className='mb-6'>
              <GraduationOption />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                <Briefcase className='w-4 h-4 inline mr-2' />
                Ngành nghề mong muốn
              </label>
              <SelectInput
                options={jobOptions}
                maxSelect={2}
                title='Chọn ngành nghề'
                placeholder='Chọn tối đa 2 ngành'
                onChange={(values) => console.log('Ngành đã chọn:', values)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className='px-4 pb-2 '>
            <div className=''>
              <div className=' p-4'>
                <p className='text-sm text-yellow-700 italic'>
                  <strong>Lưu ý:</strong> Vui lòng khai báo đầy đủ thông tin.
                </p>
              </div>
            </div>
            <Button
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

            <p className='text-center text-sm  my-3 underline underline-offset-2 '>
              Liên kết tài khoản Người lao động với Zalo
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPerson
