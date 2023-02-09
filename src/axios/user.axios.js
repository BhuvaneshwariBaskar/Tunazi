import axios from "axios";
import {base_url} from "../utils/constants.util"

export const addProfile = async (formData, token) =>
  await axios.post(`${base_url}/addProfile`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateHistory = async (history, user_id, token) =>
  await axios.post(
    `${base_url}/history/${user_id}`,
    { history },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
export const getHistory = async (user_id, token) =>
  await axios.get(`${base_url}/history/${user_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateFavPost = async (user_id, favorites, token) =>
  await axios.post(
    `${base_url}/favorites/${user_id}`,
    { favorites },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

export const getFav = async (user_id, token) =>
  await axios.get(`${base_url}/favorites/${user_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
