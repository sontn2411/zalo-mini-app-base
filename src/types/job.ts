interface DetailItem {
  gender: string
  quantity: number
  age: string
}

export interface PostingJobPayload {
  JobPosition: string
  Job: string
  Position: string
  Qualifications: string
  WorkingTime: string
  WorkExperience: string
  Salary: string
  Benefits: string[]
  RecruitmentPeriod: string
  Summary: string
  JobRequirements: string
  // Status: string
  Details: DetailItem[]
  Wards: string[]
  Address: string
}
