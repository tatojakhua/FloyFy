import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import SongCard from "../SongCard/SongCard";
import useFetchMusicsByCountry from "../../hooks/useFetchMusicsByCountry";

const AroundYou = () => {
  const [country, setcountry] = useState("");
  const [loading, setloading] = useState(true);
  const [Err, setErr] = useState("");
  const [data, isFetching, error] = useFetchMusicsByCountry(country);
  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_vZiosSVH5UEZh0B2rsKNAO3UFyI7w&ipAddress=8.8.8.8"
      )
      .then((res) => setcountry(res?.data?.location?.country))
      .catch((err) => setErr(err.message))
      .finally(() => setloading(false));
  }, [country]);

  if (loading && isFetching) return <Loader title="Loading songs around you" />;
  if (Err || error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
