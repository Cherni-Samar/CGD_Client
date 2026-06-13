import { useState } from 'react'
import { useTheme } from '../../../state/ThemeContext'

const services = [
  { icon: '✨', title: 'Exterior Detail',   desc: 'Full wash, clay bar, hand wax, tire dressing and streak-free glass polish.', price: 'From $149' },
  { icon: '🪑', title: 'Interior Detail',   desc: 'Deep vacuum, leather conditioning, steam sanitization and UV dashboard protection.', price: 'From $179' },
  { icon: '💎', title: 'Ceramic Coating',   desc: 'Professional ceramic protection lasting 3–5 years, repelling water, UV and scratches.', price: 'From $699' },
  { icon: '🔧', title: 'Paint Correction',  desc: 'Multi-stage polishing to remove swirls, oxidation and water spots.', price: 'From $399' },
  { icon: '👑', title: 'Golden Package',    desc: 'Full-day flagship treatment: ext + int detail, paint correction, ceramic seal.', price: 'From $999' },
  { icon: '🚐', title: 'Fleet Services',    desc: 'Recurring contracts for businesses, dealerships and rental companies.', price: 'Custom quote' },
]

export default function Services() {
  const { isDark } = useTheme()
  const [hovered, setHovered] = useState<number | null>(null)

  const cardBg     = isDark ? 'rgba(14,34,53,0.7)' : '#ffffff'
  const cardBorder = isDark ? 'rgba(31,216,200,0.12)' : '#e2eef0'
  const subColor   = isDark ? '#8AAAB8' : '#4a6275'
  const sectionBg  = isDark ? 'transparent' : '#f7fbfc'

  return (
    <section id="services" style={{ padding: '7rem 5%', background: sectionBg, transition: 'background 0.3s' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1FD8C8', marginBottom: '.8rem' }}>
          What We Offer
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700 }}>
          Premium <span style={{ color: '#1FD8C8' }}>Detailing</span> Packages
        </h2>
        <p style={{ color: subColor, fontSize: '.95rem', lineHeight: 1.7, maxWidth: 560, margin: '.8rem auto 0' }}>
          From a quick exterior refresh to full ceramic protection — every service delivered with white-glove precision.
        </p>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
        {services.map((s, i) => (
          <div key={s.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: cardBg,
              border: `1px solid ${hovered === i ? 'rgba(31,216,200,0.35)' : cardBorder}`,
              borderRadius: 16, padding: '2rem',
              transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: hovered === i ? '0 20px 50px rgba(0,0,0,0.25)' : 'none',
              transition: 'all .35s', position: 'relative', overflow: 'hidden',
            }}>

            {/* top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg,transparent,#1FD8C8,transparent)',
              opacity: hovered === i ? 1 : 0, transition: 'opacity .35s',
            }} />

            <div style={{
              width: 52, height: 52, borderRadius: 12, fontSize: '1.4rem',
              background: 'rgba(31,216,200,0.1)', border: '1px solid rgba(31,216,200,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.4rem',
            }}>{s.icon}</div>

            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: '.6rem' }}>
              {s.title}
            </h3>
            <p style={{ fontSize: '.88rem', color: subColor, lineHeight: 1.65 }}>{s.desc}</p>
            <div style={{ marginTop: '1.4rem', fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', fontWeight: 700, color: '#1FD8C8' }}>
              {s.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}