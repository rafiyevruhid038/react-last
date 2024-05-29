import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveList } from '../../redux/slices/savedListsSlice'; 
import "./addedMovies.css";

const AddedMovies = ({ cart, removeFromCart }) => {
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();
  const savedLists = useSelector((state) => state.savedLists); // Mevcut listeleri al

  const handleSave = () => {
    if (listName.trim() === '' || cart.length === 0) {
      alert('Please enter a list name or add films to the list.');
      return;
    }


    const isDuplicate = savedLists.some((list) => list.listName === listName.trim());
    if (isDuplicate) {
      alert('A list with this name already exists. Please choose a different name.');
      return;
    }

    dispatch(saveList({ listName: listName.trim(), movies: cart }));
    setListName('');
  };

  return (
    <div className='listed-box'>
      <input
        type='text'
        placeholder='Create a new list'
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      {cart.length > 0 ? (
        cart.map((movie) => (
          <div key={movie.imdbID} className='listed-movie'>
            <div>
              <h3 className='movie-title'>{movie.Title}({movie.Year})</h3>
            </div>
            <button onClick={() => removeFromCart(movie)}>x</button>
          </div>
        ))
      ) : (
        <p>No movies added to the list.</p>
      )}
      <div className='list-buttons'>
        <button onClick={handleSave}>Save</button>
        <button><Link to='/saved'>Go to Basket</Link></button>
      </div>
    </div>
  );
};

export default AddedMovies;
