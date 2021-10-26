import React from "react";
import "./Characteres.css";
import FavoriteButton from "../favorite-button/FavoriteButton";

const Characters = () => {
  return (
    <>
      <div className="character">
        <img className="img-characters" src="hero.png" alt="hero" />

        <div className="characters-info">
          <h4 className="hero-name">Black-panther</h4>
          <FavoriteButton isFavorite={true} />
        </div>
      </div>
    </>
  );
};

export default Characters;
