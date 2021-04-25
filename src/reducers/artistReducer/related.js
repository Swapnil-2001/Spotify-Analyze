import { SET_RELATED } from "../../utils/constants";

const relatedReducer = (state = [], action) => {
  const { artists } = action;
  switch (action.type) {
    case SET_RELATED:
      return artists;
    default:
      return state;
  }
};

export default relatedReducer;
