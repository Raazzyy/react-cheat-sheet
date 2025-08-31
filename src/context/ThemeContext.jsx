import { createContext, useContext, useEffect, useState } from 'react'
const ThemeContext = createContext()
export function ThemeProvider({children}){
  const [theme, setTheme] = useState(()=>{ try{ return localStorage.getItem('theme') || 'soft' }catch{return 'soft'} })
  useEffect(()=>{ try{ localStorage.setItem('theme', theme) }catch{} }, [theme])
  const toggle = () => setTheme(t => t === 'soft' ? 'dark' : 'soft')
  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}
export function useTheme(){ return useContext(ThemeContext) }
