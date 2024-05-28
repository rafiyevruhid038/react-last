import { createSlice } from '@reduxjs/toolkit';

const savedListsSlice = createSlice({
  name: 'savedLists',
  initialState: [],
  reducers: {
    saveList: (state, action) => {
      state.push(action.payload);
    },
    deleteList: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { saveList, deleteList } = savedListsSlice.actions;
export default savedListsSlice.reducer;