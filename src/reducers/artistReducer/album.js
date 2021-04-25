import { SET_ALBUM, CLEAR_ALBUM } from "../../utils/constants";

const albumReducer = (state = {}, action) => {
  const { album } = action;
  switch (action.type) {
    case SET_ALBUM:
      return album;
    case CLEAR_ALBUM:
      return {};
    default:
      return state;
  }
};

export default albumReducer;
