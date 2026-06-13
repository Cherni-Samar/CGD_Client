import { useEffect, useRef } from 'react'
import { useTheme } from '../../state/ThemeContext'

const stats = [
  { num: '500+', label: 'Cars Detailed'     },
  { num: '5.0★', label: 'Google Rating'     },
  { num: '3',    label: 'Counties Served'   },
  { num: '100%', label: 'Satisfaction'      },
]

export default function Hero() {
  const { isDark } = useTheme()
  const starsRef = useRef<HTMLDivElement>(null)

  // Génère les étoiles animées
  useEffect(() => {
    if (!starsRef.current) return
    starsRef.current.innerHTML = ''
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div')
      Object.assign(s.style, {
        position: 'absolute',
        left: Math.random() * 100 + '%',
        top:  Math.random() * 100 + '%',
        width: (Math.random() < 0.3 ? 3 : 2) + 'px',
        height: (Math.random() < 0.3 ? 3 : 2) + 'px',
        borderRadius: '50%',
        background: '#1FD8C8',
        opacity: '0',
        animation: `twinkle ${3 + Math.random() * 4}s ${Math.random() * 5}s ease-in-out infinite`,
      })
      starsRef.current.appendChild(s)
    }
  }, [])

  const bg = isDark
    ? 'linear-gradient(180deg, #060F18 0%, #0B1C2C 100%)'
    : 'linear-gradient(180deg, #d6eaf0 0%, #f0f4f8 100%)'

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '7rem 5% 4rem', position: 'relative', overflow: 'hidden',
      background: bg, transition: 'background 0.3s',
    }}>
      {/* Stars */}
      {isDark && <div ref={starsRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />}

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '80vw', height: '80vw', maxWidth: 900,
        background: 'radial-gradient(ellipse, rgba(31,216,200,.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div className="fade-up" style={{
        display: 'inline-flex', alignItems: 'center', gap: '.5rem',
        padding: '.35rem 1.1rem', borderRadius: '2rem',
        border: '1px solid rgba(31,216,200,.3)',
        background: 'rgba(31,216,200,.06)',
        fontSize: '.72rem', fontWeight: 600, letterSpacing: '.12em',
        textTransform: 'uppercase', color: '#1FD8C8', marginBottom: '2rem',
      }}>
        ★ Premium Mobile Detailing · California
      </div>

      {/* Title */}
      <h1 className="fade-up-1" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(2.8rem,7vw,6rem)', fontWeight: 900, lineHeight: 1.05,
        color: isDark ? '#e6edf3' : '#0B1C2C',
      }}>
        Your Car Deserves<br />
        <span style={{ color: '#1FD8C8' }}>The Best Detail</span>
      </h1>

      {/* Subtitle */}
      <p className="fade-up-2" style={{
        maxWidth: 560, fontSize: '1.05rem', fontWeight: 300,
        color: isDark ? '#8AAAB8' : '#4a6275', lineHeight: 1.7,
        margin: '1.5rem auto 2.5rem',
      }}>
        Luxury mobile car detailing delivered to your door.
        Ceramic coatings, paint correction & full detail packages —
        serving LA, Orange County & San Diego.
      </p>

      {/* CTAs */}
      <div className="fade-up-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#booking" className="btn-teal" style={{ textDecoration: 'none', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          Book Online Now
        </a>
        <a href="tel:+13105550199" className="btn-outline-teal" style={{ textDecoration: 'none', fontSize: '.85rem' }}>
          📞 (310) 555-0199
        </a>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '4rem' }}>
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.2rem', fontWeight: 700, color: '#1FD8C8', lineHeight: 1 }}>
              {s.num}
            </div>
            <div style={{ fontSize: '.72rem', fontWeight: 500, color: isDark ? '#8AAAB8' : '#4a6275', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.3rem' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}