import React, { useState } from "react";
import "../List.css";

const Favorites = ({ favorites, loadArtist }) => {
  const [preview, setPreview] = useState("");
  return (
    <div className="songs__div">
      <div className="heading__div">
        <p>Your Favorite Tracks</p>
      </div>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      <div className="songs__list__div">
        {favorites.map((item, index) => (
          <div
            onMouseEnter={() => {
              if (item.preview_url) {
                setPreview(item.preview_url);
              }
            }}
            onMouseLeave={() => setPreview("")}
            key={index}
          >
            {Object.keys(item.album).length > 0 && (
              <img
                src={
                  item.album.images.length > 0
                    ? item.album.images[0].url
                    : "../../../images/images.jpg"
                }
                onClick={() => {
                  loadArtist(item.artists[0].id, item.artists[0].name);
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

export default Favorites;
