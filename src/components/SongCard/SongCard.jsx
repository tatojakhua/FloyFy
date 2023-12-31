/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import { useGlobalContext } from "../../context/auth/AuthContextProvider";
import PlayPause from "../PlayPause/PlayPause";
import {
  playPause,
  setActiveSong,
} from "../../context/actions/constants/actionCreators";

const SongCard = ({ song, i, data }) => {
  const { state, dispatch } = useGlobalContext();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause((prev) => !prev));
  };

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={handlePlayClick}
      onDoubleClick={handlePauseClick}
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            (state.activeSong?.heading?.title || state.activeSong?.title) ===
            (song?.heading?.title || song?.title)
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            song={song}
          />
        </div>
        <img
          alt="song_img"
          src={song?.images?.blurred || song?.images?.background}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {song?.heading?.title || song?.title}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {song?.heading?.subtitle || song.subtitle}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
