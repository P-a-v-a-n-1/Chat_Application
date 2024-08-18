

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Change this URL to your backend URL in production
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
