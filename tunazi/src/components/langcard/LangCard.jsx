import React from "react";
import "./langCard.css";
import { Link } from "react-router-dom";

const LangCard = ({lan}) => {
  console.log(lan,"Language");
  return (
    <section
      className="langcard"
    >
      <div className="flexgive">
        <div className="borderlang">
          <div className="langimg">
            <img
              src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/03/bollywood-songs-1554034044.jpg"
              alt=""
            />
            <Link to="/" className="Langname">
              Latest <b>{lan}</b> <br />
              Songs
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default LangCard;
