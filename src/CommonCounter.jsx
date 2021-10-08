import React from "react";

function CommonCounter(props) {
  return (
    <div className="counter-btn">
      <button name={props.name} onClick={props.onClick}/>
    </div>
  );
}
export default CommonCounter;
