import React, { useEffect } from "react";
import { getTracks } from "../../actions/result";
import { connect } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import { setAccessToken } from "../../utils/spotifyFunctions";

const Dashboard = (props) => {
  useEffect(() => {
    (async function () {
      const params = JSON.parse(localStorage.getItem("params"));
      await setAccessToken(params.access_token);
    })();
  }, []);
  const handleSearch = (searchTerm) => {
    props.dispatch(getTracks(searchTerm));
  };
  return (
    <>
      <SearchForm handleSearch={handleSearch} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
  };
};

export default connect(mapStateToProps)(Dashboard);
