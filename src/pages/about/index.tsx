import { useDataAbout } from '@/api/query/setting'
import he from 'he'

const AboutPage = () => {
  const { data, isLoading } = useDataAbout()

  if (isLoading) {
    return (
      <div className='p-4 animate-pulse space-y-4'>
        <div className='h-6 w-32 bg-gray-200 rounded'></div>
        <div className='h-4 w-full bg-gray-200 rounded'></div>
        <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
        <div className='h-4 w-2/3 bg-gray-200 rounded'></div>
      </div>
    )
  }

  if (!data?.Data?.Data) {
    return <div className='p-4 text-gray-500'>Không có dữ liệu</div>
  }

  const aboutData = data.Data.Data

  const decodedOnce = he.decode(aboutData.description || '')
  const decodedDesc = he.decode(decodedOnce)

  return (
    <div className='p-4 space-y-4 pb-10'>
      <div
        className='prose prose-sm max-w-none'
        dangerouslySetInnerHTML={{ __html: decodedDesc }}
      />
    </div>
  )
}

export default AboutPage
