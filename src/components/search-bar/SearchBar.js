import React from "react";
import "./SearchBar.css";

const SearchBar = ({ type }) => {
  return (
    <>
      <div className="container-search">
        <div className="container-wrapper">
          <div className="container-icon">
            <img src="ic_busca_menor.svg" alt="ícone de navegacao" />
          </div>
          <input
            className={
              type == "home"
                ? "container-searchbar--red"
                : "container-searchbar"
            }
            placeholder="Procure por um heróis"
          ></input>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
