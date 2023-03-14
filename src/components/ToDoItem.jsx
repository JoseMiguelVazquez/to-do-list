import React from 'react'

const ToDoItem = ({ todo, handleDelete }) => {
  return (
    <li>{todo}
      <button
        className='delete-button'
        onClick={handleDelete}
      >
        Remove
      </button>
    </li>
  )
}

export default ToDoItem
