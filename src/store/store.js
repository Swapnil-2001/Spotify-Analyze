import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import tracksReducer from "../reducers/tracks";
import featuresReducer from "../reducers/features";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    tracks: tracksReducer,
    features: featuresReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
