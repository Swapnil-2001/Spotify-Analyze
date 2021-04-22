import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import tracksReducer from "../reducers/tracks";
import featuresReducer from "../reducers/features";
import modalReducer from "../reducers/modal";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    tracks: tracksReducer,
    features: featuresReducer,
    modal: modalReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
