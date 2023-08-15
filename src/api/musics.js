import axios from "axios";

async function fetchMusics(genreOrSearch) {
  const options = {
    method: "GET",
    url: "https://shazam-core7.p.rapidapi.com/search",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SECRET,
      "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com",
    },
    params: {
      term: `${genreOrSearch || "POP"}`,
      limit: "50",
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export { fetchMusics };
