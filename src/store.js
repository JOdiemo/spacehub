import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './redux/Rockets/RocketsSlice';
import MissionsReducer from './redux/Missions/MissionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    data: MissionsReducer,
  },
});

export default store;
