import { Route, Routes } from 'react-router-dom';
import './App.css';

import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
