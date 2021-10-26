import React from "react";
import "./FavoriteButton.css";

const FavoriteButton = ({ isFavorite }) => {
  return (
    <>
      <button className="favorite-button-hero">
        <img
          className="favorite-hero-button"
          src={isFavorite ? "favorito_03.svg" : "favorito_02.svg"}
          alt="ícone de favorito do herói"
        />
      </button>
    </>
  );
};

export default FavoriteButton;
