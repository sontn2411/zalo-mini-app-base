import { useState, ReactNode } from 'react'

type Tab = {
  key: string
  label: string
  content: ReactNode
}

type CustomTabsProps = {
  tabs: Tab[]
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.key ?? '')

  return (
    <div>
      {/* Tab headers */}
      <div className='flex border-b border-gray-200'>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 text-center py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'text-color-1 border-b-2 border-color-1'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className='mt-4'>
        {tabs.map(
          (tab) =>
            activeTab === tab.key && (
              <div key={tab.key} className='animate-fadeIn'>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default CustomTabs
