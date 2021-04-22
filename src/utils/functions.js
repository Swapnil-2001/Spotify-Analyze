import axios from "axios";

// http://localhost:3000/redirect#access_token=BQA4Y-o2kMSWjpRMD5y55f0nXLgt51kl4UAEbjNip3lIpz80uWJQJPoKPyD-CG2jjIdCjhfZKwfX5X6K7sssvoe20GJhhE7bHPaW1tictiMlkdzkWe2Pw3AnmojCy-NzVSOCj-aNtQ8ztTBYrCzRiBFGPtAn-I5g35An10&token_type=Bearer&expires_in=3600
// 'url' is the portion starting with '#', including '#'
export const getParamValues = (url) => {
  return url
    .slice(1) // remove '#'
    .split("&") // separate access token, token type, expires in
    .reduce((prev, curr) => {
      const [title, value] = curr.split("=");
      prev[title] = value;
      return prev;
    }, {});
};

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem("params"));
    if (params) {
      axios.defaults.headers.common[ // axios feature
        "Authorization"
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log("Error setting auth", error);
  }
};
