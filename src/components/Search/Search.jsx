import React from "react";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import SongCard from "../SongCard/SongCard";
import { useParams } from "react-router-dom";
import useFetchMusics from "../../hooks/useFetchMusics";

const Search = () => {
  const { searchTerm } = useParams();
  const [data, isFetching, error] = useFetchMusics(searchTerm);

  if (isFetching) return <Loader title="Loading songs" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Search;
