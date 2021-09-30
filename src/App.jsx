import React, { Fragment, useState, useRef } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid"; // v4 is a random uuid generator

export function App() {
  const [todos, setTodos] = useState([ // todos: array of todo objects
    { id: 1, task: "Learn React", completed: false }, 
  ]);

  const todoTaskRef = useRef(); // todoTaskRef: ref to the input field

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value; // get the value of the input
    if (task === '') return ; // if the input is empty, do nothing
    setTodos((prevTodos) => { // set the new todo
        return [...prevTodos, { id: uuidv4(), task ,completed: false }]; 
    });
    todoTaskRef.current.value = ''; // clear input
  };

  return (
    <Fragment>
      <TodoList todos={todos} /> {/* pass the todos array to TodoList */}
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" /> {/* ref to the input field */}
      <button onClick={handleTodoAdd}>➕</button> {/* add a new todo */}
      <button>❌</button> {/* delete all todos */}
    </Fragment>
  );
}
