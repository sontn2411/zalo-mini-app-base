import { UserProfile } from '@/types/profile'
import { create } from 'zustand'

interface UserStore {
  userInfo: UserProfile
  setUserInfo: (payload: UserProfile) => void
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: {
    id: '',
    accessToken: '',
    name: '',
    avatar: '',
  },
  setUserInfo: (payload) => set({ userInfo: payload }),
}))
