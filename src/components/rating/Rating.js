import React from "react";
import "./Rating.css";

const Rating = ({ isRating }) => {
  return (
    <>
      <div className="container-rating">
        <h3 className="hero-rating">Rating:</h3>
        <img
          className="rating"
          src={isRating ? "/avaliacao_on.svg" : "/avaliacao_off.svg"}
          alt="ícone de avaliação do herói"
        />
        <img
          className="rating"
          src={isRating ? "/avaliacao_on.svg" : "/avaliacao_off.svg"}
          alt="ícone de avaliação do herói"
        />
        <img
          className="rating"
          src={isRating ? "/avaliacao_on.svg" : "/avaliacao_off.svg"}
          alt="ícone de avaliação do herói"
        />
        <img
          className="rating"
          src={isRating ? "/avaliacao_on.svg" : "/avaliacao_off.svg"}
          alt="ícone de avaliação do herói"
        />
        <img
          className="rating"
          src={isRating ? "/avaliacao_on.svg" : "/avaliacao_off.svg"}
          alt="ícone de avaliação do herói"
        />
      </div>
    </>
  );
};

export default Rating;
