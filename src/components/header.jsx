import React from 'react';
import logo from '../assets/fotos/logon.png'; // Importa la imagen del logo

const Header = () => {
  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
//devolver todo lo de la pagzz
  return (
    <header id="main-header">
      <nav>
        <img src={logo} width="60px" alt="Mujeres Stem Logo" />
        <a href="#inicio" className="logo" onClick={(e) => handleNavLinkClick(e, 'inicio')}>Mujeres Stem</a> 
        <ul className="nav-links">
          <li><a href="#inicio" onClick={(e) => handleNavLinkClick(e, 'inicio')}>Inicio</a></li>
          <li><a href="#quienes-somos" onClick={(e) => handleNavLinkClick(e, 'quienes-somos')}>Quiénes Somos</a></li>
          <li><a href="#historias-exito" onClick={(e) => handleNavLinkClick(e, 'historias-exito')}>Historias de Éxito</a></li>
          <li><a href="#proyectos" onClick={(e) => handleNavLinkClick(e, 'proyectos')}>Proyectos</a></li>
          <li><a href="#contacto" onClick={(e) => handleNavLinkClick(e, 'contacto')}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;