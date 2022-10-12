import React from 'react';
import OneCard from './OneCard/OneCard';

export default function AllCards({ characters }) {
  return (
    <div className="cards-container">
      {characters?.length > 0 && characters.map((el) => <OneCard key={`rm-${el.id}`} character={el} />)}
    </div>
  );
}
