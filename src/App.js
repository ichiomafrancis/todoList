import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
// import { items } from "./components/Items";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTask = (input) => {
    if (input.length !== 0) {
      let newItem = [
        ...todoList,
        { id: todoList.length + 1, task: input, complete: false },
      ];
      setTodoList(newItem);
    }
  };

  return (
    <div className="app">
      <Header />
      <InputForm addTask={addTask} />
      <ToDoList todoList={todoList} />
    </div>
  );
};

export default App;
