import axios from "axios";

const productionUrl = "/api/v1";

export const customFetch = axios.create({
  baseURL: productionUrl,
});