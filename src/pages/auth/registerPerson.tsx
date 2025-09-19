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
import { Button, useSnackbar } from 'zmp-ui'
import SelectInput from '@/components/shared/form/selectInput'
import GenderField from '@/components/shared/form/genderField'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import GraduationOption from '@/components/shared/form/selectOption/graduationOption'
import useSettingStore from '@/store/useSetting'
import SheetDate from '@/components/shared/form/sheetDate'
import IconUI from '@/components/ui/iconUi'
import { Route, To, useNavigate } from 'react-router-dom'
import {
  createRegisterPersonSchema,
  RegisterPersonForm,
} from '@/schemas/registerSchema'
import { formatDateYYMMDD } from '@/utils/date'
import { getAccessToken, getUserID } from 'zmp-sdk'
import { getPhoneNumber } from 'zmp-sdk/apis'
import { useUserStore } from '@/store/useUserStore'
import { insertLogin, insertRegisterLabore } from '@/api/query/auth'
import { RegisterLaborePayload } from '@/types/auth'
import { useLoadingGlobal } from '@/store/useLoadingGlobal'
import { nativeStorage } from 'zmp-sdk/apis'
import { ROUTES } from '@/constants/routes'
import { KEYSTORAGE } from '@/constants/message'
import { Modal } from 'zmp-ui'

const RegisterPerson = () => {
  const { ListJob, ListEthnicity } = useSettingStore()

  const { ListGenderUser } = useSettingStore()
  const { userInfo } = useUserStore()

  const registerLabore = insertRegisterLabore()

  const { openSnackbar } = useSnackbar()

  const { setIsLoadingGlobal } = useLoadingGlobal()

  const genderDefault = ListGenderUser.find(
    (item) => item.label !== 'Nam' && item.label !== 'Nữ'
  )

  const navigate = useNavigate()

  const maxJob = 2
  const schema = createRegisterPersonSchema(maxJob)

  type FormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      job: [],
      gender: genderDefault?.value,
      birthday: '',
      ethnicity: '',
    },
  })

  const onSubmit = async (data: RegisterPersonForm) => {
    setIsLoadingGlobal(true)

    const accessToken = await getAccessToken()
    const { token } = await getPhoneNumber()
    const userID = await getUserID({})

    // if (!accessToken || !token) {
    //   console.error('Thiếu accessToken hoặc token, không thể đăng ký')
    //   setIsLoadingGlobal(false)
    //   return
    // }

    const payload: RegisterLaborePayload = {
      Accesstoken: accessToken,
      Code: token || '',
      ZaloId: userID,
      FullName: data.fullName,
      DateOfBirth: formatDateYYMMDD(data.birthday),
      Gender: data.gender,
      CID: data.idCard,
      CIDDate: formatDateYYMMDD(data.dateIdCard),
      CIDAddress: data.addressIdCar,
      Phone: data.phone,
      Email: data.email,
      Ethnicity: data.ethnicity,
      Address: data.address,
      Study: data.educationLevel,
      TechnicalLevel: data.study,
      TrainingMajor: data.major,
      GraduateSchool: data.graduationSchool,
      DesiredCareer: data.job,
    }

    registerLabore.mutate(payload, {
      onSuccess: (data) => {
        const { Data, StatusResult } = data

        if (StatusResult.Code === 0) {
          const { AccessToken, RefreshToken } = Data
          nativeStorage.setItem(KEYSTORAGE.ZALO_ID, userInfo.id)
          nativeStorage.setItem(KEYSTORAGE.ACCESSTOKEN, AccessToken)
          nativeStorage.setItem(KEYSTORAGE.REFRESHTOKEN, RefreshToken)

          navigate(ROUTES.PROFILE, { viewTransition: true })
          openSnackbar({
            text: 'Đăng ký người lao động thành công!',
            type: 'success',
          })
        } else {
          openSnackbar({
            text: 'Đã xảy ra lỗi khi lưu dữ liệu. Vui lòng thử lại.',
            type: 'error',
          })
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
          {/* <div className='bg-white p-4 rounded-xl shadow-sm'>
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
          </div> */}

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
            </div>
            <InputCustom
              label='Nơi cấp'
              placeholder='Nhập nơi cấp'
              icon={MapPin}
              error={errors.addressIdCar?.message}
              {...register('addressIdCar')}
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
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                <User className='w-4 h-4 inline mr-2' />
                Dân tộc
              </label>
              <Controller
                name='ethnicity'
                control={control}
                render={({ field }) => (
                  <SelectInput
                    options={ListEthnicity}
                    maxSelect={1}
                    title='Chọn dân tộc'
                    placeholder='Chọn dân tộc'
                    onChange={(values: string[]) => {
                      field.onChange(values[0] ?? '')
                    }}
                    className={`${errors.ethnicity ? 'border-red-600' : ''}`}
                  />
                )}
              />
              {errors.ethnicity && (
                <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.ethnicity.message}
                </p>
              )}
            </div>

            <div className='my-4'>
              <Controller
                name='gender'
                control={control}
                render={({ field }) => (
                  <GenderField
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                  />
                )}
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
      {/* <Modal
        actions={[
          {
            text: 'Khám phá việc làm',
            onClick: handleSuccess,
          },
        ]}
        title='Đăng ký thành công!'
        description='Tài khoản của bạn đã được tạo. Vui lòng chờ quản trị viên xác nhận để có thể sử dụng đầy đủ tính năng kết nối doanh nghiệp và tìm việc.'
        visible
      /> */}
    </div>
  )
}

export default RegisterPerson
