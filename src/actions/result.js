import { SET_TRACKS, ADD_TRACKS, SET_FEATURES } from "../utils/constants";
import * as SpotifyFunctions from "../utils/spotifyFunctions.js";

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks,
});
export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  tracks,
});
export const setFeatures = (features) => ({
  type: SET_FEATURES,
  features,
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
