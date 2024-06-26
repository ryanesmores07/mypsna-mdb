import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: "/api/v1",
});

export const customFetchUser = axios.create({
  baseURL: productionUrl,
});
