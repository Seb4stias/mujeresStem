import React, { useState, useEffect } from 'react'; // importa biblioteca principal de react
import Header from './components/header'; // importar componente header 
import Hero from './components/hero';     // importar componente hero 
import QuienesSomos from './components/quienessomos'; // importar componente quienes somos 
import HistoriasExito from './components/historiasdeexito'; // importar componente hisotiras de exito 
import Proyectos from './components/proyectos'; // importar componente proyectos 
import Contacto from './components/contacto';// importar componentes contacto 
import DatosIngresados from './components/datosingresados'; // importar componente datos ingresados 
import Footer from './components/footer'; // importar componente  footer
import Api from './components/api'; // importar componente Api.jsx


//si el profe o alguien de inacap lee esto
//tener en consideracion = 99% de comentarios son para poder yo guiarme dentro del codigo y para reirme en un futuro con algun chiste que tirara aqui. el 1& del codigo es algun chiste RESPETUOSO para el profe ivan (ojala lo encuentre )
//eso gracias, entre en demencia haciendo esto ojala tener mejor nota que la vez pasada 

function App() { // componente app 
  const [formData, setFormData] = useState(() => {
    // Cargar datos desde localStorage o iniciar con array vacío
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario
  const [editIndex, setEditIndex] = useState(null); // Estado para controlar el índice del registro en edición
  const [editData, setEditData] = useState(null); // Estado para los datos del registro en edición

  // Guardar formData en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Función para descargar los datos como archivo JSON
  const downloadData = (data) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'registros.json';
    document.body.appendChild(a); // Añadir el enlace al DOM
    a.click();
    document.body.removeChild(a); // Remover el enlace después de hacer click
    URL.revokeObjectURL(url);
  };

  // Función para manejar el envío del formulario
  const handleFormSubmit = (data) => {
    setFormData((prevData) => {
      const newData = [...prevData, data];
      // Descargar automáticamente los datos actualizados
      downloadData(newData);
      return newData;
    });
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

  // Función para eliminar un registro
  const handleDeleteRecord = (index) => {
    setFormData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Función para iniciar la edición de un registro
  const handleEditRecord = (index) => {
    setEditIndex(index);
    setEditData(formData[index]);
  };

  // Función para guardar los cambios de edición
  const handleSaveEdit = (updatedData) => {
    setFormData((prevData) =>
      prevData.map((item, i) => (i === editIndex ? updatedData : item))
    );
    setEditIndex(null);
    setEditData(null);
  };

  // Función para cancelar la edición
  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditData(null);
  };

  return (
    <>
      <Header />
      <Hero onJoinUsClick={handleJoinUsClick} showForm={showForm} />
      <QuienesSomos onJoinUsClick={handleJoinUsClick} showForm={showForm} />
      <HistoriasExito />
      <Proyectos />
      <Contacto onFormSubmit={handleFormSubmit} showForm={showForm} />
      <DatosIngresados
        data={formData}
        onEdit={handleEditRecord}
        onDelete={handleDeleteRecord}
        editIndex={editIndex}
        editData={editData}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
      />
      <div id="noticias">
        <Api />
      </div>
      <Footer />
    </>
  );
}

export default App;
