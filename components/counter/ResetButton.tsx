import { Button } from '@heroui/button'
import { RiResetLeftLine as ResetIcon } from 'react-icons/ri'

interface ResetButtonProps {
  setCount: (value: number) => void
  countState: number
}

export default function ResetButton({
  countState,
  setCount,
}: ResetButtonProps) {
  return (
    <Button
      isIconOnly
      size='lg'
      onPress={() => {
        setCount(0)
      }}
      isDisabled={countState === 0}
    >
      <ResetIcon size={24} />
    </Button>
  )
}
