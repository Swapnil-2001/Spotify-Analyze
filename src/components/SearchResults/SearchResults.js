import React from "react";
import { useHistory } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = ({ tracks, setFeatures, setCurrentTrack }) => {
  const history = useHistory();
  return (
    <>
      {Object.keys(tracks).length > 0 && (
        <div>
          {tracks.items.map((track, index) => (
            <div
              onClick={() => {
                setFeatures(track.id);
                setCurrentTrack(track);
                history.push("/features");
              }}
              className="wrapper__div"
              key={index}
            >
              {track.album.images.length > 0 && (
                <img
                  className="track__image"
                  src={track.album.images[0].url}
                  alt="track"
                />
              )}
              <div className="track__name__div">
                <p>{track.name}</p>
                {track.artists.length > 0 && (
                  <p className="artists__name">{track.artists[0].name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;
