import React, { useState } from "react";
import { connect } from "react-redux";
import SelectedTrack from "../Selected/SelectedTrack";
import SelectedAlbum from "../Selected/SelectedAlbum";
import "./Artist.css";

const Artist = (props) => {
  const {
    album,
    albums,
    loadAlbum,
    loadArtist,
    related,
    tracks,
    artist,
    artistTop,
  } = props;
  const [selectedTrack, setSelectedTrack] = useState({});
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
      Related Artists
      <div className="artist__div">
        {related.length > 0 &&
          related.map((artist, ind) => (
            <div
              className="related__div"
              onClick={() => {
                loadArtist(artist.id, artist.name);
              }}
              key={ind}
            >
              <img
                src={artist.images.length > 0 ? artist.images[0].url : ""}
                alt="artist"
              />{" "}
            </div>
          ))}
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
                onClick={() => {
                  setSelectedTrack(track.album);
                }}
                alt="album"
              />
            </div>
          ))}
      </div>
      Albums
      <div className="artist__div">
        {albums.length > 0 &&
          albums.map((album, ind) => (
            <div key={ind}>
              <img
                src={album.images.length > 0 ? album.images[0].url : ""}
                alt="album"
                onClick={() => {
                  setSelectedTrack({});
                  loadAlbum(album.id);
                }}
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
                onClick={() => {
                  setSelectedTrack(track.album);
                }}
              />
            </div>
          ))}
      </div>
      {Object.keys(album).length > 0 && (
        <SelectedAlbum setSelectedTrack={setSelectedTrack} album={album} />
      )}
      {Object.keys(selectedTrack).length > 0 && (
        <SelectedTrack selectedTrack={selectedTrack} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    artistTop: state.artistTop,
    tracks: state.tracks,
    related: state.related,
    albums: state.albums,
    album: state.album,
  };
};

export default connect(mapStateToProps)(Artist);
