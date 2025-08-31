import { Link } from 'react-router-dom'
export default function Tasks(){
  const tasks = [
    {id:1, title:'Toggle текста (useState)', slug:'/docs/useState'},
    {id:2, title:'Счётчик с шагом (useState)', slug:'/docs/useState'},
    {id:3, title:'Таймер с паузой (useEffect + useRef)', slug:'/docs/useEffect'},
    {id:4, title:'Фильтр списка (map + filter)', slug:'/docs/useState'},
    {id:5, title:'useLocalStorage хук', slug:'/docs/useState'},
    {id:6, title:'Галерея (useMemo + useCallback)', slug:'/docs/memo'},
    {id:7, title:'Theme Context (useContext)', slug:'/docs/useContext'},
    {id:8, title:'useReducer todo', slug:'/docs/useReducer'},
    {id:9, title:'Загрузка данных (fetch/axios)', slug:'/docs/useEffect'},
    {id:10, title:'Форма регистрации (валидация)', slug:'/docs/components'}
  ]
  return (
    <div>
      <h1>Задачник — чек-лист</h1>
      <div className="card">
        <ol>
          {tasks.map(t => <li key={t.id}><Link to={t.slug}>{t.title}</Link></li>)}
        </ol>
        <p className="small">В каждой теме есть пояснения и готовые примеры — переключайся, читай, пробуй править код.</p>
      </div>
    </div>
  )
}
