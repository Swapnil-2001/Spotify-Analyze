import React from "react";
import { useHistory } from "react-router-dom";

const SearchResults = ({ tracks, setFeatures }) => {
  const history = useHistory();
  return (
    <>
      {Object.keys(tracks).length > 0 && (
        <div>
          {tracks.items.map((track, index) => (
            <React.Fragment key={index}>
              <div
                onClick={() => {
                  setFeatures(track.id);
                  history.push("/features");
                }}
              >
                {track.name}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;
