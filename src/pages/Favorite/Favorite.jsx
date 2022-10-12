import React from 'react';
import { useSelector } from 'react-redux';
import AllCards from '../../components/AllCards/AllCards';

export default function Favorite() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="favorite-container">
      {favorites.length
        ? <AllCards characters={favorites} />
        : (
          <div className="favorite-empty">
            <p>No characters</p>
          </div>
        )}
    </div>
  );
}
