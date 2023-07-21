import React from "react";

const Input = ({ label, name, text, type, handlar }) => {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        onClick={handlar}
        name={name}
        style={{
          border: "1px solid skyblue",
          outline: "none",
          display: "block",
          padding: "4px 8px",
          width: "100%",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default Input;
