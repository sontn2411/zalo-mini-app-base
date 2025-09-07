import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import FilterBottomSheet from './filterBottmSheet'

type FilterType = 'industry' | 'location' | 'salary' | 'experience' | 'jobType'

type SelectedFilters = Record<FilterType, string[]>

const filterOptions: Record<FilterType, string[]> = {
  industry: [
    'Kế toán - Tài chính',
    'Công nghệ thông tin',
    'Bán hàng - Marketing',
    'Du lịch - Khách sạn',
    'Giáo dục - Đào tạo',
    'Y tế - Sức khỏe',
    'Xây dựng - Kiến trúc',
    'Sản xuất - Chế tạo',
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
  salary: [
    'Dưới 5 triệu',
    '5-10 triệu',
    '10-15 triệu',
    '15-20 triệu',
    '20-30 triệu',
    'Trên 30 triệu',
    'Thỏa thuận',
  ],
  experience: [
    'Chưa có kinh nghiệm',
    'Dưới 1 năm',
    '1-2 năm',
    '2-5 năm',
    '5-10 năm',
    'Trên 10 năm',
  ],
  jobType: [
    'Toàn thời gian',
    'Bán thời gian',
    'Thực tập',
    'Freelance',
    'Hợp đồng có thời hạn',
    'Hợp đồng không thời hạn',
  ],
}

const filterLabels: Record<FilterType, string> = {
  industry: 'Tất cả ngành nghề',
  location: 'Khu vực',
  salary: 'Mức lương',
  experience: 'Kinh nghiệm',
  jobType: 'Hình thức',
}

const SearchFilter = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    industry: [],
    location: [],
    salary: [],
    experience: [],
    jobType: [],
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
      salary: [],
      experience: [],
      jobType: [],
    })
  }

  return (
    <div className='bg-white'>
      <div className='py-4 px-4'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            // ref={inputRef}

            type='text'
            placeholder='Nhập từ khóa tìm kiếm...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full pl-10 pr-4 py-2 rounded-lg border text-gray-900 placeholder-gray-500'
          />
        </div>
      </div>

      <div className='flex space-x-2 overflow-x-auto px-4 pb-4'>
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

export default SearchFilter
