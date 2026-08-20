import { useState } from 'react'


function App() {
  // TASK
  const [task, setTask] = useState(null)  // Estado inicial de la tarea

  const actTask = (key, value) => {// Funcion que actualiza la tarea
    setTask({
      ...task, [key]: value
    })
  }


  //RECORDATORIOS
  const [reminders, setReminders] = useState([]) //Estado inicial de la lista de Recordatorios

  const addTask = () => { //Funcion que agrega la tarea a la lista de recordatorios
    if(!task || !task.task){
      alert('No ha escrito ninguna tarea')
      return
    }
    setReminders([...reminders, task])
    setTask(null)
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


        {/* BOTONES */}
        <div className='collapse navbar-collapse' id='navbarButtons'>
          <div className="d-flex ms-auto gap-2">
            <button className='btn btn-outline-light'>Urgentes</button>
            <button className='btn btn-outline-light'>Completados</button>
          </div>

        </div>
      </nav>


      {/* SECCION: AGREGAR NUEVA TAREA */}
      <div className='mt-4'>
        <h3>Nuevo Recordatorio</h3>

        <div className='d-flex justify-content-center gap-2'>

          <input type="text"
            className='form-control'
            placeholder='Escribe un recordatorio nuevo...'
            value={task ? task.task : ''}
            onChange={(evt) => actTask('task', evt.target.value)} />

          <button className='btn btn-outline-dark' onClick={addTask}>Agregar</button>
        </div>

      </div>


      {/* SECCION: LISTA DE RECORDATORIOS */}
        <div className='mt-4'>
      <div className='form-control'>
        <h3>Lista de Recordatorios</h3>
        {
          reminders.map((i, index)=>(
            <div key={index}>
              <p className='border bg-light'>{i.task}</p>
            </div>
          ))
        }
      </div>

      </div>

    </div>
  )
}

export default App
