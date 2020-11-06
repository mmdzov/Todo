import React from "react";
import "./Button.css";
const Button = ({ type, click, children }) => (
    <button
      type={type | ""}
      onClick={click}
      className={`buttonCustom`}
      children={children}
    />
  );

export default Button;
