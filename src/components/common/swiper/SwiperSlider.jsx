import React,{useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiperstyle.css";
import { Pagination, Autoplay } from "swiper";
import Audioplayer from "../../../components/Audioplayer/Audioplayer"

const SwiperSlider=({music,setCursong}) =>{
  console.log(music,"HELLO")
  const Handleclick=(data)=>{
    setCursong(data)
  }
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
        {music.map((music, index) => {
          
          return (
            <>
              <SwiperSlide>
                <div className="swipersec">
                  <div className="imageswiper">
                    <img
                      src={music.imglink}
                      alt=""
                    />
                  </div>
                  <div className="swipercontent">
                    <h1>{music.title}</h1>
                    <p>
                      {music.artist}
                    </p>
                    <button type="button" className="btnplay" onClick={()=>Handleclick(music.link)}>
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
}
export default SwiperSlider;