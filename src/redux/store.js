import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import savedListsReducer from './slices/savedListsSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    savedLists: savedListsReducer,
  },
});

export default store; 