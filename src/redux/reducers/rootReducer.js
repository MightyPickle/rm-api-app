import { combineReducers } from 'redux';
import charactersReducer from '../chatactersSlice';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
