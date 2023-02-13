import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todoList, setTodoList }) => {
  const handleToggle = (todo) => {
    const toggle = todoList.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(toggle);
  };

  const handleDelete = ({ id }) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toDos = todoList.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        {...todo}
        markDone={() => handleToggle(todo)}
        deleteTodo={() => handleDelete(todo)}
      />
    );
  });
  return <div>{toDos}</div>;
};

export default ToDoList;
