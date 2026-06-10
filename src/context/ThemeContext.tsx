import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Mémorise le choix de l'utilisateur dans localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('cgd-theme') as Theme) || 'dark'
  })

  // Applique la classe CSS sur le body quand le thème change
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
    localStorage.setItem('cgd-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook custom — utilise useTheme() dans n'importe quel composant
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}