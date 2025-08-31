import React from 'react'
import { useTheme } from '../../context/ThemeContext.jsx'
export default function ContextExample(){
  const { theme, toggle } = useTheme()
  return (
    <div>
      <p>Текущая тема: {theme}</p>
      <button onClick={toggle}>Переключить тему</button>
    </div>
  )
}
export const contextCode = `// ContextExample — использование контекста темы
import { useTheme } from '../../context/ThemeContext.jsx'
const { theme, toggle } = useTheme()
<button onClick={toggle}>Переключить тему</button>
`