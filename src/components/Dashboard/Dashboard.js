import React, { useEffect } from "react";
import {
  getTracks,
  getFeatures,
  setTrack,
  clearSearch,
} from "../../actions/result";
import { connect } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import { setAccessToken } from "../../utils/spotifyFunctions";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  useEffect(() => {
    (async function () {
      const params = JSON.parse(localStorage.getItem("params"));
      await setAccessToken(params.access_token);
    })();
  }, []);
  const { searchedTracks, dispatch } = props;
  const handleSearch = (searchTerm) => {
    dispatch(getTracks(searchTerm));
  };
  const setFeatures = (id) => {
    dispatch(getFeatures(id));
  };
  const setCurrentTrack = (track) => {
    dispatch(setTrack(track));
  };
  return (
    <>
      <div style={{ textAlign: "center", padding: "30px" }}>
        <div
          onClick={() => {
            dispatch(clearSearch());
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/main">
            Go to Deepdive
          </Link>
        </div>
      </div>

      <SearchForm handleSearch={handleSearch} />
      {Object.keys(searchedTracks).length > 0 && (
        <SearchResults
          tracks={searchedTracks.tracks}
          setFeatures={setFeatures}
          setCurrentTrack={setCurrentTrack}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedTracks: state.tracks,
  };
};

export default connect(mapStateToProps)(Dashboard);
