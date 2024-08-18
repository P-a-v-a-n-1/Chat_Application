



import axiosInstance from './axiosConfig';
import { toast } from 'react-toastify';

export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post('/auth/login', loginData);
    const { token } = response.data;

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/signUp', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};