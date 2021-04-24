import { SET_RECENT_TRACKS } from "../../utils/constants";

const recentReducer = (state = [], action) => {
  const { tracks } = action;
  switch (action.type) {
    case SET_RECENT_TRACKS:
      return tracks;
    default:
      return state;
  }
};

export default recentReducer;
