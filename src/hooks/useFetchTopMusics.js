import { useEffect, useState } from "react";
import { fetTopMusics } from "../api/topMusics";

const useFetchTopMusics = () => {
  const [info, setinfo] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    fetTopMusics()
      .then((data) => setinfo(data.tracks))
      .catch((err) => seterror(err.message))
      .finally(() => setisLoading(false));
  }, []);
  return [info, isLoading, error];
};

export default useFetchTopMusics;
