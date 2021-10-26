import { Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import SearchBar from "./components/search-bar/SearchBar";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <SearchBar type="home" />
      <button>
        <Link to={`/character`}> click</Link>
      </button>
      <Footer />
    </>
  );
};

export default Home;
