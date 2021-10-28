import React from "react";
import "./Details.css";

import FavoriteButton from "../favorite-button/FavoriteButton";
import Rating from "../rating/Rating";

const Details = ({ character }) => {
  return (
    <>
      {/* <div className="container-map-hero">
        {character.map((hero) => ( */}
      <div className="container-detail">
        <div className="container-resume-hero">
          <div className="container-title">
            <h3 className="hero-name-detail"> {character.name}</h3>
            <FavoriteButton isSize={false} />
          </div>
          <p className="hero-resume"> {character.description}</p>

          <div className="cantainer-hero-detail">
            <div className="">
              <h3 className="hero-detail">Quadrinhos</h3>
              <div className="icon-value">
                <img
                  className="detail-icon"
                  src="ic_quadrinhos.svg"
                  alt="logo menor Marvel"
                />
                <h2 className="value">{character?.comics?.available}</h2>
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
                <h2 className="value">{character?.series?.available}</h2>
              </div>
            </div>
          </div>
          <div className="container-rating">
            <Rating isRating={true} />
          </div>
          <div className="container-last-publication">
            <h3 className="hero-detail">Último quadrinho:</h3>
            <div className="last-publication">
              {new Date(character.modified).toLocaleDateString()}
            </div>
          </div>
        </div>
        <div>
          <img
            className="hero-img"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt="hulk"
          />
        </div>
        {/* </div>
        ))}{" "} */}
      </div>
    </>
  );
};

export default Details;
