// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/search-bar/SearchBar";
import SearchInfo from "./components/search-info/SearchInfo";
import Characters from "./components/characteres/Characteres";
import Footer from "./components/footer/Footer";

const Home = () => {
  const [page, setPage] = useState(1);
  const [search, setsearch] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [characters, setcharacters] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [name, setName] = useState(null);
  const [isOnlyFavorites, setIsOnlyFavorites] = useState(null);
  const favoritesStorage = localStorage.getItem("favorites") || "[]";
  const currentFavorites = JSON.parse(favoritesStorage);

  const [localFavorites, setLocalFavorites] = useState(currentFavorites);

  const setLocalFavoriteState = (currentList) => {
    localStorage.setItem("favorites", JSON.stringify(currentList));
    setLocalFavorites([...currentList]);
  };

  const setCharacterFavorite = (character) => {
    if (isCharacterFavorite(character.id)) {
      const restFavorites = localFavorites.filter(
        (favorite) => favorite.id !== character.id
      );
      setLocalFavoriteState(restFavorites);
      return;
    }

    if (localFavorites.length > 4) {
      alert("somente 5 favoritos podem ser adicionados");
      return;
    }

    if (localFavorites.length < 1) {
      const currentFavorite = [character];
      setLocalFavoriteState(currentFavorite);
      return;
    }

    setLocalFavoriteState([...localFavorites, character]);
  };

  const isCharacterFavorite = (id) => {
    if (localFavorites.length > 0) {
      return localFavorites.find((favorite) => favorite.id === id);
    }
    return false;
  };

  useEffect(() => {
    getCharacter();
  }, [name, isAsc]);

  const getCharacter = async () => {
    setIsloading(true);
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?***REMOVED***&ts=1635170467574&${
        name ? `nameStartsWith=${name}` : ""
      }&orderBy=${isAsc ? "" : "-"}name`
    );
    const json = await res.json();
    setcharacters(json?.data?.results);
    setIsloading(false);
  };

  return (
    <>
      <Header className="header-root" />
      <SearchBar
        type="home"
        setsearch={setsearch}
        search={search}
        getCharacter={setName}
      />
      <SearchInfo
        setIsAsc={setIsAsc}
        isAsc={isAsc}
        isOnlyFavorites={isOnlyFavorites}
        setIsOnlyFavorites={() => setIsOnlyFavorites(!isOnlyFavorites)}
      />
      <Characters
        setPage={setPage}
        page={page}
        isloading={isloading}
        characters={characters}
        isOnlyFavorites={isOnlyFavorites}
        setCharacterFavorite={setCharacterFavorite}
        isCharacterFavorite={isCharacterFavorite}
        localFavorites={localFavorites}
      />
      <Footer />
    </>
  );
};

export default Home;
