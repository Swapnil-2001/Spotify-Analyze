import { useEffect } from "react";
import _ from "lodash";
import { getParamValues } from "../../utils/functions";

const RedirectPage = (props) => {
  useEffect(() => {
    try {
      if (_.isEmpty(props.location.hash)) {
        return props.history.push("/dashboard");
      }
      const access_token = getParamValues(props.location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_time", expiryTime);
      props.history.push("/dashboard");
    } catch (error) {
      props.history.push("/");
    }
  }, [props]);
  return null;
};

export default RedirectPage;
