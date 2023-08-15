import axios from "axios";

async function fetTopMusics() {
  const options = {
    method: "GET",
    url: "https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre",
    params: {
      genre: "POP",
      limit: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SECRET,
      "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export { fetTopMusics };
