import axios from "axios";

export const fetchMusic = async (token) =>
  await axios.get(`http://localhost:8000/api/music`, {
    headers: { Authorization: `Bearer ${token}` },
  });
