import React, { useState, useEffect } from "react";
import {
  nextSong,
  prevSong,
  playPause,
  history,
} from "../../context/actions/constants/actionCreators";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import { useAuthContext } from "../../context/auth/AuthContextProvider";

const MusicPlayer = () => {
  const { state, dispatch } = useAuthContext();
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  useEffect(() => {
    if (state.currentSongs.length) dispatch(playPause(true));
  }, [state.currentIndex]);

  const handlePlayPause = () => {
    dispatch(history(state.activeSong));
    if (!state.isActive) return;

    if (state.isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));
    dispatch(history(state.activeSong));
    if (!shuffle) {
      dispatch(nextSong((state.currentIndex + 1) % state.currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * state.currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    dispatch(history(state.activeSong));
    if (state.currentIndex === 0) {
      dispatch(prevSong(state.currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * state.currentSongs.length)));
    } else {
      dispatch(prevSong(state.currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          volume={volume}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
