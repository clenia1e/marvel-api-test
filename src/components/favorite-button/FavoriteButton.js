import React from "react";
import "./FavoriteButton.css";

const FavoriteButton = ({ isFavorite, isSize, setFavorite }) => {
  return (
    <>
      <button className="favorite-button-hero" onClick={setFavorite}>
        <img
          className={isSize ? "favorite-hero-button" : "favorite-button-detail"}
          src={isFavorite ? "/favorito_01.svg" : "/favorito_02.svg"}
          alt="ícone de favorito do herói"
        />
      </button>
    </>
  );
};

export default FavoriteButton;
