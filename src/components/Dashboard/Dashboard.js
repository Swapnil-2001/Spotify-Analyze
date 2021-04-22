import React, { useEffect } from "react";
import { getTracks, getFeatures } from "../../actions/result";
import { connect } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import { setAccessToken } from "../../utils/spotifyFunctions";

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
  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {Object.keys(searchedTracks).length > 0 && (
        <SearchResults
          tracks={searchedTracks.tracks}
          setFeatures={setFeatures}
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
