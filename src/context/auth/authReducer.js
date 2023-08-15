/* eslint-disable no-fallthrough */
import { parseJWT, toggleLocalStorage } from "../../utils/jwt";
import {
  ADDFAVORITEMUSIC,
  Authenticate,
  CLEARTHEHISTORY,
  HISTORY,
  Log_In,
  Log_Out,
  NEXTSONG,
  PLAYPAUSE,
  PREVSONG,
  REMOVEFAVORITEMUSIC,
  SELECTGENRELISTID,
  SETACTIVESONG,
} from "../actions/constants/actions";

const authReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case Log_In: {
      const { token } = payload;
      const user = parseJWT(token);
      toggleLocalStorage(token);
      return { ...state, isAuthenticated: true, user };
    }
    case Log_Out: {
      toggleLocalStorage();
      return { ...state, isAuthenticated: false, user: null };
    }
    case Authenticate: {
      const user = parseJWT(payload);
      return { ...state, isAuthenticated: true, user };
    }
    case SETACTIVESONG: {
      return {
        ...state,
        activeSong: payload.song,
        currentIndex: payload.i,
        isActive: true,
        currentSongs: payload.data,
      };
    }
    case NEXTSONG: {
      return {
        ...state,
        currentIndex: payload,
        isActive: true,
        activeSong: state?.currentSongs?.[payload],
      };
    }
    case PREVSONG: {
      return {
        ...state,
        activeSong: state?.currentSongs?.[payload],
        currentIndex: payload,
        isActive: true,
      };
    }
    case PLAYPAUSE: {
      return { ...state, isPlaying: payload };
    }
    case SELECTGENRELISTID: {
      return { ...state, genreListId: payload };
    }
    case ADDFAVORITEMUSIC: {
      if (
        !state.favoriteMusics
          .map((item) => item.key)
          .includes(state.activeSong.key)
      ) {
        return {
          ...state,
          favoriteMusics: [...state.favoriteMusics, state.activeSong],
        };
      }
      return {
        ...state,
        favoriteMusics: state.favoriteMusics.filter(
          (music) => music !== state.activeSong
        ),
      };
    }
    case CLEARTHEHISTORY: {
      return { ...state, history: [] };
    }
    case REMOVEFAVORITEMUSIC: {
      return {
        ...state,
        favoriteMusics: state.favoriteMusics.filter(
          (music) => music !== payload
        ),
      };
    }

    case HISTORY: {
      if (
        !state.history.map((item) => item.key).includes(state.activeSong.key)
      ) {
        return { ...state, history: [...state.history, payload] };
      }
      return { ...state };
    }

    default:
      break;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
  favoriteMusics: [],
  history: [],
};

export { authReducer, initialState };
