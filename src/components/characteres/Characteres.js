import React from "react";
import "./Characteres.css";
import FavoriteButton from "../favorite-button/FavoriteButton";

const Characters = ({ setPage, page, isloading, characters }) => {
  if (isloading) {
    return (
      <div className="container-loader">
        {" "}
        <div className="loader"></div>
      </div>
    );
  }
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
              <FavoriteButton isSize={true} isFavorite={true} />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => (page == 1 ? 1 : setPage(page - 1))}>
          &laquo;
        </button>
        <button className={page === 1 ? "active" : ""}>{page}</button>
        <button className={page === 3 ? "active" : ""}>{page + 1}</button>
        <button className={page === 4 ? "active" : ""}>{page + 2}</button>
        <button onClick={() => setPage(page + 1)}>&raquo;</button>
      </div>
    </>
  );
};

export default Characters;
