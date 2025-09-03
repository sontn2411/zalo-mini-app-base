const InfoCard = ({ icon: Icon, title, value, highlight = false }) => (
  <div
    className={`p-3 rounded-xl border ${
      highlight ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'
    }`}
  >
    <div className='flex items-center space-x-2'>
      <Icon
        className={`w-4 h-4 ${highlight ? 'text-blue-600' : 'text-gray-500'}`}
      />
      <div className='flex-1'>
        <p
          className={`text-xs ${highlight ? 'text-blue-700' : 'text-gray-500'}`}
        >
          {title}
        </p>
        <p
          className={`text-sm font-medium ${
            highlight ? 'text-blue-900' : 'text-gray-900'
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  </div>
)

export default InfoCard
