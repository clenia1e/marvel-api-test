import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button>
        <Link to={`/character`}> click</Link>
      </button>
    </>
  );
};

export default Home;
