import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const MissionsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    joinMissions: (state, action) => {
      const missionIds = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionIds
        ? { ...mission, activeMember: true }
        : mission));
    },
    leaveMission: (state, action) => {
      const missionIds = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionIds
        ? { ...mission, activeMember: false }
        : mission));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchData };
export const { joinMissions, leaveMission } = MissionsSlice.actions;
export default MissionsSlice.reducer;
