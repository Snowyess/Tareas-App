//22490352: FUENTES CHAVEZ YESSICA
//IMPORTA REACT PARA USAR SUS FUNCIONALIDADES EN EL COMPONENTE
import React from 'react';
//IMPORTA EL COMPONENTE 'TAREA' DESDE EL ARCHIVO './TAREA'
import Tarea from './Tarea';

//DEFINE EL COMPONENTE FUNCIONAL 'LISTATAREAS' QUE RECIBE 'TAREAS', 'ONUPDATE' Y 'ONDELETE' COMO PROPS
const ListaTareas = ({ tareas, onUpdate, onDelete }) => 
(
  <div>
    {/*MAPEAMOS CADA ELEMENTO DE 'TAREAS' Y RENDERIZAMOS EL COMPONENTE 'TAREA' PARA CADA UNO*/}
    {tareas.map
      ((tarea) => 
        (
        <Tarea
        //PASA UNA CLAVE ÚNICA A CADA COMPONENTE 'TAREA' USANDO 'TAREA.ID'
        key={tarea.id}
        //PASA EL OBJETO 'TAREA' AL COMPONENTE 'TAREA'
        tarea={tarea}
        //PASA LA FUNCIÓN 'ONUPDATE' AL COMPONENTE 'TAREA'
        onUpdate={onUpdate}
        //PASA LA FUNCIÓN 'ONDELETE' AL COMPONENTE 'TAREA'
        onDelete={onDelete}
        />
        )
      )
    }
  </div>
);
//EXPORTA EL COMPONENTE 'LISTATAREAS' PARA QUE PUEDA SER UTILIZADO EN OTROS ARCHIVOS
export default ListaTareas;