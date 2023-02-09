import React, { useState } from "react";

function ToDo({ id, task }) {
  const [complete, setComplete] = useState(false);

  const handleToggle = () => {
    setComplete((prev) => !prev);
  };

  return (
    <div className="todo">
      <ul>
        <li className={`todo--item ${complete ? "strike" : ""}`}>{task}</li>
      </ul>
      <button className="delete">X</button>
      <button onClick={handleToggle} className="done">
        Done
      </button>
    </div>
  );
}
export default ToDo;
