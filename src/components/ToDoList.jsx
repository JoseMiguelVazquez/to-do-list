import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const [inputValue, setinputValue] = useState('')

  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (inputValue.trim()) { // trim limpia espacios en blanco
      setTodos([...todos, inputValue]) // spread operator
      setinputValue('') // Limpiamos el input para volver a escribir
    }
  }

  const deleteTodo = (itemIndex) => {
    setTodos(todos.filter((_, i) => i !== itemIndex))
  }

  const generateId = () => {
    return Math.random().toString(36).substring(2, 9)
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setinputValue(event.target.value)}
      />
      <button className='add-button' onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index + generateId()}
            todo={todo}
            handleDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
