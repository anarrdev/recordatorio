import { useState } from 'react'


function App() {
  const [task, setTask] = useState(null)

  const actTask =(key, value)=>{
    setTask({
      ...task, [key]: value
    })
  }

  return (
    <div className='text-center'>


      {/* SECCION: NAVBAR */}
      <nav className="navbar navbar-expand-sm bg-dark p-2" data-bs-theme="dark">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-pencil-square me-2"></i>
          <span className='fs-1'>Mis Recordatorios</span>
        </a>


        {/* Boton de 'hamburguesa' */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarButtons"
          aria-controls="navbarButtons"
          aria-expanded="false"
          aria-label="Mostrar navegación">

          <span className="navbar-toggler-icon"></span>

        </button>


        <div className='collapse navbar-collapse' id='navbarButtons'>

          <div className="d-flex ms-auto gap-2">
            <button className='btn btn-outline-light'>Urgentes</button>
            <button className='btn btn-outline-light'>Completados</button>
          </div>

        </div>
      </nav>


      {/* SECCION: AGREGAR NUEVA TAREA */}
      <div className='m-4'>
        <h3>Nuevo Recordatorio</h3>

        <div className='d-flex justify-content-center gap-2'>
          <input type="text" className='form-control' placeholder='Escribe un recordatorio nuevo...' />
          <button className='btn btn-outline-dark'>Agregar</button>
        </div>
      </div>
      <hr />


      {/* SECCION: LISTA DE RECORDATORIOS */}
      <div>
        <h3>Lista de Recordatorios</h3>
      </div>

    </div>
  )
}

export default App
