/* eslint-disable react/prop-types */
import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { addFavoriteMusic } from "../../context/actions/constants/actionCreators";

const Controls = ({
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  const { state, dispatch } = useAuthContext();
  const handleAddFavoriteMusic = () => {
    dispatch(addFavoriteMusic());
  };
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <BsArrowRepeat
        size={20}
        color={repeat ? "red" : "white"}
        onClick={() => setRepeat((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
      {state.currentSongs?.length && (
        <MdSkipPrevious
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}
      {state.isPlaying ? (
        <BsFillPauseFill
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        <BsFillPlayFill
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}
      {state.currentSongs?.length && (
        <MdSkipNext
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      )}
      <BsShuffle
        size={20}
        color={shuffle ? "red" : "white"}
        onClick={() => setShuffle((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
      <HiOutlineHeart
        size={25}
        color={
          state.favoriteMusics
            .map((item) => item.key)
            .includes(state.activeSong.key)
            ? "red"
            : "white"
        }
        onClick={handleAddFavoriteMusic}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Controls;
