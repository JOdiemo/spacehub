import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './redux/Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
