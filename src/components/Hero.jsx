import './Hero.css';

function Hero() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
    
  return (
<section id="hero" className="hero">
      <h1>Hair By Rodi</h1>
      <p>Din stil. Ditt uttryck. Välkommen in för klippning, rakning & mer.</p>
      <a
  href={bookingUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="book-button"
>
  Boka tid nu
</a>

    </section>
  );
}

export default Hero;
