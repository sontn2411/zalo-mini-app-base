import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import FilterBottomSheet from './FilterBottomSheet'

type FilterType = 'sex' | 'age' | 'location' | 'industry'

const filterLabels: Record<FilterType, string> = {
  industry: 'Chọn ngành',
  location: 'Địa điểm',
  age: 'Tuổi',
  sex: 'Giới tính',
}

type SelectedFilters = Record<FilterType, string[]>

const filterOptions: Record<FilterType, string[]> = {
  industry: [
    'Công nghệ thông tin',
    'Kế toán - Kiểm toán',
    'Xây dựng',
    'Giáo dục',
    'Y tế',
  ],
  location: [
    'TP. Nha Trang',
    'Cam Ranh',
    'Ninh Hòa',
    'Vạn Ninh',
    'Diên Khánh',
    'Khánh Vĩnh',
    'Khánh Sơn',
    'Cam Lâm',
  ],
  age: ['18-24', '25-30', '31-40', 'Trên 40'],
  sex: ['Nam', 'Nữ', 'Không yêu cầu'],
}

const FilterCandidate = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    industry: [],
    location: [],
    age: [],
    sex: [],
  })
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleFilterSelect = (filterType: FilterType, option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(option) ? [] : [option],
    }))
  }

  const clearFilters = () => {
    setSelectedFilters({
      industry: [],
      location: [],
      age: [],
      sex: [],
    })
  }

  return (
    <div className=' bg-white py-4 '>
      <div className='flex space-x-2 overflow-x-auto px-4 pb-4 '>
        {Object.entries(filterLabels).map(([key, label]) => {
          const selected = selectedFilters[key as FilterType]
          const displayText = selected.length > 0 ? selected[0] : label
          return (
            <button
              key={key}
              onClick={() => setActiveFilter(key as FilterType)}
              className={`flex-shrink-0 max-w-[160px] px-4 py-2 rounded-lg text-sm whitespace-nowrap bg-gray-100 flex items-center space-x-1 transition-all text-color-1`}
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

export default FilterCandidate
