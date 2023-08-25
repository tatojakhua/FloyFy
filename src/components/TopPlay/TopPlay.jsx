/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/auth/AuthContextProvider";
import PlayPause from "../PlayPause/PlayPause";
import useFetchMusics from "../../hooks/useFetchMusics";
import {
  playPause,
  removeFavoriteMusic,
  setActiveSong,
} from "../../context/actions/constants/actionCreators";
import { HiOutlineTrash } from "react-icons/hi";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  handleRemoveFavoriteMusic,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e]  ${
      (activeSong?.heading?.title || activeSong?.title) ===
      (song?.heading?.title || song?.title)
        ? "bg-[#4c426e]"
        : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        src={song?.images?.blurred || song?.images?.background}
        alt={song.title}
        className="w-20 h-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <p className="text-xl font-bold text-white">
          {song?.heading?.title || song?.title}
        </p>
        <p className="text-base text-gray-300 mt-1">
          {song?.heading?.subtitle || song?.subtitle}
        </p>
      </div>
    </div>
    <HiOutlineTrash
      size={20}
      color="black"
      onClick={handleRemoveFavoriteMusic}
      className="cursor-pointer mr-2"
    />
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const { state, dispatch } = useGlobalContext();
  const [data] = useFetchMusics();
  const divRef = useRef(null);
  const topPlay = state.favoriteMusics;

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handleRemoveFavoriteMusic = (song) => {
    dispatch(removeFavoriteMusic(song));
  };
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col ">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl ">Favorites</h2>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlay?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={state.isPlaying}
              activeSong={state.activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
              handleRemoveFavoriteMusic={() => handleRemoveFavoriteMusic(song)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
