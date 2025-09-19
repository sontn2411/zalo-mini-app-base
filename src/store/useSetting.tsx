import { Item } from '@/types/settings'
import { create } from 'zustand'

interface SettingStore {
  ListJob: Item[]
  ListGenderSearch: Item[]
  ListGenderUser: Item[]
  ListAge: Item[]
  ListSalary: Item[]
  ListStudy: Item[]
  ListWorkingTime: Item[]
  ListEthnicity: Item[]
  TechnicalLevel: Item[]
  ListBenefits: Item[]
  ListExp: Item[]
  ListPosition: Item[]
  ListAgeRecruitment: Item[]
  ListStatusJob: Item[]
  BusinessSize: Item[]
  setData: <K extends keyof Omit<SettingStore, 'setData' | 'setAllData'>>(
    key: K,
    value: SettingStore[K]
  ) => void
  setAllData: (
    data: Partial<Omit<SettingStore, 'setData' | 'setAllData'>>
  ) => void
}

const useSettingStore = create<SettingStore>((set) => ({
  ListJob: [],
  ListAge: [],
  ListGenderSearch: [],
  ListGenderUser: [],
  ListSalary: [],
  ListStudy: [],
  ListWorkingTime: [],
  ListEthnicity: [],
  TechnicalLevel: [],
  ListBenefits: [],
  ListExp: [],
  ListPosition: [],
  ListAgeRecruitment: [],
  ListStatusJob: [],
  BusinessSize: [],
  setData: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  setAllData: (data) =>
    set((state) => ({
      ...state,
      ...data,
    })),
}))

export default useSettingStore
