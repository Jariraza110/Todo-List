import React from "react";

function TodoList(props) {
  return (
    <div className="todo-main">
      <h1>TODO LIST</h1>
      <div className="todo-inner">
        <input
          type="text"
          placeholder="Enter Name"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required
        />
     

        <button type="text" onClick={props.onClick}>
          {props.btnName}
        </button>
      </div>
    </div>
  );
}
export default TodoList;
