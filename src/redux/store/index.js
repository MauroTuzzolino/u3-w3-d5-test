import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/playerSlice";
import favoritesReducer from "../reducers/favoritesSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    favorites: favoritesReducer,
  },
});

export default store;
