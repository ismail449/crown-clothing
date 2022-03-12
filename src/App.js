import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const Hats = ()=>{
  return (
    <div>This is the Hats component</div>
  );
}

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='hats' element={<Hats />} />
    </Routes>
  );
}

export default App;
