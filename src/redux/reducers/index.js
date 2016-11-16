import { combineReducers } from 'redux';
import home from './Home/home-reducer.js';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
