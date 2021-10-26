import React from "react";
import "./SearchInfo.css";
import ToggleButton from "../toggle-button/ToggleButton";

const SearchInfo = () => {
  return (
    <>
      <div className="container-info">
        <div className="info-length">Encontrados 20 heróis</div>

        <div className="info-buttons">
          <div className="order-button">
            <img
              className="img-hero"
              src="ic_heroi.svg"
              alt="ícone de navegacao"
            />
            Ordenar por nome - A/Z
          </div>
          <ToggleButton isActive={false} />

          <div className="favorite-button">
            <button className="button-favorite">
              <img
                className="img-favorite"
                src="favorito_03.svg"
                alt="ícone de navegacao"
              />
              Somente favoritos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInfo;
