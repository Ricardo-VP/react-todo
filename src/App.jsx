import React, { Fragment, useState, useRef, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid"; // v4 is a random uuid generator

const KEY = "todoApp.todos"; // key for local storage

export function App() {
  const [todos, setTodos] = useState([
    // todos: array of todo objects
    { id: 1, task: "Learn React", completed: false },
  ]);

  const toggleTodo = (id) => { 
    const newTodos = [...todos];  // copy the array
    const todo = newTodos.find((todo) => todo.id === id); // find the todo with the matching id
    todo.completed = !todo.completed; // toggle the completed property
    setTodos(newTodos); // update the state
  };

  useEffect(() => { 
      const storedTodos = JSON.parse(localStorage.getItem(KEY)); // get the todos from local storage
      if(storedTodos){ // if there are todos in local storage
            setTodos(storedTodos); // set the state to the todos
      }
  }, []);

  useEffect(() => { 
      localStorage.setItem(KEY, JSON.stringify(todos)); // save the todos to local storage
  }, [todos]); // only save the todos when the todos array changes

  const todoTaskRef = useRef(); // todoTaskRef: ref to the input field

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed); // filter out the completed todos
    setTodos(newTodos); // update the state
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value; // get the value of the input
    if (task === "") return; // if the input is empty, do nothing
    setTodos((prevTodos) => {
      // set the new todo
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });
    todoTaskRef.current.value = ""; // clear input
  };

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />{" "}
      {/* pass the todos array to TodoList */}
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />{" "}
      {/* ref to the input field */}
      <button onClick={handleTodoAdd}>➕</button> {/* add a new todo */}
      <button onClick={handleClearAll}>❌</button> {/* delete all todos */}
      <div>
        Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        terminar
      </div>
    </Fragment>
  );
}
