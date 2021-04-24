import React from "react";
import "./Artist.css";

const Artist = ({ artist }) => {
  return (
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
  );
};

export default Artist;
