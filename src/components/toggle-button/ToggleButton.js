import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ isActive }) => {
  return (
    <>
      <img
        className="img-toggle"
        src={isActive ? "toggle_on.svg" : "toggle_off.svg"}
        alt="ícone de seleção"
      />
    </>
  );
};

export default ToggleButton;
