import { useTheme } from '../../../state/ThemeContext'
import { useGallery } from '../../gallery/hooks/useGallery'

export default function Gallery() {
  const { isDark } = useTheme()
  const { images } = useGallery()

  const sectionBg = isDark ? 'rgba(6,15,24,0.6)' : '#eaf4f6'

  return (
    <section
      id="gallery"
      style={{
        padding: '7rem 5%',
        background: sectionBg,
        transition: 'background 0.3s'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2 style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 'clamp(1.8rem,4vw,3rem)',
          fontWeight: 700
        }}>
          Our <span style={{ color: '#1FD8C8' }}>Gallery</span>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1rem'
      }}>
        {images.map((img) => (
          <div
            key={img._id}
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              aspectRatio: '4/3',
              border: '1px solid rgba(31,216,200,0.15)',
              background: '#111'
            }}
          >
            <img
              src={`http://localhost:3001${img.url}`}
              alt={img.filename || 'gallery image'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: isDark ? '#8AAAB8' : '#4a6275'
        }}>
          No images yet
        </p>
      )}
    </section>
  )
}