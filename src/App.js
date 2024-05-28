import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';  
import Home from './pages/Home';
import SavedLists from './pages/SavedLists';

function App() {
  return (
    <Provider store={store}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/saved' element={<SavedLists />} />
        </Routes>
    
    </Provider>
  );
}

export default App;