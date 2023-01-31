import React, { useState, useEffect } from "react";
// import Audioplayer from "../../components/Audioplayer/audioplayer";
import SwiperSlider from "../../components/common/swiper/SwiperSlider";
import Smallcardcompo from "../../components/smallcard/Smallcardcompo";

import { getSadSong, getTrendingSong } from "../../utils/data";
import "swiper/css/bundle";
import "./home.css";

const Home = ({ music }) => {
  // const lang = ["Hindi","Tamil","English","Telugu","Kannada","Marathi"]
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const [trendingSong, setTrendingSong] = useState([]);
  useEffect(() => {
    getSadSong().then((res) => {
      console.log(res, "res");
      setRecentlyPlayed(res);
    });
    getTrendingSong().then((res) => {
      setTrendingSong(res);
    });
  }, []);

  return (
    <section className="homesec">
      <div className="trending_img">
        <SwiperSlider music={trendingSong} />
      </div>
      <div className="recently-played">
        <h1 className="Recently-title">Recently Played</h1>
        <Smallcardcompo music={recentlyPlayed} />
      </div>
    
    </section>
  );
};

export default Home;
