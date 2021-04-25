import React, { useState } from "react";
import {
  getRecentTracks,
  getFavorites,
  getArtist,
  getArtistTop,
  getTracks,
  removeArtist,
} from "../../actions/result";
import { connect } from "react-redux";
import Recent from "../Lists/Recent/Recent";
import Favorites from "../Lists/Favorites/Favorites";
import Artist from "../Artist/Artist";
import "./Main.css";

const Main = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { tracks, recent, favorites, artist, dispatch } = props;
  const loadRecent = () => {
    if (Object.keys(recent).length === 0) {
      dispatch(getRecentTracks());
    }
    dispatch(removeArtist());
    setSelectedCategory("recent");
  };
  const loadFavs = () => {
    if (Object.keys(favorites).length === 0) {
      dispatch(getFavorites());
    }
    dispatch(removeArtist());
    setSelectedCategory("favorites");
  };
  const loadArtist = (id, name) => {
    dispatch(getArtist(id));
    dispatch(getArtistTop(id));
    dispatch(getTracks(name));
  };
  console.log(tracks);

  return (
    <>
      <div className="navbar">
        <button onClick={loadRecent}>Recently played</button>
        <button onClick={loadFavs}>Favorites</button>
      </div>
      <div
        className={`${
          selectedCategory === "recent" ? "track__wrapper__div" : "hide"
        }`}
      >
        {recent.length > 0 && (
          <Recent loadArtist={loadArtist} recent={recent} />
        )}
      </div>
      <div
        className={`${
          selectedCategory === "favorites" ? "track__wrapper__div" : "hide"
        }`}
      >
        {favorites.length > 0 && (
          <Favorites loadArtist={loadArtist} favorites={favorites} />
        )}
      </div>
      {Object.keys(artist).length > 0 && <Artist />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recent: state.recent,
    favorites: state.favorites,
    artist: state.artist,
    tracks: state.tracks,
  };
};

export default connect(mapStateToProps)(Main);
