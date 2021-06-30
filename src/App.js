import React from 'react'
import './App.css';

function App() {
  return (
    <div className="container mt-5">
       <h1>Tareas</h1>
       <hr></hr>

      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de la Tarea</span>
              <button className="btn btn-danger float-end mx-2">Eliminar</button>
              <button className="btn btn-warning float-end">Editar</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la Tarea"
            />
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
