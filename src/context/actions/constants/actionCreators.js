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
} from "./actions";

const LogIn = (payload) => {
  return {
    type: Log_In,
    payload,
  };
};
const LogOut = () => {
  return {
    type: Log_Out,
  };
};
const authenticateAction = (token) => {
  return {
    type: Authenticate,
    payload: token,
  };
};

const setActiveSong = (payload) => {
  return {
    type: SETACTIVESONG,
    payload,
  };
};

const nextSong = (payload) => {
  return {
    type: NEXTSONG,
    payload,
  };
};

const prevSong = (payload) => {
  return {
    type: PREVSONG,
    payload,
  };
};

const playPause = (payload) => {
  return {
    type: PLAYPAUSE,
    payload,
  };
};

const selectGenreListId = (payload) => {
  return {
    type: SELECTGENRELISTID,
    payload,
  };
};
const addFavoriteMusic = () => {
  return {
    type: ADDFAVORITEMUSIC,
  };
};
const history = (payload) => {
  return {
    type: HISTORY,
    payload,
  };
};
const clearTheHistory = () => {
  return {
    type: CLEARTHEHISTORY,
  };
};
const removeFavoriteMusic = (payload) => {
  return {
    type: REMOVEFAVORITEMUSIC,
    payload,
  };
};
export {
  LogIn,
  LogOut,
  authenticateAction,
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
  addFavoriteMusic,
  history,
  clearTheHistory,
  removeFavoriteMusic,
};
