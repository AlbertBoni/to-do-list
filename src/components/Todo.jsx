import React from 'react';

import './Todo.css';

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className={todo.isCompleted ? "todo-item todo-completed" : " todo-item"}>
        <div className='todo-content'>
            <p>{todo.text}</p>
            <p className='todo-category'>({todo.category})</p>
        </div>
        <div>
            <button className='todo-button-complete' onClick={() => completeTodo(todo.id)}>{todo.isCompleted ? "Refazer" : "Completar"}</button>
            <button className='todo-button-remove' onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default Todo;