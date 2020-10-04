import React from "react";

function Todo({ text }) {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">C</button>
      <button className="trash-btn">D</button>
    </div>
  );
}

export default Todo;
