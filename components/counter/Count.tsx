interface CountProps {
  number: number
}

export default function Count({ number }: CountProps) {
  return <p className='text-9xl'>{number}</p>
}
