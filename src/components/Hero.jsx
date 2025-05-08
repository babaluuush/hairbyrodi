import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Hair By Rodi</h1>
      <p>Din stil. Ditt uttryck. Välkommen in för klippning, rakning & mer.</p>
      <a
        href="https://boka.timma.se/hairbyrodi"
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
