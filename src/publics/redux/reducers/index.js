import { combineReducers } from 'redux';


import user from './user'
import score from './score';


const appReducer = combineReducers({

  user,
  score

});

export default appReducer;
