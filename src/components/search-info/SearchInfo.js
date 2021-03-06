import React from "react";
import "./SearchInfo.css";
import ToggleButton from "../toggle-button/ToggleButton";

const SearchInfo = ({
  isAsc,
  setIsAsc,
  setIsOnlyFavorites,
  isOnlyFavorites,
  charactersLength,
}) => {
  return (
    <>
      <div className="container-info">
        <div className="info-length">Encontrados {charactersLength} heróis</div>

        <div className="info-buttons">
          <div className="order-button">
            <img
              className="img-hero"
              src="ic_heroi.svg"
              alt="ícone de navegacao"
            />
            Ordenar por nome - A/Z
          </div>
          <ToggleButton isActive={isAsc} handleClick={() => setIsAsc(!isAsc)} />

          <div className="favorite-button">
            <button
              className="button-favorite"
              data-testid="toggle-favorite"
              onClick={setIsOnlyFavorites}
            >
              <img
                className="img-favorite"
                src="favorito_01.svg"
                alt="ícone de navegacao"
              />
              {isOnlyFavorites ? "mostrar todos" : "Somente favoritos"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInfo;
