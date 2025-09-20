// hooks/useAuthLogin.ts
import { useEffect, useRef } from 'react'
import { getAccessToken, getPhoneNumber } from 'zmp-sdk/apis'
import { nativeStorage } from 'zmp-sdk'
import { insertLogin, useDataUserProfile } from '@/api/query/auth'
import { useUserStore } from '@/store/useUserStore'
import { accessTokenStorage } from '@/utils/localStorage'
import { KEYSTORAGE } from '@/constants/message'
import { getUserID } from 'zmp-sdk/apis'
import { useAuthStore } from '@/store/useAuthStore'

export const useAuthLogin = (scope: {
  phoneNumber?: boolean
  info?: boolean
}) => {
  const login = insertLogin()
  const { setProfile } = useUserStore()
  const { data, isLoading } = useDataUserProfile()

  const { hasTriedLogin, setHasTriedLogin } = useAuthStore()

  useEffect(() => {
    const loginAccount = async () => {
      const accessToken = await getAccessToken()
      const { token } = await getPhoneNumber()
      const userID = await getUserID({})

      if (userID && token) {
        login.mutate(
          { Accesstoken: accessToken, Code: token, ZaloId: userID },
          {
            onSuccess: (res) => {
              const { Data, StatusResult } = res
              if (StatusResult.Code === 0 && Data) {
                setProfile({ ...Data })
                nativeStorage.setItem(KEYSTORAGE.ACCESSTOKEN, Data.AccessToken)
                nativeStorage.setItem(
                  KEYSTORAGE.REFRESHTOKEN,
                  Data.RefreshToken
                )
              }
            },
            onError: () => {
              nativeStorage.removeItem(KEYSTORAGE.ACCESSTOKEN)
              nativeStorage.removeItem(KEYSTORAGE.REFRESHTOKEN)
            },
          }
        )
      }
    }

    if (
      !accessTokenStorage &&
      scope.phoneNumber &&
      scope.info &&
      !hasTriedLogin
    ) {
      setHasTriedLogin(true)
      loginAccount()
    }
  }, [scope, login, setProfile])

  useEffect(() => {
    if (accessTokenStorage && data) {
      const { Data } = data
      setProfile({ ...Data })
    }
  }, [data, setProfile])

  return { isLoadingProfile: isLoading }
}
