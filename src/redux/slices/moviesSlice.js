import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchText) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=55d8cf79`);
  const data = await response.json();
  return data.Search ? data.Search : [];
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    cart: [],
    notFound: false,
    searchText: 'godfather',
  },
  reducers: {
    addToCart: (state, action) => {
      const isAlreadyInCart = state.cart.some((item) => item.imdbID === action.payload.imdbID);
      if (!isAlreadyInCart) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.imdbID !== action.payload.imdbID);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.notFound = action.payload.length === 0;
    });
  },
});

export const { addToCart, removeFromCart } = moviesSlice.actions;
export default moviesSlice.reducer;