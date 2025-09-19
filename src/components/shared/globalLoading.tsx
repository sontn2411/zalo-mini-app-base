import { useLoadingGlobal } from '@/store/useLoadingGlobal'

const GlobalLoading = () => {
  const { isLoadingGlobal } = useLoadingGlobal()

  console.log('=======', isLoadingGlobal)

  if (!isLoadingGlobal) return <></>

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white' />
    </div>
  )
}

export default GlobalLoading
