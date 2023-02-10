import React from "react";
import Smallcard from "./Smallcard";
import './Smallcardcompo.css'

const Smallcardcompo = ({ music ,user }) => {
  return (
    <>
    <h1 className="Recently-title">Recently Played</h1>
          <div class="grid-item">
            {music.map((mus, index) => {
          
              return <Smallcard music={mus} key={index} user={user} />;
            })}
          </div>
    </>
  );
};

export default Smallcardcompo;
