// components/profile/types.ts
export interface WorkerProfileForm {
  fullName: string
  address: string
  phone: string
  jobPosition: string
  educationLevel: string
  workExperience: string
  expectedSalary: string
  otherBenefits: string[]
  notes: string
  username: string
  password: string
  confirmPassword: string
}

export interface UserProfile {
  id: string
  avatar: string
  name: string
  accessToken: string
}
