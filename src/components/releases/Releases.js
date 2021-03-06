import React, { useState, useEffect } from "react";
import "./Releases.css";
import Loader from "../loader/Loader";
import fetchComics from "../../api/fetchComics";

const Releases = ({ id }) => {
  const [comics, setcomics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fix for react-testing-library https://medium.com/rd-shipit/testing-asynchronous-code-with-jest-and-testing-library-react-cfc185d7bd78
    let mounted = true;
    const fetchComics = async () => {
      const results = await getComics();
      if (mounted) {
        setcomics(results);
        setIsLoading(false);
      }
    };

    fetchComics();
    return () => {
      mounted = false;
    };
  }, []);

  const getComics = async () => {
    const data = await fetchComics({ id });
    return data?.results;
  };

  const initialItems = comics.filter((comic, index) => index < 10);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container-releases" key={id}>
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
