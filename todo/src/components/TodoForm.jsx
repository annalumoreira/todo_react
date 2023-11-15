import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [imagemVisivel, setImagemVisivel] = useState(false);

  const handleCLique = () => {
    setImagemVisivel(true);

    setTimeout(() => {
      setImagemVisivel(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category);
    setValue("")
    setCategory ("")
    console.log(value, category)
  }

  return (
    <div style={{ position: 'relative' }}>
        <h2>Criar nova tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Digite um título' 
              value={value}
              onChange={(e) => setValue(e.target.value)}/>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Lazer">Lazer</option>
                <option value="Doméstica">Doméstica</option>
            </select>
        <div>
          <button
            type='submit' onClick={handleCLique}>Criar</button>
        </div>
        <div className="imagem-container" style={{ position: 'absolute', top: '100%', left: '-51%', transform: 'translate(-50%, -200%)' }}>
          {imagemVisivel && <img className='imagem-aparece' src='../img/noted.png' alt='Noted' />}
        </div>
      </form>
    </div>
  )
}

export default TodoForm