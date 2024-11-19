//22490352: FUENTES CHAVEZ YESSICA
//IMPORTAMOS LOS HOOKS useState Y useEffect DESDE REACT
import React, { useState, useEffect } from 'react';
//IMPORTAMOS LOS COMPONENTES FormularioTarea Y ListaTareas
import FormularioTarea from './FormularioTarea';
import ListaTareas from './ListaTareas';
//DEFINIMOS EL COMPONENTE PRINCIPAL App
const App = () => 
{
  //DEFINIMOS EL ESTADO tareas CON VALORES INICIALES CARGADOS DESDE localStorage
  const [tareas, setTareas] = useState(() => 
  {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });
  //DEFINIMOS EL ESTADO filtro PARA CONTROLAR LAS TAREAS A MOSTRAR (TODAS, COMPLETADAS, PENDIENTES)
  const [filtro, setFiltro] = useState('todas'); // ESTADO INICIAL: 'TODAS'
  //ACTUALIZAMOS localStorage CUANDO CAMBIA EL ESTADO tareas
  useEffect(() => 
  {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);
  //FUNCIÓN PARA AGREGAR UNA NUEVA TAREA AL ESTADO tareas
  const agregarTarea = (nuevaTarea) => setTareas([...tareas, nuevaTarea]);
  //FUNCIÓN PARA ACTUALIZAR UNA TAREA EXISTENTE POR SU ID
  const actualizarTarea = (id, tareaActualizada) => 
  {
    setTareas(tareas.map((tarea) => (tarea.id === id ? tareaActualizada : tarea)));
  };
  //FUNCIÓN PARA ELIMINAR UNA TAREA POR SU ID
  const eliminarTarea = (id) => setTareas(tareas.filter((tarea) => tarea.id !== id));
  //FILTRAMOS LAS TAREAS SEGÚN EL ESTADO DEL FILTRO
  const tareasFiltradas = tareas.filter((tarea) => 
  {
    if (filtro === 'todas') return true; // MOSTRAR TODAS LAS TAREAS
    if (filtro === 'completadas') return tarea.completada; // SOLO LAS COMPLETADAS
    if (filtro === 'pendientes') return !tarea.completada; // SOLO LAS PENDIENTES
    return true; //POR DEFECTO, MOSTRAR TODAS
  });
  //RENDERIZAMOS EL COMPONENTE
  return (
    <div className="container">
      {/*ENCABEZADO PRINCIPAL*/}
      <h1 className="text-center my-4">Gestión de Tareas</h1>
      {/*FORMULARIO PARA AGREGAR NUEVAS TAREAS*/}
      <FormularioTarea onAdd={agregarTarea} />
      {/*BOTONES PARA FILTRAR LAS TAREAS*/}
      <div className="filtros">
        <button
          className={`filtro ${filtro === 'todas' ? 'active' : ''}`}
          onClick={() => setFiltro('todas')}
        >
          Todas
        </button>
        <button
          className={`filtro ${filtro === 'completadas' ? 'active' : ''}`}
          onClick={() => setFiltro('completadas')}
        >
          Completadas
        </button>
        <button
          className={`filtro ${filtro === 'pendientes' ? 'active' : ''}`}
          onClick={() => setFiltro('pendientes')}
        >
          Pendientes
        </button>
      </div>
      {/*LISTADO DE TAREAS FILTRADAS*/}
      <ListaTareas tareas={tareasFiltradas} onUpdate={actualizarTarea} onDelete={eliminarTarea} />
    </div>
  );
};
//EXPORTAMOS EL COMPONENTE App
export default App;