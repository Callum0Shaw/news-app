import { createSlice } from '@reduxjs/toolkit';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {
    getAll: (state) => {
      console.log('getAll')
    },
    getBySource: (state, action) => {
      console.log('setBySouce')
    },
    
  },
});
