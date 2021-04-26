import React from "react";
import "./Home.css";

const Home = (props) => {
  const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL } = process.env;
  const scopes = ["user-read-recently-played"];
  const scope = encodeURIComponent(scopes.join(" "));
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${window.location.origin}/redirect&scope=${scope}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login__wrapper">
      <div onClick={handleLogin}>Login to spotify</div>
    </div>
  );
};

export default Home;
