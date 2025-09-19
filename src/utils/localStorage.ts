import { KEYSTORAGE } from '@/constants/message'
import { nativeStorage } from 'zmp-sdk/apis'

export const profile = (profile) =>
  nativeStorage.setItem('recentSearch', profile)

export const accessTokenStorage = nativeStorage.getItem(KEYSTORAGE.ACCESSTOKEN)
