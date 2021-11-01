import defaultParams from "./defaultParams";

const fetchComics = async ({ id }) => {
  const url = new URL(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/comics`
  );

  url.search = new URLSearchParams(defaultParams).toString();
  const res = await fetch(url);
  const json = await res.json();
  return json?.data;
};
export default fetchComics;
