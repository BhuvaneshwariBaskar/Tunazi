import React from "react";
import Lib from "../../components/lib/Lib";

// import { Music } from "../../db/music";

// import { getSadSong, getTrendingSong } from "../../utils/data";
import "./library.css";

const Library = ({ music,user}) => {
  return (
    <section className="lib">
       {/* <h1 className="Recently-title">Your playlist</h1>
          <div class="grid-item">
            {music.map((mus, index) => {
          
              return <Lib music={mus} key={index} user={user} />;
            })}
          </div> */}
      <div className="Add">
        <img src="https://img.icons8.com/carbon-copy/100/#fff/plus-2-math.png" alt=""/>
      </div>
    </section>
  );
};

export default Library;
