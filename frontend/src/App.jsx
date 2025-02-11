import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/todos/') // Fetching data from Django Rest API
      .then(({ data }) => {
        setTodos(_todos =>{
          return data
        })
      })
  }, [])

const handleChangeTodo = (event) =>{
  setNewTodo(event.target.value)
}

  const createTodo = (event) => {
    event.preventDefault()

    axios.post('http://localhost:8000/api/todos/', {
      title: newTodo
    })  // Sending data to Django Rest API
    .then(({ data }) => {
      setTodos(_todos =>{
        return [..._todos, data]
      })
      setNewTodo('')
    })
  }

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/api/todos/${id}/`)
    .then(() => {
      setTodos(_todos => {
        return _todos.filter(todo => todo.id !== id)
      })
    })
  }


  return (
    <div className='my-5'>
      <div className='card mx-auto' style={{ maxWidth: '520px' }}> 
        <div className='card-body'>
          <div className='d-flex justify-content-center gap-3'>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h3 className='text-center text-uppercase'>Todo List App Django Rest React Vite</h3>
          <div className="text-left">
            <form className='form-group mt-5 mb-3' onSubmit={createTodo}>
              <div className='input-group mb-3'>
                <input type="text" placeholder='Ingresa una nueva Tarea' 
                onChange={handleChangeTodo} value={newTodo}
                className='form-control form-control-sm' />
                <button type='submit' className='btn btn-sm btn-success'>Agregar Nueva Tarea</button>
              </div>
            </form>
            <hr />
            {
              todos.map(todo => (
                <div key={todo.id} className='d-flex gap-1 justify-content-between align-items-center p-2 border'>
                  <div>{todo.title}</div>
                  <a href="" onClick={() => deleteTodo(todo.id)} className='btn btn-sm btn-danger'>Eliminar</a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
