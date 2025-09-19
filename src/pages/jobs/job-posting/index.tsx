import BenfitOptions from '@/components/shared/form/benfitOptions'
import ExperienceOptions from '@/components/shared/form/experienceOptions'
import SalaryRanges from '@/components/shared/form/salaryRanges'
import JobSelectOption from '@/components/shared/form/selectOption/jobOptions'
import RankJobOption from '@/components/shared/form/selectOption/rankJobOption'
import TimeOption from '@/components/shared/form/selectOption/timeOption'
import SheetDate from '@/components/shared/form/sheetDate'
import InputCustom from '@/components/ui/inputCustom'
import {
  AlertCircle,
  CircleDot,
  FilePenLine,
  ListCheck,
  MapPin,
  Target,
} from 'lucide-react'
import { Button } from 'zmp-ui'
import Details from './details'
import { Controller, useForm } from 'react-hook-form'
import { JobForm, JobFormSchema } from '@/schemas/postingSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import SelectOptionWard from './selectOptionWard'
import { formatDateRangerYYMMDD } from '@/utils/date'
import LevelOption from '@/components/shared/form/selectOption/levelOption'
import { insertRegisterRecruitment } from '@/api/query/jobs'
import { PostingJobPayload } from '@/types/job'
import { toast } from 'react-toastify'
import StatusOption from './statusOption'
import useSettingStore from '@/store/useSetting'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { useLoadingGlobal } from '@/store/useLoadingGlobal'

const TYPE = {
  DRAFT: 'lưu nháp',
  PENDING: 'chờ xét duyệt',
}

