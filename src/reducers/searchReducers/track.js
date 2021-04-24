import { SET_TRACK } from "../../utils/constants";

const trackReducer = (state = {}, action) => {
  const { track } = action;
  switch (action.type) {
    case SET_TRACK:
      return track;
    default:
      return state;
  }
};

export default trackReducer;
