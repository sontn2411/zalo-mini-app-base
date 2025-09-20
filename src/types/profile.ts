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

export interface LaboreProfile {
  avatar: string
  address: string
  cid: string
  cidaddress: string
  ciddate: string
  dateofbirth: string
  desiredcareer: string[]
  email: string
  ethnicity: string
  fullname: string
  gender: string
  highestlevelofexpertise: string
  isactive: boolean
  isapproval: boolean
  phone: string
  schoolgraduate: string
  traininglevel: string
  trainingmajor: string
  AccessToken: string
  RefreshToken: string
  zaloId: string
  usertype: string

  summary: string
  // sumary: string
  salary: string
  experience: number
  educationQualifications: string[]
  skills: string[]
  cpskill: string
  flanguages: string[]
  experienceSummary: string
  interviewFormat: string
}

export interface EnterpriseProfile {
  companyemail: string
  companyname: string
  companyphone: string
  usertype: string
  isactive: boolean
  ward: string
  address: string
  email: string
  avatart: string
  businesssize: string | null
  businesstype: string | null
}
