import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import albumReducer from "../reducers/artistReducer/album";
import albumsReducer from "../reducers/artistReducer/albums";
import relatedReducer from "../reducers/artistReducer/related";
import artistTopReducer from "../reducers/artistReducer/artistTop";
import artistReducer from "../reducers/artistReducer/artist";
import favoriteReducer from "../reducers/favoriteReducers/favorite";
import recentReducer from "../reducers/recentReducers/recent";
import trackReducer from "../reducers/searchReducers/track";
import tracksReducer from "../reducers/searchReducers/tracks";
import featuresReducer from "../reducers/searchReducers/features";
import modalReducer from "../reducers/searchReducers/modal";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    album: albumReducer,
    albums: albumsReducer,
    related: relatedReducer,
    artistTop: artistTopReducer,
    artist: artistReducer,
    favorites: favoriteReducer,
    recent: recentReducer,
    track: trackReducer,
    tracks: tracksReducer,
    features: featuresReducer,
    modal: modalReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
