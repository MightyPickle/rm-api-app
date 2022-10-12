import { ADD_CHARACTERS, GET_CHARACTERS, GET_DUDE } from '../types/types';

const charactersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTERS:
      return Array.isArray(payload) ? payload : [payload];
    case ADD_CHARACTERS:
      return [...state, ...payload];
      // case GET_DUDE:
      //   return { ...state, oneDude: payload };

    default:
      return state;
  }
};

export default charactersReducer;
