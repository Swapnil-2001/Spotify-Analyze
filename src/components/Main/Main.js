import React, { useState } from "react";
import { getRecentTracks } from "../../actions/result";
import { connect } from "react-redux";
import "./Main.css";

const Main = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [preview, setPreview] = useState("");
  const { recent, dispatch } = props;
  const loadRecent = () => {
    if (Object.keys(recent).length === 0) {
      dispatch(getRecentTracks());
    }
    setSelectedCategory("recent");
  };
  const loadFavs = () => {
    setSelectedCategory("favorites");
  };
  return (
    <>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      <div className="navbar">
        <button onClick={loadRecent}>Recently played</button>
        <button onClick={loadFavs}>Favorites</button>
      </div>
      <div
        className={`${
          selectedCategory === "recent" ? "recent__wrapper__div" : "hide"
        }`}
      >
        {recent.length > 0 &&
          recent.map((item, index) => (
            <div
              onMouseEnter={() => {
                if (item.track.preview_url) {
                  setPreview(item.track.preview_url);
                }
              }}
              onMouseLeave={() => setPreview("")}
              key={index}
              className="recent__track__div"
            >
              {Object.keys(item.track.album).length > 0 && (
                <img
                  src={
                    item.track.album.images.length > 0
                      ? item.track.album.images[0].url
                      : ""
                  }
                  alt="album"
                />
              )}
            </div>
          ))}
      </div>
      <div className={`${selectedCategory === "favorites" ? "" : "hide"}`}>
        Favs
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recent: state.recent,
  };
};

export default connect(mapStateToProps)(Main);
