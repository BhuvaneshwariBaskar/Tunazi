import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiperstyle.css";
import { Pagination, Autoplay } from "swiper";
import { useSelector } from "react-redux";

const SwiperSlider = ({ musics, setCursong, fetchRecentlyPlayed }) => {
  // const {user} = useSelector((state)=>({...state}))
  const handleclick = (data) => {
    setCursong(data);
    fetchRecentlyPlayed();
  };
  return (
    <Swiper
      spaceBetween={30}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {musics.map((music) => {
        return (
          <>
            <SwiperSlide>
              <div className="swipersec">
                <div className="imageswiper">
                  <img src={music.thumbnail} alt="" />
                </div>
                <div className="swipercontent">
                  <h1>{music.title}</h1>
                  <p>{music.artist}</p>
                  <button
                    type="button"
                    className="btnplay"
                    onClick={() => handleclick(music)}
                  >
                    Play
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};
export default SwiperSlider;
