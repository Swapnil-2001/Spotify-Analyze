import { SET_TRACKS, SET_FEATURES, SET_MODAL } from "../utils/constants";
import * as SpotifyFunctions from "../utils/spotifyFunctions.js";

const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks,
});
const setFeatures = (features) => ({
  type: SET_FEATURES,
  features,
});
export const setModal = (modal) => ({
  type: SET_MODAL,
  modal,
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
