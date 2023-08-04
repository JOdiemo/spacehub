import { combineReducers, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './redux/Rockets/RocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
