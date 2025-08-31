import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import CounterExample, {counterCode} from '../../components/examples/CounterExample.jsx'
import EffectExample, {effectCode} from '../../components/examples/EffectExample.jsx'
import RefExample, {refCode} from '../../components/examples/RefExample.jsx'
import ContextExample, {contextCode} from '../../components/examples/ContextExample.jsx'
import ReducerExample, {reducerCode} from '../../components/examples/ReducerExample.jsx'
import MemoExample, {memoCode} from '../../components/examples/MemoExample.jsx'

const mapping = {
  intro: { md: '/docs/intro.md' },
  jsx: { md: '/docs/jsx.md' },
  components: { md: '/docs/components.md' },
  useState: { md: '/docs/useState.md', Comp: CounterExample, code: counterCode },
  useEffect: { md: '/docs/useEffect.md', Comp: EffectExample, code: effectCode },
  useRef: { md: '/docs/useRef.md', Comp: RefExample, code: refCode },
  useContext: { md: '/docs/useContext.md', Comp: ContextExample, code: contextCode },
  useReducer: { md: '/docs/useReducer.md', Comp: ReducerExample, code: reducerCode },
  memo: { md: '/docs/memo.md', Comp: MemoExample, code: memoCode },
  router: { md: '/docs/router.md' }
}

export default function DocPage(){
  const { slug } = useParams()
  const [md, setMd] = useState('Загрузка...')
  useEffect(()=>{
    const info = mapping[slug]
    if(info){
      fetch(info.md).then(r=>r.text()).then(t=>setMd(t)).catch(()=>setMd('Ошибка загрузки документа.'))
    } else setMd('Тема не найдена.')
  }, [slug])

  const info = mapping[slug]
  return (
    <div>
      <Link to="/docs">← Назад</Link>
      <h1>{slug}</h1>
      <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap:16}}>
        <div>
          <div className="card"><h3>Теория</h3><pre>{md}</pre></div>
          <div className="card"><h3>Код (с комментариями)</h3><pre>{info && info.code ? info.code : 'Нет кода'}</pre></div>
        </div>
        <div>
          <div className="card"><h3>Живой пример</h3>{info && info.Comp ? <info.Comp/> : <div className="small">Примера нет</div>}</div>
          <div className="card"><h3>Действия</h3><Link to="/tasks"><button className="btn">Перейти к задачам</button></Link></div>
        </div>
      </div>
    </div>
  )
}
