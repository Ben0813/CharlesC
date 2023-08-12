import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/views/HomePage';
import ServicesPage from './components/views/ServicesPage';
import ContactPage from './components/views/ContactPage';
import GalleryPage from './components/views/GalleryPage';
import PrivacyPolicyPage from './components/views/PrivacyPolicyPage';
import TermsOfSalePage from './components/views/TermsOfSalePage';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage /> } />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/Terms-of-sale" element={<TermsOfSalePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
