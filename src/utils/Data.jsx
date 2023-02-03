import React, { useState, useEffect } from "react";

import {Music} from "../db/music"
import { happyhits } from "../axios/user.axios";

const [trendingSong, setTrendingSong] = useState([]);
const [data, setData] = useState(null)
 
  useEffect(() => {
    const fetchdata = async ()=>{
      await happyhits().then((res)=>{
        setData(res.data)
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }
    fetchdata();
  }, []);


export async function getSadSong() {
  return await Music.filter((event) => event.genre === "SAD");
}
export async function getTrendingSong() {
  return await happyhits.filter((event) => event.year === "2022");
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

