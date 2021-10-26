import React, { useEffect, useState } from "react";
import "./Characteres.css";
import FavoriteButton from "../favorite-button/FavoriteButton";

const Characters = () => {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?***REMOVED***&ts=1635170467574&`
    );
    const json = await res.json();
    setcharacters(json?.data?.results);
  };
  return (
    <>
      <div className="characters">
        {characters.map((character) => (
          <div key={character.id} className="character-row">
            <img
              className="img-characters"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt="Imagem do herói"
            />
            <div className="characters-info">
              <h4 className="hero-name">{character.name}</h4>
              <FavoriteButton isFavorite={true} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
