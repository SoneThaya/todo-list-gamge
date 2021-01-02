import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
