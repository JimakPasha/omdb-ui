import axios from 'axios';

const API_KEY = '/?i=tt3896198&apikey=8523cbb8';
const BASE_URL = `https://www.omdbapi.com${API_KEY}`;

export const api = axios.create({
  baseURL: BASE_URL,
});
