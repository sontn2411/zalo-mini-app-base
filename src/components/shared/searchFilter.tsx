import { ChevronDown, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import FilterBottomSheet from './filterBottomSheet'
import useSettingStore from '@/store/useSetting'
import { useDebounce } from '@/hooks/useDebounce'
import useLocationStore from '@/store/useLocation'
import { useDataWards } from '@/api/query/location'

export type FilterType =
  | 'industry'
  | 'location'
  | 'salary'
  | 'experience'
  | 'jobType'
  | 'gender'
  | 'age'
  | 'study'

export type FilterOption = {
  value: string
  label: string
}

type SelectedFilters = Record<FilterType, string[]>

const defaultFilterOptions: Record<FilterType, FilterOption[]> = {
  industry: [],
  location: [],
  salary: [],
  experience: [],
  jobType: [],
  study: [],
  age: [],
  gender: [],
}

const filterLabels: Record<FilterType, string> = {
  industry: 'Chọn ngành',
  location: 'Địa điểm',
  age: 'Tuổi',
  gender: 'Giới tính',
  salary: 'Mức lương',
  experience: 'Kinh nghiệm',
  jobType: 'Hình thức',
  study: 'Trình độ',
}

type SearchFilterProps = {
  visibleFilters?: FilterType[]
  isSearch?: boolean
  onChange?: (filters: SelectedFilters, searchQuery: string) => void
}

const SearchFilter = ({
  visibleFilters,
  isSearch = true,
  onChange,
}: SearchFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    industry: [],
    location: [],
    salary: [],
    experience: [],
    jobType: [],
    gender: [],
    age: [],
    study: [],
  })
  const [searchQuery, setSearchQuery] = useState<string>('')

  const [filterOptions, setFilterOptions] =
    useState<Record<FilterType, FilterOption[]>>(defaultFilterOptions)

  const { provinceKH } = useLocationStore()

  const { data: dataWards } = useDataWards(provinceKH)

  const {
    ListJob,
    ListAge,
    ListSalary,
    ListWorkingTime,
    ListGenderSearch,
    ListStudy,
  } = useSettingStore()

  const debouncedSearchQuery = useDebounce(searchQuery, 400)

  const addAllOption = (options: FilterOption[] = []): FilterOption[] => {
    if (!options || options.length === 0) return options
    return [{ label: 'Tất cả', value: '' }, ...options]
  }

  useEffect(() => {
    const wards = (dataWards?.Data?.Data || []).map((item: any) => ({
      label: item.text,
      value: item.value,
    }))

    setFilterOptions({
      industry: addAllOption(ListJob || []),
      age: addAllOption(ListAge || []),
      salary: addAllOption(ListSalary || []),
      jobType: addAllOption(ListWorkingTime || []),
      study: addAllOption(ListStudy || []),
      gender: addAllOption(ListGenderSearch || []),
      experience: addAllOption([]),
      location: addAllOption(wards),
    })
  }, [
    ListJob,
    ListAge,
    ListSalary,
    ListWorkingTime,
    ListGenderSearch,
    ListStudy,
    dataWards,
  ])

  useEffect(() => {
    onChange?.(selectedFilters, debouncedSearchQuery)
  }, [debouncedSearchQuery, selectedFilters])

  const handleFilterSelect = (filterType: FilterType, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = {
        ...prev,
        [filterType]: prev[filterType].includes(value) ? [] : [value],
      }
      onChange?.(newFilters, searchQuery)
      return newFilters
    })
  }

  const clearFilters = () => {
    const cleared = {
      industry: [],
      location: [],
      salary: [],
      experience: [],
      jobType: [],
      gender: [],
      age: [],
      study: [],
    }
    setSelectedFilters(cleared)
    onChange?.(cleared, searchQuery)
  }

  const filtersToRender = Object.entries(filterLabels).filter(
    ([key]) =>
      filterOptions[key as FilterType]?.length > 0 &&
      (!visibleFilters || visibleFilters.includes(key as FilterType))
  )

  return (
    <div className='bg-white'>
      {isSearch && (
        <div className='py-4 px-4'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ' />
            <input
              type='text'
              placeholder='Nhập từ khóa tìm kiếm...'
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                // onChange?.(selectedFilters, e.target.value)
              }}
              className='w-full pl-10 pr-4 py-2 rounded-lg border text-gray-900 placeholder-gray-500 focus:outline-color-1 focus:outline focus:outline-2'
            />
          </div>
        </div>
      )}

      <div
        className={`flex space-x-2 overflow-x-auto px-4 pb-4 ${
          isSearch ? '' : 'mt-4'
        }`}
      >
        {filtersToRender.map(([key, label]) => {
          const selected = selectedFilters[key as FilterType]
          const option = filterOptions[key as FilterType].find(
            (o) => o.value === selected[0]
          )
          const displayText = option ? option.label : label

          return (
            <button
              key={key}
              onClick={() => setActiveFilter(key as FilterType)}
              className='flex-shrink-0 max-w-[160px] px-4 py-2 rounded-lg text-sm whitespace-nowrap bg-gray-100 flex items-center space-x-1 transition-all text-color-1'
            >
              <span className='truncate max-w-[100px]'>{displayText}</span>
              <ChevronDown className='w-4 h-4 flex-shrink-0' />
            </button>
          )
        })}
      </div>

      {activeFilter && (
        <FilterBottomSheet
          filterType={activeFilter}
          options={filterOptions[activeFilter]}
          filterLabels={filterLabels}
          selectedFilters={selectedFilters}
          handleFilterSelect={handleFilterSelect}
          clearFilters={clearFilters}
          onClose={() => setActiveFilter(null)}
        />
      )}
    </div>
  )
}

export default SearchFilter
