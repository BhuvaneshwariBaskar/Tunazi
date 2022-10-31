import axios from "axios";

export const register = (username, email, password, mobileno) => {
  console.log(username, email, password, mobileno);
  return axios.post("http://localhost:8000/api/register", {
    username,
    email,
    password,
    mobileno,
  });
};

export const login = (mobileno, password) => {
  return axios.post("http://localhost:8000/api/login", {
    mobileno,
    password,
  });
};
export const validateUser = async (token) =>
    await axios.get(`http://localhost:8000/api/login`, { headers: { "x-access-token": token } })