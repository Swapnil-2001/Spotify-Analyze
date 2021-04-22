import { SET_TRACKS, ADD_TRACKS } from "../utils/constants";
import * as SpotifyFunctions from "../utils/spotifyFunctions.js";

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks,
});
export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  tracks,
});

export const getTracks = (searchTerm) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getSearchedTracks(searchTerm);
    return dispatch(setTracks(result));
  } catch (error) {
    console.log("error", error);
  }
};
