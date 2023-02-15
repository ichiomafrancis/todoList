import React from "react";

const InputForm = ({ input, setInput, todoList, setTodoList }) => {
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, task: input, completed: false },
    ]);
    setInput("");
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
        Add
      </button>
    </form>
  );
};

export default InputForm;
