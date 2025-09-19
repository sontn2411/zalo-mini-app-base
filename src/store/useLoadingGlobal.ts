import { create } from 'zustand'

interface LoadingGlobalStore {
  isLoadingGlobal: boolean
  setIsLoadingGlobal: (payload: boolean) => void
}

export const useLoadingGlobal = create<LoadingGlobalStore>((set) => ({
  isLoadingGlobal: false,
  setIsLoadingGlobal: (payload) => set({ isLoadingGlobal: payload }),
}))
