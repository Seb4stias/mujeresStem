import React from 'react';

const Proyectos = () => {

 
// podria traspasar toda esta info a las targetas y quedaria mucho mejor creo yo 
 return (
    <section className="proyectos-section" id="proyectos">
      <div className="container">
        <h2>Nuestros Proyectos Destacados</h2>
        <p>Descubre algunos de los proyectos innovadores de nuestra comunidad.</p>
        <div className="project-grid">
          <div className="project-card">
            <h3>App de Reciclaje Inteligente</h3>
            <p>Desarrollada por nuestras miembros para fomentar la sostenibilidad.</p>
          </div>
          <div className="project-card">
            <h3>Fomentación para la Participación Femenina</h3>
            <p>Fomentar el empoderamiento femenino en lugares específicos.</p>
          </div>
        </div>

       

        <h3>Próximas reuniones</h3>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Tema</th>
              <th>Fecha</th>
              <th>Encargados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reunión sobre el club</td>
              <td>11 de agosto del 2025</td>
              <td>Líderes Mujeres STEM</td>
            </tr>
            <tr>
              <td>Reunión club</td>
              <td>En proceso </td>
              <td>Líderes Mujeres STEM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Proyectos;