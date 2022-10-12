import React from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function OneCard({ character }) {
  return (
    <div className="card">
      <Header character={character} />
      <Body character={character} />
      <Footer character={character} />
    </div>
  );
}
