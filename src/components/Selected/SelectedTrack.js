import React from "react";
import "./SelectedTrack.css";

const SelectedTrack = ({ selectedTrack }) => {
  return (
    <>
      <div className="selected__track__div">
        <img
          src={
            selectedTrack.images
              ? selectedTrack.images[0].url
              : "../../images/images.jpg"
          }
          alt="track"
        />
        <div>
          <h2>{selectedTrack.name}</h2>
          <p>
            By {selectedTrack.artists[0].name}{" "}
            {selectedTrack.artists.length > 1 && (
              <span>& {selectedTrack.artists[1].name}</span>
            )}
          </p>
        </div>
        <div className="listen__div">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={selectedTrack.external_urls.spotify}
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </>
  );
};

export default SelectedTrack;
