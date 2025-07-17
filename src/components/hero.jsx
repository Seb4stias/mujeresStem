import React from 'react';
import heroImage from '../assets/fotos/IMG3.jpg'; // Importa la imagen del hero

const Hero = ({ onJoinUsClick, showForm }) => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>Nuestra primera charla </h1>
        <p>nuestra primera charla fue hecha el dia 11 de junio, la cual tuvo invitados como el liceo Vate Vicente Huidobro,</p>
       <p>en esta charla se hablo de como nuestro club ayudara a futuras mujeres stem para dominar el mundo.</p>
        <img src={heroImage} alt="imagen de las mujeres stem" height ="250px" className="hero-image" /> <br />
        

        {!showForm && (
          <a href="#contacto" className="cta-button" id="botonUnirse" onClick={onJoinUsClick}>
            Únete a nosotros
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
