import DateRangePicker from '@/components/shared/DateRangePicker'
import BenfitOptions from '@/components/shared/form/benfitOptions'
import ExperienceOptions from '@/components/shared/form/experienceOptions'
import GenderField from '@/components/shared/form/genderField'
import SalaryRanges from '@/components/shared/form/salaryRanges'
import JobSelectOption from '@/components/shared/form/selectOption/jobOptions'
import LevelOption from '@/components/shared/form/selectOption/levelOption'
import RankJobOption from '@/components/shared/form/selectOption/rankJobOption'
import TimeOption from '@/components/shared/form/selectOption/timeOption'
import SheetDate from '@/components/shared/form/sheetDate'
import InputCustom from '@/components/ui/inputCustom'
import { FilePenLine, ListCheck, Target, UsersRound } from 'lucide-react'

const JobPostingPage = () => {
  return (
    <div className=''>
      {/* <StepIndicator steps={steps} currentStep={currentStep} /> */}
      <div className='bg-white rounded-2xl shadow-sm my-4 px-4 space-y-6'>
        <InputCustom
          label='Vị trí tuyển dụng'
          icon={Target}
          name='target'
          placeholder='Nhập vị trí cần tuyển'
        />

        <JobSelectOption />

        <RankJobOption />

        <LevelOption />

        <GenderField />

        <InputCustom
          label='Số lượng'
          icon={UsersRound}
          name='countUser'
          placeholder='Nhập số lượng'
        />

        <TimeOption />

        <SalaryRanges />

        <ExperienceOptions />

        <BenfitOptions />

        <SheetDate />
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            <FilePenLine className='w-4 h-4 inline mr-2' />
            Mô tả
          </label>
          <textarea
            rows={3}
            placeholder='Nhập mô tả'
            className={`w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2`}
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            <ListCheck className='w-4 h-4 inline mr-2' />
            Yêu cầu
          </label>
          <textarea
            rows={3}
            placeholder='Nhập yêu cầu'
            className={`w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2`}
          />
        </div>
      </div>
    </div>
  )
}

export default JobPostingPage
