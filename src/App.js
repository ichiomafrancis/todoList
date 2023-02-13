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
        />
      </div>
      <div>
        <ToDoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
};

export default App;
