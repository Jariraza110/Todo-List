import React from "react";

function CommonInput(props) {
  return (
    <div className="input-box">
      <label>{props.label}</label>
      <input
      type="text"
      placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        pattern={props.pattern}
        // validateError={props.validateError}
      />
    </div>
  );
}
export default CommonInput;
