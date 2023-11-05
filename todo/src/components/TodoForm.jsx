import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category);
    setValue("")
    setCategory ("")
    console.log(value, category)
  }

  return (
    <div>
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
            <button type='submit'>Criar</button>
        </form>

    </div>
  )
}

export default TodoForm