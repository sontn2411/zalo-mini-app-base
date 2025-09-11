import { Item } from '@/types/settings'
import { create } from 'zustand'

interface LocationStore {
  ListProvince: Item[]
  ListWards: Item[]
  provinceKH: string
  setData: <K extends keyof Omit<LocationStore, 'setData' | 'setAllData'>>(
    key: K,
    value: LocationStore[K]
  ) => void
  setAllData: (
    data: Partial<Omit<LocationStore, 'setData' | 'setAllData'>>
  ) => void
}

const useLocationStore = create<LocationStore>((set) => ({
  ListProvince: [],
  ListWards: [],
  provinceKH: '',
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

export default useLocationStore
