import axios from "axios";
import {base_url} from "../utils/constants.util"

export const register = (username, email, password, mobileno) =>
  axios.post(`${base_url}/register`, {
    username,
    email,
    password,
    mobileno,
  });

export const login = (mobileno, password) => {
  return axios.post(`${base_url}/login`, {
    mobileno,
    password,
  });
};
export const validateUser = async (token) =>
  await axios.get(`${base_url}/login`, {
    headers: { "x-access-token": token },
  });
