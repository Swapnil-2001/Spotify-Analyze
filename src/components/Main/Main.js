import React, { useState } from "react";
import { getRecentTracks, getFavorites } from "../../actions/result";
import { connect } from "react-redux";
import Recent from "../Lists/Recent/Recent";
import Favorites from "../Lists/Favorites/Favorites";
import "./Main.css";

const Main = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { recent, favorites, dispatch } = props;
  const loadRecent = () => {
    if (Object.keys(recent).length === 0) {
      dispatch(getRecentTracks());
    }
    setSelectedCategory("recent");
  };
  const loadFavs = () => {
    if (Object.keys(favorites).length === 0) {
      dispatch(getFavorites());
    }
    setSelectedCategory("favorites");
  };
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
        {recent.length > 0 && <Recent recent={recent} />}
      </div>
      <div
        className={`${
          selectedCategory === "favorites" ? "track__wrapper__div" : "hide"
        }`}
      >
        {favorites.length > 0 && <Favorites favorites={favorites} />}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recent: state.recent,
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(Main);
