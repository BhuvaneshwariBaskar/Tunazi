import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./audioplayer.css";
import { updateHistory } from "../../axios/user.axios";
import { useDispatch } from "react-redux";

const Audioplayer = ({ cursong, user }) => {
  const dispatch = useDispatch();
  
  const handlePlay = async () => {
    const history = JSON.parse(user.history);
    console.log("🚀 ~ file: Audioplayer.jsx:12 ~ handlePlay ~ history", history)
    history.unshift(cursong.music_id);
    await updateHistory(history, user.user_id, user.token).then((res) => {
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, history: JSON.stringify(history) },
      });
    });
  };
  return (
    <AudioPlayer
      src={cursong && cursong.link}
      onPlay={handlePlay}
      autoPlay={false}
      // other props here
    />
  );
};

export default Audioplayer;
