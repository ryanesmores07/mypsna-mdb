import axios from "axios";

const productionUrl = "https://api.discogs.com/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});