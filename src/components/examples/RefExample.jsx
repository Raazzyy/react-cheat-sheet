import React, { useRef } from 'react'
export default function RefExample(){
  const inputRef = useRef(null)
  return (
    <div>
      <input ref={inputRef} placeholder="Напиши что-нибудь" />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>Фокус</button>
    </div>
  )
}
export const refCode = `// RefExample — useRef для доступа к DOM
import React, { useRef } from 'react'

// создаём ref
const inputRef = useRef(null)
// привязываем: <input ref={inputRef} />
// используем: inputRef.current.focus()
`