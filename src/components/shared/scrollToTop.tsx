import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const ScrollToTop = ({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement>
}) => {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (scrollRef.current && navigationType === 'PUSH') {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, navigationType])

  return null
}

export default ScrollToTop
