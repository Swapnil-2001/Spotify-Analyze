import React, { useEffect, useRef, useState } from "react";
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
  const albumRef = useRef(null);
  const trackRef = useRef(null);
  const scrollToAlbum = () => {
    albumRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTrack = () => {
    trackRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToAlbum();
  }, [album]);
  useEffect(() => {
    scrollToTrack();
  }, [selectedTrack]);
  return (
    <>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      <div className="artist__desc__div">
        <img
          src={
            artist.images.length > 0
              ? artist.images[0].url
              : "../../images/images.jpg"
          }
          alt="artist"
        />
        <div>
          <h2>{artist.name}</h2>
          {artist.genres && <span>{artist.genres.join(", ")}</span>}
          <p>{artist.followers.total} Followers</p>
        </div>
      </div>
      <div className="artist__records__div">
        <div className="left__section">
          Top tracks
          <div>
            {artistTop.length > 0 &&
              artistTop.map((track, ind) => (
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
                  }}
                  alt="album"
                  className={track.preview_url ? "" : "fade"}
                  key={ind}
                />
              ))}
          </div>
          Albums
          <div>
            {albums.length > 0 &&
              albums.map((album, ind) => (
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
                  }}
                  key={ind}
                />
              ))}
          </div>
          Singles/Appears In
          <div>
            {Object.keys(tracks).length > 0 &&
              tracks.tracks.items.map((track, ind) => (
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
                  alt="album"
                  onClick={() => {
                    setSelectedTrack(track.album);
                    dispatch(clearAlbum());
                  }}
                  className={track.preview_url ? "" : "fade"}
                  key={ind}
                />
              ))}
          </div>
        </div>
        <div className="related__artists__div">
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
        <div>
          <div ref={albumRef} />
          <SelectedAlbum setSelectedTrack={setSelectedTrack} album={album} />
        </div>
      )}
      {Object.keys(selectedTrack).length > 0 && (
        <div>
          <div ref={trackRef} />
          <SelectedTrack selectedTrack={selectedTrack} />
        </div>
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
