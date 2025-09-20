import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FileText, Sparkles, AlertCircle } from 'lucide-react'
import SelectInput from '@/components/shared/form/selectInput'
import useSettingStore from '@/store/useSetting'
import { UpdateProfileLaborePayload } from '@/types/auth'
import { useUserStore } from '@/store/useUserStore'
import { insertUodateLabore } from '@/api/query/auth'
import { useLoadingGlobal } from '@/store/useLoadingGlobal'
import { toast } from 'react-toastify'
import { To, useNavigate } from 'react-router-dom'
import { formatDateDDMMYY, formatDateYYMMDD } from '@/utils/date'
import he from 'he'

const schema = z.object({
  skills: z.array(z.string()).min(1, 'Chọn ít nhất 1 kỹ năng'),
  experienceDescription: z.string().min(10, 'Mô tả tối thiểu 10 ký tự'),
})

type FormValues = z.infer<typeof schema>

const Experience = () => {
  const { Skills } = useSettingStore()
  const { laboreProfile, setLaboreProfile } = useUserStore()

  const { setIsLoadingGlobal } = useLoadingGlobal()

  const navigate = useNavigate()

  const updateProfile = insertUodateLabore()

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      skills: [],
      experienceDescription: laboreProfile?.experienceSummary || '',
    },
  })

  const onSubmit = (data: FormValues) => {
    setIsLoadingGlobal(true)
    const payload: UpdateProfileLaborePayload = {
      FullName: laboreProfile?.fullname || '',
      DateOfBirth: formatDateYYMMDD(laboreProfile?.dateofbirth || '') || '',
      Gender: laboreProfile?.gender || '',
      CID: laboreProfile?.cid || '',
      CIDDate: formatDateYYMMDD(laboreProfile?.ciddate || '') || '',
      CIDAddress: laboreProfile?.cidaddress || '',
      Phone: laboreProfile?.phone || '',
      Email: laboreProfile?.email || '',
      Ethnicity: laboreProfile?.ethnicity || '',
      Address: laboreProfile?.address || '',
      Study: laboreProfile?.traininglevel || '',
      TechnicalLevel: laboreProfile?.highestlevelofexpertise || '',
      TrainingMajor: laboreProfile?.trainingmajor || '',
      GraduateSchool: laboreProfile?.schoolgraduate || '',
      DesiredCareer: laboreProfile?.desiredcareer || [],

      Summary: he.decode(laboreProfile?.summary || '') || '',
      Salary: laboreProfile?.salary || 'f29ab406-8672-4ae4-9373-c28c309743e7',
      Experience: laboreProfile?.experience || 0,
      EducationQualifications: laboreProfile?.educationQualifications || [],
      Skills: data?.skills || [],
      CPSkill: laboreProfile?.cpskill || '',
      FLanguages: laboreProfile?.flanguages || [],
      ExperienceSummary: data?.experienceDescription || '',
      InterviewFormat: laboreProfile?.interviewFormat || '',
    }

    updateProfile.mutate(payload, {
      onSuccess: (res) => {
        const { Data, StatusResult, Errors } = res
        setIsLoadingGlobal(false)
        if (StatusResult.Code == 0) {
          setLaboreProfile({ ...Data })

          toast.success('Thay dổi thông tin thành công!')
          navigate(-1 as To, { viewTransition: true })
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-4 space-y-4 bg-white rounded-md'
    >
      {/* Kỹ năng */}
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Sparkles className='w-4 h-4 inline mr-2' />
          Kỹ năng
        </label>
        <Controller
          name='skills'
          control={control}
          render={({ field }) => (
            <SelectInput
              options={Skills}
              maxSelect={999}
              title='Chọn kỹ năng'
              placeholder='Chọn kỹ năng'
              onChange={(values: string[]) => field.onChange(values)}
              value={field.value}
            />
          )}
        />
        {errors.skills && (
          <p className='text-xs text-red-600 flex items-center mt-1'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.skills.message}
          </p>
        )}
      </div>

      {/* Mô tả */}
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <FileText className='w-4 h-4 inline mr-2' />
          Mô tả kinh nghiệm
        </label>
        <textarea
          {...register('experienceDescription')}
          placeholder='Mô tả công việc, trách nhiệm...'
          className='w-full p-3 border rounded-xl border-gray-300 focus:outline-color-1 focus:outline focus:outline-2'
          rows={4}
        />
        {errors.experienceDescription && (
          <p className='text-xs text-red-600 flex items-center mt-1'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.experienceDescription.message}
          </p>
        )}
      </div>

      <button
        type='submit'
        className='px-4 py-2 text-white bg-color-1 w-full rounded-lg'
      >
        Lưu
      </button>
    </form>
  )
}

export default Experience
