import { z } from 'zod'

export const registerPersonSchema = z
  .object({
    username: z.string().min(3, 'Tên đăng nhập tối thiểu 3 ký tự'),
    password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    confirmPassword: z.string(),
    fullName: z.string().min(1, 'Vui lòng nhập họ tên'),
    idCard: z.string().min(9, 'Số CCCD không hợp lệ'),
    issuePlace: z.string().min(1, 'Vui lòng nhập nơi cấp'),
    phone: z.string().regex(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ'),
    address: z.string().min(1, 'Vui lòng nhập địa chỉ'),
    email: z.string().email('Email không hợp lệ'),
    ethnicity: z.string().min(1, 'Vui lòng nhập dân tộc'),
    educationLevel: z.string().min(1, 'Vui lòng nhập trình độ học vấn'),
    graduationSchool: z.string().min(1, 'Vui lòng nhập trường tốt nghiệp'),
    major: z.string().min(1, 'Vui lòng nhập chuyên ngành'),
    study: z.string().min(1, 'Vui lòng chọn trình độ cao nhất'),
    job: z
      .array(z.string())
      .min(1, 'Vui lòng chọn ít nhất 1 ngành')
      .max(2, 'Chỉ được chọn tối đa 2 ngành'),
    gender: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu xác nhận không khớp',
  })

export type RegisterPersonForm = z.infer<typeof registerPersonSchema>
