import React from 'react';

export default function Body({ character }) {
  return (
    <div className="card-body">
      <img src={character.image} alt="" width="100%" />
      <div className="card-content">
        <p>
          {character.species}
          {' '}
          -
          {' '}
          {character.gender}
        </p>
        <p>
          Status:
          {' '}
          {character.status}
        </p>
        <p>
          Place of origin:
          {' '}
          {character?.origin?.name}
        </p>
      </div>
    </div>
  );
}
