import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ isActive, handleClick }) => {
  return (
    <>
      <img
        role="presentation"
        data-testid="toggle-asc"
        onClick={() => handleClick(!isActive)}
        className="img-toggle"
        src={isActive ? "toggle_on.svg" : "toggle_off.svg"}
        alt="ícone de seleção"
      />
    </>
  );
};

export default ToggleButton;
