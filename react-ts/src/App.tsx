import React, { useState } from 'react';

import Header from './Header'
import InputField from './components/InputField/InputField';

import './App.css';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todos) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <Header title="Taskify" color="#1CE" />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <TodoLsit /> */}

      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
}

export default App;
