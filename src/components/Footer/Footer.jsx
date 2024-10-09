import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; 2024 MiEmpresa. Todos los derechos reservados.</p>
          <p>Contacto: info@miempresa.com</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#privacy">Política de privacidad</a>
          </li>
          <li>
            <a href="#terms">Términos de uso</a>
          </li>
          <li>
            <a href="#support">Soporte</a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer