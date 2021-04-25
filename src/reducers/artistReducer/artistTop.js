import { SET_ARTIST_TOP } from "../../utils/constants";

const artistTopReducer = (state = {}, action) => {
  const { tracks } = action;
  switch (action.type) {
    case SET_ARTIST_TOP:
      return tracks;
    default:
      return state;
  }
};

export default artistTopReducer;
