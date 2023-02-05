import axios from "axios";
export const addProfile = async (formData, token) =>

  await axios.post(`http://localhost:8000/api/addProfile`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const Happyhits = async () => {
  try {
    return await axios.get(`http://localhost:8000/api/musicdata`);
  } catch (error) {
    console.log(error);
  }
};
