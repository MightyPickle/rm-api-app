import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCharacter, setLike } from '../../../../redux/charactersSlice';

export default function Footer({ character }) {
  const dispatch = useDispatch();

  return (
    <div className="card-footer">
      <button type="button" className="btn" onClick={() => dispatch(deleteCharacter(character.id))}>Delete</button>
      <div className="star star-full" onClick={() => dispatch(setLike(character.id))}>
        {character.fav ? <img src="./icons/star-full.png" alt="star" /> : <img src="./icons/star-line.png" alt="star" />}
      </div>
    </div>
  );
}
