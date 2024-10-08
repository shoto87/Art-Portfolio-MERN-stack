import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/js/Home';
import ArtGallery from './pages/js/ArtGallery';
import ArtDetails from './pages/js/ArtDetails';
import About from './pages/js/About';
import Contact from './pages/js/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/art/:id" element={<ArtDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
