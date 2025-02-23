import CounterCard from '@/components/counter/CounterCard'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <CounterCard />
    </main>
  )
}
