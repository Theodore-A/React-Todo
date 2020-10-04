import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form action="">
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button">
        Enter
      </button>
    </form>
  );
}

export default Form;
