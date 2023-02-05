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
              src={lan.img}
              alt=""
            />
            <Link to="/" className="Langname">
              Latest <b>{lan.ln}</b> <br />
              Songs
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default LangCard;
