import React, { useState } from "react";
import "../List.css";

const Recent = ({ loadArtist, recent }) => {
  const [preview, setPreview] = useState("");
  return (
    <div className="upper__section">
      <div className="heading__div">
        <p>Your Recently Played Tracks</p>
      </div>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      <div className="image__wrapper__div">
        {recent.map((item, index) => (
          <div
            onMouseEnter={() => {
              if (item.track.preview_url) {
                setPreview(item.track.preview_url);
              }
            }}
            onMouseLeave={() => setPreview("")}
            key={index}
            className="track__div"
          >
            {Object.keys(item.track.album).length > 0 && (
              <img
                src={
                  item.track.album.images.length > 0
                    ? item.track.album.images[0].url
                    : "../../../images/images.jpg"
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
      </div>
    </div>
  );
};

export default Recent;
