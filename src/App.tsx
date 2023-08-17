import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cart" element={ <ShoppingCart /> } />
    </Routes>

  );
}

export default App;
