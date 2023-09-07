const { VITE_X_RapidAPI_Key, VITE_X_RapidAPI_Host, VITE_BASE_URL } = import.meta
  .env;
// Urls
export const PRODUCTS_BASE_URL = "https://sephora.p.rapidapi.com/products";

export const BASE_URL = VITE_BASE_URL;

export const headers = {
  "X-RapidAPI-Key": VITE_X_RapidAPI_Key,
  "X-RapidAPI-Host": VITE_X_RapidAPI_Host,
};
