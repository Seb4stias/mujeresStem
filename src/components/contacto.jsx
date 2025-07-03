import React, { useState } from 'react';
//que lata comentar cada componentezzz

//aki guardo todo en si todos los datos que abajo se van a "corroborar", creo que se llamaca cadena de caracteres loco
const Contacto = ({ onFormSubmit, showForm }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    rut: '',
    edad: '',
    email: '',
    sexo: '',
    profesion: '',
    fechaRegistro: new Date().toISOString().slice(0, 10),
    terminos: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
//para validar el formulario que lleno 
  const validarFormulario = () => {
    let newErrors = {};
    let isValid = true;

    // 1. Validar Nombre,  
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio.';
      isValid = false;
    }

    // 2. Validar RUT (mejorado y corregido para que en vez de que sea 22.003.345-2, sea 22003345-2, mas facil y menos leseo)
    const rutPattern = /^\d{7,8}-[\dkK]$/
    if (!formData.rut.trim() || !rutPattern.test(formData.rut.trim())) {
      newErrors.rut = 'Formato de RUT inválido (ej: 12.345.678-9).';
      isValid = false;
    }

    // 3. Validar Edad desde los 14 hasta los 99 (seria chistoso que alguien realmente se inscribiera con mas de 99 años..)
    const edad = parseInt(formData.edad);
    if (isNaN(edad) || edad < 14 || edad > 99) {
      newErrors.edad = 'Debes tener entre 15 y 99 años.';
      isValid = false;
    }

    // 4. Validar Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Debe ser un correo válido (ej: tu.correo@dominio.com).';
      isValid = false;
    }

    // 5. Validar Sexo (coxino) 
    if (!formData.sexo) {
      newErrors.sexo = 'Debes seleccionar una opción de sexo.';
      isValid = false;
    }

    // 6. Validar Profesion ( igual podria colocar un tipo text para que la persona lo escriba o nose, dps tenog que ver bien)
    if (!formData.profesion) {
      newErrors.profesion = 'Debes seleccionar tu profesión/área de interés.';
      isValid = false;
    }

    // 7. Validar Términos y Condiciones (tengo que crear los reales terminos y condiciones JSDFJDSFSDF condicion 1.- no ser del duoc)
    if (!formData.terminos) {
      newErrors.terminos = 'Debes aceptar los términos y condiciones para registrarte.';
      isValid = false;
    }

    setErrors(newErrors); // el error deberia de dar si eres del duoc
    return isValid;
  };


  //esto sirve mas que nada para guardar,  posterior borrar los datos de donde los pusiste 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      onFormSubmit(formData);
      alert('¡Registro exitoso! Tus datos han sido guardados.');
      // Opcional: Reiniciar el formulario después de un envío exitoso
      setFormData({
        nombre: '',
        rut: '',
        edad: '',
        email: '',
        sexo: '',
        profesion: '',
        fechaRegistro: new Date().toISOString().slice(0, 10),
        terminos: false,
      });
      setErrors({}); // Limpiar errores 
    } else {
      alert('Por favor, corrige los errores marcados en el formulario.');
    }
  };


  //devuelve todo lo que este componente ha hecho en la pag (profe si lee esto regaleme una decima JSDAFJDSF mentira no se enoje  )

  //dios santo voy a entrar en un colapso neuronal al comentar todo 

  //esta parte del codigo en si devuelve todo lo que este componente ha hecho, contando las restricciones que se pedian   AAAAA ESCRIBI ARRIBA LA MISMA CUTION IOSDJMFKNISDNFKS V09QPWJFNWEKN
  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <h2>Contacto y Registro</h2>
        <p>¡Regístrate para unirte a nuestra comunidad y recibir novedades!</p> 
        {showForm && (
          <div id="formularioContenedor">
            <form id="registroForm" onSubmit={handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="nombre">Nombre Completo:</label></td>
                    <td>
                      <input type="text" id="nombre" name="nombre" placeholder="Ej: Han Solo" value={formData.nombre} onChange={handleChange} />
                      <span className="error-message" id="errorNombre">{errors.nombre}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="rut">RUT:</label></td>
                    <td>
                      <input type="text" id="rut" name="rut" placeholder="Ej: 12.345.678-9" value={formData.rut} onChange={handleChange} />
                      <span className="error-message" id="errorRut">{errors.rut}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="edad">Edad:</label></td>
                    <td>
                      <input type="number" id="edad" name="edad" min="15" max="99" placeholder="Mayor de 15" value={formData.edad} onChange={handleChange} />
                      <span className="error-message" id="errorEdad">{errors.edad}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="email">Email:</label></td>
                    <td>
                      <input type="email" id="email" name="email" placeholder="tu.correo@gmail.com" value={formData.email} onChange={handleChange} />
                      <span className="error-message" id="errorEmail">{errors.email}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><label>Sexo:</label></td>
                    <td>
                      <label><input type="radio" name="sexo" value="masculino" checked={formData.sexo === 'masculino'} onChange={handleChange} /> Masculino</label>
                      <label><input type="radio" name="sexo" value="femenino" checked={formData.sexo === 'femenino'} onChange={handleChange} /> Femenino</label>
                      <label><input type="radio" name="sexo" value="otro" checked={formData.sexo === 'otro'} onChange={handleChange} /> Otro</label>
                      <span className="error-message" id="errorSexo">{errors.sexo}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="profesion">Profesión/Área de Interés:</label></td>
                    <td>
                      <select id="profesion" name="profesion" value={formData.profesion} onChange={handleChange}>
                        <option value="">-- Selecciona una opción --</option>
                        <option value="Ingeniería">Ingeniería</option>
                        <option value="Ciencia">Ciencia</option>
                        <option value="Tecnología">Tecnología (Desarrollo/IT)</option>
                        <option value="Matemáticas">Matemáticas/Estadística</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Otros">Otros</option>
                      </select>
                      <span className="error-message" id="errorProfesion">{errors.profesion}</span>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="fechaRegistro">Fecha de Registro:</label></td>
                    <td>
                      <input type="date" id="fechaRegistro" name="fechaRegistro" value={formData.fechaRegistro} readOnly />
                      <span className="error-message" id="errorFechaRegistro">{errors.fechaRegistro}</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <label>
                        <input type="checkbox" id="terminos" name="terminos" checked={formData.terminos} onChange={handleChange} /> Acepto los <a href="#" target="_blank" rel="noopener noreferrer">términos y condiciones</a> de uso.
                      </label>
                      <span className="error-message" id="errorTerminos">{errors.terminos}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" id="enviarFormulario">Enviar Registro</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};


//esta linea en si exporta  la pag  
export default Contacto;