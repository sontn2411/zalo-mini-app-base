import { Search } from 'lucide-react'
import SearchFilter from './searchFilter'
import JobList from '@/components/shared/jobList'

const JobListPage = () => {
  return (
    <div className=' flex flex-col gap-4'>
      <SearchFilter />
      <div className='px-4 py-4'>
        <JobList />
      </div>
    </div>
  )
}

export default JobListPage
