import axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com';

export const api = axios.create({
  baseURL: BASE_URL,
});