export interface RegisterLaborePayload {
  Accesstoken: string
  Code: string
  ZaloId: string
  FullName: string
  DateOfBirth: string
  Gender: string
  CID: string
  CIDDate: string
  CIDAddress: string
  Phone: string
  Email: string
  Ethnicity: string
  Address: string
  Study: string
  TechnicalLevel: string
  TrainingMajor: string
  GraduateSchool: string
  DesiredCareer: string[]
}

export interface UpdateProfileLaborePayload {
  FullName: string
  DateOfBirth: string
  Gender: string
  CID: string
  CIDDate: string
  CIDAddress: string
  Phone: string
  Email: string
  Ethnicity: string
  Address: string
  Study: string
  TechnicalLevel: string
  TrainingMajor: string
  GraduateSchool: string
  DesiredCareer: string[]
}

export interface LoginPayload {
  Accesstoken: string
  Code: string
  ZaloId: string
}

export interface RegisterEnterprise {
  Accesstoken: string
  Code: string
  ZaloId: string
  Email: string
  CompanyName: string
  CompanyEmail: string
  CompanyAddress: string
  CompanyPhone: string
}

export interface UpdateProfileEnterprise {
  Email: string
  CompanyName: string
  CompanyEmail: string
  CompanyAddress: string
  CompanyPhone: string
}
