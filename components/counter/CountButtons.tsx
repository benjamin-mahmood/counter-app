import { Button } from '@heroui/button'
import { FiPlusCircle as PlusIcon } from 'react-icons/fi'
import { FiMinusCircle as MinusIcon } from 'react-icons/fi'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface CountButtonsProps {
  setCount: React.Dispatch<React.SetStateAction<number>>
  countState: number
}

export default function CountButtons({
  countState,
  setCount,
}: CountButtonsProps) {
  return (
    <div className='flex gap-24'>
      <Button
        isIconOnly
        color='primary'
        size='lg'
        onPress={() => {
          setCount((prev) => prev - 1)
        }}
        isDisabled={countState < 1}
      >
        <MinusIcon size={24} />
      </Button>
      <ThemeToggle />
      <Button
        isIconOnly
        color='primary'
        size='lg'
        onPress={() => {
          setCount((prev) => prev + 1)
        }}
      >
        <PlusIcon size={24} />
      </Button>
    </div>
  )
}
