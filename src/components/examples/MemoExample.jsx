import React, { useMemo, useState, useCallback } from 'react'
export default function MemoExample(){
  const [n, setN] = useState(1000000)
  const [count, setCount] = useState(0)
  const expensive = useMemo(()=>{ // кэшируем дорогое вычисление
    let s=0; for(let i=0;i<n;i++) s+=i; return s
  }, [n])
  const inc = useCallback(()=> setCount(c=>c+1), [])
  return (
    <div>
      <p>Expensive result: {String(expensive).slice(0,6)}...</p>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button className="btn" onClick={inc}>Inc ({count})</button>
        <label>Iterations <input value={n} onChange={e=>setN(Number(e.target.value)||1000)} style={{width:120, marginLeft:8}}/></label>
      </div>
      <small className="note">useMemo кэширует значение; useCallback возвращает тот же референс функции</small>
    </div>
  )
}
export const memoCode = `// MemoExample — useMemo + useCallback`