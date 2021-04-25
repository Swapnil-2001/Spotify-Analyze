import React, { useState } from "react";
import { connect } from "react-redux";
import { clearAlbum } from "../../actions/result";
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
    dispatch,
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
          src={
            artist.images.length > 0
              ? artist.images[0].url
              : "../../images/images.jpg"
          }
          alt="artist"
          className="artist__img"
        />
        <div>
          <h2>{artist.name}</h2>
          {artist.genres && <span>{artist.genres.join(", ")}</span>}
          <p>{artist.followers.total} Followers</p>
        </div>
      </div>
      <div className="artist__wrapper__div">
        <div className="left__section">
          Top tracks
          <div className="artist__div">
            {artistTop.length > 0 &&
              artistTop.map((track, ind) => (
                <div className="top__div" key={ind}>
                  <img
                    src={
                      track.album.images.length > 0
                        ? track.album.images[0].url
                        : "../../images/images.jpg"
                    }
                    onMouseEnter={() => {
                      if (track.preview_url) {
                        setPreview(track.preview_url);
                      }
                    }}
                    onMouseLeave={() => setPreview("")}
                    onClick={() => {
                      setSelectedTrack(track.album);
                      dispatch(clearAlbum());
                      window.scroll({
                        top: document.body.offsetHeight,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    alt="album"
                    className={track.preview_url ? "" : "fade"}
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
                    src={
                      album.images.length > 0
                        ? album.images[0].url
                        : "../../images/images.jpg"
                    }
                    alt="album"
                    onClick={() => {
                      setSelectedTrack({});
                      loadAlbum(album.id);
                      window.scroll({
                        top: document.body.offsetHeight,
                        left: 0,
                        behavior: "smooth",
                      });
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
                      track.album.images.length > 0
                        ? track.album.images[0].url
                        : ""
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
                      dispatch(clearAlbum());
                      window.scroll({
                        top: document.body.offsetHeight,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    className={track.preview_url ? "" : "fade"}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="related__artist__div">
          <p>Related Artists</p>
          <div>
            {related.length > 0 &&
              related.map((artist, ind) => (
                <div
                  onClick={() => {
                    loadArtist(artist.id, artist.name);
                    setSelectedTrack({});
                    dispatch(clearAlbum());
                  }}
                  key={ind}
                >
                  <img
                    src={
                      artist.images.length > 0
                        ? artist.images[0].url
                        : "../../images/images.jpg"
                    }
                    alt="artist"
                  />{" "}
                </div>
              ))}
          </div>
        </div>
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
