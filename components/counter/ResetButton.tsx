import { Button } from '@heroui/button'
import { RiResetLeftLine as ResetIcon } from 'react-icons/ri'

export default function ResetButton() {
  return (
    <Button
      isIconOnly
      color='primary'
      size='lg'
    >
      <ResetIcon size={32} />
    </Button>
  )
}
