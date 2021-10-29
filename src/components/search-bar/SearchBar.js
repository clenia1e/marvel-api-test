import React, { useCallback } from "react";
import _debounce from "lodash.debounce";
import "./SearchBar.css";

const SearchBar = ({ type, getCharacter, defaultValue }) => {
  const handleDebounceFn = (inputValue) => {
    getCharacter(inputValue);
  };
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1500), []);

  const handleChange = (e) => {
    debounceFn(e.target.value);
  };
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
            defaultValue={defaultValue}
            placeholder="Procure por heróis"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
