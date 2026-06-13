import { useTheme } from '../../../state/ThemeContext'

const reviews = [
  { initials: 'JM', name: 'James M.',  location: 'Los Angeles, CA',   stars: 5, text: 'My Tesla Model S looks better than when I drove it off the lot. The ceramic coating is genuinely incredible — water just sheets right off.' },
  { initials: 'SR', name: 'Sofia R.',  location: 'Newport Beach, CA', stars: 5, text: 'Booked the Golden Package for my Porsche 911. They came to my office and when I came out at 5pm it looked like a different car.' },
  { initials: 'DK', name: 'David K.',  location: 'San Diego, CA',     stars: 5, text: 'Used them for my fleet of 8 vehicles. Professional, on time and the price was fair. The manager handled everything.' },
]

export default function Reviews() {
  const { isDark } = useTheme()
  const cardBg    = isDark ? 'rgba(14,34,53,0.8)' : '#ffffff'
  const cardBorder = isDark ? 'rgba(31,216,200,0.1)' : '#d8eef2'
  const sectionBg = isDark ? 'rgba(6,15,24,0.5)' : '#eef7f9'
  const subColor  = isDark ? '#8AAAB8' : '#4a6275'

  return (
    <section id="reviews" style={{ padding: '7rem 5%', background: sectionBg, transition: 'background 0.3s' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1FD8C8', marginBottom: '.8rem' }}>
          Client Reviews
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700 }}>
          What Our <span style={{ color: '#1FD8C8' }}>Clients Say</span>
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', marginTop: '.8rem' }}>
          <span style={{ color: '#1FD8C8' }}>★★★★★</span>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: '#1FD8C8' }}>5.0</span>
          <span style={{ color: subColor, fontSize: '.83rem' }}>· 120+ Google Reviews</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
        {reviews.map((r, i) => (
          <div key={i}
            style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 16, padding: '1.8rem', transition: 'all .3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(31,216,200,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = cardBorder; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ color: '#1FD8C8', fontSize: '.9rem', letterSpacing: '.1em', marginBottom: '1rem' }}>★★★★★</div>
            <p style={{ fontSize: '.87rem', color: isDark ? '#c8d8e0' : '#2a4050', lineHeight: 1.7, marginBottom: '1.2rem', fontStyle: 'italic' }}>
              "{r.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'linear-gradient(135deg,#0A7A70,#1FD8C8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '.85rem', color: '#0B1C2C',
              }}>{r.initials}</div>
              <div>
                <div style={{ fontSize: '.83rem', fontWeight: 600 }}>{r.name}</div>
                <div style={{ fontSize: '.72rem', color: subColor }}>{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}