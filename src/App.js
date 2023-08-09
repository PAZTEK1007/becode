import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/becode" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/becode/about" element={<About />} />
      <Route path="/becode/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;