import axios from 'axios';
import { getValidTokenData } from '../reducers/authentication/authenticationSlice';

const API = import.meta.env.VITE_URL_API;

// Create the axios instance
const authAxios = axios.create({
  baseURL: API,
});

// Function to update the auth token
export const updateAuthToken = (token) => {
  if (token) {
    authAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete authAxios.defaults.headers.common['Authorization'];
  }
};

authAxios.interceptors.request.use(
  (config) => {
    const tokenData = getValidTokenData();
    if (tokenData) {
      config.headers['Authorization'] = `Bearer ${tokenData.token}`;
    } else {
      delete config.headers['Authorization'];
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login page)
      console.error('Unauthorized access. Redirecting to login...');
      // You might want to dispatch a logout action here or redirect to the login page
    }
    return Promise.reject(error);
  }
);

export default authAxios;
