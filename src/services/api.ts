import axios from 'axios';
import type { Product } from '../types/product';

// Use environment variable for production
const API_URL = import.meta.env.PROD 
  ? 'https://frozenbasket-api.onrender.com/api'  // Your Render URL
  : '/api';

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(`${API_URL}/products`);
  return data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get<Product>(`${API_URL}/products/${id}`);
  return data;
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(`${API_URL}/products`, {
    params: { category }
  });
  return data;
};

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const submitContact = async (formData: ContactForm): Promise<ContactResponse> => {
  const { data } = await axios.post<ContactResponse>(`${API_URL}/contact`, formData);
  return data;
};