import React from "react";
import "./SearchBar.css";

const SearchBar = ({ type }) => {
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="container-icon">
            <img src="ic_busca_menor.svg" alt="ícone de navegacao" />
          </div>
          <input
            className={
              type == "home"
                ? "container-searchbar"
                : "container-searchbar--red"
            }
            placeholder="Procure por um heróis"
          ></input>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
