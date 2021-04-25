import React, { useState } from "react";
import "./SelectedAlbum.css";

const SelectedAlbum = ({ album, setSelectedTrack }) => {
  const [preview, setPreview] = useState("");
  const url =
    album.images.length > 1
      ? album.images[1].url
      : album.images.length > 0
      ? album.images[0].url
      : "";
  return (
    <>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      <div className="album__wrapper">
        <img
          src={album.images.length > 0 ? album.images[0].url : ""}
          alt="album"
        />
        <div>
          <h2>{album.name}</h2>
        </div>
      </div>
      <div className="tracks__div">
        {Object.keys(album.tracks).length > 0 &&
          album.tracks.items.map((track, ind) => (
            <div
              onMouseEnter={() => {
                if (track.preview_url) {
                  setPreview(track.preview_url);
                }
              }}
              onMouseLeave={() => setPreview("")}
              key={ind}
              onClick={() => {
                setSelectedTrack(track);
              }}
            >
              <img src={url} alt="track" />
            </div>
          ))}
      </div>
    </>
  );
};

export default SelectedAlbum;
