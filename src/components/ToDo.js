import React from "react";

const ToDo = ({ task, completed, markDone, deleteTodo }) => {
  return (
    <div className="list-wrapper">
      <li className="list-item">
        <input
          type="text"
          value={task}
          className={`list ${completed ? "complete" : ""}`}
          onChange={(event) => event.preventDefault()}
        />
        <div>
          <button className="button-complete" onClick={markDone}>
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="button-delete" onClick={deleteTodo}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default ToDo;
