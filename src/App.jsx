import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DocsIndex from './pages/docs/Index.jsx'
import DocPage from './pages/docs/DocPage.jsx'
import Practice from './pages/Practice.jsx'
import TasksPage from './pages/Tasks.jsx'
import { useTheme } from './context/ThemeContext.jsx'

export default function App(){
  const { theme, toggle } = useTheme()
  return (
    <div className={`app ${theme==='dark' ? 'dark' : ''}`}>
      <aside className="sidebar">
        <h2>React — Учебник</h2>
        <nav>
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/docs">Шпаргалки</NavLink>
          <NavLink to="/practice">Практика</NavLink>
          <NavLink to="/tasks">Задачи</NavLink>
        </nav>
        <div className="side-actions">
          <button onClick={toggle} className="theme-btn">Тема: {theme==='dark' ? '🌙 Тёмная' : '☀️ Мягкая'}</button>
        </div>
      </aside>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/docs" element={<DocsIndex/>} />
          <Route path="/docs/:slug" element={<DocPage/>} />
          <Route path="/practice" element={<Practice/>} />
          <Route path="/tasks" element={<TasksPage/>} />
        </Routes>
      </main>
    </div>
  )
}
