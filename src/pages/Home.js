import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import { fetchMovies } from '../redux/slices/moviesSlice';

function Home() {
  const dispatch = useDispatch();

  const handleSearch = useCallback((text) => {
    const trimmedText = text.trim();
    dispatch(fetchMovies(trimmedText));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <MovieList />
    </div>
  );
}

export default Home;
