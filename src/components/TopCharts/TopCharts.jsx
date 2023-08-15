import React from "react";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import SongCard from "../SongCard/SongCard";
import useFetchTopMusics from "../../hooks/useFetchTopMusics";

const TopCharts = () => {
  const [data, isFetching, error] = useFetchTopMusics();

  if (isFetching) return <Loader title="Loading songs top charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
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
