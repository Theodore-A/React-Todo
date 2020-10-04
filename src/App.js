import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="main-header">
        <h1>Theo's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} inputText={inputText} />
    </div>
  );
}

export default App;
