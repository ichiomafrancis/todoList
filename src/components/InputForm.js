import React, { useEffect } from "react";

const InputForm = ({
  input,
  setInput,
  todoList,
  setTodoList,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (id, task, completed) => {
    // console.log(`${id} ${task} ${completed}`);
    const newTodo = todoList.map((todo) => {
      return todo.id === id ? { id, task, completed } : todo;
    });
    // console.log(newTodo);
    setTodoList(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.task);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, task: input, completed: false },
      ]);
      setInput("");
    } else {
      updateTodo(editTodo.id, input, editTodo.completed);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        type="text"
        value={input}
        required
        onChange={handleInputChange}
        placeholder="Enter a Todo task..."
        className="form-input"
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default InputForm;
