import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
