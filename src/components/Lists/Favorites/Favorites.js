import React, { useState } from "react";
import "./Favorites.css";

const Favorites = ({ favorites, loadArtist }) => {
  const [preview, setPreview] = useState("");
  return (
    <>
      {preview.length > 0 && (
        <audio controls src={preview} autoPlay hidden={true} />
      )}
      {favorites.map((item, index) => (
        <div
          onMouseEnter={() => {
            if (item.preview_url) {
              setPreview(item.preview_url);
            }
          }}
          onMouseLeave={() => setPreview("")}
          key={index}
          className="favorites__track__div"
        >
          {Object.keys(item.album).length > 0 && (
            <img
              src={item.album.images.length > 0 ? item.album.images[0].url : ""}
              onClick={() => {
                loadArtist(item.artists[0].id, item.artists[0].name);
              }}
              alt="album"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Favorites;
