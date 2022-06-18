
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

const [inputText, setInputText] = useState('');
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState("all");
const [filteredTodos, setfilteredTodos] = useState([]);

useEffect( () => {
  filterHandler();
}, [ todos, status ]);


const filterHandler = () => {
  switch (status) {
    case "completed":
      setfilteredTodos(todos.filter( (todo) => todo.completed === true ))
      break;
    case "uncompleted":
      setfilteredTodos(todos.filter( ( todo ) => todo.completed === false ))
      break;
    default:
      setfilteredTodos(todos);
  }
};


  return (
   <div className='App'>
      <header>
        <h1>Todo App</h1>
      </header>
      <Form inputText = { inputText } todos = { todos } setTodos = {setTodos} setInputText = {setInputText}  setStatus = {setStatus} />
      <TodoList  filteredTodos = {filteredTodos} setTodos = {setTodos} todos = {todos} />
   </div>

  );
}

export default App;
