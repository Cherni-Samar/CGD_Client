import Hero        from '../../../shared/layout/Hero'
import Services    from '../components/Services'
import Gallery     from '../components/Gallery'
import WhyUs       from '../components/WhyUs'
import Reviews     from '../components/Reviews'
import BookingForm from '../../booking/components/BookingForm'
import Footer      from '../../../shared/layout/Footer'
import Navbar from '../../../shared/layout/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero        />
        <Services    />
        <Gallery     />
        <WhyUs       />
        <Reviews     />
        <BookingForm />
      </main>
      <Footer />

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/13105550199"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200,
          width: '58px', height: '58px', borderRadius: '50%',
          background: 'linear-gradient(135deg,#25D366,#128C7E)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', boxShadow: '0 8px 30px rgba(37,211,102,.4)',
          textDecoration: 'none', transition: 'transform .3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  )
}