//22490352: FUENTES CHAVEZ YESSICA
// IMPORTA REACT PARA USAR SUS FUNCIONALIDADES EN EL COMPONENTE
import React from 'react';
//DEFINE UN COMPONENTE FUNCIONAL 'TAREA' QUE RECIBE 'TAREA', 'ONUPDATE' Y 'ONDELETE' COMO PROPS
const Tarea = ({ tarea, onUpdate, onDelete }) => 
{
  //DEFINE UNA FUNCIÓN 'TOGGLEESTADO' QUE CAMBIA EL ESTADO DE 'COMPLETADA' DE LA TAREA
  const toggleEstado = () => 
  {
    //LLAMA A 'ONUPDATE' CON EL ID DE LA TAREA Y UNA NUEVA COPIA DE LA TAREA CON EL ESTADO DE 'COMPLETADA' INVERTIDO
    onUpdate(tarea.id, { ...tarea, completada: !tarea.completada });
  };

  //RENDERIZA EL COMPONENTE
  return (
    //CREA UNA 'CARD' QUE SE VUELVE 'BG-LIGHT' SI LA TAREA ESTÁ COMPLETADA
    <div className={`card mb-2 ${tarea.completada ? 'bg-light' : ''}`}>
      <div className="card-body">
        {/*MUESTRA EL TÍTULO DE LA TAREA Y UNA ETIQUETA SI LA TAREA ESTÁ COMPLETADA*/}
        <h5 className="card-title">
          {tarea.titulo} 
          {tarea.completada && <span className="badge bg-success">Completada</span>}
        </h5>      
        {/*MUESTRA LA DESCRIPCIÓN DE LA TAREA*/}
        <p className="card-text">{tarea.descripcion}</p>
        {/*SI HAY UN ARCHIVO ASOCIADO A LA TAREA, MUESTRA UN ENLACE DE DESCARGA*/}
        {tarea.archivo && (
          <a href={tarea.archivo} download className="btn btn-link">
            Descargar archivo
          </a>
        )}
        <div className="mt-3">
          {/*BOTÓN PARA CAMBIAR EL ESTADO DE LA TAREA ENTRE 'COMPLETADA' Y 'NO COMPLETADA'*/}
          <button onClick={toggleEstado} className="btn btn-success me-2">
            {tarea.completada ? 'Desmarcar' : 'Marcar completada'}
          </button>
          {/*BOTÓN PARA ELIMINAR LA TAREA, LLAMANDO A 'ONDELETE' CON EL ID DE LA TAREA*/}
          <button onClick={() => onDelete(tarea.id)} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
//EXPORTA EL COMPONENTE 'TAREA' PARA QUE PUEDA SER UTILIZADO EN OTROS ARCHIVOS
export default Tarea;