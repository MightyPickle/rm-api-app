import { DISLIKE_CHARACTER, LIKE_CHARACTER } from '../types/types';

const favoritesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case LIKE_CHARACTER:
      if (state.find((el) => el.id === payload.id)) {
        return state.filter((el) => el.id !== payload.id);
      }
      return [...state, payload];

    default:
      return state;
  }
};

export default favoritesReducer;
