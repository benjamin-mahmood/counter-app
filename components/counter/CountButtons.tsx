import { Button } from '@heroui/button'
import { FiPlusCircle as PlusIcon } from 'react-icons/fi'
import { FiMinusCircle as MinusIcon } from 'react-icons/fi'

export default function CountButtons() {
  return (
    <div>
      <Button
        isIconOnly
        color='primary'
        size='lg'
      >
        <MinusIcon size={32} />
      </Button>
      <Button
        isIconOnly
        color='primary'
        size='lg'
      >
        <PlusIcon size={32} />
      </Button>
    </div>
  )
}
