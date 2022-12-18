import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default function Layout({ theme, setTheme, setFiltered }) {
  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} setFiltered={setFiltered} />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
