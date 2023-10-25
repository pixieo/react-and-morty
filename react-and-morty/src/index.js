import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationList';

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/characters" element={<CharacterList />}></Route>
      <Route path="/locations" element={<LocationList />}></Route>
    </Routes>
  </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </StrictMode>
);