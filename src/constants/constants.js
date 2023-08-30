import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineSearch,
} from "react-icons/hi";
import { Around_You, HOME_PAGE, Top_Charts, HISTORY } from "./routes";
import {
  Alternative,
  Dance,
  Electronic,
  HIP_HOP,
  POP,
  Reggae,
  Rock,
  Soul,
} from "../assets/index";

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

export const PlaylistImgs = [
  { id: 1, name: "Pop", image: POP },
  { id: 2, name: "Hip-Hop", image: HIP_HOP },
  { id: 3, name: "Dance", image: Dance },
  { id: 4, name: "Electronic", image: Electronic },
  { id: 5, name: "Soul", image: Soul },
  { id: 6, name: "Alternative", image: Alternative },
  { id: 7, name: "Rock", image: Rock },
  { id: 8, name: "Reggae", image: Reggae },
];

export const inputs = [
  {
    id: 1,
    name: "userName",
    type: "text",
    placeholder: "User name",
    errorMessage:
      "Username should be 3-16 characters and shouldn`t include any special characters!",
    label: "User name",
    pattern: "^[A-Za-z0-9ა-ჰ]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage:
      "It should be a valid email addres and should matched gmail.com!",
    label: "Email",
    pattern: "[a-zA-Z0-9._+-]+[a-zA-Z0-9]+@gmail.com",
    required: true,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 leter,  1 number and 1 special character! ",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
];
