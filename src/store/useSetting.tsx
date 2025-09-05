import { create } from 'zustand'

interface useSettingStore {
  isShowSheet: boolean
  setIsShowSheet: (payload: boolean) => void
}

const useSettingStore = create<useSettingStore>((set) => ({
  isShowSheet: false,
  setIsShowSheet: (payload) => set({ isShowSheet: payload }),
}))

export default useSettingStore
