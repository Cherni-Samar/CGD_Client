import { useTheme } from '../../../state/ThemeContext'

const features = [
  { num: '01', title: 'We Come To You',         desc: 'No drop-offs, no waiting rooms. We detail your car at your home or office.' },
  { num: '02', title: 'Concours-Level Finish',   desc: 'Trained to show-car standards, using professional-grade products unavailable in stores.' },
  { num: '03', title: '100% Satisfaction',       desc: 'Not happy? We return and re-detail at no charge. No questions asked.' },
  { num: '04', title: 'Eco-Conscious Process',   desc: 'Biodegradable products, waterless techniques and responsible waste disposal.' },
]

export default function WhyUs() {
  const { isDark } = useTheme()
  const subColor  = isDark ? '#8AAAB8' : '#4a6275'

  return (
    <section id="why" style={{ padding: '7rem 5%', transition: 'background .3s' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>

        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1FD8C8', marginBottom: '.8rem' }}>
          Why Choose Us
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
          Detailing Elevated <span style={{ color: '#1FD8C8' }}>to an Art Form</span>
        </h2>

        <div style={{ display: 'grid', gap: '1.8rem' }}>
          {features.map(f => (
            <div key={f.num} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0, width: 42, height: 42, borderRadius: '50%',
                background: 'rgba(31,216,200,0.08)', border: '1.5px solid rgba(31,216,200,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Playfair Display',serif", fontSize: '1rem', color: '#1FD8C8', fontWeight: 700,
              }}>{f.num}</div>
              <div>
                <h4 style={{ fontSize: '.95rem', fontWeight: 600, marginBottom: '.3rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.83rem', color: subColor, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}