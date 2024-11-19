//22490352: FUENTES CHAVEZ YESSICA
//IMPORTAMOS LOS HOOKS DE REACT
import React, { useState } from 'react';
//DEFINIMOS EL COMPONENTE FormularioTarea
//RECIBE UNA PROPIEDAD onAdd PARA AGREGAR NUEVAS TAREAS
const FormularioTarea = ({ onAdd }) => 
{
  //DEFINIMOS LOS ESTADOS PARA EL TÍTULO, DESCRIPCIÓN Y ARCHIVO
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);
  //MANEJADOR DEL EVENTO DE ENVÍO DEL FORMULARIO
  const handleSubmit = (e) => 
  {
    e.preventDefault(); //PREVENIMOS LA RECARGA DE LA PÁGINA
    if (!titulo.trim()) return; //SI EL TÍTULO ESTÁ VACÍO, NO HACEMOS NADA
    //CREAMOS LA URL TEMPORAL DEL ARCHIVO ADJUNTO, SI EXISTE
    const archivoUrl = archivo ? URL.createObjectURL(archivo) : null;
    //CREAMOS UN OBJETO PARA LA NUEVA TAREA
    const nuevaTarea = {
      id: Date.now(), //GENERAMOS UN ID ÚNICO USANDO LA FECHA ACTUAL
      titulo, // ASIGNAMOS EL TÍTULO INGRESADO
      descripcion, //ASIGNAMOS LA DESCRIPCIÓN INGRESADA
      archivo: archivoUrl, //GUARDAMOS SOLO LA URL DEL ARCHIVO
      completada: false, //ESTADO INICIAL DE LA TAREA
    };
    //LLAMAMOS A onAdd PARA AGREGAR LA NUEVA TAREA
    onAdd(nuevaTarea);
    //REINICIAMOS LOS CAMPOS DEL FORMULARIO
    setTitulo('');
    setDescripcion('');
    setArchivo(null);
  };
  //RENDERIZAMOS EL FORMULARIO
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {/*CAMPO DE TEXTO PARA EL TÍTULO*/}
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          value={titulo} //ASIGNAMOS EL VALOR DEL ESTADO
          onChange={(e) => setTitulo(e.target.value)} //ACTUALIZAMOS EL ESTADO CUANDO CAMBIA EL VALOR
          required //HACE QUE ESTE CAMPO SEA OBLIGATORIO
        />
      </div>
      {/*CAMPO DE TEXTO PARA LA DESCRIPCIÓN*/}
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          value={descripcion} // ASIGNAMOS EL VALOR DEL ESTADO
          onChange={(e) => setDescripcion(e.target.value)} // ACTUALIZAMOS EL ESTADO CUANDO CAMBIA EL VALOR
        ></textarea>
      </div>
      {/*CAMPO PARA SUBIR UN ARCHIVO ADJUNTO*/}
      <div className="mb-3">
        <label className="form-label">Archivo adjunto</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setArchivo(e.target.files[0])} // ACTUALIZAMOS EL ESTADO CON EL ARCHIVO SELECCIONADO
          accept=".pdf,.doc,.docx" // FILTRAMOS TIPOS DE ARCHIVOS PERMITIDOS
        />
      </div>
      {/*BOTÓN PARA ENVIAR EL FORMULARIO*/}
      <button type="submit" className="btn btn-primary">Agregar Tarea</button>
    </form>
  );
};
//EXPORTAMOS EL COMPONENTE FormularioTarea
export default FormularioTarea;