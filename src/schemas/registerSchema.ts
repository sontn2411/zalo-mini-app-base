import { z } from 'zod'

export const createRegisterPersonSchema = (maxJob: number) =>
  z.object({
    fullName: z.string().min(1, 'Vui lòng nhập họ tên'),
    idCard: z.string().min(9, 'Số CCCD không hợp lệ'),
    addressIdCar: z.string().min(1, 'Vui lòng nhập nơi cấp'),
    phone: z.string().regex(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ'),
    address: z.string().min(1, 'Vui lòng nhập địa chỉ'),
    email: z.string().email('Email không hợp lệ'),
    ethnicity: z.string().min(1, 'Vui lòng chọn dân tộc'),
    educationLevel: z.string().min(1, 'Vui lòng nhập trình độ học vấn'),
    graduationSchool: z.string().min(1, 'Vui lòng nhập trường tốt nghiệp'),
    major: z.string().min(1, 'Vui lòng nhập chuyên ngành'),
    study: z.string().min(1, 'Vui lòng chọn trình độ cao nhất'),
    job: z
      .array(z.string())
      .min(2, 'Vui lòng chọn ít nhất 2 ngành')
      .max(maxJob, `Chỉ được chọn tối đa ${maxJob} ngành`),
    gender: z.string(),
    birthday: z.string().min(1, 'Vui lòng chọn ngày tháng năm sinh'),
    dateIdCard: z.string().min(1, 'Vui lòng chọn ngày cấp CCCD'),
  })

const schema = createRegisterPersonSchema(2)

export type RegisterPersonForm = z.infer<typeof schema>
