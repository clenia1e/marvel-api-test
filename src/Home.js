// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "./components/header/Header";
import SearchBar from "./components/search-bar/SearchBar";
import SearchInfo from "./components/search-info/SearchInfo";
import Characters from "./components/characteres/Characteres";
import Footer from "./components/footer/Footer";
import Pagination from "./components/pagination/Pagination";

const Home = () => {
  const [page, setPage] = useState(0);
  const [isloading, setIsloading] = useState(true);
  const [characters, setcharacters] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [name, setName] = useState(null);
  const [total, setTotal] = useState(0);

  const [isOnlyFavorites, setIsOnlyFavorites] = useState(null);
  const favoritesStorage = localStorage.getItem("favorites") || "[]";
  const currentFavorites = JSON.parse(favoritesStorage);

  const { state } = useLocation();

  const searchName = state?.searchName;

  const history = useHistory();

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
    return () => history.replace({});
  }, [isAsc, searchName, name, page]);

  const getCharacter = async () => {
    setIsloading(true);
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?***REMOVED***&ts=1635170467574&${
        name || searchName ? `nameStartsWith=${name || searchName}` : ""
      }&orderBy=${isAsc ? "" : "-"}name&offset=${page ? (page - 1) * 20 : 0}`
    );
    const json = await res.json();
    setTotal(json?.data?.total);
    setcharacters(json?.data?.results);
    setIsloading(false);
  };

  const setNameHome = (name) => {
    setName(name);
    setPage(0);
    history.replace({});
  };

  return (
    <>
      <Header className="header-root" />
      <SearchBar
        type="home"
        setName={setNameHome}
        value={name}
        getCharacter={setName}
        defaultValue={searchName}
      />
      <SearchInfo
        setIsAsc={setIsAsc}
        isAsc={isAsc}
        isOnlyFavorites={isOnlyFavorites}
        setIsOnlyFavorites={() => setIsOnlyFavorites(!isOnlyFavorites)}
        charactersLength={
          isOnlyFavorites ? localFavorites.length : characters.length
        }
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
      {!isOnlyFavorites && (
        <Pagination
          dataLimit={20}
          length={total}
          pageLimit={3}
          onPageChange={setPage}
        />
      )}
      <Footer />
    </>
  );
};

export default Home;
