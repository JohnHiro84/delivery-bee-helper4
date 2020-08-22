import axios from 'axios';

export const signup = (userData) => {
  return axios.post('https://immense-ridge-65848.herokuapp.com/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('https://immense-ridge-65848.herokuapp.com/api/users/login', userData);
};

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
