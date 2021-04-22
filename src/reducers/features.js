import { SET_FEATURES } from "../utils/constants";

const featuresReducer = (state = {}, action) => {
  const { features } = action;
  switch (action.type) {
    case SET_FEATURES:
      return features;
    default:
      return state;
  }
};

export default featuresReducer;
