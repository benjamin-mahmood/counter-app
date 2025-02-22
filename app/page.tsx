import { Button } from '@heroui/button'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <div>Hello world!</div>
      <Button color='primary'>Klick Mich</Button>
    </main>
  )
}
