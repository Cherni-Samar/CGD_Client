import { useTheme } from '../../../state/ThemeContext'

const items = [
  { type: 'before', bg: 'linear-gradient(135deg,#1a0a0a,#3a1a1a)' },
  { type: 'after',  bg: 'linear-gradient(135deg,#0a2a28,#1FD8C8)' },
  { type: 'before', bg: 'linear-gradient(135deg,#1a1005,#3a2510)' },
  { type: 'after',  bg: 'linear-gradient(135deg,#082020,#12B0A2)' },
  { type: 'before', bg: 'linear-gradient(135deg,#15100a,#2a2010)' },
  { type: 'after',  bg: 'linear-gradient(135deg,#061820,#1FD8C8)' },
]

export default function Gallery() {
  const { isDark } = useTheme()
  const sectionBg = isDark ? 'rgba(6,15,24,0.6)' : '#eaf4f6'

  return (
    <section id="gallery" style={{ padding: '7rem 5%', background: sectionBg, transition: 'background 0.3s' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1FD8C8', marginBottom: '.8rem' }}>
          Our Work
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700 }}>
          Before <span style={{ color: '#1FD8C8' }}>& After</span>
        </h2>
        <p style={{ color: isDark ? '#8AAAB8' : '#4a6275', fontSize: '.95rem', lineHeight: 1.7, maxWidth: 500, margin: '.8rem auto 0' }}>
          Real results from real customers — every transformation tells a story.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{
            borderRadius: 12, overflow: 'hidden', position: 'relative',
            aspectRatio: '4/3', background: item.bg,
            border: '1px solid rgba(31,216,200,0.15)',
            transition: 'transform .3s, box-shadow .3s',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.03)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <span style={{
              position: 'absolute', bottom: '.7rem', left: '.7rem',
              fontSize: '.65rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              padding: '.25rem .65rem', borderRadius: '2rem',
              background: item.type === 'before' ? 'rgba(255,100,80,.2)' : 'rgba(31,216,200,.2)',
              border: `1px solid ${item.type === 'before' ? 'rgba(255,100,80,.4)' : 'rgba(31,216,200,.4)'}`,
              color: item.type === 'before' ? '#ff9080' : '#1FD8C8',
            }}>
              {item.type === 'before' ? 'Before' : 'After'}
            </span>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '.82rem', color: isDark ? '#8AAAB8' : '#4a6275' }}>
        📸 Replace placeholder cards with your real before/after photos
      </p>
    </section>
  )
}