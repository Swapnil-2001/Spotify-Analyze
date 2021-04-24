import { SET_MODAL } from "../../utils/constants";

const modalReducer = (state = "", action) => {
  const { modal } = action;
  switch (action.type) {
    case SET_MODAL:
      return modal;
    default:
      return state;
  }
};

export default modalReducer;
