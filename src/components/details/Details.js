import React from "react";
import "./Details.css";

import FavoriteButton from "../favorite-button/FavoriteButton";
import Rating from "../rating/Rating";

const Details = () => {
  return (
    <>
      <div className="container-detail">
        <div className="container-resume-hero">
          <div className="container-title">
            <h3 className="hero-name-detail"> HULK</h3>
            <FavoriteButton isSize={false} />
          </div>
          <p className="hero-resume">
            O Hulk, por vezes referido como O Incrível Hulk (The Incredible
            Hulk, no original em inglês), é um personagem de quadrinhos/banda
            desenhada do gênero super-herói, propriedade da Marvel Comics,
            editora pela qual as histórias do personagem são publicadas desde
            sua criação, na década de 1960. Concebido pelo roteirista Stan Lee
            (1922–2018) e pelo desenhista Jack Kirby (1917–1994),
          </p>

          <div className="cantainer-hero-detail">
            <div className="">
              <h3 className="hero-detail">Quadrinhos</h3>
              <div className="icon-value">
                <img
                  className="detail-icon"
                  src="ic_quadrinhos.svg"
                  alt="logo menor Marvel"
                />
                <h2 className="value">3.000</h2>
              </div>
            </div>
            <div className="">
              <h3 className="hero-detail">Filmes</h3>
              <div className="icon-value">
                <img
                  className="detail-icon-movie"
                  src="ic_trailer.svg"
                  alt="logo menor Marvel"
                />
                <h2 className="value">40</h2>
              </div>
            </div>
          </div>
          <div className="container-rating">
            <Rating isRating={false} />
          </div>
          <div className="container-last-publication">
            <h3 className="hero-detail">Último quadrinho:</h3>
            <div className="last-publication">13 fev 2020</div>
          </div>
        </div>
        <div>
          <img className="hero-img" src="hulk.png" alt="hulk" />
        </div>
      </div>
    </>
  );
};

export default Details;
