import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: null,
  loading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearchData(state, value) {
      state.search = value.payload??null;
    },
    setLoadingSearch(state, value) {
      state.loading = value.payload??false;
    },
  },
});

export const { setSearchData, setLoadingSearch } = searchSlice.actions;

export default searchSlice.reducer;