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
      {/* <button>
        <Link to={`/character`}> click</Link>
      </button> */}
      <SearchInfo setIsAsc={setIsAsc} isAsc={isAsc} />
      <Characters
        setPage={setPage}
        page={page}
        isloading={isloading}
        characters={characters}
      />
      <Footer />
    </>
  );
};

export default Home;
