import React from "react";
import SongCard from "../SongCard/SongCard";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { clearTheHistory } from "../../context/actions/constants/actionCreators";
import { HiOutlineTrash } from "react-icons/hi";

const TopCharts = () => {
  const { state, dispatch } = useAuthContext();
  const data = state.history;
  const handleClearHistory = () => {
    dispatch(clearTheHistory());
  };
  if (data?.length == 0) {
    return (
      <h1 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        There is not history yet.
      </h1>
    );
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        History{" "}
        <HiOutlineTrash
          onClick={handleClearHistory}
          className="cursor-pointer p-1 mt-3"
        />
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
