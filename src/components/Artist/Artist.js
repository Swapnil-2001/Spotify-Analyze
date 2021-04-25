import React, { useState } from "react";
import { connect } from "react-redux";
import "./Artist.css";

const Artist = (props) => {
  const { tracks, artist, artistTop } = props;
  const [preview, setPreview] = useState("");
  return (
    <>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      <div className="artist__wrapper">
        <img
          src={artist.images.length > 0 ? artist.images[0].url : ""}
          alt="artist"
          className="artist__img"
        />
        <div>
          <h2>{artist.name}</h2>
          {artist.genres && <span>{artist.genres.join(", ")}</span>}
          <p>{artist.followers.total} Followers</p>
        </div>
      </div>
      Top tracks
      <div className="artist__div">
        {artistTop.length > 0 &&
          artistTop.map((track, ind) => (
            <div className="top__div" key={ind}>
              <img
                src={
                  track.album.images.length > 0 ? track.album.images[0].url : ""
                }
                onMouseEnter={() => {
                  if (track.preview_url) {
                    setPreview(track.preview_url);
                  }
                }}
                onMouseLeave={() => setPreview("")}
                alt="album"
              />
            </div>
          ))}
      </div>
      Singles/Appears In
      <div className="artist__div">
        {Object.keys(tracks).length > 0 &&
          tracks.tracks.items.map((track, ind) => (
            <div className="top__div" key={ind}>
              <img
                src={
                  track.album.images.length > 0 ? track.album.images[0].url : ""
                }
                onMouseEnter={() => {
                  if (track.preview_url) {
                    setPreview(track.preview_url);
                  }
                }}
                onMouseLeave={() => setPreview("")}
                alt="album"
              />
            </div>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    artistTop: state.artistTop,
    tracks: state.tracks,
  };
};

export default connect(mapStateToProps)(Artist);
