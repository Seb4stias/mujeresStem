import React from 'react';
import heroImage from '../assets/fotos/IMG2.jpg'; // exportacion de la imagen 


//apartado quienes somos, me gusto tener todo separado, nada mas que agregar.
const Hero = ({ onJoinUsClick, showForm }) => {
  return (
    <section className="quienes-somos-section" id="quienes-somos">
      <div>
        <h1>Mujeres STEM, construyendo un futuro digital</h1>
        <p>Mujeres STEM es una comunidad apasionada que impulsa la participación, liderazgo y visibilidad de las mujeres<br/> en las áreas de Ciencia, Tecnología, Ingeniería y Matemáticas.<br/> Nuestro objetivo es inspirar a las nuevas generaciones, derribar barreras y<br/> construir un futuro más inclusivo a través de la colaboración, el conocimiento <br/>y la sororidad. Creemos en el poder de la representación, el aprendizaje continuo y el intercambio de experiencias.<br/> A través de charlas, talleres, mentorías y proyectos<br/> colaborativos, generamos espacios seguros donde cada mujer puede desarrollar su potencial y dejar su huella en el mundo STEM. </p>
            
        <img src={heroImage} alt="imagen de las mujeres stem" height ="600px" className="hero-image" /> <br />
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
