import './Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Tjänster</h2>

      <div className="service-category">
        <h3>Klippningar</h3>
        <ul>
          <li><span>Herrklippning</span><span>390 kr</span></li>
          <li><span>Barnklippning</span><span>250 kr</span></li>
          <li><span>Fade</span><span>390 kr</span></li>
          <li><span>Hår och skägg</span><span>490 kr</span></li>
          <li><span>Damklippning</span><span>490 kr</span></li>
          <li><span>Tvätt & Fön</span><span>300 kr</span></li>
          <li><span>Rakning</span><span>200 kr</span></li>
          <li><span>Rakning och skägg</span><span>250 kr</span></li>
        </ul>
      </div>

      <div className="service-category">
        <h3>Färgningar</h3>
        <ul>
          <li><span>Färgning & klippning (kort)</span><span>---</span></li>
        </ul>
      </div>

      <div className="service-category">
        <h3>Flerfärg / Slingor</h3>
        <ul>
          <li><span>Slingor, klippning & nyansering</span><span>---</span></li>
        </ul>
      </div>

      <div className="service-category">
        <h3>Skägg</h3>
        <ul>
          <li><span>Skäggtrim</span><span>150 kr</span></li>
          <li><span>Rakning med kniv</span><span>200 kr</span></li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
