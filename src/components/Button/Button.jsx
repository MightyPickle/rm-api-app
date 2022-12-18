import React from 'react';

export default function Button({ filter, filterRef }) {
  return (
    <button ref={filterRef} type="button" className="btn" onClick={() => { filter(filterRef); }}>Favorite</button>
  );
}
