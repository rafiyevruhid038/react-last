import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../redux/slices/savedListsSlice';
import Header from '../components/Header/Header';
import '../index.css';

const SavedLists = () => {
  const dispatch = useDispatch();
  const savedLists = useSelector((state) => state.savedLists);

  const handleDelete = (index) => {
    dispatch(deleteList(index));
  };

  return (
    <div>
      <Header />
      <h1 className='saved-list'>Saved Lists</h1>
      {savedLists.length > 0 ? (
        savedLists.map((list, index) => (
          <div key={index} className='saved-movies-card'>
            <h2>List name: {list.listName}</h2>
            {list.movies.map((movie) => (
              <div key={movie.imdbID} className="saved-movie">
                <h3>{movie.Title}({movie.Year})</h3>
              </div>
            ))}
            <button onClick={() => handleDelete(index)}>Remove list</button>
          </div>
        ))
      ) : (
        <p>No saved lists.</p>
      )}
    </div>
  );
};

export default SavedLists;