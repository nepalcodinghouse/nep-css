import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Showcase from './pages/Showcase';
import Blog from './pages/Blog';
import GettingStarted from './pages/GettingStarted';
import FlexboxGuide from './pages/FlexboxGuide';
import Creator from './pages/Creator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNoFound from './pages/PageNoFound';

function App() {
  return ( 
    <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/showcase' element={<Showcase />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/getting-started-with-nep-css-framework' element={<GettingStarted />} />
          <Route path='/mastering-css-flexbox-layouts' element={<FlexboxGuide />} />
          <Route path='/creator' element={<Creator />} />
          <Route path='*' element={<PageNoFound />} />
        </Routes>
        <Fotter />
        <ScrollToTopButton />
      </BrowserRouter>
  );
}

export default App;