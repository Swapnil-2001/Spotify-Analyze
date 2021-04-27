import React, { useState, useEffect, useRef } from "react";
import {
  getRecentTracks,
  getFavorites,
  getArtist,
  getArtistTop,
  getTracks,
  removeArtist,
  getRelated,
  getAlbums,
  getAlbum,
  clearAlbum,
} from "../../actions/result";
import { connect } from "react-redux";
import Recent from "../Lists/Recent/Recent";
import Favorites from "../Lists/Favorites/Favorites";
import Artist from "../Artist/Artist";
import { setAccessToken } from "../../utils/spotifyFunctions";
import "./Main.css";

const Main = (props) => {
  const {
    recent,
    favorites,
    history,
    artist,
    dispatch,
    isValidSession,
  } = props;
  const [tutorial, removeTutorial] = useState(true);
  useEffect(() => {
    (async function () {
      if (isValidSession()) {
        const params = JSON.parse(localStorage.getItem("params"));
        await setAccessToken(params.access_token);
      } else {
        history.push("/");
      }
    })();
  }, [history, isValidSession]);
  const artistRef = useRef(null);
  const scrollToBottom = () => {
    artistRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [artist]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      removeTutorial(false);
    }
  };
  const loadRecent = () => {
    if (Object.keys(recent).length === 0) {
      dispatch(getRecentTracks());
    }
    dispatch(removeArtist());
    dispatch(clearAlbum());
    setSelectedCategory("recent");
  };
  const loadFavs = () => {
    if (Object.keys(favorites).length === 0) {
      dispatch(getFavorites());
    }
    dispatch(removeArtist());
    dispatch(clearAlbum());
    setSelectedCategory("favorites");
  };
  const loadArtist = (id, name) => {
    dispatch(clearAlbum());
    dispatch(getArtist(id));
    dispatch(getArtistTop(id));
    dispatch(getAlbums(id));
    dispatch(getTracks(name));
    dispatch(getRelated(id));
  };
  const loadAlbum = (id) => {
    dispatch(getAlbum(id));
  };
  return (
    <>
      {tutorial && (
        <div className="backdrop" onClick={handleClick}>
          <div className="modal">
            <h2>Headphones on, people!</h2>
            <h1>Click on any of the buttons to get started!</h1>
            <div>
              <p>1. Hover over any track for a 30 sec preview</p>
              <p>
                2. Click on any track and scroll down for more tracks by your
                favorite artists
              </p>
              <p>
                3. Explore songs by other artists: just click on any from the
                "Related Artists" tab
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="navbar">
        <span
          className={selectedCategory === "recent" ? "focus" : ""}
          onClick={loadRecent}
        >
          Recently played
        </span>
        <span
          className={selectedCategory === "favorites" ? "focus" : ""}
          onClick={loadFavs}
        >
          Favorites
        </span>
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
      {Object.keys(artist).length > 0 && (
        <div className="artist__component">
          <div ref={artistRef} />
          <Artist loadAlbum={loadAlbum} loadArtist={loadArtist} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recent: state.recent,
    favorites: state.favorites,
    artist: state.artist,
  };
};

export default connect(mapStateToProps)(Main);
