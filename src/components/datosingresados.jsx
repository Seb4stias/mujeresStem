import React from 'react';
//este objeto es solo para guardar los datos
const DatosIngresados = ({ data }) => {
  if (data.length === 0) {
    return null; // No renderiza nada si no hay datos
  }

  return (
    <section id="datosIngresadosSection" className="data-display-section" style={{ display: data.length > 0 ? 'block' : 'none' }}>
      <div className="container">
        <h2>Registros de Miembros Actuales:</h2>
        <table className="datos-ingresados-table simple-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>RUT</th>
              <th>Edad</th>
              <th>Email</th>
              <th>Sexo</th>
              <th>Profesión</th>
              <th>Fecha Registro</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.rut}</td>
                <td>{item.edad}</td>
                <td>{item.email}</td>
                <td>{item.sexo}</td>
                <td>{item.profesion}</td>
                <td>{item.fechaRegistro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DatosIngresados;