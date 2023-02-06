import axios from "axios";
export const addProfile = async (formData, token) =>
  await axios.post(`http://localhost:8000/api/addProfile`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateHistory = async (history, user_id, token) =>
  await axios.post(
    `http://localhost:8000/api/history/${user_id}`,
    { history },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
export const getHistory = async ( user_id, token) =>
  await axios.get(
    `http://localhost:8000/api/history/${user_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
