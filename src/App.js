import './App.css';
import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Favorite from './pages/Favorite/Favorite';
import Main from './pages/Main/Main';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
          <Route path="/" element={<Main />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
