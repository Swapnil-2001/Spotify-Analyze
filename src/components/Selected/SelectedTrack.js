import React from "react";
import "./SelectedTrack.css";

const SelectedTrack = ({ selectedTrack }) => {
  return (
    <>
      <div className="selected__track__div">
        <img
          src={selectedTrack.images ? selectedTrack.images[0].url : ""}
          alt="track"
        />
        <div>
          <h2>{selectedTrack.name}</h2>
          <p>
            From the album {selectedTrack.name} by{" "}
            {selectedTrack.artists[0].name}{" "}
            {selectedTrack.artists.length > 1 && (
              <span>& {selectedTrack.artists[1].name}</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default SelectedTrack;
