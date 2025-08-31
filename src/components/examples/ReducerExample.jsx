import React, { useReducer, useState } from 'react'
function reducer(state, action){
  switch(action.type){
    case 'add': return [...state, action.payload]
    case 'toggle': return state.map(t => t.id === action.id ? {...t, done: !t.done} : t)
    case 'remove': return state.filter(t => t.id !== action.id)
    default: return state
  }
}
export default function ReducerExample(){
  const [text, setText] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])
  function add(e){ e.preventDefault(); if(!text.trim()) return; dispatch({type:'add', payload:{id:Date.now(), title:text, done:false}}); setText('') }
  return (
    <div>
      <h3>Todo на useReducer</h3>
      <form onSubmit={add} style={{display:'flex', gap:8}}>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Новая задача"/>
        <button className="btn">Добавить</button>
      </form>
      <ul>
        {todos.map(t => (
          <li key={t.id} style={{display:'flex',gap:8,alignItems:'center',marginTop:8}}>
            <input type="checkbox" checked={t.done} onChange={()=>dispatch({type:'toggle', id:t.id})} />
            <span style={{textDecoration:t.done?'line-through':'none', flex:1}}>{t.title}</span>
            <button onClick={()=>dispatch({type:'remove', id:t.id})} style={{background:'transparent',border:'none'}}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const reducerCode = `// reducer example ...`