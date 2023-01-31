import {Music} from "../db/music"

export async function getSadSong() {
  return await Music.filter((event) => event.genre === "SAD");
}
export async function getTrendingSong() {
  return await Music.filter((event) => event.year === "2022");
}
export function getRomanticSong() {
  return  Music.filter((event) => event.genre === "ROMANTIC");
}
export function getHappySong() {
  return Music.filter((event) => event.genre === "HAPPY");
}
export function getPartySong() {
  return Music.filter((event) => event.genre === "PARTY");
}

