import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/views/HomePage';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
