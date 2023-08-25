/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/auth/AuthContextProvider";

const Player = ({
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const { state } = useGlobalContext();
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions

  useEffect(() => {
    if (ref.current) {
      if (state.isPlaying) {
        ref.current
          .play()
          .then(() => {})
          .catch(() => {});
      } else {
        ref.current.pause();
      }
    }
  }, [state.activeSong, state.isPlaying]);

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);
  return (
    <audio
      src={
        state.activeSong?.stores?.apple?.previewurl ||
        state.activeSong?.hub?.actions[1]?.uri
      }
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
