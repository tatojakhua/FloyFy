import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineSearch,
} from "react-icons/hi";
import {
  Around_You,
  HOME_PAGE,
  Top_Charts,
  HISTORY,
} from "../constants/routes";

export const genres = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
];

export const links = [
  { name: "Discover", to: HOME_PAGE, icon: HiOutlineHome },
  { name: "Around You", to: Around_You, icon: HiOutlinePhotograph },
  { name: "History", to: HISTORY, icon: HiOutlineSearch },
  { name: "Top Charts", to: Top_Charts, icon: HiOutlineHashtag },
];
