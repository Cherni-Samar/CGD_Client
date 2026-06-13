import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './state/ThemeContext'
import Home from './features/home/pages/Home'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App