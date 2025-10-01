import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Movielist from './components/Movielist';
import MovieCard from './components/MovieCard';
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Movielist/>
      
      
    </div>
  );
};

export default App
