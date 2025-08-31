import CounterExample from '../components/examples/CounterExample.jsx'
import EffectExample from '../components/examples/EffectExample.jsx'
import ReducerExample from '../components/examples/ReducerExample.jsx'
import RefExample from '../components/examples/RefExample.jsx'
import ContextExample from '../components/examples/ContextExample.jsx'
import MemoExample from '../components/examples/MemoExample.jsx'

export default function Practice(){
  return (
    <div>
      <h1>Практика — готовые примеры</h1>
      <div className="card"><CounterExample/></div>
      <div className="card"><EffectExample/></div>
      <div className="card"><ReducerExample/></div>
      <div className="card"><RefExample/></div>
      <div className="card"><ContextExample/></div>
      <div className="card"><MemoExample/></div>
    </div>
  )
}
