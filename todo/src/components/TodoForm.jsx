import React from 'react'

const TodoForm = () => {
  return (
    <div>
        <h2>Criar nova tarefa</h2>
        <form>
            <input type="text" placeholder='Digite um título'/>
            <select>
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