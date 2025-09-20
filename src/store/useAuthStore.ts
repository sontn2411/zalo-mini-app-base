import { create } from 'zustand'

interface AuthState {
  hasTriedLogin: boolean
  setHasTriedLogin: (val: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  hasTriedLogin: false,
  setHasTriedLogin: (val) => set({ hasTriedLogin: val }),
}))
