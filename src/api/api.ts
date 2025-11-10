import axios from 'axios';

const API = axios.create({ 
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000'
});

export const fetchProducts = () => API.get('/api/products');
export const fetchProductById = (id: string) => API.get(`/api/products/${id}`);
