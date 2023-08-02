import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketItems: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
});

export default rocketSlice.reducer;
