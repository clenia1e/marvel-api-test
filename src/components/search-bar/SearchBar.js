import React from "react";
import "./SearchBar.css";

const SearchBar = ({ type, getCharacter }) => {
  return (
    <>
      <div className="container-search">
        <div className="container-wrapper">
          <div className="container-icon">
            <img src="/ic_busca_menor.svg" alt="ícone de navegacao" />
          </div>
          <input
            className={
              type == "home"
                ? "container-searchbar--red"
                : "container-searchbar"
            }
            placeholder="Procure por heróis"
            onChange={(e) => getCharacter(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
