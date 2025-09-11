import { useDataProvince } from '@/api/query/location'
import { useDataSettings } from '@/api/query/setting'
import useLocationStore from '@/store/useLocation'
import useSettingStore from '@/store/useSetting'
import { ReactNode, useEffect } from 'react'

const KH = 'khánh hòa'

const Settings = ({ children }: { children: ReactNode }) => {
  const { data } = useDataSettings()
  const { data: dataProvince } = useDataProvince()

  const { setAllData } = useSettingStore()

  const { setAllData: setAllDataLocation } = useLocationStore()

  useEffect(() => {
    if (data) {
      const dataSettings = data.Data
      setAllData({
        ListJob: dataSettings.ListJob || [],
        ListAge: dataSettings.ListAge || [],
        ListGenderSearch: dataSettings.ListGenderSearch || [],
        ListGenderUser: dataSettings.ListGenderUser || [],
        ListSalary: dataSettings.ListSalary || [],
        ListStudy: dataSettings.ListStudy || [],
        ListWorkingTime: dataSettings.ListWorkingTime || [],
      })
    }
  }, [data])

  useEffect(() => {
    if (dataProvince) {
      const dataLocation = dataProvince.Data.Data.map((item) => ({
        value: item.value,
        label: item.text,
      }))

      const findKH = dataLocation.find(
        (item) => item.label.toLowerCase() === KH.toLowerCase()
      )

      setAllDataLocation({
        ListProvince: dataLocation,
        provinceKH: findKH.value,
      })
    }
  }, [dataProvince])

  return <>{children}</>
}

export default Settings
