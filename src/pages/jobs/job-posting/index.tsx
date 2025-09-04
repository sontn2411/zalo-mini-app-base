import BenfitOptions from '@/components/shared/form/benfitOptions'
import ExperienceOptions from '@/components/shared/form/experienceOptions'
import GenderField from '@/components/shared/form/genderField'
import SalaryRanges from '@/components/shared/form/salaryRanges'
import JobSelectOption from '@/components/shared/form/selectOption/jobOptions'
import LevelOption from '@/components/shared/form/selectOption/levelOption'
import RankJobOption from '@/components/shared/form/selectOption/rankJobOption'
import TimeOption from '@/components/shared/form/selectOption/timeOption'
import InputCustom from '@/components/ui/inputCustom'
import { Target, UsersRound } from 'lucide-react'

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
      </div>
    </div>
  )
}

export default JobPostingPage
