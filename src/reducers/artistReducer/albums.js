import { SET_ALBUMS } from "../../utils/constants";

const albumsReducer = (state = [], action) => {
  const { albums } = action;
  switch (action.type) {
    case SET_ALBUMS:
      return albums;
    default:
      return state;
  }
};

export default albumsReducer;
