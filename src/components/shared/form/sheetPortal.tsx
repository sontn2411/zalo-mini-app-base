import { createPortal } from 'react-dom'
import { Sheet } from 'zmp-ui'

const SheetPortal = ({
  visible,
  onClose,
  children,
  height,
}: {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
  height?: string
}) => {
  return createPortal(
    <Sheet visible={visible} onClose={onClose} height={height}>
      {children}
    </Sheet>,
    document.body
  )
}

export default SheetPortal
