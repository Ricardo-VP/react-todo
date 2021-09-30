import React, { Fragment, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
  ]);
  return (
    <Fragment>
      <TodoList todos={todos} />
      <input type="text" placeholder="Nueva tarea" />
    </Fragment>
  );
}
