import { SET_FAVS } from "../../utils/constants";

const favReducer = (state = {}, action) => {
  const { tracks } = action;
  switch (action.type) {
    case SET_FAVS:
      return tracks;
    default:
      return state;
  }
};

export default favReducer;
