import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  reducers: {
    // Aggiunge una canzone solo se non è già presente
    addFavorite: (state, action) => {
      const song = action.payload;
      const exists = state.items.find((s) => s.id === song.id);
      if (!exists) {
        state.items.push(song);
      }
    },

    // Rimuove una canzone dai preferiti
    removeFavorite: (state, action) => {
      const songId = action.payload;
      state.items = state.items.filter((s) => s.id !== songId);
    },

    // Permette il toggle solo se serve in altri componenti
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

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
