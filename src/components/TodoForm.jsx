import React from 'react';

import { useState } from 'react';

import './TodoForm.css';

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !category){
            console.log("Valores inválidos!");
            return;
        }
        addTodo(title, category);
        setTitle("");
        setCategory("");
    }

    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            <form className='new-todo' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Digite o título' 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
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

export default TodoForm;