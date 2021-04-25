import React, { useState } from "react";
import "./Recent.css";

const Recent = ({ loadArtist, recent }) => {
  const [preview, setPreview] = useState("");
  return (
    <>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      {recent.map((item, index) => (
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
              onClick={() => {
                loadArtist(
                  item.track.artists[0].id,
                  item.track.artists[0].name
                );
              }}
              alt="album"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Recent;
