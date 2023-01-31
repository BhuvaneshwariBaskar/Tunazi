import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiperstyle.css";
import { Pagination, Autoplay } from "swiper";

const SwiperSlider=({music}) =>{
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
                      src={music.img}
                      alt=""
                    />
                  </div>
                  <div className="swipercontent">
                    <h1>{music.name}</h1>
                    <p>
                      {music.desc}
                    </p>
                    <button type="button" className="btnplay">
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