import React from 'react';

import './Search.css';

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <h2>Pesquisar:</h2>
        <input type='text' placeholder='Digite o título da tarefa para pesquisar...' value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search;