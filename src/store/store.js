import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import trackReducer from "../reducers/searchReducers/track";
import tracksReducer from "../reducers/searchReducers/tracks";
import featuresReducer from "../reducers/searchReducers/features";
import modalReducer from "../reducers/searchReducers/modal";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    track: trackReducer,
    tracks: tracksReducer,
    features: featuresReducer,
    modal: modalReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
