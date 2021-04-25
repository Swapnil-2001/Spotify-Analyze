import { SET_TRACKS, CLEAR_SEARCH } from "../../utils/constants";

const tracksReducer = (state = {}, action) => {
  const { tracks } = action;
  switch (action.type) {
    case SET_TRACKS:
      return tracks;
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default tracksReducer;
