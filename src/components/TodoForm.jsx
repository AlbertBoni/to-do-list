import React from 'react'

import './TodoForm.css'

const TodoForm = () => {
    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            <form className='new-todo'>
                <input type='text' placeholder='Digite o título' />
                <select>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Outros">Outros</option>
                </select>
                <button type='submit' className='new-todo-button'>Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm