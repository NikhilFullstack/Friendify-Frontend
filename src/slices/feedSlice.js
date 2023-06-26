import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
};

const feedSlice = createSlice({
  name: "feed",
  initialState: initialState,
  reducers: {
    setFeedData(state, value) {
      state.data = value.payload??null;
    },
    setLoading(state, value) {
      state.loading = value.payload??false;
    },
    
  },
});

export const { setFeedData, setLoading } = feedSlice.actions;

export default feedSlice.reducer;