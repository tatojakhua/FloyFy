import React from "react";
import { useGlobalContext } from "../../context/auth/AuthContextProvider";

const Track = () => {
  const { state } = useGlobalContext();
  const subtitle =
    state.activeSong?.heading?.subtitle || state.activeSong?.subtitle;
  const title = state.activeSong?.heading?.title || state.activeSong?.title;
  return (
    <div className="flex-1 flex items-center justify-center xl:text-start sm:text-start text-center">
      <div
        className={`${
          state.isPlaying && state.isActive
            ? "animate-[spin_3s_linear_infinite]"
            : ""
        } hidden sm:block h-16 w-16 mr-4`}
      >
        <img
          src={
            state.activeSong?.images?.blurred ||
            state.activeSong?.images?.background
          }
          alt="cover art"
          className="rounded-full"
        />
      </div>
      <div className="xl:w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {state.activeSong?.heading?.title || state.activeSong?.title
            ? title.slice(0, 25)
            : "No active Song"}
        </p>
        <p className="truncate text-gray-300">
          {state.activeSong?.heading?.subtitle || state.activeSong?.subtitle
            ? subtitle.slice(0, 25)
            : "No active Song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
