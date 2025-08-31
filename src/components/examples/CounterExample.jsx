import React, { useState } from 'react'
export default function CounterExample(){
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  return (
    <div>
      <h3>Счётчик: {count}</h3>
      <div style={{display:'flex', gap:8, alignItems:'center'}}>
        <button onClick={() => setCount(prev => prev - step)}>-</button>
        <button onClick={() => setCount(0)}>Сброс</button>
        <button onClick={() => setCount(prev => prev + step)}>+</button>
        <label style={{marginLeft:12}}>Шаг <input value={step} onChange={e => setStep(Number(e.target.value) || 1)} style={{width:60, marginLeft:8}}/></label>
      </div>
    </div>
  )
}
export const counterCode = `// CounterExample — useState
import React, { useState } from 'react'

export default function CounterExample(){
  // 1) count — текущее значение, setCount — функция для обновления
  const [count, setCount] = useState(0)
  // 2) step — насколько увеличиваем/уменьшаем
  const [step, setStep] = useState(1)
  // 3) UI: кнопки + поле шага
  return (
    <div>
      <h3>Счётчик: {count}</h3>
      <div style={{display:'flex', gap:8, alignItems:'center'}}>
        // Уменьшаем значение: используем функцию-обновитель, чтобы корректно работать при быстрых кликах
        <button onClick={() => setCount(prev => prev - step)}>-</button>
        // Сброс
        <button onClick={() => setCount(0)}>Сброс</button>
        // Увеличиваем
        <button onClick={() => setCount(prev => prev + step)}>+</button>
        // Поле шага: Number(e.target.value) || 1 — защита от пустого значения
        <label style={{marginLeft:12}}>Шаг <input value={step} onChange={e => setStep(Number(e.target.value) || 1)} style={{width:60, marginLeft:8}}/></label>
      </div>
    </div>
  )
}`
