import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Character.css";
import Details from "./components/details/Details";
import Releases from "./components/releases/Releases";
import SearchBar from "./components/search-bar/SearchBar";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

const Character = () => {
  const location = useLocation();
  const [character, setcharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${location.state.id}?***REMOVED***&ts=1635170467574`
    );
    const json = await res.json();
    setcharacter(json?.data?.results[0]);
    setIsLoading(false);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="character-page">
        <header className="container-info-hero">
          <Link to="/">
            <img
              className="logo-menor"
              src="/logo_menor.svg"
              alt="logo menor Marvel"
            />
          </Link>
          <SearchBar className="search-hero" />
        </header>
        <Details setcharacter={setcharacter} character={character} />

        <Releases id={character.id} />
      </div>
      <Footer />
    </>
  );
};

export default Character;
