import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./pinkCard.css";

const PinkCard = ({ music }) => {
  return (
    <section class="cardclass">
      <img src={music.img} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <AiFillPlayCircle />
          <div class="card__header-text">
            <h3 class="card__title">{music.name}</h3>
            <span class="card__status">{music.author_name}</span>
          </div>
        </div>
        <p class="card__description">{music.desc}</p>
      </div>
    </section>
  );
};
export default PinkCard;
