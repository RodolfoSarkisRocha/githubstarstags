const { createSlice } = require('@reduxjs/toolkit');

const homeReducer = createSlice({
  initialState: {
    starredRepos: [],
    loading: false,
  },

  name: 'home',

  reducers: {
    getAllSuccess: (state, action) => {
      state.starredRepos = action.payload;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { getAllSuccess, loading } = homeReducer.actions;

export default homeReducer.reducer;
