import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: null,
  postDataLoading: false,
  
};

const editPostSlice = createSlice({
  name: "editPost",
  initialState: initialState,
  reducers: {
    setPostData(state, value) {
      state.signupData = value.payload??null;
    },
    setPostDataLoading(state, value) {
      state.loading = value.payload??false;
    },
    
  },
});

export const { setPostData, setPostDataLoading } = editPostSlice.actions;

export default editPostSlice.reducer;