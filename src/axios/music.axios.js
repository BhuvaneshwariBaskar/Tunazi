import axios from "axios";
import { base_url } from "../utils/constants.util";

export const fetchMusic = async (token) =>
  await axios.get(`${base_url}/music`, {
    headers: { Authorization: `Bearer ${token}` },
  });
