import React, { useState, useEffect } from "react";
import "./Releases.css";

const Releases = ({ id }) => {
  const [comics, setcomics] = useState([]);

  useEffect(() => {
    getComics();
  }, []);

  const getComics = async () => {
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?orderBy=onsaleDate&***REMOVED***&ts=1635170467574`
    );
    const json = await res.json();
    setcomics(json?.data?.results);
  };
  const initialItems = comics.filter((comic, index) => index < 10);
  return (
    <div className="container-releases">
      <p className="title-release">Últimos lançamentos</p>
      <div className="characters-releases">
        {initialItems.map((comic) => (
          <div key={comic.id} className="releases">
            <img
              className="img-releases"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt="ícone de navegacao"
            />
            <h4 className="releases-name">{comic.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Releases;
