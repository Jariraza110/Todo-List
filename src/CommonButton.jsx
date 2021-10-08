import React from "react";
import CommonInput from "./CommonInput";
function CommonButton(props) {
  return <button onClick={props.onClick}>{props.btnName}</button>;
}
export default CommonButton;
