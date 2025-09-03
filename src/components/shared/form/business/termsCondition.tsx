import { DollarSign, Gift } from 'lucide-react'
import SelectInput from '../selectInput'
import BenfitOptions from '../benfitOptions'
import SalaryRanges from '../salaryRanges'
import NoteInput from '../input/noteInput'
import { ButtonCompleted, ButtonPrevStep } from '../buttonSteps'

interface TermsConditionProps {
  handlePrevStep: () => void
  handleNextStep: () => void
}

const TermsCondition = ({
  handlePrevStep,
  handleNextStep,
}: TermsConditionProps) => {
  return (
    <form className='space-y-6 animate-fadeIn'>
      <SalaryRanges />

      <BenfitOptions />

      <NoteInput />

      <div className='flex w-full gap-4'>
        <ButtonPrevStep handlePrevStep={handlePrevStep} />

        <ButtonCompleted hanldeComplete={handleNextStep} />
      </div>
    </form>
  )
}

export default TermsCondition
