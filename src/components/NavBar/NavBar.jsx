import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar({ theme, setTheme }) {
  const location = useLocation();
  const themeHandler = () => {
    (theme === 'light') ? setTheme('dark') : setTheme('light');
  };
  return (
    <div className="nav">
      <div className="logo"><img src="./icons/rm-logo.png" alt="logo" height="100%" /></div>
      <ul>
        {location.pathname === '/favorite' && (
        <li>
          <Link to="/">Home</Link>
        </li>
        )}
        {location.pathname === '/' && (
        <li>
          <Link to="favorite">Favorite</Link>
        </li>
        )}
      </ul>
      <div className="theme-toggler">
        {theme === 'dark' ? <span><img src="./icons/sun.png" width="25px" alt="" /></span> : <span />}
        <div className="theme-switch" onClick={themeHandler}><div className="toggler-circle" /></div>
        {theme === 'light' ? <span><img src="./icons/moon.png" width="25px" alt="" /></span> : <span />}
      </div>
    </div>
  );
}
