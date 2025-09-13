import useSettingUser from '@/hooks/useSettingUser'
import { useUserStore } from '@/store/useUserStore'
import { ReactNode, useEffect, useState } from 'react'
import { getUserInfo } from 'zmp-sdk'
import { getAccessToken, getPhoneNumber } from 'zmp-sdk/apis'
import { authorize } from 'zmp-sdk/apis'

export const TokenDisplay = ({
  accessToken,
  phoneToken,
}: {
  accessToken: string
  phoneToken: string
}) => {
  const [copied, setCopied] = useState('')

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className='pt-20 px-4 flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <p className='truncate'>AccessToken: {accessToken}</p>
        <button
          onClick={() => handleCopy(accessToken, 'access')}
          className='px-2 py-1 text-sm bg-gray-200 rounded'
        >
          Copy
        </button>
        {copied === 'access' && (
          <span className='text-green-500 text-sm'>Copied!</span>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <p className='truncate'>Phone Token: {phoneToken}</p>
        <button
          onClick={() => handleCopy(phoneToken, 'phone')}
          className='px-2 py-1 text-sm bg-gray-200 rounded'
        >
          Copy
        </button>
        {copied === 'phone' && (
          <span className='text-green-500 text-sm'>Copied!</span>
        )}
      </div>
    </div>
  )
}

const LayoutAuth = ({ children }: { children: ReactNode }) => {
  const { setUserInfo } = useUserStore()
  const scope = useSettingUser()

  const [accessToken, setAccessToken] = useState<string>('')
  const [phoneToken, setPhoneToken] = useState<string>('')

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { userInfo } = await getUserInfo()
        const accessTokenRes = await getAccessToken()
        // const { token } = await getPhoneNumber()

        setUserInfo({ ...userInfo, accessToken: accessTokenRes })
        setAccessToken(accessTokenRes)
        // setPhoneToken(token || '')

        // console.log('=====accessToken====', accessTokenRes)
        // console.log('=====token====', token)
      } catch (error) {
        console.error('Failed to fetch user info:', error)
      }
    }

    if (scope.info) {
      fetchUserProfile()
    }
  }, [scope, setUserInfo])

  return (
    <>
      {/* <div className='pt-20 px-4 flex flex-col gap-4'>
        <TokenDisplay accessToken={accessToken} phoneToken={phoneToken} />
      </div> */}
      {children}
    </>
  )
}

export default LayoutAuth
