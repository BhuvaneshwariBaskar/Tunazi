import React from "react";
import PinkCard from "./PinkCard";
import './PinkCardCompo.css'

const PinkCardCompo = ({ savedata ,setCursong,user,fetchRecentlyPlayed,setRecentlyPlayed}) => {
  return (
    <>
          <div class="grid-item2">
            {savedata.map((mus, index) => {
        
              return <PinkCard fetchRecentlyPlayed={fetchRecentlyPlayed} music={mus} key={index} setCursong={setCursong} user={user} setRecentlyPlayed={setRecentlyPlayed}  />;
            })}
          </div>
    </>
  );
};

export default PinkCardCompo;
