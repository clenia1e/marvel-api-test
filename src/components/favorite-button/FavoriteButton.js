import React from "react";
import "./FavoriteButton.css";

const FavoriteButton = ({ isFavorite, isSize, setFavorite }) => {
  return (
    <>
      <button
        data-testid="character-favorite"
        className="favorite-button-hero"
        onClick={setFavorite}
      >
        <img
          data-testid="icon-favorite"
          className={isSize ? "favorite-hero-button" : "favorite-button-detail"}
          src={isFavorite ? "/favorito_01.svg" : "/favorito_02.svg"}
          alt="ícone de favorito do herói"
        />
      </button>
    </>
  );
};

export default FavoriteButton;
