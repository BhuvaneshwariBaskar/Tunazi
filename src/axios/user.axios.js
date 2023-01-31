import axios from "axios";
export const addProfile = async (image, token) =>

  await axios.post(`http://localhost:8000/api/addProfile`, image, {
    headers: { Authorization: `Bearer ${token}` },
  });
