import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllCards from '../../components/AllCards/AllCards';
import Button from '../../components/Button/Button';
import { emptyCharacters, fetchCharacters } from '../../redux/charactersSlice';

export default function Main() {
  const { characters, loading } = useSelector((state) => state.characters);
  const [characterState, setCharacterState] = useState(characters || []);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!characters.length) {
      dispatch(fetchCharacters());
    }
    return () => dispatch(emptyCharacters());
  }, []);

  const filter = (buttonRef) => {
    if (buttonRef.current.classList.contains('active')) {
      buttonRef.current.classList.remove('active');
      setCharacterState(characters);
    } else {
      buttonRef.current.classList.add('active');
      setCharacterState(characters.filter((el) => el.fav));
    }
  };
  const filterRef = useRef();

  useEffect(() => {
    if (!filterRef.current.classList.contains('active')) {
      setCharacterState(characters);
    } else {
      setCharacterState(characters.filter((el) => el.fav));
    }
  }, [characters]);

  return (
    <div className="main-container">
      {loading && <div className="loader">LOADING...</div> }
      <Button filter={filter} filterRef={filterRef} />
      <AllCards characters={characterState} />
    </div>
  );
}
