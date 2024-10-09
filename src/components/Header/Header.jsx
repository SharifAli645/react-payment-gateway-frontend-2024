import React from 'react'
import './Header.css'

 function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Bienvenido a MiEmpresa</h1>
        <p>Ofrecemos los mejores servicios para hacer crecer tu negocio.</p>
        <a href="#services" className="cta-button">
          Conócenos
        </a>
      </div> 
    </header>
  );
}
export default Header