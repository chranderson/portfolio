import { combineReducers } from 'redux';
import home from './Home/home-reducer.js';
import blog from './Blog/blog-reducer.js';

const rootReducer = combineReducers({
  blog,
  home,
});

export default rootReducer;
