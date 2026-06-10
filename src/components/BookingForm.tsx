import { useState } from 'react'
import axios from 'axios'
import { useTheme } from '../context/ThemeContext'

const cities    = ['Los Angeles','Orange County','San Diego','Long Beach','Pasadena']
const vehicles  = ['Sedan','SUV / Crossover','Truck','Sports Car','Luxury / Exotic']
const servicesList = ['Exterior Detail','Interior Detail','Full Detail','Ceramic Coating','Paint Correction','Golden Package','Fleet Services']

export default function BookingForm() {
  const { isDark } = useTheme()

  const [form, setForm] = useState({
    firstName:'', phone:'', email:'',
    city: cities[0],
    vehicleType: vehicles[0],
    service: servicesList[0]
  })

  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('http://localhost:3001/api/quotes', form)
      setStatus('success')
      setForm({
        firstName:'', phone:'', email:'',
        city: cities[0],
        vehicleType: vehicles[0],
        service: servicesList[0]
      })
    } catch {
      setStatus('error')
    }
  }

  const sectionBg  = isDark ? 'transparent' : '#f0f4f8'
  const cardBg     = isDark ? 'linear-gradient(135deg,rgba(14,34,53,.9),rgba(10,122,112,.12))' : '#ffffff'
  const cardBorder = isDark ? 'rgba(31,216,200,0.2)' : '#c8e4ea'
  const inputBg    = isDark ? 'rgba(255,255,255,0.05)' : '#f4f9fa'
  const inputBorder = isDark ? 'rgba(31,216,200,0.2)' : '#b8d8e0'
  const labelColor = '#1FD8C8'
  const subColor   = isDark ? '#8AAAB8' : '#4a6275'

  const inputStyle = {
    background: inputBg,
    border: `1px solid ${inputBorder}`,
    borderRadius: 8,
    padding: '.75rem 1rem',
    color: isDark ? '#e6edf3' : '#0B1C2C',
    fontFamily: 'Inter,sans-serif',
    fontSize: '.88rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color .25s',
    colorScheme: isDark ? 'dark' : 'light',
  }

  // ✅ STYLE POUR LES OPTIONS (NOIR)
  const optionStyle = {
    color: '#000',
    background: '#fff'
  }

  return (
    <section id="booking" style={{ padding: '7rem 5%', background: sectionBg, transition: 'background .3s' }}>
      <div style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderRadius: 24,
        padding: '4rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        maxWidth: 1100,
        margin: '0 auto',
        boxShadow: '0 0 80px rgba(31,216,200,0.05)',
      }}>

        {/* LEFT */}
        <div>
          <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#1FD8C8', marginBottom: '.8rem' }}>
            Book Online
          </div>

          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700 }}>
            Get Your <span style={{ color: '#1FD8C8' }}>Free Quote</span>
          </h2>

          <p style={{ color: subColor, fontSize: '.9rem', lineHeight: 1.7, marginTop: '.8rem' }}>
            Fill out the form and we'll reach out within 2 hours with a personalized quote.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={submit} style={{ display: 'grid', gap: '1rem' }}>

          {/* NAME + PHONE */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input name="firstName" value={form.firstName} onChange={handle} placeholder="John" required style={inputStyle} />
            <input name="phone" value={form.phone} onChange={handle} placeholder="(310) 555-0199" required style={inputStyle} />
          </div>

          {/* EMAIL */}
          <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@example.com" required style={inputStyle} />

          {/* CITY + VEHICLE */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            
            <select name="city" value={form.city} onChange={handle} style={inputStyle}>
              {cities.map(c => (
                <option key={c} value={c} style={optionStyle}>{c}</option>
              ))}
            </select>

            <select name="vehicleType" value={form.vehicleType} onChange={handle} style={inputStyle}>
              {vehicles.map(v => (
                <option key={v} value={v} style={optionStyle}>{v}</option>
              ))}
            </select>

          </div>

          {/* SERVICE */}
          <select name="service" value={form.service} onChange={handle} style={inputStyle}>
            {servicesList.map(s => (
              <option key={s} value={s} style={optionStyle}>{s}</option>
            ))}
          </select>

          {/* BUTTON */}
          <button type="submit" disabled={status === 'loading'} className="btn-teal">
            {status === 'loading' ? ' Sending...' : '→ Request My Free Quote'}
          </button>

          {/* STATUS */}
          {status === 'success' && <p style={{ color: '#3fb950', textAlign: 'center' }}> Quote sent!</p>}
          {status === 'error'   && <p style={{ color: '#ff7b72', textAlign: 'center' }}>❌ Error</p>}

        </form>
      </div>
    </section>
  )
}