import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div>
          <h3>Adress</h3>
          <p>
  📍 <a
    href="https://www.google.com/maps?q=Järnvägsgatan+36,+17268+Stockholm"
    target="_blank"
    rel="noopener noreferrer"
  >
    Järnvägsgatan 36<br />172 68 Stockholm
  </a>
</p>

        </div>
        <div>
          <h3>Kontakt</h3>
          <p>
  📞 <a href="tel:0760500927">076-050 09 27</a>
</p>

<p>
    ✉️ <a href="mailto:rodi.feqe80@gmail.com">rodi.feqe80@gmail.com</a>
</p>

          <p>
  <img
    src="/instagram.png"
    alt="Instagram"
    style={{ width: '16px', verticalAlign: 'middle', marginRight: '6px' }}
  />
  <a href="https://www.instagram.com/hairbyrodi/" target="_blank" rel="noopener noreferrer">
    Följ på Instagram
  </a>
</p>

        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Hair By Rodi</p>
    </footer>
  );
}

export default Footer;
