import React, { useState, useEffect } from "react";
import "./Favorites.css";
import Favcompo from "../../components/FavCard/Favcompo";
import { useSelector } from "react-redux";
import { getFav } from "../../axios/user.axios";

const Favorites = ({ setCursong, fetchRecentlyPlayed }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [favPlayed, setFavPlayed] = useState(null);
  useEffect(() => {
    getFav(user.user_id, user.token).then((res) => {
      setFavPlayed(res.data);
    });
  }, []);

  return (
    <section className="Fav-class">
      <h1 className="Fav-title">Your Favorites</h1>
      <div className="fav-songs">
        {favPlayed && favPlayed ? (
          <Favcompo
            music={favPlayed}
            user={user}
            fetchRecentlyPlayed={fetchRecentlyPlayed}
            setCursong={setCursong}
          />
        ) : (
          <h1 className="nofav"> Start to like your favorite songs!!!</h1>
        )}
      </div>
    </section>
  );
};

export default Favorites;
