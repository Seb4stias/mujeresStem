import React from 'react';


//este objeto es solo para guardar los datos
const DatosIngresados = ({ data, onEdit, onDelete, editIndex, editData, onSaveEdit, onCancelEdit }) => {
  const [editFormData, setEditFormData] = React.useState(editData || {});

  React.useEffect(() => {
    setEditFormData(editData || {});
  }, [editData]);

  if (data.length === 0) {
    return null; // No renderiza nada si no hay datos
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td><input type="text" name="nombre" value={editFormData.nombre || ''} onChange={handleChange} /></td>
                    <td><input type="text" name="rut" value={editFormData.rut || ''} onChange={handleChange} /></td>
                    <td><input type="number" name="edad" value={editFormData.edad || ''} onChange={handleChange} /></td>
                    <td><input type="email" name="email" value={editFormData.email || ''} onChange={handleChange} /></td>
                    <td><input type="text" name="sexo" value={editFormData.sexo || ''} onChange={handleChange} /></td>
                    <td><input type="text" name="profesion" value={editFormData.profesion || ''} onChange={handleChange} /></td>
                    <td>{item.fechaRegistro}</td>
                    <td>
                      <button onClick={() => onSaveEdit(editFormData)}>Guardar</button>
                    </td>
                    <td>
                      <button onClick={onCancelEdit}>Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.nombre}</td>
                    <td>{item.rut}</td>
                    <td>{item.edad}</td>
                    <td>{item.email}</td>
                    <td>{item.sexo}</td>
                    <td>{item.profesion}</td>
                    <td>{item.fechaRegistro}</td>
                    <td>
                      <button onClick={() => onEdit(index)}>Editar</button>
                    </td>
                    <td>
                      <button onClick={() => onDelete(index)}>Eliminar</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DatosIngresados;