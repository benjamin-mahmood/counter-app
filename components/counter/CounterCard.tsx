'use client'

import { useState } from 'react'
import Count from './Count'
import CountButtons from './CountButtons'
import ResetButton from './ResetButton'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import { Divider } from '@heroui/divider'

export default function CounterCard() {
  const [count, setCount] = useState(0)

  return (
    <Card>
      <CardHeader
        className='min-h-[100px]'
        style={{
          backgroundImage:
            'url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjJ4aWV1bjFmbWpka29vZzlpZjh1dWZ0M2lzbDdmNzNocmk2dzVudiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BmmfETghGOPrW/giphy.gif)',
          backgroundSize: 'cover',
        }}
      ></CardHeader>
      <CardBody className='flex gap-12 p-8 justify-center items-center'>
        <Count number={count} />
        <ResetButton
          countState={count}
          setCount={setCount}
        />
      </CardBody>
      <Divider />
      <CardFooter className='flex p-8 justify-center items-center'>
        <CountButtons
          countState={count}
          setCount={setCount}
        />
      </CardFooter>
    </Card>
  )
}
