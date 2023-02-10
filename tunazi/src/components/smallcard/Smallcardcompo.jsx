import React from "react";
import Smallcard from "./Smallcard";
import './Smallcardcompo.css'

const Smallcardcompo = ({ music,setCursong ,user }) => {
  return (
    <>
    <h1 className="Recently-title">Recently Played</h1>
          <div class="grid-item">
            {music.map((mus, index) => {
          
              return <Smallcard music={mus} key={index} user={user} setCursong={setCursong}/>;
            })}
          </div>
    </>
  );
};

export default Smallcardcompo;
