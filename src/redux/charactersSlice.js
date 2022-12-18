import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  characters: [],
};
export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setCharacters: (state, action) => {
      state.characters = action.payload;
      state.loading = false;
    },
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter((el) => el.id !== action.payload);
    },
    setLike: (state, action) => {
      const { payload } = action;
      state.characters = state.characters.map((el) => (el.id === payload
        ? (!el.fav
          ? { ...el, fav: true }
          : { ...el, fav: false })
        : el));
    },
    emptyCharacters: () => initialState,
  },
});

const { reducer, actions } = charactersSlice;

export const {
  setCharacters, setLike, deleteCharacter, emptyCharacters,
} = actions;

export const fetchCharacters = () => async (dispatch) => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  if (response.ok) {
    const data = await response.json();
    dispatch(setCharacters(data.results));
  }
};

export default reducer;
