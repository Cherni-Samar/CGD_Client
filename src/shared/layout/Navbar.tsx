import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../../state/ThemeContext'

const links = [
  { label: 'Services',  href: '#services'  },
  { label: 'Gallery',   href: '#gallery'   },
  { label: 'Reviews',   href: '#reviews'   },
  { label: 'Book',      href: '#booking'   },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const navBg    = isDark ? 'rgba(11,28,44,0.88)' : 'rgba(240,244,248,0.92)'
  const textColor = isDark ? '#8AAAB8' : '#4a6275'
  const hoverColor = '#1FD8C8'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 5%',
      background: navBg,
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(31,216,200,0.12)',
      transition: 'background 0.3s',
    }}>

      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '.8rem', textDecoration: 'none' }}>
        <div style={{
          width: 42, height: 42, borderRadius: '50%',
          background: isDark ? '#0E2235' : '#e0f0f0',
          border: '1.5px solid #1FD8C8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '.75rem', fontWeight: 700, color: '#1FD8C8',
          letterSpacing: '.08em',
          boxShadow: '0 0 14px rgba(31,216,200,0.18)',
        }}>CGD</div>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.1rem', fontWeight: 700,
          color: isDark ? '#e6edf3' : '#0B1C2C',
        }}>
          California <span style={{ color: '#1FD8C8' }}>Golden</span>
        </span>
      </a>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}
          className="hidden-mobile">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              fontSize: '.82rem', fontWeight: 500, letterSpacing: '.08em',
              textTransform: 'uppercase', color: textColor,
              textDecoration: 'none', transition: 'color .25s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={e => (e.currentTarget.style.color = textColor)}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Right side: theme toggle + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

        {/* 🌙 / ☀️ Toggle */}
        <button
          onClick={toggleTheme}
          title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            background: isDark ? 'rgba(31,216,200,0.1)' : 'rgba(11,28,44,0.1)',
            border: '1.5px solid rgba(31,216,200,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all .3s', color: '#1FD8C8',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(31,216,200,0.2)')}
          onMouseLeave={e => (e.currentTarget.style.background = isDark ? 'rgba(31,216,200,0.1)' : 'rgba(11,28,44,0.1)')}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* CTA Button */}
        <a href="#booking" className="btn-teal"
          style={{ fontSize: '.78rem', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', padding: '.6rem 1.4rem' }}>
          Free Quote
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: '#1FD8C8', cursor: 'pointer', display: 'none' }}
          className="show-mobile"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: isDark ? '#0B1C2C' : '#f0f4f8',
          borderBottom: '1px solid rgba(31,216,200,0.15)',
          padding: '1rem 5%', display: 'flex', flexDirection: 'column', gap: '.8rem',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: textColor, textDecoration: 'none', fontWeight: 600, fontSize: '.9rem' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}