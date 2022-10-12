import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeCharacterAC } from '../../../../redux/actions/favoriteActions';
import { check } from '../../../../utils/checkHandler';

export default function Footer({ character }) {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favorites);
  return (
    <div className="card-footer">
      <div className="star star-full" onClick={() => dispatch(likeCharacterAC(character))}>
        {check(character, favs) ? <img src={`${window.location.origin}/icons/star-full.png`} alt="star" /> : <img src={`${window.location.origin}/icons/star-line.png`} alt="star" />}

      </div>
    </div>
  );
}
