import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users';

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, {email, password});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {email, password});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error retrieving users:', error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(BASE_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
  }
};
