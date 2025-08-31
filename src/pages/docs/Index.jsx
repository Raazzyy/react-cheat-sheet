import { Link } from 'react-router-dom'
export default function Index(){
  const pages = [
    {slug:'intro', title:'Введение: что такое React и зачем он нужен'},
    {slug:'jsx', title:'JSX — как писать шаблоны в React'},
    {slug:'components', title:'Компоненты и пропсы'},
    {slug:'useState', title:'useState — локальный state'},
    {slug:'useEffect', title:'useEffect — эффекты и очистка'},
    {slug:'useRef', title:'useRef — доступ к DOM'},
    {slug:'useContext', title:'useContext — глобальные значения'},
    {slug:'useReducer', title:'useReducer — сложный state'},
    {slug:'memo', title:'useMemo / useCallback и оптимизация'},
    {slug:'router', title:'React Router (v6) — маршруты'}
  ]
  return (
    <div>
      <h1>Шпаргалки — список тем</h1>
      <div className="card">
        <ul>
          {pages.map(p => <li key={p.slug}><Link to={'/docs/'+p.slug}>{p.title}</Link></li>)}
        </ul>
      </div>
    </div>
  )
}
