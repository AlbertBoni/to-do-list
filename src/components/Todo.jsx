import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className='todo-item'>
        <div className='todo-content'>
            <p>{todo.text}</p>
            <p className='todo-category'>({todo.category})</p>
        </div>
        <div>
            <button className='todo-item-complete'>Completar</button>
            <button className='todo-item-remove'>X</button>
        </div>
    </div>
  )
}

export default Todo