import { Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SearchBar from "./components/search-bar/SearchBar";

const Home = () => {
  return (
    <>
      <Header className="header-root" />
      <SearchBar type="home" />
      <button>
        <Link to={`/character`}> click</Link>
      </button>
      <Footer />
    </>
  );
};

export default Home;
