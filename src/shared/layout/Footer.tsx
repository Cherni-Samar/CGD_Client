import { useTheme } from '../../state/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()
  const bg = isDark ? '#060F18' : '#0B1C2C'
  const subColor = isDark ? '#8AAAB8' : 'rgba(255,255,255,0.55)'

  return (
    <footer
      style={{
        background: bg,
        borderTop: '1px solid rgba(31,216,200,0.08)',
        padding: '4rem 5% 2rem',
        transition: 'background .3s',
      }}
    >
      {/* Top grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#0E2235',
                border: '1.5px solid #1FD8C8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '.7rem',
                fontWeight: 700,
                color: '#1FD8C8',
              }}
            >
              CGD
            </div>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
              California <span style={{ color: '#1FD8C8' }}>Golden</span>
            </span>
          </div>
          <p style={{ fontSize: '.83rem', color: subColor, lineHeight: 1.7, maxWidth: 280 }}>
            Premium mobile car detailing serving Los Angeles, Orange County and San Diego.
          </p>
        </div>

        {/* Links columns */}
        {[
          { title: 'Services', links: ['Exterior Detail', 'Interior Detail', 'Ceramic Coating', 'Paint Correction', 'Fleet Services'] },
          { title: 'Company', links: ['About Us', 'Reviews', 'Gallery', 'Blog', 'Careers'] },
          { title: 'Contact', links: ['(310) 555-0199', 'hello@cgdetailers.com', 'Instagram', 'Google Maps'] },
        ].map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontSize: '.78rem',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#1FD8C8',
                marginBottom: '1.2rem',
              }}
            >
              {col.title}
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {col.links.map((l) => {
                const isContact = col.title === 'Contact'

                const href =
                  l === 'Instagram'
                    ? 'https://www.instagram.com/californiagoldendetailers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                    : l === 'Google Maps'
                      ? 'https://maps.app.goo.gl/1imiLKv9xet3UpC66'
                      : l === '(310) 555-0199'
                        ? 'tel:+13105550199'
                        : l === 'hello@cgdetailers.com'
                          ? 'mailto:hello@cgdetailers.com'
                          : '#'

                const targetBlank = l === 'Instagram' || l === 'Google Maps' 

                return (
                  <li key={l}>
                    <a
                      href={href}
                      target={targetBlank ? '_blank' : undefined}
                      rel={targetBlank ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: '.83rem',
                        color: subColor,
                        textDecoration: isContact ? 'underline' : 'none',
                        textUnderlineOffset: isContact ? '3px' : undefined,
                        transition: 'color .25s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#1FD8C8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = subColor as string)}
                    >
                      {l}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '.75rem',
          color: subColor,
        }}
      >
        <span>© 2025 California Golden Detailers. All rights reserved.</span>
        <span>Privacy Policy · Terms · Sitemap</span>
      </div>
    </footer>
  )
}