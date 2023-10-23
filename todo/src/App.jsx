import { useState } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer almoço",
      category: "Doméstica",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Passear com dogs",
      category: "Lazer",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: true,
    },

  ])
  
  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
    <TodoForm />

  </div>
}

export default App
