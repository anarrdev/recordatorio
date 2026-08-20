import { useState } from 'react'


function App() {

  return (
    <div className='text-center'>

      {/* NAVBAR */}
      <nav className="navbar bg-dark p-2" data-bs-theme="dark">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-pencil-square me-2"></i>
          <span className='fs-2'>Mis Recordatorios</span>
        </a>
        <div className="d-flex ms-auto gap-2">
          <button className='btn btn-outline-light border border-light'>Urgentes</button>
          <button className='btn btn-outline-light border border-light'>Completados</button>
        </div>
      </nav>

      {/* AGREGAR NUEVA TAREA */}
      <div className='my-2'>
        <h3>Nuevo Recordatorio</h3>
        <input type="text" />
        <button className='btn btn-outline-dark'>Agregar</button>
      </div>

    </div>
  )
}

export default App
