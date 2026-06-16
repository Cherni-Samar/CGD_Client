import { useState } from 'react'
import { useTheme } from '../../../state/ThemeContext'
import { useQuote } from '../hooks/useQuote'
import type { Quote } from '../types/quote'

import {
  cities,
  vehicles,
  servicesList
} from '../../../shared/constants/bookingData'

import '../styles/bookingForm.css'

export default function BookingForm() {
  const { isDark } = useTheme()
  const { submitQuote, loading } = useQuote()

  const [form, setForm] = useState<Quote>({
    firstName: '',
    phone: '',
    email: '',
    city: cities[0],
    vehicleType: vehicles[0],
    service: servicesList[0],
    date: '',
    time: '',
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('idle')

    try {
      await submitQuote(form)
      setStatus('success')

      setForm({
        firstName: '',
        phone: '',
        email: '',
        city: cities[0],
        vehicleType: vehicles[0],
        service: servicesList[0],
        date: '',
        time: ''
      })
    } catch {
      setStatus('error')
    }
  }

  const sectionBg = isDark ? 'transparent' : '#f0f4f8'

  const containerBg = isDark
    ? 'linear-gradient(135deg,rgba(14,34,53,.9),rgba(10,122,112,.12))'
    : '#ffffff'

  const inputStyle = {
    background: isDark ? 'rgba(255,255,255,0.05)' : '#f4f9fa',
    border: `1px solid ${isDark ? 'rgba(31,216,200,0.2)' : '#b8d8e0'}`,
    color: isDark ? '#e6edf3' : '#0B1C2C'
  }

  return (
    <section
      className="booking-section"
      style={{ background: sectionBg }}
    >
      <div
        className="booking-container"
        style={{ background: containerBg }}
      >

        {/* LEFT */}
        <div className="booking-left">
          <div className="tag">Book Online</div>

          <h2>
            Get Your <span style={{ color: '#1FD8C8' }}>Free Quote</span>
          </h2>

          <p>
            Fill out the form and we'll reach out within 2 hours with a personalized quote.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={submit} className="booking-form">

          {/* 1ère ligne : nom + téléphone */}
          <div className="row-2">
            <input
              className="input"
              style={inputStyle}
              name="firstName"
              value={form.firstName}
              onChange={handle}
              placeholder="Full Name"
              required
            />

            <input
              className="input"
              style={inputStyle}
              name="phone"
              value={form.phone}
              onChange={handle}
              placeholder="Phone Number"
              required
            />
          </div>

          {/* 2ème ligne : email */}
          <input
            className="input"
            style={inputStyle}
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="Email Address"
            required
          />

          {/* 3ème ligne : vehicle + service + city */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem'
            }}
          >
            <select
              className="input"
              style={inputStyle}
              name="vehicleType"
              value={form.vehicleType}
              onChange={handle}
            >
              {vehicles.map(v => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <select
              className="input"
              style={inputStyle}
              name="service"
              value={form.service}
              onChange={handle}
            >
              {servicesList.map(s => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <select
              className="input"
              style={inputStyle}
              name="city"
              value={form.city}
              onChange={handle}
            >
              {cities.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* DATE + TIME */}
          <div className="date-time-row">
            <input
              className="input"
              style={inputStyle}
              type="date"
              name="date"
              value={form.date}
              onChange={handle}
              required
            />

            <input
              className="input"
              style={inputStyle}
              type="time"
              name="time"
              value={form.time}
              onChange={handle}
              required
            />
          </div>
          {/* bouton */}
          <button
            className="btn-teal"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : '→ Request My Free Quote'}
          </button>

          {/* messages */}
          {status === 'success' && (
            <p className="success">✅ Quote sent successfully!</p>
          )}

          {status === 'error' && (
            <p className="error">❌ Failed to send quote</p>
          )}
        </form>

      </div>
    </section>
  )
}