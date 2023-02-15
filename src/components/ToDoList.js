import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todoList, setTodoList, setEditTodo }) => {
  const handleToggle = (todo) => {
    const toggle = todoList.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(toggle);
    // setTodoList(
    //   todoList.map((item) => {
    //     if (item.id === todo.id) {
    //       return { ...item, completed: !item.completed };
    //     }
    //     return item;
    //   })
    // );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todoList.find((todo) => todo.id === id);
    setEditTodo(findTodo);
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
        editTask={() => handleEdit(todo)}
        deleteTodo={() => handleDelete(todo)}
      />
    );
  });
  return (
    <div>
      {toDos}
      {/* <button className="clear--completed">Clear Completed</button> */}
    </div>
  );
};

export default ToDoList;
