import { useHistory } from "react-router-dom";
import React from "react";
import "./Characteres.css";
import FavoriteButton from "../favorite-button/FavoriteButton";
import Loader from "../loader/Loader";

const Characters = ({
  isloading,
  characters,
  isOnlyFavorites,
  setCharacterFavorite,
  isCharacterFavorite,
  localFavorites,
}) => {
  const history = useHistory();

  if (isloading) {
    return <Loader />;
  }

  const characterList = isOnlyFavorites ? localFavorites : characters;

  return (
    <>
      <div className="characters">
        {characterList.map((character) => (
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
              <FavoriteButton
                isSize={true}
                isFavorite={isCharacterFavorite(character.id)}
                setFavorite={() => setCharacterFavorite(character)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
