import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
};

const allUserSlice = createSlice({
  name: "allUser",
  initialState: initialState,
  reducers: {
    setData(state, value) {
      state.data = value.payload??null;
    },
    setLoading(state, value) {
      state.loading = value.payload??false;
    },
    
  },
});

export const { setData, setLoading } = allUserSlice.actions;

export default allUserSlice.reducer;