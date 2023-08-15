/* eslint-disable react/prop-types */
import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useAuthContext } from "../../context/auth/AuthContextProvider";

const PlayPause = ({ handlePause, handlePlay, song }) => {
  const { state } = useAuthContext();
  return (
    <>
      {state.isPlaying &&
      (state.activeSong.heading?.title || state.activeSong.title) ===
        (song.heading?.title || song.title) ? (
        <FaPauseCircle
          size={35}
          className="text-gray-300"
          onClick={handlePause}
        />
      ) : (
        <FaPlayCircle
          size={35}
          className="text-gray-300"
          onClick={handlePlay}
        />
      )}
    </>
  );
};

export default PlayPause;
