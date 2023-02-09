import React, { useState } from "react";

function InputForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <div className="input--form">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter ToDo task..."
      />
      <button onClick={handleAddItem}>Add to list</button>
    </div>
  );
}

export default InputForm;
