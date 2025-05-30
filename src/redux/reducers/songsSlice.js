import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk asincrono per caricare le canzoni
export const fetchSongsByArtist = createAsyncThunk("songs/fetchByArtist", async (artistName) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
  if (!response.ok) throw new Error("Failed to fetch songs");
  const { data } = await response.json();
  return { artistName, songs: data.slice(0, 4) };
});

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    byArtist: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongsByArtist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongsByArtist.fulfilled, (state, action) => {
        state.byArtist[action.payload.artistName] = action.payload.songs;
        state.loading = false;
      })
      .addCase(fetchSongsByArtist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default songsSlice.reducer;
