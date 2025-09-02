import { create } from 'zustand'

export type ProfessionalInfoFields = {
  jobPosition: string
  educationLevel: string
  workExperience: string
  expectedSalary: string
  otherBenefits: string
  notes: string
}

export type PersonInfoFields = {
  fullName: string
  address: string
  phone: string
}

interface FormRegisterData extends ProfessionalInfoFields, PersonInfoFields {}

type FormRegisterStore = {
  formData: FormRegisterData
  updateFormData: (data: Partial<FormRegisterData>) => void
}

export const useFormRegisterStore = create<FormRegisterStore>((set) => ({
  formData: {
    fullName: '',
    address: '',
    phone: '',
    jobPosition: '',
    educationLevel: '',
    workExperience: '',
    expectedSalary: '',
    otherBenefits: '',
    notes: '',
  },
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
}))
