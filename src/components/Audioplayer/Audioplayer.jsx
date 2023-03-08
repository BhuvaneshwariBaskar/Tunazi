import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './audioplayer.css';
import { updateHistory } from '../../axios/user.axios';
import { useDispatch } from 'react-redux';

// import { IoIosHeart } from 'react-icons/io';
// import { IoMdHeartEmpty } from 'react-icons/io';

const Audioplayer = ({ cursong, user, isNavOpened }) => {
	const dispatch = useDispatch();

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
    <>
      {/*  */}
      <AudioPlayer
        src={cursong && cursong.link}
        onPlay={handlePlay}
        autoPlay={false}

        // other props here
      />
    </>
  );
};

export default Audioplayer;
