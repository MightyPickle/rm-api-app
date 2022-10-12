import { ADD_CHARACTERS, GET_CHARACTERS, GET_DUDE } from '../types/types';

export const getCharactersAC = (payload) => ({ type: GET_CHARACTERS, payload });
export const addCharactersAC = (payload) => ({ type: ADD_CHARACTERS, payload });

export const getAllCharactersThunk = (payload) => async (dispatch) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${payload}`);
  if (response.ok) {
    const data = await response.json();
    if (payload > 1) {
      dispatch(addCharactersAC(data.results));
    } else {
      dispatch(getCharactersAC(data.results));
    }
  }
};

export const getByNameThunk = (payload) => async (dispatch) => {
  const { currPage, input } = payload;
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currPage}&name=${input}`);
  if (response.ok) {
    const data = await response.json();
    if (currPage > 1) {
      dispatch(addCharactersAC(data.results));
    } else {
      dispatch(getCharactersAC(data.results));
    }
  }
};

export const getDudeAC = (payload) => ({ type: GET_DUDE, payload });

export const getDudeThunk = (payload) => async (dispatch) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${payload}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getDudeAC(data));
  }
};
