// import { Link } from "react-router-dom";
import Header from "./components/header/Header";
import SearchBar from "./components/search-bar/SearchBar";
import SearchInfo from "./components/search-info/SearchInfo";
import Characters from "./components/characteres/Characteres";

const Home = () => {
  return (
    <>
      <Header className="header-root" />
      <SearchBar type="home" />
      {/* <button>
        <Link to={`/character`}> click</Link>
      </button> */}
      <SearchInfo />
      <Characters />
    </>
  );
};

export default Home;
