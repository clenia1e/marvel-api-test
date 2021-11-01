const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const params = {
  apikey: process.env.REACT_APP_API_KEY,
  hash: process.env.REACT_APP_API_HASH,
  ts: process.env.REACT_APP_API_TS,
};

const defaultParams = isDevelopment ? params : { apikey: params.apikey };

export default defaultParams;
