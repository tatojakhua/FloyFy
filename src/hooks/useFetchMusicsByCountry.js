import { useEffect, useState } from "react";
import { fetchMusicsByCountry } from "../api/musicsByCountry";

const useFetchMusicsByCountry = (country) => {
  const [info, setinfo] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    if (country) {
      fetchMusicsByCountry(country)
        .then((data) => setinfo(data.tracks))
        .catch((err) => seterror(err.message))
        .finally(() => setisLoading(false));
    }
  }, [country]);
  return [info, isLoading, error];
};

export default useFetchMusicsByCountry;
