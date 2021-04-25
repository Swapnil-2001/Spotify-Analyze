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
    return {};
  }
}

export async function getFeatures(id) {
  try {
    const features = await spotifyApi.getAudioFeaturesForTrack(id);
    return features;
  } catch (err) {
    console.error("Error: Attempting to get features for track!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getRecentlyPlayedTracks() {
  try {
    const tracks = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 40 });
    return tracks;
  } catch (err) {
    console.error("Error: Attempting to get recently played tracks!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getFavorites() {
  try {
    const tracks = await spotifyApi.getMyTopTracks({ limit: 40 });
    return tracks;
  } catch (err) {
    console.error("Error: Attempting to get favorite tracks!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getArtist(id) {
  try {
    const artist = await spotifyApi.getArtist(id);
    return artist;
  } catch (err) {
    console.error("Error: Attempting to get artist!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getArtistTop(id) {
  try {
    const tracks = await spotifyApi.getArtistTopTracks(id, "IN");
    return tracks;
  } catch (err) {
    console.error("Error: Attempting to get artist's top tracks!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getRelated(id) {
  try {
    const res = await spotifyApi.getArtistRelatedArtists(id);
    return res.artists;
  } catch (err) {
    console.error("Error: Attempting to get related artists!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getAlbums(id) {
  try {
    const albums = await spotifyApi.getArtistAlbums(id);
    return albums.items;
  } catch (err) {
    console.error("Error: Attempting to get albums!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getAlbum(id) {
  try {
    const album = await spotifyApi.getAlbum(id);
    return album;
  } catch (err) {
    console.error("Error: Attempting to get album!", err);
    console.error(err.stack);
    return {};
  }
}

export async function getReleases() {
  try {
    const res = await spotifyApi.getNewReleases();
    return res;
  } catch (err) {
    console.error("Error: Attempting to get new releases!", err);
    console.error(err.stack);
    return {};
  }
}
