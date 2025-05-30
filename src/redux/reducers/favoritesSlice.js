import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  reducers: {
    toggleFavorite: (state, action) => {
      const song = action.payload;
      const exists = state.items.find((s) => s.id === song.id);
      if (exists) {
        state.items = state.items.filter((s) => s.id !== song.id);
      } else {
        state.items.push(song);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
