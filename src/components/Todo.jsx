import React from 'react';

import './Todo.css';

const Todo = ({todo, removeTodo}) => {
  console.log("todo: ", todo);
  return (
    <div className='todo-item'>
        <div className='todo-content'>
            <p>{todo.text}</p>
            <p className='todo-category'>({todo.category})</p>
        </div>
        <div>
            <button className='todo-button-complete'>Completar</button>
            <button className='todo-button-remove' onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default Todo;