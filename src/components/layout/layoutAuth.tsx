import { insertLogin, useDataUserProfile } from '@/api/query/auth'
import { KEYSTORAGE } from '@/constants/message'
import { useAuthLogin } from '@/hooks/useAuthLogin'
import useSettingUser from '@/hooks/useSettingUser'
import { useUserStore } from '@/store/useUserStore'
import { accessTokenStorage } from '@/utils/localStorage'
import { ReactNode, useEffect, useState } from 'react'
import { getUserInfo, nativeStorage } from 'zmp-sdk'
import { getAccessToken, getPhoneNumber } from 'zmp-sdk/apis'

// const LayoutAuth = ({ children }: { children: ReactNode }) => {
//   const { setUserInfo, userInfo, setLaboreProfile, setProfile } = useUserStore()
//   const scope = useSettingUser()
//   const { data } = useDataUserProfile()
//   // console.log('=====', scope)
//   const login = insertLogin()

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const { userInfo } = await getUserInfo()
//         const accessTokenRes = await getAccessToken()
//         setUserInfo({ ...userInfo, accessToken: accessTokenRes })
//         if (userInfo.id) {
//           nativeStorage.setItem(KEYSTORAGE.ZALO_ID, userInfo.id)
//         }
//       } catch (error) {
//         console.error('Failed to fetch user info:', error)
//       }
//     }
//     if (scope.info) {
//       fetchUserProfile()
//     }
//   }, [scope, setUserInfo])

//   useEffect(() => {
//     const loginAccount = async () => {
//       const accessToken = await getAccessToken()
//       const { token } = await getPhoneNumber()

//       if (userInfo && userInfo.id && token) {
//         login.mutate(
//           { Accesstoken: accessToken, Code: token, ZaloId: userInfo?.id },
//           {
//             onSuccess: (res) => {
//               const { Data, StatusResult } = res
//               if (StatusResult.Code == 0 && Data) {
//                 setProfile({ ...Data })
//                 nativeStorage.setItem(KEYSTORAGE.ACCESSTOKEN, Data.AccessToken)
//                 nativeStorage.setItem(
//                   KEYSTORAGE.REFRESHTOKEN,
//                   Data.RefreshToken
//                 )
//               }
//             },
//           }
//         )
//       }
//     }

//     if (!accessTokenStorage && scope.phoneNumber && scope.info) {
//       loginAccount()
//     }
//   }, [userInfo])

//   useEffect(() => {
//     if (accessTokenStorage && data) {
//       const { Data } = data
//       setProfile({ ...Data })
//     }
//   }, [data])

//   return (
//     <>
//       {/* <div className='pt-20 px-4 flex flex-col gap-4'>
//         <TokenDisplay accessToken={accessToken} phoneToken={phoneToken} />
//       </div> */}
//       {children}
//     </>
//   )
// }

const LayoutAuth = ({ children }: { children: ReactNode }) => {
  const { userInfo } = useUserStore()
  const scope = useSettingUser()

  useAuthLogin(scope)

  return <>{children}</>
}

export default LayoutAuth
