import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./audioplayer.css";
import { updateHistory ,updateFavPost} from "../../axios/user.axios";
import { useDispatch } from "react-redux";

import { IoIosHeart } from 'react-icons/io';
import { IoMdHeartEmpty } from 'react-icons/io';

const Audioplayer = ({ cursong, user }) => {
  const dispatch = useDispatch();
  // const addToFav = async (cursong.music_id) => {
	// 	const favorites = JSON.parse(user.favorites)
	// 		? [cursong.music_id, ...JSON.parse(user.favorites)]
	// 		: [cursong.music_id];
	// 	await updateFavPost(user.user_id, favorites, user.token).then((res) => {
	// 		dispatch({
	// 			type: 'CREATE_USER',
	// 			payload: { ...user, favorites: JSON.stringify(favorites) }
	// 		});
	// 	});
	// };
	// const removeFav = async (cursong.music_id) => {
	// 	const favorites = JSON.parse(user.favorites)
	// 		? JSON.parse(user.favorites).filter((fav) => fav !== cursong.music_id)
	// 		: [];
	// 	await updateFavPost(user.user_id, favorites, user.token).then((res) => {
	// 		dispatch({
	// 			type: 'CREATE_USER',
	// 			payload: { ...user, favorites: JSON.stringify(favorites) }
	// 		});
	// 	});
	// };
  const handlePlay = async () => {
    const history = JSON.parse(user.history) ? JSON.parse(user.history) : [];
    history.unshift(cursong.music_id);
    await updateHistory(history, user.user_id, user.token).then((res) => {
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, history: JSON.stringify(history) },
      });
    });
  };
  return (
    <section className="audiocon">
      <div className="imgname">
          <img src={cursong.thumnail} alt="" className="cursongimage" />
        <div className="Namecon">
          <h1 className="cursongname">{cursong.title}</h1>
          <h1 className="cursongartist">{cursong.artist}</h1>
        </div>
        {/* {JSON.parse(user.favorites) &&
					JSON.parse(user.favorites).some((id) => id === music.music_id) ? (
						<IoIosHeart
							className='fav-Likebutton'
							onClick={() => removeFav(music.music_id)}
						/>
					) : (
						<IoMdHeartEmpty
							className='fav-Likebutton'
							onClick={() => addToFav(music.music_id)}
						/>
					)} */}
      </div>
      <AudioPlayer
        src={cursong && cursong.link}
        onPlay={handlePlay}
        autoPlay={false}
        // other props here
      />
    </section>
  );
};

export default Audioplayer;
