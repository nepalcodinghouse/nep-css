import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Showcase from './pages/Showcase';
import Blog from './pages/Blog';
import Creator from './pages/Creator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNoFound from './pages/PageNoFound';
import './nep-framework.min.css'
import "nep-css-framework";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/showcase' element={<Showcase />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/creator' element={<Creator />} />
          <Route path='*' element={<PageNoFound />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
  );
}

export default App;