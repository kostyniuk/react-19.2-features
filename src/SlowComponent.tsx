import { useEffect, useState } from 'react'

const SLOW_OPERATION_MS = 1000

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))




export default function SlowComponent() {
  const [count, setCount] = useState(0)

  console.log('SlowComponent rendered')

  console.log('count', count)

//   useEffect(() => {
//     setCount(1000);
//     console.log('SlowComponent mounted')
//   }, [])

  useEffect(() => {
    const slowCalculation = async (count: number, setCount: (count: number) => void) => {
        await sleep(SLOW_OPERATION_MS)
        setCount(count + 1)
    }

    slowCalculation(count, setCount)
  }, [count, setCount])

  return <div>SlowComponent count: {count}</div>
};
