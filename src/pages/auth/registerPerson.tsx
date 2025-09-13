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
  User2,
  AlertCircle,
} from 'lucide-react'
import { Button } from 'zmp-ui'
import SelectInput from '@/components/shared/form/selectInput'
import GenderField from '@/components/shared/form/genderField'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import GraduationOption from '@/components/shared/form/selectOption/graduationOption'
import useSettingStore from '@/store/useSetting'
import SheetDate from '@/components/shared/form/sheetDate'
import IconUI from '@/components/ui/iconUi'
import { To, useNavigate } from 'react-router-dom'
import {
  RegisterPersonForm,
  registerPersonSchema,
} from '@/schemas/registerSchema'

const RegisterPerson = () => {
  const { ListJob } = useSettingStore()
  const [birthDay, setBirthDay] = useState<string>('')

  const { ListGenderUser } = useSettingStore()

  const genderDefault = ListGenderUser.find(
    (item) => item.label !== 'Nam' && item.label !== 'Nữ'
  )

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<RegisterPersonForm>({
    resolver: zodResolver(registerPersonSchema),
    defaultValues: {
      job: [],
      gender: genderDefault?.value,
      birthday: '',
    },
  })

  const onSubmit = (data: RegisterPersonForm) => {
    // let erros = []

    // if (birthDay.length === 0) {
    //   erros.push({ field: 'birthday', messgage: 'errror' })
    // }

    const payload = {
      ...data,
      birthDay,
    }
  }

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  const hanldeChangeBirthDay = (value: string) => setBirthDay(value)

  console.log('=[]====', getValues())
  // console.log('=[]=errors===', errors)

  return (
    <div className='pb-sb'>
      <div className='pt-st relative bg-color-4 text-white rounded-b-3xl p-6 mb-6 shadow-md'>
        <button
          onClick={handlePrev}
          className='absolute left-4 top-14 bg-white/20 p-2 rounded-full'
        >
          <IconUI icon='previous' className='w-5 h-5' />
        </button>
        <div className='text-center'>
          <User2 className='w-12 h-12 mx-auto mb-2' />
          <h2 className='text-2xl font-bold'>Đăng ký</h2>
          <p className='text-sm opacity-90'>Hồ sơ người lao động</p>
        </div>
      </div>
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
              type='tel'
            />

            <div className='my-4'>
              <label className='block text-sm font-semibold text-gray-700 mb-2 '>
                <Calendar className='w-4 h-4 inline mr-2 text-gray-500' />
                Ngày cấp
              </label>
              <Controller
                name='dateIdCard'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <SheetDate
                    title='Chọn ngày cấp CCCD'
                    singleDate={true}
                    disableLabel={true}
                    error={errors.dateIdCard?.message}
                    onChange={(value) => field.onChange(value ?? '')}
                    value={field.value}
                  />
                )}
              />
              {/* <SheetDate
                title='Chọn ngày'
                singleDate={true}
                disableLabel={true}
              /> */}
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
              type='tel'
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
              <Controller
                name='birthday'
                control={control}
                defaultValue=''
                render={({ field }) => {
                  return (
                    <SheetDate
                      title='Chọn ngày'
                      singleDate={true}
                      value={field.value}
                      disableLabel={true}
                      onChange={(value) => field.onChange(value ?? '')}
                      error={errors.birthday?.message}
                    />
                  )
                }}
              />
              {/* <SheetDate
                title='Chọn ngày'
                singleDate={true}
                disableLabel={true}
                onChange={(value) => hanldeChangeBirthDay(value)}
              /> */}
            </div>
            <InputCustom
              label='Dân tộc'
              placeholder='Ví dụ: Kinh'
              icon={User}
              error={errors.ethnicity?.message}
              {...register('ethnicity')}
            />
            <div className='my-4'>
              <Controller
                name='gender'
                control={control}
                render={({ field }) => <GenderField value={field.value} />}
              />
            </div>
          </div>

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
              <Controller
                name='study'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <GraduationOption
                    error={errors.study?.message}
                    onChange={(value) => {
                      field.onChange(value ?? '')
                    }}
                  />
                )}
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                <Briefcase className='w-4 h-4 inline mr-2' />
                Ngành nghề mong muốn
              </label>
              <Controller
                name='job'
                control={control}
                render={({ field }) => (
                  <SelectInput
                    options={ListJob}
                    maxSelect={2}
                    title='Chọn ngành nghề'
                    placeholder='Chọn tối đa 2 ngành'
                    onChange={(values: string[]) => field.onChange(values)}
                    className={`${errors.job ? 'border-red-600' : ''}`}
                  />
                )}
              />
              {errors.job && (
                <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.job.message}
                </p>
              )}
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
              className='w-full bg-color-1 text-white py-3 rounded-xl text-sm font-medium hover:bg-color-1'
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
