import React from 'react';
import Search from './components/Search.js';
import Navbar from './components/Navbar.js';
import History from './components/History.js';
import { Route, Routes } from 'react-router-dom';
import Word from './components/word.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path='History' element={<History/>} />
        <Route path="/word/:word" element={<Word />} />
      </Routes>
      
    </div>
  );
}

export default App;
