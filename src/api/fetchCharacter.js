import defaultParams from "./defaultParams";

const fetchCharacter = async ({ id }) => {
  const url = new URL(
    `https://gateway.marvel.com:443/v1/public/characters/${id}`
  );

  url.search = new URLSearchParams(defaultParams).toString();
  const res = await fetch(url);
  const json = await res.json();
  return json?.data;
};
export default fetchCharacter;
