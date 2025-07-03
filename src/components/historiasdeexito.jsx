import React, { useState, useEffect } from 'react';
import mujer1 from '../assets/fotos/mujer1.jpg';
import mujer2 from '../assets/fotos/mujer2.jpg';
import mujer3 from '../assets/fotos/mujer3.jpg';
import mujer4 from '../assets/fotos/mujer4.jpg';
import mujer5 from '../assets/fotos/mujer5.jpg';
import mujer6 from '../assets/fotos/mujer6.jpg';
import mujer7 from '../assets/fotos/mujer7.jpg';
import mujer8 from '../assets/fotos/mujer8.jpg';
import mujer9 from '../assets/fotos/mujer9.jpg';
import mujer10 from '../assets/fotos/mujer10.jpg';
//nose si esto al final se quede en la pag real pq les da wewencha sacarse fotos de ese estilo pa esta pag (lo entiendo..)
// en si esta seccion seria como "nuestras integrantes", pero como probablemente no lo usen no me voy a calentar la cabeza haciendo 10 historias falsas de gente de su club.
//no tengo tanta cabeza para 10 nombres, 10 roles, 10 relatos...

const membersData = [
  { name: "Sofía García", image: mujer1, role: "integrante mujeres stem", quote: "La lógica es el principio de la sabiduría, la pasión el fin del conocimiento." },
  { name: "Valentina Rojas", image: mujer2, role: "integrante mujeres stem", quote: "Los datos son el nuevo petróleo, y la estadística la refinería." },
  { name: "Isabella Martínez", image: mujer3, role: "integrante mujeres stem", quote: "El código es arte, y la web nuestro lienzo." },
  { name: "Camila Fernández", image: mujer4, role: "integrante mujeres stem", quote: "La ciencia nos permite desentrañar los misterios de la vida." },
  { name: "Lucía Pérez", image: mujer5, role: "integrante mujeres stem", quote: "Construyendo el futuro, línea a línea de código." },
  { name: "Martina Gómez", image: mujer6, role: "integrante mujeres stem", quote: "La inteligencia artificial no es el futuro, es el presente." },
  { name: "Antonia Díaz", image: mujer7, role: "integrante mujeres stem", quote: "Protegiendo el mundo digital, un byte a la vez." },
  { name: "Emilia Castro", image: mujer8, role: "integrante mujeres stem", quote: "Diseñando el mundo que habitamos." },
  { name: "Fernanda Soto", image: mujer9, role: "integrante mujeres stem", quote: "Donde la creatividad y la lógica se encuentran." },
  { name: "Gabriela Herrera", image: mujer10, role: "integrante mujeres stem" , quote: "La electricidad es la chispa del progreso." }
];

const MembersGrid = ({ members }) => {
  return (
    <div className="members-grid">
      {members.map((member, index) => (
        <div className="member-card" key={index}>
          <img src={member.image} alt={`Foto de ${member.name}`} />
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
          <p>"{member.quote}"</p>
        </div>
      ))}
    </div>
  );
};

const HistoriasExito = () => {
  const [displayedMembers, setDisplayedMembers] = useState(0);
  const membersPerPage = 6;

  useEffect(() => {
    setDisplayedMembers(membersPerPage);
  }, []);

  const loadMoreMembers = () => {
    setDisplayedMembers((prevCount) =>
      Math.min(prevCount + membersPerPage, membersData.length)
    );
  };

  return (
    <section className="success-stories-section" id="historias-exito">
      <div className="container">
        <h2>Nuestras historias de usuario </h2>
        <p>Conoce las inspiradoras trayectorias de nuestras miembros y cómo están impactando el mundo STEM.</p>
        <MembersGrid members={membersData.slice(0, displayedMembers)} />
        {displayedMembers < membersData.length && (
          <button id="loadMoreBtn" className="cta-button" onClick={loadMoreMembers}>
            Cargar más historias
          </button>
        )}
      </div>
    </section>
  );
};
//para la version de las de stem, deberia de cambiar estas cartas de "personas" a cartas con sus proyectos, es buena idea creo yo
export default HistoriasExito;