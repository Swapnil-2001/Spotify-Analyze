import React from "react";

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;
  const scopes = ["user-read-recently-played"];
  const scope = encodeURIComponent(scopes.join(" "));
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${scope}&response_type=token&show_dialog=true`;
  };
  return (
    <div>
      <button type="submit" onClick={handleLogin}>
        Login to spotify
      </button>
    </div>
  );
};

export default Home;
