import React, { useEffect, useRef, useState } from 'react'
export default function EffectExample(){
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)
  useEffect(() => {
    // создаём интервал и сохраняем id
    intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
    // очистка при размонтировании
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div>
      <p>Секунд прошло: {seconds}</p>
      <button onClick={() => setSeconds(0)}>Сброс</button>
    </div>
  )
}
export const effectCode = `// EffectExample — useEffect + cleanup
import React, { useEffect, useRef, useState } from 'react'

// 1) state seconds
const [seconds, setSeconds] = useState(0)
// 2) ref для id интервала
const intervalRef = useRef(null)

useEffect(() => {
  // 3) запускаем интервал и сохраняем id
  intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
  // 4) возвращаем функцию очистки — обязательно остановить интервал
  return () => clearInterval(intervalRef.current)
}, [])

// UI
return (
  <div>
    <p>Секунд прошло: {seconds}</p>
    <button onClick={() => setSeconds(0)}>Сброс</button>
  </div>
)`
