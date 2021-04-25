import {
  CLEAR_ARTIST,
  SET_TRACKS,
  SET_FEATURES,
  SET_MODAL,
  SET_TRACK,
  SET_RECENT_TRACKS,
  SET_FAVS,
  SET_ARTIST,
  SET_ARTIST_TOP,
  SET_RELATED,
  SET_ALBUMS,
  SET_ALBUM,
  CLEAR_ALBUM,
  CLEAR_SEARCH,
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
const setArtist = (artist) => ({
  type: SET_ARTIST,
  artist,
});
const setArtistTop = (tracks) => ({
  type: SET_ARTIST_TOP,
  tracks,
});
const setRelated = (artists) => ({
  type: SET_RELATED,
  artists,
});
const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums,
});
const setAlbum = (album) => ({
  type: SET_ALBUM,
  album,
});
export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});
export const setModal = (modal) => ({
  type: SET_MODAL,
  modal,
});
export const setTrack = (track) => ({
  type: SET_TRACK,
  track,
});
export const removeArtist = () => ({
  type: CLEAR_ARTIST,
});
export const clearAlbum = () => ({
  type: CLEAR_ALBUM,
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

export const getArtist = (id) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getArtist(id);
    return dispatch(setArtist(result));
  } catch (error) {
    console.log("error", error);
  }
};

export const getArtistTop = (id) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getArtistTop(id);
    return dispatch(setArtistTop(result.tracks));
  } catch (error) {
    console.log("error", error);
  }
};

export const getRelated = (id) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getRelated(id);
    return dispatch(setRelated(result));
  } catch (error) {
    console.log("error", error);
  }
};

export const getAlbums = (id) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getAlbums(id);
    return dispatch(setAlbums(result));
  } catch (error) {
    console.log("error", error);
  }
};

export const getAlbum = (id) => async (dispatch) => {
  try {
    const result = await SpotifyFunctions.getAlbum(id);
    return dispatch(setAlbum(result));
  } catch (error) {
    console.log("error", error);
  }
};
