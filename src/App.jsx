import Header from './components/header'; // importar componente header 
import Hero from './components/hero';     // importar componente hero 
import QuienesSomos from './components/quienessomos'; // importar componente quienes somos 
import HistoriasExito from './components/historiasdeexito'; // importar componente hisotiras de exito 
import Proyectos from './components/proyectos'; // importar componente proyectos 
import Contacto from './components/contacto';// importar componentes contacto 
import DatosIngresados from './components/datosingresados'; // importar componente datos ingresados 
import Footer from './components/footer'; // importar componente  footer
import React, { useState, useEffect } from 'react'; // importa biblioteca principal de react


//si el profe o alguien de inacap lee esto
//tener en consideracion = 99% de comentarios son para poder yo guiarme dentro del codigo y para reirme en un futuro con algun chiste que tirara aqui. el 1& del codigo es algun chiste RESPETUOSO para el profe ivan (ojala lo encuentre )
//eso gracias, entre en demencia haciendo esto ojala tener mejor nota que la vez pasada 

function App() { // componente app 
  const [formData, setFormData] = useState([]); // Estado para los datos del formulario
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

  // Función para manejar el envío del formulario
  const handleFormSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
    setShowForm(false); // Oculta el formulario después del envío exitoso
    // Scroll a la sección de contacto o datos ingresados
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para manejar el click en "Únete a nosotros"
  const handleJoinUsClick = (event) => {
    event.preventDefault();
    setShowForm(true);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <Hero onJoinUsClick={handleJoinUsClick} showForm={showForm} />
      <QuienesSomos />
      <HistoriasExito />
      <Proyectos />
      <Contacto onFormSubmit={handleFormSubmit} showForm={showForm} />
      <DatosIngresados data={formData} />
      <Footer />
    </>
  );
}

export default App;




//linea 17 header.js, el navegador me traduce mujeres steam a "tallo mujeres "XASDFDSF
//QUE LATA tener que comentar todo lo de "components" ademas la cochina de tetris no me funciona
// podre borrar "logo.svg "? 