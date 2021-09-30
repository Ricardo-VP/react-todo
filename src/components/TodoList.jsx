import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => ( // map through the todos array
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/> // pass the todo to TodoItem
      ))}
    </ul>
  );
}
