import { useEffect, useState } from "react";
import { fetchMusics } from "../api/musics";

const useFetchMusics = (genreOrSearch) => {
  const [info, setinfo] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    setisLoading(true);
    fetchMusics(genreOrSearch)
      .then((data) => setinfo(data.tracks.hits))
      .catch((err) => seterror(err.message))
      .finally(() => setisLoading(false));
  }, [genreOrSearch]);

  return [info, isLoading, error];
};

export default useFetchMusics;
