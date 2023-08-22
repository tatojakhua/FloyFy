import React from "react";
import useFetchMusics from "../../hooks/useFetchMusics";
import { genres } from "../../constants/constants";
import SongCard from "../SongCard/SongCard";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { selectGenreListId } from "../../context/actions/constants/actionCreators";

const Discover = () => {
  const { state, dispatch } = useAuthContext();
  const [musics, isLoading, error] = useFetchMusics(state.genreListId || "POP");
  if (isLoading) return <Loader title="Loading Songs..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">
          Discover {state.genreListId || "POP"}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={state.genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {musics?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} data={musics} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
