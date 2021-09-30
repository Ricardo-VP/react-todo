import React from "react";

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo; // destructuring
  const handleTodoClick = () => { 
      toggleTodo(id);  // toggleTodo is a function passed down from the parent component
  }
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleTodoClick} />
      {task}
    </li>
  );
}
