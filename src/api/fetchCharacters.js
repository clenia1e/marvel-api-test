import defaultParams from "./defaultParams";

const fetchCharacters = async ({ name, searchName, isAsc, page }) => {
  const url = new URL("https://gateway.marvel.com:443/v1/public/characters");

  const urlParams = {
    ...defaultParams,
    orderBy: `${isAsc ? "" : "-"}name`,
    offset: page ? (page - 1) * 20 : 0,
  };

  const nameStartsWith = name || searchName;

  const urlParamsWithName = !nameStartsWith
    ? urlParams
    : { ...urlParams, nameStartsWith };

  url.search = new URLSearchParams(urlParamsWithName).toString();
  const res = await fetch(url);
  const json = await res.json();
  return json?.data;
};
export default fetchCharacters;