const JobPostingPage = () => {
  const registerRecruitment = insertRegisterRecruitment()

  const { ListStatusJob } = useSettingStore()

  const { setIsLoadingGlobal } = useLoadingGlobal()

  const navigate = useNavigate()

  const draftOption = ListStatusJob.find(
    (item) => item.label.toLocaleLowerCase() === TYPE.DRAFT.toLocaleLowerCase()
  )

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<JobForm>({
    resolver: zodResolver(JobFormSchema) as any,
    defaultValues: {
      jobposition: '',
      job: '',
      position: '',
      qualifications: '',
      workingtime: '',
      workexperience: '',
      salary: '',
      benefits: [],
      recruitmentperiod: '',
      summary: '',
      jobrequirements: '',
      detail: [{ gender: '', quantity: 0, age: '' }],
      address: '',
      ward: [],
      status: draftOption?.value || '',
    },
    shouldFocusError: false,
  })

  const onSubmit = (value: JobForm) => {
    setIsLoadingGlobal(true)
    const payload: PostingJobPayload = {
      JobPosition: value.jobposition,
      Job: value.job,
      Position: value.position,
      Qualifications: value.qualifications,
      WorkingTime: value.workingtime,
      WorkExperience: value.workexperience,
      Salary: value.salary,
      Benefits: value.benefits,
      RecruitmentPeriod: formatDateRangerYYMMDD(value.recruitmentperiod),
      Summary: value.summary,
      JobRequirements: value.jobrequirements,
      // Status: 'null',
      Details: value.detail.map((item) => ({
        ...item,
        gender: item.gender ?? '',
      })),
      Wards: value.ward,
      Address: value.address,
    }

    registerRecruitment.mutate(payload, {
      onSuccess: (res) => {
        setIsLoadingGlobal(false)
        const { Errors, StatusResult } = res
        if (StatusResult.Code === 0) {
          toast.success('Tin của bạn đã được gửi, vui lòng chờ duyệt.')
          navigate(ROUTES.ENTERPRISERECRUITMENTS)
        } else {
          toast.error(Errors[0].Message)
        }
      },
      onError: (err) => {
        console.log(err)
        setIsLoadingGlobal(false)
      },
    })
  }

  // console.log('====errors===', errors)
  // console.log('====value===', getValues())

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      {/* <StepIndicator steps={steps} currentStep={currentStep} /> */}
      <div className='bg-white rounded-2xl shadow-sm  p-4 space-y-6'>
        <InputCustom
          label='Vị trí tuyển dụng'
          icon={Target}
          placeholder='Nhập vị trí cần tuyển'
          {...register('jobposition')}
          error={errors.jobposition?.message}
        />

        <Controller
          control={control}
          name='job'
          render={({ field }) => (
            <JobSelectOption
              error={errors.job?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name='qualifications'
          control={control}
          render={({ field }) => (
            <LevelOption
              onChange={field.onChange}
              error={errors.qualifications?.message}
            />
          )}
        />

        <Controller
          name='position'
          control={control}
          render={({ field }) => (
            <RankJobOption
              onChange={field.onChange}
              error={errors.position?.message}
            />
          )}
        />

        <Controller
          name='ward'
          control={control}
          render={({ field }) => (
            <SelectOptionWard
              onChange={field.onChange}
              error={errors.ward?.message}
            />
          )}
        />

        <InputCustom
          label='Địa chỉ cụ thể'
          icon={MapPin}
          placeholder='Nhập địa chỉ'
          {...register('address')}
          error={errors.address?.message}
        />

        <Details control={control} errors={errors} />

        <Controller
          control={control}
          name='workingtime'
          render={({ field }) => (
            <TimeOption
              onChange={field.onChange}
              error={errors.workingtime?.message}
            />
          )}
        />
        {/* <TimeOption /> */}

        <Controller
          control={control}
          name='salary'
          render={({ field }) => (
            <SalaryRanges
              onChange={field.onChange}
              error={errors.salary?.message}
            />
          )}
        />
        {/* <SalaryRanges /> */}

        <Controller
          name='workexperience'
          control={control}
          render={({ field }) => (
            <ExperienceOptions
              onChange={field.onChange}
              error={errors.workexperience?.message}
            />
          )}
        />

        {/* <ExperienceOptions /> */}

        <Controller
          name='benefits'
          control={control}
          render={({ field }) => (
            <BenfitOptions
              onChange={field.onChange}
              error={errors.benefits?.message}
            />
          )}
        />

        {/* <BenfitOptions /> */}
        <Controller
          name='recruitmentperiod'
          control={control}
          render={({ field }) => (
            <SheetDate
              value={field.value}
              onChange={field.onChange}
              title='Thời hạn tuyển dụng'
              error={errors.recruitmentperiod?.message}
            />
          )}
        />
        {/* <SheetDate title='Thời hạn tuyển dụng' /> */}

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            <FilePenLine className='w-4 h-4 inline mr-2' />
            Mô tả
          </label>
          <textarea
            rows={3}
            placeholder='Nhập mô tả'
            className={`w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2 ${
              errors.summary ? 'border-red-600' : ''
            }`}
            {...register('summary')}
          />
          {errors.summary?.message && (
            <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
              <AlertCircle className='w-4 h-4 mr-1' />
              {errors.summary?.message}
            </p>
          )}
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            <ListCheck className='w-4 h-4 inline mr-2' />
            Yêu cầu
          </label>
          <textarea
            rows={3}
            placeholder='Nhập yêu cầu'
            className={`w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2 ${
              errors.jobrequirements ? 'border-red-600' : ''
            }`}
            {...register('jobrequirements')}
          />
          {errors.jobrequirements?.message && (
            <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
              <AlertCircle className='w-4 h-4 mr-1' />
              {errors.jobrequirements?.message}
            </p>
          )}
        </div>

        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <StatusOption value={field.value} onChange={field.onChange} />
          )}
        />

        <div className='pb-6'>
          <Button
            htmlType='submit'
            className='w-full bg-color-1 text-white py-3 rounded-xl text-sm font-medium hover:bg-color-1'
          >
            Xác nhận
          </Button>
        </div>
      </div>
    </form>
  )
}

export default JobPostingPage
