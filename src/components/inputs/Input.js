import React from "react";
import "./Input.css"
const Input = ({ change, type, place,className,value,...style }) => (
    <input
      type={type | "text"}
      className={`inputCustom ${className}`}
      onChange={change}
      placeholder={place}
      style={style}
      value={value}
    />
  );

export default Input;
