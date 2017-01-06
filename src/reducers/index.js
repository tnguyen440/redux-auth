import {combineReducers} from 'redux';
import allposts from './postReducer';

const rootReducer = combineReducers({
  allposts
});

export default rootReducer;
