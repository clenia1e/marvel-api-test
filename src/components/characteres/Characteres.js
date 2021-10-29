import { useHistory } from "react-router-dom";
import React from "react";
import "./Characteres.css";
import FavoriteButton from "../favorite-button/FavoriteButton";
import Loader from "../loader/Loader";

const Characters = ({ isloading, characters }) => {
  const history = useHistory();
  if (isloading) {
    return <Loader />;
  }
  return (
    <>
      <div className="characters">
        {characters.map((character) => (
          <div key={character.id} className="character-row">
            <div
              role="presentation"
              onClick={() =>
                history.push(`/character/${character.id}`, { id: character.id })
              }
              className="character-router"
            >
              <img
                className="img-characters"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="Imagem do herói"
              />
            </div>
            <div className="characters-info">
              <h4 className="hero-name">{character.name}</h4>
              <FavoriteButton isSize={true} isFavorite={true} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
