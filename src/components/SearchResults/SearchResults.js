import React from "react";

const SearchResults = ({ tracks }) => (
  <>
    {Object.keys(tracks).length > 0 && (
      <div>
        {tracks.items.map((track, index) => (
          <React.Fragment key={index}>
            <a
              target="_blank"
              href={track.external_urls.spotify}
              rel="noopener noreferrer"
              className="card-image-link"
            >
              {track.name}
            </a>
          </React.Fragment>
        ))}
      </div>
    )}
  </>
);

export default SearchResults;
