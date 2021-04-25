import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

export function setAccessToken(accessToken) {
  spotifyApi.setAccessToken(accessToken);
}

export async function getSearchedTracks(searchedTrack) {
  try {
    const track = await spotifyApi.searchTracks(searchedTrack, { limit: 50 });
    return track;
  } catch (err) {
    console.error("Error: Attempting to get searched tracks!", err);
    console.error(err.stack);
    return null;
  }
}

export async function getFeatures(id) {
  try {
    const features = await spotifyApi.getAudioFeaturesForTrack(id);
    return features;
  } catch (err) {
    console.error("Error: Attempting to get features for track!", err);
    console.error(err.stack);
    return null;
  }
}

export async function getRecentlyPlayedTracks() {
  try {
    const tracks = await spotifyApi.getMyRecentlyPlayedTracks();
    return tracks;
  } catch (err) {
    console.error("Error: Attempting to get recently played tracks!", err);
    console.error(err.stack);
    return null;
  }
}

export async function getFavorites() {
  try {
    const tracks = await spotifyApi.getMyTopTracks();
    return tracks;
  } catch (err) {
    console.error("Error: Attempting to get favorite tracks!", err);
    console.error(err.stack);
    return null;
  }
}

export async function getArtist(id) {
  try {
    const artist = await spotifyApi.getArtist(id);
    return artist;
  } catch (err) {
    console.error("Error: Attempting to get artist!", err);
    console.error(err.stack);
    return null;
  }
}

export async function getArtistTop(id) {
  try {
    const tracks = await spotifyApi.getArtistTopTracks(id, "IN");
    return tracks;
  } catch (err) {
    console.error("Error: Attempting to get artist's top tracks!", err);
    console.error(err.stack);
    return null;
  }
}
