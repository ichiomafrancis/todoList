import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todoList, handleFilter, deleteTodoItem }) {
  const toDos = todoList.map((todo) => {
    return <ToDo key={todo.id} {...todo} deleteTodoItem={deleteTodoItem} />;
  });

  return (
    <div>
      {toDos}
      <button onClick={handleFilter} className="clear--completed">
        Clear Completed
      </button>
    </div>
  );
}

export default ToDoList;
