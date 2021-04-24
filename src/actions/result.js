import {
  SET_TRACKS,
  SET_FEATURES,
  SET_MODAL,
  SET_TRACK,
  SET_RECENT_TRACKS,
  SET_FAVS,
} from "../utils/constants";
import * as SpotifyFunctions from "../utils/spotifyFunctions.js";

const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks,
});
const setFeatures = (features) => ({
  type: SET_FEATURES,
  features,
});
const setRecentTracks = (tracks) => ({
  type: SET_RECENT_TRACKS,
  tracks,
});
const setFavorites = (tracks) => ({
  type: SET_FAVS,
  tracks,
});
export const setModal = (modal) => ({
  type: SET_MODAL,
  modal,
});
export const setTrack = (track) => ({
  type: SET_TRACK,
  track,
});

export const getTracks = (searchTerm) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getSearchedTracks(searchTerm);
    return dispatch(setTracks(result));
  } catch (error) {
    console.log("error", error);
  }
};

export const getFeatures = (id) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getFeatures(id);
    return dispatch(setFeatures(result));
  } catch (error) {
    console.log("error", error);
  }
};

export const getRecentTracks = () => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getRecentlyPlayedTracks();
    return dispatch(setRecentTracks(result.items));
  } catch (error) {
    console.log("error", error);
  }
};

export const getFavorites = () => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getFavorites();
    return dispatch(setFavorites(result.items));
  } catch (error) {
    console.log("error", error);
  }
};
