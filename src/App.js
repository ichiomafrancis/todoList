import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
// import { items } from "./components/Items";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todoList")) || [];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <InputForm
          input={input}
          setInput={setInput}
          todoList={todoList}
          setTodoList={setTodoList}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <ToDoList
          todoList={todoList}
          setTodoList={setTodoList}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
};

export default App;
