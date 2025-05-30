import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/playerSlice";
import favoritesReducer from "../reducers/favoritesSlice";
import songsReducer from "../reducers/songsSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    favorites: favoritesReducer,
    songs: songsReducer,
  },
});

export default store;
