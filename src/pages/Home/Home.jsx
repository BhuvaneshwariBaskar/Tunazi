import React, { useState, useEffect } from "react";
import SwiperSlider from "../../components/common/swiper/SwiperSlider";
import Smallcardcompo from "../../components/smallcard/Smallcardcompo";
import { fetchMusic } from "../../axios/music.axios";
import { getHistory } from "../../axios/user.axios";
// import { getSadSong } from "../../utils/Data";
import { useSelector } from "react-redux";

import "swiper/css/bundle";
import "./home.css";

const Home = ({ setCursong }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [trendingSong, setTrendingSong] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  useEffect(() => {
    getHistory(user.user_id,user.token).then((res) => {
      setRecentlyPlayed(res.data);
      
    });
    fetchMusic(user.token).then((res) => {
      const data = res.data.filter((event) => event.year === 2022);
      setTrendingSong(data.slice(2, 6));
    });
  }, []);

  return (
    <section className="homesec">
      <div className="trending_img">
        {trendingSong && trendingSong ? (
          <SwiperSlider setCursong={setCursong} musics={trendingSong} />
        ) : null}
      </div>
      <div className="recently-played">
        { recentlyPlayed && recentlyPlayed ? (
          <Smallcardcompo music={recentlyPlayed} setCursong={setCursong} user={user} />
        ) : (
          <h1 className="nohistory"> There is no recently played songs</h1>
        )}
      </div>
    </section>
  );
};

export default Home;
