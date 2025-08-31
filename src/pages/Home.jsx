import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div>
      <h1>React — Полный учебник</h1>
      <p className="small">Просто и подробно: теория, интерактивные примеры и задачи.</p>
      <div className="card">
        <h3>Введение</h3>
        <p>Если ты хочешь освежить React с нуля — перейди в <Link to="/docs/intro">Введение в React</Link>. Там всё максимально просто и с примерами.</p>
      </div>
    </div>
  )
}
