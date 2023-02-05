import React, { useState, useEffect } from "react";
// import Audioplayer from "../../components/Audioplayer/audioplayer";
import SwiperSlider from "../../components/common/swiper/SwiperSlider";
import Smallcardcompo from "../../components/smallcard/Smallcardcompo";
import { Happyhits } from "../../axios/user.axios";
import { getSadSong} from "../../utils/Data";
import "swiper/css/bundle";
import "./home.css";
import PinkCard from "../../components/pinkcard/PinkCard";

const Home = ({setCursong,setRecentlyPlayed}) => {
  const [trendingSong, setTrendingSong] = useState(null);
  
//  const [data, setData] = useState(null)
 
//   useEffect(() => {
//     const fetchdata = async ()=>{
//       await happyhits().then((res)=>{
//         setData(res.data)
//         console.log(res.data);
//       }).catch((err)=>{
//         console.log(err);
//       })
//     }
//     fetchdata();
//   }, []);


  useEffect(() => {
    getSadSong().then((res) => {
      console.log(res, "res");
      setRecentlyPlayed(res);
    });
    Happyhits().then((res) => {

      const data=res.data.filter((event) => event.year === 2022);
      setTrendingSong(data.slice(2,6));
    });
  }, []);

  return (
    <section className="homesec">
      <div className="trending_img">
        {trendingSong && trendingSong ? <SwiperSlider setCursong={setCursong} music={trendingSong} />: null}
      </div>
      <div className="recently-played">
        <h1 className="Recently-title">Recently Played</h1>
        <Smallcardcompo music={trendingSong} />
      </div>
    </section>
  );
};

export default Home;
