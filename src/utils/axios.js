/**
 * axios setup to use mock service
 */

import axios from 'axios';

const baseUrl = process.env.API_URL;

const axiosServices = axios.create({ baseUrl });

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

axiosServices.interceptors.request.use((config) => {
  const token = localStorage.getItem('serviceToken');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosServices;
