import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { updateFavPost } from "../../axios/user.axios";
import { useDispatch } from "react-redux";
import "./Favcard.css";

const Favcard = ({ music, user }) => {
  const dispatch = useDispatch();

  const addToFav = async (music_id) => {
    const favorites = JSON.parse(user.favorites)
      ? [music_id, ...JSON.parse(user.favorites)]
      : [music_id];
    await updateFavPost(user.user_id, favorites, user.token).then((res) => {
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, favorites: JSON.stringify(favorites) },
      });
    });
  };
  const removeFav = async (music_id) => {
    const favorites = JSON.parse(user.favorites)
      ? JSON.parse(user.favorites).filter((fav) => fav !== music_id)
      : [];
    await updateFavPost(user.user_id, favorites, user.token).then((res) => {
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, favorites: JSON.stringify(favorites) },
      });
    });
  };
  return (
    <section className="fav-card">
      <div className="fav-cardsec">
        <img src={music.thumbnail} alt="" />
      </div>
      <div className="fav-content">
        <div className="fav-innercontent">
          <div className="favtext">
            <p className="fav-title">{music.title}</p>
            <p className="fav-artist">
              {music.artist}-{music.year}
            </p>
          </div>
          {JSON.parse(user.favorites) &&
          JSON.parse(user.favorites).some((id) => id === music.music_id) ? (
            <IoIosHeart
              className="fav-Likebutton"
              onClick={() => removeFav(music.music_id)}
            />
          ) : (
            <IoMdHeartEmpty
              className="fav-Likebutton"
              onClick={() => addToFav(music.music_id)}
            />  
          )}

          <AiFillPlayCircle className="fav-playbutton" />
        </div>
      </div>
    </section>
  );
};
export default Favcard;
