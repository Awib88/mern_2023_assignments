import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <legend>Add a new product</legend>
        <Routes>
          <Route path="/" element={<NewProduct />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
