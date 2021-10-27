import "./Character.css";
import Details from "./components/details/Details";
import Releases from "./components/releases/Releases";
import SearchBar from "./components/search-bar/SearchBar";
const Character = () => {
  return (
    <div className="character-page">
      <header className="container-info-hero">
        <img
          className="logo-menor"
          src="logo_menor.svg"
          alt="logo menor Marvel"
        />
        <SearchBar className="search-hero" />
      </header>
      <Details />

      <Releases />
    </div>
  );
};

export default Character;
