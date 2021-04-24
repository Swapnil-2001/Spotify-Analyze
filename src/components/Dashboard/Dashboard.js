import React, { useEffect } from "react";
import { getTracks, getFeatures, setTrack } from "../../actions/result";
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
      <Link to="/main">Go to main</Link>
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
