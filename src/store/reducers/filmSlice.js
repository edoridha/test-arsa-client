import { createSlice } from "@reduxjs/toolkit";
import { fetchFilms, fetchFilmById, addFilm } from "../actions/index";

const filmSlice = createSlice({
    name: "films",
    initialState: {
        films: [],
        film: null,
        loading: true,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
          },
          setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilms.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
            state.loading = false;
            state.films = action.payload;
        })
        .addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(fetchFilmById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFilmById.fulfilled, (state, action) => {
            state.loading = false;
            state.film = action.payload;
        })
        .addCase(fetchFilmById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const { setLoading, setError } = filmSlice.actions;
export default filmSlice.reducer;
