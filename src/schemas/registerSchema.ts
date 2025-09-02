import { z } from 'zod'

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, 'Tên phải có ít nhất 2 ký tự')
      .nonempty('Vui lòng nhập họ tên'),
    address: z.string().nonempty('Vui lòng nhập địa chỉ'),
    phone: z.string().regex(/^[0-9]{10,11}$/, 'Số điện thoại không hợp lệ'),

    jobPosition: z.string().nonempty('Vui lòng nhập vị trí ứng tuyển'),
    educationLevel: z.string().nonempty('Vui lòng nhập trình độ'),
    workExperience: z.string().nonempty('Vui lòng nhập kinh nghiệm'),
    expectedSalary: z.string().nonempty('Vui lòng nhập mức lương mong muốn'),
    otherBenefits: z.string().optional(),
    notes: z.string().optional(),

    username: z.string().min(4, 'Username phải có ít nhất 4 ký tự'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirmPassword: z.string().min(6, 'Vui lòng nhập lại mật khẩu'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu nhập lại không khớp',
  })

export type RegisterFormData = z.infer<typeof registerSchema>
