import { Building2, User } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import ProfilePerson from './profilePerson'
import { useUserInfo } from '@/hooks/useUserInfo'
import ButtonCTA from './buttonCTA'
import { useEffect, useState } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { getPhoneNumber } from 'zmp-sdk'
import { getAccessToken } from 'zmp-sdk/apis'
import { TokenDisplay } from '@/components/layout/layoutAuth'
import { Button } from 'zmp-ui'

const data = {
  avatar: 'https://h5.zdn.vn/static/images/avatar.png',
  id: '3368637342326461234',
  name: 'User Name',
}

const ProfilePage = () => {
  const navigate = useNavigate()
  const { userInfo } = useUserInfo()
  const { setUserInfo } = useUserStore()

  const [accessToken, setAccessToken] = useState<string>('')
  const [phoneToken, setPhoneToken] = useState<string>('')

  useEffect(() => {
    if (userInfo) {
      setUserInfo(userInfo)
    }
  }, [userInfo])

  const handleNavigate = async () => {
    const { token } = await getPhoneNumber()
    const accessToken = await getAccessToken()
    setAccessToken(accessToken)
    setPhoneToken(token || '')
  }

  return (
    <>
      {/* <ProfilePerson /> */}

      <Button onClick={handleNavigate}>Show phone</Button>
      <TokenDisplay accessToken={accessToken} phoneToken={phoneToken} />
      <ButtonCTA />
    </>
  )
}

export default ProfilePage
