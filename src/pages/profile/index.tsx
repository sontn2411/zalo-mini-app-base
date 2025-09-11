import { Building2, User } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import ProfilePerson from './profilePerson'
import { useUserInfo } from '@/hooks/useUserInfo'

const data = {
  avatar: 'https://h5.zdn.vn/static/images/avatar.png',
  id: '3368637342326461234',
  name: 'User Name',
}

const ProfilePage = () => {
  const navigate = useNavigate()
  const { userInfo } = useUserInfo()

  console.log('=====', userInfo)

  return (
    <>
      <ProfilePerson />

      <div className='mt-4 pb-6 px-4'>
        <div className='mt-4 flex flex-col gap-4'>
          <button
            onClick={() =>
              navigate(ROUTES.REGISTER_PERSON, { viewTransition: true })
            }
            className='flex items-center gap-3 p-4 rounded-xl bg-[#033d78] hover:bg-[#022b56] text-white shadow-md transition-all'
          >
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white/20'>
              <User className='w-5 h-5' />
            </div>
            <div className='text-left'>
              <p className='text-sm font-semibold'>Đăng ký người tìm việc</p>
              <p className='text-xs text-white/80'>Cho người lao động</p>
            </div>
          </button>

          <button
            onClick={() =>
              navigate(ROUTES.REGISTER_BUSINESS, { viewTransition: true })
            }
            className='flex items-center gap-3 p-4 rounded-xl bg-[#fd9221] hover:bg-[#e67e00] text-white shadow-md transition-all'
          >
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white/20'>
              <Building2 className='w-5 h-5' />
            </div>
            <div className='text-left'>
              <p className='text-sm font-semibold'>Đăng ký nhà tuyển dụng</p>
              <p className='text-xs text-white/80'>Cho doanh nghiệp</p>
            </div>
          </button>
          <button className='flex items-center gap-3 p-4 rounded-xl bg-[#1877f2] hover:bg-[#0f5ec1] text-white shadow-md transition-all'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.0'
                width='200px'
                height='200px'
                viewBox='0 0 806.000000 715.000000'
                preserveAspectRatio='xMidYMid meet'
              >
                <g
                  transform='translate(0.000000,715.000000) scale(0.100000,-0.100000)'
                  fill='#ffff'
                  stroke='none'
                >
                  <path d='M3980 6849 c-1065 -52 -2043 -641 -2593 -1561 -236 -394 -372 -791 -439 -1278 -17 -127 -17 -623 0 -750 120 -882 520 -1598 1196 -2142 458 -368 984 -589 1616 -678 122 -17 511 -24 650 -11 473 44 887 168 1284 387 937 515 1558 1461 1656 2524 14 147 14 442 0 590 -30 328 -115 664 -242 960 -312 728 -856 1299 -1563 1641 -492 238 -1019 345 -1565 318z m-831 -2319 c128 -37 186 -167 126 -286 -24 -49 -289 -407 -581 -784 -204 -264 -254 -331 -254 -341 0 -5 166 -9 369 -9 394 0 426 -3 478 -52 36 -33 56 -99 51 -163 -6 -67 -28 -100 -89 -135 l-44 -25 -555 0 c-498 1 -562 2 -620 18 -68 19 -110 50 -137 101 -22 42 -14 148 15 206 24 48 148 212 545 725 233 301 267 347 267 372 0 8 -87 12 -322 15 -361 5 -386 9 -448 73 -30 31 -35 43 -38 100 -4 53 -1 70 18 100 23 38 75 69 137 84 53 12 1039 14 1082 1z m1811 -13 c28 -15 51 -37 64 -62 21 -39 21 -53 24 -775 2 -506 -1 -751 -9 -787 -14 -72 -61 -118 -133 -132 -97 -20 -164 11 -202 94 l-24 53 2 753 3 754 24 41 c47 83 159 110 251 61z m-925 -513 c28 -10 71 -30 96 -45 75 -44 83 -44 126 -6 69 62 111 71 194 42 52 -19 75 -39 100 -87 18 -35 19 -66 19 -525 0 -550 1 -542 -76 -595 -78 -53 -158 -49 -230 12 -25 22 -48 40 -51 40 -4 0 -41 -18 -84 -40 -43 -22 -104 -47 -135 -55 -267 -70 -551 110 -650 411 -27 82 -29 100 -28 229 0 124 3 149 27 220 66 201 231 364 413 410 74 18 210 13 279 -11z m1935 0 c140 -41 263 -132 342 -252 174 -268 126 -661 -106 -868 -141 -126 -371 -182 -569 -138 -121 27 -212 76 -297 163 -130 131 -185 271 -184 471 0 133 17 210 69 317 81 164 250 289 438 323 71 12 240 4 307 -16z' />
                  <path d='M3870 3675 c-60 -19 -110 -62 -144 -126 -24 -44 -30 -67 -34 -145 -6 -111 12 -177 64 -241 52 -63 109 -87 197 -81 114 8 178 54 218 156 29 75 31 195 5 272 -26 74 -103 152 -168 168 -58 15 -81 14 -138 -3z' />
                  <path d='M5712 3675 c-105 -33 -172 -134 -180 -275 -11 -193 90 -320 253 -320 104 1 181 53 226 155 33 73 33 218 0 293 -33 73 -106 137 -172 151 -61 13 -73 13 -127 -4z' />
                </g>
              </svg>
            </div>
            <div className='text-left'>
              <p className='text-sm font-semibold'>Liên kết tài khoản</p>
              <p className='text-xs text-white/80'>
                Đã có tài khoản trên website
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
