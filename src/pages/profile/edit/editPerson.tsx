import { insertUodateLabore } from '@/api/query/auth'
import GenderField from '@/components/shared/form/genderField'
import SelectInput from '@/components/shared/form/selectInput'
import GraduationOption from '@/components/shared/form/selectOption/graduationOption'
import SheetDate from '@/components/shared/form/sheetDate'
import InputCustom from '@/components/ui/inputCustom'
import { ROUTES } from '@/constants/routes'
import {
  createRegisterPersonSchema,
  RegisterPersonForm,
} from '@/schemas/registerSchema'
import { useLoadingGlobal } from '@/store/useLoadingGlobal'
import useSettingStore from '@/store/useSetting'
import { useUserStore } from '@/store/useUserStore'
import { UpdateProfileLaborePayload } from '@/types/auth'
import { formatDateYYMMDD } from '@/utils/date'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AlertCircle,
  Award,
  Briefcase,
  Building2,
  Calendar,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
  UserRound,
} from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from 'zmp-ui'
import z from 'zod'
import { toast } from 'react-toastify'

const EditPerson = () => {
  const { ListEthnicity, ListJob } = useSettingStore()
  const { laboreProfile, setLaboreProfile } = useUserStore()
  const navigate = useNavigate()
  const { setIsLoadingGlobal } = useLoadingGlobal()

  const updateProfile = insertUodateLabore()

  const maxJob = 5
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
      job: laboreProfile?.desiredcareer || [],
      gender: laboreProfile?.gender,
      birthday: laboreProfile?.dateofbirth || '',
      ethnicity: laboreProfile?.ethnicity || '',
      fullName: laboreProfile?.fullname || '',
      phone: laboreProfile?.phone || '',
      email: laboreProfile?.email || '',
      address: laboreProfile?.address || '',
      idCard: laboreProfile?.cid || '',
      dateIdCard: laboreProfile?.ciddate || '',
      addressIdCar: laboreProfile?.cidaddress || '',
      graduationSchool: laboreProfile?.schoolgraduate,
      major: laboreProfile?.trainingmajor,
      educationLevel: laboreProfile?.traininglevel,
      study: laboreProfile?.highestlevelofexpertise || '',
    },
  })

  const onSubmit = async (data: RegisterPersonForm) => {
    setIsLoadingGlobal(true)
    const payload: UpdateProfileLaborePayload = {
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

    updateProfile.mutate(payload, {
      onSuccess: (res) => {
        const { Data, StatusResult, Errors } = res
        setIsLoadingGlobal(false)
        if (StatusResult.Code == 0) {
          setLaboreProfile({ ...Data })

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
    <form onSubmit={handleSubmit(onSubmit)} className='relative '>
      <div className='py-4 mb-4 bg-white '>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin cá nhân
        </h3>
        <div className='space-y-3 px-4  '>
          <InputCustom
            label='Họ và Tên'
            placeholder='Nhập họ và tên đầy đủ'
            icon={UserRound}
            error={errors.fullName?.message}
            {...register('fullName')}
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

          <div className='py-2'>
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
      </div>

      {/* Contact Info */}
      <div className='py-4 mb-4 bg-white'>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin liên hệ
        </h3>
        <div className='space-y-3 px-4'>
          <InputCustom
            label='Số điện thoại'
            placeholder='Nhập số điện thoại'
            icon={Phone}
            error={errors.phone?.message}
            {...register('phone')}
            type='tel'
          />

          <InputCustom
            label='Email'
            type='email'
            placeholder='Nhập email'
            icon={Mail}
            error={errors.email?.message}
            {...register('email')}
          />

          <InputCustom
            label='Địa chỉ liên lạc'
            placeholder='Nhập địa chỉ'
            icon={MapPin}
            error={errors.address?.message}
            {...register('address')}
          />
        </div>
      </div>

      {/* Identity Info */}
      <div className='py-4 mb-4 bg-white'>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin định danh
        </h3>
        <div className='space-y-3 px-4'>
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
                  value={field.value}
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
        </div>
      </div>

      {/* Career Info */}
      <div className='py-4 mb-4 pb-24  bg-white '>
        <h3 className='text-lg font-bold text-gray-900 mb-4 px-2'>
          Thông tin nghề nghiệp
        </h3>
        <div className='space-y-3 px-4'>
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
                  value={field.value}
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
                  maxSelect={5}
                  title='Chọn ngành nghề'
                  placeholder='Chọn tối đa 5 ngành'
                  onChange={(values: string[]) => field.onChange(values)}
                  className={`${errors.job ? 'border-red-600' : ''}`}
                  value={field.value}
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
      </div>

      <div className='w-full px-4 pb-6 pt-4 fixed bottom-0 bg-white '>
        <Button
          htmlType='submit'
          className='w-full bg-color-1 text-white py-3 rounded-xl text-sm font-medium hover:bg-color-1'
        >
          Lưu
        </Button>
      </div>
    </form>
  )
}

export default EditPerson
