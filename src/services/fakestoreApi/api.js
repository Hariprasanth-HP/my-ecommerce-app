// services/fakeStoreApi.js
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const getProducts = () => {
  return axios.get(`${API_URL}/products`);
};

export const getProductById = (id) => {
  return axios.get(`${API_URL}/products/${id}`);
};
