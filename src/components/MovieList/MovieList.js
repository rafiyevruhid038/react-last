import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, addToCart, removeFromCart } from '../../redux/slices/moviesSlice';
import AddedMovies from '../AddedMovies/AddedMovies';
import './movieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const { movies, cart, notFound, searchText } = useSelector((state) => state.movies);

  useEffect(() => {
    if (searchText) {
      dispatch(fetchMovies(searchText));
    }
  }, [dispatch, searchText]);

  return (
    <div className="container">
      <div>
        {notFound ? (
          <div className="not-found">Not Found</div>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-cart">
              <div>
                <h2 className='title'>{movie.Title} ({movie.Year})</h2>
                <img className='poster' src={movie.Poster} alt={movie.Title} />
              </div>
              <div>
                <button className='add-to-list' onClick={() => dispatch(addToCart(movie))}>ADD TO LIST</button>
                <br />
                <button className='go-to-imdb' onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, '_blank')}>GO TO IMDB</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <AddedMovies cart={cart} removeFromCart={(movie) => dispatch(removeFromCart(movie))} />
      </div>
    </div>
  );
}

export default MovieList;
