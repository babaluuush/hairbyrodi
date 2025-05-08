import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Vad kunderna säger</h2>

      <div className="testimonial-list">
        <blockquote className="testimonial">
          “Bästa klippningen jag fått – snabb, proffsig och alltid nöjd!”
          <footer>– Adam L.</footer>
        </blockquote>

        <blockquote className="testimonial">
          “Fantastisk känsla för detaljer. Skägget blev exakt som jag ville ha det.”
          <footer>– Mehdi A.</footer>
        </blockquote>

        <blockquote className="testimonial">
          “Avslappnad miljö, grymt bemötande och kvalitet i varje drag.”
          <footer>– Anonym kund</footer>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonials;
