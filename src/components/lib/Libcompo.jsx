import React from "react";
import Lib from "./Lib";
import './Libcompo.css'

const LibCompo = ({ music,user }) => {
  return (
    <>
    <h1 className="Recently-title">Your playlist</h1>
          <div class="grid-item">
            {music.map((mus, index) => {
          
              return <Lib music={mus} key={index} user={user} />;
            })}
          </div>
    </>
  );
};

export default LibCompo;