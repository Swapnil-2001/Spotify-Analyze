import { SET_ARTIST, CLEAR_ARTIST } from "../../utils/constants";

const artistReducer = (state = {}, action) => {
  const { artist } = action;
  switch (action.type) {
    case SET_ARTIST:
      return artist;
    case CLEAR_ARTIST:
      return {};
    default:
      return state;
  }
};

export default artistReducer;
