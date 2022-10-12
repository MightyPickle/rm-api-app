import React from 'react';

export default function Header({ character }) {
  return (
    <div className="card-header">
      <p>{character.name}</p>
    </div>
  );
}
