import { EnterpriseProfile, LaboreProfile, UserProfile } from '@/types/profile'
import { create } from 'zustand'

interface UserStore {
  userInfo: UserProfile
  laboreProfile: LaboreProfile | null
  enterpriseProfile: EnterpriseProfile | null
  setUserInfo: (payload: UserProfile) => void
  setLaboreProfile: (payload: LaboreProfile) => void
  setEnterpriseProfile: (payload: EnterpriseProfile) => void
  setProfile: (payload: LaboreProfile | EnterpriseProfile) => void
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: {
    id: '',
    accessToken: '',
    name: '',
    avatar: '',
  },
  laboreProfile: null,
  enterpriseProfile: null,

  setUserInfo: (payload) => set({ userInfo: payload }),

  setLaboreProfile: (payload) => {
    set({ laboreProfile: payload })
  },

  setEnterpriseProfile: (payload) => {
    set({ enterpriseProfile: payload })
  },

  setProfile: (payload) => {
    if (payload.usertype === 'Enterprise') {
      set({ enterpriseProfile: payload as EnterpriseProfile })
    } else {
      set({ laboreProfile: payload as LaboreProfile })
    }
  },
}))
